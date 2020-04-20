const { join } = require('path');
const { writeFile } = require('fs');
const { performance } = require('perf_hooks');
const mkdirp = require('mkdirp');

global.window = {};

const TEST_CASE = 'test';
const FILENAME = `${TEST_CASE}.benchmark.txt`;
const OUT_PATH = join(__dirname, '/out');
const LOAD = 500;
const TEST_COUNT = 1000;

const iterate = count => {
  for (let i = 0; i < count; ++i) {
    // ADD TEST FUNCTIONS HERE
  }
};

const test = (testCount, load) => {
  const start = performance.now();

  for (let i = 0; i < testCount; ++i) {
    iterate(load);
  }

  const end = performance.now();
  const elapsedTime = end - start;
  const timePerOp = elapsedTime / (testCount * load);

  return { elapsedTime, timePerOp };
};

const { elapsedTime, timePerOp } = test(TEST_COUNT, LOAD);

const data = new Uint8Array(
  Buffer.from(`
test: ${TEST_CASE}
load: ${LOAD}
iterations: ${TEST_COUNT}
test time: ${elapsedTime / 1000}s
time per iteration (avg): ${elapsedTime / 1000 / TEST_COUNT}s
time per operation (avg): ${timePerOp}ms
`)
);

console.group('RESULTS');
console.log('load:', LOAD);
console.log('iterations:', TEST_COUNT);
console.log(`test time: ${elapsedTime / 1000}s`);
console.log(`time per iteration (avg): ${elapsedTime / 1000 / TEST_COUNT}s`);
console.log(`time per operation (avg): ${timePerOp}ms`);
const made = mkdirp.sync(OUT_PATH);
writeFile(`${OUT_PATH}/${FILENAME}`, data, error => {
  if (error) {
    throw error;
  }
  console.log(`results saved to ${FILENAME}`);
  console.groupEnd();
});
