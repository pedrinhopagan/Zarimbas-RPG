  // Variáveis Values

let maxHp = $('.maxHpC')
let currentHp = $('.currentHpC')

let maxMana = $('.maxManaC')
let currentMana = $('.currentManaC')

let currentAttack = $('.currentAttackC')
let currentDefense = $('.currentDefenseC')
let currentMoney = $('.currentMoneyC')

  // Variáveis Name

let nameMaxHp = document.querySelector('.nameMaxHp').textContent
let nameHp = document.querySelector('.nameHp').textContent

let nameMaxMana = document.querySelector('.nameMaxMana').textContent
let nameMana = document.querySelector('.nameMana').textContent

let nameAttack = document.querySelector('.nameAttack').textContent
let nameDefense = document.querySelector('.nameDefense').textContent
let nameMoney = document.querySelector('.nameMoney').textContent

  // Variáveis Combate

let currentFloor = 0
let currentEnemyHealth = 0
let currentEnemyAttack = 0
let currentAllyHealth = 0
let cumulatedLoot = 0

  // Variáveis Gerais

let storeStatus = closed
const consoleText = $(".console-text").text()

  // Local Storage

  console.log(localStorage)
  

function initialStatus(){
  if (localStorage.length != 0){
    updateAllStatus()

    checkSwords('wood')
    checkSwords('iron')
    checkSwords('gold')
    checkSwords('platinum')
    checkSwords('diamong')

    checkArmors('wood')
    checkArmors('iron')
    checkArmors('gold')
    checkArmors('platinum')
    checkArmors('diamong')
    

    console.log('Updated')

  } else { 
    getStatus(nameMaxHp, '100'), 
    getStatus(nameHp, '100'), 
    getStatus(nameAttack, '1'), 
    getStatus(nameDefense, '1'), 
    getStatus(nameMoney, '150'),
    getStatus(nameMaxMana, '20'), 
    getStatus(nameMana, '20'),

    updateAllStatus()

    console.log('Added new')
  }
}

function getAllStatus(){
  getStatus(nameMaxHp, $('.maxHpC').text()), 
  getStatus(nameHp, $('.currentHpC').text()), 

  getStatus(nameMaxMana, $('.maxManaC').text()), 
  getStatus(nameMana, $('.currentManaC').text()), 

  getStatus(nameAttack, $('.currentAttackC').text()), 
  getStatus(nameDefense, $('.currentDefenseC').text()), 
  getStatus(nameMoney, $('.currentMoneyC').text())
}

function updateAllStatus(){
  updateStatus(nameMaxHp, maxHp),
  updateStatus(nameHp, currentHp),
  updateStatus(nameMaxMana, maxMana),
  updateStatus(nameMana, currentMana),
  updateStatus(nameAttack, currentAttack), 
  updateStatus(nameDefense, currentDefense),
  updateStatus(nameMoney, currentMoney)
}


function getStatus(name, status){
  localStorage.setItem((`${name}`), status)
}
function updateStatus(name, status){
  status.text(localStorage.getItem(`${name}`))
}
function showStorage(){
  console.log(localStorage)
}
function clearStorage(name){
  localStorage.clear()
}


function checkSwords(material){
  
  if (localStorage.getItem(`sword-${material}`) == true){
    console.log(`Tem espada de ${material}`)
    boughtItem(`sword-${material}`)
  }
}

function checkArmors(material){
  
  if (localStorage.getItem(`armor-${material}`) == true){
    console.log(`Tem armadura de ${material}`)
    boughtItem(`armor-${material}`)
  }
}



// MENUS

function applyHidden(klass){
  if (document.querySelector(`.${klass}`).classList.contains('hidden')) {
    document.querySelector(`.${klass}`).classList.remove('hidden')
  } else {
    document.querySelector(`.${klass}`).classList.add('hidden')
  }
}


function openStore (){
  if (document.querySelector('.store').classList.contains('hidden')) {
    document.querySelector('.store').classList.remove('hidden')
  } else {
    document.querySelector('.store').classList.add('hidden'), 
    document.querySelector('.swords').classList.add('hidden'),
    document.querySelector('.armors').classList.add('hidden')
  }
}

function openDungeon (){
  if (document.querySelector('.dungeon-paths').classList.contains('hidden')) {
    document.querySelector('.dungeon-paths').classList.remove('hidden')
  } else {
    document.querySelector('.dungeon-paths').classList.add('hidden')
  }
}

function openAlchemy (){
  if (document.querySelector('.alchemy').classList.contains('hidden')) {
    document.querySelector('.alchemy').classList.remove('hidden')
  } else {
    document.querySelector('.alchemy').classList.add('hidden')
  }
}

function openSwords(){
  if (document.querySelector('.swords').classList.contains('hidden')){
    document.querySelector('.swords').classList.remove('hidden')
  } else {
    document.querySelector('.swords').classList.add('hidden')
  }
}

function openArmors(){
  if (document.querySelector('.armors').classList.contains('hidden')){
    document.querySelector('.armors').classList.remove('hidden')
  } else {
    document.querySelector('.armors').classList.add('hidden')
  }
}


function openCombatButtons(){
  if (document.querySelector('.buttons-dungeon').classList.contains('hidden')){
    document.querySelector('.buttons-dungeon').classList.remove('hidden')
  } else {
    document.querySelector('.buttons-dungeon').classList.add('hidden')
  }
}

// BUY

function buySword(sword){
  switch (sword){
    case 'wood':
      if (currentMoney.text() >= 50){
        decreaseCurrentMoney(50)
        increaseCurrentAttack(4)
        localStorage.setItem('sword-wood', 1)
        boughtItem('sword-wood')
      } else {
        writeInConsole('Dinheiro insuficiente.')
      }
      break
      case 'iron':
      if (currentMoney.text() >= 120){
        decreaseCurrentMoney(120)
        increaseCurrentAttack(15)
        localStorage.setItem('sword-iron', 1)
        boughtItem('sword-iron')
      } else {
        writeInConsole('Dinheiro insuficiente.')
      }
      break
      case 'gold':
      if (currentMoney.text() >= 1000){
        decreaseCurrentMoney(1000)
        increaseCurrentAttack(20)
        localStorage.setItem('sword-gold', 1)
        boughtItem('sword-gold')
      } else {
        writeInConsole('Dinheiro insuficiente.')
      }
      break
      case 'platinum':
      if (currentMoney.text() >= 5000){
        decreaseCurrentMoney(5000)
        increaseCurrentAttack(30)
        localStorage.setItem('sword-platinum', 1)
        boughtItem('sword-platinum')
      } else {
        writeInConsole('Dinheiro insuficiente.')
      }
      break
      case 'diamond':
      if (currentMoney >= 10000){
        decreaseCurrentMoney(10000)
        increaseCurrentAttack(100)
        localStorage.setItem('sword-diamond', 1)
        boughtItem('sword-diamond')
      } else {
        writeInConsole('Dinheiro insuficiente.')
      }
  }
}

function buyArmor(armor){
  switch (armor){
    case 'wood':
      if (currentMoney.text() >= 50){
        decreaseCurrentMoney(50)
        increaseCurrentDefense(4)
        localStorage.setItem('armor-wood', 1)
        boughtItem('armor-wood')
      } else {
        writeInConsole('Dinheiro insuficiente.')
      }
      break
      case 'iron':
      if (currentMoney.text() >= 120){
        decreaseCurrentMoney(120)
        increaseCurrentDefense(10)
        localStorage.setItem('armor-iron', 1)
        boughtItem('armor-iron')
      } else {
        writeInConsole('Dinheiro insuficiente.')
      }
      break
      case 'gold':
      if (currentMoney.text() >= 1000){
        decreaseCurrentMoney(1000)
        increaseCurrentDefense(10)
        localStorage.setItem('armor-gold', 1)
        boughtItem('armor-gold')
      } else {
        writeInConsole('Dinheiro insuficiente.')
      }
      break
      case 'platinum':
      if (currentMoney.text() >= 5000){
        decreaseCurrentMoney(5000)
        increaseCurrentDefense(25)
        localStorage.setItem('armor-platinum', 1)
        boughtItem('armor-platinum')
      } else {
        writeInConsole('Dinheiro insuficiente.')
      }
      break
      case 'diamond':
      if (currentMoney >= 10000){
        decreaseCurrentMoney(10000)
        increaseCurrentDefense(25)
        localStorage.setItem('armor-diamond', 1)
        boughtItem('armor-diamond')
      } else {
        writeInConsole('Dinheiro insuficiente.')
      }
  }
}

function usePotion(size){
  
  switch (size){
    case 'small':
      if (currentMoney >= 20 && currentHp < maxHp){
        decreaseCurrentMoney(20)
        increaseCurrentHp(15)
        setMaxHp()
        
      }else if (currentMoney < 20){
        return writeInConsole('Dinheiro insuficiente')
        }
        break
    case 'medium':
      if (currentMoney >= 100 && currentHp < maxHp){
        decreaseCurrentMoney(80)
        increaseCurrentHp(100)
        setMaxHp()
        
      }else if (currentMoney < 100){
        return writeInConsole('Dinheiro insuficiente')
        }
        break
    case 'big':
      if (currentMoney >= 250 && currentHp < maxHp){
        decreaseCurrentMoney(220)
        increaseCurrentHp(250)
        setMaxHp()
        
      }else if (currentMoney < 250){
        return writeInConsole('Dinheiro insuficiente')
        }
        break
    case 'huge':
      if (currentMoney >= 500 && currentHp < maxHp){
        decreaseCurrentMoney(450)
        increaseCurrentHp(500)
        setMaxHp()
        
      }else if (currentMoney < 500){
        return writeInConsole('Dinheiro insuficiente')
        }
        break
      }
}



// DUNGEON

function selectPath(path){
  switch (path){
    case 'swamp':
      if (currentAttack.text() >= 1){
        console.log('Entrando no Pantano')
        openDungeon()
        switchDungeonBackground(path)
        openCombatButtons()
        writeInConsole('SE PREPARE!')
        break
      } else {
        console.log('Você não é forte o suficiente')
        break
      }
    case 'castle':
      if (currentAttack.text() >= 30 && currentDefense.text() >= 1) {
        console.log('Entrando no Castelo')
        openDungeon()
        switchDungeonBackground(path)
        writeInConsole('Entrando no castelo!')
        openCombatButtons()
        break
      } else {
        writeInConsole('Fique mais forte!')
        break
      }
    case 'volcano':
  }
}

function returnToMap(){
  currentFloor = 0
  currentEnemyHealth = 0
  currentEnemyAttack = 0
  currentAllyHealth = 0
  openDungeon()
  switchDungeonBackground('map')
  openCombatButtons()
  writeInConsole('Você está seguro.')
  turnBlank('ground-spot')
  turnBlank('flying-spot')
  turnBlank('character-spot')
  $(".enemy-health").html('')
}

function summonCharacter(){
  $(document).ready(function placeCharacter(){
  $(`.character-spot`).css({"background-image": `url(../assets/warrior.png)`})
})
}

function turnBlank(image){
  $(document).ready(function placeImg(){
    $(`.${image}`).css({"background-image": `url(../assets/blank.png)`})
})
}

function switchDungeonBackground(path){
  $(document).ready(function placeBackground(){
    $(`.background-dungeon`).css({"background-image": `url(../assets/${path}.png)`})
})
}


function climbDungeon(){
  switch(currentFloor){
    case 0:
      if ($(".enemy-health").html() == ""){
        summonCharacter()
        summonEnemy(swampTree, `ground`)
        break
      } else {
        break
      }
    case 1:
      if ($(".enemy-health").html() == ""){
        summonEnemy(swampWolf, `ground`)
        break
      } else {
        break
      }  
    case 2:
      if ($(".enemy-health").html() == ""){
        summonEnemy(swampBear, `ground`)
        break
      } else {
        break
      }  
    case 3: 
    if ($(".enemy-health").html() == ""){
        summonEnemy(swampWorm, `ground`)
        break
      } else {
        break
      }  
    case 4:
      if ($(".enemy-health").html() == ""){
        summonEnemy(swampSnake, `ground`)
        break
      } else {
        break
      }  
    case 5:
      if ($(".enemy-health").html() == ""){
        summonEnemy(swampZombie, `ground`)
        break
      } else {
        break
      }  
    case 6:
      if ($(".enemy-health").html() == ""){
        summonEnemy(swampRavener, `ground`)
        break
      } else {
        break
      }  
    case 7:
      if ($(".enemy-health").html() == ""){
        summonEnemy(swampDragon, `ground`)
        break
      } else {
        break
      }  
  }
}

function summonEnemy(enemy, type){
  $(document).ready(function placeCharacter(){
    $(`.${type}-spot`).css({"background-image": `url(../assets/${enemy.name}.png)`})
  }) 
  $(".enemy-health").html(enemy.hp)
  currentEnemyHealth = enemy.hp
  currentEnemyAttack = enemy.attack
  currentAllyHealth = Number(currentHp.text())
  cumulatedLoot = 0 
  cumulatedLoot += enemy.goldLoot[Math.random().toFixed()*(enemy.goldLoot.length - 1)]

  document.querySelector('.melee').classList.remove(`hidden`)
}

function hitEnemyMelee(){
  currentEnemyHealth -= Number(currentAttack.text())
  $(".enemy-health").html(`${currentEnemyHealth}`)
  currentAllyHealth -= Number(currentEnemyAttack-currentDefense.text())
  $('.currentHpC').text(currentAllyHealth)
  checkEnemyAlive()
  checkAllyAlive()
}

function checkEnemyAlive(){
  if (currentEnemyHealth <= 0){
    turnBlank('ground-spot', 'flying-spot')
    $(".enemy-health").html('')
    currentFloor++
    currentEnemyHealth = 0
    currentEnemyAttack = 0
    document.querySelector('.melee').classList.add(`hidden`)
    writeInConsole('VocË matou o mostro!')
    increaseCurrentMoney(cumulatedLoot)
  }
}

function checkAllyAlive(){
  if (currentAllyHealth <= 0){
    turnBlank('ground-spot', 'flying-spot')
    $(".enemy-health").html('')
    summonCharacter()
    currentFloor = 0
    cumulatedLoot = 0
    currentEnemyHealth = 0
    currentEnemyAttack = 0
    currentAllyHealth = $('.maxHpC').text()
    getStatus(nameHp, currentAllyHealth),
    updateAllStatus()
    currentAllyHealth = 0
    writeInConsole('VocË morreu!')
    deathScreen()
  }
}

function deathScreen(){
  document.querySelector('.death-screen').classList.remove('hidden')
  $(document).ready(function placeBackground(){
    $(`.background-dungeon`).css({"background-image": `url(../assets/blackScreen.png)`})
    $(`.death-screen button`).css({'transform': 'scale(1.2)'
    })
  
})
}

function summonEnemyHpBar(){
  if (document.querySelector('.enemy-health-bar').classList.contains('hidden')){
    document.querySelector('.enemy-health-bar').classList.remove('hidden')
  } else {
    document.querySelector('.enemy-health-bar').classList.add('hidden')
  }
}

  // CONSOLE

function writeInConsole(text){
  $(".console-text").text(`${text}`)
  setTimeout(() => {
    $(".console-text").text(consoleText)
  }, 3500);
}


  // REST



  // UTILITY



function setMaxMana(){
  if (currentMana > maxMana){
    currentMana.text() = maxMana
    $('.currenManaC').text(maxMana)
  }
}

function increaseCurrentMoney (amount){
  $('.currentMoneyC').text(Number($('.currentMoneyC').text())+amount)
}

function decreaseCurrentMoney (amount){
  $('.currentMoneyC').text(Number($('.currentMoneyC').text())-amount)
}

function increaseCurrentHp (amount){
  $('.currentHpC').text(Number($('.currentHpC').text())+amount)
  setMaxHp()
}

function decreaseCurrentHp (amount){
  $('.currentHpC').text(Number($('.currentHpC').text())-amount)
}

function increaseCurrentAttack (amount){
  $('.currentAttackC').text(Number($('.currentAttackC').text())+amount)
}

function increaseCurrentDefense(amount){
  $('.currentDefenseC').text(Number($('.currentDefenseC').text())+amount)
}


function boughtItem(item){
  $(document).ready(function riskItem(){
    $(`.${item}`).css({
    "text-decoration": "line-through",
    "pointer-events": "none"
    });
})
}

function setMaxHp (){
  if ($('.currentHpC').text() > $('.maxHpC').text()){
    $('.currenHpC').text(Number($('.maxHpC').text()))
    getStatus(nameHp, $('.maxHpC').text())
    updateAllStatus()
    console.log($('.currentHpC').text())
  }
}


