import React from "react";
import Box from "@mui/material/Box";
import Testimonial from "./Testimonials";
import { skills } from '../data';

export default function Skills() {
  return (
    <section id="skills" className="p-8 bg-gray-300 h-full">
      <h1 className="text-2xl flex justify-center font-bold text-orange-700">
        Skills
      </h1>

      <div className="my-10 flex justify-evenly">
        <div className="grid gap-20 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((skill, index) => (
            <Box
              height={200}
              width={200}
              my={2}
              backgroundColor="white"
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap={2}
              p={2}
              fontSize={25}
              sx={{ border: "2px solid white ", borderRadius: "20px" }}
              className="m-auto"
            >
              <div key={index}>
                <b>{skill}</b>
              </div>
            </Box>
          ))}
        </div>
      </div>
      <Testimonial />
    </section>
  );
}
