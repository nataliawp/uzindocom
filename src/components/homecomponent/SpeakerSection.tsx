import SpeakerCard from "./SpeakerCard";
import ava from './../../assets/avatar.png'
import btnicon from './../../assets/btnicon.svg'

const speakerData = [
  { image: ava, full_name: "Николай Владимир Работников", role: "Генеральный Директор" },
  { image: ava, full_name: "Николай Владимир Работников", role: "Генеральный Директор" },
  { image: ava, full_name: "Николай Владимир Работников", role: "Генеральный Директор" },
  { image: ava, full_name: "Николай Владимир Работников", role: "Генеральный Директор" },
  { image: ava, full_name: "Николай Владимир Работников", role: "Генеральный Директор" },
  { image: ava, full_name: "Николай Владимир Работников", role: "Генеральный Директор" },
];
//py-[139px] px-[275px] bg-amber-200

function SpeakerSection() {
  return (
    <div className=" w-full py-32 border-y-3 border-[#49405C] flex flex-col items-center">
      <h1 className="text-white text-[56px] pb-16 font-normal">Спикеры</h1>
      <div className="grid items-center gap-8 md:gap-10 md:grid-cols-2 xl:grid-cols-3 px-2.5">
        {speakerData.map((item, index) => (
          <SpeakerCard
            key={index}
            full_name={item.full_name}
            image={item.image}
            role={item.role}
          />
        ))}
      </div>
      <button className="text-white border-[1.421px] gap-1.5 rounded-xl py-[17.5px] px-6 flex border-white mt-16">Список всех спикеров <img src={btnicon} alt="" /></button>
    </div>
  );
}

export default SpeakerSection;
