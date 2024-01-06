(function () {
  function getInitialState() {
    return [
      [-1, -1, -1],
      [-1, -1, -1],
      [-1, -1, -1],
    ];
  }
  const game_canvas = document.querySelector("#canvas");

  let active_player = 0;

  const player_details = {
    0: { symbol: "😃", backgroundColor: "red" },
    1: { symbol: "😄", backgroundColor: "yellow" },
  };

  var game_values = getInitialState();
  //runs only one time

  function renderCanvas() {
    document.querySelector("#active-player").innerText =
      player_details[active_player].symbol;

    game_values.forEach(function (items, row_id) {
      items.forEach(function (item, col_id) {
        var cell = game_canvas.querySelector(`#row_${row_id}_${col_id}`);

        cell.innerText = item === -1 ? "" : player_details[item].symbol;

        cell.style.backgroundColor =
          item === -1
            ? 'aquamarine'
            : player_details[item].backgroundColor;
      });
    });
  }

  function divClickHandler(e) {
    let segments = e.currentTarget.id.split("_");
    const row = segments[1];
    const column = segments[2];

    if (game_values[row][column] === -1) {
      game_values[row][column] = active_player;
      active_player = active_player == 0 ? 1 : 0;
      renderCanvas();
    }
  }

  function winnerCheck() {}

  document.getElementById("reset_game").addEventListener("click", function () {
    game_values = getInitialState();
    renderCanvas();
  });

  game_canvas
    .querySelectorAll("div[id^=row]")
    .forEach((div) => div.addEventListener("click", divClickHandler));
  renderCanvas();
})();
