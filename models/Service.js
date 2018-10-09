module.exports = function(sequelize, DataTypes) {
    var Service = sequelize.define("service", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        price: Datatypes.DECIMAL,
        allowNull: false,
    });

    //Relationship with Group: GroupedServices belongs to Group
    Service.associate  = function(models) {
        service.belongto(models.Group, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Service;
};

