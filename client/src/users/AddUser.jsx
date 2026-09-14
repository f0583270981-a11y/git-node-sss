import { useState } from "react"
import AxiosInstance from "axios"
import { useNavigate } from "react-router-dom"
import { Container, TextField, Button, Box, Typography, Paper } from "@mui/material"
import SaveIcon from "@mui/icons-material/Save";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const AddUser = () => {
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")

  const naviage = useNavigate()

  const submitFrom = async (e) => {
    e.preventDefault()
    await AxiosInstance.post("http://localhost:4070/api/user/", { name, username, email, address, phone })
    setName("")
    naviage("/user")
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 6, dir: "rtl" }}>
      <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h5" component="h2" gutterBottom fontWeight="bold" color="primary" sx={{ mb: 3 }}>
          הוספת משתמש חדש
        </Typography>
        
        <Box component="form" onSubmit={submitFrom} sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
          <TextField
            label="שם מלא"
            variant="outlined"
            fullWidth
            required
            value={name}
            onChange={(e) => { setName(e.target.value) }}
          />
          
          <TextField
            label="שם משתמש"
            variant="outlined"
            fullWidth
            required
            value={username}
            onChange={(e) => { setUsername(e.target.value) }}
          />
          
          <TextField
            label="אימייל"
            variant="outlined"
            fullWidth
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
          />
          
          <TextField
            label="כתובת"
            variant="outlined"
            fullWidth
            value={address}
            onChange={(e) => { setAddress(e.target.value) }}
          />
          
          <TextField
            label="מספר טלפון"
            variant="outlined"
            fullWidth
            required
            value={phone}
            onChange={(e) => { setPhone(e.target.value) }}
          />
          
          <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end", mt: 1 }}>
            <Button 
              variant="outlined" 
              color="inherit" 
              startIcon={<ArrowBackIcon />}
              onClick={() => naviage("/user")}
            >
              חזור
            </Button>
            <Button 
              type="submit" 
              variant="contained" 
              color="primary" 
              startIcon={<SaveIcon />}
              disabled={name === "" || username === "" || phone === ""}
            >
              שלח
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  )
}

export default AddUser


// import { useState } from "react"
// import Axios from "axios"
// import { useNavigate } from "react-router-dom"
// const AddUser = () => {

//   const [name, setName] = useState("")
//   const [username, setUsername] = useState("")
//   const [email, setEmail] = useState("")
//   const [address, setAddress] = useState("")
//   const [phone, setPhone] = useState("")

//   const naviage = useNavigate()

//   const submitFrom = async (e) => {
//     e.preventDefault()
//     const { data } = await Axios.post("http://localhost:4070/api/user/", { name,username,email,address,phone})
//     setName("")
//     naviage("/user")
//   }

//   return (
//     <>


//       <form onSubmit={submitFrom}>
//         <input value={name} placeholder="Pleas add name" required={true} onChange={(e) => { setName(e.target.value) }} />
//         <input value={username} placeholder="Pleas to whirte username" required={true}  onChange={(e) => { setUsername(e.target.value) }} />
//         <input value={email} placeholder="Pleas to whirte email" onChange={(e) => { setEmail(e.target.value) }} />
//         <input value={address} placeholder="Pleas to whirte address" onChange={(e) => { setAddress(e.target.value) }} />
//         <input value={phone} placeholder="Pleas to whirte phone" required={true}  onChange={(e) => { setPhone(e.target.value) }} />
//         <button disabled={name === ""} type="submit">Send</button>
//       </form>
//     </>
//   )
// }

// export default AddUser
