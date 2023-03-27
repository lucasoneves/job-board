import "@/assets/css/reset.css";
import "@/assets/css/globals.css";
import "@/assets/css/colors.css";

export default function AuthRootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
