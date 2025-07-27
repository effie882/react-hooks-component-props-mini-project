import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

import { blogName, blogAbout, posts } from "../data/blog";

function App() {
  return (
    <div className="App">
      <Header name={blogName} />
      <About image={blogAbout.image} about={blogAbout.about} />
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;
