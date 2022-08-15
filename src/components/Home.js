import React, { useState } from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import Menu from "./Resturentapi";

export default function Home() {

  // unique caegory 
  const unique = [
    ...new Set(
      Menu.map((e) => {
        return e.category;
      })
    ),
    "All",
  ];
// hook 
  const [data, setdata] = useState(Menu);

// filter data for navbar 
  const filter = (category) => {
    if (category === "All") {
      setdata(Menu);
    } else {
      const updatelist = Menu.filter((element) => {
        return element.category === category;
      });

      setdata(updatelist);
    }
  };
  return (
    <>
      <Navbar data={data} filter={filter} nav={unique} />
      <section className="main-card--cointainer">
        {data.map((menudata, index) => {
          return <Card data={menudata} key={index} i={index} />;
        })}
      </section> 
    </>
  );
}
