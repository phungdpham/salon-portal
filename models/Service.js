module.exports = function(sequelize, DataTypes) {
    var Service = sequelize.define("Service", {
        serviceName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price:{ 
            type: DataTypes.DECIMAL,
            allowNull: false 
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    //Relationship with Group: GroupedServices belongs to Group
    Service.associate  = function(models) {
        Service.belongsTo(models.Group, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Service;
};

