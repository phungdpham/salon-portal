module.exports = function(sequelize, DataTypes) {
    var Appointment = sequelize.define("Appointments", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        phoneNum: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                len: 10
            }
        },
        selectDate: {
            type: Datatypes.DATEONLY,
            allowNull: false,
        },
        selectTime: {
            type: Datypes.Time,
            allowNull: false
        }
    });
    return Appointment;
};
