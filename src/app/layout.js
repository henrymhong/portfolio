import { Inter, Chakra_Petch, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const chakra = Chakra_Petch({
    weight: "500",
    subsets: ["latin"],
    variable: "--font-chakra",
});

const fira = Fira_Code({
    weight: "300",
    subsets: ["latin"],
    variable: "--font-fira",
});

export const metadata = {
    title: "Henry's Portfolio",
    description: "Henry's React projects.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${chakra.variable} ${fira.variable}`}
            >
                {children}
            </body>
        </html>
    );
}
