import React from 'react';
import ProjectCard from '../projectCard/ProjectCard';
import style from './Projects.module.scss';
import lms from '../../images/LMS.png'
import solid from '../../images/solid.png'
import clinic from '../../images/clinic.png'
import delivery from '../../images/delivery.png'

const Projects = (): React.ReactElement => {
    const projectsData = [
        {
            id: 1,
            img: lms,
            title: 'Solid-LMS',
            mainText: 'Стэк: React, Typescript, Material UI, i18next, ESLint/Prettier, webpack, redux-toolkit(slice). Это тоже коммерческий проект, электронный дневник для IT курсов, взаимодействие с backendом.(Проект на стадии завершения)',
            btnText: 'Перейти',
            puth: 'https://deploy-preview-68--solid-lms.netlify.app/',
        },
        {
            id: 2,
            img: solid,
            title: 'Solid-web',
            mainText: 'Стек: NextJs, firebase, html/css. Это тоже коммерческий проект, на нем закрепил свои знания Nextjs и работу с Firebase/Firestore, делал админку с возможностью редактировать карточки курсов,(Проект завершен)',
            btnText: 'Перейти',
            puth: 'https://solid.kg/',
        },
        {
            id: 3,
            img: clinic,
            title: 'Клиника Ратинов',
            mainText: 'Cтек: ReactJs, firebase, SASS. Это уже коммерческий проект для местной медицинской клиники Ратинов. (Проект завершен)',
            btnText: 'Перейти',
            puth: 'https://ratinov-clinic.vercel.app/',
        },
        {
            id: 4,
            img: delivery,
            title: 'Food Delivery',
            mainText: 'Стек: React, tailwind css, firebase, html/css, js.(Проект завершен)',
            btnText: 'Перейти',
            puth: 'https://delivery-food-app-mu.vercel.app/',
        },

    ]
    return (
        <div className={style.wrapper}>
            <div className={style.mainTextBlock}>
                <h1>Проeкты</h1>
                <hr />
                <p>Здесь вы можете посмотреть мои коммерческие проекты, описал их стэк и на что опирался при разработке этих проектов.</p>
            </div>
            <div>
                {
                    projectsData.map((el) => (
                        <ProjectCard id={el.id} img={el.img} title={el.title} mainText={el.mainText} btnText={el.btnText} puth={el.puth} />
                    ))
                }
            </div>
        </div>
    )
}

export default Projects;
