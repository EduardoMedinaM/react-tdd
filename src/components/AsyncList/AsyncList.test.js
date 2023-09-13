import { fireEvent, render, screen } from '@testing-library/react';
import AsyncList from './AsyncList';

describe('Counter', () => {
	const getComponent = (params) => <AsyncList {...params} />;

	test('should render', async () => {
		render(getComponent());
	});
});
