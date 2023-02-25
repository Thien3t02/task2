import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import Typography from "@mui/material/Typography";

import StatusBox from "./account_view/login_status";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import Link from "@mui/material/Link";

import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";

import { styled } from "@mui/material/styles";
import { padding } from "@mui/system";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="white"
      align="center"
      background="black"
      {...props}
    >
      {"Copyright © "}
      {new Date().getFullYear()}
      <Link color="inherit" href="">
        thuộc về LANDSMAP
      </Link>{" "}
      {"."}
    </Typography>
  );
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <div className="App">
      <Box
        sx={{
          height: "756px",
          width: "390px",
          position: "absolute",
          top: "50%",
          left: "50%",

          transform: "translate(-50%, -50%)",
          border: "3px solid #EB6017",
          borderRadius: "0px",
          background: "#eaeaea",
        }}
      >
        <Box sx={{ padding: "12px" }}>
          <Typography
            component="h1"
            variant="h4"
            sx={{
              fontWeight: "500",
              color: "#003D62",
            }}
          >
            Tài khoản
          </Typography>

          <StatusBox />

          <Typography
            sx={{
              width: "153px",
              height: "22px",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: " 14px",
              lineHeight: "22px",
              padding: "12px",
            }}
          >
            GIỚI THIỆU & PHẢN HỒI
          </Typography>

          <Box
            sx={{
              width: "100%",
              maxWidth: 460,
              bgcolor: "background.paper",
              borderRadius: "8px",
            }}
          >
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <ReportGmailerrorredOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Giới thiệu trang" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <AutoStoriesOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Hướng dẫn sử dụng" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <HelpOutlineIcon />
                  </ListItemIcon>
                  <ListItemText primary="Câu hỏi thường gặp" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <StarBorderIcon />
                  </ListItemIcon>
                  <ListItemText primary="Đánh giá" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <ChatBubbleOutlineIcon />
                  </ListItemIcon>
                  <ListItemText primary="Gửi góp ý cho nhà phát triển" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>

          <Typography
            sx={{
              width: "153px",
              height: "22px",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: " 14px",
              lineHeight: "22px",
              padding: "12px",
            }}
          >
            CÀI ĐẶT
          </Typography>

          <Box
            sx={{
              width: "100%",
              maxWidth: 460,
              bgcolor: "background.paper",
              borderRadius: "8px",
            }}
          >
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <ReportGmailerrorredOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Cài đặt ngôn ngữ " />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <AutoStoriesOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography variant="body2">
                      Truy cập trang{" "}
                      <span style={{ color: "blue" }}>Landsmap.vn</span>
                    </Typography>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Box>

        <Box
          sx={{
            backgroundColor: "black",
            width: "100%",
            height: "25px",
            position: "fixed",
            bottom: 55,
            left: 0,
            right: 0,
          }}
        >
          <Copyright />
        </Box>

        <Box>
          <Paper
            sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
            elevation={4}
          >
            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
            <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
          </Paper>
        </Box>
      </Box>
    </div>
  );
}

export default App;
