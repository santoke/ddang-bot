import * as dotenv from "dotenv";
import { initLogger } from "./framework/log4j.js";
import { listenDiscord } from "./discord/discordClient.js";
import routeIndex from "./route/routeIndex.js";

dotenv.config();

initLogger();
listenDiscord();
routeIndex();
