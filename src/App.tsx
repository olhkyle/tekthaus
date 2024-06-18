import { Global } from '@emotion/react';
import GlobalStyle from './styles/GlobalStyle';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import route from './constants/route';
import { AdminHome, Home, Login, SignUp } from './pages';
import { AdminLayout, Layout } from './components';

const router = createBrowserRouter([
	{
		path: route.USER.HOME,
		element: <Layout />,
		children: [
			{ index: true, element: <Home /> },
			{ path: route.SIGNUP, element: <SignUp /> },
			{ path: route.LOGIN, element: <Login /> },
		],
	},
	{
		path: route.ADMIN.HOME,
		element: <AdminLayout />,
		children: [{ index: true, element: <AdminHome /> }],
	},
]);

const App = () => {
	return (
		<>
			<Global styles={GlobalStyle} />
			<RouterProvider router={router} />
		</>
	);
};

export default App;
