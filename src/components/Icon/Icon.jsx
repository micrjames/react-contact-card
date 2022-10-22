import { IconContext } from "react-icons";

const Icon = ({ which, style }) => {
    return (
	    <IconContext.Provider value={{ className: style }}>
	    	{which}
	    </IconContext.Provider>
	);
};

export default Icon;
