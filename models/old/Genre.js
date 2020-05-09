module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Genre', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    path: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    link: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    associate: function(models)
    {
      models.Genre.hasMany(models.Track, {as: "Tracks", foreignKey: 'genre_id', sourceKey: 'id'})
    },
    tableName: 'genres',
    timestamps: false

  });
};
