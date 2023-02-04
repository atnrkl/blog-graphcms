import Header from "./Header";
import "../styles/globals.scss";
import Footer from "./Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="body">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
