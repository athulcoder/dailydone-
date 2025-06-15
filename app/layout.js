import SideNav from "@/components/SideNav";
import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex gap-2.5 w-full h-[100vh] bg-blue-950">
          <SideNav />
        </div>
      </body>
    </html>
  );
}
