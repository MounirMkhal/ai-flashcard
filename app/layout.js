import { Inter } from "next/font/google";
import Navbar from '@/app/components/Navbar'
import { ClerkProvider } from "@clerk/nextjs";
<<<<<<< HEAD
import "./globals.css";
=======
import Navbar from "./components/Navbar";
>>>>>>> 09bf754 (Created Navbar, Created and implemented Database, rendered flashcards)

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
<<<<<<< HEAD
  title: "Flashcards SaaS",
  description: "Create a study guide with flashcards AI",
=======
  title: "Flashcard AI",
  description: "Create flashcards from your texts",
>>>>>>> 09bf754 (Created Navbar, Created and implemented Database, rendered flashcards)
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
<<<<<<< HEAD
          <Navbar />
          <main>{children}</main>
=======
            <Navbar />
            {children}
>>>>>>> 09bf754 (Created Navbar, Created and implemented Database, rendered flashcards)
        </body>
      </html>
    </ClerkProvider>
  );
}