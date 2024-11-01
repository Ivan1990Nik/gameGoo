import { liba } from "../../shared/liba.js";
import { getGridSize, getPositions, subscribe } from "../../state/data.js";
import { googlePlayer } from "./game-participants/google.player.component.js";
import { player_1 } from "./game-participants/player-1.js";
import { player_2 } from "./game-participants/player-2.js";

export const grid = () => {
  const element = liba.create("table", ["style__grid--table"]);

  subscribe(() => {
    grid.render(element);
  });

  grid.render(element);

  return { element };
};

grid.render = (element) => {
  element.innerHTML = "";
  const playerGoogle = googlePlayer();
  const player1 = player_1();
  const player2 = player_2();
  const gridSize = getGridSize();
  const positions = getPositions();

  const jail = liba.create("div", ["style__jail"]);
  jail.append(player2, player1);



  const images = liba.create("img", ["img_style"])
images.src = "icon/grate.png"




jail.append(images)

  for (let y = 0; y < gridSize.rowsCount; y++) {
    const row = liba.create("tr");

    for (let x = 0; x < gridSize.columnsCount; x++) {
      const cell = liba.create("td", ["style__grid"]);

      if (x === positions.google.x && y === positions.google.y) {
        cell.append(playerGoogle);
      }
      if (x === positions.player1.x && y === positions.player1.y) {
        cell.append(player1);
      }
      if (x === positions.player2.x && y === positions.player2.y) {
        cell.append(player2);
      }

      row.append(cell);
    }
    element.append(row, jail);
  }
};
