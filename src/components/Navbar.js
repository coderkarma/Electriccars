import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => {
	return (
		<nav className='navbar is-dark'>
			<div className='navbar-brand'>
				<Link to='/' className='navbar-item'>
					Electric Cars
				</Link>

				<div
					className='navbar-burger burger'
					data-target='navMenuColordark-example'
				>
					<span />
					<span />
					<span />
				</div>
			</div>

			<div id='navMenuColordark-example' className='navbar-menu'>
				<div className='navbar-start'>
					<Link className='navbar-item' to='/about/'>
						About
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
