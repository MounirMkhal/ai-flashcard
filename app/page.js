import { SignedIn } from "@clerk/nextjs";
import { Typography, Button, Box, Grid } from "@mui/material";

export default function Home() {
  // Stripe Integration
  const handleSubmit = async () => {
    const checkoutSession = await fetch("/api/checkout_sessions", {
      method: "POST",
      headers: { origin: "http://localhost:3000" },
    });
    const checkoutSessionJson = await checkoutSession.json();

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      sessionId: checkoutSessionJson.id,
    });

    if (error) {
      console.warn(error.message);
    }
  };

  return (
    <>
      {/* <Container maxWidth="lg">
        <Head>
          <title>Flashcard App</title>
          <meta
            name="description"
            content="Create flashcards from your texts"
          />
        </Head> */}
      </Container> */}

      {/* Hero Section */}
      <Box sx={{ textAlign: "center", my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Flashcard SaaS
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          The easiest way to create flashcards from your text.
        </Typography>
        <SignedIn>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2, mr: 2 }}
            href="/generate"
          >
            Get Started
          </Button>
        </SignedIn>
      </Box>

      {/* Features */}
      <Box sx={{ my: 6, px: 2, maxWidth: '1200px', mx: 'auto'}}>
        <Typography variant="h4" component="h2" gutterBottom textAlign="center">
          Features
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={10} md={4}>
            <Box
              sx={{
                p: 3,
                border: "1px solid",
                borderColor: "grey.300",
                borderRadius: 2,
              }}
            >
              <Typography variant="h6" gutterBottom>Easy Text Input</Typography>
              <Typography>
                {" "}
                Simply input your text and let our software do the rest. Creating flashcards has never been easier.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={10} md={4}>
            <Box
              sx={{
                p: 3,
                border: "1px solid",
                borderColor: "grey.300",
                borderRadius: 2,
              }}
            >
              <Typography variant="h6" gutterBottom>Smart Flashcards</Typography>
              <Typography>
                {" "}
                Our AI intelligently breaks down your text into concise
                flashcards, perfect for studying.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={10} md={4}>
            <Box
              sx={{
                p: 3,
                border: "1px solid",
                borderColor: "grey.300",
                borderRadius: 2,
              }}
            >
              <Typography variant="h6" gutterBottom>Accessible Anywhere</Typography>
              <Typography>
                {" "}
                Access your flashcards from any device, at anytime. Study on the
                go with ease.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Pricing */}
      <Box sx={{ my: 6, textAlign: "center", px: 2, maxWidth: '1200px', mx: 'auto'}}>
        <Typography variant="h4" component="h2" gutterBottom>
          Pricing
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={10} md={6}>
            <Box
              sx={{
                p: 3,
                border: "1px solid",
                borderColor: "grey.300",
                borderRadius: 2,
              }}
            >
              <Typography variant="h6" gutterBottom>Basic</Typography>
              <Typography variant="h5" gutterBottom>$5 / month</Typography>
              <Typography>
                {" "}
                Access to basic flashcard features and limited storage.
              </Typography>
              <Button variant="contained" color="primary" sx={{mt: 2}}>
                Choose Basic
              </Button>
            </Box>
          </Grid>

          <Grid item xs={10} md={6}>
            <Box
              sx={{
                p: 3,
                border: "1px solid",
                borderColor: "grey.300",
                borderRadius: 2,
              }}
            >
              <Typography variant="h6" gutterBottom>Basic</Typography>
              <Typography variant="h5" gutterBottom>$10 / month</Typography>
              <Typography>
                {" "}
                Augmented flashcards and storage, with priority support.
              </Typography>
              <Button variant="contained" color="primary" sx={{mt: 2}}>
                Choose Pro
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}