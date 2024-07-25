import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { projects } from './data';

export default function Projects() {
  return (
    <section id="projects" className="p-8 h-auto bg-gray-300">
      <h1 className="text-2xl flex justify-center font-bold text-orange-700">
        Projects
      </h1>

      <div className="flex flex-wrap justify-around">
        {projects.map((project, index) => (
          <Card
            className="my-20 mx-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
            key={index}
            sx={{ maxWidth: 250 }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={project.image}
                alt="img"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Tech: {project.tech}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                View Project
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </section>
  );
}
