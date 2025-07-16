"use client";

import { useState } from "react";
import Project from "../components/project";
import Modal from "../components/modal";

const projects = [
  {
    title: "C2 Montreal",
    src: "https://raw.githubusercontent.com/olivierlarose/mouse-hover-project-gallery/refs/heads/master/public/images/c2montreal.png",
    color: "#000000",
  },
  {
    title: "Office Studio",
    src: "https://raw.githubusercontent.com/olivierlarose/mouse-hover-project-gallery/refs/heads/master/public/images/officestudio.png",
    color: "#8C8C8C",
  },
  {
    title: "Locomotive",
    src: "https://raw.githubusercontent.com/olivierlarose/mouse-hover-project-gallery/refs/heads/master/public/images/locomotive.png",
    color: "#EFE8D3",
  },
  {
    title: "Silencio",
    src: "https://raw.githubusercontent.com/olivierlarose/mouse-hover-project-gallery/refs/heads/master/public/images/silencio.png",
    color: "#706D63",
  },
];

export default function ProjectSection() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <main className="bg-[#3d0b0b] text-white">
      <div>
        {projects.map((project, index) => {
          return (
            <Project
              index={index}
              title={project.title}
              setModal={setModal}
              key={index}
            />
          );
        })}
      </div>
      <Modal modal={modal} projects={projects} />
    </main>
  );
}
