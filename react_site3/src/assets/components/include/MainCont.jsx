import React from "react";

const mainInfo = [
  { text: "we provide" },
  { text: "visual coding" },
  { text: "solutions" },
  { text: "for you API" },
];

const MainText = ({ text }) => {
  return <div>{text}</div>;
};

const MainCont = () => {
  return (
    <section className="cont__main">
      <div className="container">
        <div className="main__inner">
          {mainInfo.map((info) => (
            <MainText key={info.text} text={info.text} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainCont;
