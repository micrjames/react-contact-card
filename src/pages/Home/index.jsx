import "./index.scss";

import useTitle from "../../hooks/useTitle";
import useUser from "../../hooks/useUser";

const Home = ({ data }) => {
    useTitle(data.title);
    const [user] = useUser({});
    const results = user.results;
    
    const domain = data.site.link.split(".");
    const siteName = domain[1];
    return (
	   <>
		    {results && results.map(result => (
			   <>
				  <figure key={result.login.uuid}>
					 <img src={result.picture.large} alt="contact card info" />
					 <figcaption>{result.name.first}&nbsp;{result.name.last}</figcaption>
				  </figure>
				  <p id="role">{data.role}</p>
			      <p id="site">
			         <span>{siteName}</span>
			         &nbsp;
					 <a
					   href={data.site.link}
					   target="_blank"
					   rel="noreferrer"
					>    
						{data.site.text}
					</a>
			     </p>
			     <div id="btn-group">
					<a href={results.email} class="btn">
					   <span>{data.contact_btns.email.icon}</span>
					   <span>{data.contact_btns.email.text}</span>
					</a>
					<a href={data.contact_btns.linkedin.link} class="btn">
					   <span>{data.contact_btns.linkedin.icon}</span>
					   <span>{data.contact_btns.linkedin.text}</span>
					</a>
			     </div>
			     <div id="paras">
					{data.paras.map(para => (
					   <p key={para.id} class="para">
						  <p id="para-hdr">{para.hdr}</p>
						  <p id="para-body">{para.body}</p>
					   </p>
					))}
			     </div>
			   </>
			))}
	   </>
	);
};

export default Home;
