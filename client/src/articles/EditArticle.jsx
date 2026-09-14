import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import { TextField, Button, Box } from "@mui/material"
import DoneIcon from "@mui/icons-material/Done";

const EditArticle = ({ article, fethArticle, setEditArticle }) => {
    const naviage = useNavigate()
    const [title, setTitle] = useState(article.title)
    const [body, setBody] = useState(article.body)
    const [aouthor, setAouthor] = useState(article.aouthor)

    const submitFrom = async (e) => {
        e.preventDefault()
        await axios.put("http://localhost:4070/api/article/", { id: article._id, title, body, aouthor })
        fethArticle()
        setEditArticle(false)
        naviage("/article")
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
                label="עדכן תוכן"
                required
                multiline
                rows={3}
                value={body} 
                onChange={(e) => setBody(e.target.value)} 
                fullWidth
            />
            <TextField 
                size="small"
                label="עדכן שם כותב"
                value={aouthor} 
                onChange={(e) => setAouthor(e.target.value)} 
                fullWidth
            />
            <Box sx={{ display: "flex", gap: 1, justifyContent: "flex-end" }}>
                <Button size="small" variant="text" color="inherit" onClick={() => setEditArticle(false)}>
                    ביטול
                </Button>
                <Button size="small" type="submit" variant="contained" color="primary" startIcon={<DoneIcon />}>
                    עדכן
                </Button>
            </Box>
        </Box>
    )
}

export default EditArticle
// import { data, useNavigate } from "react-router-dom"
// import Navigate from "../common/Navigate"
// import ArticleItem from "./ArticleItem"
// import axios from "axios"
// import { useState } from "react"
// const EditArticle = ({ article ,fethArticle, setEditArticle }) => {
//     const naviage = useNavigate()
//     const [title, setTitle] = useState(article.title)
//     const [body, setBody] = useState(article.body)
//     const [aouthor, setAouthor] = useState(article.aouthor)

//      const submitFrom = async (e) => {
//         e.preventDefault()
//       const {data}=  await axios.put("http://localhost:4070/api/article/", { id: article._id, title, body,aouthor })
//         // setName("")
//         // setTags("")
//         console.log("תשובת השרת:", data) // 👈 כאן תראה בדיוק מה חסר לשרת!
//         fethArticle()
//         setEditArticle(false)
//         naviage("/article")

//     }

//   return (
//    <>
   
//             <form onSubmit={submitFrom} >
//                 <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
//                 <input type="text" value={body} onChange={(e) => setBody(e.target.value)} />
//                 <input type="text" value={aouthor} onChange={(e) => setAouthor(e.target.value)} />
//                 <button type="submit">send</button>

//             </form>
//    </>
//   )
// }

// export default EditArticle













