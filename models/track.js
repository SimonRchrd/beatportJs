'use strict';
module.exports = (sequelize, DataTypes) => {
  var Track = sequelize.define('Track', {
    title: DataTypes.STRING,
    title_remixed: DataTypes.STRING,
    artist: DataTypes.STRING,
    remixer: DataTypes.STRING,
    bpm: DataTypes.STRING,
    note_key: DataTypes.STRING,
    duration: DataTypes.STRING,
    uuid: DataTypes.STRING,
    youtube_id: DataTypes.STRING,
    duration: DataTypes.STRING,
    path: DataTypes.STRING,
  });

  Track.associate = function (models) {
    models.Track.belongsTo(models.Genre, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Track;
};