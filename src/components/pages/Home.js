import * as React from 'react';
import { Container } from '@mui/system';
import {Box, Card, CardContent, Typography} from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import Image from "../../images/nerdyHeart.png"
import "../../styles/Home.css"

export default function Home() {
    return (
        <Container className="homeContainer">
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
                            <Typography variant="h4">
                                Welcome to my site!
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                It's still a work in progress pls don't judge
                            </Typography>
                            <Typography variant="body1">
                                Here you can view my art archive and also view my commission info!
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid2>
            </Grid2>
        </Container>
    );
}