import { routeDispatcher } from "../discord/discordClient.js";
import { LOTTO_NUMBER } from "../discord/botActions.js";

export default () => {
  routeDispatcher.addEventListener(LOTTO_NUMBER, (params) => {
    console.log("todo response lotto number");
  });
};
