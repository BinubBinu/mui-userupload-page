import React from 'react'
import { Card, CardContent, List, Typography } from "@mui/material"
import Icons from "@mui/icons-material"
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";


const Socialmedia = () => {
  return (
    <Card sx={{ bgcolor: "#000", color: "#fff" }}>
      <CardContent
        sx={{
          display: { xs: "block", sm: "flex" },
          alignItems: "center",
          align: 'center',
          marginTop: 8,
      justifyContent:{ xs: 'center', sm: 'space-between', md: 'space-between' },
        }}
      >
        <Typography>&#169; CopyRight 2021. All rights reserved.</Typography>

        <List sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <GitHubIcon />
        </List>
      </CardContent>
    </Card>
  );
}

export default Socialmedia