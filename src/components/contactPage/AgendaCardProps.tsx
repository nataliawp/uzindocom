import dateimg from "./../../assets/date.svg";
import locationIcon from "./../../assets/locationIcon.svg";
import user from "./../../assets/user.svg";
import topIcon from "./../../assets/top.svg";
import { useState } from "react";

interface Moderator {
  name: string;
  role: string;
}

interface Speaker {
  name: string;
  role: string;
}

export interface AgendaCardProps {
  date: string;
  location: string;
  title: string;
  icon?: string;
  description: string;
  moderator?: Moderator;
  speaker?: Speaker[];
}

function Card({
  date,
  location,
  description,
  title,
  icon,
  moderator,
  speaker,
}: AgendaCardProps) {
  const [dropDown, setDropDown] = useState(false);
  const handleDropDown = () => {
    setDropDown(!dropDown);
  };

  return (
    <div className="card-contact py-3.5 px-3.5 w-full">
      <div className=" bg-black rounded-xl p-7  gap-2.5 relative">
        {(moderator || speaker) && (
          <button onClick={handleDropDown}>
            <img
              src={topIcon}
              alt=""
              className={`absolute right-5 top-5 duration-300 ${
                dropDown && "rotate-180"
              }`}
            />
          </button>
        )}

        <div className="flex gap-9 text-[#DD76CD] text-xl">
          <p className="flex gap-2">
            {" "}
            <img src={dateimg} alt="" />
            {date}
          </p>
          <p className="flex gap-2">
            <img src={locationIcon} alt="" />
            {location}
          </p>
        </div>
        <h1 className="text-[26px] text-white font-normal pt-8 pb-3.5 flex ">
          {icon ? <img src={icon} alt="" className="pr-2.5" /> : null}
          {title}
        </h1>
        <h2 className="text-[#E1CBDE] text-xl mb-12">{description}</h2>

        {moderator && dropDown && (
          <div className="flex gap-2.5 text-xl">
            <p className="text-white font-semibold">Moderator:</p>
            <p className="text-white ">{moderator.name}</p>
            <p className="w-0.5 bg-[#9D84D6]"></p>
            <p className=" text-[#9D84D6]"> {moderator.role}</p>
          </div>
        )}

        {speaker &&
          dropDown &&
          speaker.map((item, key) => (
            <div key={key} className=" text-[#CDBDF3] flex mt-9">
              <p className="flex gap-1.5 w-48">
                {" "}
                <img src={user} alt="" />
                {item.name}
              </p>
              <span className="w-0.5 bg-[#9D84D6]"></span>
              <p className="ml-3.5"> {item.role} </p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Card;
