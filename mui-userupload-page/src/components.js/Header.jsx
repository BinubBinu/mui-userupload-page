import React from 'react'
import {
  Card,
  Box,
  CardActions,
  CardContent,
    Button,
    List,
  ListItem,
  Typography,
  Stack,
  
  CardMedia
} from "@mui/material";
const header = () => {
  return (
    <Card variant="outlined" sx={{ bgcolor: "#c0cfff" }}>
      <CardContent
        sx={{
          display: { xs: "block", sm: "flex", md: "flex" },
          justifyContent: "space-between",
        }}
      >
        <List sx={{ display: {xs: 'block', sm: 'flex', md: 'flex' } }}>
          <ListItem sx={{ fontSize: 28 }}>Theo</ListItem>
          <ListItem>Demos</ListItem>
          <ListItem>About</ListItem>
          <ListItem>Blog</ListItem>
          <ListItem>Pages</ListItem>
          <ListItem>Contact</ListItem>
        </List>
        <Stack direction={"row"} alignItems={"center"} gap={2}>
          <Button variant="contained" sx={{ bgcolor: "#000" }}>
            Sign in
          </Button>
          <Button variant="contained" sx={{ bgcolor: "#4caf50" }}>
            Get Started Free
          </Button>
        </Stack>
      </CardContent>
      <Box
        sx={{
          display: { xs: "block", sm: "flex", md: "flex" },
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <CardActions>
          <Typography variant="h1" component="h1" sx={{ fontWeight: "600" , alignItems: 'center', justifyContent: 'center', align: 'center' }}>
            MANAGE <br /> YOUR <br /> WORK
            <Typography>
              There is a time management facility through this modern software.
              Effective time management allows you to achieve great results.
            </Typography>
          </Typography>
        </CardActions>

        <CardMedia sx={{ marginLeft: { xs: 9} }}>
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          />
        </CardMedia>
      </Box>
    </Card>
  );
  
}

export default header