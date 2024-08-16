"use client"; // Mark the component as a Client Component

import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { styled } from "@mui/material/styles";

// Custom styles for the logo to be clickable and for hover effects on buttons
const LogoButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  textTransform: "none",
  fontSize: "1.5rem",
  fontWeight: "bold",
  transition: "color 0.3s ease",
  "&:hover": {
    color: theme.palette.primary.light,
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  transition: "transform 0.3s ease, color 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)",
    color: theme.palette.primary.light,
  },
}));

const Navbar = () => {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push("/"); // Navigate to the home page
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#3f51b5" }}>
      <Toolbar>
        {/* Logo Section */}
        <LogoButton onClick={handleLogoClick}>
          Flashcard SaaS
        </LogoButton>

        {/* Spacer to push buttons to the right side */}
        <Box sx={{ flexGrow: 1 }} />

        {/* SignedIn Section */}
        <SignedIn>
          {/* Group buttons and user icon */}
          <Box display="flex" alignItems="center">
            <NavButton href="/flashcards">Flashcards</NavButton>
            <NavButton href="/generate">Generate</NavButton>
          </Box>
          <UserButton sx={{ marginLeft: 2 }} /> {/* Adding some spacing */}
        </SignedIn>

        {/* SignedOut Section */}
        <SignedOut>
          <NavButton href="/sign-in">Login</NavButton>
          <NavButton href="/sign-up">Sign Up</NavButton>
        </SignedOut>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
