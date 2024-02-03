import { createStore } from "vuex";
import auth from './modules/auth';
import plan from './modules/plan';
import subscription from './modules/subscription';
import client from './modules/client';
import customer from './modules/customer';
import establishment from './modules/establishment';
import service from './modules/service';
import role from './modules/acl/roles';
import permission from './modules/acl/permissions';

export default createStore({
    modules: {
        auth,
        role,
        permission,
        plan,
        client,
        service,
        customer,
        establishment,
        subscription
    }
})