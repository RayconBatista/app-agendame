import { createStore } from "vuex";
import auth from './modules/auth';
import plan from './modules/plan';
import subscription from './modules/subscription';
import client from './modules/client';
import customer from './modules/customer';
import establishment from './modules/establishment';

export default createStore({
    modules: {
        auth,
        plan,
        client,
        customer,
        establishment,
        subscription
    }
})