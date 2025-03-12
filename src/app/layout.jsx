import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const RootLayout = ({ children }) => {
    return (
        <html lang="en" className={roboto.className}>
            <body cz-shortcut-listen="true">{children}</body>
        </html>
    );
};

export default RootLayout;
