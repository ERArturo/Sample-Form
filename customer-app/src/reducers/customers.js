import {handleActionS} from 'redux-actions';
import { FETCH_CUSTOMERS } from '../constants';

const customers  = handleActionS({
        [FETCH_CUSTOMERS] : state => state
    }, {});