
module.exports = (sequelize, dataTypes) => {
    let alias = "Image";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: "images",
        timestamps: false
    }

    const Image = sequelize.define(alias, cols, config);

    Image.associate = function (models) {

        Image.belongsToMany(models.Product, {
            as: "images",
            through: "product_images",
            foreignKey: "images_id",
            otherKey: "products_id",
            timestamps: false
        })
    }

    return Image;
    
    

}