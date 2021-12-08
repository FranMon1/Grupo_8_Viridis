const User = require("../../models/User");

module.exports = function (sequelize, dataTypes) {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        nombre: {
            type: dataTypes.STRING(45),
            notNull: true
        },
        usuario: {
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
        imagen_usuario: {
            type: dataTypes.STRING(45),
            notNull: true
        },
        roles_id: {
            type: dataTypes.INTEGER(11),
            notNull: true
        }
    };

    let config = {
        tableName : "Users",
        timestamps: false
    }

    const User = sequelize.define(alias,cols,config);

    User.associate = function (models) {
        User.belongsToMany(models.Product, {
            as: "User_products",
            through: "productos_a_comprar",
            foreignKey: "products_id",
            otherKey: "image_id",
            timestamps: false
        });
        Product.belongsTo(models.Brand, {
            as: "brands",
            foreignKey: "brand_id"
        })
    }
    return User;
}




