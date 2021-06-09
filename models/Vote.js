const sequelize = require('../config/connection');
const {DataTypes, Model} = require ('sequelize');

class Vote extends Model {}

Vote.init(
    {
        id : {
            type : DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey : true,
        },
        user_id : {
            type : DataTypes.INTEGER,
            references : {
                model : 'user',
                key : 'id'
            }
        },
        post_id : {
            type : DataTypes.INTEGER,
            references : {
                model : 'post',
                key : 'id'
            }
        }
    }, 
    {
        sequelize, 
        timestamps : false,
        freezeTableName : true,
        underscored : true, 
        modelName : 'vote'
    }
)

module.exports = Vote;