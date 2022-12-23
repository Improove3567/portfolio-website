import React from 'react';
import style from './Header.module.scss';

const Header = (): React.ReactElement => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.name}>
                    <p>Кутман Казыбеков</p>
                </div>
                <div className={style.section}>
                    <ul>
                        <li>Про меня</li>
                        <li>Проекты</li>
                        <li>Контакты</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;
