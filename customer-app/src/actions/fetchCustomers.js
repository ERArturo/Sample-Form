import {FETCH_CUSTOMERS} from './../constants'
import {createAction} from 'redux-actions';


const customers = [
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
];

export const fetchCustomers = createAction(FETCH_CUSTOMERS); 