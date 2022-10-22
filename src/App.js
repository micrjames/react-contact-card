import { footer_text, social_icons } from "./data";
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
	        <Route index element={<Home />} />
			<Route path="*" element={<NoMatch />} />
	     </Route>
	  </Routes>
	  </>
  );
}

export default App;
