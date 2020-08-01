import React from 'react';
import PropTypes from 'prop-types';

const CustomerEdit = ({curp, name, age}) => {
    return (
        <div>
            <h2>Edición del cliente</h2>
            <h3>Nombre: {name} / CURP: {curp} / Edad: {edad}</h3>
        </div>
    );
};

CustomerEdit.propTypes = {
    name : PropTypes.string.isRequired,
    curp : PropTypes.string.isRequired,
    age  : PropTypes.string.isRequired,
};

export default CustomerEdit;