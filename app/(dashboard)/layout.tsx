import Link from "next/link";
import "@/assets/css/reset.css";
import "@/assets/css/colors.css";
import "@/assets/css/globals.css";
import Header from "@/components/Header";

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
