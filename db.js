/** Database setup for BizTime. */

const { Client } = require("pg");

const client = new Client({
    connectionString: "postgresql://biztime"
});

module.export = client;
