import "./globals.css";
import { Mulish } from "next/font/google";
import { Providers } from "./providers";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
