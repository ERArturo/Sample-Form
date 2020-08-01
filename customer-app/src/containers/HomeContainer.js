import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import CustomerActions from './../components/CustomerActions';
import AppFrame from './../components/AppFrame';


class HomeContainer extends Component {
    handleSelection = () => {
        console.log('holi');
    }
    render() {
        return (
            <div>
                <AppFrame
                    header="Homer"
                    body={
                        <div>
                            Ésta es la pantalla inicial
                            <CustomerActions>
                                <button onClick={this.handleSelection}>Listado de clientes</button>
                            </CustomerActions>
                        </div>
                    } >

                </AppFrame>
            </div>
        );
    }
}


HomeContainer.propTypes = {

};


export default HomeContainer;
