"use client"
import React from "react";
import { useCurrencyData } from "@/util/context/CurrencyDataProvider";

import { useParams, useRouter } from "next/navigation";
import Details from "@/components/coin/details";
import { Charts } from "@/components/coin/charts";

export default function CoinPage() {

    const { coinData }:any = useCurrencyData();
    const params = useParams();
    console.log(params.slug);

    return (
        <div className="">
            <Charts data={coinData} />
            <Details />
            <AllCoins/>
        </div>
    );
}
