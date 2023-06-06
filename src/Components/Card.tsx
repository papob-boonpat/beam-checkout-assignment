import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export type CardProps = {
  title: string;
  description: string;
};
const Card = ({ title, description }: CardProps) => {
  return (
    <div className="rounded-2xl overflow-hidden flex-col flex hover:drop-shadow-[0_5px_16px_rgba(44,70,181,0.1)] h-80 bg-white">
      <div className="bg-[#a3aabf] h-36 w-full">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <line
            x1="0"
            y1="0"
            x2="100"
            y2="100"
            vector-effect="non-scaling-stroke"
            stroke="white"
          />
          <line
            x1="0"
            y1="100"
            x2="100"
            y2="0"
            vector-effect="non-scaling-stroke"
            stroke="white"
          />
        </svg>
      </div>
      <div className="px-6 pt-5 flex flex-col grow ">
        <h3 className="text-xl">{title}</h3>
        <p className="mt-2.5 text-base break-words line-clamp-2 text-[#363E59] font-assist">
          {description}
        </p>
      </div>
      <Link
        className="mx-6 mb-5 text-[#2C46B5] font-semibold font-assist"
        to={"#"}
      >
        Read more <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
      </Link>
    </div>
  );
};

export default Card;
