module.exports = function(sequelize, DataTypes) {
    var GroupedServices = sequelize.define("GroupedServices", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        price: Datatypes.DECIMAL,
        allowNull: false,
    });

    //Relationship with Group: GroupedServices belongs to Group
    GroupedServices.associate  = function(models) {
        GroupedServices.belongto(models.Group, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return GroupedServices;
};

