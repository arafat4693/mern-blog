import { useEffect } from "react"
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
import { useDispatch } from "react-redux"
import axios from "./utils/axiosConfig"
import { addUser } from "./redux/userSlice"
import { ToastContainer } from "react-toastify"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    async function getUser() {
      const res = await axios.get("/auth/login/success")
      if (res.data) dispatch(addUser(res.data))
    }

    getUser()
  }, [dispatch])

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
      <ToastContainer position="top-right" newestOnTop />
    </div>
  )
}

export default App
