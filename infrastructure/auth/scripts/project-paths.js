/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-var-requires */
const { readFile, writeFile, stat } = require('fs');
const { join } = require('path');
const { promisify } = require('util');

const root = join.bind(null, __dirname, '..', '..', '..');
const dist = root.bind(null, 'dist');
const auth = root.bind(null, 'infrastructure', 'auth');
const statFile = promisify(stat);
const read = promisify(readFile);
const write = promisify(writeFile);

module.exports = { root, dist, auth, statFile, read, write };
