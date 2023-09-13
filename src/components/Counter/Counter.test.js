import { fireEvent, render, screen } from '@testing-library/react';
import Counter from './Counter';

describe('Counter', () => {
	const getComponent = (params) => <Counter {...params} />;

	test('should render', () => {
		render(getComponent());
		expect(screen.getByText(/clicked times: 0/i)).toBeInTheDocument();
	});

	test.only('display new counter after one click', () => {
		render(getComponent());
		const button = screen.getByText(/click/i, { selector: 'button' });
		fireEvent.click(button);

		expect(screen.getByText(/clicked times: 1/i)).toBeInTheDocument();
	});
});
