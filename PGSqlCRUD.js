const express = require('express');
const Sequelize = require('sequelize');
const app = express();

app.use(express.json());

const dbUrl = Sequelize('postgres://webadmin:YKKgle22587@node51817-chaiaysitz.proen.app.ruk-com.cloud:11492/Books');

const sequelize = new Sequelize(dbUrl);