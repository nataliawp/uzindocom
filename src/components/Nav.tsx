import down from "./../assets/down.svg";


const items = [
  { link: "/", title: "Регистрация мероприятия" },
  { link: "/contact", title: "Спикеры" },
  { link: "", title: "Хакатон", hasDropdown: true },
  { link: "", title: "Программа" },
  { link: "", title: "Партнерство" },
];

// sm - 640px
// md - 768px
// lg - 1024px
// xl - 1280px
// 2xl - 1536px

function Nav() {
  return (
    <nav className="flex justify-center  absolute top-24 right-0 xl:static">
      <ul className="text-white xl:flex text-lg xl:gap-[30px] 2xl:gap-[52px] ">
        {items.map((item, index) => (
          <a href={item.link} key={index} className="flex items-center">
            <li className=" flex gap-2 bg-nav-gradi">
              {item.title} {item.hasDropdown && <img src={down} alt="" />}
            </li>
          </a>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
