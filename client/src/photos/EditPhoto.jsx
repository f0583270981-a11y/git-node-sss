import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import { TextField, Button, Box } from "@mui/material"
import DoneIcon from "@mui/icons-material/Done";

const EditPhoto = ({ photo, fethPhoto, setEditPhoto }) => {
    const naviage = useNavigate()
    const [title, setTitle] = useState(photo?.title || "")
    const [imageUrl, setImageUrl] = useState(photo?.imageUrl || "")

    const submitFrom = async (e) => {
        e.preventDefault()
        await axios.put("http://localhost:4070/api/photo/", { id: photo._id, title, imageUrl })
        fethPhoto()
        setEditPhoto(false)
        naviage("/photo")
    }

    return (
        <Box component="form" onSubmit={submitFrom} sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
            <TextField 
                size="small"
                label="עדכן כותרת"
                required
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                fullWidth
            />
            <TextField 
                size="small"
                label="עדכן מספר תמונה"
                required
                value={imageUrl} 
                onChange={(e) => setImageUrl(e.target.value)} 
                fullWidth
            />
            <Box sx={{ display: "flex", gap: 1, justifyContent: "flex-end" }}>
                <Button size="small" variant="text" color="inherit" onClick={() => setEditPhoto(false)}>
                    ביטול
                </Button>
                <Button size="small" type="submit" variant="contained" color="primary" startIcon={<DoneIcon />}>
                    עדכן
                </Button>
            </Box>
        </Box>
    )
}

export default EditPhoto

// import { data, useNavigate } from "react-router-dom"
// import Navigate from "../common/Navigate"
// import axios from "axios"
// import { useState } from "react"
// const EditPhoto = ({ photo, fethPhoto, setEditPhoto }) => {
//  const naviage = useNavigate()
// const [title, setTitle] = useState(photo?.title ||"")
// const [imageUrl, setImageUrl] = useState(photo?.imageUrl ||"")


//     const submitFrom = async (e) => {
//         e.preventDefault()
//         const { data } = await axios.put("http://localhost:4070/api/photo/", {id: photo._id, title, imageUrl })
//         // setName("")
//         // setTags("")
//         fethPhoto()
//         setEditPhoto(false)
//         naviage("/photo")
//     }

//   return (
// <>
//   <form onSubmit={submitFrom} >
//                      <input value={title} placeholder="urlImg" onChange={(e) => { setTitle(e.target.value) }} />
//                 <input value={imageUrl} placeholder="pleas wirte imageUrl " onChange={(e) => { setImageUrl(e.target.value) }} />
    
//                 <button type="submit">send</button>
//             </form>

// </>  )
// }

// export default EditPhoto




