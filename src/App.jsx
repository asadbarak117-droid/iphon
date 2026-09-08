import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Loader from "./component/load";
import Navbar from "./component/nav";

import Home from "./component/home";
import Iphone from "./component/iph";
import Mac from "./component/mac";
import Tools from "./component/tools";
import Guides from "./component/guides";
import About from "./component/about";
import Footer from "./component/footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/iph" element={<Iphone />} />
        <Route path="/mac" element={<Mac />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
