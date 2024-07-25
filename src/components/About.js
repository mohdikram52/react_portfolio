import React from "react";
import { profileData } from "./data";
import {
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <section id="about" className="p-8 h-auto bg-gray-300">
      {profileData.map((data, indx) => (
        <Container key={indx} className="mb-20" maxWidth="md" id="about">
          <Card className="max-w-sm mx-auto rounded-lg shadow-lg bg-white">
            <CardMedia
              component="img"
              alt={data.name}
              height="50"
              image={data.bgImage}
              title={data.name}
              className="rounded-t"
            />
            <CardContent className="text-center p-4">
              <Box className="flex justify-center -mt-12">
                <img
                  src={data.profileImage}
                  alt={data.name}
                  className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full border-4 border-white"
                />
              </Box>
              <Typography variant="h5" component="div" className="mt-4">
                {data.name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {data.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" className="mt-2">
                {data.description}
              </Typography>
              <br />
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 font-semibold ${
                    isActive ? "text-orange-700" : ""
                  }
                  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Projects Overview→
              </NavLink>
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 font-semibold ${
                    isActive ? "text-orange-700" : ""
                  }
                  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Skills→
              </NavLink>
            </CardContent>
          </Card>
        </Container>
      ))}
    </section>
  );
}
