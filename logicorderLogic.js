var OrderLogic = {

    addOrder: function (order) {
        // Basic validation (you can add more if needed)
        if (!order || !order.fname) {
            return { success: false, message: "Name is required" };
        }
        if (!order.email) {
            return { success: false, message: "Email is required" };
        }
        if (!order.machineType) {
            return { success: false, message: "Machine type is required" };
        }

        // Save using the DAL
        OrderDAL.saveOrder(order);

        return { success: true };
    },

    getOrders: function () {
        return OrderDAL.getAllOrders();
    }
};

var AgentsLogic = {

    // agent should be an object like:
    // { phone: "...", email: "...", password: "..." }
    addAgent: function (agent) {

        if (!agent || !agent.email) {
            return { success: false, message: "Agent email is required" };
        }
        if (!agent.password) {
            return { success: false, message: "Agent password is required" };
        }

        // Save using the DAL
        AgentsDAL.saveAgent(agent);

        return { success: true };
    },

    getAgents: function () {
        return AgentsDAL.getAllAgents();
    }
};
