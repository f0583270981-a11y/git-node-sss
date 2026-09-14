import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import { TextField, Button, Box } from "@mui/material"
import DoneIcon from "@mui/icons-material/Done";

const EditTask = ({ task, fethTasks, setEdit }) => {
    const naviage = useNavigate()
    const [name, setName] = useState(task.name)
    const [tags, setTags] = useState(task.tags)
    
    const submitFrom = async (e) => {
        e.preventDefault()
        await axios.put("http://localhost:4070/api/task/", { _id: task._id, name, tags })
        fethTasks()
        setEdit(false)
        naviage("/tasks")
    }

    return (
        <Box component="form" onSubmit={submitFrom} sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
            <TextField 
                size="small"
                label="עדכן שם משימה"
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                fullWidth
            />
            <TextField 
                size="small"
                label="עדכן תגיות"
                value={tags} 
                onChange={(e) => setTags(e.target.value)} 
                fullWidth
            />
            <Box sx={{ display: "flex", gap: 1, justifyContent: "flex-end" }}>
                <Button size="small" variant="text" color="inherit" onClick={() => setEdit(false)}>
                    ביטול
                </Button>
                <Button size="small" type="submit" variant="contained" color="primary" startIcon={<DoneIcon />}>
                    עדכן
                </Button>
            </Box>
        </Box>
    )
}

export default EditTask

// import { useNavigate } from "react-router-dom"
// import Navigate from "../common/Navigate"

// import axios from "axios"
// import { useState } from "react"
// const EditTask = ({ task, fethTasks, setEdit }) => {
//     //console.log(task)
//     const naviage = useNavigate()
//     const [name, setName] = useState(task.name)
//     const [tags, setTags] = useState(task.tags)
//     const submitFrom = async (e) => {
//         e.preventDefault()
//         await axios.put("http://localhost:4070/api/task/", { _id: task._id, name, tags })
//         // setName("")
//         // setTags("")
//         fethTasks()
//         setEdit(false)
//         naviage("/tasks")

//     }


//     return (
//         <>
//             <form onSubmit={submitFrom} >
//                 <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//                 <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} />
//                 <button type="submit">send</button>

//             </form>

//         </>

//     )
// }

// export default EditTask