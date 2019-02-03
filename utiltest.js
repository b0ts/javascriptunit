const assert = require('assert');
const util = require('./utilities');
// Run the test from the command line via $ mocha utiltest.js

before(async () => {
  this.util = new util();
});

describe('Unit tests for utilities.js', () => {
  describe('#log(message)', () => {
    it('should create a log message', () => {
      this.util.log('Starting log test');
      const output = this.util.log('test test test');
      assert(output);
      this.util.log('Ending log Test');
    });
  });
  describe('#stringReverse(string)', () => {
    it('should return the string with characters reversed', () => {
      this.util.log('Starting stringReverse test');
      const input = 'The quick brown fox jumped over the stream.';
      const target = '.maerts eht revo depmuj xof nworb kciuq ehT';
      const output = this.util.stringReverse(input);
      this.util.log(`${input} \n\treversed = ${output}`);
      assert.equal(output, target);
      this.util.log('Ending stringReverse Test');
    });
  });
});
