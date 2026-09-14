import { Outlet, Link, useLocation } from "react-router-dom";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Paper } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PeopleIcon from "@mui/icons-material/People";
import ArticleIcon from "@mui/icons-material/Article";
import ImageIcon from "@mui/icons-material/Image";

const SIDEBAR_WIDTH = 260;

function Layout() {
  const location = useLocation(); // מאפשר לנו לדעת באיזה דף אנחנו נמצאים כדי לצבוע את הקישור הפעיל

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f8f9fa", direction: "rtl" }}>
      
      {/* תפריט צדדי קבוע ומעוצב לכל האתר */}
      <Paper
        elevation={2}
        sx={{
          width: SIDEBAR_WIDTH,
          flexShrink: 0,
          borderRadius: 0,
          bgcolor: "#ffffff",
          display: "flex",
          flexDirection: "column",
          p: 2,
          borderLeft: "1px solid #e0e0e0",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 3, color: "primary.main", px: 1 }}>
          מערכת ניהול
        </Typography>
        
        <List sx={{ flexGrow: 1 }}>
          {/* דף הבית */}
          <ListItem disablePadding sx={{ mb: 1 }}>
            <ListItemButton 
              component={Link} 
              to="/" 
              selected={location.pathname === "/"}
              sx={{ borderRadius: "8px" }}
            >
              <ListItemIcon><HomeIcon color={location.pathname === "/" ? "primary" : "inherit"} /></ListItemIcon>
              <ListItemText primary="דף הבית" />
            </ListItemButton>
          </ListItem>

          {/* משימות */}
          <ListItem disablePadding sx={{ mb: 1 }}>
            <ListItemButton 
              component={Link} 
              to="/tasks" 
              selected={location.pathname.startsWith("/tasks")}
              sx={{ borderRadius: "8px" }}
            >
              <ListItemIcon><AssignmentIcon color={location.pathname.startsWith("/tasks") ? "primary" : "inherit"} /></ListItemIcon>
              <ListItemText primary="משימות" />
            </ListItemButton>
          </ListItem>

          {/* משתמשים */}
          <ListItem disablePadding sx={{ mb: 1 }}>
            <ListItemButton 
              component={Link} 
              to="/user" 
              selected={location.pathname.startsWith("/user")}
              sx={{ borderRadius: "8px" }}
            >
              <ListItemIcon><PeopleIcon color={location.pathname.startsWith("/user") ? "primary" : "inherit"} /></ListItemIcon>
              <ListItemText primary="משתמשים" />
            </ListItemButton>
          </ListItem>

          {/* מאמרים */}
          <ListItem disablePadding sx={{ mb: 1 }}>
            <ListItemButton 
              component={Link} 
              to="/article" 
              selected={location.pathname.startsWith("/article")}
              sx={{ borderRadius: "8px" }}
            >
              <ListItemIcon><ArticleIcon color={location.pathname.startsWith("/article") ? "primary" : "inherit"} /></ListItemIcon>
              <ListItemText primary="מאמרים" />
            </ListItemButton>
          </ListItem>

          {/* תמונות */}
          <ListItem disablePadding sx={{ mb: 1 }}>
            <ListItemButton 
              component={Link} 
              to="/photo" 
              selected={location.pathname.startsWith("/photo")}
              sx={{ borderRadius: "8px" }}
            >
              <ListItemIcon><ImageIcon color={location.pathname.startsWith("/photo") ? "primary" : "inherit"} /></ListItemIcon>
              <ListItemText primary="תמונות" />
            </ListItemButton>
          </ListItem>
        </List>
      </Paper>

      {/* אזור התוכן המרכזי המשתנה (כאן ייכנסו כל הדפים של ה-Outlet) */}
      <Box sx={{ flexGrow: 1, p: 4, overflowY: "auto" }}>
        <Outlet />
      </Box>

    </Box>
  );
}

export default Layout;


// import { Outlet } from "react-router-dom"
// import Navigate from "../common/Navigate"
// function Layout() {
//     return (<div className="page">
        
//         <header>
//             <Navigate />
//         </header>

//         <main>
//             <Outlet />
//         </main>

//         <footer>footer</footer>
//     </div>
//     )
// }

// export default Layout