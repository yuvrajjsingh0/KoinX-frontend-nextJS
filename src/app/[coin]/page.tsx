"use client"
import React from "react";
import { useCurrencyData } from "@/util/context/CurrencyDataProvider";

import { useParams, useRouter } from "next/navigation";
import { Charts } from "@/components/coin/charts";
import AllCoins from "@/components/coin/allcoins";
import Sentiment from "@/components/coin/sentiment";
import About from "@/components/coin/about";
import Tokenomics from "@/components/coin/tokenomics";
import Performance from "@/components/coin/performance";
import Team from "@/components/coin/team";
import Link from "next/link";

export default function CoinPage() {

    const { coinData }:any = useCurrencyData();
    const params = useParams();
    console.log(params.slug);

    return (
        <div className="">
            <Charts data={coinData} />
            <div>
                <div className="py-6 overflow-x-auto">
                    <div className="flex items-center gap-10   borderBottom font-semibold h-[50px]">
                    <p className="active navDetails"><Link href="#overview" scroll={true}>Overview</Link></p>
                    <p className="navDetails"><Link href="#overview" scroll={true}>Fundamentals</Link></p>
                    <p className="navDetails"><Link href="#overview" scroll={true}>News Insights</Link></p>
                    <p className="navDetails"><Link href="#sentiments" scroll={true}>Sentiments</Link></p>
                    <p className="navDetails"><Link href="#team" scroll={true}>Team</Link></p>
                    <p className="navDetails"><Link href="#technicals" scroll={true}>Technicals</Link></p>
                    <p className="navDetails"><Link href="#tokenomics" scroll={true}>Tokenomics</Link></p>
                    </div>
                </div>

                <div id="overview"><Performance /></div>
                <div id="sentiments"><Sentiment/></div>
                <div id="technicals"><About/></div>
                <div id="tokenomics"><Tokenomics/></div>
                <div id="team"><Team/></div>

            </div>
            <AllCoins/>
        </div>
    );
}
