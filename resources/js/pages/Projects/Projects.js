import React from "react";
import { PageHead } from "../../components/PageHead/PageHead";
import { ProjectBox } from "../../components/ProjectBox/ProjectBox";
import "./Projects.css";
import Layout from "../../Layouts/Layout";
import {Link} from "@inertiajs/inertia-react"

const Projects = () => {
  const projectList = [
    {
      img: "/img/gallery/1.png",
      name: "project sdf name",
      slug: "project_1",
      para: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to strategy.",
    },
    {
      img: "/img/gallery/2.png",
      name: "project name akljsdin",
        slug: "project_2",

        para: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to strategy.Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to strategy.",
    },
    {
      img: "/img/gallery/3.png",
      name: "project ",
      para: "Leve provide a robust synopsis for high level overviews. Iterative approaches to strategy.",
        slug: "project_3",

    },
    {
      img: "/img/gallery/4.png",
      name: "project  asfd name",
        slug: "project_4",

      para: "Leverage agile to provLeverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to strategy.el overviews. Iterative approaches to strategy.",
    },
  ];
  return (
      <Layout>
          <div className="pages projectsPage ">
              <div className="wrapper">
                  <PageHead title="Projects" para="See The Projects Done By Your Teem" />
                  <div className="project_track">
                      {projectList.map((item) => {
                          return (
                              <Link href={route('client.projects.show', item.slug)}>
                                  <ProjectBox
                                      img={item.img}
                                      name={item.name}
                                      description={item.para}
                                  />
                               </Link>

                          );
                      })}
                  </div>
              </div>
          </div>

      </Layout>
  );
};

export default Projects;
