import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../redux/actions';
import '../../assets/styles/search.scss';

const Search = ({ id, templateAction }) => {
    return (
        <Fragment>
            <input type='text' className='search-field' />
            <button className='search-button'>
                <img src='https://giphy.com/static/img/search-icon.svg' alt='SEARCH' />
            </button>
        </Fragment>
    );
};

const mapStateToProps = (state) => ({
    id: state.template
});

const mapDispatchToProps = (dispatch) => ({
    templateAction: (id) => dispatch(Actions.templateAction(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
