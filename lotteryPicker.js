const generateNumber = num => Math.floor(Math.random() * num);

const lottery = {
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    luckyReading: ["No Luck!", "Bad Luck!", "OK Luck!", "Good Luck!", "Amazing Luck!"],
    advice: ["Definitely buy a ticket", "Not today", "Maybe tomorrow", "Save your money", "Start thinking about what you're going to buy"]
}

// generate 6 numbers
let numberOutput = [];

for (let i = 0; i < 6; i++) {
   let number = numberOutput.push(' ' + generateNumber(lottery.numbers.length))

    while (numberOutput.includes(number)) {
        number = numberOutput.push(' ' + generateNumber(lottery.numbers.length))
    }


    // console.log(numberOutput)
}

let output = []

for (let item in lottery) {
    let randomItem = generateNumber(lottery[item].length)

    switch (item) {
        case 'numbers':
            output.push(`Your numbers are: ${numberOutput}.`)
            break
        case 'luckyReading':
            output.push(`Your luck rating is: ${lottery[item][randomItem]}.`)
            break
        case 'advice':
            output.push(`What does the computer think: "${lottery[item][randomItem]}".`)
            break
        default:
            output.push(`Not enough information gathered.`)
    }

    
}
console.log(output)