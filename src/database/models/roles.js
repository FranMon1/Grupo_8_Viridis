module.exports = (sequelize, dataTypes) => {
    let alias = "role";
    let cols = { 
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(45)
        }

    }
    let config = {
        tableName: "roles",
        timestamps: false
    }

    const Role = sequelize.define(alias, cols, config)

    Role.associate = function (models) {
        Role.hasMany(models.User, {
            as: "roles",
            foreignKey: "users_id"
        })
    }

    return Role;
}