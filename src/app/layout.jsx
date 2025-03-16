import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Navbar from "./_components/Navbar";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const RootLayout = ({ children }) => {
    return (
        <html lang="en" className={roboto.className} data-theme="light">
            <body cz-shortcut-listen="true">
                <main>
                    <Header />
                    <Navbar />
                    {children}
                </main>
            </body>
        </html>
    );
};

export default RootLayout;
