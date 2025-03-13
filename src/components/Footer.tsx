import Navfooter from "./Navfooter";
import footicon from "./../assets/footicon.svg";
import footersec from "./../assets/footiconsec.svg";
import partner from "./../assets/partners.svg";
import uzinfocom from "./../assets/uzinfocom.svg";

function Footer() {
  return (
    <footer className="xl:py-[78px] xl:px-[98px] flex justify-between gap-20 bg-violet-900">
      <div className="flex flex-col justify-between w-full">
        <div className="flex gap-3">
          <img src={footicon} alt="" className=""/>
          <img src={footersec} alt="" className=""/>
        </div>
        <div className="flex gap-3.5">
          <img className="xl:w-[40px]" src={partner} alt="" />
          <img className="xl:w-[40px]"  src={partner} alt="" />
          <img className="xl:w-[40px]" src={partner} alt="" />
          <img className="xl:w-[40px]" src={partner} alt="" />
          <img className="xl:w-[40px]" src={partner} alt="" />
          <img className="xl:w-[40px]" src={partner} alt="" />
          <img className="xl:w-[40px]" src={partner} alt="" />
        </div>
      </div>
      <Navfooter />
      <div className="w-full text-white">
        <img src={uzinfocom} alt="" />
        <p className="text-white">
          © 2002 - 2025 Единый интегратор по созданию и поддержке
          государственных информационных систем UZINFOCOM
        </p>
        <p>UZINFOCOM © 2002 - {new Date().getFullYear()}. Все права защищены</p>
      </div>
    </footer>
  );
}

export default Footer;
