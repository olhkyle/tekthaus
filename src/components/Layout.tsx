import styled from '@emotion/styled';
import { PiUpload } from 'react-icons/pi';
import route from '../constants/route';
import Flex from './common/Flex';

const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;
	padding: var(--padding-base-vertical) var(--padding-base-horizontal);
	max-width: 1280px;
	height: var(--nav-height);
	z-index: var(--nav-index);

	@media screen and (min-width: 640px) {
	}
`;

const Logo = styled.h1`
	display: inline-flex;
	justify-content: center;
	align-items: center;

	a {
		height: 24px;

		img {
			display: block;
			width: 100%;
			height: 100%;
		}
	}
`;

const UserProfile = styled.div``;

const Layout = () => {
	return (
		<div>
			<Nav>
				<Flex gap="16px">
					<Logo>
						<a href={route.USER.HOME}>
							<img src="/logo_tekthaus_lg.svg" alt="big-logo" />
						</a>
					</Logo>
					<input type="text" placeholder="search" />
				</Flex>

				<div>
					<button>
						<PiUpload size={28} color={'var(--grey500)'} />
					</button>
					<UserProfile />
				</div>
			</Nav>
		</div>
	);
};

export default Layout;
