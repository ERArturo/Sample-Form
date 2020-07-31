import React from 'react';
import PropTypes from 'prop-types';

const CustomerData = ({name, curp, age }) => {
    return (
        <div>
            <div className="customer-data">
                <h2>Datos del cliente</h2>
                <div><strong>Nombre: </strong> <i>{name}</i></div>
                <div><strong>CURP: </strong> <i>{curp}</i></div>
                <div><strong>Edad: </strong> <i>{age}</i></div>
            </div>
        </div>
    );
};

CustomerData.propTypes = {
    name : PropTypes.string.isRequired,
    curp : PropTypes.string.isRequired,
    age  : PropTypes.number,
};

export default CustomerData;