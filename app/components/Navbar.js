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
        <Typography
          variant="h6"
          component="div"
          sx={{ cursor: 'pointer', color: 'white' }}
          onClick={handleLogoClick}
          flexGrow={1}
        >
          Flashcard SaaS
        </Typography>

        {/* SignedIn Section */}
        <SignedIn>
          <Box display="flex" alignItems="center">
            <UserButton sx={{ marginLeft: 2 }} /> {/* Adding some spacing */}
          </Box>
        </SignedIn>

        {/* SignedOut Section */}
        <SignedOut>
          <Box display="flex" alignItems="center">
            <Button href="/sign-in" color="inherit" sx={{ marginLeft: 2 }}>
              Login
            </Button>
            <Button href="/sign-up" color="inherit" sx={{ marginLeft: 2 }}>
              Sign Up
            </Button>
          </Box>
        </SignedOut>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
