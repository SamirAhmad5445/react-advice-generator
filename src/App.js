import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [advice, setAdvice] = useState(
    "Fast women and slow horses will ruin your life"
  );
  const [count, setCount] = useState(0); //? what is the strict mode!!!

  const getAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="min-h-screen py-8 bg-slate-950 text-sky-50 grid place-content-center">
      <div className="max-w-lg  bg-slate-700 p-8 m-6 rounded-lg border border-sky-400 shadow-md shadow-slate-800">
        <h1 className="text-3xl md:text-4xl xl:text-5xl text-center font-bold italic mb-8 before:content-[open-quote] after:content-[close-quote] before:text-sky-400 after:text-sky-400">
          {advice}
        </h1>
        <div className="flex justify-between items-center gap-8">
          <AdviceCount count={count} />
          <button
            onClick={getAdvice}
            className="px-6 py-2 border-2 border-sky-600 hover:bg-sky-500 hover:border-sky-500 font-bold rounded-full transition-colors duration-300"
          >
            Get Advice &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}

const AdviceCount = ({ count }) => {
  return (
    <p className="text-slate-400">
      Advice Count: <span className="text-sky-400 font-bold">{count}</span>
    </p>
  );
};
