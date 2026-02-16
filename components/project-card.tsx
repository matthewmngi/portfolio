import React from 'react';

export interface ProjectCardProps {
    year: string;
    title: string;
    status: string;
    onClick?: () => void;
}

const styles = {
    projectRow: {
        display: 'grid',
        gridTemplateColumns: '80px 1fr auto',
        gap: '40px',
        padding: '16px 0',
        borderBottom: '1px solid #333333',
        alignItems: 'center',
        transition: 'background-color 0.2s ease',
        cursor: 'pointer',
    } as React.CSSProperties,

    projectYear: {
        fontSize: '16px',
        color: '#a0a0a0',
    } as React.CSSProperties,

    projectTitle: {
        fontSize: '16px',
        color: '#e8e8e8',
    } as React.CSSProperties,

    projectStatus: {
        fontSize: '16px',
        color: '#a0a0a0',
    } as React.CSSProperties,
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
    year,
    title,
    status,
    onClick
}) => {
    const [isHovered, setIsHovered] = React.useState(false);

    const rowStyle = {
        ...styles.projectRow,
        ...(isHovered && {
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
        }),
    };

    return (
        <div
            style={rowStyle}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            role={onClick ? 'button' : undefined}
            tabIndex={onClick ? 0 : undefined}
            onKeyDown={onClick ? (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onClick();
                }
            } : undefined}
        >
            <span style={styles.projectYear}>{year}</span>
            <span style={styles.projectTitle}>{title}</span>
            <span style={styles.projectStatus}>{status}</span>
        </div>
    );
};