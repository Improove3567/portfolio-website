import React from 'react';
import style from './Contacts.module.scss';

const Contacts = (): React.ReactElement => {
    return (
        <div className={style.wrapper}>
            <div className={style.mainTextBlock}>
                <h1>Контакты</h1>
                <hr />
                <p>Gmail: @jyldyzbekov06aiti@gmail.com <br /> Telegram: https://t.me/lltgn</p>
            </div>

        </div>
    )
}

export default Contacts;
