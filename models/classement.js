'use strict';
module.exports = (sequelize, DataTypes) => {
  var Classement = sequelize.define('Classement', {
  });

  Classement.associate = function (models) {
    models.Classement.hasMany(models.TrackRanking);
    models.Classement.belongsTo(models.Genre, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Classement;
};