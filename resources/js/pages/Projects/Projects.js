import React from "react";
import { PageHead } from "../../components/PageHead/PageHead";
import { ProjectBox } from "../../components/ProjectBox/ProjectBox";
import "./Projects.css";
import Layout from "../../Layouts/Layout";
import { Link } from "@inertiajs/inertia-react";

const Projects = () => {
    const projectList = [
        {
            img: "/img/gallery/1.png",
            name: __("project_1"),
            slug: __("project_slug_1"),
            para: __("project_para_1"),
        },
        {
            img: "/img/gallery/2.png",
            name: __("project_2"),
            slug: __("project_slug_2"),
            para: __("project_para_2"),
        },
        {
            img: "/img/gallery/3.png",
            name: __("project_3"),
            slug: __("project_slug_3"),
            para: __("project_para_3"),
        },
        {
            img: "/img/gallery/4.png",
            name: __("project_4"),
            slug: __("project_slug_4"),
            para: __("project_para_4"),
        },
    ];
    return (
        <Layout>
            <div className="pages projectsPage ">
                <div className="wrapper">
                    <PageHead
                        title="Projects"
                        para="See The Projects Done By Your Teem"
                    />
                    <div className="project_track">
                        {projectList.map((item, i) => {
                            return (
                                <Link
                                    key={i}
                                    href={route(
                                        "client.projects.show",
                                        item.slug
                                    )}
                                >
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
