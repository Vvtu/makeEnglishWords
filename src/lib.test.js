// export function outputFile(filePath) {
// 	return str; // fs.createReadStream();
// }

// export function convertFromFile(filePath) {
// 	return str;
// }

// export function convertToFile(filePath) {
// 	return str;
// }

const { reverseString, transform, csvCustomParser2 } = require('./lib');

const t1 = '1234567';
test('reverseString ' + t1, () => {
	expect(reverseString(t1)).toBe('7654321');
});

const t2 = 'abCDef 12  */? ()';
test('transform ' + t2, () => {
	expect(transform(t2)).toBe('ABCDEF 12  */? ()');
});

const t3 = [ 123, 456, 'asda', true, false ];
let t33 = JSON.stringify(t3);
t33 = t33.slice(1, t33.length - 1);
t33 = t33 + '\n' + t33;
test('csvCustomParser2 ' + t33, () => {
	expect(csvCustomParser2(t33)).toEqual([ t3, t3 ]);
});

// test('csvCustomParser2 ' + 'aaa, bbb', () => {
// 	expect(csvCustomParser2('aaa, bbb')).toThrowErrorMatchingSnapshot();
// });
