import { Link } from 'react-router-dom';
import './index.scss';
import useTitle from '../../hooks/useTitle';
import { noMatchData } from './data';

const NoMatch = () => {
   useTitle(noMatchData.title);
   return (
	  <div className="no-match">
		 <span className="no-match__icon">{noMatchData.icon}</span>
	  	 <span className="no-match__error">{noMatchData.error}</span>
	     <div className="no-match__message-header">
			<span className="no-match__message-header__header">{noMatchData.header}</span> 
			<span className="no-match__message-header__text text-secondary">{noMatchData.text}</span> 
	  	 </div>
	  	 <span className="no-match__message-body">{noMatchData.message}</span> 
	  	 <span className="no-match__link">
	  	 	<Link className="no-match__link-text" to="/">{noMatchData.link_text}</Link>
	  	 </span> 
	  </div>
   );
};

export default NoMatch;
