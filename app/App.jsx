"use client";

import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";

import {useEffect, useState} from "react";
import {useStore} from "@/app/store/app-store";

export const App = (props) => {
    const store = useStore();

    useEffect(() => {
        store.checkAuth();
    }, []);

    return (
        <>
            <Header/>
            {props.children}
            <Footer/>
        </>
    )
}