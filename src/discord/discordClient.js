import { Client, Events, GatewayIntentBits } from "discord.js";
import { logger } from "../framework/log4j.js";
import commandParser from "./commandParser.js";
import RouteDispatcher from "../route/RouteDispatcher.js";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

const routeDispatcher = new RouteDispatcher();

// 메시지 gateway
client.on(Events.MessageCreate, (message) => {
  console.log(message);
  logger.info(
    message.author.id,
    message.author.username,
    ":",
    message.content,
    message.attachments,
    message.reference
  );

  const command = commandParser(message.content);
  routeDispatcher.route(command.action, {});
});

const listenDiscord = () => {
  client.login(process.env.BOT_TOKEN);
};

export { listenDiscord, routeDispatcher };
