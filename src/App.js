const fs = require('fs');
// const https = require('https');

const { DEBUG_LOG, LOG, isValidPath } = require('./lib');

const argv = require('yargs')
	.version('1.0.0')
	.usage('Usage: $0 --file <filename>')
	.example('$ $0 -v........................show version')
	.choices('action', [ 'help', 'version' ])
	.help('help')
	.demandOption([ 'file' ])
	.describe('file', '<filename>')
	.default('debug', false)
	.alias('f', 'file')
	.alias('h', 'help')
	.alias('v', 'version')
	.alias('d', 'debug')
	.default('debug', false);
argv.argv;
global.DEBUG_LOG_LEVEL = argv.argv.debug;

DEBUG_LOG('argv.argv = ', JSON.stringify(argv.argv, null, 4));
LOG('----------------------------------------------------------');

if (argv.argv.file) {
	// to check this action please run:
	// node Hw3/utils/stream.js --debug -a reverse <Hw3/utils/data/aaa.txt >Hw3/utils/data/bbb.txt
	const buffer = fs.readFileSync(argv.argv.file);
	const str = buffer.toString();
	DEBUG_LOG('action = "file". Input file content =\n', str);

	const lines = str.split('\n').filter((line) => line !== '');
	DEBUG_LOG('lines = \n', JSON.stringify(lines));
	const halfLength = (lines.length / 2) | 0;
	const newLines = [];
	for (let i = 0; i < halfLength; i += 1) {
		const eng = lines[i].trim();
		if (eng.indexOf('"') !== -1) {
			throw new Error(
				'Dablequote charracters are forbidden!\nLine #' + (i + 1) + '\nLine = ' + eng,
			);
		}
		const rus = lines[i + halfLength].trim();
		const pair = '{\n  rus: {js|' + rus + '|js},\n  eng: "' + eng + '",\n},\n';
		newLines.push(pair);
	}
	DEBUG_LOG('newLines =\n', newLines);
	DEBUG_LOG('----------------------------------------------------------');

	process.stdout.write('\n\n\n');
	process.stdout.write(newLines.join(''));
	process.stdout.write('\n\n\n');
	LOG('Conversion was successfully completed!');
}
