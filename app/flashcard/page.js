"use client";

import { useState, useEffect } from "react";
import { db } from "@/firebase";
import { useUser, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import {
  Container,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { doc, getDocs, collection } from "firebase/firestore";
import { useSearchParams } from "next/navigation";

export default function Flashcard() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [flashcards, setFlashcards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const searchParams = useSearchParams();
  const search = searchParams.get("id");

  useEffect(() => {
    async function getFlashcard() {
      if (!search || !user) return;

      const colRef = collection(doc(collection(db, "users"), user.id), search);
      const docs = await getDocs(colRef);
      const flashcards = [];
      docs.forEach((doc) => {
        flashcards.push({ id: doc.id, ...doc.data() });
      });
      setFlashcards(flashcards);
    }
    getFlashcard();
  }, [search, user]);

  const handleCardClick = () => {
    setFlipped((prev) => !prev);
  };

  const handleNext = () => {
    setFlipped(false); // Reset flip state
    setCurrentIndex((prev) => (prev < flashcards.length - 1 ? prev + 1 : prev));
  };

  const handlePrevious = () => {
    setFlipped(false); // Reset flip state
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <Container maxWidth="md">
      {flashcards.length > 0 && (
        <Grid container spacing={3} sx={{ mt: 4, justifyContent: "center" }}>
          <Grid item xs={12} sm={8} md={6}>
            <Card>
              <CardActionArea onClick={handleCardClick}>
                <CardContent>
                  <Box
                    sx={{
                      perspective: "1000px",
                      position: "relative",
                      width: "100%",
                      height: "200px",
                    }}
                  >
                    <Box
                      sx={{
                        transition: "transform 0.6s",
                        transformStyle: "preserve-3d",
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        transform: flipped
                          ? "rotateY(180deg)"
                          : "rotateY(0deg)",
                      }}
                    >
                      {/* Front Side */}
                      <Box
                        sx={{
                          position: "absolute",
                          width: "100%",
                          height: "100%",
                          backfaceVisibility: "hidden",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: "#fff",
                          borderRadius: "8px",
                          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                        }}
                      >
                        <Typography variant="h6">
                          {flashcards[currentIndex].front}
                        </Typography>
                      </Box>
                      {/* Back Side */}
                      <Box
                        sx={{
                          position: "absolute",
                          width: "100%",
                          height: "100%",
                          backfaceVisibility: "hidden",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: "#f0f0f0",
                          transform: "rotateY(180deg)",
                          borderRadius: "8px",
                          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                        }}
                      >
                        <Typography variant="h6">
                          {flashcards[currentIndex].back}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          {/* Navigation Buttons */}
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              variant="contained"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
            >
              Previous
            </Button>
            <Button
              variant="contained"
              onClick={handleNext}
              disabled={currentIndex === flashcards.length - 1}
            >
              Next
            </Button>
          </Grid>
        </Grid>
      )}
    </Container>
  );
}
