const fs = require('fs');

function LOG() {
	const newArgs = [ 'LOG: ', ...arguments ];
	global.DEBUG_LOG_LEVEL >= 0 && console.log.apply(console, newArgs);
}

function DEBUG_LOG() {
	const newArgs = [ 'DEBUG_LOG: ', ...arguments ];
	global.DEBUG_LOG_LEVEL >= 1 && console.log.apply(console, newArgs);
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
	isValidPath,
};
