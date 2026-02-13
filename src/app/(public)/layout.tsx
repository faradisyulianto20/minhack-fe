// import "./globals.css";
import Navbar from "../components/layout/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black`}
      >
        {children}
        <Navbar />
      </body>
    </html>
  );
}
