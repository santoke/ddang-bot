import * as log4js from "log4js";

const initLogger = () => {
  log4js.default.configure({
    appenders: { log: { type: "file", filename: "chatlog.log" } },
    categories: { default: { appenders: ["log"], level: "debug" } },
  });
};

const logger = log4js.default.getLogger();

export { initLogger, logger };
