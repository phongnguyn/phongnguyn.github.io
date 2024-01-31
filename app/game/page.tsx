'use client';

import { usePathname } from "next/navigation";
import clsx from "clsx";
import React from "react";
import ReactDOM from "react-dom";


function Iframe({src, height, width}:any){
        return (
            <div>
                <iframe src={src} height={height} width={width} />
            </div>
        );
    
};

export default function Game() {
    const pathname = usePathname();
    return (
        <div className="flex justify-center">
            <Iframe
                src="https://phongnguyn.github.io/minesweeper/"
                height="1000" width="1000"
            ></Iframe>
        </div>
    );
}