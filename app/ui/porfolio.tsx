'use client';

import projects from "@/app/lib/data";
import PortfolioItem from "./portfolioItem";

export default function Portfolio() {
    return(
        <div className="text-center pt-20">
            <p className="text-4xl font-medium">My Projects</p>
            <div className="flex flex-col md:flex-row p-6">
                {projects.map(project => (
                    <PortfolioItem
                        key={project.id}
                        title={project.title}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    );
}