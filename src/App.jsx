import { useState, useEffect, Component } from "react";
import { longList } from "./data";
import Part from "./components/part";


const App = () => {
  const [data, setData] = useState(longList);
  const [activeIndex, setActiveIndex] = useState(0);
  const item = data[activeIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeIndex < data.length - 1) {
        setActiveIndex((prevIndex) => prevIndex + 1);
      } else {
        setActiveIndex(0);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex, data.length]);

  const increase = () => {
    if (activeIndex < data.length - 1) {
      setActiveIndex((prevIndex) => prevIndex + 1);
    } else {
      setActiveIndex(0);
    }
  };

  const decrease = () => {
    if (activeIndex > 0) {
      setActiveIndex((prevIndex) => prevIndex - 1);
    } else {
      setActiveIndex(data.length - 1);
    }
  };

  return (
    <div>
      <Part
        item={item}
        increase={increase}
        decrease={decrease}
      />
    </div>
  );
};

export default App;