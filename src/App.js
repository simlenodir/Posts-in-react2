import { Header } from "./components/header/header";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/home/home";
import { About } from "./components/pages/about/about";
import { Contact } from "./components/pages/contact/contact";
import { Error } from "./components/pages/error/error";
import { Posts } from "./components/pages/Posts/posts";
import { SinglePage } from "./components/pages/single-page";
export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/post/:id" element={<SinglePage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};
