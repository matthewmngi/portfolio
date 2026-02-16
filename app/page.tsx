"use client"

import { Button } from '@/components/button';
import { ProjectCard } from '@/components/project-card';

export default function Home() {
    const projects = [
        { year: '2026', title: 'Secure codebase indexing', status: 'Published' },
        { year: '2026', title: 'Semantic search', status: 'Published' },
        { year: '2025', title: 'Reinforcement learning', status: 'Published' },
        { year: '2024', title: 'Shadow workspaces', status: 'Published' },
        { year: '2024', title: 'Multi-agent collaboration', status: 'Published' },
        { year: '2023', title: 'Context-aware completions', status: 'Published' },
        { year: '2023', title: 'Intelligent code navigation', status: 'Published' },
    ];

    const handleProjectClick = (title: string) => {
        console.log(`Clicked on project: ${title}`);
        // Add your navigation logic here
    };

    return (
        <main className="portfolio-container">
            <header className="portfolio-header">
                <h1 className="logo">Matthew Mungai</h1>
            </header>

            <section className="hero-section">
                <p className="hero-text">
                Programmer and software developer. Currently building InternBuddy, an app 
                connecting students from low-income backgrounds with quality internships.
                </p>
                <p className="hero-subtext">
                    I also participate in debate, engineering projects, and leadership activities.
                </p>

                <div className="cta-buttons">
                    <Button variant="primary">See projects</Button>
                    <Button variant="link" href="/team">
                        Speak to me →
                    </Button>
                </div>
            </section>

            <section className="projects-section">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        year={project.year}
                        title={project.title}
                        status={project.status}
                        onClick={() => handleProjectClick(project.title)}
                    />
                ))}
            </section>
        </main>
    );
}