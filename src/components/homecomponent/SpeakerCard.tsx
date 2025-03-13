interface SpeakerCardProps {
  image: string;
  full_name: string;
  role: string;
}

function SpeakerCard({ image, full_name, role }: SpeakerCardProps) {
  console.log("");

  return (
    <div className="card py-3.5 px-3.5 flex gap-2.5">
      <div className=" bg-black rounded-xl py-3.5 px-3.5 flex gap-2.5">
        <img src={image} alt="" className="w-[54px] h-[54px] shrink-0"/>
        <div className="">
          <h1 className="text-white font-bold text-sm md:text-base">{full_name}</h1>
          <p className="text-[#DD76CD] font-medium mt-1.5 text-xs md:text-base">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default SpeakerCard;
