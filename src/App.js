import { social_icons, home_data } from "./data";
import { Layout } from "./components";
import { Home, NoMatch } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
	  <>
	  <Routes>
		 <Route path="/" element={<Layout
			   icons={social_icons}
		 />}>
	        <Route index element={<Home data={home_data} />} />
			<Route path="*" element={<NoMatch />} />
	     </Route>
	  </Routes>
	  </>
  );
}

export default App;
