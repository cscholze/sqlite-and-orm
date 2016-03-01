'use strict';

module.exports = function(sequelize, DataTypes) {
  var InvoiceLine = sequelize.define('InvoiceLine', {
    InvoiceLineId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    InvoiceId: DataTypes.INTEGER,
    TrackId: DataTypes.INTEGER,
    UnitPrice: DataTypes.DECIMAL(10, 2),
    Quantity: DataTypes.INTEGER
  }, {
    tableName: 'InvoiceLine',
    timestamps: false,
    classMethods: {
      associate: function(models) {
          // define associations here
      }
    }
  });

  return InvoiceLine;
};
