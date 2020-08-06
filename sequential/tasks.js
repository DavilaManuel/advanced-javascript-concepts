const util = require('util');
const { transcode } = require('buffer');
const sleep = util.promisify(setTimeout)

module.exports = {
    async taskOne () {
        try {
            // throw new Error('Ups! a problem')
            await sleep(4000)
            return 'First value'
        } catch (error) {
            console.log(error);
        }
    },

    async taskTwo () {
        try {
            await sleep(2000)
            return 'Second value'
        } catch (error) {
            console.log(error);
        }
    }
}