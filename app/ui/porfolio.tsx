import data from "@/app/lib/data";
import PortfolioItem from "./portfolioItem";

export default function Portfolio() {
    return(
        <div className="text-center pt-20">
            <p className="text-4xl font-medium">My Projects</p>
            <div className="flex p-6">
                {data.map(project => (
                    <PortfolioItem
                        title={project.title}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    );
}