import commandParser from "../../src/discord/commandParser.js";
import { JUST_ANSWER, LOTTO_NUMBER } from "../../src/discord/botActions.js";

describe("Command Parser", () => {
  it("단순 대답 커맨드를 반환해야 한다", () => {
    const command = commandParser("댕초야");

    expect(command.action).toBe(JUST_ANSWER);
    expect(command.params).toEqual({});
  });

  it("로또번호 커맨드를 반환해야 한다", () => {
    const command = commandParser("댕초야 로또번호");

    expect(command.action).toBe(LOTTO_NUMBER);
    expect(command.params).toEqual({});
  });
});
