'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Overview extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Overview.init({
    consumption: DataTypes.FLOAT,
    time: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Overview',
  });
  return Overview;
};