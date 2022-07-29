import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import About from "./pages/About"
import Author from "./pages/Author"
import Authors from "./pages/Authors"
import Comments from "./pages/Comments"
import Contact from "./pages/Contact"

import Home from "./pages/Home"
import Layout from "./pages/Layout"
import Search from "./pages/Search"
import Write from "./pages/Write"

function App() {
  return (
    <div className="App" id="app">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="search" element={<Search />} />
            <Route path="author" element={<Author />} />
            <Route path="write" element={<Write />} />
            <Route path="comments" element={<Comments />} />
            <Route path="authors" element={<Authors />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
