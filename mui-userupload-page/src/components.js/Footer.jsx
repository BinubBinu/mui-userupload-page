import { CardContent,Card, Button, Typography, CardMedia,Grid, List, ListItem } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Card sx={{ bgcolor: "#000", color: "#fff" }}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          align: "center",
        }}
      >
        <Typography variant="h4" sx={{ mb: 2 , marginTop: 5}}>Join Our Community</Typography>
        <Typography paragraph sx={{ fontSize: 18 }}>
          Work smarter with this team management and not hard.
          <br /> Join our newsletter for a better experiance
        </Typography>
        <CardMedia>
          <input type="text" placeholder="Enter your email address" />
          <Button size="small" variant="contained">
            Get Started Now
          </Button>
        </CardMedia>
      </CardContent>

      <Grid
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
            md: "row",
            lg: "row",
          },
          align: "center",
          justifyContent: "space-around",
          marginTop: 8,
          alignItems: "center",
        }}
      >
        <Grid Item sx={{ alignmentItems: 'center', justifyContent: 'center',display: 'flex',flexDirection: 'column', align: 'center'}} >
          <Typography variant="h5" sx={{ mb: 2 , alignmentItems: 'center', justifyContent: 'center',display: 'flex', align: 'center'}}>
            Sark
          </Typography>
          <Typography paragraph>
            We are providing the best products .<br /> Do you have any quries in
            our service ,<br /> quality and customer support please <br />
            contact us directly.
          </Typography>
          <Button size="small" variant="contained" sx={{ bgcolor: "green" }}>
            * START LIVE CHAT
          </Button>
        </Grid>

        <Grid
          Item
          sx={{
            display: "flex",
            flexDirection: "column",
            align: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" sx={{ mb: 1, marginTop: { xs: 4 } }}>
            Company
          </Typography>
          <List >
            <ListItem>About</ListItem>
            <ListItem>Features</ListItem>
            <ListItem>Work</ListItem>
            <ListItem>career</ListItem>
          </List>
        </Grid>

        <Grid
          Item
          sx={{
            display: "flex",
            flexDirection: "column",
            align: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" sx={{ mb: 1, marginTop: { xs: 5 } }}>
            Help
          </Typography>
          <List>
            <ListItem>Customer Support</ListItem>
            <ListItem>Delivery Details</ListItem>
            <ListItem>Terms &#38; Conditions</ListItem>
            <ListItem>Privacy Policy</ListItem>
          </List>
        </Grid>

        <Grid
          Item
          sx={{
            display: "flex",
            flexDirection: "column",
            align: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" sx={{ mb: 1, marginTop: { xs: 5 } }}>
            Resources
          </Typography>
          <List>
            <ListItem>About</ListItem>
            <ListItem>Features</ListItem>
            <ListItem>Work</ListItem>
            <ListItem>career</ListItem>
          </List>
        </Grid>

        <Grid
          Item
          sx={{
            display: "flex",
            flexDirection: "column",
            align: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" sx={{ mb: 1, marginTop: { xs: 5 } }}>
            Extra Links
          </Typography>
          <List>
            <ListItem>Customer Support</ListItem>
            <ListItem>Delivery Details</ListItem>
            <ListItem>Terms &#38; Conditions</ListItem>
            <ListItem>Privacy Policy</ListItem>
          </List>
        </Grid>
      </Grid>
    </Card>
  );
}

export default Footer