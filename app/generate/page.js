"use client";

<<<<<<< HEAD
import { useState } from "react";
import { Paper, Container, TextField, Box, Button, Typography, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Grid, Card, CardContent, CardActionArea } from "@mui/material";
import { useUser } from "@clerk/nextjs";
import { collection, doc, getDoc, writeBatch } from "firebase/firestore";
import { db } from "../../firebase";
import { useRouter } from 'next/navigation'

export default function Generate() {
  const { isLoaded, user } = useUser();
=======
import { db } from "@/firebase";
import { useUser, SignedOut, SignedIn, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Container,
  TextField,
  Box,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Paper,
  AppBar,
  Toolbar,
} from "@mui/material";
import { writeBatch, doc, getDoc, collection } from "firebase/firestore";

export default function Generate() {
  const { isLoaded, isSignedIn, user } = useUser();
>>>>>>> 09bf754 (Created Navbar, Created and implemented Database, rendered flashcards)
  const [flashcards, setFlashcards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  const router = useRouter();

<<<<<<< HEAD

=======
>>>>>>> 09bf754 (Created Navbar, Created and implemented Database, rendered flashcards)
  const handleSubmit = async () => {
    fetch("api/generate", {
      method: "POST",
      body: text,
    })
<<<<<<< HEAD
    .then(response => response.json())
    .then(data => setFlashcards(data.flashcards))
=======
      .then((res) => res.json())
      .then((data) => setFlashcards(data));
>>>>>>> 09bf754 (Created Navbar, Created and implemented Database, rendered flashcards)
  };

  const handleCardClick = (id) => {
    setFlipped((prev) => ({
      ...prev,
<<<<<<< HEAD
      [id]: !prev[id]
    }));
  }
=======
      [id]: !prev[id],
    }));
  };
>>>>>>> 09bf754 (Created Navbar, Created and implemented Database, rendered flashcards)

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const saveFlashcards = async () => {
    if (!name) {
<<<<<<< HEAD
      alert('Please enter a name')
      return
=======
      alert("Please enter a name for your flashcard set");
      return;
>>>>>>> 09bf754 (Created Navbar, Created and implemented Database, rendered flashcards)
    }
    const batch = writeBatch(db);
    const userDocRef = doc(collection(db, "users"), user.id);
    const docSnap = await getDoc(userDocRef);

<<<<<<< HEAD
    const batch = writeBatch(db);
    const userDocRef = doc(collection(db, "users"), user.id);
    const docSnap = await getDoc(userDocRef)

    if (docSnap.exists()) {
      const collections = docSnap.data().flashcards || []
      if (collections.find((f) => f.name === name)) {
        alert('Flashcard collection with the same name already exists.')
        return
      } else {
        collections.push({name})
        batch.set(userDocRef, {flashcards: collections}, {merge: true})
      }
    } else {
      batch.set(userDocRef, {flashcards: [{name}]})
    }

    const columnRef = collection(userDocRef, name)
    flashcards.forEach((flashcard) => {
      const cardDocRef = doc(columnRef)
      batch.set(cardDocRef, flashcard)
    })

    await batch.commit()
    handleClose()
    router.push('/flashcards')
=======
    if (docSnap.exists()) {
      const collections = docSnap.data().flashcards || [];
      if (collections.find((f) => f.name === name)) {
        alert("Flashcard set already exists");
        return;
      } else {
        collections.push({ name });
        batch.set(userDocRef, { flashcards: collections }, { merge: true });
      }
    } else {
      batch.set(userDocRef, { flashcards: [{ name }] });
    }

    const colRef = collection(userDocRef, name);
    flashcards.forEach((flashcard) => {
      const cardDocRef = doc(colRef);
      batch.set(cardDocRef, flashcard);
    });

    await batch.commit();
    handleClose();
    router.push("/flashcards");
>>>>>>> 09bf754 (Created Navbar, Created and implemented Database, rendered flashcards)
  };

  return (
    <Container maxWidth="md">
<<<<<<< HEAD
      <Box sx={{ my: 4, mb: 6, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Generate Flashcards
        </Typography>
        <Paper sx={{p: 4, width: '100%'}}>
          <TextField
            value={text}
            onChange={(e) => setText(e.target.value)}
            label="Enter text"
=======
      {/* <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Flashcard SaaS
          </Typography>
          <SignedOut>
            <Button color="inherit" href="/sign-in">
              Login
            </Button>
            <Button color="inherit" href="/sign-up">
              Sign Up
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar> */}
      <Box
        sx={{
          mt: 4,
          mb: 6,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">Generate Flashcards</Typography>
        <Paper
          sx={{
            p: 4,
            width: "100%",
          }}
        >
          <TextField
            value={text}
            onChange={(e) => setText(e.target.value)}
            label="Enter Text"
>>>>>>> 09bf754 (Created Navbar, Created and implemented Database, rendered flashcards)
            fullWidth
            multiline
            rows={4}
            variant="outlined"
<<<<<<< HEAD
            sx={{ mb: 2 }}
=======
            sx={{
              mb: 2,
            }}
>>>>>>> 09bf754 (Created Navbar, Created and implemented Database, rendered flashcards)
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            fullWidth
          >
<<<<<<< HEAD
            Generate Flashcards
=======
            Submit
>>>>>>> 09bf754 (Created Navbar, Created and implemented Database, rendered flashcards)
          </Button>
        </Paper>
      </Box>

      {flashcards.length > 0 && (
        <Box sx={{ mt: 4 }}>
<<<<<<< HEAD
          <Typography variant="h5" component="h2" gutterBottom>
            Flashcards Preview
          </Typography>
=======
          <Typography variant="h5">Flashcards Preview</Typography>
>>>>>>> 09bf754 (Created Navbar, Created and implemented Database, rendered flashcards)
          <Grid container spacing={3}>
            {flashcards.map((flashcard, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
<<<<<<< HEAD
                  <CardActionArea
                    onClick={() => handleCardClick(index)}
                  >
                    <CardContent>
                      <Box
                        sx={{
                          perspective: '1000px',
                          "& > div": {
                            transition: 'transform 0.6s',
                            transformStyle: 'preserve-3d',
                            position: 'relative',
                            width: "100%",
                            height: "200px",
                            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
                            transform: flipped[index] ? 'rotateY(180deg' : 'rotateY(0deg)',
                          },
                          "& > div > div": {
                            position: 'absolute',
                            width: "100%",
                            height: "100%",
                            backfaceVisibility: 'hidden',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 2,
                            boxSizing: 'border-box',
                          },
                          "& > div > div:nth-of-type(2)": {
                            transform: 'rotateY(180deg)',
                          }
                        }}
                      >
                        <div>
                          <Typography
                            variant="h5"
                            component="div"
                          >
                            {flashcard.front}
                          </Typography>
                        </div>
                        <div>
                          <Typography
                            variant="h5"
                            component="div"
                          >
                            {flashcard.back}
                          </Typography>
                        </div>
=======
                  <CardActionArea onClick={() => handleCardClick(index)}>
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
                            transform: flipped[index]
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
                              {flashcard.front}
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
                              {flashcard.back}
                            </Typography>
                          </Box>
                        </Box>
>>>>>>> 09bf754 (Created Navbar, Created and implemented Database, rendered flashcards)
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>

<<<<<<< HEAD
          <Box sx={{mt: 4, display: 'flex', justifyContent: "center"}}>
=======
          <Box
            sx={{
              mt: 4,
              display: "flex",
              justifyContent: "center",
            }}
          >
>>>>>>> 09bf754 (Created Navbar, Created and implemented Database, rendered flashcards)
            <Button variant="contained" color="primary" onClick={handleOpen}>
              Save
            </Button>
          </Box>
<<<<<<< HEAD

          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Save Flashcards</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Enter a name for your flashcard collection
              </DialogContentText>
              <TextField
                autofocus
                margin="dense"
                label="Collection Name"
                type="text"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                variant="outlined"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={saveFlashcards}>Save</Button>
            </DialogActions>
          </Dialog>
        </Box>
      )}
=======
        </Box>
      )}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Save Flashcards</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter a name for your flashcards collection
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Collection Name"
            type="text"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={saveFlashcards}>Save</Button>
        </DialogActions>
      </Dialog>
>>>>>>> 09bf754 (Created Navbar, Created and implemented Database, rendered flashcards)
    </Container>
  );
}