import React, { useEffect, useState } from "react";
import "./Project.scss";
import { ProjectProps, Item } from "../../types";

import ItemRender from "./Item";

const Project = ({ project }: ProjectProps) => {
  const [scale, setScale] = useState({ X: 0, Y: 0 });
  const data = project.project;

  useEffect(() => {
    let a: any;
    const resize = () => {
      clearTimeout(a);
      a = setTimeout(() => {
        const tempScale = { X: 0, Y: 0 };
        const { offsetHeight, offsetWidth } = document.querySelector(
          ".project-container"
        ) as HTMLDivElement;
        const projectDiv = document.querySelector(".project") as HTMLDivElement;
        if (data.width < offsetWidth) {
          projectDiv.style.width = `${data.width}px`;
          tempScale.X = 1;
        } else {
          projectDiv.style.width = `${offsetWidth * 0.9}px`;
          tempScale.X = (offsetWidth * 0.9) / data.width;
        }

        if (data.height < offsetHeight) {
          tempScale.Y = 1;
        } else {
          tempScale.Y = offsetHeight / data.height;
        }

        setScale(tempScale);
      }, 250);
    };
    resize();
    window.addEventListener("resize", resize, false);
    return () => {
      window.removeEventListener("resize", resize, false);
    };
  }, []);
  console.log({ scale, data });
  return (
    <>
      <div className="project-name">
        <p>Name: </p>
        <h2>{data.name}</h2>
      </div>
      <div className="project-container">
        <div className="project">
          {data.items.map((item: Item, i: number) => (
            <ItemRender key={i} item={item} scale={scale} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
