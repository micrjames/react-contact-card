import Icon from "./Icon";
import LinkedIcon from "./LinkedIcon";

const SiteIcon = ({ icon, link }) => {
    return (
	    link ?
	   		<LinkedIcon which={icon.which} style={icon.style} path={icon.path} /> :
	   		<Icon which={icon.which} style={icon.style} />
	);
};

export default SiteIcon;
