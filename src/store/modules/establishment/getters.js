export default ({
    showEstablishment: state => state.establishment,
    getResponsible: state => state.establishment?.clients.filter((client) => {
        return client?.user?.name
    })
});