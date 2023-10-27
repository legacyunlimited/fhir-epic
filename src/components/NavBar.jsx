import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<div className='container-fluid Header'>
			<header className='d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom border-dark'>
				<a
					href='/'
					className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none'
				>
					<img src='Assets/Logo.webp' alt='Logo' id='Logo' />
				</a>
				<ul className='nav nav-underline align-content-center'>
					<li className='nav-item'>
						<Link to='/' className='nav-link active'>
							Home
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/about' className='nav-link active'>
							About
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/contact' className='nav-link active'>
							Contact
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/survey' className='nav-link active'>
							Survey
						</Link>
					</li>
					<li className='nav-item nav-item--speical'>
						<Link to='/login' className='nav-link nav-link--speical'>
							Login
						</Link>
					</li>
					<li className='nav-item nav-item--speical'>
						<Link to='/physician' className='nav-link nav-link--speical'>
							Physician-Login
						</Link>
					</li>

				</ul>
			</header>
		</div>
	);
};

export default NavBar;
