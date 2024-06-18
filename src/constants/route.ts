const route = {
	USER: {
		HOME: '/',
	},
	ADMIN: {
		HOME: '/admin',
	},
	SIGNUP: '/signup',
	LOGIN: '/login',
	MYPAGE: '/:id',
} as const;

export default route;
