import { execSync } from 'node:child_process';
import { readdirSync, statSync, mkdirSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const repoRoot = join(__dirname, '..');

function findProtoFiles(dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    const stats = statSync(fullPath);
    if (stats.isDirectory()) {
      files.push(...findProtoFiles(fullPath));
    } else if (fullPath.endsWith('.proto')) {
      files.push(relative(repoRoot, fullPath));
    }
  }
  return files;
}

const protoFiles = findProtoFiles(join(repoRoot, 'proto'));
if (protoFiles.length === 0) {
  console.error('No .proto files found in proto/');
  process.exit(1);
}

const pluginPath = join(repoRoot, 'node_modules', '.bin', 'protoc-gen-ts_proto');
const protocBin = join(repoRoot, 'node_modules', '.bin', 'grpc_tools_node_protoc');

const options = [
  'outputServices=grpc-js',
  'env=node',
  'esModuleInterop=true',
  'useOptionals=messages',
  'returnObservable=false',
  'outputPartialMethods=false',
  'oneof=unions',
  'lowerCaseServiceMethods=true',
  'importSuffix=.js',
].join(',');

const command = [
  protocBin,
  `--plugin=protoc-gen-ts_proto=${pluginPath}`,
  `--ts_proto_out=./generated/nodejs`,
  `--ts_proto_opt=${options}`,
  '-I ./proto',
  ...protoFiles,
].join(' ');

console.log(`Generating TypeScript stubs from ${String(protoFiles.length)} proto files...`);
console.log(command);

mkdirSync(join(repoRoot, 'generated', 'nodejs'), { recursive: true });

try {
  execSync(command, { cwd: repoRoot, stdio: 'inherit' });
  console.log('Proto generation complete.');
} catch (error) {
  console.error('Proto generation failed:', error);
  process.exit(1);
}
