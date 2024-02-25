import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
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
        <Body />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
