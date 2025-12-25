var OrderLogic = {

    addOrder: function (order) {

        if (order.fname === "") {
            return { success: false, message: "Name is required" };
        }

        OrderDAL.saveOrder(order);
        return { success: true };
    },

    getOrders: function () {
        return OrderDAL.getAllOrders();
    }
};

var AgentsLogic = {

    addAgents: function (order) {

        AgentsDAL.saveAgents(agent);
      
    },

    getAgents: function () {
        return AgentsDAL.getallAgents();
    }
}