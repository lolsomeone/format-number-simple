module.exports = number => {
	if (!number) {
		throw new Error('Argument number is required');
	}

	if (/^[0-9]*$/.test(number) === false) {
		throw new Error('"' + number + '" is not a valid number');
	}

	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
