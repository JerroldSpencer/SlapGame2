import GameService from "./game-service.js";

let _gameService = new GameService()

function draw() {
  let target = _gameService.Target
  let template =
    <div class="card">
      <h2>${target.name}</h2>
      <h4>Health: ${target.health}</h4>
    </div>

}

export default class GameController {
  constructor() { }

  addItemToTarget(itemIndex) {
    _gameService.addItemToTarget(itemIndex)
  }

  attackTarget(attackName) {
    draw()
  }
}