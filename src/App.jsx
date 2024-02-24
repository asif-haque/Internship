import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Headings from "./components/Headings";
import Footer from "./components/Footer";

export default function App() {
  const mainRef = useRef();
  const [main, setmain] = useState();
  useEffect(() => {
    setmain(mainRef.current);
  }, []);

  return (
    <div>
      <header>
        <Navbar main={main} />
      </header>
      <main ref={mainRef} className="main">
        <Headings />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
