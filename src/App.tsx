import Navbar from "./layout/Navbar";
import HeaderBar from "./layout/HeaderBar";
import { useState, useEffect } from "react";
import Home from "./components/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreatePost from "./components/pages/CreatePost";
import PostDetails from "./components/pages/PostDetails";
import NotFound from "./components/pages/NotFound";
import EditPost from "./components/pages/EditPost";
import { GlobalStyles } from "./components/styles/Global";

//calling it Router
function App() {
  //here ts inferres the type
  const [isBtnOpen, setIsBtnOpen] = useState(false);

  const toggleOpen = (): void => {
    setIsBtnOpen(!isBtnOpen);
  };

  useEffect(() => {
    // console.log("isBtnOpen App", isBtnOpen);
  }, [isBtnOpen]);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <div>
        <section className="menu_section">
          <HeaderBar isBtnOpen={isBtnOpen} toggleOpen={toggleOpen} />
          <Navbar isBtnOpen={isBtnOpen} toggleOpen={toggleOpen} />
        </section>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/posts/:post_id" element={<PostDetails />} />
            <Route path="/posts/edit/:post_id" element={<EditPost />} />

            {/* catch any other route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
