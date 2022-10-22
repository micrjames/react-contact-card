import { Link } from "react-router-dom";
import Icon from "./Icon";

const LinkedIcon = ({ which, style, path }) => {
    return (
	   <Link to={path}>
	   		<Icon which={which} style={style} />
	   </Link>
	);
};

export default LinkedIcon;
