import React from "react"
import { Box, Grid, Typography, Button, Link } from "@mui/material"


export default function Projects() {

    const projects = [
        {
            bgColor: "teal",
            fontColor: "#fff",
            title: "Moject (2024-)",
            comment: "A WIP project, that focuses on expressing complex tasks through diagrammatic modelling, while allowing for exhaustingly detailed input.",
            "pc": "/project-charter-moject.pdf",
            "rs": "/requirement-specification-moject.pdf",
            "source": null,
            "demo": null,
            "website": null
        },
        {
            bgColor: "teal",
            fontColor: "#fff",
            title: "Altiore Portal (2024)",
            comment: "A finished MVP project for Altiore, that functions as an interface for other services and common use cases such as group & user management. Altiore was a startup attempt to provide seamless and quick assessments e.g. CIS18, NIS2, ISO27001.",
            "pc": "/project-charter-altiore-portal.pdf",
            "rs": "/requirement-specification-altiore-portal.pdf",
            "source": "https://github.com/orgs/Altiorexx/repositories",
            "demo": "https://portal.altiore.io",
            "website": "https://altiore.io"
        },
        {
            bgColor: "teal",
            fontColor: "#fff",
            title: "CIS18 Assessment App (2024)",
            comment: "A finished MVP project, that enables quick CIS18 assessments and allows for attaching documentation to each safeguard, all while providing realtime collaboration features.",
            "pc": "/project-charter-cis18-app.pdf",
            "rs": "/requirement-specification-cis18-app.pdf",
            "source": "https://github.com/orgs/Altiorexx/repositories",
            "demo": "https://portal.altiore.io",
            "website": "https://altiore.io"
        },
        {
            bgColor: "teal",
            fontColor: "#fff",
            title: "Portfolio Presenter (2024)",
            comment: "This website!",
            "pc": "/project-charter-portfolio-presenter.pdf",
            "rs": "/requirement-specification-portfolio-presenter.pdf",
            "source": "https://github.com/illu12/Portfolio-Presenter",
            "demo": null
        }
    ]

    return (
        <>
            <Box sx={{ height: '100vh', overflowY: 'scroll', scrollSnapType: 'y mandatory' }}>
                
                <Box sx={{ background: "teal", color: "#fff", height: "100vh", width: "100vw", scrollSnapAlign: 'start', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={{ display: "flex", width: "30%", textAlign: "left", justifyContent: "center", alignItems: "center", flexDirection: "row", gap: 2 }}>
                        <Typography variant="h1">Hi</Typography>
                        <Typography variant="subtitle1">I believe <i>one thing alone doesn't make sense</i>, therefore I always perform preanalysis' to ensure I make the right thing, the first time ..... Here are a few of the things i've done!</Typography>
                    </Box>
                </Box>

                {projects.map((project, index) => (
                    <Box key={index} sx={{ background: project.bgColor, color: project.fontColor, height: "100vh", width: "100vw", scrollSnapAlign: 'start', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography variant="h2">{project.title}</Typography>
                        <Typography variant="subtitle1" sx={{ width: "30%", textAlign: "center" }}>{project.comment}</Typography>
                        <Grid container spacing={2} sx={{ marginTop: 2, justifyContent: 'center', alignItems: 'center' }}>
                            <Grid item>
                                <Button variant="outlined" sx={{ color: project.fontColor, borderColor: project.fontColor, '&:hover': { backgroundColor: 'gray', borderColor: project.fontColor } }}><a href={project.pc} download style={{ color: project.fontColor, textDecoration: "none" }}>Project Charter</a></Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" sx={{ color: project.fontColor, borderColor: project.fontColor, '&:hover': { backgroundColor: 'gray', borderColor: project.fontColor } }}><a href={project.rs} download style={{ color: project.fontColor, textDecoration: "none" }}>Requirement Specification</a></Button>
                            </Grid>
                            {
                                project.source &&
                                <Grid item>
                                    <Button variant="outlined" sx={{ color: project.fontColor, borderColor: project.fontColor, '&:hover': { backgroundColor: 'gray', borderColor: project.fontColor } }}><a href={project.source} target="_blank" style={{ color: project.fontColor, textDecoration: "none" }}>Sourcecode</a></Button>
                                </Grid>
                            }
                            {
                                project.demo &&
                                <Grid item>
                                        <Button variant="outlined" sx={{ color: project.fontColor, borderColor: project.fontColor, '&:hover': { backgroundColor: 'gray', borderColor: project.fontColor } }}><a href={project.demo} target="_blank" style={{ color: project.fontColor, textDecoration: "none" }}>Demo</a></Button>
                                </Grid>
                            }
                            {
                                project.website &&
                                <Grid item>
                                        <Button variant="outlined" sx={{ color: project.fontColor, borderColor: project.fontColor, '&:hover': { backgroundColor: 'gray', borderColor: project.fontColor } }}><Link href={project.website} sx={{ color: project.fontColor }}>Website</Link></Button>
                                </Grid>
                            }
                        </Grid>       
                    </Box>
                ))}
            </Box>
        </>
    )
}



