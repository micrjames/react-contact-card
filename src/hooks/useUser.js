import { useState, useEffect } from 'react';
import { fetchData } from '../fetchData';

const useUser = userObj => {
	const [user, setUser] = useState(userObj);

	useEffect(() => {
		(async () => {
			const userFromServer = await fetchData("https://randomuser.me/api/?inc=login,name,email,picture&noinfo");
			setUser(userFromServer);
		})();
	}, []);

	return [user];
};

export default useUser;
