import React from 'react';
import Headings from '../../Components/Page_headings';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import TechnologyCards from '../../Components/TechnologyCard/index';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

function Projects() {
    return (
        <>
            <div
                style={{
                    padding: '9vh 7vw',
                    paddingTop: '10.88vh',
                    paddingBottom: '6vh',
                    display: 'flex',
                    // flexDirection: "row",
                    // flexWrap: "wrap",
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    // alignItems: "center",
                }}
            >
                <Headings
                    color={{ color: 'rgb(66, 133, 244)' }}
                    style={{ paddingBottom: '10vh' }}
                    LargeHeading="Projects"
                    SmallHeading="Checkout our Projects"
                />
                <Fab style={{ alignSelf: 'flex-end', marginRight: '7vw' }} color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
            <div>
                <TechnologyCards />
            </div>
        </>
    );
}

export default Projects;
