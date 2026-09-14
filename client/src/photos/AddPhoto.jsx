import Axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Container, TextField, Button, Box, Typography, Paper } from "@mui/material"
import SaveIcon from "@mui/icons-material/Save";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const AddPhoto = () => {
    const [title, setTitle] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const naviage = useNavigate()

    const submitFrom = async (e) => {
        e.preventDefault()
        await Axios.post("http://localhost:4070/api/photo/", { title, imageUrl })
        naviage("/photo")
    }

    return (
        <Container maxWidth="sm" sx={{ mt: 6, dir: "rtl" }}>
            <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
                <Typography variant="h5" component="h2" gutterBottom fontWeight="bold" color="primary" sx={{ mb: 3 }}>
                    הוספת תמונה חדשה
                </Typography>
                
                <Box component="form" onSubmit={submitFrom} sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                    <TextField
                        label="כותרת התמונה"
                        variant="outlined"
                        fullWidth
                        required
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                    
                    <TextField
                        label="מספר תמונה (imageUrl)"
                        variant="outlined"
                        fullWidth
                        required
                        value={imageUrl}
                        placeholder="למשל: 1"
                        onChange={(e) => { setImageUrl(e.target.value) }}
                    />
                    
                    <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end", mt: 1 }}>
                        <Button 
                            variant="outlined" 
                            color="inherit" 
                            startIcon={<ArrowBackIcon />}
                            onClick={() => naviage("/photo")}
                        >
                            חזור
                        </Button>
                        <Button 
                            type="submit" 
                            variant="contained" 
                            color="primary" 
                            startIcon={<SaveIcon />}
                            disabled={title === "" || imageUrl === ""}
                        >
                            שלח
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Container>
    )
}

export default AddPhoto

// import Axios from "axios"
// import { useState } from "react"
// import { useNavigate } from "react-router-dom"

// const AddPhoto = () => {

//     const [title, setTitle] = useState("")
//     const [imageUrl, setImageUrl] = useState("")

//     const naviage = useNavigate()

//     const submitFrom = async (e) => {
//         e.preventDefault()
//         const { data } = await Axios.post("http://localhost:4070/api/photo/", { title, imageUrl })
//         naviage("/photo")
//     }

//     return (
//         <>
//             <form onSubmit={submitFrom}>
//                 <input value={title} placeholder="urlImg" onChange={(e) => { setTitle(e.target.value) }} />
//                 <input value={imageUrl } placeholder="pleas wirte imageUrl " onChange={(e) => { setImageUrl(e.target.value) }} />
//                 <button disabled={title === ""} type="submit">Send</button>
//             </form>


//         </>
//     )
// }

// export default AddPhoto