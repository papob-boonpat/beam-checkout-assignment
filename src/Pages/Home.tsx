import { useState } from "react";
import Card, { CardProps } from "../Components/Card";

const Home = () => {
  const mock = Array(6).fill({
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  });
  const [data, setData] = useState<CardProps[]>(mock);

  const handleSeeMore = () => {
    setData((prev) => prev.concat([...mock]));
  };

  return (
    <div className="bg-[#F0F1F6]   flex flex-col   ">
      <div className="h-36 w-full md:h-72 text-4xl md:text-7xl text-white news-room-bg flex items-center justify-center">
        News room
      </div>
      <div className="p-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:mt-4">
        {data.map(({ title, description }, index) => (
          <Card
            key={`${title}_${index}`}
            title={title}
            description={description}
          />
        ))}
      </div>
      <button
        onClick={handleSeeMore}
        className="mx-6 mb-6 text-nav bg-white  md:mx-auto h-11 rounded-full md:w-80 md:mt-8  md:mb-20 active:bg-[#E2E4ED]"
      >
        See more
      </button>
    </div>
  );
};

export default Home;
