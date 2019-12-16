import React, { Fragment } from 'react';
import Grid from './Grid';
import '../../assets/styles/main.scss';

const getDate = () => {
    const d = new Date();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    return `${months[d.getMonth()]} ${d.getDate()}`;
};

const Main = () => {
    const today = getDate();

    return (
        <main>
            <h1 className='font-extra-bold today'>
                Today <span className='font-light'>{today ? today : 'Loading...'}</span>
            </h1>

            <p className='trending'>Trending</p>

            <Grid />
        </main>
    );
};

export default Main;
