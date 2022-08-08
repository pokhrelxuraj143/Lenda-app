import {BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./My Component/Blog";
import Content from "./My Component/Content";
import Feature from "./My Component/Feature";
import Overwiew from "./My Component/Overwiew";
import Pricing from "./My Component/Pricing";
import Contact from "./My Component/Contact";

function App() {
  return (
  <>
<BrowserRouter>
<Routes>
<Route path="/" element={<Content/>}/>
<Route path="/overview" element={<Overwiew/>}/>
<Route path="/feature" element={<Feature/>}/>
<Route path="/price" element={<Pricing/>}/>
<Route path="/blog" element={<Blog/>}/>
<Route path="/contact" element={<Contact/>}/>
</Routes>
</BrowserRouter>
  </>
  );
}

export default App;
