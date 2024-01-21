import Portfolio from "./ui/porfolio";


export default function Home() {
  return (
    <main className="pt-20 pb-6 flex items-center flex-col">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold dark:text-white">John Nguyen</h1>
        <p className="text-2xl font-normal dark:text-white pt-16">
          web developer / data engineer
        </p>
        <p className="text-1xl font-bold dark:text-white pt-8 max-w-xl">
          I am an indie full-stack web developer and try to be good at it. here's a collection of some of my simple projects.
        </p>
      </div>
      <Portfolio/>
    </main>
  );
}
