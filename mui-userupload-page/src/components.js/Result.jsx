import { CardContent, Box, Grid,  Stack, Avatar,  Card,  Typography, Paper, CardActionArea, Button } from '@mui/material'
import { color } from '@mui/system';
import React from 'react'

const Result = () => {
  return (
    <Card sx={{ bgcolor: "#000", color: "#fff" }}>
      <CardContent>
        <Typography variant="h3" align="center" sx={{ mb: 5, marginTop: 5 }}>
          Simple interface through which <br />
          tasks can be easily managed
        </Typography>
      </CardContent>
      <Grid
        Container
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
            md: "row",
            lg: "row",
          },
          justifyContent: "space-around",
          mb: 5,
        }}
      >
        <Grid Item sx={{}}>
          <Box sx={{ bgcolor: "#fff" }}>
            <Typography variant="h6" align="center" sx={{ color: "blue" , mb: 1 }}>
              Top Clients
            </Typography>

            <Stack direction="column" spacing={2}>
              <Typography
                component="div"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Stack sx={{ display: "flex", flexDirection: "row" }}>
                  <Avatar
                    alt="Travis Howard"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADhCAMAAADmr0l2AAABblBMVEX////mOx/W4+sdGDj0qYHjjGHOdU0AADMAFTn3q4L7roQAFjnY5e3T4erlLQD+sIXtPB0YFTfkIADjkGTlNBPlMAsABTTkhlYUFzgACTTji2Dl7/boflfV6vMODzbTeE7MZTV2U1KluL/+9/b0sapiRUvI1t7wPR3qX03AhW3jnXvw9Pf86efvjYL3ysX86ObraFj2wbvwl43508+QKi1UIDTaOSHypp6mdGONYlrbmHjFiW84KT/voHbMaj/atarZ09K1xc3sdWb0t7DuhnrENCWbLCwnGTfTNyKpLyo7HDbpWEXoSjN6JjC5MidVPUeGXlhDMEKdbWAAACPlVjboeU+uZEjayMLcs7PgoobenpvesZ/rb2FHHjVqJDJbITOAJy/DfVyTXE7lZkMfCy6kn6daVWdzbn3Iw8k2PFe2tr8AABs2OFFbO0L/4NH4wad5eor4vqHKXirolHvFQy6AS0LbWjhwQkHfko3bu716j9qMAAARhUlEQVR4nO2di1/TShbH20AJSZ/pIyWBprdCwZaHKIqlUC2IVgUFqoiv615x1737uNfd63rV/37nkaTpi86ZpLR+Pvl9/Cg2pcm3Z+acMzMnk0DAly9fvnz58uXLly9fvnz58uXLly9f46n5lY2169fvLSDdu359bWNlftRX5JVWNhZW3x4mkWIO4f8fvl1d2FgZ9fW50crajfU04sqkgz2VziDQ4PqNtR/RmvNrq4fJvmidmIerPxbktYWrCG4wW0sIcn3hB2muK7cPkjEGy3VZMpY8WBh/O15f56KzGd+ujZrgIq3cyPDTmYzJ4I1xNePGXhLU7/opk9y/NmqWHtq4mnRpvJbSyfWNUfN0yEs8E3GcrHht3Vs8irg3LmFjft97PIp4Y9RoRPdgIR2iWOb6qOkC1w6Sw8LDSq6PuJ3eHk7rbCmdXBgh3spBbLh4WMmrIwv894ZtPqp0ckQ9cW+ovc+p5P4I8K4dDs15dit2cOnNdI25eSYSS4ngJhb6eSmRSPAQpmOXnLvdZmueCOf+gyc/N2amscIzjZ/f3Xz6cIkH83K96T4TXyLx9F0YYc1M2JqZCaNXEOaj+5sYH8CZXL08vnWm6JB41Jh2sE10YE7PPP7LLw+ePgwuMWLG9i6L74DFvSQePp7uSefknEGc4cfvHtwPskDGrl4K3vwhi3tZetTHej3tOR2+9SA4GDFzcBl8myx8iUeDzNdJGQ7fZCA8HBe++0A+rPDjzYGI6aHbkKl9BoNwPGzFmYcDCYfdSg+Y+JaehPkIw5sDPzuzPky+dbb0jKeBUsLHgz98mNFin210tPSY1YF2KfxkaeDHD28mgzU/g3pQp6bvDz5B8t5w+NYYh0cJfgOiRnprsAmDyaFk3iusfE9dGJDNhMHYMEZPjAEiuPSzCwMiEz5hSNqGEQ73WMe3D10ZEIkl9Y55PrS4xzo/kfiFLwbamn7Icpqkx8tsrB0QyVUDRQo/Yho9edwN2TKYoMsYQQEZkm6ktKcZzW3m+U9AkFcMTdUMpfPlmV/Yxr9eRsNrzA20R4xQNFEUVaMTTlSPtiqVSmFH7EBkBfSykV5lnuDtCvKGuLNVqlYrBUNVDUNBMgxVVHeOS5NxWZZkWd7e0XiaKGqkb73iY/agXT1QEYvVuCwhyfFqaatwdHJyVDiubCM4adKUJBfENsAHrDNRXnnSefYZ3g4DGhPb8RYIMlccCdnNfo0qfqw6Adm8KJE3gKvsgO09UCxOdqD0UfzI0UWZcjWq2G0v+Ng9TDDxxGlAsRBnwkPGLTsaKVugp0p64Wfesi8hJZz2U5n5JiflZsvRTA8e1dvKeLAqswFYQ3KmocaRzMyH1OqF0+znQyZ0X4uxDjDgI0caKpbZ+p9pwmO7F05Dli3SrucvIAZM3GxZUKyADChVVS5A9yYEGDCYeGf7GKUB4kMm3LESGlATdW1CiAGDiVs2oAozIALcstooxIsiJd2VYexBVuEdgCIMD7XRbStSAOIgVsbV0BcwDGwDVI7YQ4QlCxCSyWC5yrlvgNbhW4BaE9hCUTZjdUKmSRknoJt0BlYG03IyYgkSI4jkgh0ooMvb/HzXgYD2dIxYhQPaycz0Uxifi1lSSIzAgA9sQFCUJ5JKdidkHRCa4o8UMBcTdAwmVCgeTritUA/thPxuhn0mxtSmBShaBsSDwK7xn4PKcVhuWF7mHRSQd3aGeSrNUqJhRokJ6kRluVppNiulqiz3YJRkCR9ulsoyfrvtZcAW5J1gA7dQ240qJ/iKpclmQ1U1TVNVo7AtdwQOWSoVVBEfFtWdCrKi3QmngX2Qe1gIbqH2cILE+fi2otoTZoaIINoAmxOiHRcUcacq20MmaKTnbqPsc2m2zE5oFOTJeAVZTsSik5+KWnDYUD7Cs4V4ZpS+RVVLstVGgblakNePznNUSyboypK2hRqgVmyWtpFKlWZhBzdGZ2xEhxHaSaFZwW/ZrmwVtaq8TU0IG04QxXgAgVGeAj4QDWQGtSRJ28Q/khlDWY5PbjerbZ1Q3q5sS/HWe+JSVYqfYKtqjxmWQDvEFesBk2ktPXwfOjdIItPhNqVOP9r9AnEzym+h0AdwKWKGZ9n+kIMvPRcKvdAmDPvaa7UaMhL6uztKkIPIvI6DaNSrneuhFPjUPAui8CCBlQqF3qtGMW4RlCvHxeJxCTH24JOkEj5ambQQ5WNDfR8KpT6Az8sRKHi6YPAwFdJDogVYKxefqYZiGNpfqz2GT/K2ho4iT/qsYDZouWiIIaQ5sP/m6ISwoaCp58iCumJOyCAA7W8fkd8w/v7rP7rHT3LlH79+NPDRvz1TqYdF2VpDR4A6GJBjUMgRBYPBDxjwRBHL2GmUjY/z88+w4382H/hnuYNPqv4amP8XjvJaYPnfDXK4LCq/YcAQ+NwckZDrlg8C+JsibmODSPHfKQICnA986gT8FJhfpkcDgd9Jm5a2ReMrBkzBv9w0lA+wItENiAI97YS/Bz5qqAv+PTD/3y4vU/s0H/iooqP/CXyiB+UtzfiKDZiCV+aDvcwavwW/GvacU036dFwoFtb+W+s1Yqp9WkMHtz5Zw6n4kWJ8CfFZEOxl4Jm2BRj6YjhmDXEe02us1POoOGGc8/VBeL69z3Vb0p/YgjiVgU860UkL7ZzPi8JzGS4nSsPEuUaGE2DhBRgKCI+DcDfKg0cCPQFUFB7ACWVCe8ELCE3WOO8sw4AoGZ2ggQIkMnmvvQ9xpWrgOMGXiQbT+Pt/j4Z1xjHYhGSJUOUGTMIAQatKDsA5E9AxoGC2IB7PiwTwOQ8gbJVpg/PeVRQn9Pciz+Q9nXMiuXaK58zAQMg1lghSNxoSedaXUJTHkx0YMMvjwYE3GC7w3n2Mx0tk7kiFLU9IVTppiH6dqwsGY7AbffkSGdoJdTJFbY96GQ1YxF+LsqNzdkFoKsMLSDrhCZkOVSGRQqIzasoJAtS5boKNwe4Q5RruEiFA0psmlAYEkC5/4uEgXwu9NMDEhxQaTtAlpq3OWKjf0fE/NT3VcUBu0ilRPBzk8qHgMT2/BYN66gsFVJROE+r5fH5yMnTnzp2O0aGk0El+NFpK/TnugMHTc3Ottme+VpvsnmCzSyxQrv2cc3eFS+uDjrJm1VxvkUidKJ7GluV4uWz+QF4y31Ax112mH3FvHgEE5PaiWNbddWathVwqnOzs7JwUC83m8QlZkWgeF8lLhRJ9h7U+D193GQmgtdCrkXInuaiSWm1crK1qhob+WOXbiqEWyVtsCwJKKTsBYXGQO5PBSpi1CCQfNcvsFE1UjcbOUXFrq3h00jBUUWtFy9baJ3zdxQaEZTK8uSiRde8EKSaRt3DzM5RmdVKupbJ6TQplsylpstpUsLM1cCyx8rQZjoUlGxCWi/KOJoislWwN9y+SRGtFRKffcSgfqk0WNZy7kIyO9kFw+YFDwNEE53jQBLxJ2qiyg68dD/OUk9rnn/744yen/vhjKoVzOg13wjjN7qAVMm2AsPEg54jeBKRxgoyYSL25WK19no3Uz87uWjo7q8/W53DLJDVDdKw0EX7qAhDExz0nQ0XdKLEgjuGYdG6uPtuuN6c1zEWyAbMSz4UTBc/duziVXS8jluIkhuN4WDs9/XzWoqu/mTvVUXjQSOls3PSiDX4DgmfV+OZFLUDz/gmxIsULBjWSPjd3eqp/foP06jP6cW6OmtcoxKWK6UShFUBOQOi86L6rHZusXEZVi4pVmocIMSMW/mlu0uygSlG1wjx/HgOf2XaVygSX3llVa7hvmSsVoTmHQvQ10XwL4fsLfxSEr03wrS615LxLy16KCXXgteqYcQNtuDkfeHXJVZxA2my0CJ3VozVnxYXznqWZhiu/Bq9CcLup32bLho45UkmWHAUyrSJYlKW54uOoa3blRoluWfW/rQk2qVpBsicU43addviWu3NxrNG7GfJSJX6x62OtKhI0LkKybhqRq/a9Ei4CBBFHlYVbLxPEG1eFzfpRo2xWyGKTWYuHctmciZkJP3LhP4k46mR4ig07ldj82SwgRWNf3PXI5BKZjJJklMZQvvDjwTsdDQQE8/HVqnUj3pymFOLEVlWOH5NhkVaIy9WtBm2fCrzAt1tpnh3XuKoNu7T0P/MucjSkR2i0y+EVUtN82s7/3DZPpAzP3S8edEKs5/kvmpWr2BXO9gvql7wXLYWrXtSLToj0fCo/9ZvasduBiacdoYNeAHJV/ELve+mj51NTU/kXDa2bT2u8yKODXGtJ7eK898XVzJqtP6cwYf5c6djNwlDO85jPC0DgjJolt+koFQFEiFNfFK3VBzXly1SeHvEAkPd2evCdL71kAmLE8x2VxkF159zCm5riXGxxiHvXDk/a6IcpW/n8i68NVW18fZHPt151D8jZQj1KZu5MTTkR8+ZfLf3kHpD7JlfALg99AdtgeumO20Qmzb/fA+teeBcppQ8idHsGN/vkubcgrsMfMqCbXWPdTT1hkRLZi5upyzgBXBhsl2s3kz7FpUsXG5GvqqIF6GpPGb7C35YSIVMXGdGVl+G6baklvuL7lkjt2iAjukq3Xe5l4TJSkPLKQYj5UxfncBEjqFwtFJIS50GIed7SHyL3WwK5MWGbAfsgctZoW2dwv6mTi16YPk11AiLEfCdeKJTibqRueyAWaEuZNs314DMhiXTdeiF1yudJ3W0mY4q3Pv253o+vh1I66w67bfJm/8YbPHcrB3s1zwsRTzPgaTxvdsbjyEhjmQ8pIF8olD37FgN+lV49u+A6bOOjWPB1PQvFQ4BCTvgGegKld9ttA+bXMsmDl7lcLqQPJmqXXs4JQu7KywPmxwFlvNv0ntXPpGOZ1fruYkTIvQEDZu9GhMjibi53th9jM6OX2xgvMBCmY7G3LyM5dJERQYC30awgCBH85URywst1BkZvHxg2aDmU0Am5HL7KK+ivXBloQv1VDv8q+m7wb+eE14Med+thA8Wav8C/pZFn2DfpbDOcAU2YrQsCNb5gMb7c6/8YbXRWj7e77+NJEVzs6rfvuZx9ZYIQxXYAmtA0YNTxMYgx8v3bQR9I7x9Y0P0wDdQskwhOaKOzTQjrhaQHLl5p/yD0Ejbkt4Pup4bHhvBQDcc8N7Zb7HDv9fdIJxy5KmrCNwDC7F1iwMXuD6OQ31/vbaJTpq1L4FrwHCSrG+JGufoaG64HXMuEQiTF3EhJDHT2wB6QucXvr/evxugTVb3ugFRk7BsLfsN268dGFb1C/skyEuopAtHeA3tTRr6vpmNebHzbUwvJTPB15GI2einEGKgbMhHqeh2/e7e/AdsohdfDe2Tm6r6QY7gIqzuxEepZwtftYfoptzwsvkBglvEaBIG0t0hdH0iopwhfdFADbWl2eHyBAOtFoAsW8HULtQG+NFsWyGf29qA9P3qYfIgwyngZi4QQR4sLjKiT+NA3QoyAj4OwXu6HqGdf1Un2Ok58IELarXJnCLGLUdez1To1X3Ss+AD9cNG88Eiu/iaUdUAiuGzqTZ0GHPtt48IH8jS7EXMAFKnffZXKmkq9umvSoea5y+4/L4kPEC3Q1S9GLBKUU9axhFZ6HkHms76DgYoONT50EDL2Q2TEFmL3QXyU2XyXyRcILLMS4i6GEbswIhHzCCvfEPOXnoSsgNROu4uYiNKQH1C6il5kxxMumS/A7mqosXavIJ7FxWhUiKJ/yP8EZrxLdC9OMXdEyhhd3N1FYAhtd3cx2qPR9tfldr+WlgUAotU0I3ZTZcYbQfO0xJrVuFF0JM3T0nJ0yIijNB/VcI04qt7nFHvA4NCozUc1O6x2OgbmMzUExOg4tE6HIt4ijhse0rKXVhw/PCJIavMD4mGh3MYlZDQaGQ/P2U/L7swYnR1vPKJlFPs5KNEvjbnxHFqOQBGjwo9gO6eWZ3HkYMCM4n73o9GZWqaU/TCjAmX7MeFsIcpZ1GKjTv9K/heZ/eHZ2rXs0KivxZcvX758+fLly5cvX758+fLly5cvX/31f8rolgDByjy0AAAAAElFTkSuQmCC"
                  />
                  <Typography sx={{ color: "#000" }}>
                    George Mc Philip
                  </Typography>
                </Stack>
                <Button size="small" variant="outlined">
                  Active
                </Button>
              </Typography>
              <Typography
                component="div"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Stack sx={{ display: "flex", flexDirection: "row" }}>
                  <Avatar
                    alt="Travis Howard"
                    src="data:image/jpeg;base64,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"
                  />
                  <Typography sx={{ color: "#000" }}>
                    George Mc Philip
                  </Typography>
                </Stack>
                <Button size="small" variant="outlined">
                  Active
                </Button>
              </Typography>

              <Typography
                component="div"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Stack sx={{ display: "flex", flexDirection: "row" }}>
                  <Avatar
                    alt="Travis Howard"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGqLx7wMSo52wlsR6Z-wSojQce5u7qiQnnMA&usqp=CAU"
                  />
                  <Typography sx={{ color: "#000" }}>
                    George Mc Philip
                  </Typography>
                </Stack>
                <Button size="small" variant="outlined">
                  Active
                </Button>
              </Typography>
              <Typography
                component="div"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Stack sx={{ display: "flex", flexDirection: "row" }}>
                  <Avatar
                    alt="Travis Howard"
                    src="data:image/jpeg;base64,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"
                  />
                  <Typography sx={{ color: "#000" }}>
                    George Mc Philip
                  </Typography>
                </Stack>
                <Button size="small" variant="outlined">
                  Active
                </Button>
              </Typography>
            </Stack>
          </Box>
          <Typography
            variant="h5"
            sx={{
              display: "block",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              marginLeft: { xs: 4 },
              align: "center",
              marginTop: 2,
            }}
          >
            Track Customers
            <Typography paragraph sx={{ mb: { xs: 10 } }}>
              Customer activity can be easilyb tracked with one click.
            </Typography>
          </Typography>
        </Grid>

        <Grid
          Item
          sx={{
            display: "block",
            align: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              bgcolor: "#fff",
              maxWidth: 345,
              alignItems: "center",
              marginLeft: { xs: 2 },
              justifyContent: "center",
              align: "center",
            }}
          >
            <img src="data:image/jpeg;base64,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" />
          </Box>
          <Typography
            variant="h5"
            sx={{
              display: "block",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              align: "center",
              marginLeft: { xs: 4 },
              marginTop: { xs: 2, sm: 6, md: 6 },
            }}
          >
            Get Feedbacks
            <Typography paragraph sx={{ mb: { xs: 10 } }}>
              Customers can leave their own comments and feedback.
            </Typography>
          </Typography>
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
          <Box sx={{ marginLeft: { xs: 5 } , mb: {xs: 2 , sm: 9, md: 9} }}>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAApVBMVEX////6+vondt37+/v8/Pz///zy8vIEbdvt8Pejo65Kf96Rqeghc9wVcuC9zvHv7+9pj+EAaNr19/yysrLe5vcAZdrW3/PFxcU6e95lkeG+vr7m5ubHx8dFgN7h4eHW1tbPz8+goKCqqqrM2fF4meNTh9/o7PmOjo6enp60xOvv8fiWlpaFhYWrwu0AYd15eXmoqK+Hn+Vubm5iYmIAWdihtOoAVtznOZi8AAAMn0lEQVR4nO2dAZ+bqBLAh0JoX68t3aVbe+ABetea2+Q219699/0/2gOTKKCJ2s0mmji/dBt2Blb/GQZEnAAMEIJCifU40pNIjzr0cfuxvqv9ruOL9Xhg+z1kRtQpM6JOuTZEQ9vvIdeGaPaiGdELIcLlq/xvRtRAZPUEMUCMICIpZrQXlUGHMHVEIDIocllwDTyRJtN9oAw7hKGIuto/94hGWMZyxdc8hw0XcjkjaoZjXaBCGJYbs1IrrIseTAYewtQ6WqO+0khq0BoUMpSljQa65dq8qDGiYYIw3r6IfY1gROtq/wKz60UteAzzop84hRdGtPj+x15+fZwRtU0dF2/fvdrJ6zczolYvevtqXIjGNqJFiOYLkNmLeiBqi0UjQ9TV/uxFsxfNXnQCRJP0IgrAylerXBuin/EinCNtjH216NyfwKEM1eOB9RsIQnXzQvzZ7feYFyWYg+DAtyUaCYvk1Poug6H1u5pvtk+/eIho68IsZ6kU9tWmG50XNeqf2ItanQhrCRoRfWAt6dpi0QQG/Usjmgf9GdHc0c6AaPaiHl5Ec4Nyd7uMQ8oRmRE12zc5z9UGAS9YoWYvavOilBdUbIgufpgs17MXtSCyXiR5wiXkkGV0hIi62r9suJ5vEqF50O+H6PFbJfczotb2f3m9l4cPY7xJ1OMUBrX/M4jqu68NRLMXlR2tPyKlRA9kN42IajYj6vKiQ0v614yoIxaF4RrpPlsfrw3RMC8S6QU6Wlf7F0YUehGjtxiuh3Q0Zszc0Y53NGYuEou62h8TIoK0vACi83uRrYHsf7h8OzBcM9NjH/bkvYiYZQE8JazgIAsYdAGCEtNN6Aq8CLTWeQJsqVC+HITIhutLIOpq/wVi0Rr4csUw/ND5P8MuYzW6REc7uxdhqQlQlbDcABgyCBFJ9yMaSwQTB2K3OwS3aaX80bJ5pfzlTuneNU8Re9Wb9W0c3Vpsf7QgqJXuR6u+tmgL19tHO4jbAQFNLwq2PTweXC9iRiW7t+6ToHT7b/s+lFq5tWhsZvGq03a9V5226gOLVn1tcaB+UH1/SKU1WniI/lzYXxzbPCP3yLgd39Id9UgaHaVDj5+pj/9AV/1GR2zUX3z4cy9/vXFuHngRijqav7ZNCFV7z7HxXiholemH68XXaiH26fOgWCSl8MP1oT44+XCNFh9rBJ/JoNl1iuUhLleMaODatZoRHUWEjDkQfiaOiCZMJnYKYzRNDXpORwM3ebxGRGsF3FAQgiG1Js/yIiFMN6EJjmj/CE4zA0W6gUQ9K1z3lOkhWvJE5gk3fAXF4FgUzq6JukQsenlEQAHZl3twgzxzRNPqNpbUntHRWHobC7PP8KKrXVL78vr9Tp7un+dF+iILs2dAVJ/y3TMRkWtd3j8ZIiSv9Yb1yRCx9FrXro8iGjIvovpKvMituEJ5g8zdJ+tCNIGO1tX+YERYZgldCkB5TpJyI8dzvOgq78YSLUBxROiKglpCF6KBW7DMBdaLutof3tFAFaDW9s0PJLOTImJCXMXmGSxzwXIhFF+CKOgpEfWU0SNyv3G/JG53A+DTImp/4HpyiJD3/PSzB/0oFk10YZZqBtqaSQRSurux3z5V8nhaL2LJNAd9bkNPsgKy0qgoHILvD3c7efqw6EI0aGFWTnQjn8z0BjYA9hNeu4HMvwHdjWjYLjXa40J/hIiY4EJkCcqEygv0koh6yvg6GrMhVAHDkoF9DUU0KFxLofYHzNCEk/OcFFG075qb3TuVUG0SaJXxp1XpQIQDRIsY0dHkPLQK15TLn07O0zM5Du2qT4/XrywoXfzxdS9vP1kD9N07ZVfFQ/TGVvIR/U4ZRf7+InQ0OQ9iye4zwTIxahrJeVxH/1id4t2nF/YiXe0v0hjUgeFtfOEa6lO2iOJYRE4arlPTTuVFEZ0gXB9FBCddDLnI7HpSiNxFzu0hGnYZm0x088z5vAgl07zSPycibSaCqFwsc2tn+MURRbPri6wXdbXfhkgI4LkCxSk+byyiKWtO58eIiNACYS5hw5ZwXkSST+TxYVAFsldIkPLVmRFRNJVNxaLAGWNcZ4qcFRFLDz3TMDZE9sIMu5vS2D3RcU5EVPB0Ioi8q9gzz657yQhi0WMlb17ci8aQv+gnvOjt+3c7eTrzBch0EFWn8HATHW04InxSRFfpRadFdB1exPgKLZcE0jWdEbUjcg8DZSt7TbYmN4moq31bHxUUdKEouG8oPXMsGsOg3wORzDkWRuqU45sM1z0QRe3PiGZEMaK2cF2uKm7DkFta/KuWGdG2fSxykmaUmCx360H3d1XqgVc3OaK1etFKshUjWAq3HnT/ujrkL7eKiPDEfSEySM7K9kmSAs0UgqLsaPfvR4iIJfJIcp7GtoN2/S5JTiPcespdfQIbojP3nK8p66N1TpMly6UA3PAiggNEbrU9QATPjUU9k/PQpPrWJrTNYrP7sctuE25pqSy85Dq1Ra3cp8QpldW2mNJrMMsJ8CzZ6vdZdraFNx6iUu8hcgbeKd99tvpFuHnGXxm4exPav/69JTlPj2+2sp+U5SN3W7AGJudpdqTO+sD+yXFSSJGJBPbJdcoVxW1PDjsaihZD7Mc8aGcIDr3IuXHv5DyeGKGOZsE6cSxyXa38xvGy1yHi7Zu+f/FwPclBf/F1v2367t9PeKTh+qUR2UacIexuONdr0Y8lol+9XWf4Ngd9nGvIBYKEM8eJvKqzUt23IXpRLxrnlT4kRmcG0DotvYj8Vh/i+RGN04ssIsMzRQvDoURUH9KMCHYdLbcvZURGy47WhegWY1H5JB0h2z0MF/aiccaiBSGLaiLZo6PdoBf9XksvRJf0onMicobbRTL0VK//9IpFtxCuRQGrlQLOVYnorjqE3/Dc0baI0ArWLIONSJuILu1FI+lobA3rVKhCFuNDNBIv0obKFDQSdHyILuVF5Y5oCML1Xn4iFl2jFxElJKGCzIgOe9FGI4w3sEP03++/7OSPx9EhuszsGtMfaQ6w3iP6uN939+7h2xyLds9o5LnO6UaTLaL6lFsQ3cq8SCwxJEu5R2QjNXHfvoBuGBGG8nq9QiQL+79IKkQlHoxPhGiKHQ1LDoi5fGU7RHQlQW+fWrdc7msZP6JBD1sdEeqemt3edSu9CDaA1XZQL/V8yfgq01tE5O5hL0/3N9PR1u4m4DqtEa3tG11UXuSJPen6bua7m0FE1zSDFed7RERt1JLl/BSILj3on8qLCm44ExWist7u5rR9V6+QfX4RL5oEIiJdznG8Q4R3SSnKhVWA+3+rJbIvZHKInjG7PvS1KS5XWS0looeqybfnQHTaZ0B+ftDX+kByHiu/VbnK/vfNlZ/2Gbfffyn176qyPSQrX+uU3M6ePET2X6ryQ1n+GNnfVfpXkf1TeQIf6/qfXPl7Vf/uQ2R/H9l/duVfDto/PB72IaiS82jekP/UMsry33X57w59t/3hxxiNPpCcZ5ZK+jxKPMsss8xyXon3jXaWo0gWz7JktJOSRQ3EWTibFzqRPmqfRPaN44v0jb/fJ9tVIFKIqByNhdHYyKLM2dTI4BhYZE9FmIuDpjxIq4AFD5iSZZh2kgoeHk88q0vC40c82gibsKBByoeO5/YzTP3PEWEUHBMCLfKgzJNAj3LNiV+G4BAwCJ5jXy9MeM7VNG0rBHjA3B6f7zcsRVHmTmVWQVkkPPhM7PH5fuXOF4YIS3LwsbKUYxKWlWHEtyc+A+sTmid+OSf+VyGghCMe2jPq2aMMlK+3ZSBZjRRn9s/5p2iM8Y+fZIQKhjx7W9f38wyx3Ctb+2rbeT8hzAD3PjMibdnbsl3qY3vcofe+UZRYHKE+tfXrM7IXy7kfawhGuR9LnJ56eYVsHFQy9fUk92MjAVc/bD/QE8jooJtDMhFp6jFlUVmmIk0CPY/tTRL6XGxv/FDn2o/0gFb1Gbm4Q5eez6acoJXXTd0NqrT+SKntU2jp1bd9AHvtWR8mJCwj/+/1EC1Z4ldQigoU6X3mSiMR2/vB0el9e2nLJCo39H6gCX3Q6rEAj4ACmvuxvrSP63tlmh7Xd4rMGdee10ouuT9clOVQL8xRexXrhZ/xlzm9iMppUE4aej9uJIr7PtSwFzrx7ak9el9vyyYdNpxJSID5PoJNUJYkDctd9jaO+/nIYnsJaaQX4EXarf3hMqKCBt/4UrYX2MftHW+/l/AwtuNoihSXISqjDn1cJrE+nqIcq49sXBIJ6m2/LYeRORm+xBGPfnE5TsCWkOP6eMYR28ffYxfbp9GsL/zibc3iXOZxfUOH6a9OdDa0l9ycxBdns8wyy3Tk//h/3JwgfA/eAAAAAElFTkSuQmCC"
              alt=""
            />

            <Typography
              variant="h5"
              sx={{
                display: "block",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                align: "center",
                marginTop: {xs: 1, sm: 6 , md: 6},
              }}
            >
              See Reults
              <Typography paragraph>
                The results show how much work has to be done.
              </Typography>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}

export default Result