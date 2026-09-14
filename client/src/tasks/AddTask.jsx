import { useState } from "react"
import Axios from "axios"
import { useNavigate } from "react-router-dom"
import { Container, TextField, Button, Box, Typography, Paper } from "@mui/material"
import SaveIcon from "@mui/icons-material/Save";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function AddTask() {
  const [name, setName] = useState("")
  const [tags, setTags] = useState("")
  const naviage = useNavigate()
  
  const submitFrom = async (e) => {
    e.preventDefault()
    await Axios.post("http://localhost:4070/api/task/", { name, tags })
    setName("")
    naviage("/tasks")
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 6, dir: "rtl" }}>
      <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h5" component="h2" gutterBottom fontWeight="bold" color="primary" sx={{ mb: 3 }}>
          יצירת משימה חדשה
        </Typography>
        
        <Box component="form" onSubmit={submitFrom} sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <TextField
            label="שם המשימה"
            variant="outlined"
            fullWidth
            required
            value={name}
            onChange={(e) => { setName(e.target.value) }}
          />
          
          <TextField
            label="תגיות"
            variant="outlined"
            fullWidth
            value={tags}
            onChange={(e) => { setTags(e.target.value) }}
          />
          
          <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end", mt: 1 }}>
            <Button 
              variant="outlined" 
              color="inherit" 
              startIcon={<ArrowBackIcon />}
              onClick={() => naviage("/tasks")}
            >
              חזור
            </Button>
            <Button 
              type="submit" 
              variant="contained" 
              color="primary" 
              startIcon={<SaveIcon />}
              disabled={name === ""}
            >
              שלח
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  )
}

export default AddTask



// import { useState } from "react"
// import Axios from "axios"
// import { useNavigate } from "react-router-dom"
// function AddTask() {
//   const [name, setName] = useState("")

//   const [tags,setTags]=useState("")

//   const naviage = useNavigate()
  
//   const submitFrom = async (e) => {
//     e.preventDefault()
//     const { data } = await Axios.post("http://localhost:4070/api/task/", { name,tags })
//     setName("")
//     naviage("/tasks")
//   }

//   return (
//     <>
//       <form onSubmit={submitFrom}>
//         <input value={name} placeholder="Pleas add name" required={true} onChange={(e) => { setName(e.target.value) }} />
//         <input value={tags} placeholder="Pleas to whirte Tag" onChange={(e)=>{setTags(e.target.value)}}/>
//         <button disabled={name === ""} type="submit">Send</button>

//       </form>
//     </>
//   )
// }

// export default AddTask