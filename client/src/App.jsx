import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import TaskList from "./tasks/TaskList"
import AddTask from "./tasks/AddTask"
import Layout from "./common/Layout"
import "./App.css";
import AddArticle from "./Articles/AddArticle";
import ArticleItem from "./Articles/ArticleItem";
import ArticleList from "./Articles/ArticleList";
import AddUser from "./users/AddUser";
import UserList from "./users/UserList";
import PhotoList from "./Photos/PhotoList";
import AddPhoto from "./Photos/AddPhoto";

function App() {


  return (
    <>
      <div className='App'>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              {/* <Route index element={<h1>home page</h1>} /> */}
              <Route path="photo"element={<PhotoList/>}/>
              <Route path="photo/add"element={<AddPhoto/>}/>
              <Route path="/article" element={<ArticleList />} />
              <Route path="/article/add" element={<AddArticle />} />
              <Route path="/user" element={<UserList />} />
              <Route path="/user/add" element={<AddUser />} />
              <Route path="/tasks" element={<TaskList />} />
              <Route path="/tasks/add" element={<AddTask />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
