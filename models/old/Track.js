module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Track', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    genre_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    artist: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    remixer: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    bpm: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    note_key: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    duration: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    uuid: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    youtube_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    title_remixed: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    path: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    associate: function(models)
    {
      models.Track.belongsTo(model.Genre, {as: 'Genre', foreignKey: 'genre_id', targetKey: 'id'})
    },
    tableName: 'tracks'
  });
};
 