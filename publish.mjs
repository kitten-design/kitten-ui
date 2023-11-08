import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';

const version = '0.0.14';
const paths = [
  'packages/kitten-core',
  'packages/kitten-core/node_modules/@kitten-ui/styles',
  'packages/kitten-dataset',
  'packages/kitten-hooks',
  'packages/kitten-utils',
];
const packages = ['@kitten-ui/hooks', '@kitten-ui/core', '@kitten-ui/utils', '@kitten-ui/dataset'];
const dynamicPackages = ['@kitten-ui/styles'];
const __dirname = process.cwd();

const publish = (p) => {
  const packagesPath = path.join(__dirname, p);
  process.chdir(packagesPath);

  exec('npm publish', (error, stdout, stderr) => {
    console.log(`======= ${p.split('/@')[1] || p.split('es/')[1]} ======= `);
    if (error) {
      console.error('Error:\n', error);
      return;
    }
    stdout && console.log(stdout);
    stderr && console.error(stderr);
  });
};

const modify = (path, fn = (v) => v) => {
  const data = fs.readFileSync(path, 'utf8');
  const jsonData = fn(JSON.parse(data));
  fs.writeFileSync(path, `${JSON.stringify(jsonData, null, 2)}\n`, 'utf8');
};

const publishPre = ({ version, isDev }) => {
  const changeDep = (key, v) => {
    const dep = v[key] || {};
    Object.keys(dep).map((k) => {
      if (packages.includes(k)) {
        dep[k] = isDev ? 'workspace:^' : `^${version}`;
      }
      if (dynamicPackages.includes(k)) {
        dep[k] = `^${version}`;
      }
    });
  };
  const fn = (v) => {
    v.version = version;
    v.module && (v.module = isDev ? 'src/index.ts' : 'lib/index.js');
    v.types && (v.types = isDev ? 'src/index.ts' : 'lib/index.d.ts');
    changeDep('devDependencies', v);
    changeDep('peerDependencies', v);
    changeDep('dependencies', v);
    return v;
  };
  modify('package.json', fn);
  paths.forEach((p) => {
    modify(path.join(p, 'package.json'), fn);
  });
  if (!isDev) {
    paths.forEach((p) => {
      publish(p);
    });
  }
};

publishPre({ version, isDev: process.argv.includes('--dev') });
