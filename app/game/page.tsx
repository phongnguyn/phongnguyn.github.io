'use client';

import { usePathname } from "next/navigation";
import React from "react";


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