import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../components/Header";

import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar";
import { AppSidebar } from "../components/app-sidebar";
import { Toaster } from "../components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ELT Global",
  description: "An exam platform.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100`}
      >
        <Header />
        <SidebarProvider>
          <AppSidebar />
          <SidebarTrigger />
          <main className="flex-1">{children}</main>
          <Toaster />
        </SidebarProvider>
      </body>
    </html>
  );
}
