import React from 'react';
import style from './Info.module.scss';

const Info = (): React.ReactElement => {
    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <h1>Привет, я Казыбеков Кутман</h1>
                <p>Я Front end Web Developer  </p>
                <button>Проекты</button>
            </div>
        </div>
    )
}

export default Info;
