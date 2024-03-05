"use client";

import React from "react";
import { useCurrencyData } from "@/context/CurrencyDataProvider";

import { useRouter } from "next/navigation";
import Details from "@/components/coin/details";
import Charts from "@/components/coin/charts";

export default function CoinPage() {

    const router = useRouter();
    //console.log(router.query);

    return (
        <div className="">
            <Charts />
            <Details />
        </div>
    );
};
