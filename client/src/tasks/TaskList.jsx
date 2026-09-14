import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import TaskItem from "./TaskItem";
import { Container, Box, Typography, Fab, Grid, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AssignmentIcon from "@mui/icons-material/Assignment";

export default function TaskList() {
  const [tasks, setTasks] = useState([]); 
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // משיכת המשימות מהשרת
  const fethTasks = async () => {
    try {
      const { data } = await Axios.get("http://localhost:4070/api/task/");
      setTasks(data);
    } catch (error) {
      console.error("שגיאה בטעינת המשימות:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fethTasks();
  }, []);

  // סינון המשימות לפי שדה החיפוש
  const filteredTasks = tasks.filter((task) => {
    return task.name && task.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    /* שינוי ל-maxWidth="md" כדי שיהיה ממורכז בדיוק כמו דף המשתמשים */
    <Container maxWidth="md" sx={{ mt: 4, direction: "rtl" }}>
      
      {/* שורת כותרת וכפתור פלוס עגול (Fab) תואם למשתמשים */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
        <Typography variant="h4" component="h1" fontWeight="bold" color="primary">
          ניהול משימות
        </Typography>
        
        <Fab color="primary" component={Link} to="/tasks/add" aria-label="add task">
          <AddIcon />
        </Fab>
      </Box>

      {/* שדה חיפוש זהה לחלוטין */}
      <TextField 
        fullWidth 
        label="חיפוש משימה לפי שם..." 
        variant="outlined" 
        value={search}
        onChange={(e) => setSearch(e.target.value)} 
        sx={{ mb: 4 }}
      />

      {/* ניהול תצוגת התוכן */}
      {loading ? (
        <Typography variant="h5" align="center" sx={{ mt: 4 }}>
          טוען משימות...
        </Typography>
      ) : tasks.length === 0 ? (
        <Box 
          sx={{ 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            justifyContent: "center", 
            mt: 8,
            color: "text.secondary"
          }}
        >
          <AssignmentIcon sx={{ fontSize: 70, color: "#cbd5e0", mb: 2 }} />
          <Typography variant="h6" sx={{ fontWeight: "500", mb: 2 }}>
            אין אף משימה ברשימה שלך
          </Typography>
        </Box>
      ) : (
        /* גריד של 3 כרטיסיות בשורה (md={4}) שיוצר סימטריה מושלמת כמו בצילום המסך של המשתמשים */
        <Grid container spacing={3}>
          {filteredTasks.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item._id}>
              <TaskItem task={item} fethTasks={fethTasks} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}


// import { useEffect, useState } from "react"
// import Axios from "axios"
// import { Link } from "react-router-dom";
// import TaskItem from "./TaskItem";
// function TaskList() {

//   const [search, setSearch] = useState("")
//   const [tasks, setTasks] = useState([])

//   const fethTasks = async () => {//הפעולה מעדכנת את הרשימה 
//     const { data } = await Axios.get("http://localhost:4070/api/task/")
//     setTasks(data)
//   }
//   useEffect(() => {
//     fethTasks()
//   }, [])

//   if (tasks.length === 0) return <h1>Loading</h1>

//   const funcSearch = tasks.filter((tas) => {
//     return tas.name.includes(search)
//   })


//   return (
//     <>
//       <input type="text" placeholder="חיפוש" onChange={(e) => { setSearch(e.target.value) }} />

//       <div className="task-list">
//         <Link to="/tasks/add">Add new Task</Link>
//         {funcSearch.map((task, index) => {
//           return <TaskItem key={task._id} fethTasks={fethTasks} task={task} />
//         })}
//       </div>

//     </>

//   )

// }

// export default TaskList