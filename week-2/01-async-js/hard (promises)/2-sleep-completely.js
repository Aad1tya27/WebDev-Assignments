/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

async function sleep(milliseconds) {
    let x= await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, milliseconds);
    })
    return x;
}

module.exports = sleep;
