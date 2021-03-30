import { Album } from "./views/Album";
import { Content } from "./views/Content";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <div className="App">
      {windowWidth > 1050 && <Album />}
      {windowWidth <= 1050 ? (
        <Content useBackground={true} />
      ) : (
        <Content useBackground={false} />
      )}
    </div>
  );
}

export default App;
