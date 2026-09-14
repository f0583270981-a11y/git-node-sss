import { NavLink } from "react-router-dom"

const Navigate = () => {
    return (<div className="nav">

        <NavLink to="/">Home page</NavLink>
        <NavLink to="/tasks">Task</NavLink>
        <NavLink to="/tasks/add">Add new task</NavLink>
        <NavLink to="/article/add">Add new article</NavLink>
        <NavLink to="/user/add">add new user</NavLink>
        <NavLink to="/photo/add">add new Photo</NavLink>
        <NavLink to="/user">User</NavLink>
        <NavLink to="/article">Article</NavLink>
        <NavLink to="/photo">Photo</NavLink>




    </div>
    )
}

export default Navigate