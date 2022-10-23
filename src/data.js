import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiHashnode } from "react-icons/si";

const social_icons = [
	{id: 1, link: "https://www.github.com", icon: <FaGithub />},
	{id: 2, link: "https://www.hashnode.com", icon: <SiHashnode />}
];

const home_data = {
    title: "Contact Card",
    role: "Frontend Developer",
    site: {
	    text: "website",
	    link: "www.mrjDevs.com"
	},
    contact_btns: {
	   email: {
		   icon: <MdEmail />,
		   text: "Email"
	   },
	   linkedin: {
		   icon: <FaLinkedin />,
		   text: "Linkedin",
		   link: "www.linkedin.com"
	   }
	},
    paras: [
	   {
		  id: 1,
		  hdr: "About",
		  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At urna condimentum mattis pellentesque id nibh. Lorem ipsum dolor sit amet consectetur adipiscing elit duis."
	   },
	   {
		  id: 2,
		  hdr: "Interests",
		  body: "Lorem donec massa sapien faucibus et molestie. Mi in nulla posuere sollicitudin aliquam ultrices sagittis. Sit amet aliquam id diam maecenas ultricies. At augue eget arcu dictum varius duis at. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada."
	   }
	]
};

const footer_text = "mrjDevs 2021";

export { social_icons, footer_text, home_data };
