import "./globals.css";
import Navbar from '../components/Navbar';

export const metadata = {
  title: "Journey Book",
  description: "Share your travel experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Poppins:wght@400;700&display=swap" 
          rel="stylesheet"
        />
      </head>
      <body>
      <Navbar />
        {children}
      </body>
    </html>
  );
}

{/* add nav and header in this file to share across all pages !! */}