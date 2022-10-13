const { Client, AuditLogEvent } = require('discord.js')
const client = new Client({ intents: 3276799 });
const { BOT } = require('./src/Settings/Config')
require("./src/handlers/commandLoader.js")
require("./src/handlers/eventHandler.js")(client)
require("./src/handlers/commandHandler.js")(client)
require("./src/database/mongooseConnector.js").connectMongo()

client.login(BOT.token)
