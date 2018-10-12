module.exports = function(sequelize, DataTypes) {
    var Group = sequelize.define("Group", {
        groupName: DataTypes.STRING
    });

    //Associating Groups with list of services
    Group.associate = function(models) {
        Group.hasMany(models.Service, {
            onDelete: "cascade"
        });
    };
    return Group;
};