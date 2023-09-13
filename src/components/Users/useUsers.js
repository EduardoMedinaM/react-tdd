import { useQuery } from 'react-query';
import { getUsers } from '../../apis/Users';

const useUsers = () => {
	const { isLoading, error, data } = useQuery('getUsers', getUsers);

	return {
		isLoading,
		error,
		users: data,
	};
};

export default useUsers;
