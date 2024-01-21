import data from "@/app/lib/data";
import PortfolioItem from "./portfolioItem";

export default function Portfolio() {
    return(
        <div className="flex max-w-screen-lg p-6">
            {data.map(project => (
                <PortfolioItem
                    title={project.title}
                    link={project.link}
                />
            ))}
        </div>
    );
}