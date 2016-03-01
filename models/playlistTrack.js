'use strict';

module.exports = function(sequelize, DataTypes) {
  var PlaylistTrack = sequelize.define('PlaylistTrack', {
    PlaylistId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    TrackId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  }, {
    tableName: 'PlaylistTrack',
    timestamps: false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  return PlaylistTrack;
};

