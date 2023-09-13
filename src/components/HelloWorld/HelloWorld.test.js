import { render, screen } from '@testing-library/react';
import React from 'react';

import HelloWorld from './HelloWorld';

describe('HelloWorld', () => {
	test('should render', () => {
		render(<HelloWorld />);
		//screen.debug();
		const textResult = screen.getByText(/hello world/i);
		screen.debug(textResult);
		expect(textResult).toBeInTheDocument();
	});
});
