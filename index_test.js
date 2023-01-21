const assert = require('assert');


describe('Sum', () => {
    it('checks if the sum is equal to 7', () => {
        // Setup
        let sum;

        // Exercise
        sum = 3 + 4;

        // verify
        assert.equal(sum, 7);
    })
})