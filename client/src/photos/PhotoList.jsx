import { useEffect, useState } from "react"
import Axios from "axios"
import { Link } from "react-router-dom";
import PhotoItem from "./PhotoItem";
import { Container, TextField, Box, Fab, Typography, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const PhotoList = () => {
    const [search, setSearch] = useState("")
    const [photos, setPhotos] = useState([])
    const [loading, setLoading] = useState(true)

    const fethPhoto = async () => {
        try {
            const { data } = await Axios.get("http://localhost:4070/api/photo/")
            setPhotos(data)
        } catch (error) {
            console.error("שגיאה בטעינת התמונות:", error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fethPhoto()
    }, [])

    const funcSearch = photos.filter((item) => {
        return item.title && item.title.toLowerCase().includes(search.toLowerCase())
    })

    return (
        /* maxWidth={false} מאפשר לקונטיינר למתוח את עצמו ל-100% מרוחב המסך */
        <Container maxWidth={false} sx={{ mt: 4, px: { xs: 2, md: 6 }, direction: "rtl" }}>
            
            {/* שורת כותרת וכפתור פלוס */}
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
                <Typography variant="h4" component="h1" fontWeight="bold" color="primary">
                    גלריית תמונות
                </Typography>
                
                <Fab color="primary" component={Link} to="/photo/add" aria-label="add photo">
                    <AddIcon />
                </Fab>
            </Box>

            {/* שדה חיפוש שנמתח על כל הרוחב החדש */}
            <TextField 
                fullWidth 
                label="חיפוש תמונה לפי כותרת..." 
                variant="outlined" 
                value={search}
                onChange={(e) => { setSearch(e.target.value) }} 
                sx={{ mb: 4 }}
            />

            {/* ניהול תצוגת התוכן */}
            {loading ? (
                <Typography variant="h5" align="center" sx={{ mt: 4 }}>
                    טוען תמונות...
                </Typography>
            ) : photos.length === 0 ? (
                <Typography variant="h5" align="center" sx={{ mt: 4, color: "text.secondary" }}>
                    אין אף תמונה בגלריה כרגע
                </Typography>
            ) : (
                /* הגריד הראשי - שינוי ל-md={3} ו-lg={2} יאפשר ליותר כרטיסיות להיכנס בשורה אחת ולמלא את המסך */
                <Grid container spacing={3}>
                    {funcSearch.map((item) => {
                        return (
                            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={item._id}>
                                <PhotoItem fethPhoto={fethPhoto} photo={item} />
                            </Grid>
                        )
                    })}
                </Grid>
            )}
        </Container>
    )
}

export default PhotoList 
// import { useEffect, useState } from "react"
// import Axios from "axios"
// import { Link } from "react-router-dom";
// import PhotoItem from "./PhotoItem";

// const PhotoList = () => {

//     const [search, setSearch] = useState("")
//     const [photo, setPhoto] = useState([])

//     const fethPhoto = async () => {//הפעולה מעדכנת את הרשימה 
//         const { data } = await Axios.get("http://localhost:4070/api/photo/")
//         setPhoto(data)
//     }
//     useEffect(() => {
//         fethPhoto()
//     }, [])

//     if (photo.length === 0) return <h1>Loading...</h1>

//     const funcSearch = photo.filter((pt) => {
//         return pt.title.includes(search)
//     })


//     return (

//         <>
//             <input type="text" placeholder="חיפוש" onChange={(e) => { setSearch(e.target.value) }} />
//             <div>
//                 <Link to="/photo/add">Add new photo</Link>
//                 {funcSearch.map((photo, index) => {
//                     return < PhotoItem key={photo._id} fethPhoto={fethPhoto} photo={photo} />
//                 })}

//             </div>

//         </>)
// }

// export default PhotoList



