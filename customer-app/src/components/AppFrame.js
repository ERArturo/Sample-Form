import React from 'react';
import PropTypes from 'prop-types';
import AppHeader from './AppHeader';

const AppFrame = ({header, body, fooder}) => {
    return (
        <div>
            <div className="app-frame">
                <AppHeader title={props.header}/>
                <div>{body}</div>
                <div>Sample form</div>
            </div>
        </div>
    );
};

AppFrame.propTypes = {
    header : PropTypes.string.isRequired,
    body : PropTypes.element.isRequired,

};

export default AppFrame;