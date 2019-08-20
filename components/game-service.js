import Target from '../models/Target.js'
import Item from '../models/Item.js';
let _target = new Target("Scarecrow", 100, 1, 5, 10);
let hat = new Item("Straw Hat", 5, "It's my good hat");

let _items = [hat]

export default class GameService {
  constructor() { }

  get Target() {
    return {
      name: _target.name,
      health: _target.health,
      attacks: _target.attacks,
      item: _target.items,
      hits: _target.hits,
    }
  }

  addItemToTarget(itemIndex) {
    let targetItem = _items[itemIndex]
    _target.items.push(targetItem)
  }

  attackTarget(attackName) {
    let attackDamage = _target.attacks[attackName]
    _target.health -= attackDamage
    _target.hits++
  }
}