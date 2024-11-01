import { liba } from "../shared/liba.js";
import { getStatus, subscribe } from "../state/data.js";
import { GAME_STATUSES } from "../state/GAME_STATUSES.js";
import { GameMode } from "./game-mode/game-mode.component.js";
import { LoseMode } from "./lose-mode.component.js";
import { SettingsMode } from "./settings-mode.component.js";
import { WinMode } from "./win-mode.component.js";

export const Game = () => {
  const element = liba.create("div");
  const localState = { status: null };

  subscribe(() => {
    Game.render(element, localState);
  });

  Game.render(element, localState);

  return {element};
};

Game.render = (element, localState) => {
  const status = getStatus();
  if (localState.status === status) return;
  localState.status = status
  element.innerHTML = "";

  switch (status) {
    case GAME_STATUSES.SETTINGS:
      const settingsModeInstance = SettingsMode();
      element.append(settingsModeInstance.element);
      break;
    case GAME_STATUSES.IN_PROGRESS:
      const gameModeInstance = GameMode();
      element.append(gameModeInstance.element);
      break;
    case GAME_STATUSES.LOSE:
      const loseModeInstance = LoseMode();
      element.append(loseModeInstance.element);
      break;
    case GAME_STATUSES.WIN:
      const winModeInstance = WinMode();
      element.append(winModeInstance.element);
      break;
    default:
      element.append("STATE IS INVALID");
  }
}