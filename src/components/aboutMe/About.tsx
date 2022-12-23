import React from 'react';
import style from './About.module.scss';

const About = (): React.ReactElement => {
    const data = [
        {
            title: "HTML/CSS"
        },
        {
            title: "SCSS, SASS, LESS"
        },
        {
            title: "JavaScript"
        },
        {
            title: "TypeScript"
        },
        {
            title: "React JS"
        },
        {
            title: "Next JS"
        },
        {
            title: "Git/Github (Gitflow)"
        },
        {
            title: "RestAPI"
        },
        {
            title: "Redux/Redux-toolkit"
        },
        {
            title: "Firebase"
        },
        {
            title: "BEM"
        },
        {
            title: "Webpack"
        },
        {
            title: "Unit tests (Jest)"
        },
        {
            title: "Material UI"
        },
        {
            title: "Tailwind"
        },
        {
            title: "Bootstrap"
        },
        {
            title: "I18 next"
        },
        {
            title: "ESLint/Prettier"
        },
    ]
    return (
        <div className={style.wrapper}>
                <div className={style.mainTextBlock}>
                    <h1>Про меня</h1>
                    <hr />
                    <p>Здесь вы найдете больше информации обо мне, о том, чем я занимаюсь, и о моих текущих навыках, в основном в области программирования и технологий</p>
                </div>
            <div className={style.contentWrapper}>
                <div className={style.aboutBlock}>
                    <h1>Узнай меня!</h1>
                    <div className={style.textContainer}>
                        <p>Я веб-разработчик Frontend, создающий интерфейс веб-сайтов и веб-приложений, который приводит к успеху продукта в целом. Ознакомьтесь с некоторыми моими работами в разделе "Проекты". </p>
                        <p>Я открыт для возможностей трудоустройства, где я могу вносить свой вклад, учиться и расти. Если у вас есть хорошая возможность, которая соответствует моим навыкам и опыту, то не стесняйтесь обращаться ко мне.</p>
                        <p>Четко распределяю своё время, ответственный, не токсичный, если вы мне зададите вопрос на который я не знаю ответ, я скажу что не знаю, но я знаю как его найти</p>
                    </div>
                    <button>Контакты</button>
                </div>
                <div className={style.skillsBlock}>
                    <h1>Мои Навыки</h1>
                    <div className={style.skillContainer}>
                        {
                            data.map((el) => (
                                <div className={style.skill} key={el.title}>{el.title}</div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
