import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../redux/actions';
import * as GIPHY from '../../components/giphy/api';
import '../../assets/styles/search.scss';

const Search = ({ paginationData, paginationAction }) => {
    useEffect(() => {
        //
    }, []);

    const searchGIPHY = (e) => {
        e.preventDefault();

        const searchQuery = document.getElementsByClassName('search-field')[0].value;

        // Loading 6 trending GIPHY
        GIPHY.search(searchQuery, 6, 0, (data) => {
            paginationAction(data.pagination.total_count, data.pagination.count, data.pagination.offset, data.data);
        });
    };

    return (
        <div className="search">
            <input type="text" className="search-field" placeholder="Search" />
            <button className="search-button" onClick={searchGIPHY}>
                <img src="https://giphy.com/static/img/search-icon.svg" alt="SEARCH" />
            </button>
        </div>
    );
};

const mapStateToProps = (state) => ({
    paginationData: state.paginationData
});

const mapDispatchToProps = (dispatch) => ({
    paginationAction: (paginationTotal, paginationCount, paginationOffset, paginationData) =>
        dispatch(Actions.paginationAction(paginationTotal, paginationCount, paginationOffset, paginationData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
