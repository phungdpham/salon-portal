module.exports = function(sequelize, DataTypes) {
    var Appointment = sequelize.define("Appointment", {
        customerName: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        phoneNum: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [10]
            }
        },
        selectService: {
            type: DataTypes.STRING,
            allowNull: false
        },
        selectDate: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        selectTime: {
            type: DataTypes.TIME,
            allowNull: false
        }
    });
    return Appointment;
};
