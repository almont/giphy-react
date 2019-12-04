import React from 'react';
import { connect } from 'react-redux';
import * as Actions from './redux/actions';

const Template = ({ id, templateAction }) => {
    function callAction(e) {
        const random = Math.floor(Math.random() * 100 + 1);
        templateAction(random);
    }

    console.log(id);

    return (
        <div>
            <button onClick={callAction}>NEW ID</button>

            <p>ID: {id ? id : '0'}</p>
        </div>
    );
};

const mapStateToProps = (state) => ({
    id: state.template
});

const mapDispatchToProps = (dispatch) => ({
    templateAction: (id) => dispatch(Actions.templateAction(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Template);
