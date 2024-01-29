export default ({
    getPublishes: state => state.plans.data.filter(p => p.publish === 1),
    getPlanSelected: state => state.plan
});