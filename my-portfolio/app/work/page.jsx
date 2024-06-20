"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderButton from "@/components/WorkSliderButton";

const projects = [
  {
    number: "01",
    category: "frontend personal",
    title: "My Portfolio",
    description:
      "A portfolio website built with Next.js, Shadcn/ui and Tailwind CSS, hosted on Vercel, integrated with Framer Motion for animations, Swiper for the slider, and more.",
    stack: [
      {
        name: "Html5",
      },
      {
        name: "Css3",
      },
      {
        name: "Javascript",
      },
      {
        name: "Nextjs",
      },
      {
        name: "Tailwindcss",
      },
      {
        name: "Shadcn/ui",
      },
    ],
    image: "/assets/work/project1.png",
    github: "https://github.com/nhatminh4401/Portfolio",
  },
  {
    number: "02",
    category: "mobile personal",
    title: "VoiceGPT",
    description:
      "A simple Flutter-based app that seamlessly converts text to voice and voice to text with ChatGPT api, offering a convenient and versatile user experience.",
    stack: [
      {
        name: "Dart",
      },
      {
        name: "Flutter",
      },
      {
        name: "ChatGPT API",
      },
    ],
    image: "/assets/work/project4.png",
    github: "https://github.com/nhatminh4401/VoiceGPT",
  },
  {
    number: "03",
    category: "frontend school",
    title: "Knowledge Exchange Web",
    description:
      "A web application built with Reactjs Framework where users can exchange knowledge by asking questions and others can answer them, with a rating system, automated moderation, and monthly rankings.",
    stack: [
      {
        name: "Html 5",
      },
      {
        name: "Css 3",
      },
      {
        name: "Reactjs",
      },
      {
        name: "Javascript",
      },
      {
        name: "Vite",
      },
    ],
    image: "/assets/work/project2.png",
    github: "https://github.com/nhatminh4401/knowledge-exchange-web",
  },
  {
    number: "04",
    category: "backend school",
    title: "Knowledge Exchange Backend",
    description:
      "A microservice backend project built with Django Framework, hosted on DigitalOcean, each service is seperated in different database, and communicate with each other via REST API.",
    stack: [
      {
        name: "Python",
      },
      {
        name: "Django",
      },
      {
        name: "MySQL",
      },
      {
        name: "DigitalOcean",
      },
    ],
    image: "/assets/work/project3.png",
    github: "https://github.com/nhatminh4401/knowledge-exchange-be",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex]);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 2.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline text-white">
                {project.number}
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>

              <h2 className="text-[28px] font-bold leading-none text-white/60 group-hover:text-accent transition-all duration-500 capitalize">
                ({project.category} Project)
              </h2>

              <p className="text-white/60">{project.description}</p>

              <ul className="grid grid-cols-2">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              <div className="border border-white/20"></div>

              <div className="flex items-center gap-4">
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>

                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className=" h-[460px] group relative flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          alt=""
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              <WorkSliderButton
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
