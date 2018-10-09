import axios from "axios";

export default {
    //Saving new group to the database
    saveGroup: function(groupData) {
        return axios.post("/api/groups", groupData);
    }
};