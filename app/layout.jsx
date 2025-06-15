import SidebarWrapper from "@/components/SidebarWrapper";
import "./globals.css";
import CardInfo from "@/components/CardInfo";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex gap-2.5 w-full h-[100vh]">
          <SidebarWrapper />

          <main className="w-full h-[100vh] bg-[#080716] pt-16 backdrop-blur-3xl ">
            <CardInfo />
          </main>
        </div>
      </body>
    </html>
  );
}
