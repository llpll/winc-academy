// Utility functions
const isNotNull = (str) => {
	if (!str) {
		return false;
	}
	
	return str.length > 0 && typeof(str) === 'string'
}

const hasRightLength = (str) => str.length <= 9;

const hasUpperCaseCharacter = (str) => {
	let char;
	for (let i = 0; i < str.length; i++) {
		char = str.charAt(i);
		if (/^[A-Z]*$/.test(char)) {
				return true;
			}
	}
	
	return false;
};

const hasLowerCaseCharacter = (str) => {
	let char;
	for (let i = 0; i < str.length; i++) {
		char = str.charAt(i);
		if (/^[a-z]*$/.test(char)) {
				return true;
			}
	}
	
	return false;
}

const hasDigit = (str) => {
	let char;
	for (let i = 0; i < str.length; i++) {
		char = str.charAt(i);
		if (/^\d+$/.test(char)) {
				return true;
			}
	}
	
	return false;
};

const minimumConditionsReached = conditions => {
    // conditions is an array of booleans
    trueConditions = conditions.filter(bool => bool);
    return trueConditions.length >= 3;
};

// "Outer" function
const verifyPassword = password => {
    const conditions = [
        isNotNull(password),
        hasRightLength(password),
        hasUpperCaseCharacter(password),
        hasLowerCaseCharacter(password),
        hasDigit(password)
    ];
    const result =
        minimumConditionsReached(conditions) && hasLowerCaseCharacter(password);

    return result;
};

module.exports = {
    verifyPassword,
    hasRightLength,
    isNotNull,
    hasUpperCaseCharacter,
    hasLowerCaseCharacter,
    hasDigit,
    minimumConditionsReached
};