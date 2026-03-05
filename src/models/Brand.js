const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Brand = sequelize.define('Brand', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  audience: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  tone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  industry: {
    type: DataTypes.STRING
  },
  brandNames: {
    type: DataTypes.JSONB
  },
  taglines: {
    type: DataTypes.JSONB
  },
  brandVoice: {
    type: DataTypes.JSONB
  },
  colorPalette: {
    type: DataTypes.JSONB
  },
  typography: {
    type: DataTypes.JSONB
  },
  styleGuideMarkdown: {
    type: DataTypes.TEXT
  },
  exportUrl: {
    type: DataTypes.STRING
  }
}, {
  timestamps: true
});

module.exports = Brand;