import React from "react";

function GALLERY() {
  const galleryImg = [
    {
      id: 1,
      img: "g1.png",
    },
    {
      id: 2,
      img: "g.png",
    },
    {
      id: 3,
      img: "g3.png",
    },
    {
      id: 4,
      img: "g4.png",
    },
    {
      id: 5,
      img: "g5.png",
    },
    {
      id: 6,
      img: "g6.png",
    }
  ];
  return (
    <section className="border p-10 ">
      <div className="container mx-auto py-10">
        <h3 className="text-3xl font-semibold text-center lg:text-start text-[#26395C]">
          See How people are chilling on{" "}
          <span className="text-[#0E8BFF]">Chillsbay</span>
        </h3>
        <div className="grid md:grid-cols-3 lg:grid-cols-6 mt-8">
          {galleryImg.map((source) => (
            <div className="mt-5">
              <img
                className="w-full object-cover h-full"
                src={source.img}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GALLERY;
