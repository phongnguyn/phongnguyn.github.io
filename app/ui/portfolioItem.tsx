export default function PortfolioItem({ title, link }: any) {
    return (

        <a href={link} target='_blank' className="block max-w-sm m-8 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>

    );
}