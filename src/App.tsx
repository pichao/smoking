

import { Routes, Route } from "react-router-dom";
import Index from './pages/index/index';
import About from './pages/about'
import NoMatch from './pages/noMatch'



export default function App() {
  return (
    <div>
     {/* <div>{process.env.PUBLIC_URL}</div> */}

     
      <Routes>
      <Route path="/" element={<Index />} />

          <Route path="/about" element={<About />} />
          {/* <Route path="dashboard" element={<Dashboard />} /> */}

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<Index />} />
          {/* </Route> */}
      </Routes>
    </div>
  );
}

