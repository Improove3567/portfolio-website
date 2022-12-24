import React from 'react';
import style from './ProjectCard.module.scss';


interface ProjectCardProps {
    id: number;
    img: string;
    title: string;
    mainText: string;
    btnText: string;
    puth: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, img, title, mainText, btnText, puth }) => {
    return (
        <div className={style.wrapper} key={id}>
            <div className={style.imgContainer}>
                <img src={img} alt='project-img' />
            </div>
            <div className={style.content}>
                <div className={style.aboutProject}>
                    <h2>{title}</h2>
                    <p>{mainText} </p>

                    <a href={puth}>
                        {btnText}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;
