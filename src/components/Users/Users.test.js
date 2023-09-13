import { render, screen } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from "axios-mock-adapter";
import 'setimmediate';
import { reactQueryWrapper as ReactQueryWrapper } from '../../__tests__/utils/wrappers';
import Users from './Users';

const axiosMock = new MockAdapter(axios);

afterEach(()=>{
   axiosMock.reset();
});

const getComponent = (params) => (
	<ReactQueryWrapper>
		<Users {...params} />
	</ReactQueryWrapper>
);

describe('Users', () => {
   
	it('should render', async () => {
		const expectedResult = [
			{
				id: 1,
				name: 'Leanne Graham',
				username: 'Bret',
				email: 'Sincere@april.biz',
			},
		];

		const baseUrl = 'https://jsonplaceholder.typicode.com/users';
		axiosMock.onGet(baseUrl).reply(200, expectedResult);
		render(getComponent());
		
		expect(await screen.findByText(/Leanne Graham/i)).toBeInTheDocument();
		expect(await screen.findByText(/Sincere@april.biz/i)).toBeInTheDocument();
	});
});