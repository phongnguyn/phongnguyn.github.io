'use client';

import { usePathname } from "next/navigation";
import React from "react";


function Iframe({src, height, width}:any){
        return (
            <div>
                <iframe src={src} height={height} width={width}  className="rounded-lg"/>
            </div>
        );
    
};

export default function Visuals() {
    const pathname = usePathname();
    return (
        <div className="flex justify-center">
            <Iframe
                src="https://phongnguyn.github.io/day-night_visual/"
                height="600" width="600"
            ></Iframe>
        </div>
    );
}