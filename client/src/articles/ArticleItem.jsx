import React, { useState } from "react"; 
import Axios from "axios";
import EditArticle from "./EditArticle"; 
import { Card, CardContent, CardActions, Typography, Button, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite"; 

const ArticleItem = ({ article, fethArticle }) => {
    const [editArticle, setEditArticle] = useState(false);

    const handelDelete = async () => {
        if (window.confirm("האם אתה בטוח שברצונך למחוק מאמר זה?")) {
            await Axios.delete(`http://localhost:4070/api/article/${article._id}`);
            fethArticle();
        }
    };

    return (
        <>
            <Card sx={{ 
                minHeight: 160, 
                display: "flex", 
                flexDirection: "column", 
                justifyContent: "space-between",
                boxShadow: 3,
                borderRadius: 2,
                direction: "rtl"
            }}>
                <CardContent>
                    {/* כותרת המאמר */}
                    <Typography 
                        variant="h6" 
                        component="div" 
                        sx={{ fontWeight: "bold" }}
                    >
                        {article.title}
                    </Typography>

                    {/* הצגת שם הכותב (תואם לשדה aouthor מהקוד המקורי שלך) */}
                    <Typography 
                        variant="caption" 
                        color="text.secondary" 
                        display="block" 
                        sx={{ mt: 0.5, fontStyle: "italic", fontWeight: "500" }}
                    >
                        מאת: {article.aouthor || "אנונימי"}
                    </Typography>

                    {/* תוכן המאמר */}
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
                        {article.description || article.body || "אין תיאור למאמר זה"}
                    </Typography>
                </CardContent>
                
                <CardActions sx={{ justifyContent: "space-between", px: 2, pb: 2, mt: "auto" }}>
                    <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                        
                        <Button 
                            size="small" 
                            color="primary" 
                            onClick={() => setEditArticle(!editArticle)}
                            startIcon={<EditIcon sx={{ ml: 0.5, mr: 0 }} />}
                        >
                            ערוך
                        </Button>
                        
                        <Button 
                            size="small" 
                            color="error" 
                            startIcon={<DeleteIcon sx={{ ml: 0.5, mr: 0 }} />} 
                            onClick={handelDelete}
                        >
                            מחק
                        </Button>

                        <FavoriteIcon sx={{ color: "#e91e63", mr: 0.5 }} />
                    </Box>
                </CardActions>
            </Card>

            {editArticle && (
                <Box sx={{ mt: 2, direction: "rtl" }}>
                    <EditArticle 
                        article={article} 
                        fethArticle={fethArticle} 
                        setEditArticle={setEditArticle} 
                    />
                </Box>
            )}
        </>
    );
};

export default ArticleItem;

// import Axios from "axios"
// import { data } from "react-router-dom"
// import Navigate from "../common/Navigate"
// import { useNavigate } from "react-router-dom";
// import EditArticle from "./EditArticle";
// import { useState } from "react";

// const ArticleItem = ({article,fethArticle}) => {
//   const navigate = useNavigate()


//    const handelDelet = async () => {
//         const { data } = await Axios.delete(`http://localhost:4070/api/article/${article._id}`)
//         fethArticle()

//     }

// const handelComplete = async () => {
//         const { data } = await Axios.put("http://localhost:4070/api/article", {
//             _id: article._id,
//             name: article.name,
//             body:article.body,
//             aouthor:article.aouthor
//         })       
//         fethArticle()
//     }

//     const[editArticle,setEditArticle]=useState(false)

//   return (
//     <>
    
    
    
//     <div>
//         <h2>title:{article.title}</h2>
//         <h3>body:{article.body}</h3>
//         <h3>aouthor:{article.aouthor || "anonmi"}</h3>

//         <button onClick={handelDelet} className="delet-btn">Delete</button>
//         <button onClick={()=>{setEditArticle(!editArticle)}}>Edit </button>
//         {editArticle&&<EditArticle article={article} fethArticle={fethArticle} setEditArticle={setEditArticle}/>}
//     </div>

    
    
//     </>
//   )
// }

// export default ArticleItem







