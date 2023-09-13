describe('setup teardown', () => {
	beforeAll(() => {
		console.log('beforeAll');
	});

	beforeEach(() => {
		console.log('beforeEach');
	});

	afterAll(() => {
		console.log('afterAll');
	});

	afterEach(() => {
		console.log('afterEach');
	});

	test('example 1', () => {
		expect(true).toBe(true);
	});
});
