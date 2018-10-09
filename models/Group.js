module.exports = function(sequelize, DataTypes) {
    var Group = sequelize.define("Group", {
        name: DataType.STRING,
    });

    //Associating Groups with list of services
    Group.associate = function(models) {
        Group.hasMany(models.GroupedServices, {
            onDelete: "cascade"
        });
    };
    return Group;
};