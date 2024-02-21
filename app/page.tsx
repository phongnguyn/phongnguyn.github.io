import Portfolio from './ui/porfolio';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import Title from './ui/title';

export default function Home() {
  return (
    <main className="pt-10 pb-6 flex items-center flex-col">
      <div className="text-center">
        <Title></Title>
        <p className="text-2xl font-normal dark:text-white pt-16">
          web developer / data engineer
        </p>
        <p className="text-1xl text-md leading-8 dark:text-white pt-8 max-w-xl">
          My name is Tan Loc, but I go with John. I am an indie full-stack web developer and try to be good at it. here&apos;s a collection of some of my simple projects.
        </p>
      </div>
      <Portfolio/>
      <div className="text-5xl flex justify-center gap-16">
        <a href="https://www.linkedin.com/in/tan-loc-nguyen-115611236/" target='_blank'><AiFillLinkedin/></a>
        <a href="https://github.com/phongnguyn" target='_blank'><AiFillGithub/></a>
      </div>
    </main>
  );
}
