const generateNumber = num => Math.floor(Math.random() * num);

const lottery = {
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    luckyReading: ["No Luck", "Bad Luck", "OK Luck", "Good Luck", "Amazing Luck"],
    advice: ["Definitely", "Not today", "Maybe tomorrow", "Save your money", "Start thinking about what you're going to buy"]
}

console.log(generateNumber(lottery.numbers.length));