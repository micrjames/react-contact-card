import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../';

const Layout = ({ links, icons, site_icon, footer_text }) => {
    return (
	   	<div id="app-container">
			{site_icon && <Header links={links} icon={site_icon} />}
	   		<main>
			   <Outlet />
	   		</main>
		    <Footer icons={icons} text={footer_text} />
	    </div>
	);
};

export default Layout;
