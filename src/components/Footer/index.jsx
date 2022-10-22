import './index.scss';

const Footer = ({ text, icons }) => {
	return (
		<footer>
	   		<div className="footer-content">
	            {icons &&
	   			<div className="footer-content__social-icon">
				   {icons.map(icon => (
					  <a
                          key ={icon.id}
                          href={icon.link}
                          target="_blank"
                          rel="noreferrer"
                          className="footer-content__social-icon__link"
                       >    
                           {icon.icon}
                       </a>
                    ))}
	   			</div>
				}
				{text && <div className="footer-content__signature">
					 &copy;{text}
	   			</div>
				}
			</div>
		</footer>
	);
};

export default Footer;
