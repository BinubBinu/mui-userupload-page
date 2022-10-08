import { CardContent , Card, Grid,  CardActions, Box, Typography, Stack} from '@mui/material'
import React from 'react'

const Read = () => {
  return (
    <Card sx={{ bgcolor: "#c0cfff" }}>
      <CardActions
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          align: "center",
          marginTop: 5,
        }}
      >
        <Stack
          sx={{
            fontSize: 28,
            fontWeight: 700,
            marginLeft: { xs: 6 },
          }}
        >
          Read our blog to learn
          <br /> about time management
          <Typography paragraph>
            Time management is the process of planning and exercising <br />
            conscious control of time spent on specific activities.
          </Typography>
        </Stack>
      </CardActions>
      <br />

      <Grid
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
          align: "center",
          marginTop: 4,
          mb: 8,
        }}
      >
        <Grid Item>
          <Box>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2HxezNHAPyCR0AG8FdLZl6OWi7Enl7J6JkQEsATRBw-VJN7zzavIplH_nmKWbrbJESko&usqp=CAU"
              alt=""
            />
          </Box>
          <Typography sx={{ fontSize: 22, fontWeight: 500, mb: { xs: 8 } }}>
            <Stack sx={{ fontSize: 16, color: "gray" }}>
              November 25, 2022
            </Stack>
            <br />
            15+ Most Effective and Proven
            <br /> Time Management techniques
          </Typography>
        </Grid>

        <Grid Item>
          <Box>
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </Box>
          <Typography sx={{ fontSize: 22, fontWeight: 500 }}>
            <Stack sx={{ fontSize: 16, color: "gray" }}>
              November 14, 2022
            </Stack>
            <br />
            Time tracking reports - Why do
            <br /> you need time management?
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
}

export default Read