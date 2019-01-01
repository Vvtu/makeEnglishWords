const fs = require('fs');
// const https = require('https');

const { DEBUG_LOG, LOG, isValidPath } = require('./lib');

const argv = require('yargs')
	.version('1.0.0')
	.usage('Usage: $0 --file <filename>')
	.example('$ $0 -v........................show version')
	.help('help')
	.demandOption([ 'file' ])
	.describe('file', '<filename>')
	.default('debug', false)
	.alias('f', 'file')
	.alias('h', 'help')
	.alias('v', 'version');
argv.argv;
global.DEBUG_LOG_LEVEL = argv.argv.debug;

DEBUG_LOG('argv.argv = ', JSON.stringify(argv.argv, null, 4));
LOG('----------------------------------------------------------');

switch (argv.argv.action) {
	case 'file': {
		// to check this action please run:
		// node Hw3/utils/stream.js --debug -a reverse <Hw3/utils/data/aaa.txt >Hw3/utils/data/bbb.txt
		reverseAction();
		break;
	}

	default:
		LOG('Error: Wrong command = ', argv.argv.action);
}
