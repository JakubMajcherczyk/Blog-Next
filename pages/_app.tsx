import { ThemeProvider } from "../context/ThemeContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
