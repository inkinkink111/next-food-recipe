import { cn } from "@/lib/utils";
import MainNavbar from "../components/navbar/MainNavbar";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Provider from "@/components/Provider";

export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

const inter = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiase",
          inter.variable
        )}
      >
        <Provider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <MainNavbar />
            <div className="container">
              <div className="flex flex-col justify-center items-center">
                {children}
              </div>
            </div>
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
