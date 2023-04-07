const { Sequelize, DataTypes } = required("sequelize");
const User = sequelize.define("user", 
     nome ,{
          type: DataTypes.STRING,
          allowNull: false,
     },
     email ,{
          type: DataTypes.STRING,
          allowNull: false,
     },
     pasoword ,{
          type: DataTypes.STRING,
     }
);
