import { useState } from "react"
import Axios from "axios"
import { useNavigate } from "react-router-dom"
import { Container, TextField, Button, Box, Typography, Paper } from "@mui/material"
import SaveIcon from "@mui/icons-material/Save";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const AddArticle = () => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [aouthor, setAouthor] = useState("")
    const naviage = useNavigate()

    const submitFrom = async (e) => {
        e.preventDefault()
        await Axios.post("http://localhost:4070/api/article/", { title, body, aouthor })
        naviage("/article")
    }

    return (
        <Container maxWidth="sm" sx={{ mt: 6, dir: "rtl" }}>
            <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
                <Typography variant="h5" component="h2" gutterBottom fontWeight="bold" color="primary" sx={{ mb: 3 }}>
                    הוספת מאמר חדש
                </Typography>
                
                <Box component="form" onSubmit={submitFrom} sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                    <TextField
                        label="כותרת המאמר"
                        variant="outlined"
                        fullWidth
                        required
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                    
                    <TextField
                        label="תוכן המאמר"
                        variant="outlined"
                        fullWidth
                        required
                        multiline
                        rows={5} // נותן תיבה גדולה ונוחה לתוכן
                        value={body}
                        onChange={(e) => { setBody(e.target.value) }}
                    />
                    
                    <TextField
                        label="שם הכותב"
                        variant="outlined"
                        fullWidth
                        value={aouthor}
                        onChange={(e) => { setAouthor(e.target.value) }}
                    />
                    
                    <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end", mt: 1 }}>
                        <Button 
                            variant="outlined" 
                            color="inherit" 
                            startIcon={<ArrowBackIcon />}
                            onClick={() => naviage("/article")}
                        >
                            חזור
                        </Button>
                        <Button 
                            type="submit" 
                            variant="contained" 
                            color="primary" 
                            startIcon={<SaveIcon />}
                            disabled={title === "" || body === ""}
                        >
                            שלח
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Container>
    )
}

export default AddArticle
// import { useState } from "react"
// import Axios from "axios"
// import { useNavigate } from "react-router-dom"

// const AddArticle = () => {

//     const [title, setTitle] = useState("")
//     const [body, setBody] = useState("")
//     const [aouthor, setAouthor] = useState("")
//     const naviage = useNavigate()

//     const submitFrom = async (e) => {
//         e.preventDefault()
//         const { data } = await Axios.post("http://localhost:4070/api/article/", { title, body, aouthor })
//         naviage("/article")
//     }



//     return (

//         <>
//             <form onSubmit={submitFrom}>
//                 <input value={title} placeholder="Pleas add title" required={true} onChange={(e) => { setTitle(e.target.value) }} />
//                 <input value={body} placeholder="Pleas to whirte your article" required={true} onChange={(e) => { setBody(e.target.value) }} />
//                 <input value={aouthor} placeholder="Pleas to whirte your name" onChange={(e) => { setAouthor(e.target.value) }} />
//                 <button  type="submit">Send</button>
//             </form>
//         </>
//     )
// }

// export default AddArticle




