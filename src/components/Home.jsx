import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import * as Actions from './redux/actions';
import * as GIPHY from '../components/giphy/api';
import Grid from './Grid';
import '../assets/styles/home.scss';

const getDate = () => {
    const d = new Date();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    return `${months[d.getMonth()]} ${d.getDate()}`;
};

const Home = ({ paginationTotal, paginationCount, paginationOffset, paginationAction }) => {
    const today = getDate();

    GIPHY.getTrending(6, 0, (data) => {
        paginationAction(data.pagination.total_count, data.pagination.count, data.pagination.offset, data.data);
    });

    return (
        <div className='container'>
            <h1 className='font-extra-bold'>
                Today <span className='font-light'>{today ? today : 'Loading...'}</span>
            </h1>

            <p>Trending</p>

            <Grid />
        </div>
    );
};

const mapStateToProps = (state) => ({
    paginationTotal: state.paginationTotal,
    paginationCount: state.paginationCount,
    paginationOffset: state.paginationOffset
});

const mapDispatchToProps = (dispatch) => ({
    paginationAction: (paginationTotal, paginationCount, paginationOffset, paginationData) =>
        dispatch(Actions.paginationAction(paginationTotal, paginationCount, paginationOffset, paginationData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
