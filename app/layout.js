import SidebarWrapper from "@/components/SidebarWrapper";
import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex gap-2.5 w-full h-[100vh] bg-blue-950">
          <SidebarWrapper />

          <main className="w-full h-[100vh] bg-amber-300"></main>
        </div>
      </body>
    </html>
  );
}
