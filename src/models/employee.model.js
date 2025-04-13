module.exports = (sequelize, DataTypes) => {
    //create the table in my sql
    const Employee = sequelize.define("employee", {
        //name is column in tabel now
      name: {
        //now these are the types of the data is entering into the column
        type: DataTypes.STRING,
        //constraints
        allowNull: false
      },
      position: {
        type: DataTypes.STRING
      },
      salary: {
        type: DataTypes.FLOAT
      }
    });
  
    return Employee;
  };
  