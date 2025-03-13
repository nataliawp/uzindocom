import React from "react";
import Card, { AgendaCardProps } from "./AgendaCardProps";
import ava from "./../../assets/avatar.png";

import coffee from "./../../assets/coffee-svgrepo-com (1) 1.svg";

const speakerCard: AgendaCardProps[] = [
  {
    date: "9:00 - 9:30",
    location: "Congress Hall",
    title: "Registration of participants",
    description: "Welcome coffee, light breakfast",
    icon: coffee,
    moderator: {
      name: "Leonid Todorov",
      role: "General Manager of APTLD",
    }, 
    speaker: [
      {
        name: "Emil Gimranov",
        role: "General Director of the Single Integrator UZINFOCOM",
      },
      {
        name: "Emil Gimranov",
        role: "General Director of the Single Integrator UZINFOCOM",
      },
      {
        name: "Emil Gimranov",
        role: "General Director of the Single Integrator UZINFOCOM",
      },
    ]
   
  },
  {
    date: "9:00 - 9:30",
    location: "Congress Hall",
    title: "Registration of participants",
    description: "Welcome coffee, light breakfast",
    moderator: {
      name: "Leonid Todorov",
      role: "General Manager of APTLD",
    }, 
    
  },
  {
    date: "9:00 - 9:30",
    location: "Congress Hall",
    title: "Registration of participants",
    description: "Welcome coffee, light breakfast",
  },
];

function ContactPage() {
  return (
    <section className="mx-auto w-full flex justify-center">
      <div className="container">
        <div className=""></div>
        {speakerCard.map((item, index) => (
          <Card
            key={index}
            date={item.date}
            location={item.location}
            title={item.title}
            description={item.description}
            icon={item.icon}
            moderator={item.moderator}
            speaker={item.speaker}
          />
        ))}
      </div>
    </section>
  );
}

export default ContactPage;
