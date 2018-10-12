import axios from "axios";

export default {
    //get all appointment
    getAppointments: function() {
        return axios.get("/api/appointments");
    },
    //get the appointment with a given id
    getAppointment: function(id) {
        return axios.get("/api/appointments/" + id);
    },
    //delete the appointment with a given id
    DeleteAppointment: function(id) {
        return axios.delete("/api/appointments/" + id);
    },
    //Save a appointment to the database
    saveAppointment: function(appointmentData) {
        return axios.post("/api/appointments", appointmentData)
    },
    //Update a appointment
    updateAppointment: function(id) {
        return axios.put("/api/appointments", + id)
    },
    //Group API
    //==================================================
    //get all group
    getGroups: function() {
        return axios.get("/api/groups");
    },
    //get the groups with a given id
    getGroup: function(id) {
        return axios.get("/api/groups/" + id);
    },
    //delete the group with a given id
    DeleteGroup: function(id) {
        return axios.delete("/api/groups/" + id);
    },
    //Save a group to the database
    saveGroup: function(groupData) {
        console.log("API is fine!!!")
        console.log(groupData)
        return axios.post("/api/groups", groupData)
    },
    //Update a group
    updateGroup: function(id) {
        return axios.put("/api/groups", + id)
    },
    //Service API
    //==================================================

    //get all services
    getServices: function() {
        return axios.get("/api/services");
    },
    //get all grouped services
    getGroupedServices: function(groupId) {
        return axios.get("/api/groupedservices" + groupId);
    },
    //get the service with a given id
    getService: function(id) {
        return axios.get("/api/services/" + id);
    },
    //delete the service with a given id
    DeleteService: function(id) {
        return axios.delete("/api/services/" + id);
    },
    //Save a service to the database
    saveService: function(serviceData) {
        return axios.post("/api/services", serviceData)
    },
    //Update a service
    updateService: function(id) {
        return axios.put("/api/services", + id)
    }
};