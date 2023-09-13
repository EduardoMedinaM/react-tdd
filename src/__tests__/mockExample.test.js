import { getUsername, saveUsername } from '../helpers/users';
import { storage } from '../lib/storage';

jest.mock('../lib/storage');

describe('Mocking', () => {
	test('simple mocking', () => {
		const mocked = jest.fn().mockReturnValueOnce(true);
		const mockResult = mocked();

		expect(mocked).toHaveBeenCalled();
		expect(mockResult).toBe(true);
	});

	test('module mocking', () => {
		const username = 'john doe';

		saveUsername(username);
		expect(storage.save).toHaveBeenCalled();
		expect(storage.save).toHaveBeenCalledWith({
			key: 'username',
			value: username,
		});
	});
});
