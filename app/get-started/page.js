'use client'

import React from 'react'
import {Box, Typography, Button, Grid, Container, Card, CardActionArea, CardContent} from '@mui/material'

export default function GetStarted() {
    return (
        <Container maxWidth="md">
            <Grid container spacing={3} sx={{ mt: 4 }}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <Typography variant="h5" component="div" onClick={() => window.location.href = '/flashcards'}>
                                    My Flashcards
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <Typography variant="h5" component="div" onClick={() => window.location.href = '/generate'}>
                                    Generate Flashcards
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card> 
                </Grid>
            </Grid>
        </Container>
    )
}
