import * as React from 'react';
import { Container } from '@mui/system';
import {Box, Card, CardActions, CardContent, Button, Typography} from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import Image from "../../images/nerdyHeart.png"
import "../../styles/Home.css"

export default function Home() {
    return (
        <Container className="home">
            <Grid2 container spacing={2}>
                <Grid2 xs={4}>
                    <Box
                        component="img"
                        sx={{
                            width: 300,
                            height: 300,
                        }}
                        alt="an image of my character"
                        src={Image}
                    />
                </Grid2>
                <Grid2 xs={8}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography variant="h5">
                                Welcome to my site!
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                It's still a work in progress
                            </Typography>
                            <Typography variant="body1">
                                Here you can view my art archive and also view my commission info! And yes, I did build a whole site just for my art archive
                            </Typography>
                        </CardContent>
                        {/* <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions> */}
                    </Card>
                </Grid2>
            </Grid2>
        </Container>
    );
}