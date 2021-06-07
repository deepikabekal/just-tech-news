const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

// create fields/columns for Post model
Post.init(
    {
        //define columns
        id : {
            type : DataTypes.INTEGER,
            allowNull : false,
            autoIncrement : true,
            primaryKey : true
        },
        title : {
            type : DataTypes.STRING,
            allowNull: false
        },
        post_url : {
            type : DataTypes.STRING,
            allowNull : false,
            validate : {
                isUrl : true
            }
        },
        user_id : {
            type : DataTypes.INTEGER,
            references : {
                model : 'user',
                key : 'id'
            }
        }
    },
    //define configurations
    {
        sequelize : true, 
        freezeTableName : true,
        underscored : true,
        modelName: 'post'
    }
);

module.exports = Post;