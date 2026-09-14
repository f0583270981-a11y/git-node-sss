import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import { TextField, Button, Box } from "@mui/material"
import DoneIcon from "@mui/icons-material/Done";

const EditUser = ({ user, fethUser, setEditUser }) => {
    const naviage = useNavigate()
    const [name, setName] = useState(user?.name || "")
    const [username, setUsername] = useState(user?.username || user?.userName || "")
    const [email, setEmail] = useState(user?.email || "")
    const [address, setAddress] = useState(user?.address || "")
    const [phone, setPhone] = useState(user?.phone || "")

    const submitFrom = async (e) => {
        e.preventDefault()
        await axios.put("http://localhost:4070/api/user/", { id: user._id, name, username, email, address, phone })
        fethUser()
        setEditUser(false)
        naviage("/user")
    }

    return (
        <Box component="form" onSubmit={submitFrom} sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
            <TextField 
                size="small"
                label="שם מלא"
                required
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                fullWidth
            />
            <TextField 
                size="small"
                label="שם משתמש"
                required
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                fullWidth
            />
            <TextField 
                size="small"
                label="אימייל"
                type="email"
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                fullWidth
            />
            <TextField 
                size="small"
                label="כתובת"
                value={address} 
                onChange={(e) => setAddress(e.target.value)} 
                fullWidth
            />
            <TextField 
                size="small"
                label="טלפון"
                required
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
                fullWidth
            />
            <Box sx={{ display: "flex", gap: 1, justifyContent: "flex-end" }}>
                <Button size="small" variant="text" color="inherit" onClick={() => setEditUser(false)}>
                    ביטול
                </Button>
                <Button size="small" type="submit" variant="contained" color="primary" startIcon={<DoneIcon />}>
                    עדכן
                </Button>
            </Box>
        </Box>
    )
}

export default EditUser


// import { data, useNavigate } from "react-router-dom"
// import Navigate from "../common/Navigate"
// import axios from "axios"
// import { useState } from "react"

// const EditUesr = ({ user, fethUser, setEditUser }) => {

//     const naviage = useNavigate()
// const [name, setName] = useState(user?.name || "")
// const [username, setUsername] = useState( user?.username || "")
// const [email, setEmail] = useState(user?.email || "")
// const [address, setAddress] = useState(user?.address || "")
// const [phone, setPhone] = useState(user?.phone || "")
//     const submitFrom = async (e) => {
//         e.preventDefault()
//         const { data } = await axios.put("http://localhost:4070/api/user/", {id: user._id, name, username, email, address, phone })
//         // setName("")
//         // setTags("")
//         fethUser()
//         setEditUser(false)
//         naviage("/user")
//     }

//     return (
//         <>
//             <form onSubmit={submitFrom} >
//                 <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//                 <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//                 <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
//                 <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />-
//                 <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
//                 <button type="submit">send</button>
//             </form>
//         </>
//     )
// }

// export default EditUesr
