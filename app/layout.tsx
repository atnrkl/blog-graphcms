import Header from "./Header";
import "../styles/globals.scss";

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
      </body>
    </html>
  );
}
