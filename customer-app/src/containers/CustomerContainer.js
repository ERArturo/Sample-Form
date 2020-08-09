import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import AppFrame from './../components/AppFrame';
import CustomerList from './../components/CustomerList';
import CustomerActions from './../components/CustomerActions';
import { fetchCustomers } from '../actions/fetchCustomers';

class CustomerContainer extends Component {

    componentDidMount() {
        this.props.fetchCustomers();
    }
    

    renderBody = (customers) => (
        <div>
            <CustomerList customers={customers} urlPath={'customers/'}></CustomerList>
            <CustomerActions>
                <button onClick={this.handleAddNew}> Nuevo</button>
            </CustomerActions>
        </div>
    );
    render() {
        return (
            <div>
                <AppFrame header={'listado de clientes'}
                    body={this.renderBody(this.props.customers)}></AppFrame>
            </div>
        );
    }
}


CustomerContainer.propTypes = {
    fetchCustomers : PropTypes.func.isRequired,
    customers : PropTypes.array.isRequired,
};

CustomerContainer.defaultProps = {
    customers : [
        {
            "curp" : '2423442',
            "name" : 'Arturo',
            "age"  : '27'
        },
        {
            "curp" : '54232',
            "name" : 'Juan',
            "age"  : '32'
        },
        {
            "curp" : '412321',
            "name" : 'Tiburcio',
            "age"  : '17'
        }
    ]
}

const mapDispatchToProps = {fetchCustomers};



export default withRouter(connect(null, mapDispatchToProps)(CustomerContainer));
