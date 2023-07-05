import "./globals.css";
import { CountriesProvider } from "@/context/CountriesContext";
import Header from "@/components/Header";

import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({
  weight: ["300", "600", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Countries App",
  description: "An app to view countries and their details",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <CountriesProvider>
        <body className={`bg-lm-gray text-lm-txt ${nunitoSans.className}`}>
          <Header />
          {children}
        </body>
      </CountriesProvider>
    </html>
  );
}
