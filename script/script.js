
function checkNumber(num) {
    return new Promise((resolve, reject) => {
        if (num > 10) {
            resolve("Число більше 10");
        } else {
            reject("Число менше або дорівнює 10");
        }
    });
}


document.getElementById('checkNumberBtn').addEventListener('click', () => {
    const num = Math.floor(Math.random() * 20); 
    checkNumber(num)
        .then(message => {
            document.getElementById('result').innerText = `Число: ${num}. ${message}`;
        })
        .catch(error => {
            document.getElementById('result').innerText = `Число: ${num}. ${error}`;
        });
});


function randomNumber() {
    return new Promise(resolve => {
        const time = Math.floor(Math.random() * 3000) + 1000; 
        setTimeout(() => {
            const randomNum = Math.floor(Math.random() * 100) + 1; 
            resolve({ randomNum, time });
        }, time);
    });
}


document.getElementById('randomNumberBtn').addEventListener('click', () => {
    randomNumber().then(({ randomNum, time }) => {
        document.getElementById('result').innerText = 
            `Випадкове число: ${randomNum}. Час виконання: ${time} мс.`;
    });
});
