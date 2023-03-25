import "./globals.css";
import styles from "./page.module.css";

export const metadata = {
  title: "Problems - Leetcode",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={styles.navbar} />
        {children}
      </body>
    </html>
  );
}
