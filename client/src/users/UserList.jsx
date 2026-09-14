import { useEffect, useState } from "react"
import Axios from "axios"
import { Link } from "react-router-dom";
import UserItem from "./UserItem";
import { Container, TextField, Box, Fab, Typography, Grid, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person"; // אייקון מתאים למצב שאין משתמשים

const UserList = () => {
    const [search, setSearch] = useState("")
    const [user, setUser] = useState([]) 
    const [loading, setLoading] = useState(true) // מצב טעינה מהשרת

    const fethUser = async () => {
        try {
            const { data } = await Axios.get("http://localhost:4070/api/user/")
            setUser(data)
        } catch (error) {
            console.error("שגיאה בטעינת המשתמשים:", error)
        } finally {
            setLoading(false) // סיום מצב הטעינה
        }
    }

    useEffect(() => {
        fethUser()
    }, [])

    const funcSearch = user.filter((us) => {
        return us.name.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <Container maxWidth="md" sx={{ mt: 4, direction: "rtl" }}>
            {/* שורת כותרת וכפתור פלוס עגול - תמיד מוצגים! */}
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
                <Typography variant="h4" component="h1" fontWeight="bold" color="primary">
                    ניהול משתמשים
                </Typography>
                
                <Fab color="primary" component={Link} to="/user/add" aria-label="add user">
                    <AddIcon />
                </Fab>
            </Box>

            {/* שדה חיפוש מתקדם של MUI */}
            <TextField 
                fullWidth 
                label="חיפוש משתמש לפי שם..." 
                variant="outlined" 
                value={search}
                onChange={(e) => { setSearch(e.target.value) }} 
                sx={{ mb: 4 }}
            />

            {/* ניהול תצוגת התוכן הדינמית */}
            {loading ? (
                // 1. מצב טעינה אקטיבית מהשרת
                <Typography variant="h5" align="center" sx={{ mt: 4 }}>
                    טוען משתמשים...
                </Typography>
            ) : user.length === 0 ? (
                // 2. מצב שבו הטעינה הסתיימה ואין אף משתמש במערכת
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
                    <PersonIcon sx={{ fontSize: 70, color: "#cbd5e0", mb: 2 }} />
                    <Typography variant="h6" sx={{ fontWeight: "500", mb: 2 }}>
                        אין אף משתמש ברשימה כרגע
                    </Typography>
                    
                    {/* כפתור הוספה ייעודי במרכז המסך */}
                    <Button 
                        component={Link} 
                        to="/user/add" 
                        variant="contained" 
                        color="primary"
                        startIcon={<AddIcon sx={{ ml: 1, mr: -0.5 }} />}
                        sx={{ borderRadius: "8px", fontWeight: "600", px: 3, py: 1 }}
                    >
                        הוסף משתמש ראשון
                    </Button>
                </Box>
            ) : (
                // 3. הצגת רשימת המשתמשים המסוננת
                <Grid container spacing={3}>
                    {funcSearch.map((us) => {
                        return (
                            <Grid item xs={12} sm={6} key={us._id}>
                                <UserItem fethUser={fethUser} user={us} />
                            </Grid>
                        )
                    })}
                </Grid>
            )}
        </Container>
    )
}

export default UserList
// import { useEffect, useState } from "react"
// import Axios from "axios"
// import { Link } from "react-router-dom";
// import UserItem from "./UserItem";

// const UserList = () => {
//     const [search, setSearch] = useState("")
//     const [user, setUser] = useState([])

//    const fethUser = async () => {//הפעולה מעדכנת את הרשימה 
//         const { data } = await Axios.get("http://localhost:4070/api/user/")
//         setUser(data)
//     }
//     useEffect(() => {
//         fethUser()
//     }, [])

//     if (user.length === 0) return <h1>Loading...</h1>

//   const funcSearch = user.filter((us) => {
//         return us.name.includes(search)
//     })

//     return (
//         <>
//       <input type="text" placeholder="חיפוש" onChange={(e) => { setSearch(e.target.value) }} />
//             <div>
//                 <Link to="/user/add">Add new user</Link>
//                 {funcSearch.map((user, index) => {
//                     return < UserItem key={user._id} fethUser={fethUser} user={user} />
//                 })}


//             </div>
//         </>

//     )
// }

// export default UserList






