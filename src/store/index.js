import { createStore } from "vuex";
import auth from './modules/auth';
import plan from './modules/plan';
import subscription from './modules/subscription';

export default createStore({
    modules: {
        auth,
        plan,
        subscription
    }
})