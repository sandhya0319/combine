'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  transaction.init({
    transactionType: DataTypes.STRING,
    monthyear: DataTypes.STRING,
    Transactiondate: DataTypes.STRING,
    fromAccount: DataTypes.STRING,
    toAccount: DataTypes.STRING,
    amount: DataTypes.STRING,
    image: DataTypes.STRING,
    notes: DataTypes.STRING
  }, {
    sequelize,
    paranoid:true,
    modelName: 'transaction',
  });
  return transaction;
};