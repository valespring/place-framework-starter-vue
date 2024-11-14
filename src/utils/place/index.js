// TODO: In progress
import { BASE, CONVERSIONS } from '@v/place';

function equatePercentage(param) {
	return param / 100;
}

function findStringMatch(userParam) {
	const matchedKey = Object.keys(CONVERSIONS.PLURAL).filter((key) => {
		return key === userParam;
	})[0];

	if (!matchedKey) {
		return;
	}

	return CONVERSIONS.PLURAL[matchedKey];
}

function findNumericMatch(userParam) {
	const fractionResult = userParam / viewportColumns;
	const isColumnCount = userParam.toString().length === 1;

	const namedConversion = Object.keys(CONVERSIONS.BASE).filter((key) => {
		const value = CONVERSIONS.BASE[key];
		const result = isColumnCount ? fractionResult : equatePercentage(userParam);

		return value === result;
	});

	return namedConversion.length ? namedConversion[0] : `${userParam}${BASE.SEP}${viewportColumns}`;
}

function convertDeclaration(userParam, viewportColumns) {
	// Number ? Determine whether or not a percentage or column count
	if (typeof userParam === Number) {
		return findNumericMatch(userParam);
	// String ? Find Fractional Conversion
	} else {
		return findStringMatch(userParam);
	}
}

export {
	convertDeclaration
};