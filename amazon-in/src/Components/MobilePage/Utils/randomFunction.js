const generateRandomNumber = (num1, num2) => {
	return Math.floor(Math.random() * (num2 - num1 + 1) + num1);
};

for (let i = 1; i < 15; i++) {
	console.log(generateRandomNumber(50, 1000));
}
