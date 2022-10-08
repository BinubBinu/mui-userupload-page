import { CardActions,Card, Grid, GridItem, Stack, CardContent , Typography, CardMedia} from '@mui/material'
import React from 'react'

const Plan = () => {
  return (
    <Card sx={{ bgcolor: "#c0cfff" }}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
            md: "row",
            lg: "row",
          },
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <CardActions>
          <Stack sx={{ fontSize: 28, fontWeight: 700 , marginTop: '6'}}>
            Organise and plan how you can divide your time
            <Typography variant="h6">
              Time management helps you prioritize your tasks <br />
              so that you ensure you have enough time available to complete
            </Typography>
            <Typography paragraph sx={{fontSize: 18 }}>
              Time plays a significant role in our life. Time helps good habit
              of structuring and organising our daily <br />
              activities.If you understand the value of time better. you can
              gain experiance and develop done in less time.
              <br /> Drawing up a to-do list might not seem like a ground
              breaking technique.
            </Typography>
          </Stack>
        </CardActions>

        <CardMedia>
          <Grid
            sx={{
              display: { xs: "block", sm: "flex", md: "flex", lg: "flex" },
              gap: 2,
            }}
          >
            <Grid Item>
              <img
                src="data:image/png;base64,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"
                alt=""
              />
            </Grid>
            <Grid
              Item
              sx={{
                display: "flex",
                align: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjr0MlpOoXpsWRDvo_BozHyUNmVmVHofL3sA&usqp=CAU"
                alt=""
              />
            </Grid>
          </Grid>
        </CardMedia>
      </CardContent>
    </Card>
  );
}

export default Plan