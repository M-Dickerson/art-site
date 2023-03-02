import * as React from 'react';
import { Container } from '@mui/system';
import { Box, Card, CardContent, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import Image from "../../images/me.png"

export default function About() {
  return (
    <Container className="homeContainer">
      <Grid2 container spacing={2}>
        <Grid2 xs={12} md={5}>
          <Box
            component="img"
            sx={{
              width: 300,
              height: "auto",
            }}
            alt="an image of my character"
            src={Image}
          />
        </Grid2>
        <Grid2 xs={12} md={7} className="test">
          <Card sx={{ minWidth: 275, fontFamily: 'Quicksand' }}>
            <CardContent>
              <Typography variant="h4">
                About the artist
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                D | she/her
              </Typography>
              <Typography variant="body1">
                Hi there! I'm D and I've been drawing for over 10+ years now
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>
    </Container>
  );
}