// LocalData now only READS from storage
// so your other code like LocalData.orders.length
// still works correctly
var LocalData = {

    get orders() {
        return JSON.parse(localStorage.getItem("orders")) || [];
    },

    get agents() {
        return JSON.parse(localStorage.getItem("agents")) || [];
    }
};

var OrderDAL = {

    saveOrder: function (order) {

        // load existing orders from storage
        let orders = JSON.parse(localStorage.getItem("orders")) || [];

        // add new order
        orders.push(order);

        // save back
        localStorage.setItem("orders", JSON.stringify(orders));
    },

    getAllOrders: function () {
        return JSON.parse(localStorage.getItem("orders")) || [];
    }
};

var AgentsDAL = {

    saveAgent: function (agent) {

        let agents = JSON.parse(localStorage.getItem("agents")) || [];

        agents.push(agent);

        localStorage.setItem("agents", JSON.stringify(agents));
    },

    getAllAgents: function () {
        return JSON.parse(localStorage.getItem("agents")) || [];
    }
};
