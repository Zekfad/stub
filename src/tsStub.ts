/**
 * Get `'foo'` or `'bar'`.
 * @param foo Whatever to return `'foo'` instead of `'bar'`.
 * @returns `'foo'` or `'bar'`.
 */
function stub(foo = false): string {
	return foo
		? 'foo'
		: 'bar';
}

export default stub;
