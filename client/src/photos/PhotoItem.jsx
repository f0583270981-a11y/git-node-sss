import Axios from "axios"
import { useState } from "react";
import EditPhoto from "./EditPhoto";
import { Card, CardContent, CardActions, Typography, Button, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const PhotoItem = ({ photo, fethPhoto }) => {
    const [editPhoto, setEditPhoto] = useState(false)

    const handelDelet = async () => {
        await Axios.delete(`http://localhost:4070/api/photo/${photo._id}`)
        fethPhoto()
    }

    return (
        <Card sx={{ 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "space-between",
            boxShadow: 3,
            borderRadius: "8px",
            overflow: "hidden"
        }}>
            {/* הצגת התמונה בגודל המבוקש והאסתטי */}
            <img 
                src={`/${photo.imageUrl}.JPG`} 
                alt={photo.title}
                style={{ 
                    width: "100%",      
                    height: "180px",     // גובה מותאם לכרטיסייה
                    objectFit: "cover",  
                    display: "block"
                }}
            />

            <CardContent sx={{ pb: 1 }}>
                <Typography variant="h6" component="div" fontWeight="bold" noWrap>
                    {photo.title}
                </Typography>
            </CardContent>
            
            <CardActions sx={{ justifyContent: "space-between", px: 2, pb: 2 }}>
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
                    onClick={() => { setEditPhoto(!editPhoto) }}
                >
                    ערוך
                </Button>
            </CardActions>

            {editPhoto && (
                <Box sx={{ p: 2, borderTop: "1px solid #e0e0e0", backgroundColor: "#fafafa" }}>
                    <EditPhoto photo={photo} fethPhoto={fethPhoto} setEditPhoto={setEditPhoto} />
                </Box>
            )}
        </Card>
    )
}

export default PhotoItem
// import Axios from "axios"
// import { data } from "react-router-dom"
// import Navigate from "../common/Navigate"
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import PhotoList from "./PhotoList";
// import EditPhoto from "./EditPhoto";
// const PhotoItem = ({ photo, fethPhoto }) => {

//     const navigate = useNavigate()
//     const [editPhoto, setEditPhoto] = useState(false)

//     const handelDelet = async () => {
//         const { data } = await Axios.delete(`http://localhost:4070/api/photo/${photo._id}`)
//         fethPhoto()
//     }




//     return (
//         <>

//             <h3>title:{photo.title}</h3>
//             <img src={`/${photo.imageUrl}.JPG`} alt={photo.title}style={{ 
//                     width: "200px",      // רוחב קבוע וקטן
//                     height: "150px",     // גובה קבוע
//                     objectFit: "cover",  // חותך את התמונה בצורה אסתטית במקום למתוח אותה
//                     borderRadius: "6px", // פינות מעוגלות לתמונה
//                     display: "block",
//                     marginBottom: "12px"
//                 }}/>
//             <button onClick={handelDelet} className="delet-btn">Delete</button>
//             <button onClick={() => { setEditPhoto(!editPhoto) }}>Edit </button>
//             {editPhoto && <EditPhoto photo={photo} fethPhoto={fethPhoto} setEditPhoto={setEditPhoto} />}

//         </>
//     )
// }

// export default PhotoItem


