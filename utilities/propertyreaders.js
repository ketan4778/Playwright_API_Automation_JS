const fs = require('fs');
const path = require('path');
const properties = require('properties');

const routeProps = properties.parse(
  fs.readFileSync(path.join(__dirname, '../config/routes.properties'), 'utf-8')
);

module.exports = { routeProps };