import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/common/Header"
import RightAdv from "@/components/common/RightAdv";
import CurrencyDataProvider from "@/util/context/CurrencyDataProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Koinx",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <div className="p-4 ml-[11px] md:ml-[40px] ">
          Cryptocurrencies{'>>'}Bitcoin
        </div>
        <div className="flex flex-col px-[16px] lg-2:flex-row lg-2:px-[57px] lg:gap-[20px] ">
          <div className="flex-grow">
            <CurrencyDataProvider>
              {children}
            </CurrencyDataProvider>
          </div>
          <RightAdv/>
        </div>
      </body>
    </html>
  );
}
