'use strict';
module.exports = (sequelize, DataTypes) => {
  var Genre = sequelize.define('Genre', {
    name: DataTypes.STRING,
    link: DataTypes.STRING,
    path: DataTypes.STRING
  });

  Genre.associate = function(models) {
    models.Genre.hasMany(models.Track);
    models.Genre.hasMany(models.Classement);
  };

  return Genre;
};