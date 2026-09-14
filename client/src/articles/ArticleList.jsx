import { useEffect, useState } from "react"
import Axios from "axios"
import { Link } from "react-router-dom";
import ArticleItem from "./ArticleItem";
import { Container, TextField, Box, Fab, Typography, Grid, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DescriptionIcon from "@mui/icons-material/Description"; // אייקון מתאים למצב שאין מאמרים

const ArticleList = () => {
    const [search, setSearch] = useState("")
    const [article, setArticle] = useState([])
    const [loading, setLoading] = useState(true) // מצב טעינה מהשרת

    const fethArticle = async () => {
        try {
            const { data } = await Axios.get("http://localhost:4070/api/article/")
            setArticle(data)
        } catch (error) {
            console.error("שגיאה בטעינת המאמרים:", error)
        } finally {
            setLoading(false) // סיום מצב הטעינה
        }
    }
    
    useEffect(() => {
        fethArticle()
    }, [])

    const funcSearch = article.filter((art) => {
        return art.title.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <Container maxWidth="md" sx={{ mt: 4, direction: "rtl" }}>
            {/* כותרת וכפתור פלוס מעוצב - תמיד מוצגים! */}
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
                <Typography variant="h4" component="h1" fontWeight="bold" color="primary">
                    מאמרים וכתבות
                </Typography>
                
                <Fab color="primary" component={Link} to="/article/add" aria-label="add article">
                    <AddIcon />
                </Fab>
            </Box>

            {/* שדה חיפוש MUI */}
            <TextField 
                fullWidth 
                label="חיפוש מאמר לפי כותרת..." 
                variant="outlined" 
                value={search}
                onChange={(e) => { setSearch(e.target.value) }} 
                sx={{ mb: 4 }}
            />

            {/* ניהול תצוגת התוכן הדינמית */}
            {loading ? (
                // 1. מצב טעינה אקטיבית מהשרת
                <Typography variant="h5" align="center" sx={{ mt: 4 }}>
                    טוען מאמרים...
                </Typography>
            ) : article.length === 0 ? (
                // 2. מצב שבו הטעינה הסתיימה ואין אף מאמר במערכת
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
                    <DescriptionIcon sx={{ fontSize: 70, color: "#cbd5e0", mb: 2 }} />
                    <Typography variant="h6" sx={{ fontWeight: "500", mb: 2 }}>
                        אין אף מאמר ברשימה כרגע
                    </Typography>
                    
                    {/* כפתור הוספה ייעודי במרכז המסך */}
                    <Button 
                        component={Link} 
                        to="/article/add" 
                        variant="contained" 
                        color="primary"
                        startIcon={<AddIcon sx={{ ml: 1, mr: -0.5 }} />}
                        sx={{ borderRadius: "8px", fontWeight: "600", px: 3, py: 1 }}
                    >
                        הוסף מאמר ראשון
                    </Button>
                </Box>
            ) : (
                // 3. הצגת גריד המאמרים המסונן
                <Grid container spacing={3}>
                    {funcSearch.map((item) => {
                        return (
                            <Grid item xs={12} sm={6} key={item._id}>
                                <ArticleItem fethArticle={fethArticle} article={item} />
                            </Grid>
                        )
                    })}
                </Grid>
            )}
        </Container>
    )
}

export default ArticleList
// import { useEffect, useState } from "react"
// import Axios from "axios"
// import { Link } from "react-router-dom";
// import ArticleItem from "./ArticleItem";
// const ArticleList = () => {
//     const [search, setSearch] = useState("")
//     const [article, setArticle] = useState([])

//     const fethArticle = async () => {//הפעולה מעדכנת את הרשימה 
//         const { data } = await Axios.get("http://localhost:4070/api/article/")
//         setArticle(data)
//     }
//     useEffect(() => {
//         fethArticle()
//     }, [])


//     if (article.length === 0) return <h1>Loading</h1>

//     const funcSearch = article.filter((art)=> {
//         return art.title.includes(search)
//     })

//     return (
//         <>
//             <input type="text" placeholder="חיפוש" onChange={(e) => {setSearch(e.target.value)}} />
//             <div>
//                 <Link to="/article/add">Add new article</Link>
//                 {funcSearch.map((article, index) => {
//                     return < ArticleItem key={article._id} fethArticle={fethArticle} article={article} />
//                 })}


//             </div>




//         </>
//     )
// }

// export default ArticleList





















