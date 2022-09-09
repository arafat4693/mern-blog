import { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import About from "./pages/About"
import Bookmark from "./pages/Bookmark"
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
import { addUser, getUsers } from "./redux/userSlice"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { getArticles } from "./redux/articleSlice"
import { AppDispatch } from "./redux/store"
import Article from "./pages/Article"
import EditArticle from "./pages/EditArticle"

function App() {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    async function getUser() {
      try {
        const res = await axios.get("/auth/login/success")
        if (res.data) dispatch(addUser(res.data))
      } catch (err) {
        console.log(err)
      }
    }

    getUser()
    dispatch(getUsers())
    dispatch(getArticles())
  }, [dispatch])

  return (
    <div className="App" id="app">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="search/:type/:query" element={<Search />} />
            <Route path="author/:authorId" element={<Author />} />
            <Route path="write" element={<Write />} />
            <Route path="comments" element={<Comments />} />
            <Route path="bookmark" element={<Bookmark />} />
            <Route path="authors" element={<Authors />} />
            <Route path="article/:slug" element={<Article />} />
            <Route path="edit/:slug" element={<EditArticle />} />
          </Route>
        </Routes>
      </Router>
      <ToastContainer position="top-right" newestOnTop />
    </div>
  )
}

export default App
