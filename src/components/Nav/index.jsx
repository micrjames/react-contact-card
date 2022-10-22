import { useState } from 'react';
import { Link } from 'react-router-dom';
import usePath from '../../hooks/usePath';
import PropTypes from 'prop-types';
import './index.scss';

const Nav = ({ links }) => {
    const [showMenu, setShowMenu] = useState(false);
    const [whichPath] = usePath('/');
    const toggleMenu = () => {
	   setShowMenu(!showMenu);
	};
	return (
	   <>
	    <div className="menu-btn" onClick={toggleMenu}>
	    	<span className={`menu-btn__burger ${showMenu ? 'open' : ''}`}></span>
	    </div>
		<nav className={`nav ${showMenu ? 'open' : ''}`}>
			<ul className={`menu-nav ${showMenu ? 'open' : ''}`}>
				{links.map(link => (
					<li key={link.id} className={`menu-nav__item ${showMenu ? 'open' : ''} ${whichPath===link.path ? 'active' : ''}`}>
						<Link to={link.path} onClick={toggleMenu} className="menu-nav__link">
						  <span>{link.text}</span>
						</Link>
					</li>
				))}	
			</ul>
		</nav>
	   </>
	);
};

Nav.propTypes = {
	path: PropTypes.string,
	links: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		path: PropTypes.string, 
		text: PropTypes.string,
		icon: PropTypes.element 
	})).isRequired
};

export default Nav;
