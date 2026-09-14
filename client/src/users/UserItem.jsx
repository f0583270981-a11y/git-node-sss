import Axios from "axios"
import { useState } from "react";
import EditUser from "./EditUesr"; // שים לב לשם הקובץ אצלך בפרויקט
import { Card, CardContent, CardActions, Typography, Button, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const UserItem = ({ user, fethUser }) => {
    const [editUser, setEditUser] = useState(false)

    const handelDelet = async () => {
        await Axios.delete(`http://localhost:4070/api/user/${user._id}`)
        fethUser()
    }

    return (
        <Card sx={{ 
            minHeight: 220, 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "space-between",
            borderRight: "6px solid #1976d2", // פס עיצוב כחול בצד ימין
            boxShadow: 3
        }}>
            <CardContent sx={{ display: "flex", flexDirection: "column", gap: 0.8 }}>
                <Typography variant="h6" component="div" fontWeight="bold" color="primary">
                    {user.name}
                </Typography>
                
                <Typography variant="body2" color="text.secondary">
                    <strong>שם משתמש:</strong> {user.username || user.userName}
                </Typography>
                
                <Typography variant="body2" color="text.secondary">
                    <strong>אימייל:</strong> {user.email || "לא צוין"}
                </Typography>
                
                <Typography variant="body2" color="text.secondary">
                    <strong>כתובת:</strong> {user.address || "לא צוין"}
                </Typography>
                
                <Typography variant="body2" color="text.secondary">
                    <strong>טלפון:</strong> {user.phone}
                </Typography>
            </CardContent>
            
            <CardActions sx={{ justifyContent: "flex-start", gap: 1, px: 2, pb: 2, mt: "auto" }}>
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
                    onClick={() => { setEditUser(!editUser) }}
                >
                    ערוך
                </Button>
            </CardActions>

            {editUser && (
                <Box sx={{ p: 2, borderTop: "1px solid #e0e0e0", backgroundColor: "#fafafa" }}>
                    <EditUser user={user} fethUser={fethUser} setEditUser={setEditUser} />
                </Box>
            )}
        </Card>
    )
}

export default UserItem



// import Axios from "axios"
// import { data } from "react-router-dom"
// import Navigate from "../common/Navigate"
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import EditUesr from "./EditUesr";


// const UserItem = ({user,fethUser}) => {

//   const navigate = useNavigate()

//   const handelDelet = async () => {
//         const { data } = await Axios.delete(`http://localhost:4070/api/user/${user._id}`)
//         fethUser()

//     }

//     const[editUser,setEditUser]=useState(false)

// return (
// <>
//     <div>
//         <h2>name:{user.name}</h2>
//         <h3>userName:{user.userName}</h3>
//         <h3>email:{user.email }</h3>
//         <h3>address:{user.address }</h3>
//         <h3>phone:{user.phone }</h3>

//         <button onClick={handelDelet} className="delet-btn">Delete</button>


//         <button onClick={()=>{setEditUser(!editUser)}}>Edit </button>

//         {editUser&&<EditUesr user={user} fethUser={fethUser} setEditUser={setEditUser}/>}
//     </div>




// </>

// )
// }

// export default UserItem
