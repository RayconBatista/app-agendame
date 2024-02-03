export default {
    menu: {
        geral: {
            icon: null,
            items: [
                {
                    title: 'Dashboard',
                    icon: 'fa-solid fa-dashboard',
                    to: 'dashboard',
                },
                {
                    title: 'Clientes',
                    icon: 'fa-solid fa-users',
                    to: 'clients.index',
                    can: null
                },    
                {
                    title: 'Estabelecimentos',
                    icon: 'fa-solid fa-store',
                    to: 'establishments.index',
                    can: null
                },    
            ]
        },
        business: {
            icon: 'fa-solid fa-briefcase',
            title: 'Negócio',
            items: [
                {
                    title: 'Meus Clientes',
                    to: 'customers.index',
                    can: 'list_client'
                },
                {
                    title: 'Serviços',
                    to: 'services.index',
                    can: 'list_services'
                },
            ]
        },
        accessControl: {
            icon: 'fa-solid fa-shield-halved',
            title: 'Controle de acesso'
        }
    }
}