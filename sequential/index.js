const { taskOne, taskTwo } = require('./tasks')

async function main() {
    try {
        console.time('Testing time')
        // const results = await Promise.all([taskOne(), taskTwo()])
        
        const valueOne = await taskOne()
        const valueTwo = await taskTwo()
        console.timeEnd('Testing time');

        // console.log('Task one returned', results[0]);
        // console.log('Task two returned', results[1]);

        console.log('Task two returned', valueOne);
        console.log('Task two returned', valueTwo);
    } catch (error) {
        console.log(error);
    }
}

main()