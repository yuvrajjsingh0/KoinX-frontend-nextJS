import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/common/Header"
import RightAdv from "@/components/common/RightAdv";
import CurrencyDataProvider from "@/util/context/CurrencyDataProvider";
import TrendingCoins from "@/components/coin/trendingcoins";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Koinx",
  description: "CryptoCurrency is Fun!",
};

export default function RootLayout({ children, params }: Readonly<{
    children: React.ReactNode;
    params: any;
}>) {
  return (
    <html lang="en" style={{scrollBehavior:'smooth'}}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <Header/>
        <div className="p-4 ml-[11px] md:ml-[40px] ">
          Cryptocurrencies {'>>'} {params.coin.charAt(0).toUpperCase() + params.coin.slice(1)}
        </div>
        <CurrencyDataProvider>
          <div className="flex flex-col px-[16px] xl:flex-row xl:px-[57px] lg:gap-[20px] ">
            <div className="xl:max-w-[67%]">{children}</div>
            <div>
              <RightAdv />
              <TrendingCoins />
            </div>
          </div>
        </CurrencyDataProvider>
      </body>
    </html>
  );
}
