import React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../redux/actions';
import * as GIPHY from '../../components/giphy/api';
import '../../assets/styles/grid.scss';

const Grid = ({ paginationData, paginationAction }) => {
    // Loading 6 trending GIPHY
    GIPHY.getTrending(6, 0, (data) => {
        paginationAction(data.pagination.total_count, data.pagination.count, data.pagination.offset, data.data);
    });

    return (
        <div className='grid'>
            {paginationData &&
                paginationData.map((data) => {
                    return (
                        <div className='card' key={data.id}>
                            <div className='card-content'>
                                <p className='font-extra-bold'>
                                    <a href={data.url} target='_blank'>
                                        {data.title.toUpperCase()}
                                    </a>
                                </p>
                                <img src={`https://i.giphy.com/media/${data.id}/giphy.gif`} alt='' title='' />
                            </div>

                            <dir className='card-border'>
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
