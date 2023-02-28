import { JUST_ANSWER, LOTTO_NUMBER, PASS } from "./botActions.js";

class CommandDto {
  constructor(action, params) {
    this.action = action;
    this.params = params;
  }
}

export default (messageContent) => {
  if (messageContent === "댕초야") {
    return new CommandDto(JUST_ANSWER, {});
  }

  if (messageContent === "댕초야 로또번호") {
    return new CommandDto(LOTTO_NUMBER, {});
  }

  return new CommandDto(PASS, {});
};
