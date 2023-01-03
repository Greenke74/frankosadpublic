import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { NavLink, Link } from "react-router-dom";
import { navLinks } from '../../services/nav-routes-service';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

import './header.scss';

const Header = () => {
	const mainSettings = useSelector(state => state.mainSettings);
	return (
		<header className='header'>
			<div className='navWrapper'>
				<nav className='nav' >
					<Link className='siteName' to='/'>{mainSettings.siteName}</Link>
					<div className='navLinks'>
						{(navLinks).map(elem =>
							<NavLink className='navLink' to={elem.to} key={elem.to}>{elem.title}</NavLink>
						)}
					</div>
					<div className='socialLinks'>
						{mainSettings?.mediaLinks?.instagramUrl &&
							<a href={mainSettings?.mediaLinks?.instagramUrl ?? ''} target={'_blank'}><InstagramIcon className='socialLink' /></a>}
						{mainSettings?.mediaLinks?.facebookUrl &&
							<a href={mainSettings?.mediaLinks?.facebookUrl ?? ''} target={'_blank'}><FacebookIcon className='socialLink' /></a>}
					</div>
				</nav>
			</div>
		</header>
	)
}

export default Header;