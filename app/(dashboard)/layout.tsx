import Link from "next/link";
import "@/assets/css/reset.css";
import "@/assets/css/colors.css";
import "@/assets/css/globals.css";
import Head from "next/head";
import Header from "@/components/Header";

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {children}
      </Head>
      <body>
        <Header />
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
