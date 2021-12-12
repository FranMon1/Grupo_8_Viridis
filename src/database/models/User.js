module.exports = function (sequelize, dataTypes) {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        name: {
            type: dataTypes.STRING(45),
            notNull: true
        },
        user: {
            type: dataTypes.STRING(45),
            notNull: true
        },
        password: {
            type: dataTypes.STRING(45),
            notNull: true
        },
        email: {
            type: dataTypes.STRING(45),
            notNull: true
        },
        user_image: {
            type: dataTypes.STRING(45),
            notNull: true
        },
        roles_id: {
            type: dataTypes.INTEGER(11),
            notNull: true
        }
    };

    let config = {
        tableName : "users",
        timestamps: false
    }

    const User = sequelize.define(alias,cols,config);


    User.associate = function (models) {
        User.belongsTo(models.Role, {
            as: "roles",
            foreignKey: "roles_id"
        });


    
    }   
    return User;
}