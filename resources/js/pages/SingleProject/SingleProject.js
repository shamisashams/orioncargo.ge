import React from "react";
import { PageHead } from "../../components/PageHead/PageHead";
import { CircledArrow } from "../../components/Icons/Icons";
import "./SingleProject.css";
import { Link } from "@inertiajs/inertia-react";
import Layout from "../../Layouts/Layout";

const SingleProject = () => {
  return (
      <Layout>
          <div className="pages singleProject">
              <div className="wrapper">
                  <PageHead title="Projects" para="Project Name" />
                  <div className="flex main">
                      <div className="img">
                          <img src="/img/gallery/2.png" alt="" />
                      </div>
                      <div className="context">
                          <p>
                              Leverage agile frameworks to provide a robust synopsis for high
                              level overviews. Iterative approaches to strategy. Leverage agile
                              frameworks to provide a robust synopsis for high level overviews.
                              Iterative approaches to strategy. Leverage agile frameworks to
                              provide a robust synopsis for high level overviews. Iterative
                              approaches to strategy. Leverage agile frameworks to provide a
                              robust synopsis for
                          </p>
                          <p>
                              high level overviews. Iterative approaches to strategy. Leverage
                              agile frameworks to provide a robust synopsis for high level
                              overviews. Iterative approaches to strategy. Leverage agile
                              frameworks to provide a robust synopsis for high level overviews.
                              Iterative approaches to strategy.
                          </p>
                          <p>
                              Leverage agile frameworks to provide a robust synopsis for high
                              level overviews. Iterative approaches to strategy. Leverage agile
                              frameworks to provide a robust synopsis for high level overviews.
                              Iterative approaches to strategy. Leverage agile frameworks to
                              provide a robust synopsis for high level overviews. Iterative
                              approaches to strategy.
                          </p>
                      </div>
                      <Link href="/single-project" className="arrow flex">
                          <div className="bold">see next project</div>
                          <CircledArrow link="/single-project" color="#20202E" degree="-90" />
                      </Link>
                  </div>
                  <Link
                      href={route('client.projects.index')}
                      className="arrow flex"
                      style={{ justifyContent: "flex-start" }}
                  >
                      <CircledArrow link="/projects" color="#20202E" degree="90" />
                      <div className="bold">back to projects</div>
                  </Link>
              </div>
          </div>
      </Layout>
  );
};

export default SingleProject;
