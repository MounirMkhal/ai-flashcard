<<<<<<< HEAD
'use client'

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Container, AppBar, Toolbar, Typography, Button, styled } from "@mui/material";
import Head from "next/head";
import Link from "next/link";


const Navbar = () => {
  const NoStyleLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: 'inherit',
  }));

  return (
    <Container maxWidth="lg">
      <Head>
        <title>Flashcard App</title>
        <meta
          name="description"
          content="Create flashcards from your texts"
        />
      </Head>

      {/* Header and Navbar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            <NoStyleLink href="/" sx={{textDecoration: 'none'}}>Flashcard SaaS</NoStyleLink>
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
      </AppBar>
    </Container>
  );
}

export default Navbar
=======
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <AppBar position="static">
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
    </AppBar>
  );
};

export default Navbar;
>>>>>>> 09bf754 (Created Navbar, Created and implemented Database, rendered flashcards)
