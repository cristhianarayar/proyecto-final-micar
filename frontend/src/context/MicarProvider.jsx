import { createContext, useState } from 'react';

export const MicarContext = createContext();

const MicarProvider = ({ children }) => {
	const [userSession, setUserSession] = useState({
		rut: '',
		role: '',
		id: '',
	});

	const [isLoggedIn, setisLoggedIn] = useState(false);

	const logIn = () => {
		setTimeout(() => {
			setisLoggedIn(true);

			setUserSession({
				rut: '123456789',
				role: 'admin',
				id: 1,
			});
		}, 2000);
	};

	const logOut = () => {
		setTimeout(() => {
			setisLoggedIn(false);
		}, 3000);
	};

	return (
		<>
			<MicarContext.Provider
				value={{ isLoggedIn, userSession, logOut, logIn }}
			>
				{children}
			</MicarContext.Provider>
		</>
	);
};

export default MicarProvider