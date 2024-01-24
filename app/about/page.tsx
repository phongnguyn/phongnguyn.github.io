import {Education, Experience} from "../ui/about/sect";

export default function page() {
    return (
        <main className="pt-20 pb-6 flex items-center flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Education></Education>
                <Experience></Experience>
            </div>
        </main>
    );
}