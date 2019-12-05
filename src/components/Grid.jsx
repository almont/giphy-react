import React from 'react';
import { connect } from 'react-redux';
import * as Actions from './redux/actions';
import '../assets/styles/grid.scss';

const items = [];

const Grid = ({ paginationData, paginationAction }) => {
    return (
        <div className='grid'>
            {paginationData &&
                paginationData.map((data) => {
                    return (
                        <div className='card' key={data.id}>
                            <div className='card-content'>
                                {/* <img src={`https://i.giphy.com/media/${data.id}/giphy.gif`} alt='' title='' /> */}
                                <img src='https://i.giphy.com/media/RLWwOuPbqObupogOLB/giphy.gif' alt='' title='' />
                                <p className='font-extra-bold'>{data.title}</p>
                                <a href={data.url} target='_blank'>
                                    SEE
                                </a>
                            </div>
                            <dir>
                                <span className='card-border-1'></span>
                                <span className='card-border-2'></span>
                                <span className='card-border-3'></span>
                            </dir>
                        </div>
                    );
                })}
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

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
