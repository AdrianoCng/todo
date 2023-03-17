import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  dialect: 'mysql',
  port: 3306,
});

sequelize
  .authenticate()
  .then(() => console.log('Database connected.'))
  .catch((err) => console.log('Error connecting to the database', err));

sequelize.sync();

export default sequelize;
