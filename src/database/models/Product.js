
module.exports = (sequelize, dataTypes) => {
let alias = "Product";
let cols = {
        id: { 
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
           },
        name: {
            type: dataTypes.STRING(45),
            notNull: true
        },
        description: {
            type: dataTypes.STRING(400), 
        },
        price: {
            type: dataTypes.INTEGER(11),
            notNull: true
        },
        quantity: {
            type: dataTypes.INTEGER(11),
            notNull: true
        },
        color: {
            type: dataTypes.STRING(45)
        },
        sizes: {
            type: dataTypes.STRING(45)
        },
        brand_id: {
            type: dataTypes.INTEGER(11)
        },
        categories_id: {
            type: dataTypes.INTEGER(11)
        }
}

let config = {
    tableName: "products",
    timestamps: false
}

    const Product = sequelize.define(alias, cols, config)

    Product.associate = function (models) {
    
        Product.belongsTo(models.Brand, {
            as: "brands",
            foreignKey: "brand_id"
        });
        Product.belongsTo(models.Category,{
            as: "categories",
            foreignKey:"categories_id"
        })
    }

    return Product
}