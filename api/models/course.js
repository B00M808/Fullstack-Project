'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  }
  Course.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter a title for your course.",
          },
          notEmpty: {
            msg: "Please provide a title.",
        },
      },
    },
   description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: "A description is required",
        },
        notEmpty: {
          msg: "Please provide a description",
        },  
      },
    },
    estimatedTime: {
      type: DataTypes.STRING,
    },
    materialsNeeded: {
      type: DataTypes.STRING,
  }}, 
  {
    sequelize,
    modelName: 'Course',
  });
  Course.associate = (models) => {
    Course.belongsTo(models.User, { 
      foreignKey: {
        fieldName: 'userId',
      }    
    },
  )};
  return Course;
};