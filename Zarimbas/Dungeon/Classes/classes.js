class Mob {
  constructor (name, attack, currentDefense, hp, goldLoot){
    this.name = name
    this.attack = attack
    this.hp = hp
    this.currentDefense = currentDefense
    this.goldLoot = goldLoot
  }  
}

class Spell{
  constructor (damage, manaCost){
  this.damage = damage
  this.manaCost = manaCost
  }
}