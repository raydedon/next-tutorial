import React from 'react';
import logo from './hellofresh-logo.svg';
import './header.scss';
import Link from 'next/link'

const Header = ({favourites = {}}) => (
	<header className="App-header">
		<Link href="/">
			<a  className="link-to-home">
				<img src={logo} className="App-logo" alt="logo" />
			</a>
		</Link>
		<i className="fas fa-heart total-favourite">
            &nbsp;&nbsp;{Object.keys(favourites).length}
		</i>
	</header>
);

export default Header;
