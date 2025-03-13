import React from "react";
import locationicon from "./../../assets/location.svg";
import { useTranslation } from "react-i18next";
import herobg from "./../../assets/herobg.png";
import logohero from "./../../assets/logohero.png";

//-translate-y-3/4 top-[20%]

function Hero() {
  const { t } = useTranslation();
  return (
    <section className="relative h-screen">
      <div className="flex container mx-auto justify-between ">
        <div className="text-white  max-w-[432px] ">
          <p className="text-xl gap-1 flex">
            <img src={locationicon} alt="" /> Ташкент, Узбекистан
          </p>
          <p className="text-[26px] font-medium pt-2.5 pb-7">30 Aprel</p>
          <p className="text-3xl font-bold">
            Юбилейное мероприятие посвященное 30-летию домена .UZ
          </p>
        </div>
        <div className="text-white  max-w-[432px] text-right ">
          <p className="text-xl justify-end gap-1 flex">
            <img src={locationicon} alt="" />
            {t("city")}
          </p>
          <p className="text-[26px] font-medium pt-2.5 pb-7">30 {t("aprel")}</p>
          <p className="text-3xl font-bold">{t("homeDate")}</p>
        </div>
      </div>
      
      <img
        src={logohero}
        alt=""
        className="w-52 absolute top-1/4 right-1/2 translate-x-1/2 max-w-32 xl:min-w-52 lg:max-w-44 md:max-w-32 animate-wiggle z-10"
      />
      <img src={herobg} alt="" className="object-cover size-full relative z-10" />
    </section>
  );
}

export default Hero;
