describe('Matchers', () => {
	test('toBe', () => {
		// This is a matcher to do an assertion
		expect(true).toBe(true);
	});

	test('toEqual', () => {
		//toEqual for objects or arrays

		const data = { one: 1 };
		expect(data).toEqual({ one: 1 });

		const anArray = [1, 2];
		expect(anArray).toEqual([1, 2]);
	});

	test('not', () => {
		expect(true).not.toBe(false);
	});

	test('string', () => {
		expect('team').not.toMatch(/I/);
	});

	test('throw', () => {});
});
