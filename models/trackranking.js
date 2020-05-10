'use strict';
module.exports = (sequelize, DataTypes) => {
  var TrackRanking = sequelize.define('TrackRanking', {
    ranking: DataTypes.STRING,
  });

  TrackRanking.associate = function(models) {
    models.TrackRanking.belongsTo(models.Classement, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
    models.TrackRanking.belongsTo(models.Track, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return TrackRanking;
};