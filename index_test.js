const assert = require('assert');


describe('Sum', () => {
    it('checks if the sum is equal to 7', () => {
        // Setup
        let sum;

        // Exercise
        sum = 8 + 4;

        // verify
        assert.strictEqual(sum, 8);
    })
})