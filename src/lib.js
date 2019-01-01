const fs = require('fs');

function LOG() {
	const newArgs = [ 'LOG: ', ...arguments ];
	global.DEBUG_LOG_LEVEL >= 0 && console.log.apply(console, newArgs);
}

function DEBUG_LOG() {
	const newArgs = [ 'DEBUG_LOG: ', ...arguments ];
	global.DEBUG_LOG_LEVEL >= 1 && console.log.apply(console, newArgs);
}

function reverseString(str) {
	return str.split('').reverse().join('');
}

function transform(str) {
	return str.toUpperCase();
}

function csvCustomParser2(data) {
	if (!data) {
		return [];
	}
	const lines = data.split('\n');
	const result = lines.map((oneLine, index) => {
		let lineArr;
		try {
			const aaa = '[' + oneLine + ']';
			lineArr = JSON.parse(aaa);
		} catch (e) {
			DEBUG_LOG('csvCustomParser2 failed on line ' + index + ' line = (' + oneLine + ')');
			throw new Error(
				'csvCustomParser2 failed at line ' +
					index +
					1 +
					'\nInvalid line = "' +
					oneLine +
					'"',
			);
		}

		return lineArr;
	});
	return result;
}

function isValidPath(path) {
	console.log('isValidPath = ', path);
	try {
		return fs.existsSync(path);
	} catch (e) {
		return false;
	}
}

module.exports = {
	DEBUG_LOG,
	LOG,
	csvCustomParser2,
	reverseString,
	transform,
	isValidPath,
};
