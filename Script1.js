var LocalData = {
    orders: [],
    agents: []
};

// Tier 4 - data access (DAL)


var OrderDAL = {
    saveOrder: function (order) {
        LocalData.orders.push(order);
    },
    getAllOrders: function () {
        return LocalData.orders;
    }
};


var AgentsDAL = {
    saveAgent: function (agent) {
        LocalData.agents.push(agent);
    },
    getAllAgents: function () {
        return LocalData.agents;
    }
};