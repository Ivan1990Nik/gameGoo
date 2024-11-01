

import { liba } from "../../shared/liba.js";
import { grid } from "./grid.component.js";

export function GameMode() {
    const element = liba.create('div')

    GameMode.render(element)
  

    return {element};
}

GameMode.render = (element) => {
    const gridComponentInstance = grid()
    element.append(gridComponentInstance.element)
}