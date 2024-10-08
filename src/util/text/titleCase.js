const titleCase = (words) => {
	return words
		.split(" ")
		.map((word) => {
			return word[0].toUpperCase() + word.substring(1);
		})
		.join(" ");
};

export default titleCase;
