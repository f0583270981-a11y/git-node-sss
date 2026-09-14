import Axios from "axios"
import { useState } from "react";
import EditTask from "./EditTask";
import { Card, CardContent, CardActions, Typography, Button, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const TaskItem = ({ task, fethTasks }) => {
    const [edit, setEdit] = useState(false)

    const handelDelet = async () => {
        await Axios.delete(`http://localhost:4070/api/task/${task._id}`)
        fethTasks()
    }

    const handelComplete = async () => {
        await Axios.put("http://localhost:4070/api/task", {
            _id: task._id,
            name: task.name,
            complete: !task.complete
        })       
        fethTasks()
    }

    return (
        <Card sx={{ 
            minHeight: 160, 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "space-between",
            borderRight: task.complete ? "6px solid #2e7d32" : "6px solid #1976d2", // סימון סטטוס
            opacity: task.complete ? 0.6 : 1,
            boxShadow: 3
        }}>
            <CardContent>
                <Typography 
                    variant="h6" 
                    component="div" 
                    sx={{ textDecoration: task.complete ? "line-through" : "none", fontWeight: "bold" }}
                >
                    {task.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    תגיות: {task.tags || "אין"}
                </Typography>
            </CardContent>
            
            <CardActions sx={{ justifyContent: "space-between", px: 2, pb: 2, mt: "auto" }}>
                <Box sx={{ display: "flex", gap: 1 }}>
                    <Button 
                        size="small" 
                        color="error" 
                        startIcon={<DeleteIcon />} 
                        onClick={handelDelet}
                    >
                        מחק
                    </Button>
                    <Button 
                        size="small" 
                        color="primary" 
                        startIcon={<EditIcon />} 
                        onClick={() => { setEdit(!edit) }}
                    >
                        ערוך
                    </Button>
                </Box>
                
                <Button 
                    size="small" 
                    variant={task.complete ? "contained" : "outlined"}
                    color="success"
                    startIcon={<CheckCircleIcon />} 
                    onClick={handelComplete}
                    disabled={task.complete}
                >
                    {task.complete ? "בוצע":  "סיום"}
                </Button>
            </CardActions>

            {edit && (
                <Box sx={{ p: 2, borderTop: "1px solid #e0e0e0", backgroundColor: "#fafafa" }}>
                    <EditTask task={task} fethTasks={fethTasks} setEdit={setEdit} />
                </Box>
            )}
        </Card>
    )
}

export default TaskItem
// import Axios from "axios"
// import { data } from "react-router-dom"
// import AddTask from "./AddTask"
// import Navigate from "../common/Navigate"
// import { useNavigate } from "react-router-dom";
// import EditTask from "./EditTask";
// import { useState } from "react";
// const TaskItem = ({ task, fethTasks }) => {
//   const navigate = useNavigate()

  
//     const handelDelet = async () => {
//         const { data } = await Axios.delete(`http://localhost:4070/api/task/${task._id}`)
//         fethTasks()

//     }

//     const handelComplete = async () => {
//         const { data } = await Axios.put("http://localhost:4070/api/task", {
//             _id: task._id,
//             name: task.name,
//             complete: !task.complete
//         })       
//         fethTasks()
//     }

//     // const handelEdit = async () => {
//     //     const { data } = await Axios.put("http://localhost:4070/api/task", {
//     //         id: task._id,
//     //         name: task.name,
//     //         tags: task.tags
//     //     })
//         // navigate(`/task/add/}`);
    
//     //}

//     const[edit,setEdit]=useState(false)


//     return <div>
//         <h2>name:{task.name}</h2>
//         <h3>tags:{task.tags}</h3>
//         <button onClick={handelDelet} className="delet-btn">Delete</button>
//         <button onClick={()=>{setEdit(!edit)}}>Edit </button>
//         {edit&&<EditTask task={task} fethTasks={fethTasks} setEdit={setEdit}/>}
//         <button onClick={handelComplete} style={{ backgroundColor: task.complete ? "green" : "gray", color: "white" }}disabled={task.complete}>complete V</button>
//     </div>

// }

// export default TaskItem