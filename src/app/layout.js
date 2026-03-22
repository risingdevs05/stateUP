import "./globals.css";

export const metadata = {
  title: "Heritage of Avadh",
  description: "Uttar Pradesh Tourism",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-surface text-on-surface">
        {children}
      </body>
    </html>
  );
}