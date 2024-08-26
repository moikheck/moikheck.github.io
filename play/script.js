const genderToggle = document.getElementById('gender-toggle');
const usePreloadToggle = document.getElementById('world-presets');
const customPronouns = document.getElementById('custom-pronouns');
const skinToneSelection = document.getElementById('skin-tone-selection');
const hairColorSelection = document.getElementById('hair-color-selection');
const stats = document.querySelectorAll('#stats input');
const pointsRemaining = document.getElementById('points-remaining');
const sidedToggle = document.getElementById('sided-toggle');
const difficultyToggle = document.getElementById('difficulty-toggle');
const cheats = document.getElementById('cheats');
const previewName = document.getElementById('preview-name');
const previewGender = document.getElementById('preview-gender');
const previewSize = document.getElementById('preview-size');
const previewSkinTone = document.getElementById('preview-skin-tone');
const previewHairColor = document.getElementById('preview-hair-color');
const previewSidedStat = document.getElementById('preview-sided-stat');
const previewDifficulty = document.getElementById('preview-difficulty');
const healthDisplay = document.getElementById('health-display');
const healthBarDisplay = document.getElementById('health');
const hungerDisplay = document.getElementById('hunger-display');
const hungerBarDisplay = document.getElementById('hunger');
const mapDisplay = document.getElementById('map-display');
const previewStrength = document.getElementById('preview-strength');
const previewDexterity = document.getElementById('preview-dexterity');
const previewIntelligence = document.getElementById('preview-intelligence');
const previewCharisma = document.getElementById('preview-charisma');
const previewWisdom = document.getElementById('preview-wisdom');

const overlay = document.getElementById('overlay');
const overlayContent = document.getElementById('overlay-content');
const closeOverlay = document.getElementById('close-overlay');

const customization = document.getElementById('customization-options');
const adventure = document.getElementById('adventure');

let tileLocation = document.getElementById('tile-location');
let tileInteraction = document.getElementById('tile-interaction');
let tileEncounter = document.getElementById('tile-encounter');

let story1 = document.getElementById('story-1');
let story2 = document.getElementById('story-2');
let story3 = document.getElementById('story-3');

let actionButtonBar = document.getElementById('button-bar');
let actionButton1Div = document.getElementById('action-1');
let actionButton2Div = document.getElementById('action-2');
let actionButton3Div = document.getElementById('action-3');
let actionButton4Div = document.getElementById('action-4');
let actionButton5Div = document.getElementById('action-5');
let actionButtonNoneDiv = document.getElementById('action-none');

let inventoryDisplay = document.getElementById('inventory-display');
let inventorySlot1Div = document.getElementById('inventory-slot-1');
let inventorySlot2Div = document.getElementById('inventory-slot-2');
let inventorySlot3Div = document.getElementById('inventory-slot-3');
let inventorySlot4Div = document.getElementById('inventory-slot-4');
let inventorySlot5Div = document.getElementById('inventory-slot-5');

const characterPreview = document.getElementById('character-preview');
let npcContainer1 = document.getElementById("npc-container-1");
let npcContainer2 = document.getElementById("npc-container-2");
let npcContainer3 = document.getElementById("npc-container-3");
let npcContainer4 = document.getElementById("npc-container-4");
let npcContainer5 = document.getElementById("npc-container-5");

let saveButton = document.getElementById("save-game");
let loadButton = document.getElementById("load-game");

class Player {
    constructor() {
        this.name = "";
        this.hairColor = "";
        this.skinTone = "";
        this.sidedStat = "";
        this.pronoun1 = "";
        this.pronoun2 = "";
        this.pronoun3 = "";
        this.strength = 5;
        this.dexterity = 5;
        this.intelligence = 5;
        this.charisma = 5;
        this.wisdom = 5;
        this.health = 50;
        this.maxHealth = 50;
        this.hunger = 25;
        this.maxHunger = 50;
        this.mana = 25;
        this.maxMana = 50;
        this.sizeDefault = 3;
        this.size = this.sizeDefault;
        this.sizeDisplay = determineSize(this.size);
        this.positionX = gameInfo.gridSize/2;
        this.positionY = gameInfo.gridSize/2;
        this.lastPositionX = this.positionX;
        this.lastPositionY = this.positionY;
    }
}

class GameInfo {
    constructor() {
        this.gridSize = 200;
        this.version = "1.0";
        this.usePreloaded = true;
        this.preloadedTilesets = [];
        this.gameStarted = false;
        this.cheat1 = false;
        this.cheat2 = false;
        this.cheat3 = false;
        this.cheat4 = false;
        this.cheat5 = false;
        this.difficulty = "";
        this.npcList = [];
        this.item1 = null;
        this.item2 = null;
        this.item3 = null;
        this.item4 = null;
        this.item5 = null;
        this.pointsAvailable = 10;
        this.pronounDecision = "";
        this.selectedItem = "";
        this.actionButton1 = "";
        this.actionButton2 = "";
        this.actionButton3 = "";
        this.actionButton4 = "";
        this.actionButton5 = "";
        this.tileLocation = tileLocation.innerHTML;
        this.tileInteraction = tileInteraction.innerHTML;
        this.tileEncounter = tileEncounter.innerHTML;
        this.story1 = story1.innerHTML;
        this.story2 = story2.innerHTML;
        this.story3 = story3.innerHTML;
    }
}

// Variables to store customization options
let gameInfo = new GameInfo();
let player = new Player();


function updatePreview(key, value) {
    if (key === 'Name') {
        previewName.textContent = `${value}`;
    } else if (key === 'Gender') {
        previewGender.textContent = `${value}`;
    // } else if (key === 'Skin Tone') {
    //     previewSkinTone.textContent = `Skin Tone: ${value}`;
    // } else if (key === 'Hair Color') {
    //     previewHairColor.textContent = `Hair Color: ${value}`;
    // } else if (key === 'Sided Stat') {
    //     previewSidedStat.textContent = `Sided Stat: ${value}`;
    // } else if (key === 'Difficulty') {
    //     previewDifficulty.textContent = `Difficulty: ${value}`;
    }
}

genderToggle.addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
        Array.from(genderToggle.children).forEach(button => button.classList.remove('selected'));
        event.target.classList.add('selected');

        if (event.target === document.getElementById('custom-gender')) {
            customPronouns.style.display = 'flex';
            updatePreview('Gender', `${document.getElementById('pronoun1').value || "she"}/${document.getElementById('pronoun2').value || "her"}`);
        } else {
            customPronouns.style.display = 'none';
            updatePreview('Gender', event.target.getAttribute('data-value'));
        }
        gameInfo.pronounDecision = event.target.getAttribute('data-value');
    }
});

usePreloadToggle.addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
        if (event.target.classList.contains("selected")) {
            event.target.classList.remove("selected");
        } else {
            event.target.classList.add('selected');
        }
        if (gameInfo.usePreloaded) {
            gameInfo.usePreloaded = false;
        } else {
            gameInfo.usePreloaded = true;
        }
    }
});

document.querySelectorAll('#custom-pronouns input').forEach(input => {
    input.addEventListener('input', function () {
        updatePreview('Gender', `${document.getElementById('pronoun1').value || "she"}/${document.getElementById('pronoun2').value || "her"}`);
    });
});

document.querySelectorAll('#character-name-div input').forEach(input => {
    input.addEventListener('input', function () {
        updatePreview('Name', `${(document.getElementById('character-name').value || "Player")}`);
    });
});

skinToneSelection.addEventListener('click', function (event) {
    if (event.target.classList.contains('color-box')) {
        Array.from(skinToneSelection.children).forEach(box => box.classList.remove('selected'));
        event.target.classList.add('selected');
        updatePreview('Skin Tone', event.target.getAttribute('data-value'));
    }
});

hairColorSelection.addEventListener('click', function (event) {
    if (event.target.classList.contains('color-box')) {
        Array.from(hairColorSelection.children).forEach(box => box.classList.remove('selected'));
        event.target.classList.add('selected');
        updatePreview('Hair Color', event.target.getAttribute('data-value'));
    }
});

actionButtonBar.addEventListener('click', function (event) {
    if (event.target.classList.contains('action-button')) {
        runActionButton(event.target.getAttribute("id"));
    }
});

mapDisplay.addEventListener('click', function (event) {
    if (event.target.classList.contains('map-click')) {
        movePlayer(event.target.getAttribute('id'));
    }
});

mapDisplay.addEventListener('click', function (event) {
    if (event.target.classList.contains('tooltiptext')) {
        movePlayer(event.target.parentNode.getAttribute('id'));
    }
});

characterPreview.addEventListener('click', function (event) {
    if (gameInfo.selectedItem !== "") {
        useItem(gameInfo.selectedItem);
    } 
});

npcContainer1.addEventListener('click', function (event) {
    if (gameInfo.selectedItem !== "") {
        useItemOnNPC(gameInfo.selectedItem, 1);
    } 
});

npcContainer2.addEventListener('click', function (event) {
    if (gameInfo.selectedItem !== "") {
        useItemOnNPC(gameInfo.selectedItem, 2);
    } 
});

npcContainer3.addEventListener('click', function (event) {
    if (gameInfo.selectedItem !== "") {
        useItemOnNPC(gameInfo.selectedItem, 3);
    } 
});

npcContainer4.addEventListener('click', function (event) {
    if (gameInfo.selectedItem !== "") {
        useItemOnNPC(gameInfo.selectedItem, 4);
    } 
});

npcContainer5.addEventListener('click', function (event) {
    if (gameInfo.selectedItem !== "") {
        useItemOnNPC(gameInfo.selectedItem, 5);
    } 
});

saveButton.addEventListener('click', function (event) {
    saveGame();
});

loadButton.addEventListener('click', function (event) {
    loadGame();
});

document.querySelectorAll('#stats .stat-btn').forEach(button => {
    button.addEventListener('click', function () {
        const action = button.getAttribute('data-action');
        const statName = button.getAttribute('data-stat');
        const statInput = document.getElementById(statName);
        const statInputDisplay = document.getElementById(statName + "-display");
        const statPreview = document.getElementById("preview-" + statName);
        let value = parseInt(statInput.value, 10);

        if (action === 'increase' && gameInfo.pointsAvailable > 0 && value < 20) {
            value++;
            gameInfo.pointsAvailable--;
        } else if (action === 'decrease' && value > 5) {
            value--;
            gameInfo.pointsAvailable++;
        }

        statInput.value = value;
        statInputDisplay.innerHTML = value;
        statPreview.innerHTML = value;
        pointsRemaining.textContent = `Stats (${gameInfo.pointsAvailable} points available) `;
    });
});

sidedToggle.addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
        Array.from(sidedToggle.children).forEach(button => button.classList.remove('selected'));
        event.target.classList.add('selected');
        updatePreview('Sided Stat', event.target.getAttribute('data-value'));
        player.sidedStat = event.target.getAttribute('data-value');
    }
});

difficultyToggle.addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
        Array.from(difficultyToggle.children).forEach(button => button.classList.remove('selected'));
        event.target.classList.add('selected');
        updatePreview('Difficulty', event.target.getAttribute('data-value'));
        gameInfo.difficulty = event.target.getAttribute('data-value');
    }
});

cheats.addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
        event.target.classList.toggle('selected');
        if (event.target.getAttribute('data-cheat') === 'cheat1') {
            if (gameInfo.cheat1 == false) {
                gameInfo.cheat1 = true; 
            } else {
                gameInfo.cheat1 = false;
            }
        }
        if (event.target.getAttribute('data-cheat') === 'cheat2') {
            if (gameInfo.cheat2 == false) {
                gameInfo.cheat2 = true; 
            } else {
                gameInfo.cheat2 = false;
            }
        }
        if (event.target.getAttribute('data-cheat') === 'cheat3') {
            if (gameInfo.cheat3 == false) {
                gameInfo.cheat3 = true; 
            } else {
                gameInfo.cheat3 = false;
            }
        }
        if (event.target.getAttribute('data-cheat') === 'cheat4') {
            if (gameInfo.cheat4 == false) {
                gameInfo.cheat4 = true; 
            } else {
                gameInfo.cheat4 = false;
            }
        }
        if (event.target.getAttribute('data-cheat') === 'cheat5') {
            if (gameInfo.cheat5 == false) {
                gameInfo.cheat5 = true; 
            } else {
                gameInfo.cheat5 = false;
            }
        }
    }
});

document.getElementById('start-game').addEventListener('click', function () {
    //startGame() since you always try to search for that function you dingus
    player.name = document.getElementById('character-name').value || "Player";
    player.dexterity = document.getElementById('dexterity').value;
    player.strength = document.getElementById('strength').value;
    player.wisdom = document.getElementById('wisdom').value;
    player.intelligence = document.getElementById('intelligence').value;
    player.charisma = document.getElementById('charisma').value;
    if (gameInfo.pronounDecision === 'she/her') {
        player.pronoun1 = "she";
        player.pronoun2 = "her";
        player.pronoun3 = "hers";
    } else if (gameInfo.pronounDecision === 'he/him') {
        player.pronoun1 = "he";
        player.pronoun2 = "him";
        player.pronoun3 = "his";
    } else if (gameInfo.pronounDecision === 'they/them') {
        player.pronoun1 = "they";
        player.pronoun2 = "them";
        player.pronoun3 = "their";
    } else {
        player.pronoun1 = document.getElementById('pronoun1').value;
        player.pronoun2 = document.getElementById('pronoun2').value;
        player.pronoun3 = document.getElementById('pronoun3').value;
    }

    customization.style.display = "none";
    loading.style.display = "flex";

    if (gameInfo.usePreloaded) {
        $.getScript("preloaded/preload1.js", function() {
            $(document).ready(function() {
                gameInfo.preloadedTilesets.push(preload);
            })
        })
        $.getScript("preloaded/preload2.js", function() {
            $(document).ready(function() {
                gameInfo.preloadedTilesets.push(preload);
            })
        })
        $.getScript("preloaded/preload3.js", function() {
            $(document).ready(function() {
                gameInfo.preloadedTilesets.push(preload);
            })
        })
        $.getScript("preloaded/preload4.js", function() {
            $(document).ready(function() {
                gameInfo.preloadedTilesets.push(preload);
            })
        })
        $.getScript("preloaded/preload5.js", function() {
            $(document).ready(function() {
                gameInfo.preloadedTilesets.push(preload);
            })
        })
        $.getScript("preloaded/preload6.js", function() {
            $(document).ready(function() {
                gameInfo.preloadedTilesets.push(preload);
            })
        })
        gameInfo.preloadedTilesets.push(preload1);
        tileset = gameInfo.preloadedTilesets[Math.floor(Math.random() * gameInfo.preloadedTilesets.length)];
    } else {
    
        setTimeout(1000);
        setTimeout(() => gridSet = generateBiomes(emptyGrid), 0);
    }

    gameInfo.gameStarted = true;
    setTimeout(() => movePlayer("33"), 0 );
    setTimeout(() => loading.style.display = "none");
    setTimeout(() => adventure.style.display = "flex");
    setTimeout(() => saveButton.style.visibility = "visible");
});

function showOverlay(type) {
    const overlayHeaderHTP = document.getElementById('overlay-header-htp');
    const overlayHeaderSettings = document.getElementById('overlay-header-settings');
    const overlayHeaderCredits = document.getElementById('overlay-header-credits');
    const overlayHeaderVersion = document.getElementById('overlay-header-version');
    const overlayTextHTP = document.getElementById('overlay-text-htp');
    const overlayTextSettings = document.getElementById('overlay-text-settings');
    const overlayTextCredits = document.getElementById('overlay-text-credits');
    const overlayTextVersion = document.getElementById('overlay-text-version');

    overlay.style.display = 'flex';

    if (type === "htp") {
        overlayTextHTP.style.display = "inherit";
        overlayTextSettings.style.display = "none";
        overlayTextCredits.style.display = "none";
        overlayTextVersion.style.display = "none";
        overlayHeaderHTP.style.display = "inherit";
        overlayHeaderSettings.style.display = "none";
        overlayHeaderCredits.style.display = "none";
        overlayHeaderVersion.style.display = "none";
    } else if (type === "settings") {
        overlayTextHTP.style.display = "none";
        overlayTextSettings.style.display = "inherit";
        overlayTextCredits.style.display = "none";
        overlayTextVersion.style.display = "none";
        overlayHeaderHTP.style.display = "none";
        overlayHeaderSettings.style.display = "inherit";
        overlayHeaderCredits.style.display = "none";
        overlayHeaderVersion.style.display = "none";
    } else if (type === "version" ) {
        overlayTextHTP.style.display = "none";
        overlayTextSettings.style.display = "none";
        overlayTextCredits.style.display = "none";
        overlayTextVersion.style.display = "inherit";
        overlayHeaderHTP.style.display = "none";
        overlayHeaderSettings.style.display = "none";
        overlayHeaderCredits.style.display = "none";
        overlayHeaderVersion.style.display = "inherit";
    } else {
        overlayTextHTP.style.display = "none";
        overlayTextSettings.style.display = "none";
        overlayTextCredits.style.display = "inherit";
        overlayTextVersion.style.display = "none";
        overlayHeaderHTP.style.display = "none";
        overlayHeaderSettings.style.display = "none";
        overlayHeaderCredits.style.display = "inherit";
        overlayHeaderVersion.style.display = "none";
    }
}

function setHealth (value) {
    player.health = value;
    if (player.health > player.maxHealth) {
        player.health = player.maxHealth;
    }
    if (player.health < 0) {
        player.health = 0;
    }

    healthDisplay.innerHTML = player.health + "/" + player.maxHealth;
    healthBarDisplay.style.width = ( player.health / player.maxHealth * 100 ) + "%";
}

function setNPCHealth (npc, value, npcNum) {
    npc.health = value;
    if (npc.health > npc.maxHealth) {
        npc.health = npc.maxHealth;
    }
    if (npc.health < 0) {
        npc.health = 0;
    }
    
    let npcHealth = document.getElementById("npc-health-display-" + npcNum);
    let npcHealthBar = document.getElementById("npc-health-" + npcNum);

    npcHealth.innerHTML = npc.health + "/" + npc.maxHealth;
    npcHealthBar.style.width = ( npc.health / npc.maxHealth * 100 ) + "%";
}

function setHunger (value) {
    player.hunger = value;
    if (player.hunger > player.maxHunger) {
        player.hunger = player.maxHunger;
    }
    if (player.hunger < 0) {
        player.hunger = 0;
    }

    hungerDisplay.innerHTML = player.hunger + "/" + player.maxHunger;
    hungerBarDisplay.style.width = ( player.hunger / player.maxHunger * 100 ) + "%";
}

// Event listener for close button
closeOverlay.addEventListener('click', function () {
    overlay.style.display = 'none';
});

// Event listeners for menu buttons
document.getElementById('htp').addEventListener('click', function () {
    showOverlay('htp');
});

document.getElementById('settings').addEventListener('click', function () {
    showOverlay('settings');
});

document.getElementById('credits').addEventListener('click', function () {
    showOverlay('credits');
});

document.getElementById('version').addEventListener('click', function () {
    showOverlay('version');
});

// Initialize default values
document.querySelector('#gender-toggle .selected').click();
document.querySelector('#skin-tone-selection .color-box.selected').click();
document.querySelector('#hair-color-selection .color-box.selected').click();
document.querySelector('#sided-toggle .selected').click();
document.querySelector('#difficulty-toggle .selected').click();
setHealth(player.health);
setHunger(player.hunger);

function movePlayer (mapTile, isReload) {
    if (!gameInfo.gameStarted) {
        return;
    }

    //TODO: Re-enable
    // if (getTileByCoordinates(player.positionX, player.positionY).enemyList.length > 0) {
    //     setAdventureText("You cannot escape! Logic here eventually to see flee chance.", true);
    //     return;
    // }

    if (!isReload) clearAdventureText();

    player.lastPositionX = player.positionX;
    player.lastPositionY = player.positionY;
    
    switch (mapTile) {
        case "22":
            player.positionX += -1;
            player.positionY += -1;
            break;
        case "23":
            player.positionX += -1;
            player.positionY += 0;
            break;
        case "24":
            player.positionX += -1;
            player.positionY += 1;
            break;
        case "32":
            player.positionX += 0;
            player.positionY += -1;
            break;
        case "34":
            player.positionX += 0;
            player.positionY += 1;
            break;
        case "42":
            player.positionX += 1;
            player.positionY += -1;
            break;
        case "43":
            player.positionX += 1;
            player.positionY += 0;
            break;
        case "44":
            player.positionX += 1;
            player.positionY += 1;
            break;
        default:
            player.positionX = player.positionX;
            player.positionY = player.positionY;
    }
    if (!getTileByCoordinates(player.positionX, player.positionY).isNavigable) {
        setAdventureText("You can't get past the " + getTileByCoordinates(player.positionX, player.positionY).name + ".", true);
        player.positionX = player.lastPositionX;
        player.positionY = player.lastPositionY;
    }

    if (player.size !== player.sizeDefault) {
        player.size = player.sizeDefault;
        player.sizeDisplay = determineSize(player.size);
        previewSize.innerHTML = player.sizeDisplay;
        setAdventureText("You return to your normal size.", true);
    }

    loadOrGenerateTileset(player.positionX - 2, player.positionY - 2, "11");
    loadOrGenerateTileset(player.positionX - 2, player.positionY - 1, "12");
    loadOrGenerateTileset(player.positionX - 2, player.positionY, "13");
    loadOrGenerateTileset(player.positionX - 2, player.positionY + 1, "14");
    loadOrGenerateTileset(player.positionX - 2, player.positionY + 2, "15");

    loadOrGenerateTileset(player.positionX - 1, player.positionY - 2, "21");
    loadOrGenerateTileset(player.positionX - 1, player.positionY - 1, "22");
    loadOrGenerateTileset(player.positionX - 1, player.positionY, "23");
    loadOrGenerateTileset(player.positionX - 1, player.positionY + 1, "24");
    loadOrGenerateTileset(player.positionX - 1, player.positionY + 2, "25");
    
    loadOrGenerateTileset(player.positionX, player.positionY - 2, "31");
    loadOrGenerateTileset(player.positionX, player.positionY - 1, "32");
    loadOrGenerateTileset(player.positionX, player.positionY, "33");
    loadOrGenerateTileset(player.positionX, player.positionY + 1, "34");
    loadOrGenerateTileset(player.positionX, player.positionY + 2, "35");
    
    loadOrGenerateTileset(player.positionX + 1, player.positionY - 2, "41");
    loadOrGenerateTileset(player.positionX + 1, player.positionY - 1, "42");
    loadOrGenerateTileset(player.positionX + 1, player.positionY, "43");
    loadOrGenerateTileset(player.positionX + 1, player.positionY + 1, "44");
    loadOrGenerateTileset(player.positionX + 1, player.positionY + 2, "45");
    
    loadOrGenerateTileset(player.positionX + 2, player.positionY - 2, "51");
    loadOrGenerateTileset(player.positionX + 2, player.positionY - 1, "52");
    loadOrGenerateTileset(player.positionX + 2, player.positionY, "53");
    loadOrGenerateTileset(player.positionX + 2, player.positionY + 1, "54");
    loadOrGenerateTileset(player.positionX + 2, player.positionY + 2, "55");
    initiateTileset();

}

function loadOrGenerateTileset(x,y,mapItem) {
    var mapTile = document.getElementById(mapItem);
    if (x >= gameInfo.gridSize || x < 0 || y >= gameInfo.gridSize || y < 0) {
        mapTile.style.backgroundColor = "#00796b";
    } else {
        var tile = getTileByCoordinates(x,y);
        mapTile.style.backgroundColor = tile.color;
        let nonNavigableText = "";
        if (!tile.isNavigable) {
            nonNavigableText = " (Non Navigable)"
        }
        mapTile.innerHTML = `<span class="tooltiptext">` + tile.name + nonNavigableText + `</span>`
        if (tile.isGlitch) {
            mapTile.classList.add("glitchTile");
        } else {
            mapTile.classList.remove("glitchTile");
        }
    }
}

function setAdventureText(text, addToFirst) {
    if (addToFirst) {
        story1.innerHTML = `<p>` + text + `</p>` + story1.innerHTML;
        story1.style.display = "inherit";
    } else {
        story3.innerHTML = story2.innerHTML;
        if (story3.innerHTML !== "") {
            story3.style.display = "inherit";
        }
        story2.innerHTML = story1.innerHTML;
        if (story2.innerHTML !== "") {
            story2.style.display = "inherit";
        }
        story1.innerHTML = `<p>` + text + `</p>`;
    }
}

function clearAdventureText() {
    story1.innerHTML = "";
    story1.style.display = "none";
    story2.innerHTML = "";
    story2.style.display = "none";
    story3.innerHTML = "";
    story3.style.display = "none";

    actionButton1Div.style.display = "none";
    actionButton2Div.style.display = "none";
    actionButton3Div.style.display = "none";
    actionButton4Div.style.display = "none";
    actionButton5Div.style.display = "none";
    actionButtonNoneDiv.style.display = "inherit";
}

function selectItem(slot) {
    cancelItem();
    if (slot == 1 && gameInfo.item1) {
        gameInfo.selectedItem = 1;
        inventorySlot1Div.classList.add("cancel");
        inventorySlot1Div.innerHTML = `<img src="` + gameInfo.item1.texture + `"/>` + 
            `<span id="item-window-1" class="item-window">` + gameInfo.item1.name + `<p class="item-description">` + gameInfo.item1.description + `</p>` + `<button class="inventory-button" id="inventory-slot-1-use" onclick="cancelItem(1);">Cancel</button></span>`
    } else if (slot == 2 && gameInfo.item2) {
        gameInfo.selectedItem = 2;
        inventorySlot2Div.classList.add("cancel");
        inventorySlot2Div.innerHTML = `<img src="` + gameInfo.item2.texture + `"/>` + 
            `<span id="item-window-2" class="item-window">` + gameInfo.item2.name + `<p class="item-description">` + gameInfo.item2.description + `</p>` + `<button class="inventory-button" id="inventory-slot-2-use" onclick="cancelItem(2);">Cancel</button></span>`
    } else if (slot == 3 && gameInfo.item3) {
        gameInfo.selectedItem = 3;
        inventorySlot3Div.classList.add("cancel");
        inventorySlot3Div.innerHTML = `<img src="` + gameInfo.item3.texture + `"/>` + 
            `<span id="item-window-3" class="item-window">` + gameInfo.item3.name + `<p class="item-description">` + gameInfo.item3.description + `</p>` + `<button class="inventory-button" id="inventory-slot-3-use" onclick="cancelItem(3);">Cancel</button></span>`
    } else if (slot == 4 && gameInfo.item4) {
        gameInfo.selectedItem = 4;
        inventorySlot4Div.classList.add("cancel");
        inventorySlot4Div.innerHTML = `<img src="` + gameInfo.item4.texture + `"/>` + 
            `<span id="item-window-4" class="item-window">` + gameInfo.item4.name + `<p class="item-description">` + gameInfo.item4.description + `</p>` + `<button class="inventory-button" id="inventory-slot-4-use" onclick="cancelItem(4);">Cancel</button></span>`
    } else if (slot == 5 && gameInfo.item5) {
        gameInfo.selectedItem = 5;
        inventorySlot5Div.classList.add("cancel");
        inventorySlot5Div.innerHTML = `<img src="` + gameInfo.item5.texture + `"/>` + 
            `<span id="item-window-5" class="item-window">` + gameInfo.item5.name + `<p class="item-description">` + gameInfo.item5.description + `</p>` + `<button class="inventory-button" id="inventory-slot-5-use" onclick="cancelItem(5);">Cancel</button></span>`
    }
    if (gameInfo.selectedItem === "") return;

    characterPreview.classList.add("card-selectable");
    npcContainer1.classList.add("card-selectable");
    npcContainer2.classList.add("card-selectable");
    npcContainer3.classList.add("card-selectable");
    npcContainer4.classList.add("card-selectable");
    npcContainer5.classList.add("card-selectable");
}

function cancelItem() {
    characterPreview.classList.remove("card-selectable");
    npcContainer1.classList.remove("card-selectable");
    npcContainer2.classList.remove("card-selectable");
    npcContainer3.classList.remove("card-selectable");
    npcContainer4.classList.remove("card-selectable");
    npcContainer5.classList.remove("card-selectable");
    if (gameInfo.item1) {
        inventorySlot1Div.classList.remove("cancel");
        inventorySlot1Div.innerHTML = `<img src="` + gameInfo.item1.texture + `"/>` + 
            `<span id="item-window-1" class="item-window">` + gameInfo.item1.name + `<p class="item-description">` + gameInfo.item1.description + `</p>` + `<button class="inventory-button" id="inventory-slot-1-use" onclick="selectItem(1);">Use Item</button><button class="inventory-button" id="inventory-slot-1-discard" onclick="discardItem(1, true);">Discard Item</button></span>`
    }
    if (gameInfo.item2) {
        inventorySlot2Div.classList.remove("cancel");
        inventorySlot2Div.innerHTML = `<img src="` + gameInfo.item2.texture + `"/>` + 
            `<span id="item-window-2" class="item-window">` + gameInfo.item2.name + `<p class="item-description">` + gameInfo.item2.description + `</p>` + `<button class="inventory-button" id="inventory-slot-2-use" onclick="selectItem(2);">Use Item</button><button class="inventory-button" id="inventory-slot-2-discard" onclick="discardItem(2, true);">Discard Item</button></span>`
    }
    if (gameInfo.item3) {
        inventorySlot3Div.classList.remove("cancel");
        inventorySlot3Div.innerHTML = `<img src="` + gameInfo.item3.texture + `"/>` + 
            `<span id="item-window-3" class="item-window">` + gameInfo.item3.name + `<p class="item-description">` + gameInfo.item3.description + `</p>` + `<button class="inventory-button" id="inventory-slot-3-use" onclick="selectItem(3);">Use Item</button><button class="inventory-button" id="inventory-slot-3-discard" onclick="discardItem(3, true);">Discard Item</button></span>`
    }
    if (gameInfo.item4) {
        inventorySlot4Div.classList.remove("cancel");
        inventorySlot4Div.innerHTML = `<img src="` + gameInfo.item4.texture + `"/>` + 
            `<span id="item-window-4" class="item-window">` + gameInfo.item4.name + `<p class="item-description">` + gameInfo.item4.description + `</p>` + `<button class="inventory-button" id="inventory-slot-4-use" onclick="selectItem(4);">Use Item</button><button class="inventory-button" id="inventory-slot-4-discard" onclick="discardItem(4, true);">Discard Item</button></span>`
    }
    if (gameInfo.item5) {
        inventorySlot5Div.classList.remove("cancel");
        inventorySlot5Div.innerHTML = `<img src="` + gameInfo.item5.texture + `"/>` + 
            `<span id="item-window-5" class="item-window">` + gameInfo.item5.name + `<p class="item-description">` + gameInfo.item5.description + `</p>` + `<button class="inventory-button" id="inventory-slot-5-use" onclick="selectItem(5);">Use Item</button><button class="inventory-button" id="inventory-slot-5-discard" onclick="discardItem(5, true);">Discard Item</button></span>`
    }
    gameInfo.selectedItem = "";
}

function useItem(slot) {
    cancelItem();

    let effect = "";
    let effectType = "";
    let effectChange = "";
    if (slot === 1 && gameInfo.item1) {
        effect = gameInfo.item1.statEffect;
        effectType = gameInfo.item1.statSetType;
        effectChange = gameInfo.item1.statChange;
    } else if (slot === 2 && gameInfo.item2) {
        effect = gameInfo.item2.statEffect;
        effectType = gameInfo.item2.statSetType;
        effectChange = gameInfo.item2.statChange;
    } else if (slot === 3 && gameInfo.item3) {
        effect = gameInfo.item3.statEffect;
        effectType = gameInfo.item3.statSetType;
        effectChange = gameInfo.item3.statChange;
    } else if (slot === 4 && gameInfo.item4) {
        effect = gameInfo.item4.statEffect;
        effectType = gameInfo.item4.statSetType;
        effectChange = gameInfo.item4.statChange;
    } else if (slot === 5 && gameInfo.item5) {
        effect = gameInfo.item5.statEffect;
        effectType = gameInfo.item5.statSetType;
        effectChange = gameInfo.item5.statChange;
    }
    if (effect === "") return;

    let statName = "";
    let statInput = "";
    let statInputDisplay = "";
    let statPreview = "";
    switch (effect) {
        case "health":
            if (player.health == player.maxHealth) {
                setAdventureText("You are already at max health.", true)
                return;
            }
            setHealth(player.health + effectChange);
            setAdventureText("Your health increases.", true)
            break;
        case "hunger":
            if (effectChange > 0) {
                if (player.hunger == player.maxHunger) {
                    setAdventureText("You have nothing in your stomach.", true)
                    return;
                }
                setAdventureText("The contents of your stomach empties.", true)
                setHunger(player.hunger + effectChange);
            } else {
                if (player.hunger == 0) {
                    setAdventureText("Your stomach is already full.", true)
                    return;
                }
                setAdventureText("Your stomach is filled.", true)
                setHunger(player.hunger + effectChange);
            }
            break;
        case "mana":
            if (player.mana == player.maxMana) {
                setAdventureText("You are already at max mana.", true)
                return;
            }
            player.mana += effectChange;
            if (player.mana > player.maxMana) {
                player.mana = player.maxMana;
            }
            setAdventureText("Your mana increases.", true)
            break;
        case "size":
            if (effectChange < 0 && player.size <= 1) {
                setAdventureText("You are already too small to use this.", true)
                return;
            }
            if (effectChange > 0 && player.size == 5) {
                setAdventureText("You are already too big to use this.", true)
                return;
            }
            player.size += effectChange;
            if (player.size <= 0 || player.size == 1) {
                player.size = 1;
            }
            if (player.size == 2) {
            }
            if (player.size == 3) {
            }
            if (player.size == 4) {
            }
            if (player.size == 5 || player.size > 5) {
                player.size = 5;
            }
            player.sizeDisplay = determineSize(player.size);
            previewSize.innerHTML = player.sizeDisplay;
            if (effectChange < 0) {
                setAdventureText("You use the item, and shrink much smaller than you were.", true)
            } else {
                setAdventureText("You use the item, and grow much larger than you were.", true)
            }
            break;
        case "skill1":
            player.strength = parseInt(player.strength) + 1;
            statName = "strength";
            statInput = document.getElementById(statName);
            statInputDisplay = document.getElementById(statName + "-display");
            statPreview = document.getElementById("preview-" + statName);
            statInput.value = player.strength;
            statInputDisplay.innerHTML = player.strength;
            statPreview.innerHTML = player.strength;
            setAdventureText("Your strength skill increases.", true)
            break;
        case "skill2":
            player.dexterity = parseInt(player.dexterity) + 1;
            statName = "dexterity";
            statInput = document.getElementById(statName);
            statInputDisplay = document.getElementById(statName + "-display");
            statPreview = document.getElementById("preview-" + statName);
            statInput.value = player.dexterity;
            statInputDisplay.innerHTML = player.dexterity;
            statPreview.innerHTML = player.dexterity;
            setAdventureText("Your dexterity skill increases.", true)
            break;
        case "skill3":
            player.intelligence = parseInt(player.intelligence) + 1;
            statName = "intelligence";
            statInput = document.getElementById(statName);
            statInputDisplay = document.getElementById(statName + "-display");
            statPreview = document.getElementById("preview-" + statName);
            statInput.value = player.intelligence;
            statInputDisplay.innerHTML = player.intelligence;
            statPreview.innerHTML = player.intelligence;
            setAdventureText("Your intelligence skill increases.", true)
            break;
        case "skill4":
            player.charisma = parseInt(player.charisma) + 1;
            statName = "charisma";
            statInput = document.getElementById(statName);
            statInputDisplay = document.getElementById(statName + "-display");
            statPreview = document.getElementById("preview-" + statName);
            statInput.value = player.charisma;
            statInputDisplay.innerHTML = player.charisma;
            statPreview.innerHTML = player.charisma;
            setAdventureText("Your charisma skill increases.", true)
            break;
        case "skill5":
            player.wisdom = parseInt(player.wisdom) + 1;
            statName = "wisdom";
            statInput = document.getElementById(statName);
            statInputDisplay = document.getElementById(statName + "-display");
            statPreview = document.getElementById("preview-" + statName);
            statInput.value = player.wisdom;
            statInputDisplay.innerHTML = player.wisdom;
            statPreview.innerHTML = player.wisdom;
            setAdventureText("Your wisdom skill increases.", true)
            break;
    }

    discardItem(slot);
}

function useItemOnNPC(slot, npcNum) {
    cancelItem();

    let item = "";
    if (slot === 1 && gameInfo.item1) {
        item = gameInfo.item1;
    }
    if (slot === 2 && gameInfo.item2) {
        item = gameInfo.item2;
    }
    if (slot === 3 && gameInfo.item3) {
        item = gameInfo.item3;
    }
    if (slot === 4 && gameInfo.item4) {
        item = gameInfo.item4;
    }
    if (slot === 5 && gameInfo.item5) {
        item = gameInfo.item5;
    }
    if (item === "") return;

    let npc = gameInfo.npcList[npcNum - 1];
    if (npc === null) return;

    let effect = item.statEffect;
    let effectType = item.statSetType;
    let effectChange = item.statChange;

    let statName = "";
    let statInput = "";
    let statInputDisplay = "";
    let statPreview = "";
    switch (effect) {
        case "health":
            if (npc.health == npc.maxHealth) {
                setAdventureText("The " + npc.fullName + " is already at full health.", true)
                return;
            }
            setNPCHealth(npc, npc.health + effectChange, npcNum);
            setAdventureText("The " + npc.fullName + "'s health increases.", true)
            break;
        case "hunger":
            if (effectChange > 0) {
                if (npc.hasAppetite) {
                    setAdventureText("The " + npc.fullName + " has nothing in " + npc.pronoun3 + " stomach.", true)
                    return;
                }
                setAdventureText("The contents of the " + npc.fullName + "'s stomach empties.", true)
                npc.hasAppetite = true;
            } else {
                if (!npc.hasAppetite) {
                    setAdventureText("The " + npc.fullName + "'s stomach is already full.", true)
                    return;
                }
                setAdventureText("The " + npc.fullName + "'s stomach is filled.", true)
                npc.hasAppetite = false;
            }
            break;
        case "size":
            if (effectChange < 0 && npc.size == 1) {
                setAdventureText("The " + npc.fullName + " is already too small to use this.", true)
                return;
            }
            if (effectChange > 0 && npc.size == 5) {
                setAdventureText("The " + npc.fullName + " is already too big to use this.", true)
                return;
            }
            npc.size += effectChange;
            if (npc.size <= 0) {
                npc.size = 1;
            }
            if (npc.size > 5) {
                npc.size = 5;
            }
            npc.sizeDisplay = determineSize(npc.size);
            let npcPreview = document.getElementById("npc-size-" + npcNum);
            npcPreview.innerHTML = npc.sizeDisplay;

            if (effectChange < 0) {
                setAdventureText("The " + npc.fullName + " shrinks much smaller than before.", true)
            } else {
                setAdventureText("The " + npc.fullName + " grows much larger than before.", true)
            }
            break;
        default:
            setAdventureText("You cannot use this item on another character.", true)
            return;
    }

    discardItem(slot);
}

function discardItem(slot, notify) {
    let itemName = "";
    if (slot === 1 && gameInfo.item1) {
        itemName = gameInfo.item1.name;
        gameInfo.item1 = null;
        inventorySlot1Div.innerHTML = `<img src="images/inventory/blank.png"/>`
    }
    if (slot === 2 && gameInfo.item2) {
        itemName = gameInfo.item2.name;
        gameInfo.item2 = null;
        inventorySlot2Div.innerHTML = `<img src="images/inventory/blank.png"/>`
    }
    if (slot === 3 && gameInfo.item3) {
        itemName = gameInfo.item3.name;
        gameInfo.item3 = null;
        inventorySlot3Div.innerHTML = `<img src="images/inventory/blank.png"/>`
    }
    if (slot === 4 && gameInfo.item4) {
        itemName = gameInfo.item4.name;
        gameInfo.item4 = null;
        inventorySlot4Div.innerHTML = `<img src="images/inventory/blank.png"/>`
    }
    if (slot === 5 && gameInfo.item5) {
        itemName = gameInfo.item5.name;
        gameInfo.item5 = null;
        inventorySlot5Div.innerHTML = `<img src="images/inventory/blank.png"/>`
    }
    if (notify) {
        setAdventureText("You discarded your " + itemName + ".", true)
    }
}

function tryItemTake(tile) {
    if (tile.item == null) return;
    let item = tile.item;
    tileEncounter.innerHTML = "While searching around, you found one " + item.name + ".";
    if (gameInfo.item1 == null) {
        gameInfo.item1 = item;
        inventorySlot1Div.innerHTML = `<img src="` + item.texture + `"/>` + 
            `<span id="item-window-1" class="item-window">` + item.name + `<p class="item-description">` + item.description + `</p>` + `<button class="inventory-button" id="inventory-slot-1-use" onclick="selectItem(1);">Use Item</button><button class="inventory-button" id="inventory-slot-1-discard" onclick="discardItem(1, true);">Discard Item</button></span>`
        tile.item = null;
    }
    else if (gameInfo.item2 == null) {
        gameInfo.item2 = item;
        inventorySlot2Div.innerHTML = `<img src="` + item.texture + `"/>` + 
            `<span id="item-window-2" class="item-window">` + item.name + `<p class="item-description">` + item.description + `</p>` + `<button class="inventory-button" id="inventory-slot-2-use" onclick="selectItem(2);">Use Item</button><button class="inventory-button" id="inventory-slot-2-discard" onclick="discardItem(2, true);">Discard Item</button></span>`
        tile.item = null;
    }
    else if (gameInfo.item3 == null) {
        gameInfo.item3 = item;
        inventorySlot3Div.innerHTML = `<img src="` + item.texture + `"/>` + 
            `<span id="item-window-3" class="item-window">` + item.name + `<p class="item-description">` + item.description + `</p>` + `<button class="inventory-button" id="inventory-slot-3-use" onclick="selectItem(3);">Use Item</button><button class="inventory-button" id="inventory-slot-3-discard" onclick="discardItem(3, true);">Discard Item</button></span>`
        tile.item = null;
    }
    else if (gameInfo.item4 == null) {
        gameInfo.item4 = item;
        inventorySlot4Div.innerHTML = `<img src="` + item.texture + `"/>` + 
            `<span id="item-window-4" class="item-window">` + item.name + `<p class="item-description">` + item.description + `</p>` + `<button class="inventory-button" id="inventory-slot-4-use" onclick="selectItem(4);">Use Item</button><button class="inventory-button" id="inventory-slot-4-discard" onclick="discardItem(4, true);">Discard Item</button></span>`
        tile.item = null;
    }
    else if (gameInfo.item5 == null) {
        gameInfo.item5 = item;
        inventorySlot5Div.innerHTML = `<img src="` + item.texture + `"/>` + 
            `<span id="item-window-5" class="item-window">` + item.name + `<p class="item-description">` + item.description + `</p>` + `<button class="inventory-button" id="inventory-slot-5-use" onclick="selectItem(5);">Use Item</button><button class="inventory-button" id="inventory-slot-5-discard" onclick="discardItem(5, true);">Discard Item</button></span>`
        tile.item = null;
    } else {
        gameInfo.actionButton5 = "Take Item";
        actionButton5Div.innerHTML = gameInfo.actionButton5;
        actionButton5Div.style.display = "inherit";
        actionButtonNoneDiv.style.display = "none";
        setAdventureText("You don't have enough space to pick up the " + item.name + ".", true);
        return;
    }
    gameInfo.actionButton5 = "";
    actionButton5Div.innerHTML = gameInfo.actionButton5;
    actionButton5Div.style.display = "none";
    actionButtonNoneDiv.style.display = "inherit";
    setAdventureText("You pick up the " + item.name + ".", true);
}

function determineSize(size) {
    switch (size) {
        case 1:
            return "Tiny";
        case 2:
            return "Small";
        case 3:
            return "Medium";
        case 4:
            return "Large";
        case 5:
            return "Huge";
    }
}

function runActionButton(id) {
    let action = "";
    if (actionButton1Div.getAttribute("id") === id) {
        action = gameInfo.actionButton1;
    } else if (actionButton2Div.getAttribute("id") === id) {
        action = gameInfo.actionButton2;
    } else if (actionButton3Div.getAttribute("id") === id) {
        action = gameInfo.actionButton3;
    } else if (actionButton4Div.getAttribute("id") === id) {
        action = gameInfo.actionButton4;
    } else if (actionButton5Div.getAttribute("id") === id) {
        action = gameInfo.actionButton5;
    } 

    if (action === "") {
        return;
    } else if (action === "Take Item") {
        tryItemTake(getTileByCoordinates(player.positionX, player.positionY));
    }
}

function removeEnemy(npc) {
    //TODO: When an enemy is removed, all others shift up
}

function initiateTileset() {
    var tile = getTileByCoordinates(player.positionX, player.positionY);
    tileLocation.innerHTML = tile.name;
    var newTile = false;
    if (tile.explored == false) {
        newTile = true;
        if (tile.encounterType === "none") {
            tile.explored = true;
            getTileByCoordinates(player.positionX, player.positionY).explored = true;
        }
    } else {
        newTile = false;
    }
    if (newTile) {
        tileInteraction.innerHTML = tile.enterText;
    } else {
        tileInteraction.innerHTML = tile.revisitText;
    }
    if (tile.item !== null) {
        tryItemTake(tile);
    } else if (tile.encounterType === "encounter") {
        if (tile.enemyList.length == 0 && !tile.explored) {
            //TODO: Real logic -- constrain to bee for now
            let enemyType = tile.enemyPreferences[Math.floor(Math.random() * tile.enemyPreferences.length)];
            //let enemyType = "Bee";

            tile.enemyList.push(new Enemy(enemyType));
            if (Math.random() < tile.secondEnemyChance) {
                tile.enemyList.push(new Enemy(enemyType));
                let enemyCount = 2;
                while (Math.random() < tile.additionalEnemyChance && enemyCount < 5) {
                    tile.enemyList.push(new Enemy(enemyType));
                    enemyCount++;
                }
            }
        }
        tileEncounter.innerHTML = "Enemy Text goes here.";

        let enemyNumber = 0;
        for (let enemy of tile.enemyList) {
            enemyNumber++;
            gameInfo.npcList.push(enemy);
            let npcContainer = document.getElementById("npc-container-" + enemyNumber);
            let npcSkill1 = document.getElementById("npc-strength-" + enemyNumber);
            let npcSkill2 = document.getElementById("npc-dexterity-" + enemyNumber);
            let npcSkill3 = document.getElementById("npc-intelligence-" + enemyNumber);
            let npcSkill4 = document.getElementById("npc-charisma-" + enemyNumber);
            let npcSkill5 = document.getElementById("npc-wisdom-" + enemyNumber);
            let npcHealth = document.getElementById("npc-health-display-" + enemyNumber);
            let npcHealthBar = document.getElementById("npc-health-" + enemyNumber);
            let npcGender = document.getElementById("npc-gender-" + enemyNumber);
            let npcSize = document.getElementById("npc-size-" + enemyNumber);
            let npcName = document.getElementById("npc-name-" + enemyNumber);
            npcContainer.style.display = "block";
            npcSkill1.innerHTML = enemy.strength;
            npcSkill2.innerHTML = enemy.dexterity;
            npcSkill3.innerHTML = enemy.intelligence;
            npcSkill4.innerHTML = enemy.charisma;
            npcSkill5.innerHTML = enemy.wisdom;
            npcHealth.innerHTML = enemy.health + "/" + enemy.maxHealth;
            npcGender.innerHTML = enemy.pronoun1 + "/" + enemy.pronoun2;
            npcSize.innerHTML = determineSize(enemy.size);
            npcName.innerHTML = enemy.fullName;
            npcHealthBar.style.width = ((enemy.health / enemy.maxHealth) * 100) + "%";
            if (enemy.hostile) {
                npcContainer.classList.add("npc-hostile");
                npcContainer.classList.remove("npc-boss");
                npcContainer.classList.remove("npc-neutral");
                npcContainer.classList.remove("npc-friendly");
                npcContainer.classList.remove("npc-active");
            }

        }
    } else {
        tileEncounter.innerHTML = "There is nothing interesting here.";
    }
}

function saveGame() {
    gameInfo.tileLocation = tileLocation.innerHTML;
    gameInfo.tileInteraction = tileInteraction.innerHTML;
    gameInfo.tileEncounter = tileEncounter.innerHTML;
    gameInfo.story1 = story1.innerHTML;
    gameInfo.story2 = story2.innerHTML;
    gameInfo.story3 = story3.innerHTML;
    let savePlayer = JSON.stringify(player);
    let saveGameInfo = JSON.stringify(gameInfo);
    let saveTileset = JSON.stringify(tileset);
    let saveData = "{\"Player\":" + savePlayer + "," + "\"GameInfo\":" + saveGameInfo + "," + "\"TileSet\":" + saveTileset + "}";
    let saveName = "gamesave.gamesave";
    var bb = new Blob([saveData], { type: 'application/json' });
    var a = document.createElement('a');
    a.download = saveName;
    a.href = window.URL.createObjectURL(bb);
    a.click();
    a.remove();
}

function loadGame() {
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = '.gamesave'
    
    input.onchange = e => { 
    
       // getting a hold of the file reference
       var file = e.target.files[0]; 
    
       // setting up the reader
       var reader = new FileReader();
       reader.readAsText(file,'UTF-8');
    
       // here we tell the reader what to do when it's done reading...
       reader.onload = readerEvent => {
          var content = readerEvent.target.result; // this is the content!
          let contentJSON = JSON.parse(content);
          let playerSave = contentJSON.Player;
          let gameInfoSave = contentJSON.GameInfo;
          let tilesetSave = contentJSON.TileSet;
          player = playerSave;
          gameInfo = gameInfoSave;
          tileset = tilesetSave;
          console.log(player);

          updatePreview('Gender', `${player.pronoun1}/${player.pronoun2}`);
          updatePreview('Name', `${player.name}`);
          previewStrength.innerHTML = player.strength;
          previewDexterity.innerHTML = player.dexterity;
          previewIntelligence.innerHTML = player.intelligence;
          previewCharisma.innerHTML = player.charisma;
          previewWisdom.innerHTML = player.wisdom;
          previewSize.innerHTML = player.sizeDisplay;
          setHealth(player.health);
          setHunger(player.hunger);
          cancelItem();

          customization.style.display = "none";
          setTimeout(() => loading.style.display = "none");
          setTimeout(() => adventure.style.display = "inherit");
          setTimeout(() => saveButton.style.visibility = "visible");
          
          setTimeout(() => movePlayer("33", true), 0 );
          
       }
    
    }
    
    input.click();
}

window.addEventListener("beforeunload", function (e) {
    var confirmationMessage = 'Are you sure you want to leave? '
                            + 'All unsaved changes will be lost.';

    (e || window.event).returnValue = confirmationMessage; //Gecko + IE
    return confirmationMessage; //Gecko + Webkit, Safari, Chrome etc.
});

const enemyConfigs = {
    "Bee": {
        name: "Bee",
        prefixes: ["Buzzy", "Busy", "Heavy", "Thick"],
        pronouns: [["she","her","hers"],["he","him","his"],["they","them","their"]],
        healthMin: 10,
        healthMax: 20,
        size: 1,
        resistance: 2,
        hostile: true,
        willingChance: .15,
        expMin: 1,
        expMax: 5,
        digestionTurnsMin: 0,
        digestionTurnsMax: 0,
        stuffTurnsMin: 2,
        stuffTurnsMax: 2,
        fill: 2,
        strengthMin: 1,
        strengthMax: 5,
        dexterityMin: 1,
        dexterityMax: 5,
        intelligenceMin: 1,
        intelligenceMax: 5,
        charismaMin: 1,
        charismaMax: 5,
        wisdomMin: 1,
        wisdomMax: 5,
        encounterDialogue: [
            [""],
            [""],
            [""],
        ],
        attackDialogue: [
            [""],
            [""],
            [""],
        ],
        getPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        hasPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        angryDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralDialogue: [
            [""],
            [""],
            [""],
        ],
        willingDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingDialogue: [
            [""],
            [""],
            [""],
        ],
        angryADialogue: [
            [""],
            [""],
            [""],
        ],
        neutralADialogue: [
            [""],
            [""],
            [""],
        ],
        willingADialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryADialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralADialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingADialogue: [
            [""],
            [""],
            [""],
        ],
        angryUDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        willingUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingUDialogue: [
            [""],
            [""],
            [""],
        ],
        angryCDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        willingCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingCDialogue: [
            [""],
            [""],
            [""],
        ],
        angryBDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        willingBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingBDialogue: [
            [""],
            [""],
            [""],
        ]
    },
    "Mushroom": {
        name: "Mushroom",
        prefixes: ["Soft", "Red", "Brown", "Seductive", "Phallic"],
        pronouns: [["she","her","hers"],["he","him","his"],["they","them","their"]],
        healthMin: 10,
        healthMax: 20,
        size: 1,
        resistance: 1,
        hostile: false,
        willingChance: .1,
        expMin: 1,
        expMax: 5,
        digestionTurnsMin: 0,
        digestionTurnsMax: 0,
        stuffTurnsMin: 2,
        stuffTurnsMax: 2,
        fill: 4,
        strengthMin: 1,
        strengthMax: 5,
        dexterityMin: 1,
        dexterityMax: 5,
        intelligenceMin: 1,
        intelligenceMax: 5,
        charismaMin: 1,
        charismaMax: 5,
        wisdomMin: 1,
        wisdomMax: 5,
        encounterDialogue: [
            [""],
            [""],
            [""],
        ],
        attackDialogue: [
            [""],
            [""],
            [""],
        ],
        getPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        hasPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        angryDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralDialogue: [
            [""],
            [""],
            [""],
        ],
        willingDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingDialogue: [
            [""],
            [""],
            [""],
        ],
        angryADialogue: [
            [""],
            [""],
            [""],
        ],
        neutralADialogue: [
            [""],
            [""],
            [""],
        ],
        willingADialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryADialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralADialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingADialogue: [
            [""],
            [""],
            [""],
        ],
        angryUDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        willingUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingUDialogue: [
            [""],
            [""],
            [""],
        ],
        angryCDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        willingCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingCDialogue: [
            [""],
            [""],
            [""],
        ],
        angryBDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        willingBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingBDialogue: [
            [""],
            [""],
            [""],
        ]
    },
    "Wasp": {
        name: "Wasp",
        prefixes: ["Angry", "Fast", "Busty", "Pointy", "Slick"],
        pronouns: [["she","her","hers"],["he","him","his"],["they","them","their"]],
        healthMin: 25,
        healthMax: 35,
        size: 1,
        resistance: 3,
        hostile: true,
        willingChance: .1,
        expMin: 5,
        expMax: 10,
        digestionTurnsMin: 1,
        digestionTurnsMax: 3,
        stuffTurnsMin: 2,
        stuffTurnsMax: 4,
        fill: 4,
        strengthMin: 5,
        strengthMax: 10,
        dexterityMin: 5,
        dexterityMax: 10,
        intelligenceMin: 5,
        intelligenceMax: 10,
        charismaMin: 5,
        charismaMax: 10,
        wisdomMin: 5,
        wisdomMax: 10,
        encounterDialogue: [
            [""],
            [""],
            [""],
        ],
        attackDialogue: [
            [""],
            [""],
            [""],
        ],
        getPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        hasPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        angryDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralDialogue: [
            [""],
            [""],
            [""],
        ],
        willingDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingDialogue: [
            [""],
            [""],
            [""],
        ],
        angryADialogue: [
            [""],
            [""],
            [""],
        ],
        neutralADialogue: [
            [""],
            [""],
            [""],
        ],
        willingADialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryADialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralADialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingADialogue: [
            [""],
            [""],
            [""],
        ],
        angryUDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        willingUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingUDialogue: [
            [""],
            [""],
            [""],
        ],
        angryCDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        willingCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingCDialogue: [
            [""],
            [""],
            [""],
        ],
        angryBDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        willingBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingBDialogue: [
            [""],
            [""],
            [""],
        ]
    },
    "Tiny Human": {
        name: "Tiny Human",
        prefixes: ["Flirty", "Curvy", "Worried"],
        pronouns: [["she","her","hers"],["he","him","his"],["they","them","their"]],
        healthMin: 30,
        healthMax: 40,
        size: 1,
        resistance: 8,
        hostile: false,
        willingChance: .1,
        expMin: 10,
        expMax: 15,
        digestionTurnsMin: 3,
        digestionTurnsMax: 5,
        stuffTurnsMin: 5,
        stuffTurnsMax: 8,
        fill: 5,
        strengthMin: 10,
        strengthMax: 15,
        dexterityMin: 10,
        dexterityMax: 15,
        intelligenceMin: 10,
        intelligenceMax: 15,
        charismaMin: 10,
        charismaMax: 15,
        wisdomMin: 10,
        wisdomMax: 15,
        encounterDialogue: [
            [""],
            [""],
            [""],
        ],
        attackDialogue: [
            [""],
            [""],
            [""],
        ],
        getPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        hasPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        angryDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralDialogue: [
            [""],
            [""],
            [""],
        ],
        willingDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingDialogue: [
            [""],
            [""],
            [""],
        ],
        angryADialogue: [
            [""],
            [""],
            [""],
        ],
        neutralADialogue: [
            [""],
            [""],
            [""],
        ],
        willingADialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryADialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralADialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingADialogue: [
            [""],
            [""],
            [""],
        ],
        angryUDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        willingUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingUDialogue: [
            [""],
            [""],
            [""],
        ],
        angryCDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        willingCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingCDialogue: [
            [""],
            [""],
            [""],
        ],
        angryBDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        willingBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingBDialogue: [
            [""],
            [""],
            [""],
        ]
    },
    "Tiny Slime": {
        name: "Tiny Slime",
        prefixes: ["Green", "Red", "Blue", "Prismatic"],
        pronouns: [["it","it","its"]],
        healthMin: 10,
        healthMax: 20,
        size: 1,
        resistance: 0,
        hostile: true,
        willingChance: 0,
        expMin: 1,
        expMax: 5,
        digestionTurnsMin: 1,
        digestionTurnsMax: 1,
        stuffTurnsMin: 1,
        stuffTurnsMax: 1,
        fill: 5,
        strengthMin: 1,
        strengthMax: 5,
        dexterityMin: 1,
        dexterityMax: 5,
        intelligenceMin: 1,
        intelligenceMax: 5,
        charismaMin: 1,
        charismaMax: 5,
        wisdomMin: 1,
        wisdomMax: 5,
        encounterDialogue: [
            [""],
            [""],
            [""],
        ],
        attackDialogue: [
            [""],
            [""],
            [""],
        ],
        getPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        hasPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        angryDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralDialogue: [
            [""],
            [""],
            [""],
        ],
        willingDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingDialogue: [
            [""],
            [""],
            [""],
        ],
        angryADialogue: [
            [""],
            [""],
            [""],
        ],
        neutralADialogue: [
            [""],
            [""],
            [""],
        ],
        willingADialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryADialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralADialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingADialogue: [
            [""],
            [""],
            [""],
        ],
        angryUDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        willingUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingUDialogue: [
            [""],
            [""],
            [""],
        ],
        angryCDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        willingCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingCDialogue: [
            [""],
            [""],
            [""],
        ],
        angryBDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        willingBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingBDialogue: [
            [""],
            [""],
            [""],
        ]
    },
    "Fairy": {
        name: "Fairy",
        prefixes: ["Sparkly", "Mischeivous"],
        pronouns: [["she","her","hers"],["he","him","his"],["they","them","their"]],
        healthMin: 20,
        healthMax: 40,
        size: 1,
        resistance: 10,
        hostile: true,
        willingChance: .1,
        expMin: 10,
        expMax: 15,
        digestionTurnsMin: 2,
        digestionTurnsMax: 2,
        stuffTurnsMin: 0,
        stuffTurnsMax: 0,
        fill: 4,
        strengthMin: 10,
        strengthMax: 15,
        dexterityMin: 10,
        dexterityMax: 15,
        intelligenceMin: 10,
        intelligenceMax: 15,
        charismaMin: 10,
        charismaMax: 15,
        wisdomMin: 10,
        wisdomMax: 15,
        encounterDialogue: [
            [""],
            [""],
            [""],
        ],
        attackDialogue: [
            [""],
            [""],
            [""],
        ],
        getPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        hasPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        angryDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralDialogue: [
            [""],
            [""],
            [""],
        ],
        willingDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingDialogue: [
            [""],
            [""],
            [""],
        ],
        angryADialogue: [
            [""],
            [""],
            [""],
        ],
        neutralADialogue: [
            [""],
            [""],
            [""],
        ],
        willingADialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryADialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralADialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingADialogue: [
            [""],
            [""],
            [""],
        ],
        angryUDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        willingUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingUDialogue: [
            [""],
            [""],
            [""],
        ],
        angryCDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        willingCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingCDialogue: [
            [""],
            [""],
            [""],
        ],
        angryBDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        willingBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingBDialogue: [
            [""],
            [""],
            [""],
        ]
    },
    "Mouse": {
        name: "Mouse",
        prefixes: ["Timid", "Worried"],
        pronouns: [["she","her","hers"],["he","him","his"],["they","them","their"]],
        healthMin: 10,
        healthMax: 20,
        size: 1,
        resistance: 1,
        hostile: false,
        willingChance: .50,
        expMin: 1,
        expMax: 5,
        digestionTurnsMin: 0,
        digestionTurnsMax: 0,
        stuffTurnsMin: 2,
        stuffTurnsMax: 2,
        fill: 4,
        strengthMin: 1,
        strengthMax: 5,
        dexterityMin: 1,
        dexterityMax: 5,
        intelligenceMin: 1,
        intelligenceMax: 5,
        charismaMin: 1,
        charismaMax: 5,
        wisdomMin: 1,
        wisdomMax: 5,
        encounterDialogue: [
            [""],
            [""],
            [""],
        ],
        attackDialogue: [
            [""],
            [""],
            [""],
        ],
        getPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        hasPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        angryDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralDialogue: [
            [""],
            [""],
            [""],
        ],
        willingDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingDialogue: [
            [""],
            [""],
            [""],
        ],
        angryADialogue: [
            [""],
            [""],
            [""],
        ],
        neutralADialogue: [
            [""],
            [""],
            [""],
        ],
        willingADialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryADialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralADialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingADialogue: [
            [""],
            [""],
            [""],
        ],
        angryUDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        willingUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingUDialogue: [
            [""],
            [""],
            [""],
        ],
        angryCDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        willingCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingCDialogue: [
            [""],
            [""],
            [""],
        ],
        angryBDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        willingBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingBDialogue: [
            [""],
            [""],
            [""],
        ]
    },
    "Tiny Avian": {
        name: "Tiny Avian",
        prefixes: ["Flirty", "Curvy", "Worried"],
        pronouns: [["she","her","hers"],["he","him","his"],["they","them","their"]],
        healthMin: 30,
        healthMax: 40,
        size: 1,
        resistance: 8,
        hostile: false,
        willingChance: .1,
        expMin: 10,
        expMax: 15,
        digestionTurnsMin: 3,
        digestionTurnsMax: 5,
        stuffTurnsMin: 5,
        stuffTurnsMax: 8,
        fill: 5,
        strengthMin: 10,
        strengthMax: 15,
        dexterityMin: 10,
        dexterityMax: 15,
        intelligenceMin: 10,
        intelligenceMax: 15,
        charismaMin: 10,
        charismaMax: 15,
        wisdomMin: 10,
        wisdomMax: 15,
        encounterDialogue: [
            [""],
            [""],
            [""],
        ],
        attackDialogue: [
            [""],
            [""],
            [""],
        ],
        getPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        hasPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        angryDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralDialogue: [
            [""],
            [""],
            [""],
        ],
        willingDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingDialogue: [
            [""],
            [""],
            [""],
        ],
        angryADialogue: [
            [""],
            [""],
            [""],
        ],
        neutralADialogue: [
            [""],
            [""],
            [""],
        ],
        willingADialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryADialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralADialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingADialogue: [
            [""],
            [""],
            [""],
        ],
        angryUDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        willingUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingUDialogue: [
            [""],
            [""],
            [""],
        ],
        angryCDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        willingCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingCDialogue: [
            [""],
            [""],
            [""],
        ],
        angryBDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        willingBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingBDialogue: [
            [""],
            [""],
            [""],
        ]
    },
    "Pixie": {
        name: "Pixie",
        prefixes: ["Magical", "Sparkling"],
        pronouns: [["xe", "xem", "xyr"]],
        healthMin: 30,
        healthMax: 40,
        size: 1,
        resistance: 8,
        hostile: false,
        willingChance: .1,
        expMin: 10,
        expMax: 15,
        digestionTurnsMin: 3,
        digestionTurnsMax: 5,
        stuffTurnsMin: 5,
        stuffTurnsMax: 8,
        fill: 5,
        strengthMin: 10,
        strengthMax: 15,
        dexterityMin: 10,
        dexterityMax: 15,
        intelligenceMin: 10,
        intelligenceMax: 15,
        charismaMin: 10,
        charismaMax: 15,
        wisdomMin: 10,
        wisdomMax: 15,
        encounterDialogue: [
            [""],
            [""],
            [""],
        ],
        attackDialogue: [
            [""],
            [""],
            [""],
        ],
        getPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        hasPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        angryDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralDialogue: [
            [""],
            [""],
            [""],
        ],
        willingDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingDialogue: [
            [""],
            [""],
            [""],
        ],
        angryADialogue: [
            [""],
            [""],
            [""],
        ],
        neutralADialogue: [
            [""],
            [""],
            [""],
        ],
        willingADialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryADialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralADialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingADialogue: [
            [""],
            [""],
            [""],
        ],
        angryUDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        willingUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingUDialogue: [
            [""],
            [""],
            [""],
        ],
        angryCDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        willingCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingCDialogue: [
            [""],
            [""],
            [""],
        ],
        angryBDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        willingBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingBDialogue: [
            [""],
            [""],
            [""],
        ]
    },
    "Rabbit": {
        name: "Rabbit",
        prefixes: ["Fuzzy", "Soft"],
        pronouns: [["she","her","hers"],["he","him","his"],["they","them","their"]],
        healthMin: 20,
        healthMax: 40,
        size: 2,
        resistance: 6,
        hostile: false,
        willingChance: .1,
        expMin: 9,
        expMax: 18,
        digestionTurnsMin: 2,
        digestionTurnsMax: 4,
        stuffTurnsMin: 5,
        stuffTurnsMax: 6,
        fill: 10,
        strengthMin: 5,
        strengthMax: 10,
        dexterityMin: 5,
        dexterityMax: 10,
        intelligenceMin: 5,
        intelligenceMax: 10,
        charismaMin: 5,
        charismaMax: 10,
        wisdomMin: 5,
        wisdomMax: 10,
        encounterDialogue: [
            [""],
            [""],
            [""],
        ],
        attackDialogue: [
            [""],
            [""],
            [""],
        ],
        getPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        hasPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        angryDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralDialogue: [
            [""],
            [""],
            [""],
        ],
        willingDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingDialogue: [
            [""],
            [""],
            [""],
        ],
        angryADialogue: [
            [""],
            [""],
            [""],
        ],
        neutralADialogue: [
            [""],
            [""],
            [""],
        ],
        willingADialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryADialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralADialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingADialogue: [
            [""],
            [""],
            [""],
        ],
        angryUDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        willingUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingUDialogue: [
            [""],
            [""],
            [""],
        ],
        angryCDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        willingCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingCDialogue: [
            [""],
            [""],
            [""],
        ],
        angryBDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        willingBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingBDialogue: [
            [""],
            [""],
            [""],
        ]
    },
    "Fox": {
        name: "Fox",
        prefixes: ["Fuzzy", "Soft", "Angry", "Snarling", "Hungry"],
        pronouns: [["she","her","hers"],["he","him","his"],["they","them","their"]],
        healthMin: 25,
        healthMax: 45,
        size: 2,
        resistance: 10,
        hostile: true,
        willingChance: .1,
        expMin: 10,
        expMax: 20,
        digestionTurnsMin: 2,
        digestionTurnsMax: 4,
        stuffTurnsMin: 5,
        stuffTurnsMax: 6,
        fill: 10,
        strengthMin: 5,
        strengthMax: 12,
        dexterityMin: 5,
        dexterityMax: 12,
        intelligenceMin: 5,
        intelligenceMax: 12,
        charismaMin: 5,
        charismaMax: 12,
        wisdomMin: 5,
        wisdomMax: 12,
        encounterDialogue: [
            [""],
            [""],
            [""],
        ],
        attackDialogue: [
            [""],
            [""],
            [""],
        ],
        getPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        hasPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        angryDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralDialogue: [
            [""],
            [""],
            [""],
        ],
        willingDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingDialogue: [
            [""],
            [""],
            [""],
        ],
        angryADialogue: [
            [""],
            [""],
            [""],
        ],
        neutralADialogue: [
            [""],
            [""],
            [""],
        ],
        willingADialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryADialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralADialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingADialogue: [
            [""],
            [""],
            [""],
        ],
        angryUDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        willingUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingUDialogue: [
            [""],
            [""],
            [""],
        ],
        angryCDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        willingCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingCDialogue: [
            [""],
            [""],
            [""],
        ],
        angryBDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        willingBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingBDialogue: [
            [""],
            [""],
            [""],
        ]
    },
    "Frog": {
        name: "Frog",
        prefixes: ["Slick", "Slimy", "Wet"],
        pronouns: [["she","her","hers"],["he","him","his"],["they","them","their"]],
        healthMin: 20,
        healthMax: 35,
        size: 2,
        resistance: 15,
        hostile: false,
        willingChance: .1,
        expMin: 10,
        expMax: 20,
        digestionTurnsMin: 2,
        digestionTurnsMax: 3,
        stuffTurnsMin: 1,
        stuffTurnsMax: 2,
        fill: 7,
        strengthMin: 5,
        strengthMax: 12,
        dexterityMin: 5,
        dexterityMax: 12,
        intelligenceMin: 5,
        intelligenceMax: 12,
        charismaMin: 5,
        charismaMax: 12,
        wisdomMin: 5,
        wisdomMax: 12,
        encounterDialogue: [
            [""],
            [""],
            [""],
        ],
        attackDialogue: [
            [""],
            [""],
            [""],
        ],
        getPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        hasPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        angryDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralDialogue: [
            [""],
            [""],
            [""],
        ],
        willingDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingDialogue: [
            [""],
            [""],
            [""],
        ],
        angryADialogue: [
            [""],
            [""],
            [""],
        ],
        neutralADialogue: [
            [""],
            [""],
            [""],
        ],
        willingADialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryADialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralADialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingADialogue: [
            [""],
            [""],
            [""],
        ],
        angryUDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        willingUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingUDialogue: [
            [""],
            [""],
            [""],
        ],
        angryCDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        willingCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingCDialogue: [
            [""],
            [""],
            [""],
        ],
        angryBDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        willingBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingBDialogue: [
            [""],
            [""],
            [""],
        ]
    },
    "Small Slime": {
        name: "Small Slime",
        prefixes: ["Red", "Orange", "Yellow", "Prismatic"],
        pronouns: [["it", "it", "its"]],
        healthMin: 25,
        healthMax: 45,
        size: 2,
        resistance: 10,
        hostile: true,
        willingChance: .1,
        expMin: 10,
        expMax: 20,
        digestionTurnsMin: 1,
        digestionTurnsMax: 1,
        stuffTurnsMin: 1,
        stuffTurnsMax: 1,
        fill: 10,
        strengthMin: 5,
        strengthMax: 12,
        dexterityMin: 5,
        dexterityMax: 12,
        intelligenceMin: 5,
        intelligenceMax: 12,
        charismaMin: 5,
        charismaMax: 12,
        wisdomMin: 5,
        wisdomMax: 12,
        encounterDialogue: [
            [""],
            [""],
            [""],
        ],
        attackDialogue: [
            [""],
            [""],
            [""],
        ],
        getPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        hasPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        angryDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralDialogue: [
            [""],
            [""],
            [""],
        ],
        willingDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingDialogue: [
            [""],
            [""],
            [""],
        ],
        angryADialogue: [
            [""],
            [""],
            [""],
        ],
        neutralADialogue: [
            [""],
            [""],
            [""],
        ],
        willingADialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryADialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralADialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingADialogue: [
            [""],
            [""],
            [""],
        ],
        angryUDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        willingUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingUDialogue: [
            [""],
            [""],
            [""],
        ],
        angryCDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        willingCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingCDialogue: [
            [""],
            [""],
            [""],
        ],
        angryBDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        willingBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingBDialogue: [
            [""],
            [""],
            [""],
        ]
    },
    "Cat": {
        name: "Cat",
        prefixes: ["Calico", "Tabby", "Alley", "Black", "Torti"],
        pronouns: [["she","her","hers"],["he","him","his"],["they","them","their"]],
        healthMin: 20,
        healthMax: 35,
        size: 2,
        resistance: 15,
        hostile: true,
        willingChance: .1,
        expMin: 12,
        expMax: 20,
        digestionTurnsMin: 2,
        digestionTurnsMax: 4,
        stuffTurnsMin: 5,
        stuffTurnsMax: 6,
        fill: 10,
        strengthMin: 8,
        strengthMax: 14,
        dexterityMin: 8,
        dexterityMax: 14,
        intelligenceMin: 8,
        intelligenceMax: 14,
        charismaMin: 8,
        charismaMax: 14,
        wisdomMin: 8,
        wisdomMax: 14,
        encounterDialogue: [
            [""],
            [""],
            [""],
        ],
        attackDialogue: [
            [""],
            [""],
            [""],
        ],
        getPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        hasPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        angryDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralDialogue: [
            [""],
            [""],
            [""],
        ],
        willingDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingDialogue: [
            [""],
            [""],
            [""],
        ],
        angryADialogue: [
            [""],
            [""],
            [""],
        ],
        neutralADialogue: [
            [""],
            [""],
            [""],
        ],
        willingADialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryADialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralADialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingADialogue: [
            [""],
            [""],
            [""],
        ],
        angryUDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        willingUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingUDialogue: [
            [""],
            [""],
            [""],
        ],
        angryCDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        willingCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingCDialogue: [
            [""],
            [""],
            [""],
        ],
        angryBDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        willingBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingBDialogue: [
            [""],
            [""],
            [""],
        ]
    },
    "Puppy": {
        name: "Puppy",
        prefixes: ["Floppy-Eared", "Soft"],
        pronouns: [["she","her","hers"],["he","him","his"],["they","them","their"]],
        healthMin: 25,
        healthMax: 45,
        size: 2,
        resistance: 15,
        hostile: true,
        willingChance: .4,
        expMin: 10,
        expMax: 20,
        digestionTurnsMin: 2,
        digestionTurnsMax: 4,
        stuffTurnsMin: 5,
        stuffTurnsMax: 6,
        fill: 15,
        strengthMin: 5,
        strengthMax: 12,
        dexterityMin: 5,
        dexterityMax: 12,
        intelligenceMin: 5,
        intelligenceMax: 12,
        charismaMin: 5,
        charismaMax: 12,
        wisdomMin: 5,
        wisdomMax: 12,
        encounterDialogue: [
            [""],
            [""],
            [""],
        ],
        attackDialogue: [
            [""],
            [""],
            [""],
        ],
        getPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        hasPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        angryDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralDialogue: [
            [""],
            [""],
            [""],
        ],
        willingDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingDialogue: [
            [""],
            [""],
            [""],
        ],
        angryADialogue: [
            [""],
            [""],
            [""],
        ],
        neutralADialogue: [
            [""],
            [""],
            [""],
        ],
        willingADialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryADialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralADialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingADialogue: [
            [""],
            [""],
            [""],
        ],
        angryUDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        willingUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingUDialogue: [
            [""],
            [""],
            [""],
        ],
        angryCDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        willingCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingCDialogue: [
            [""],
            [""],
            [""],
        ],
        angryBDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        willingBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingBDialogue: [
            [""],
            [""],
            [""],
        ]
    },
    "Fish": {
        name: "Fish",
        prefixes: ["Cat", "Wet", "Carp", "Slimy"],
        pronouns: [["she","her","hers"],["he","him","his"],["they","them","their"]],
        healthMin: 15,
        healthMax: 20,
        size: 2,
        resistance: 1,
        hostile: false,
        willingChance: 0,
        expMin: 5,
        expMax: 5,
        digestionTurnsMin: 5,
        digestionTurnsMax: 7,
        stuffTurnsMin: 7,
        stuffTurnsMax: 8,
        fill: 10,
        strengthMin: 5,
        strengthMax: 8,
        dexterityMin: 5,
        dexterityMax: 8,
        intelligenceMin: 5,
        intelligenceMax: 8,
        charismaMin: 5,
        charismaMax: 8,
        wisdomMin: 5,
        wisdomMax: 8,
        encounterDialogue: [
            [""],
            [""],
            [""],
        ],
        attackDialogue: [
            [""],
            [""],
            [""],
        ],
        getPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        hasPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        angryDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralDialogue: [
            [""],
            [""],
            [""],
        ],
        willingDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingDialogue: [
            [""],
            [""],
            [""],
        ],
        angryADialogue: [
            [""],
            [""],
            [""],
        ],
        neutralADialogue: [
            [""],
            [""],
            [""],
        ],
        willingADialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryADialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralADialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingADialogue: [
            [""],
            [""],
            [""],
        ],
        angryUDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        willingUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingUDialogue: [
            [""],
            [""],
            [""],
        ],
        angryCDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        willingCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingCDialogue: [
            [""],
            [""],
            [""],
        ],
        angryBDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        willingBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingBDialogue: [
            [""],
            [""],
            [""],
        ]
    },
    "Penguin": {
        name: "Penguin",
        prefixes: ["Frosty"],
        pronouns: [["she","her","hers"],["he","him","his"],["they","them","their"]],
        healthMin: 15,
        healthMax: 20,
        size: 2,
        resistance: 8,
        hostile: false,
        willingChance: 0,
        expMin: 5,
        expMax: 5,
        digestionTurnsMin: 3,
        digestionTurnsMax: 5,
        stuffTurnsMin: 3,
        stuffTurnsMax: 4,
        fill: 10,
        strengthMin: 5,
        strengthMax: 8,
        dexterityMin: 5,
        dexterityMax: 8,
        intelligenceMin: 5,
        intelligenceMax: 8,
        charismaMin: 5,
        charismaMax: 8,
        wisdomMin: 5,
        wisdomMax: 8,
        encounterDialogue: [
            [""],
            [""],
            [""],
        ],
        attackDialogue: [
            [""],
            [""],
            [""],
        ],
        getPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        hasPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        angryDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralDialogue: [
            [""],
            [""],
            [""],
        ],
        willingDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingDialogue: [
            [""],
            [""],
            [""],
        ],
        angryADialogue: [
            [""],
            [""],
            [""],
        ],
        neutralADialogue: [
            [""],
            [""],
            [""],
        ],
        willingADialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryADialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralADialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingADialogue: [
            [""],
            [""],
            [""],
        ],
        angryUDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        willingUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingUDialogue: [
            [""],
            [""],
            [""],
        ],
        angryCDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        willingCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingCDialogue: [
            [""],
            [""],
            [""],
        ],
        angryBDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        willingBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingBDialogue: [
            [""],
            [""],
            [""],
        ]
    },
    "Harpy": {
        name: "Harpy",
        prefixes: ["Fast", "Hungry"],
        pronouns: [["she","her","hers"],["he","him","his"],["they","them","their"]],
        healthMin: 50,
        healthMax: 65,
        size: 3,
        resistance: 20,
        hostile: true,
        willingChance: .1,
        expMin: 19,
        expMax: 25,
        digestionTurnsMin: 4,
        digestionTurnsMax: 6,
        stuffTurnsMin: 5,
        stuffTurnsMax: 6,
        fill: 18,
        strengthMin: 10,
        strengthMax: 20,
        dexterityMin: 10,
        dexterityMax: 20,
        intelligenceMin: 10,
        intelligenceMax: 20,
        charismaMin: 10,
        charismaMax: 20,
        wisdomMin: 10,
        wisdomMax: 20,
        encounterDialogue: [
            [""],
            [""],
            [""],
        ],
        attackDialogue: [
            [""],
            [""],
            [""],
        ],
        getPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        hasPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        angryDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralDialogue: [
            [""],
            [""],
            [""],
        ],
        willingDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingDialogue: [
            [""],
            [""],
            [""],
        ],
        angryADialogue: [
            [""],
            [""],
            [""],
        ],
        neutralADialogue: [
            [""],
            [""],
            [""],
        ],
        willingADialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryADialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralADialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingADialogue: [
            [""],
            [""],
            [""],
        ],
        angryUDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        willingUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingUDialogue: [
            [""],
            [""],
            [""],
        ],
        angryCDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        willingCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingCDialogue: [
            [""],
            [""],
            [""],
        ],
        angryBDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        willingBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingBDialogue: [
            [""],
            [""],
            [""],
        ]
    },
    "Wolf": {
        name: "Wolf",
        prefixes: ["Thick", "Hungry", "Toned"],
        pronouns: [["she","her","hers"],["he","him","his"],["they","them","their"]],
        healthMin: 60,
        healthMax: 70,
        size: 3,
        resistance: 20,
        hostile: true,
        willingChance: .1,
        expMin: 20,
        expMax: 35,
        digestionTurnsMin: 5,
        digestionTurnsMax: 6,
        stuffTurnsMin: 6,
        stuffTurnsMax: 6,
        fill: 20,
        strengthMin: 15,
        strengthMax: 20,
        dexterityMin: 15,
        dexterityMax: 20,
        intelligenceMin: 15,
        intelligenceMax: 20,
        charismaMin: 15,
        charismaMax: 20,
        wisdomMin: 15,
        wisdomMax: 20,
        encounterDialogue: [
            [""],
            [""],
            [""],
        ],
        attackDialogue: [
            [""],
            [""],
            [""],
        ],
        getPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        hasPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        angryDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralDialogue: [
            [""],
            [""],
            [""],
        ],
        willingDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingDialogue: [
            [""],
            [""],
            [""],
        ],
        angryADialogue: [
            [""],
            [""],
            [""],
        ],
        neutralADialogue: [
            [""],
            [""],
            [""],
        ],
        willingADialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryADialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralADialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingADialogue: [
            [""],
            [""],
            [""],
        ],
        angryUDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        willingUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingUDialogue: [
            [""],
            [""],
            [""],
        ],
        angryCDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        willingCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingCDialogue: [
            [""],
            [""],
            [""],
        ],
        angryBDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        willingBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingBDialogue: [
            [""],
            [""],
            [""],
        ]
    },
    "Medium Slime": {
        name: "Medium Slime",
        prefixes: ["Green", "Dark Green", "Blue", "Purple"],
        pronouns: [["it", "it", "its"]],
        healthMin: 20,
        healthMax: 25,
        size: 3,
        resistance: 10,
        hostile: false,
        willingChance: .1,
        expMin: 15,
        expMax: 20,
        digestionTurnsMin: 1,
        digestionTurnsMax: 1,
        stuffTurnsMin: 1,
        stuffTurnsMax: 1,
        fill: 18,
        strengthMin: 10,
        strengthMax: 20,
        dexterityMin: 10,
        dexterityMax: 20,
        intelligenceMin: 10,
        intelligenceMax: 20,
        charismaMin: 10,
        charismaMax: 20,
        wisdomMin: 10,
        wisdomMax: 20,
        encounterDialogue: [
            [""],
            [""],
            [""],
        ],
        attackDialogue: [
            [""],
            [""],
            [""],
        ],
        getPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        hasPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        angryDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralDialogue: [
            [""],
            [""],
            [""],
        ],
        willingDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingDialogue: [
            [""],
            [""],
            [""],
        ],
        angryADialogue: [
            [""],
            [""],
            [""],
        ],
        neutralADialogue: [
            [""],
            [""],
            [""],
        ],
        willingADialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryADialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralADialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingADialogue: [
            [""],
            [""],
            [""],
        ],
        angryUDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        willingUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingUDialogue: [
            [""],
            [""],
            [""],
        ],
        angryCDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        willingCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingCDialogue: [
            [""],
            [""],
            [""],
        ],
        angryBDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        willingBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingBDialogue: [
            [""],
            [""],
            [""],
        ]
    },
    "Bullfrog": {
        name: "Bullfrog",
        prefixes: ["Wet", "Slimy", "Loud"],
        pronouns: [["she","her","hers"],["he","him","his"],["they","them","their"]],
        healthMin: 20,
        healthMax: 25,
        size: 3,
        resistance: 10,
        hostile: false,
        willingChance: .1,
        expMin: 15,
        expMax: 20,
        digestionTurnsMin: 4,
        digestionTurnsMax: 6,
        stuffTurnsMin: 3,
        stuffTurnsMax: 6,
        fill: 18,
        strengthMin: 10,
        strengthMax: 20,
        dexterityMin: 10,
        dexterityMax: 20,
        intelligenceMin: 10,
        intelligenceMax: 20,
        charismaMin: 10,
        charismaMax: 20,
        wisdomMin: 10,
        wisdomMax: 20,
        encounterDialogue: [
            [""],
            [""],
            [""],
        ],
        attackDialogue: [
            [""],
            [""],
            [""],
        ],
        getPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        hasPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        angryDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralDialogue: [
            [""],
            [""],
            [""],
        ],
        willingDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingDialogue: [
            [""],
            [""],
            [""],
        ],
        angryADialogue: [
            [""],
            [""],
            [""],
        ],
        neutralADialogue: [
            [""],
            [""],
            [""],
        ],
        willingADialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryADialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralADialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingADialogue: [
            [""],
            [""],
            [""],
        ],
        angryUDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        willingUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingUDialogue: [
            [""],
            [""],
            [""],
        ],
        angryCDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        willingCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingCDialogue: [
            [""],
            [""],
            [""],
        ],
        angryBDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        willingBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingBDialogue: [
            [""],
            [""],
            [""],
        ]
    },
    "Human": {
        name: "Human",
        prefixes: ["Toned", "Chubby", "Fit"],
        pronouns: [["she","her","hers"],["he","him","his"],["they","them","their"]],
        healthMin: 50,
        healthMax: 65,
        size: 3,
        resistance: 18,
        hostile: false,
        willingChance: .1,
        expMin: 15,
        expMax: 25,
        digestionTurnsMin: 4,
        digestionTurnsMax: 6,
        stuffTurnsMin: 5,
        stuffTurnsMax: 6,
        fill: 18,
        strengthMin: 10,
        strengthMax: 20,
        dexterityMin: 10,
        dexterityMax: 20,
        intelligenceMin: 10,
        intelligenceMax: 20,
        charismaMin: 10,
        charismaMax: 20,
        wisdomMin: 10,
        wisdomMax: 20,
        encounterDialogue: [
            [""],
            [""],
            [""],
        ],
        attackDialogue: [
            [""],
            [""],
            [""],
        ],
        getPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        hasPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        angryDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralDialogue: [
            [""],
            [""],
            [""],
        ],
        willingDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingDialogue: [
            [""],
            [""],
            [""],
        ],
        angryADialogue: [
            [""],
            [""],
            [""],
        ],
        neutralADialogue: [
            [""],
            [""],
            [""],
        ],
        willingADialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryADialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralADialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingADialogue: [
            [""],
            [""],
            [""],
        ],
        angryUDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        willingUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingUDialogue: [
            [""],
            [""],
            [""],
        ],
        angryCDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        willingCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingCDialogue: [
            [""],
            [""],
            [""],
        ],
        angryBDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        willingBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingBDialogue: [
            [""],
            [""],
            [""],
        ]
    },
    "Avian": {
        name: "Avian",
        prefixes: ["Toned", "Chubby", "Fit"],
        pronouns: [["she","her","hers"],["he","him","his"],["they","them","their"]],
        healthMin: 50,
        healthMax: 65,
        size: 3,
        resistance: 18,
        hostile: false,
        willingChance: .1,
        expMin: 15,
        expMax: 25,
        digestionTurnsMin: 4,
        digestionTurnsMax: 6,
        stuffTurnsMin: 5,
        stuffTurnsMax: 6,
        fill: 18,
        strengthMin: 10,
        strengthMax: 20,
        dexterityMin: 10,
        dexterityMax: 20,
        intelligenceMin: 10,
        intelligenceMax: 20,
        charismaMin: 10,
        charismaMax: 20,
        wisdomMin: 10,
        wisdomMax: 20,
        encounterDialogue: [
            [""],
            [""],
            [""],
        ],
        attackDialogue: [
            [""],
            [""],
            [""],
        ],
        getPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        hasPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        angryDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralDialogue: [
            [""],
            [""],
            [""],
        ],
        willingDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingDialogue: [
            [""],
            [""],
            [""],
        ],
        angryADialogue: [
            [""],
            [""],
            [""],
        ],
        neutralADialogue: [
            [""],
            [""],
            [""],
        ],
        willingADialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryADialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralADialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingADialogue: [
            [""],
            [""],
            [""],
        ],
        angryUDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        willingUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingUDialogue: [
            [""],
            [""],
            [""],
        ],
        angryCDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        willingCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingCDialogue: [
            [""],
            [""],
            [""],
        ],
        angryBDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        willingBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingBDialogue: [
            [""],
            [""],
            [""],
        ]
    },
    "Shadow": {
        name: "Shadow",
        prefixes: ["Dark"],
        pronouns: [["she","her","hers"],["he","him","his"],["they","them","their"]],
        healthMin: 80,
        healthMax: 100,
        size: 3,
        resistance: 21,
        hostile: false,
        willingChance: 0,
        expMin: 55,
        expMax: 75,
        digestionTurnsMin: 4,
        digestionTurnsMax: 6,
        stuffTurnsMin: 5,
        stuffTurnsMax: 6,
        fill: 18,
        strengthMin: 20,
        strengthMax: 35,
        dexterityMin: 20,
        dexterityMax: 35,
        intelligenceMin: 20,
        intelligenceMax: 35,
        charismaMin: 20,
        charismaMax: 35,
        wisdomMin: 20,
        wisdomMax: 35,
        encounterDialogue: [
            [""],
            [""],
            [""],
        ],
        attackDialogue: [
            [""],
            [""],
            [""],
        ],
        getPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        hasPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        angryDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralDialogue: [
            [""],
            [""],
            [""],
        ],
        willingDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingDialogue: [
            [""],
            [""],
            [""],
        ],
        angryADialogue: [
            [""],
            [""],
            [""],
        ],
        neutralADialogue: [
            [""],
            [""],
            [""],
        ],
        willingADialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryADialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralADialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingADialogue: [
            [""],
            [""],
            [""],
        ],
        angryUDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        willingUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingUDialogue: [
            [""],
            [""],
            [""],
        ],
        angryCDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        willingCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingCDialogue: [
            [""],
            [""],
            [""],
        ],
        angryBDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        willingBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingBDialogue: [
            [""],
            [""],
            [""],
        ]
    },
    "Outlaw": {
        name: "Outlaw",
        prefixes: ["Angry", "Toned", "Chubby"],
        pronouns: [["she","her","hers"],["he","him","his"],["they","them","their"]],
        healthMin: 50,
        healthMax: 65,
        size: 3,
        resistance: 20,
        hostile: true,
        willingChance: .1,
        expMin: 19,
        expMax: 25,
        digestionTurnsMin: 4,
        digestionTurnsMax: 6,
        stuffTurnsMin: 5,
        stuffTurnsMax: 6,
        fill: 18,
        strengthMin: 10,
        strengthMax: 20,
        dexterityMin: 10,
        dexterityMax: 20,
        intelligenceMin: 10,
        intelligenceMax: 20,
        charismaMin: 10,
        charismaMax: 20,
        wisdomMin: 10,
        wisdomMax: 20,
        encounterDialogue: [
            [""],
            [""],
            [""],
        ],
        attackDialogue: [
            [""],
            [""],
            [""],
        ],
        getPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        hasPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        angryDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralDialogue: [
            [""],
            [""],
            [""],
        ],
        willingDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingDialogue: [
            [""],
            [""],
            [""],
        ],
        angryADialogue: [
            [""],
            [""],
            [""],
        ],
        neutralADialogue: [
            [""],
            [""],
            [""],
        ],
        willingADialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryADialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralADialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingADialogue: [
            [""],
            [""],
            [""],
        ],
        angryUDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        willingUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingUDialogue: [
            [""],
            [""],
            [""],
        ],
        angryCDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        willingCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingCDialogue: [
            [""],
            [""],
            [""],
        ],
        angryBDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        willingBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingBDialogue: [
            [""],
            [""],
            [""],
        ]
    },
    "Lizard": {
        name: "Lizard",
        prefixes: ["Quiet", "Helpful"],
        pronouns: [["she","her","hers"],["he","him","his"],["they","them","their"]],
        healthMin: 50,
        healthMax: 65,
        size: 3,
        resistance: 20,
        hostile: false,
        willingChance: .2,
        expMin: 19,
        expMax: 25,
        digestionTurnsMin: 4,
        digestionTurnsMax: 6,
        stuffTurnsMin: 5,
        stuffTurnsMax: 6,
        fill: 18,
        strengthMin: 10,
        strengthMax: 20,
        dexterityMin: 10,
        dexterityMax: 20,
        intelligenceMin: 10,
        intelligenceMax: 20,
        charismaMin: 10,
        charismaMax: 20,
        wisdomMin: 10,
        wisdomMax: 20,
        encounterDialogue: [
            [""],
            [""],
            [""],
        ],
        attackDialogue: [
            [""],
            [""],
            [""],
        ],
        getPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        hasPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        angryDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralDialogue: [
            [""],
            [""],
            [""],
        ],
        willingDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingDialogue: [
            [""],
            [""],
            [""],
        ],
        angryADialogue: [
            [""],
            [""],
            [""],
        ],
        neutralADialogue: [
            [""],
            [""],
            [""],
        ],
        willingADialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryADialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralADialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingADialogue: [
            [""],
            [""],
            [""],
        ],
        angryUDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        willingUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingUDialogue: [
            [""],
            [""],
            [""],
        ],
        angryCDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        willingCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingCDialogue: [
            [""],
            [""],
            [""],
        ],
        angryBDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        willingBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingBDialogue: [
            [""],
            [""],
            [""],
        ]
    },
    "Mer": {
        name: "Mer",
        prefixes: ["Enticing", "Entrancing"],
        pronouns: [["she","her","hers"],["he","him","his"],["they","them","their"]],
        healthMin: 50,
        healthMax: 65,
        size: 3,
        resistance: 20,
        hostile: true,
        willingChance: .1,
        expMin: 20,
        expMax: 25,
        digestionTurnsMin: 4,
        digestionTurnsMax: 6,
        stuffTurnsMin: 5,
        stuffTurnsMax: 6,
        fill: 18,
        strengthMin: 12,
        strengthMax: 20,
        dexterityMin: 12,
        dexterityMax: 20,
        intelligenceMin: 12,
        intelligenceMax: 20,
        charismaMin: 12,
        charismaMax: 20,
        wisdomMin: 12,
        wisdomMax: 20,
        encounterDialogue: [
            [""],
            [""],
            [""],
        ],
        attackDialogue: [
            [""],
            [""],
            [""],
        ],
        getPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        hasPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        angryDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralDialogue: [
            [""],
            [""],
            [""],
        ],
        willingDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingDialogue: [
            [""],
            [""],
            [""],
        ],
        angryADialogue: [
            [""],
            [""],
            [""],
        ],
        neutralADialogue: [
            [""],
            [""],
            [""],
        ],
        willingADialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryADialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralADialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingADialogue: [
            [""],
            [""],
            [""],
        ],
        angryUDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        willingUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingUDialogue: [
            [""],
            [""],
            [""],
        ],
        angryCDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        willingCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingCDialogue: [
            [""],
            [""],
            [""],
        ],
        angryBDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        willingBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingBDialogue: [
            [""],
            [""],
            [""],
        ]
    },
    "Succubus": {
        name: "Succubus",
        prefixes: ["Curvy", "Enticing", "Entrancing"],
        pronouns: [["she","her","hers"]],
        healthMin: 60,
        healthMax: 75,
        size: 3,
        resistance: 25,
        hostile: true,
        willingChance: .05,
        expMin: 25,
        expMax: 35,
        digestionTurnsMin: 5,
        digestionTurnsMax: 6,
        stuffTurnsMin: 5,
        stuffTurnsMax: 6,
        fill: 20,
        strengthMin: 15,
        strengthMax: 20,
        dexterityMin: 15,
        dexterityMax: 20,
        intelligenceMin: 15,
        intelligenceMax: 20,
        charismaMin: 15,
        charismaMax: 20,
        wisdomMin: 15,
        wisdomMax: 20,
        encounterDialogue: [
            [""],
            [""],
            [""],
        ],
        attackDialogue: [
            [""],
            [""],
            [""],
        ],
        getPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        hasPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        angryDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralDialogue: [
            [""],
            [""],
            [""],
        ],
        willingDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingDialogue: [
            [""],
            [""],
            [""],
        ],
        angryADialogue: [
            [""],
            [""],
            [""],
        ],
        neutralADialogue: [
            [""],
            [""],
            [""],
        ],
        willingADialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryADialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralADialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingADialogue: [
            [""],
            [""],
            [""],
        ],
        angryUDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        willingUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingUDialogue: [
            [""],
            [""],
            [""],
        ],
        angryCDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        willingCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingCDialogue: [
            [""],
            [""],
            [""],
        ],
        angryBDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        willingBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingBDialogue: [
            [""],
            [""],
            [""],
        ]
    },
    "Snake": {
        name: "Snake",
        prefixes: ["Sleek", "Speedy", "Sneaky"],
        pronouns: [["she","her","hers"],["he","him","his"],["they","them","their"]],
        healthMin: 50,
        healthMax: 65,
        size: 3,
        resistance: 10,
        hostile: true,
        willingChance: .05,
        expMin: 20,
        expMax: 25,
        digestionTurnsMin: 2,
        digestionTurnsMax: 2,
        stuffTurnsMin: 3,
        stuffTurnsMax: 3,
        fill: 15,
        strengthMin: 10,
        strengthMax: 20,
        dexterityMin: 10,
        dexterityMax: 20,
        intelligenceMin: 10,
        intelligenceMax: 20,
        charismaMin: 10,
        charismaMax: 20,
        wisdomMin: 10,
        wisdomMax: 20,
        encounterDialogue: [
            [""],
            [""],
            [""],
        ],
        attackDialogue: [
            [""],
            [""],
            [""],
        ],
        getPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        hasPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        angryDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralDialogue: [
            [""],
            [""],
            [""],
        ],
        willingDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingDialogue: [
            [""],
            [""],
            [""],
        ],
        angryADialogue: [
            [""],
            [""],
            [""],
        ],
        neutralADialogue: [
            [""],
            [""],
            [""],
        ],
        willingADialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryADialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralADialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingADialogue: [
            [""],
            [""],
            [""],
        ],
        angryUDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        willingUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingUDialogue: [
            [""],
            [""],
            [""],
        ],
        angryCDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        willingCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingCDialogue: [
            [""],
            [""],
            [""],
        ],
        angryBDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        willingBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingBDialogue: [
            [""],
            [""],
            [""],
        ]
    },
    "Harpy": {
        name: "Harpy",
        prefixes: ["Fast", "Hungry"],
        pronouns: [["she","her","hers"],["he","him","his"],["they","them","their"]],
        healthMin: 50,
        healthMax: 65,
        size: 3,
        resistance: 20,
        hostile: true,
        willingChance: .1,
        expMin: 19,
        expMax: 25,
        digestionTurnsMin: 4,
        digestionTurnsMax: 6,
        stuffTurnsMin: 5,
        stuffTurnsMax: 6,
        fill: 18,
        strengthMin: 10,
        strengthMax: 20,
        dexterityMin: 10,
        dexterityMax: 20,
        intelligenceMin: 10,
        intelligenceMax: 20,
        charismaMin: 10,
        charismaMax: 20,
        wisdomMin: 10,
        wisdomMax: 20,
        encounterDialogue: [
            [""],
            [""],
            [""],
        ],
        attackDialogue: [
            [""],
            [""],
            [""],
        ],
        getPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        hasPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        angryDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralDialogue: [
            [""],
            [""],
            [""],
        ],
        willingDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingDialogue: [
            [""],
            [""],
            [""],
        ],
        angryADialogue: [
            [""],
            [""],
            [""],
        ],
        neutralADialogue: [
            [""],
            [""],
            [""],
        ],
        willingADialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryADialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralADialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingADialogue: [
            [""],
            [""],
            [""],
        ],
        angryUDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        willingUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingUDialogue: [
            [""],
            [""],
            [""],
        ],
        angryCDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        willingCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingCDialogue: [
            [""],
            [""],
            [""],
        ],
        angryBDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        willingBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingBDialogue: [
            [""],
            [""],
            [""],
        ]
    },
    "Large Slime": {
        name: "Large Slime",
        prefixes: ["Black", "Gray","Swampy"],
        pronouns: [["it","it","its"]],
        healthMin: 30,
        healthMax: 40,
        size: 4,
        resistance: 12,
        hostile: true,
        willingChance: .1,
        expMin: 19,
        expMax: 25,
        digestionTurnsMin: 1,
        digestionTurnsMax: 1,
        stuffTurnsMin: 1,
        stuffTurnsMax: 1,
        fill: 25,
        strengthMin: 15,
        strengthMax: 20,
        dexterityMin: 15,
        dexterityMax: 20,
        intelligenceMin: 15,
        intelligenceMax: 20,
        charismaMin: 15,
        charismaMax: 20,
        wisdomMin: 15,
        wisdomMax: 20,
        encounterDialogue: [
            [""],
            [""],
            [""],
        ],
        attackDialogue: [
            [""],
            [""],
            [""],
        ],
        getPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        hasPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        angryDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralDialogue: [
            [""],
            [""],
            [""],
        ],
        willingDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingDialogue: [
            [""],
            [""],
            [""],
        ],
        angryADialogue: [
            [""],
            [""],
            [""],
        ],
        neutralADialogue: [
            [""],
            [""],
            [""],
        ],
        willingADialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryADialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralADialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingADialogue: [
            [""],
            [""],
            [""],
        ],
        angryUDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        willingUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingUDialogue: [
            [""],
            [""],
            [""],
        ],
        angryCDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        willingCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingCDialogue: [
            [""],
            [""],
            [""],
        ],
        angryBDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        willingBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingBDialogue: [
            [""],
            [""],
            [""],
        ]
    },
    "Naga": {
        name: "Naga",
        prefixes: ["Enticing", "Arousing", "Entrancing"],
        pronouns: [["she","her","hers"]],
        healthMin: 70,
        healthMax: 85,
        size: 4,
        resistance: 18,
        hostile: true,
        willingChance: 0,
        expMin: 25,
        expMax: 35,
        digestionTurnsMin: 8,
        digestionTurnsMax: 10,
        stuffTurnsMin: 10,
        stuffTurnsMax: 12,
        fill: 25,
        strengthMin: 20,
        strengthMax: 28,
        dexterityMin: 20,
        dexterityMax: 28,
        intelligenceMin: 20,
        intelligenceMax: 28,
        charismaMin: 20,
        charismaMax: 28,
        wisdomMin: 20,
        wisdomMax: 28,
        encounterDialogue: [
            [""],
            [""],
            [""],
        ],
        attackDialogue: [
            [""],
            [""],
            [""],
        ],
        getPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        hasPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        angryDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralDialogue: [
            [""],
            [""],
            [""],
        ],
        willingDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingDialogue: [
            [""],
            [""],
            [""],
        ],
        angryADialogue: [
            [""],
            [""],
            [""],
        ],
        neutralADialogue: [
            [""],
            [""],
            [""],
        ],
        willingADialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryADialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralADialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingADialogue: [
            [""],
            [""],
            [""],
        ],
        angryUDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        willingUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingUDialogue: [
            [""],
            [""],
            [""],
        ],
        angryCDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        willingCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingCDialogue: [
            [""],
            [""],
            [""],
        ],
        angryBDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        willingBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingBDialogue: [
            [""],
            [""],
            [""],
        ]
    },
    "Sand Worm": {
        name: "Sand Worm",
        prefixes: ["Encroaching", "Wide-Mouthed", "Consuming"],
        pronouns: [["it","it","its"]],
        healthMin: 70,
        healthMax: 85,
        size: 4,
        resistance: 20,
        hostile: true,
        willingChance: 0,
        expMin: 25,
        expMax: 35,
        digestionTurnsMin: 8,
        digestionTurnsMax: 10,
        stuffTurnsMin: 10,
        stuffTurnsMax: 12,
        fill: 25,
        strengthMin: 20,
        strengthMax: 28,
        dexterityMin: 20,
        dexterityMax: 28,
        intelligenceMin: 20,
        intelligenceMax: 28,
        charismaMin: 20,
        charismaMax: 28,
        wisdomMin: 20,
        wisdomMax: 28,
        encounterDialogue: [
            [""],
            [""],
            [""],
        ],
        attackDialogue: [
            [""],
            [""],
            [""],
        ],
        getPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        hasPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        angryDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralDialogue: [
            [""],
            [""],
            [""],
        ],
        willingDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingDialogue: [
            [""],
            [""],
            [""],
        ],
        angryADialogue: [
            [""],
            [""],
            [""],
        ],
        neutralADialogue: [
            [""],
            [""],
            [""],
        ],
        willingADialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryADialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralADialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingADialogue: [
            [""],
            [""],
            [""],
        ],
        angryUDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        willingUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingUDialogue: [
            [""],
            [""],
            [""],
        ],
        angryCDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        willingCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingCDialogue: [
            [""],
            [""],
            [""],
        ],
        angryBDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        willingBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingBDialogue: [
            [""],
            [""],
            [""],
        ]
    },
    "Venus Fly Trap": {
        name: "Venus Fly Trap",
        prefixes: ["Encroaching", "Wide-Mouthed", "Consuming"],
        pronouns: [["it","it","its"]],
        healthMin: 70,
        healthMax: 85,
        size: 4,
        resistance: 20,
        hostile: true,
        willingChance: 0,
        expMin: 25,
        expMax: 35,
        digestionTurnsMin: 8,
        digestionTurnsMax: 10,
        stuffTurnsMin: 10,
        stuffTurnsMax: 12,
        fill: 25,
        strengthMin: 20,
        strengthMax: 28,
        dexterityMin: 20,
        dexterityMax: 28,
        intelligenceMin: 20,
        intelligenceMax: 28,
        charismaMin: 20,
        charismaMax: 28,
        wisdomMin: 20,
        wisdomMax: 28,
        encounterDialogue: [
            [""],
            [""],
            [""],
        ],
        attackDialogue: [
            [""],
            [""],
            [""],
        ],
        getPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        hasPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        angryDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralDialogue: [
            [""],
            [""],
            [""],
        ],
        willingDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingDialogue: [
            [""],
            [""],
            [""],
        ],
        angryADialogue: [
            [""],
            [""],
            [""],
        ],
        neutralADialogue: [
            [""],
            [""],
            [""],
        ],
        willingADialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryADialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralADialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingADialogue: [
            [""],
            [""],
            [""],
        ],
        angryUDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        willingUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingUDialogue: [
            [""],
            [""],
            [""],
        ],
        angryCDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        willingCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingCDialogue: [
            [""],
            [""],
            [""],
        ],
        angryBDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        willingBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingBDialogue: [
            [""],
            [""],
            [""],
        ]
    },
    "Large Fish": {
        name: "Large Fish",
        prefixes: ["Big-Mouthed", "Oblivious"],
        pronouns: [["she","her","hers"],["he","him","his"],["they","them","their"]],
        healthMin: 70,
        healthMax: 85,
        size: 4,
        resistance: 18,
        hostile: false,
        willingChance: 0,
        expMin: 25,
        expMax: 35,
        digestionTurnsMin: 8,
        digestionTurnsMax: 10,
        stuffTurnsMin: 10,
        stuffTurnsMax: 12,
        fill: 25,
        strengthMin: 20,
        strengthMax: 28,
        dexterityMin: 20,
        dexterityMax: 28,
        intelligenceMin: 20,
        intelligenceMax: 28,
        charismaMin: 20,
        charismaMax: 28,
        wisdomMin: 20,
        wisdomMax: 28,
        encounterDialogue: [
            [""],
            [""],
            [""],
        ],
        attackDialogue: [
            [""],
            [""],
            [""],
        ],
        getPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        hasPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        angryDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralDialogue: [
            [""],
            [""],
            [""],
        ],
        willingDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingDialogue: [
            [""],
            [""],
            [""],
        ],
        angryADialogue: [
            [""],
            [""],
            [""],
        ],
        neutralADialogue: [
            [""],
            [""],
            [""],
        ],
        willingADialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryADialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralADialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingADialogue: [
            [""],
            [""],
            [""],
        ],
        angryUDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        willingUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingUDialogue: [
            [""],
            [""],
            [""],
        ],
        angryCDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        willingCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingCDialogue: [
            [""],
            [""],
            [""],
        ],
        angryBDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        willingBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingBDialogue: [
            [""],
            [""],
            [""],
        ]
    },
    "Squid": {
        name: "Squid",
        prefixes: ["Big-Mouthed", "Grabby"],
        pronouns: [["she","her","hers"],["he","him","his"],["they","them","their"]],
        healthMin: 70,
        healthMax: 85,
        size: 4,
        resistance: 25,
        hostile: true,
        willingChance: 0,
        expMin: 25,
        expMax: 35,
        digestionTurnsMin: 8,
        digestionTurnsMax: 10,
        stuffTurnsMin: 10,
        stuffTurnsMax: 12,
        fill: 25,
        strengthMin: 25,
        strengthMax: 30,
        dexterityMin: 25,
        dexterityMax: 30,
        intelligenceMin: 25,
        intelligenceMax: 30,
        charismaMin: 25,
        charismaMax: 30,
        wisdomMin: 25,
        wisdomMax: 30,
        encounterDialogue: [
            [""],
            [""],
            [""],
        ],
        attackDialogue: [
            [""],
            [""],
            [""],
        ],
        getPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        hasPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        angryDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralDialogue: [
            [""],
            [""],
            [""],
        ],
        willingDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingDialogue: [
            [""],
            [""],
            [""],
        ],
        angryADialogue: [
            [""],
            [""],
            [""],
        ],
        neutralADialogue: [
            [""],
            [""],
            [""],
        ],
        willingADialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryADialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralADialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingADialogue: [
            [""],
            [""],
            [""],
        ],
        angryUDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        willingUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingUDialogue: [
            [""],
            [""],
            [""],
        ],
        angryCDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        willingCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingCDialogue: [
            [""],
            [""],
            [""],
        ],
        angryBDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        willingBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingBDialogue: [
            [""],
            [""],
            [""],
        ]
    },
    "Horse": {
        name: "Horse",
        prefixes: ["Proud", "Strong"],
        pronouns: [["she","her","hers"],["he","him","his"],["they","them","their"]],
        healthMin: 70,
        healthMax: 85,
        size: 4,
        resistance: 25,
        hostile: false,
        willingChance: 0.1,
        expMin: 25,
        expMax: 35,
        digestionTurnsMin: 8,
        digestionTurnsMax: 10,
        stuffTurnsMin: 10,
        stuffTurnsMax: 12,
        fill: 25,
        strengthMin: 25,
        strengthMax: 30,
        dexterityMin: 25,
        dexterityMax: 30,
        intelligenceMin: 25,
        intelligenceMax: 30,
        charismaMin: 25,
        charismaMax: 30,
        wisdomMin: 25,
        wisdomMax: 30,
        encounterDialogue: [
            [""],
            [""],
            [""],
        ],
        attackDialogue: [
            [""],
            [""],
            [""],
        ],
        getPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        hasPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        angryDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralDialogue: [
            [""],
            [""],
            [""],
        ],
        willingDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingDialogue: [
            [""],
            [""],
            [""],
        ],
        angryADialogue: [
            [""],
            [""],
            [""],
        ],
        neutralADialogue: [
            [""],
            [""],
            [""],
        ],
        willingADialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryADialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralADialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingADialogue: [
            [""],
            [""],
            [""],
        ],
        angryUDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        willingUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingUDialogue: [
            [""],
            [""],
            [""],
        ],
        angryCDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        willingCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingCDialogue: [
            [""],
            [""],
            [""],
        ],
        angryBDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        willingBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingBDialogue: [
            [""],
            [""],
            [""],
        ]
    },
    "Cow": {
        name: "Cow",
        prefixes: ["Motherly", "Strong"],
        pronouns: [["she","her","hers"]],
        healthMin: 70,
        healthMax: 85,
        size: 4,
        resistance: 25,
        hostile: false,
        willingChance: 0.1,
        expMin: 25,
        expMax: 35,
        digestionTurnsMin: 8,
        digestionTurnsMax: 10,
        stuffTurnsMin: 10,
        stuffTurnsMax: 12,
        fill: 25,
        strengthMin: 25,
        strengthMax: 30,
        dexterityMin: 25,
        dexterityMax: 30,
        intelligenceMin: 25,
        intelligenceMax: 30,
        charismaMin: 25,
        charismaMax: 30,
        wisdomMin: 25,
        wisdomMax: 30,
        encounterDialogue: [
            [""],
            [""],
            [""],
        ],
        attackDialogue: [
            [""],
            [""],
            [""],
        ],
        getPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        hasPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        angryDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralDialogue: [
            [""],
            [""],
            [""],
        ],
        willingDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingDialogue: [
            [""],
            [""],
            [""],
        ],
        angryADialogue: [
            [""],
            [""],
            [""],
        ],
        neutralADialogue: [
            [""],
            [""],
            [""],
        ],
        willingADialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryADialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralADialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingADialogue: [
            [""],
            [""],
            [""],
        ],
        angryUDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        willingUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingUDialogue: [
            [""],
            [""],
            [""],
        ],
        angryCDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        willingCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingCDialogue: [
            [""],
            [""],
            [""],
        ],
        angryBDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        willingBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingBDialogue: [
            [""],
            [""],
            [""],
        ]
    },
    "Deer": {
        name: "Deer",
        prefixes: ["Proud", "Magestic"],
        pronouns: [["she","her","hers"],["he","him","his"],["they","them","their"]],
        healthMin: 70,
        healthMax: 85,
        size: 4,
        resistance: 25,
        hostile: false,
        willingChance: 0.1,
        expMin: 25,
        expMax: 35,
        digestionTurnsMin: 8,
        digestionTurnsMax: 10,
        stuffTurnsMin: 10,
        stuffTurnsMax: 12,
        fill: 25,
        strengthMin: 25,
        strengthMax: 30,
        dexterityMin: 25,
        dexterityMax: 30,
        intelligenceMin: 25,
        intelligenceMax: 30,
        charismaMin: 25,
        charismaMax: 30,
        wisdomMin: 25,
        wisdomMax: 30,
        encounterDialogue: [
            [""],
            [""],
            [""],
        ],
        attackDialogue: [
            [""],
            [""],
            [""],
        ],
        getPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        hasPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        angryDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralDialogue: [
            [""],
            [""],
            [""],
        ],
        willingDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingDialogue: [
            [""],
            [""],
            [""],
        ],
        angryADialogue: [
            [""],
            [""],
            [""],
        ],
        neutralADialogue: [
            [""],
            [""],
            [""],
        ],
        willingADialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryADialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralADialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingADialogue: [
            [""],
            [""],
            [""],
        ],
        angryUDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        willingUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingUDialogue: [
            [""],
            [""],
            [""],
        ],
        angryCDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        willingCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingCDialogue: [
            [""],
            [""],
            [""],
        ],
        angryBDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        willingBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingBDialogue: [
            [""],
            [""],
            [""],
        ]
    },
    "Huge Slime": {
        name: "Huge Slime",
        prefixes: ["Monstrous"],
        pronouns: [["it", "it", "its"]],
        healthMin: 100,
        healthMax: 150,
        size: 5,
        resistance: 25,
        hostile: true,
        willingChance: 0,
        expMin: 25,
        expMax: 35,
        digestionTurnsMin: 1,
        digestionTurnsMax: 1,
        stuffTurnsMin: 1,
        stuffTurnsMax: 1,
        fill: 50,
        strengthMin: 25,
        strengthMax: 30,
        dexterityMin: 25,
        dexterityMax: 30,
        intelligenceMin: 25,
        intelligenceMax: 30,
        charismaMin: 25,
        charismaMax: 30,
        wisdomMin: 25,
        wisdomMax: 30,
        encounterDialogue: [
            [""],
            [""],
            [""],
        ],
        attackDialogue: [
            [""],
            [""],
            [""],
        ],
        getPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        hasPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        angryDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralDialogue: [
            [""],
            [""],
            [""],
        ],
        willingDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingDialogue: [
            [""],
            [""],
            [""],
        ],
        angryADialogue: [
            [""],
            [""],
            [""],
        ],
        neutralADialogue: [
            [""],
            [""],
            [""],
        ],
        willingADialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryADialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralADialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingADialogue: [
            [""],
            [""],
            [""],
        ],
        angryUDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        willingUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingUDialogue: [
            [""],
            [""],
            [""],
        ],
        angryCDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        willingCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingCDialogue: [
            [""],
            [""],
            [""],
        ],
        angryBDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        willingBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingBDialogue: [
            [""],
            [""],
            [""],
        ]
    },
    "Dragon": {
        name: "Dragon",
        prefixes: ["Seductive", "Scaly", "Intimidating"],
        pronouns: [["she","her","hers"],["he","him","his"],["they","them","their"]],
        healthMin: 100,
        healthMax: 150,
        size: 5,
        resistance: 35,
        hostile: true,
        willingChance: 0.05,
        expMin: 50,
        expMax: 75,
        digestionTurnsMin: 10,
        digestionTurnsMax: 15,
        stuffTurnsMin: 10,
        stuffTurnsMax: 15,
        fill: 50,
        strengthMin: 30,
        strengthMax: 40,
        dexterityMin: 30,
        dexterityMax: 40,
        intelligenceMin: 30,
        intelligenceMax: 40,
        charismaMin: 30,
        charismaMax: 40,
        wisdomMin: 30,
        wisdomMax: 40,
        encounterDialogue: [
            [""],
            [""],
            [""],
        ],
        attackDialogue: [
            [""],
            [""],
            [""],
        ],
        getPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        hasPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        angryDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralDialogue: [
            [""],
            [""],
            [""],
        ],
        willingDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingDialogue: [
            [""],
            [""],
            [""],
        ],
        angryADialogue: [
            [""],
            [""],
            [""],
        ],
        neutralADialogue: [
            [""],
            [""],
            [""],
        ],
        willingADialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryADialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralADialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingADialogue: [
            [""],
            [""],
            [""],
        ],
        angryUDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        willingUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingUDialogue: [
            [""],
            [""],
            [""],
        ],
        angryCDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        willingCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingCDialogue: [
            [""],
            [""],
            [""],
        ],
        angryBDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        willingBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingBDialogue: [
            [""],
            [""],
            [""],
        ]
    },
    "Whale": {
        name: "Whale",
        prefixes: ["Monstrous", "Blubbery"],
        pronouns: [["she","her","hers"],["he","him","his"],["they","them","their"]],
        healthMin: 100,
        healthMax: 150,
        size: 5,
        resistance: 35,
        hostile: false,
        willingChance: 0.05,
        expMin: 50,
        expMax: 75,
        digestionTurnsMin: 10,
        digestionTurnsMax: 15,
        stuffTurnsMin: 10,
        stuffTurnsMax: 15,
        fill: 50,
        strengthMin: 30,
        strengthMax: 40,
        dexterityMin: 30,
        dexterityMax: 40,
        intelligenceMin: 30,
        intelligenceMax: 40,
        charismaMin: 30,
        charismaMax: 40,
        wisdomMin: 30,
        wisdomMax: 40,
        encounterDialogue: [
            [""],
            [""],
            [""],
        ],
        attackDialogue: [
            [""],
            [""],
            [""],
        ],
        getPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        hasPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        angryDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralDialogue: [
            [""],
            [""],
            [""],
        ],
        willingDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingDialogue: [
            [""],
            [""],
            [""],
        ],
        angryADialogue: [
            [""],
            [""],
            [""],
        ],
        neutralADialogue: [
            [""],
            [""],
            [""],
        ],
        willingADialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryADialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralADialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingADialogue: [
            [""],
            [""],
            [""],
        ],
        angryUDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        willingUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingUDialogue: [
            [""],
            [""],
            [""],
        ],
        angryCDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        willingCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingCDialogue: [
            [""],
            [""],
            [""],
        ],
        angryBDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        willingBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingBDialogue: [
            [""],
            [""],
            [""],
        ]
    },
    "Giraffe": {
        name: "Giraffe",
        prefixes: ["Seductive", "Enticing", "Intimidating"],
        pronouns: [["she","her","hers"],["he","him","his"],["they","them","their"]],
        healthMin: 100,
        healthMax: 150,
        size: 5,
        resistance: 35,
        hostile: true,
        willingChance: 0.05,
        expMin: 50,
        expMax: 75,
        digestionTurnsMin: 10,
        digestionTurnsMax: 15,
        stuffTurnsMin: 10,
        stuffTurnsMax: 15,
        fill: 50,
        strengthMin: 30,
        strengthMax: 40,
        dexterityMin: 30,
        dexterityMax: 40,
        intelligenceMin: 30,
        intelligenceMax: 40,
        charismaMin: 30,
        charismaMax: 40,
        wisdomMin: 30,
        wisdomMax: 40,
        encounterDialogue: [
            [""],
            [""],
            [""],
        ],
        attackDialogue: [
            [""],
            [""],
            [""],
        ],
        getPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        hasPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        angryDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralDialogue: [
            [""],
            [""],
            [""],
        ],
        willingDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingDialogue: [
            [""],
            [""],
            [""],
        ],
        angryADialogue: [
            [""],
            [""],
            [""],
        ],
        neutralADialogue: [
            [""],
            [""],
            [""],
        ],
        willingADialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryADialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralADialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingADialogue: [
            [""],
            [""],
            [""],
        ],
        angryUDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        willingUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingUDialogue: [
            [""],
            [""],
            [""],
        ],
        angryCDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        willingCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingCDialogue: [
            [""],
            [""],
            [""],
        ],
        angryBDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        willingBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingBDialogue: [
            [""],
            [""],
            [""],
        ]
    },
    "Hippo": {
        name: "Hippo",
        prefixes: ["Seductive", "Enticing", "Intimidating"],
        pronouns: [["she","her","hers"],["he","him","his"],["they","them","their"]],
        healthMin: 100,
        healthMax: 150,
        size: 5,
        resistance: 35,
        hostile: true,
        willingChance: 0.05,
        expMin: 50,
        expMax: 75,
        digestionTurnsMin: 10,
        digestionTurnsMax: 15,
        stuffTurnsMin: 10,
        stuffTurnsMax: 15,
        fill: 50,
        strengthMin: 30,
        strengthMax: 40,
        dexterityMin: 30,
        dexterityMax: 40,
        intelligenceMin: 30,
        intelligenceMax: 40,
        charismaMin: 30,
        charismaMax: 40,
        wisdomMin: 30,
        wisdomMax: 40,
        encounterDialogue: [
            [""],
            [""],
            [""],
        ],
        attackDialogue: [
            [""],
            [""],
            [""],
        ],
        getPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        hasPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        angryDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralDialogue: [
            [""],
            [""],
            [""],
        ],
        willingDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingDialogue: [
            [""],
            [""],
            [""],
        ],
        angryADialogue: [
            [""],
            [""],
            [""],
        ],
        neutralADialogue: [
            [""],
            [""],
            [""],
        ],
        willingADialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryADialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralADialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingADialogue: [
            [""],
            [""],
            [""],
        ],
        angryUDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        willingUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingUDialogue: [
            [""],
            [""],
            [""],
        ],
        angryCDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        willingCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingCDialogue: [
            [""],
            [""],
            [""],
        ],
        angryBDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        willingBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingBDialogue: [
            [""],
            [""],
            [""],
        ]
    },
    "Queen Bee": {
        name: "Queen Bee",
        prefixes: ["Seductive", "Enticing", "Intimidating"],
        pronouns: [["she","her","hers"],["he","him","his"],["they","them","their"]],
        healthMin: 100,
        healthMax: 150,
        size: 5,
        resistance: 35,
        hostile: true,
        willingChance: 0,
        expMin: 50,
        expMax: 75,
        digestionTurnsMin: 10,
        digestionTurnsMax: 15,
        stuffTurnsMin: 10,
        stuffTurnsMax: 15,
        fill: 50,
        strengthMin: 30,
        strengthMax: 40,
        dexterityMin: 30,
        dexterityMax: 40,
        intelligenceMin: 30,
        intelligenceMax: 40,
        charismaMin: 30,
        charismaMax: 40,
        wisdomMin: 30,
        wisdomMax: 40,
        encounterDialogue: [
            [""],
            [""],
            [""],
        ],
        attackDialogue: [
            [""],
            [""],
            [""],
        ],
        getPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        hasPlayerDialogue: [
            [""],
            [""],
            [""],
        ],
        angryDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralDialogue: [
            [""],
            [""],
            [""],
        ],
        willingDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingDialogue: [
            [""],
            [""],
            [""],
        ],
        angryADialogue: [
            [""],
            [""],
            [""],
        ],
        neutralADialogue: [
            [""],
            [""],
            [""],
        ],
        willingADialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryADialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralADialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingADialogue: [
            [""],
            [""],
            [""],
        ],
        angryUDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        willingUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralUDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingUDialogue: [
            [""],
            [""],
            [""],
        ],
        angryCDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        willingCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralCDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingCDialogue: [
            [""],
            [""],
            [""],
        ],
        angryBDialogue: [
            [""],
            [""],
            [""],
        ],
        neutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        willingBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideAngryBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideNeutralBDialogue: [
            [""],
            [""],
            [""],
        ],
        insideWillingBDialogue: [
            [""],
            [""],
            [""],
        ]
    },
}

const biomeConfigs = {
    "Forest": {
        name: "Forest",
        minSize: 500,
        frequency: 10,
        weather: "mild",
        transition: { "Mountain": 0.1, "Plains": 0.2 },
        color: "#228B22",
        pathColor: "#B78B8B",
        houseColor: "#774646",
        riverColor: "#518CF7",
        decorationColor: "#",
        microbiomes: ["Flower Field"],
        microbiomeCount: 2,
        pois: ["Fairy Ring", "Old Statue"],
        poiCount: 10,
        isRiverStartPoint: false,
        isRiverAllowed: true,
        isPathAllowed: true,
        isFillerBiome: false,
        biomeSet: [],
        decoration: "none",
        variantTiles: [
            {
                name: "Mossy Rock",
                enterText: "You find a rock covered in lush moss.",
                revisitText: "The mossy rock looks as though it’s been here for ages.",
                isNavigable: true,
                enemyChance: 0.2,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Mushroom", "Rabbit"]
            },
            {
                name: "Leafy Clearing",
                enterText: "You find a leafy clearing. The sun beams shine down on you.",
                revisitText: "You stomp through the leaves again, having cleared a way before.",
                isNavigable: true,
                enemyChance: 0.15,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Rabbit", "Fox", "Human"]
            },
            {
                name: "Wooded Forest",
                enterText: "Large, thick trees surround your path. It would be easy to get lost in here.",
                revisitText: "You are pretty sure you have seen this before.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Cat", "Snake", "Mushroom"]
            },
            {
                name: "Quiet Forest",
                enterText: "The sounds of the forest are quieter in this spot.",
                revisitText: "The serenity almost makes you relax.",
                isNavigable: true,
                enemyChance: 0.05,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Deer"]
            },
            {
                name: "Dense Forest",
                enterText: "The trees are incredibly dense in this spot.",
                revisitText: "It's hard to find your previous path through the trees.",
                isNavigable: true,
                enemyChance: 0.15,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Fox", "Mushroom"]
            }
        ],
        pathTypes: [
            {
                name: "Dirt Path",
                enterText: "The dirt path is a nice break from the wildlife.",
                revisitText: "Trusty ol' dirt paths.",
                isNavigable: true,
                enemyChance: 0.05,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Human"]
            },
            {
                name: "Brush Path",
                enterText: "The path in front of you is covered in underbrush.",
                revisitText: "Your footsteps are quieter on the underbrush.",
                isNavigable: true,
                enemyChance: 0.05,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Human"]
            },
            {
                name: "Uneven Path",
                enterText: "Your way forward is full of uneven land, dug up by tree roots.",
                revisitText: "You are careful not to trip on any rogue tree roots.",
                isNavigable: true,
                enemyChance: 0.05,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Outlaw"]
            }
        ],
        houseTypes: [
            {
                name: "Log Cabin",
                enterText: "A humble log cabin stands before you. A fire is on inside.",
                revisitText: "The fire has been left running for too long, and the house is burnt down.",
                isNavigable: true,
                enemyChance: 1,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Human", "Fox"]
            },
            {
                name: "Forest Camp",
                enterText: "A group of people have set up at a makeshift camp.",
                revisitText: "The camp is still standing.",
                isNavigable: true,
                enemyChance: 1,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Human", "Fox"]
            },
            {
                name: "Hidden Burrow",
                enterText: "You almost miss spotting a well-hidden burrow in front of you.",
                revisitText: "The burrow has nearly caved in from the commotion.",
                isNavigable: true,
                enemyChance: 1,
                secondEnemyChance: 0.5,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Rabbit"]
            }
        ],
        decorationTypes: [

        ],
        riverTypes: [
            {
                name: "Lazy River",
                enterText: "The water isn't running particularly fast.",
                revisitText: "You trudge through the water easily.",
                isNavigable: true,
                enemyChance: 0.25,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Fish"]
            },
            {
                name: "Rapid River",
                enterText: "The water threatens to pull you away with each movement.",
                revisitText: "You have to brace yourself with each movement.",
                isNavigable: true,
                enemyChance: 0.25,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Fish", "Fish", "Large Fish"]
            }
        ],
        init : function() {
            this.child.parent = this;
            delete this.init;
            return this;
        },
        shopChance: 0.01
    },
    "Mountain": {
        name: "Mountain",
        minSize: 350,
        frequency: 5,
        weather: "cold",
        transition: { "Forest": 0.2, "Desert": 0.1 },
        color: "#89837E",
        pathColor: "#706B67",
        houseColor: "#774646",
        riverColor: "#51C2F7",
        decorationColor: "#",
        microbiomes: ["Mountain Taiga", "Mountain Lake"],
        microbiomeCount: 1,
        pois: ["Mountain Cave", "Summit"],
        poiCount: 5,
        isRiverStartPoint: true,
        isRiverAllowed: true,
        isPathAllowed: true,
        isFillerBiome: false,
        biomeSet: [],
        decoration: "none",
        variantTiles: [
            {
                name: "Snowy Peak",
                enterText: "You reach a peak covered in snow.",
                revisitText: "The snow-covered peak is as cold as ever.",
                isNavigable: false,
                enemyChance: 0,
                secondEnemyChance: 0,
                additionalEnemyChance: 0,
                enemyPreferences: [""]
            }
        ],
        pathTypes: [
            {
                name: "Snow Path",
                enterText: "You find a rock covered in lush moss.",
                revisitText: "The mossy rock looks as though it’s been here for ages.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Penguin", "Harpy"]
            }
        ],
        houseTypes: [
            {
                name: "Mountain Overhang",
                enterText: "You are pretty sure something lives in this overhang.",
                revisitText: "You step back into the overhang, shielding yourself from the cold.",
                isNavigable: true,
                enemyChance: 1,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Fox", "Wolf"]
            },
            {
                name: "Mountain Climber Hut",
                enterText: "Although it seems abandoned, the hut must be fresh.",
                revisitText: "No wonder the hut was abandoned.",
                isNavigable: true,
                enemyChance: 1,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Medium Slime", "Small Slime", "Mouse"]
            }
        ],
        decorationTypes: [

        ],
        riverTypes: [
            {
                name: "Icy River",
                enterText: "The water is freezing this high up in the mountain.",
                revisitText: "You'll have to bundle up warm after this.",
                isNavigable: true,
                enemyChance: 0.25,
                secondEnemyChance: 0.25,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Fish"]
            },
            {
                name: "Clear River",
                enterText: "The water is crystal clear. It must be from a nearby spring.",
                revisitText: "Your muddy feet ruin the clarity of the water.",
                isNavigable: true,
                enemyChance: 0.25,
                secondEnemyChance: 0.25,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Fish", "Large Fish"]
            }
        ],
        init : function() {
            this.child.parent = this;
            delete this.init;
            return this;
        },
        shopChance: 0.01
    },
    "Desert": {
        name: "Desert",
        minSize: 500,
        frequency: 5,
        weather: "hot",
        transition: { "Forest": 0.1, "Mountain": 0.1, "Plains": 0.2 },
        color: "#FFD700",
        pathColor: "#FFD7C7",
        houseColor: "#C1A17F",
        riverColor: "#FFAE00",
        decorationColor: "#",
        microbiomes: ["Cactus Patch"],
        microbiomeCount: 2,
        pois: ["Well", "Ancient Structure"],
        poiCount: 10,
        isRiverStartPoint: false,
        isRiverAllowed: false,
        isPathAllowed: true,
        isFillerBiome: false,
        biomeSet: [],
        decoration: "none",
        variantTiles: [
            {
                name: "Sand Dune",
                enterText: "You encounter a shifting sand dune.",
                revisitText: "The sand dune has changed slightly since you last saw it.",
                isNavigable: true,
                enemyChance: 0.05,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Sand Worm"]
            },
            {
                name: "Sand Valley",
                enterText: "You slide down a hill of sand into a small valley.",
                revisitText: "You can still see where you slid last time.",
                isNavigable: true,
                enemyChance: 0.15,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Lizard", "Rabbit"]
            },
            {
                name: "Flat Desert",
                enterText: "The desert stretches as far as you can see.",
                revisitText: "You can vaguely see landmarks in the distance.",
                isNavigable: true,
                enemyChance: 0.15,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Lizard", "Snake"]
            },
            {
                name: "Sweltering Desert",
                enterText: "A bead of sweat trails down your head.",
                revisitText: "You should have avoided this spot with how hot it is.",
                isNavigable: true,
                enemyChance: 0.15,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Lizard", "Snake"]
            }
        ],
        pathTypes: [
            {
                name: "Sandstone Path",
                enterText: "A path of carved sandstone lines the way.",
                revisitText: "You're not sure how old this sandstone is.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Outlaw", "Human"]
            },
            {
                name: "Sandy Path",
                enterText: "A divot in the dunes traces your path through the desert.",
                revisitText: "The path has slightly changed, but still gets the job done.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Outlaw", "Horse"]
            },
            {
                name: "Windy Path",
                enterText: "Sand covers most of the otherwise carved path.",
                revisitText: "You're not sure if there's more or less sand on the path.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Outlaw", "Rabbit"]
            }
        ],
        houseTypes: [
            {
                name: "Sandstone House",
                enterText: "A sandstone house stands against the harsh environment.",
                revisitText: "The sandstone house is a quiet stopping point on your adventure.",
                isNavigable: true,
                enemyChance: 1,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Outlaw", "Snake"]
            },
            {
                name: "Mine Entrance",
                enterText: "An old, rickety mineshaft lies below. You're not sure you should go any deeper than the cobwebs will allow.",
                revisitText: "Something makes a sound that echoes down the mineshaft.",
                isNavigable: true,
                enemyChance: 1,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Mouse", "Outlaw", "Fairy"]
            }
        ],
        decorationTypes: [

        ],
        riverTypes: [
            {
                name: "Dry River Basin",
                enterText: "Good luck finding any water here.",
                revisitText: "The clay is slowly cooking from the heat of the sun.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Tiny Slime"]
            }
        ],
        init : function() {
            this.child.parent = this;
            delete this.init;
            return this;
        },
        shopChance: 0.02
    },
    "Plains": {
        name: "Plains",
        minSize: 500,
        frequency: 10,
        weather: "temperate",
        transition: { "Forest": 0.2, "Desert": 0.1 },
        color: "#94C120",
        pathColor: "#945D20",
        houseColor: "#704518",
        decorationColor: "#",
        riverColor: "#51A7F7",
        microbiomes: ["Meadow"],
        microbiomeCount: 1,
        pois: ["Sunflower Field", "Wildflower Field"],
        poiCount: 10,
        isRiverStartPoint: false,
        isRiverAllowed: true,
        isPathAllowed: true,
        isFillerBiome: false,
        biomeSet: [],
        decoration: "none",
        variantTiles: [
            {
                name: "Grassy Plain",
                enterText: "A quiet, grassy plain. Certainly nothing special.",
                revisitText: "This plain looks familiar.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.01,
                enemyPreferences: ["Bee", "Cat"]
            },
            {
                name: "Grassy Hill",
                enterText: "Climbing the hill is a tall order, but you make it to the top without breaking a sweat.",
                revisitText: "You really don't feel like climbing the hill again.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.01,
                enemyPreferences: ["Bee", "Dog"]
            },
            {
                name: "Tallgrass Plain",
                enterText: "You almost have to cut through the weeds to get through.",
                revisitText: "A thin path marks where you've already been.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.01,
                enemyPreferences: ["Deer", "Rabbit"]
            },
            {
                name: "Windy Plain",
                enterText: "You almost have to cut through the weeds to.",
                revisitText: "Despite the wind battering you, you're pretty sure you've been here.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.01,
                enemyPreferences: ["Fox", "Rabbit"]
            },
            {
                name: "Flat Plain",
                enterText: "This plain feels almost unnaturally flat.",
                revisitText: "Yep. Still flat.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.01,
                enemyPreferences: ["Cow", "Horse"]
            },
            {
                name: "Deserted Plain",
                enterText: "Even the sounds of insects are void from this spot.",
                revisitText: "You remember the eery quietness of this spot.",
                isNavigable: true,
                enemyChance: 0.01,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.01,
                enemyPreferences: ["Huge Slime"]
            },
            {
                name: "Wet Plain",
                enterText: "Your feet squish a little into the ground.",
                revisitText: "Some of your squishy footsteps are still here.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.01,
                enemyPreferences: ["Frog", "Small Slime"]
            },
            {
                name: "Flower Field",
                enterText: "You wander into a field full of vibrant flowers.",
                revisitText: "The flowers sway gently in the breeze.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.01,
                enemyPreferences: ["Deer", "Rabbit", "Fox", "Cat"]
            }
        ],
        pathTypes: [
            {
                name: "Dirt Path",
                enterText: "A simple dirt path.",
                revisitText: "Yep. A simple dirt path.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Human", "Cat", "Dog"]
            },
            {
                name: "Quiet Dirt Path",
                enterText: "A dirt path, but with not a lot going on.",
                revisitText: "Still dirt.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Bee"]
            },
            {
                name: "Worn Dirt Path",
                enterText: "This dirt seems especially stepped on.",
                revisitText: "You're more than happy to use the dirt path.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Human", "Fox", "Cat", "Dog", "Horse"]
            }
        ],
        houseTypes: [
            {
                name: "Small Cottage",
                enterText: "A small cottage sits on a hill, with a winding path up.",
                revisitText: "The cottage is peaceful out in the plains.",
                isNavigable: true,
                enemyChance: 1,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Human", "Fox"]
            },
            {
                name: "Rabbit Burrow",
                enterText: "The rabbits inside are making lots of noise.",
                revisitText: "Revisiting the burrow is much quieter.",
                isNavigable: true,
                enemyChance: 1,
                secondEnemyChance: 0.5,
                additionalEnemyChance: 0.1,
                enemyPreferences: ["Rabbit"]
            }
        ],
        decorationTypes: [

        ],
        riverTypes: [
            {
                name: "Small River",
                enterText: "A small river through the plains.",
                revisitText: "You can almost hop over the stream.",
                isNavigable: true,
                enemyChance: 0.15,
                secondEnemyChance: 0.25,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Fish", "Fish"]
            },
            {
                name: "Floodwater River",
                enterText: "The water threatens to pull you away with each movement.",
                revisitText: "You have to brace yourself with each movement.",
                isNavigable: true,
                enemyChance: 0.35,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Fish", "Frog", "Large Fish", "Fish", "Frog", "Large Fish", "Deer", "Horse"]
            }
        ],
        init : function() {
            this.child.parent = this;
            delete this.init;
            return this;
        },
        shopChance: 0.03
    },
    "Swamp": {
        name: "Swamp",
        minSize: 550,
        frequency: 5,
        weather: "humid",
        transition: { "Forest": 0.3, "Desert": 0.1 },
        color: "#006400",
        pathColor: "#4E634E",
        houseColor: "#8E634E",
        riverColor: "#517471",
        decorationColor: "#",
        microbiomes: ["Mire"],
        microbiomeCount: 1,
        pois: ["Runic Tablet","Sunken Structure"],
        poiCount: 10,
        isRiverStartPoint: false,
        isRiverAllowed: true,
        isPathAllowed: true,
        isFillerBiome: false,
        biomeSet: [],
        decoration: "none",
        variantTiles: [
            {
                name: "Wet Swamp",
                enterText: "You step into a particularly wet part of the swamp.",
                revisitText: "The swamp is as boggy as ever.",
                isNavigable: true,
                enemyChance: 0.2,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Small Slime", "Frog"]
            },
            {
                name: "Wooded Swamp",
                enterText: "Trees cover the area, their large roots peeking out.",
                revisitText: "The trees are still.",
                isNavigable: true,
                enemyChance: 0.2,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Medium Slime", "Frog"]
            },
            {
                name: "Swamp Pond",
                enterText: "A pond of murky swamp water lies still before you.",
                revisitText: "The water is still again.",
                isNavigable: true,
                enemyChance: 0.2,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Bee", "Frog", "Large Slime"]
            },
            {
                name: "Slimy Swamp",
                enterText: "You nearly slip on a streak of slime.",
                revisitText: "You're careful to avoid the slime this time.",
                isNavigable: true,
                enemyChance: 0.2,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Frog", "Tiny Slime", "Small Slime", "Medium Slime", "Large Slime"]
            }
        ],
        pathTypes: [
            {
                name: "Wet Path",
                enterText: "Your shoes soak in the watery path.",
                revisitText: "Your shoes are veritably soaked.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Small Slime", "Medium Slime", "Tiny Slime"]
            },
            {
                name: "Muddy Path",
                enterText: "The path squishes under your feet.",
                revisitText: "Your shoes certainly can't get any muddier right now.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Small Slime", "Medium Slime", "Tiny Slime"]
            },
            {
                name: "Fallen Log",
                enterText: "An old log has been rolled to be a makeshift bridge over a particularly nasty batch of water.",
                revisitText: "The old log rolls slightly as you cross again.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Small Slime", "Medium Slime", "Tiny Slime"]
            }
        ],
        houseTypes: [
            {
                name: "Swamp Hut",
                enterText: "You find a small, ramshackle hut in the swamp.",
                revisitText: "The swamp hut is still half-submerged in the muck.",
                isNavigable: true,
                enemyChance: 1,
                secondEnemyChance: 0.65,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Fairy"]
            },
            {
                name: "Bog Cabin",
                enterText: "You discover a cabin built on stilts above the swamp.",
                revisitText: "The bog cabin seems to have settled deeper into the mire.",
                isNavigable: true,
                enemyChance: 1,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Human", "Outlaw", "Large Slime"]
            }
        ],
        decorationTypes: [

        ],
        riverTypes: [
            {
                name: "Murky River",
                enterText: "The water is just as muddy as the rest of the swamp.",
                revisitText: "You hope not to fall.",
                isNavigable: true,
                enemyChance: 0.25,
                secondEnemyChance: 0.25,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Fish", "Frog"]
            },
            {
                name: "Still River",
                enterText: "The water remains still, collecting algae and lily pads.",
                revisitText: "You're pretty sure you see some nasty looking mosquitoes.",
                isNavigable: true,
                enemyChance: 0.5,
                secondEnemyChance: 0.25,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Frog"]
            }
        ],
        init : function() {
            this.child.parent = this;
            delete this.init;
            return this;
        },
        shopChance: 0.01
    },
    "Badlands": {
        name: "Badlands",
        minSize: 1500,
        frequency: 1,
        weather: "dry",
        transition: { "Desert": 0.3, "Desert": 0.1 },
        color: "#993D00",
        pathColor: "#CE4F00",
        houseColor: "#511F00",
        decorationColor: "#",
        riverColor: "#993D00",
        microbiomes: ["Oasis", "Outlaw Outpost"],
        microbiomeCount: 3,
        pois: ["Bone Deposit", "Quarry"],
        poiCount: 15,
        isRiverStartPoint: false,
        isRiverAllowed: false,
        isPathAllowed: true,
        isFillerBiome: false,
        biomeSet: [],
        decoration: "none",
        variantTiles: [
            {
                name: "Dry Badlands",
                enterText: "The moisture on your skin is sucked away.",
                revisitText: "Still a dry spot. You try to hurry through.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Mouse", "Rabbit", "Lizard"]
            },
            {
                name: "Splintering Badlands",
                enterText: "You can't seem to sweat fast enough. The heat is almost too much.",
                revisitText: "The sweltering heat is slowing you down.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Lizard", "Outlaw", "Snake"]
            },
            {
                name: "Crumbling Badlands",
                enterText: "The ground is cracking and falling apart here.",
                revisitText: "A piece of the ground is missing from the last time you were here.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Lizard", "Outlaw", "Snake", "Mouse"]
            }
        ],
        pathTypes: [
            {
                name: "Dirt Path",
                enterText: "Red dirt lines your way.",
                revisitText: "The dirt is unnaturally red in some spots.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Human", "Outlaw"]
            },
            {
                name: "Carved Path",
                enterText: "A long time has been spent to carve this path through the badlands.",
                revisitText: "You can't imagine how long the trek would be without this path.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Outlaw", "Horse"]
            },
            {
                name: "Rail Path",
                enterText: "An old rail path, likely for a mine cart, leads your way forward.",
                revisitText: "The rail path is short, but useful.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Mouse", "Outlaw", "Snake"]
            }
        ],
        houseTypes: [
            {
                name: "Clay Cave",
                enterText: "A damp, clay cave acts as your refuge from the uninhabitable badlands weather.",
                revisitText: "It feels nice to be back in the cave.",
                isNavigable: true,
                enemyChance: 1,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Mouse", "Snake", "Lizard"]
            },
            {
                name: "Mineshaft",
                enterText: "A railway leads you to a mineshaft, with barrels of dynamite surrounding it.",
                revisitText: "You're not sure you want to get too close to the dynamite.",
                isNavigable: true,
                enemyChance: 1,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Mouse", "Snake", "Wolf"]
            }
        ],
        decorationTypes: [

        ],
        riverTypes: [
            {
                name: "Dried River",
                enterText: "The water has long run dry.",
                revisitText: "It must have been years since the water ran through here.",
                isNavigable: true,
                enemyChance: 0.15,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Rabbit", "Snake", "Lizard"]
            }
        ],
        init : function() {
            this.child.parent = this;
            delete this.init;
            return this;
        },
        shopChance: 0.01
    },
    "Tundra": {
        name: "Tundra",
        minSize: 1500,
        frequency: 1,
        weather: "freezing",
        transition: { "Desert": 0.3, "Desert": 0.1 },
        color: "#BEE5E0",
        pathColor: "#D7EAE8",
        houseColor: "#A4E8E0",
        decorationColor: "#",
        riverColor: "#A8DAFF",
        microbiomes: ["Frozen Lake"],
        microbiomeCount: 5,
        pois: ["Spruce Tree", "Ice Cave"],
        poiCount: 40,
        isRiverStartPoint: false,
        isRiverAllowed: true,
        isPathAllowed: true,
        isFillerBiome: false,
        biomeSet: [],
        decoration: "none",
        variantTiles: [
            {
                name: "Soft Snow",
                enterText: "You step into a deep spot of soft snow.",
                revisitText: "You still see your footprints in the snow.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Penguin", "Wolf"]
            },
            {
                name: "Windswept Tundra",
                enterText: "The cold wind is harsh on your face.",
                revisitText: "The tundra winds are blowing against your back this time.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Penguin", "Wolf"]
            },
            {
                name: "Quiet Tundra",
                enterText: "A quiet portion of the tundra surrounds you. The snowflakes are peaceful.",
                revisitText: "You remember this spot, if only for the silence.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Penguin", "Fox"]
            }
        ],
        pathTypes: [
            {
                name: "Packed Snow Path",
                enterText: "The snow has been packed from apparent travel.",
                revisitText: "You have already added your footprints to the beaten path.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Fox", "Wolf"]
            },
            {
                name: "Icy Path",
                enterText: "You nearly slip on some particularly nasty spots in the path.",
                revisitText: "You are careful to avoid any other slick areas on your way back through this spot.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Fox", "Human", "Wolf"]
            }
        ],
        houseTypes: [
            {
                name: "Igloo",
                enterText: "The igloo is warm as you enter it.",
                revisitText: "You find yourself back in the refuge of the igloo.",
                isNavigable: true,
                enemyChance: 1,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Human", "Fox", "Cat"]
            },
            {
                name: "Encampment",
                enterText: "You approach an encampment full of logs and leather.",
                revisitText: "The encampment is a bit quieter than you remember it being.",
                isNavigable: true,
                enemyChance: 1,
                secondEnemyChance: 0.5,
                additionalEnemyChance: 0.1,
                enemyPreferences: ["Human", "Fox", "Dog"]
            }
        ],
        decorationTypes: [

        ],
        riverTypes: [
            {
                name: "Frozen River",
                enterText: "The ice is frozen enough to stand on.",
                revisitText: "You don't want to press your luck with its thickness.",
                isNavigable: true,
                enemyChance: 0.15,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Fairy", "Fox", "Rabbit", "Wolf"]
            }
        ],
        init : function() {
            this.child.parent = this;
            delete this.init;
            return this;
        },
        shopChance: 0.01
    },
    "Shrunken Grove": {
        name: "Shrunken Grove",
        minSize: 350,
        frequency: 1,
        weather: "temperate",
        transition: { "Desert": 0.3, "Desert": 0.1 },
        color: "#3B627A",
        pathColor: "#4E82A0",
        houseColor: "#9E82A0",
        decorationColor: "#",
        riverColor: "#73B2F4",
        microbiomes: [],
        microbiomeCount: 0,
        pois: ["Hot Air Balloon", "Booby Trap"],
        poiCount: 40,
        isRiverStartPoint: false,
        isRiverAllowed: true,
        isPathAllowed: true,
        isFillerBiome: false,
        biomeSet: [],
        decoration: "none",
        variantTiles: [
            {
                name: "Shrunken Grove",
                enterText: "Everything around you is miniature.",
                revisitText: "It's like walking through a kids' room.",
                isNavigable: true,
                enemyChance: 0.2,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Mushroom", "Tiny Human", "Bee"]
            },
            {
                name: "Miniature Hill",
                enterText: "You nearly lose balance on the small hill below you.",
                revisitText: "You watch your step over the \"hill\".",
                isNavigable: true,
                enemyChance: 0.2,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Mushroom", "Tiny Human", "Bee"]
            },
            {
                name: "Tiny Tree",
                enterText: "A little tree stands before you. It seems real.",
                revisitText: "The tiny tree shakes in the wind.",
                isNavigable: true,
                enemyChance: 0.2,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Mushroom", "Tiny Human", "Bee", "Fairy"]
            }
        ],
        pathTypes: [
            {
                name: "Shrunken Path",
                enterText: "There's a small path to follow below you.",
                revisitText: "You barely see the path you followed.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Mushroom", "Tiny Human", "Bee"]
            },
            {
                name: "Shrunken Path",
                enterText: "You feel like a giant on the path.",
                revisitText: "This place is a marvel.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Mushroom", "Tiny Human", "Bee"]
            }
        ],
        houseTypes: [
            {
                name: "Doll House",
                enterText: "This house looks just like a dollhouse.",
                revisitText: "Definitely a dollhouse.",
                isNavigable: true,
                enemyChance: 1,
                secondEnemyChance: 0.45,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Mushroom", "Tiny Human", "Fairy", "Mouse"]
            },
            {
                name: "Block House",
                enterText: "You're pretty sure this house is made of building blocks.",
                revisitText: "The house has tumbled apart.",
                isNavigable: true,
                enemyChance: 1,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Mushroom", "Tiny Human", "Fairy", "Mouse"]
            }
        ],
        decorationTypes: [

        ],
        riverTypes: [
            {
                name: "Tiny River",
                enterText: "More like a small stream than anything.",
                revisitText: "Your foot could easily dam the river.",
                isNavigable: true,
                enemyChance: 0.15,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Fish", "Bee", "Mushroom"]
            }
        ],
        init : function() {
            this.child.parent = this;
            delete this.init;
            return this;
        },
        shopChance: 0.01
    },
    "Large Lake": {
        name: "Large Lake",
        minSize: 400,
        frequency: 5,
        weather: "wet",
        transition: { "Desert": 0.3, "Desert": 0.1 },
        color: "#5175F7",
        pathColor: "#5175F7",
        houseColor: "#808080",
        riverColor: "#5175F7",
        decorationColor: "#F9E193",
        microbiomes: ["Lake Island"],
        microbiomeCount: 2,
        pois: ["Small Island"],
        poiCount: 10,
        isRiverStartPoint: false,
        isRiverAllowed: false,
        isPathAllowed: false,
        isFillerBiome: false,
        biomeSet: [],
        decoration: "border",
        variantTiles: [
            {
                name: "Calm Lake Waters",
                enterText: "The water here is especially calm.",
                revisitText: "You wade a little in the calm water.",
                isNavigable: true,
                enemyChance: 0.2,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Large Fish", "Fish"]
            },
            {
                name: "Choppy Lake Waters",
                enterText: "You struggle to stay balanced in the waters.",
                revisitText: "You're more careful to avoid the tempests stirring.",
                isNavigable: true,
                enemyChance: 0.2,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Large Fish", "Fish"]
            },
            {
                name: "Breezy Lake Waters",
                enterText: "Harsh winds sweep against you in the water.",
                revisitText: "For once, the water is a refuge against the wind.",
                isNavigable: true,
                enemyChance: 0.2,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Large Fish", "Fish"]
            },
            {
                name: "Deep Lake Waters",
                enterText: "You have to actually swim in this spot of the lake.",
                revisitText: "Your feet don't touch the bottom.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Whale"]
            },
            {
                name: "Quiet Lake Waters",
                enterText: "The water is unnaturally quiet. You get the feeling you're being watched.",
                revisitText: "Chills run down your back.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Squid"]
            }
        ],
        pathTypes: [
            {
                name: "Calm Lake Waters",
                enterText: "The water here is especially calm.",
                revisitText: "You wade a little in the calm water.",
                isNavigable: true,
                enemyChance: 0.2,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Large Fish", "Fish"]
            },
            {
                name: "Choppy Lake Waters",
                enterText: "You struggle to stay balanced in the waters.",
                revisitText: "You're more careful to avoid the tempests stirring.",
                isNavigable: true,
                enemyChance: 0.2,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Large Fish", "Fish"]
            },
            {
                name: "Breezy Lake Waters",
                enterText: "Harsh winds sweep against you in the water.",
                revisitText: "For once, the water is a refuge against the wind.",
                isNavigable: true,
                enemyChance: 0.2,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Large Fish", "Fish"]
            },
            {
                name: "Deep Lake Waters",
                enterText: "You have to actually swim in this spot of the lake.",
                revisitText: "Your feet don't touch the bottom.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Whale"]
            },
            {
                name: "Quiet Lake Waters",
                enterText: "The water is unnaturally quiet. You get the feeling you're being watched.",
                revisitText: "Chills run down your back.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Squid"]
            }
        ],
        houseTypes: [
            {
                name: "Fishing Boat",
                enterText: "An old wooden fishing boat heads your way.",
                revisitText: "The boat is left here, forced to drift or sink.",
                isNavigable: true,
                enemyChance: 1,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Human", "Fish"]
            },
            {
                name: "Small Mariner",
                enterText: "The owner of a boat like this must be wealthy.",
                revisitText: "The mariner bobs in the lake water.",
                isNavigable: true,
                enemyChance: 1,
                secondEnemyChance: 0.5,
                additionalEnemyChance: 0.1,
                enemyPreferences: ["Human", "Cat"]
            },
            {
                name: "Rowboat",
                enterText: "A tiny rowboat drifts your way.",
                revisitText: "The rowboat is flipped over, and the oars are nowhere to be found.",
                isNavigable: true,
                enemyChance: 1,
                secondEnemyChance: 0.2,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Human", "Cat"]
            },
            {
                name: "Flat Rock",
                enterText: "Singing can be heard coming from the rock. You feel eerily drawn toward it.",
                revisitText: "The rock has fallen silent.",
                isNavigable: true,
                enemyChance: 1,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Mer"]
            }
        ],
        decorationTypes: [
            {
                name: "Sandy Beach",
                enterText: "A sandy beach that spans the entire lake.",
                revisitText: "There's a lot of gravel in this beach, too.",
                isNavigable: true,
                enemyChance: 0.15,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Penguin", "Fox", "Frog"]
            }
        ],
        riverTypes: [
            {
                name: "Calm Lake Waters",
                enterText: "The water here is especially calm.",
                revisitText: "You wade a little in the calm water.",
                isNavigable: true,
                enemyChance: 0.2,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Large Fish", "Fish"]
            },
            {
                name: "Choppy Lake Waters",
                enterText: "You struggle to stay balanced in the waters.",
                revisitText: "You're more careful to avoid the tempests stirring.",
                isNavigable: true,
                enemyChance: 0.2,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Large Fish", "Fish"]
            },
            {
                name: "Breezy Lake Waters",
                enterText: "Harsh winds sweep against you in the water.",
                revisitText: "For once, the water is a refuge against the wind.",
                isNavigable: true,
                enemyChance: 0.2,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Large Fish", "Fish"]
            },
            {
                name: "Deep Lake Waters",
                enterText: "You have to actually swim in this spot of the lake.",
                revisitText: "Your feet don't touch the bottom.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Whale"]
            },
            {
                name: "Quiet Lake Waters",
                enterText: "The water is unnaturally quiet. You get the feeling you're being watched.",
                revisitText: "Chills run down your back.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Squid"]
            }
        ],
        init : function() {
            this.child.parent = this;
            delete this.init;
            return this;
        },
        shopChance: 0.01
    },
    "Lava Wastes": {
        name: "Lava Wastes",
        minSize: 1200,
        frequency: 1,
        weather: "hot",
        transition: { "Desert": 0.3, "Desert": 0.1 },
        color: "#4C3939",
        pathColor: "#703E3E",
        houseColor: "#191414",
        decorationColor: "#",
        riverColor: "#6D4848",
        microbiomes: ["Lava Pool"],
        microbiomeCount: 6,
        pois: ["Obsidian Pillar", "Charcoal Tree"],
        poiCount: 15,
        isRiverStartPoint: false,
        isRiverAllowed: true,
        isPathAllowed: true,
        isFillerBiome: false,
        biomeSet: [],
        decoration: "none",
        variantTiles: [
            {
                name: "Charred Grass",
                enterText: "The grass here is all dead.",
                revisitText: "What could have happened here?",
                isNavigable: true,
                enemyChance: 0.05,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Large Slime", "Outlaw"]
            },
            {
                name: "Blackened Dirt",
                enterText: "The dirt is warm.",
                revisitText: "Whatever happened here seems to have been recent.",
                isNavigable: true,
                enemyChance: 0.05,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Large Slime", "Outlaw"]
            },
            {
                name: "Solidified Lava",
                enterText: "The lava is still warm, but not dangerously so.",
                revisitText: "You don't see a volcano that could have done this.",
                isNavigable: true,
                enemyChance: 0.01,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Dragon"]
            }
        ],
        pathTypes: [
            {
                name: "Soot-Covered Path",
                enterText: "Your shoes darken with each step.",
                revisitText: "There are clear footprints from where you've been.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Large Slime", "Outlaw"]
            }
        ],
        houseTypes: [
            {
                name: "Ash-Covered House",
                enterText: "The house is abandoned.",
                revisitText: "You don't see the previous owners anywhere.",
                isNavigable: true,
                enemyChance: 0.2,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Succubus"]
            }
        ],
        decorationTypes: [

        ],
        riverTypes: [
            {
                name: "Dried River Basin",
                enterText: "The water is evaporated.",
                revisitText: "Something must have happened very suddenly to cause this.",
                isNavigable: true,
                enemyChance: 0.2,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Large Slime", "Huge Slime"]
            }
        ],
        init : function() {
            this.child.parent = this;
            delete this.init;
            return this;
        },
        shopChance: 0.01
    },
    "MushroomValley": {
        name: "Mushroom Valley",
        minSize: 100,
        frequency: 15,
        weather: "temperate",
        transition: { "Desert": 0.3, "Desert": 0.1 },
        color: "#6A427C",
        pathColor: "#A389AF",
        houseColor: "#7F0000",
        decorationColor: "#",
        riverColor: "#7374F4",
        microbiomes: [],
        microbiomeCount: 0,
        pois: ["Large Mushroom"],
        poiCount: 2,
        isRiverStartPoint: false,
        isRiverAllowed: true,
        isPathAllowed: true,
        isFillerBiome: false,
        biomeSet: [],
        decoration: "none",
        variantTiles: [
            {
                name: "Squishy Mycelium",
                enterText: "Your foot sinks into the mycelium floor of the valley.",
                revisitText: "The mycelium is still squishy.",
                isNavigable: true,
                enemyChance: 0.2,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Mushroom", "Mushroom", "Fairy"]
            },
            {
                name: "Spore-Wind Clearing",
                enterText: "A gust of spores hits you as you step into the clearing.",
                revisitText: "There are somehow more spores blowing through.",
                isNavigable: true,
                enemyChance: 0.2,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Mushroom", "Mushroom", "Fairy"]
            },
            {
                name: "Red-Capped Cliffs",
                enterText: "Large, red mushrooms line the walls of the hills and cliffs.",
                revisitText: "These mushrooms sure are strange.",
                isNavigable: true,
                enemyChance: 0.2,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Mushroom", "Mushroom", "Frog"]
            }
        ],
        pathTypes: [
            {
                name: "Toadstool Path",
                enterText: "You can practically bounce along the mushrooms that lead the way.",
                revisitText: "Some of the mushrooms are bouncier than others. It must depend on color.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Mushroom", "Mushroom", "Tiny Slime", "Small Slime"]
            },
            {
                name: "Glowing Mushroom Path",
                enterText: "The glowing mushrooms do wonders for your visibility along the strange atmosphere of the valley.",
                revisitText: "None of the natives seem to want to approach the glowing mushrooms.",
                isNavigable: true,
                enemyChance: 0.05,
                secondEnemyChance: 0,
                additionalEnemyChance: 0,
                enemyPreferences: ["Naga"]
            }
        ],
        houseTypes: [
            {
                name: "Mushroom House",
                enterText: "The smell of something cooking reaches your nose.",
                revisitText: "You can still smell something cooking.",
                isNavigable: true,
                enemyChance: 1,
                secondEnemyChance: 0.25,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Human", "Mushroom", "Fairy"]
            },
            {
                name: "Stump House",
                enterText: "Someone very small lives in this stump.",
                revisitText: "Someone very small used to live in this stump.",
                isNavigable: true,
                enemyChance: 1,
                secondEnemyChance: 0.25,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Tiny Human", "Mouse", "Fairy"]
            }
        ],
        decorationTypes: [

        ],
        riverTypes: [
            {
                name: "Capped River",
                enterText: "The water is shaded by large mushrooms around the area.",
                revisitText: "You trudge through the water easily.",
                isNavigable: true,
                enemyChance: 0.15,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Fish", "Large Fish"]
            },
            {
                name: "Glowing River",
                enterText: "Undewater mushrooms create a weird portion where nothing else living wants to encroach.",
                revisitText: "You have to brace yourself with each movement.",
                isNavigable: true,
                enemyChance: 0.05,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Squid"]
            }
        ],
        init : function() {
            this.child.parent = this;
            delete this.init;
            return this;
        },
        shopChance: 0.01
    },
    "Jungle": {
        name: "Jungle",
        minSize: 500,
        frequency: 10,
        weather: "wet",
        transition: { "Mountain": 0.1, "Plains": 0.2 },
        color: "#28B73A",
        pathColor: "#84593A",
        houseColor: "#822F1F",
        riverColor: "#328EFF",
        decorationColor: "#",
        microbiomes: ["Bamboo Jungle"],
        microbiomeCount: 1,
        pois: ["Ancient Clearing", "Large Beehive"],
        poiCount: 1,
        isRiverStartPoint: false,
        isRiverAllowed: true,
        isPathAllowed: true,
        isFillerBiome: true,
        biomeSet: [],
        decoration: "none",
        variantTiles: [
            {
                name: "Humid Jungle",
                enterText: "The buzz of mosquitoes fills your ears.",
                revisitText: "Very damp.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Bee", "Wasp", "Lizard"]
            },
            {
                name: "Thick Jungle",
                enterText: "The jungle is hard to get through.",
                revisitText: "You've at least cleared your path here before.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Bee", "Wasp", "Lizard"]
            },
            {
                name: "Sweltering Jungle",
                enterText: "The heat and humidity is making the jungle uncomfortable.",
                revisitText: "You hear the croaking of far-off frogs.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Bee", "Wasp", "Lizard"]
            },
            {
                name: "Sweltering Jungle",
                enterText: "The heat and humidity is making the jungle uncomfortable.",
                revisitText: "You hear the croaking of far-off frogs.",
                isNavigable: true,
                enemyChance: 0.05,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Naga"]
            },
            {
                name: "Jungle Clearing",
                enterText: "A clearing in the jungle opens up, revealing beautiful trees and colorful birds overhead.",
                revisitText: "The clearing is still beautiful.",
                isNavigable: true,
                enemyChance: 0.15,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Giraffe"]
            }
        ],
        pathTypes: [
            {
                name: "Dirt Path",
                enterText: "The dirt path is a nice break from the wildlife.",
                revisitText: "Trusty ol' dirt paths.",
                isNavigable: true,
                enemyChance: 0.05,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Bee", "Wasp", "Lizard"]
            },
            {
                name: "Brush Path",
                enterText: "The path in front of you is covered in underbrush.",
                revisitText: "Your footsteps are quieter on the underbrush.",
                isNavigable: true,
                enemyChance: 0.05,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Bee", "Wasp", "Lizard"]
            },
            {
                name: "Uneven Path",
                enterText: "Your way forward is full of uneven land, dug up by tree roots.",
                revisitText: "You are careful not to trip on any rogue tree roots.",
                isNavigable: true,
                enemyChance: 0.05,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Bee", "Wasp", "Lizard"]
            }
        ],
        houseTypes: [
            {
                name: "Tiki Hut",
                enterText: "A tiki hut, like that of some magic creature, stands before you.",
                revisitText: "The hut is small, but has all of the essentials.",
                isNavigable: true,
                enemyChance: 1,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Naga", "Human"]
            },
            {
                name: "Adventurer's Hut",
                enterText: "Someone has set up here.",
                revisitText: "The hut lies dormant.",
                isNavigable: true,
                enemyChance: 1,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Human", "Lizard", "Fox"]
            },
            {
                name: "Treehouse",
                enterText: "An extravagant treehouse lies above you.",
                revisitText: "The treehouse rope still dangles for you.",
                isNavigable: true,
                enemyChance: 1,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Cat", "Fox"]
            }
        ],
        decorationTypes: [

        ],
        riverTypes: [
            {
                name: "Overgrown River",
                enterText: "The torrents are fast despite the trees and plantlife infesting the river.",
                revisitText: "You trudge through the water easily.",
                isNavigable: true,
                enemyChance: 0.15,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Large Fish", "Hippo"]
            },
            {
                name: "Croaking River",
                enterText: "Bullfrogs can be heard very loudly here.",
                revisitText: "You've disturbed the peace of the bullfrogs, who have fled.",
                isNavigable: true,
                enemyChance: 0.15,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Large Fish", "Bullfrog"]
            }
        ],
        init : function() {
            this.child.parent = this;
            delete this.init;
            return this;
        },
        shopChance: 0.01
    },
};

const microbiomeConfigs = {
    "Flower Field": {
        minSize: 25,
        maxSize: 45,
        color: "#FF69B4",
        houseColor: "#774646",
        generation: "scattered",
        variantTiles: [
            {
                name: "Blooming Flowers",
                enterText: "You walk through a field of blooming flowers.",
                revisitText: "The blooming flowers continue to thrive.",
                isNavigable: true,
                enemyChance: 0.5,
                secondEnemyChance: 0.02,
                additionalEnemyChance: 0.01,
                enemyPreferences: ["Bee"]
            }
        ],
        init : function() {
            this.child.parent = this;
            delete this.init;
            return this;
        }
    },
    "Cactus Patch": {
        minSize: 30,
        maxSize: 60,
        color: "#D2B48C",
        houseColor: "#774646",
        generation: "scattered",
        variantTiles: [
            {
                name: "Cluster of Cacti",
                enterText: "You find yourself among a cluster of cacti.",
                revisitText: "The cacti are as prickly as ever.",
                isNavigable: true,
                enemyChance: 0.5,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.03,
                enemyPreferences: ["Lizard"]
            }
        ],
        init : function() {
            this.child.parent = this;
            delete this.init;
            return this;
        }
    },
    "Meadow": {
        minSize: 35,
        maxSize: 55,
        color: "#489169",
        houseColor: "#774646",
        generation: "scattered",
        variantTiles: [
            {
                name: "Lush Meadow",
                enterText: "The grass here is lush and green.",
                revisitText: "The lush grass sways gently in the breeze.",
                isNavigable: true,
                enemyChance: 0.5,
                secondEnemyChance: 0.02,
                additionalEnemyChance: 0.01,
                enemyPreferences: ["Rabbit", "Deer"]
            }
        ],
        init : function() {
            this.child.parent = this;
            delete this.init;
            return this;
        }
    },
    "Bamboo Jungle": {
        minSize: 35,
        maxSize: 55,
        color: "#489169",
        houseColor: "#774646",
        generation: "scattered",
        variantTiles: [
            {
                name: "Bamboo Jungle",
                enterText: "Tall bamboo is scattered around you.",
                revisitText: "The bamboo is a wondrous sight.",
                isNavigable: true,
                enemyChance: 0.25,
                secondEnemyChance: 0.02,
                additionalEnemyChance: 0.01,
                enemyPreferences: ["Venus Fly Trap"]
            }
        ],
        init : function() {
            this.child.parent = this;
            delete this.init;
            return this;
        }
    },
    "Mire": {
        minSize: 60,
        maxSize: 90,
        color: "#8B4513",
        houseColor: "#774646",
        generation: "scattered",
        variantTiles: [
            {
                name: "Muddy Mire",
                enterText: "You wade through a murky mire.",
                revisitText: "The mire remains thick and muddy.",
                isNavigable: true,
                enemyChance: 0.2,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.03,
                enemyPreferences: ["Hippo"]
            }
        ],
        init : function() {
            this.child.parent = this;
            delete this.init;
            return this;
        }
    },
    "Mountain Taiga": {
        minSize: 60,
        maxSize: 90,
        color: "#2B5642",
        houseColor: "#774646",
        generation: "scattered",
        variantTiles: [
            {
                name: "Tall Taiga",
                enterText: "Tall spruce trees thrive in the mountain environment. You make a notch on one of the trees.",
                revisitText: "You see the notch you made earlier.",
                isNavigable: true,
                enemyChance: 0.25,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.03,
                enemyPreferences: ["Wolf"]
            }
        ],
        init : function() {
            this.child.parent = this;
            delete this.init;
            return this;
        }
    },
    "Mountain Lake": {
        minSize: 60,
        maxSize: 90,
        color: "#8FD6EF",
        houseColor: "#774646",
        generation: "blob",
        variantTiles: [
            {
                name: "Clear Lake",
                enterText: "You stare at your reflection in the mountain lake. You still look the same, despite everything.",
                revisitText: "You're not sure the last time you've ever seen water this clear.",
                isNavigable: true,
                enemyChance: 0.5,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.03,
                enemyPreferences: ["Penguin"]
            }
        ],
        init : function() {
            this.child.parent = this;
            delete this.init;
            return this;
        }
    },
    "Lava Pool": {
        minSize: 60,
        maxSize: 90,
        color: "#E05900",
        houseColor: "#191414",
        generation: "blob",
        variantTiles: [
            {
                name: "Lava Lake",
                enterText: "Bubbling lava. Maybe not the safest idea.",
                revisitText: "Bubbling lava. Maybe not the safest idea.",
                isNavigable: false,
                enemyChance: 0,
                secondEnemyChance: 0,
                additionalEnemyChance: 0,
                enemyPreferences: []
            }
        ],
        init : function() {
            this.child.parent = this;
            delete this.init;
            return this;
        }
    },
    "Outlaw Outpost": {
        minSize: 60,
        maxSize: 90,
        color: "#7C3333",
        houseColor: "#774646",
        generation: "scattered",
        variantTiles: [
            {
                name: "Outlaw House",
                enterText: "Loud noises can be heard from inside the house.",
                revisitText: "The house is much quieter.",
                isNavigable: true,
                enemyChance: 1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.03,
                enemyPreferences: ["Outlaw"]
            },
            {
                name: "Saloon",
                enterText: "As you step in, the piano music stops, and heads turn to see you.",
                revisitText: "The saloon is back to business.",
                isNavigable: true,
                enemyChance: 1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.03,
                enemyPreferences: ["Outlaw"]
            },
            {
                name: "Watch Tower",
                enterText: "The guards see you long before you see them.",
                revisitText: "The watch tower remains empty.",
                isNavigable: true,
                enemyChance: 1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.03,
                enemyPreferences: ["Outlaw"]
            }
        ],
        init : function() {
            this.child.parent = this;
            delete this.init;
            return this;
        }
    },
    "Oasis": {
        minSize: 60,
        maxSize: 90,
        color: "#93D2FF",
        houseColor: "#93D2FF",
        generation: "blob",
        variantTiles: [
            {
                name: "Clear Oasis Water",
                enterText: "The water is perfectly clear.",
                revisitText: "Beautiful oasis water shows your reflection.",
                isNavigable: true,
                enemyChance: 0.25,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.03,
                enemyPreferences: ["Horse", "Snake", "Rabbit"]
            }
        ],
        init : function() {
            this.child.parent = this;
            delete this.init;
            return this;
        }
    },
    "Frozen Lake": {
        minSize: 60,
        maxSize: 90,
        color: "#93D2FF",
        houseColor: "#93D2FF",
        generation: "blob",
        variantTiles: [
            {
                name: "Frozen Lake",
                enterText: "The ice is perfect for skating.",
                revisitText: "You're careful not to slip or strand yourself in the ice.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.03,
                enemyPreferences: ["Penguin", "Wolf"]
            }
        ],
        init : function() {
            this.child.parent = this;
            delete this.init;
            return this;
        }
    },
    "Lake Island": {
        minSize: 70,
        maxSize: 110,
        color: "#F9E193",
        houseColor: "#93D2FF",
        generation: "blob",
        variantTiles: [
            {
                name: "Lake Island",
                enterText: "A beautiful sandy island in the lake.",
                revisitText: "The beaches on this island are serene.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.03,
                enemyPreferences: ["Avian"]
            }
        ],
        init : function() {
            this.child.parent = this;
            delete this.init;
            return this;
        }
    }
};

const poiConfigs = {
    "Fairy Ring": {
        color: "#FF69B4",
        variantTiles: [
            {
                name: "Fairy Ring",
                enterText: "You realize you have stepped in some sort of artificial ring. All of a sudden, you are met with fairies.",
                revisitText: "The blooming flowers continue to thrive.",
                isNavigable: true,
                enemyChance: 1,
                secondEnemyChance: 1,
                additionalEnemyChance: 0.5,
                enemyPreferences: ["Fairy"]
            }
        ],
        init : function() {
            this.child.parent = this;
            delete this.init;
            return this;
        }
    },
    "Flower Garden": {
        color: "#FFB2B4",
        variantTiles: [
            {
                name: "Flower Garden",
                enterText: "You walk through a field of blooming flowers.",
                revisitText: "The blooming flowers continue to thrive.",
                isNavigable: true,
                enemyChance: 1,
                secondEnemyChance: 0.2,
                additionalEnemyChance: 0.1,
                enemyPreferences: ["Bee", "Pixie"]
            }
        ],
        init : function() {
            this.child.parent = this;
            delete this.init;
            return this;
        }
    },
    "Sunflower Field": {
        color: "#FFD800",
        variantTiles: [
            {
                name: "Sunflower Field",
                enterText: "A wide field of sunflowers of various heights awaits you. You trudge through, and nearly get lost in the sea of green, brown, and yellow.",
                revisitText: "You see your trail through the sunflowers here. You've definitely been here.",
                isNavigable: true,
                enemyChance: 1,
                secondEnemyChance: 0.2,
                additionalEnemyChance: 0.1,
                enemyPreferences: ["Bee", "Mouse"]
            }
        ],
        init : function() {
            this.child.parent = this;
            delete this.init;
            return this;
        }
    },
    "Bone Deposit": {
        color: "#E5E5C0",
        variantTiles: [
            {
                name: "Bone Deposit",
                enterText: "A scattered array of bones litters the ground around you. Many have bite marks.",
                revisitText: "You do not recognize what creature would have had these bones.",
                isNavigable: true,
                enemyChance: 0,
                secondEnemyChance: 0,
                additionalEnemyChance: 0,
                enemyPreferences: []
            }
        ],
        init : function() {
            this.child.parent = this;
            delete this.init;
            return this;
        }
    },
    "Old Statue": {
        color: "#302823",
        variantTiles: [
            {
                name: "Old Statue",
                enterText: "You approach the old statue. Something about it is ominous.",
                revisitText: "The old statue seems to have shifted ever-so-slightly since you last saw it.",
                isNavigable: true,
                enemyChance: 0.5,
                secondEnemyChance: 0,
                additionalEnemyChance: 0,
                enemyPreferences: ["Naga"]
            }
        ],
        init : function() {
            this.child.parent = this;
            delete this.init;
            return this;
        }
    },
    "Wildflower Field": {
        color: "#144D40",
        variantTiles: [
            {
                name: "Wildflower Field",
                enterText: "You wander into a field full of vibrant wildflowers.",
                revisitText: "The wildflowers sway gently in the breeze.",
                isNavigable: true,
                enemyChance: .5,
                secondEnemyChance: 0.2,
                additionalEnemyChance: 0.1,
                enemyPreferences: ["Deer", "Rabbit"]
            }
        ],
        init : function() {
            this.child.parent = this;
            delete this.init;
            return this;
        }
    },
    "Spruce Tree": {
        color: "#3B623A",
        variantTiles: [
            {
                name: "Spruce Tree",
                enterText: "A tall spruce tree stands before you, unphased by the tests of the tundra.",
                revisitText: "The spruce tree still stands tall.",
                isNavigable: true,
                enemyChance: 1,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.1,
                enemyPreferences: ["Pixie"]
            }
        ],
        init : function() {
            this.child.parent = this;
            delete this.init;
            return this;
        }
    },
    "Ice Cave": {
        color: "#96D3BA",
        variantTiles: [
            {
                name: "Ice Cave",
                enterText: "You hear the sound of shimmering as you step into the ice cave.",
                revisitText: "The ice cave still shimmers.",
                isNavigable: true,
                enemyChance: 1,
                secondEnemyChance: 0.2,
                additionalEnemyChance: 0.1,
                enemyPreferences: ["Fox", "Wolf"]
            }
        ],
        init : function() {
            this.child.parent = this;
            delete this.init;
            return this;
        }
    },
    "Large Mushroom": {
        color: "#EDBC87",
        variantTiles: [
            {
                name: "Large Mushroom",
                enterText: "A brown mushroom towers overhead. How do they grow so big?",
                revisitText: "You remember this mushroom, simply because of the size.",
                isNavigable: true,
                enemyChance: 1,
                secondEnemyChance: 0.2,
                additionalEnemyChance: 0.1,
                enemyPreferences: ["Pixie"]
            }
        ],
        init : function() {
            this.child.parent = this;
            delete this.init;
            return this;
        }
    },
    "Well": {
        color: "#E5E5C0",
        variantTiles: [
            {
                name: "Desert Well",
                enterText: "An old well that has long ran dry.",
                revisitText: "You wish this well had water in it.",
                isNavigable: true,
                enemyChance: 1,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.01,
                enemyPreferences: ["Fox", "Avian"]
            }
        ],
        init : function() {
            this.child.parent = this;
            delete this.init;
            return this;
        }
    },
    "Ancient Structure": {
        color: "#E2B95F",
        variantTiles: [
            {
                name: "Ancient Structure",
                enterText: "An ancient structure from a civilization long past has withstood the test of time. As you explore it, you can't help but feel you're not alone.",
                revisitText: "Best leave the structure alone, just in case.",
                isNavigable: true,
                enemyChance: 1,
                secondEnemyChance: 0.2,
                additionalEnemyChance: 0.1,
                enemyPreferences: ["Lizard"]
            }
        ],
        init : function() {
            this.child.parent = this;
            delete this.init;
            return this;
        }
    },
    "Mountain Cave": {
        color: "#404040",
        variantTiles: [
            {
                name: "Mountain Cave",
                enterText: "Your footsteps echo as you enter the mountain cave.",
                revisitText: "The mountain cave has slightly caved in since you were here.",
                isNavigable: true,
                enemyChance: 1,
                secondEnemyChance: 0.02,
                additionalEnemyChance: 0.01,
                enemyPreferences: ["Wolf"]
            }
        ],
        init : function() {
            this.child.parent = this;
            delete this.init;
            return this;
        }
    },
    "Summit": {
        color: "#FFFFFF",
        variantTiles: [
            {
                name: "Summit",
                enterText: "You reach the summit of the mountain, staring off at the landscape around you. Where <i>are</i> you, exactly?",
                revisitText: "The summit is just as beautiful as before.",
                isNavigable: true,
                enemyChance: 0.05,
                secondEnemyChance: 0.02,
                additionalEnemyChance: 0.01,
                enemyPreferences: ["Pixie"]
            }
        ],
        init : function() {
            this.child.parent = this;
            delete this.init;
            return this;
        }
    },
    "Runic Tablet": {
        color: "#B200FF",
        variantTiles: [
            {
                name: "Runic Tablet",
                enterText: "A large tablet lies in front of you, with a strange language etched in.",
                revisitText: "What could this tablet say?",
                isNavigable: true,
                enemyChance: 1,
                secondEnemyChance: 0.02,
                additionalEnemyChance: 0.01,
                enemyPreferences: ["Naga"]
            }
        ],
        init : function() {
            this.child.parent = this;
            delete this.init;
            return this;
        }
    },
    "Sunken Structure": {
        color: "#FFFFFF",
        variantTiles: [
            {
                name: "Sunken Structure",
                enterText: "Whatever this used to be, it's now deep in the bog.",
                revisitText: "The bog has claimed this old structure.",
                isNavigable: true,
                enemyChance: 0.05,
                secondEnemyChance: 0.02,
                additionalEnemyChance: 0.01,
                enemyPreferences: ["Venus Fly Trap"]
            }
        ],
        init : function() {
            this.child.parent = this;
            delete this.init;
            return this;
        }
    },
    "Quarry": {
        color: "#C0C0C0",
        variantTiles: [
            {
                name: "Quarry",
                enterText: "An old mining quarry goes as deep as you can see.",
                revisitText: "The quarry walls echo as you step near.",
                isNavigable: true,
                enemyChance: 1,
                secondEnemyChance: 0.02,
                additionalEnemyChance: 0.01,
                enemyPreferences: ["Outlaw", "Pixie"]
            }
        ],
        init : function() {
            this.child.parent = this;
            delete this.init;
            return this;
        }
    },
    "Hot Air Balloon": {
        color: "#9ECCA0",
        variantTiles: [
            {
                name: "Hot Air Balloon",
                enterText: "A small hot air balloon rises to meet you.",
                revisitText: "The hot air balloon has deflated.",
                isNavigable: true,
                enemyChance: 0.05,
                secondEnemyChance: 0.02,
                additionalEnemyChance: 0.01,
                enemyPreferences: ["Tiny Avian"]
            }
        ],
        init : function() {
            this.child.parent = this;
            delete this.init;
            return this;
        }
    },
    "Booby Trap": {
        color: "#9ECCA0",
        variantTiles: [
            {
                name: "Booby Trap",
                enterText: "A booby trap swings out to hit you. You barely dodge it before seeing your attackers.",
                revisitText: "The booby trap is already sprung.",
                isNavigable: true,
                enemyChance: 1,
                secondEnemyChance: 1,
                additionalEnemyChance: 0.2,
                enemyPreferences: ["Tiny Human"]
            }
        ],
        init : function() {
            this.child.parent = this;
            delete this.init;
            return this;
        }
    },
    "Small Island": {
        color: "#F9E193",
        variantTiles: [
            {
                name: "Small Island",
                enterText: "A small island in the otherwise large lake.",
                revisitText: "The island doesn't have much on it.",
                isNavigable: true,
                enemyChance: 1,
                secondEnemyChance: 0.02,
                additionalEnemyChance: 0.01,
                enemyPreferences: ["Bullfrog"]
            }
        ],
        init : function() {
            this.child.parent = this;
            delete this.init;
            return this;
        }
    },
    "Obsidian Pillar": {
        color: "#0F0707",
        variantTiles: [
            {
                name: "Obsidian Pillar",
                enterText: "A towering pillar of obsidian. It doesn't look natural.",
                revisitText: "The obsidian is a little reflective.",
                isNavigable: true,
                enemyChance: 1,
                secondEnemyChance: 0.02,
                additionalEnemyChance: 0.01,
                enemyPreferences: ["Pixie"]
            }
        ],
        init : function() {
            this.child.parent = this;
            delete this.init;
            return this;
        }
    },
    "Charcoal Tree": {
        color: "#1E1E1E",
        variantTiles: [
            {
                name: "Charcoal Tree",
                enterText: "It looks like this thing was torched instantly.",
                revisitText: "The tree is brittle.",
                isNavigable: true,
                enemyChance: 1,
                secondEnemyChance: 0.02,
                additionalEnemyChance: 0.01,
                enemyPreferences: ["Succubus"]
            }
        ],
        init : function() {
            this.child.parent = this;
            delete this.init;
            return this;
        }
    },
    "Ancient Clearing": {
        color: "#1E1E1E",
        variantTiles: [
            {
                name: "Ancient Clearing",
                enterText: "The remains of a stone structure sits here, covered in moss.",
                revisitText: "The structure prevails.",
                isNavigable: true,
                enemyChance: 1,
                secondEnemyChance: 0.02,
                additionalEnemyChance: 0.01,
                enemyPreferences: ["Venus Fly Trap"]
            }
        ],
        init : function() {
            this.child.parent = this;
            delete this.init;
            return this;
        }
    },
    "Large Beehive": {
        color: "#FFD800",
        variantTiles: [
            {
                name: "Large Beehive",
                enterText: "A very large beehive stands before you. A loud buzzing can be heard from within.",
                revisitText: "The structure prevails.",
                isNavigable: true,
                enemyChance: 1,
                secondEnemyChance: 0,
                additionalEnemyChance: 0,
                enemyPreferences: ["Queen Bee"]
            }
        ],
        init : function() {
            this.child.parent = this;
            delete this.init;
            return this;
        }
    }
}

const borderWallAttributes = {
    "Border Wall": {
        color: "#474747",
        variantTiles: [
            {
                name:"Border Wall",
                enterText: "The wall of the valley is too tall to scale.",
                revisitText: "The wall of the valley is too tall to scale.",
                isNavigable: false,
                enemyChance: 0,
                secondEnemyChance: 0,
                additionalEnemyChance: 0,
                enemyPreferences: []
            }
        ],
        init : function() {
            this.child.parent = this;
            delete this.init;
            return this;
        }
    }
}

const startingHutAttributes = {
    "Start": {
        color: "#774646",
        variantTiles: [
            {
                name:"Familiar Hut",
                enterText: "You find yourself in a familiar hut, although you're not sure where you are.",
                revisitText: "You have already been to this place.",
                isNavigable: true,
                enemyChance: 0,
                secondEnemyChance: 0,
                additionalEnemyChance: 0,
                enemyPreferences: []
            }
        ],
        init : function() {
            this.child.parent = this;
            delete this.init;
            return this;
        }
    }
}

const glitchAttributes = {
    "Glitch": {
        color: "#000",
        variantTiles: [
            {
                name:"Corrupted Ground",
                enterText: "The ground in this area is corrupted. Something doesn't quite feel right.",
                revisitText: "A fuzzy feeling takes over your fingers.",
                isNavigable: true,
                enemyChance: 1,
                secondEnemyChance: 0,
                additionalEnemyChance: 0,
                enemyPreferences: ["Shadow"]
            }
        ],
        init : function() {
            this.child.parent = this;
            delete this.init;
            return this;
        }
    }
}

const townAttributes = {
    "Town": {
        color: "#CCB5A7",
        pathColor: "#776A62",
        questBoardColor: "#B78B8B",
        houseColor: "#774646",
        wallColor: "#404040",
        shopChance: 0,
        biomeSet: [],
        variantTiles: [
            {
                name:"Town Grounds",
                enterText: "You walk through the town. All seems peaceful.",
                revisitText: "You walk through the town. All seems peaceful.",
                isNavigable: true,
                enemyChance: 0,
                secondEnemyChance: 0,
                additionalEnemyChance: 0,
                enemyPreferences: []
            }
        ],
        pathTypes: [
            {
                name: "Cobblestone Path",
                enterText: "You step onto the cobblestone path of the town.",
                revisitText: "The cobblestone streets are just as worn as they were earlier.",
                isNavigable: true,
                enemyChance: 0,
                secondEnemyChance: 0,
                additionalEnemyChance: 0,
                enemyPreferences: []
            }
        ],
        houseTypes: [
            {
                name: "Town House",
                enterText: "A small town house stands before you.",
                revisitText: "You recognize the town house address.",
                isNavigable: true,
                enemyChance: 1,
                secondEnemyChance: 0,
                additionalEnemyChance: 0,
                enemyPreferences: ["Human"]
            },
            {
                name: "Apartment Building",
                enterText: "A tall apartment building towers in front of you.",
                revisitText: "You recognize the address of the apartment building.",
                isNavigable: true,
                enemyChance: 1,
                secondEnemyChance: 0,
                additionalEnemyChance: 0,
                enemyPreferences: ["Avian"]
            }
        ],
        townWall: [
            {
                name: "Town Wall",
                enterText: "The wall is too tall. You should try to find an entryway.",
                revisitText: "The wall is too tall. You should try to find an entryway.",
                isNavigable: false,
                enemyChance: 0,
                secondEnemyChance: 0,
                additionalEnemyChance: 0,
                enemyPreferences: []
            }
        ],
        init : function() {
            this.child.parent = this;
            delete this.init;
            return this;
        },
    }
};

const itemConfigs = [
    {
        name: "Shrinking Potion",
        description: "Shrinks whoever is targeted by the drink. Consumption not necessary.",
        texture: "images/inventory/shrinking_potion.png",
        statEffect: "size",
        statChange: -2,
        buyPrice: 40,
        sellPrice: 20,
    },
    {
        name: "Growing Potion",
        description: "Enlarges whoever is targeted by the drink. Consumption not necessary.",
        texture: "images/inventory/growing_potion.png",
        statEffect: "size",
        statChange: 2,
        buyPrice: 40,
        sellPrice: 20,
    },
    {
        name: "Health Potion",
        description: "Restores 20 health.",
        texture: "images/inventory/health_potion.png",
        statEffect: "health",
        statChange: 20,
        buyPrice: 40,
        sellPrice: 20,
    },
    {
        name: "Large Health Potion",
        description: "Restores full health.",
        texture: "images/inventory/health_potion_large.png",
        statEffect: "health",
        statChange: 2000,
        buyPrice: 40,
        sellPrice: 20,
    },
    {
        name: "Spoiled Tonic",
        description: "Quickly empties out the drinker's stomach.",
        texture: "images/inventory/spoiled_tonic.png",
        statEffect: "hunger",
        statChange: 2000,
        buyPrice: 40,
        sellPrice: 20,
    },
    {
        name: "Filling Sandwich",
        description: "Quickly fills the eater's stomach.",
        texture: "images/inventory/filling_sandwich.png",
        statEffect: "hunger",
        statChange: -2000,
        buyPrice: 40,
        sellPrice: 20,
    },
    {
        name: "Skill Token: Skill 1",
        description: "Allows the user to add a point to one their skill.",
        texture: "images/inventory/skill_token.png",
        statEffect: "skill1",
        statChange: 1,
        buyPrice: 40,
        sellPrice: 20,
    },
    {
        name: "Skill Token: Skill 2",
        description: "Allows the user to add a point to one their skill.",
        texture: "images/inventory/skill_token.png",
        statEffect: "skill2",
        statChange: 1,
        buyPrice: 40,
        sellPrice: 20,
    },
    {
        name: "Skill Token: Skill 3",
        description: "Allows the user to add a point to one their skill.",
        texture: "images/inventory/skill_token.png",
        statEffect: "skill3",
        statChange: 1,
        buyPrice: 40,
        sellPrice: 20,
    },
    {
        name: "Skill Token: Skill 4",
        description: "Allows the user to add a point to one their skill.",
        texture: "images/inventory/skill_token.png",
        statEffect: "skill4",
        statChange: 1,
        buyPrice: 40,
        sellPrice: 20,
    },
    {
        name: "Skill Token: Skill 5",
        description: "Allows the user to add a point to one their skill.",
        texture: "images/inventory/skill_token.png",
        statEffect: "skill5",
        statChange: 1,
        buyPrice: 40,
        sellPrice: 20,
    },
    // {
    //     name: "Mana Potion",
    //     description: "Restores 20 mana.",
    //     texture: "images/inventory/mana_potion.png"
    //     statEffect: "mana",
    //     statChange: 20,
    //     buyPrice: 40,
    //     sellPrice: 20,
    // },
    // {
    //     name: "Large Mana Potion",
    //     description: "Restores full mana.",
    //     texture: "images/inventory/mana_potion_large.png"
    //     statEffect: "mana",
    //     statChange: 2000,
    //     buyPrice: 40,
    //     sellPrice: 20,
    // },
]


class Town {
    constructor(tileset, questBoard, shop, houses) {
        this.tileset = tileset;
        this.questBoard = questBoard;
        this.shop = shop;
        this.houses = houses;
        this.name = "";
        this.primarySpecies = "";
        this.population = 0;
        this.allies = [];
        this.enemies = [];
        this.standing = 0;
        //More TBD

        this.construct();
    }

    construct() {
        //TBD
    }
}

class Enemy {
    constructor(type) {
        this.type = type;
        this.name = enemyConfigs[type].name;
        this.prefix = enemyConfigs[type].prefixes[Math.floor(Math.random() * enemyConfigs[type].prefixes.length)];
        this.fullName = this.prefix + " " + this.name;
        this.maxHealth = getRandomInt(enemyConfigs[type].healthMin, enemyConfigs[type].healthMax);
        this.health = this.maxHealth;
        this.size = enemyConfigs[type].size;
        this.sizeDisplay = determineSize(this.size);
        this.resistance = enemyConfigs[type].resistance;
        this.hostile = enemyConfigs[type].hostile;
        this.fill = enemyConfigs[type].fill;
        this.willingChance = enemyConfigs[type].willingChance;
        this.neutralDialogue = enemyConfigs[type].neutralDialogue;
        this.angryDialogue = enemyConfigs[type].angryDialogue;
        this.willingDialogue = enemyConfigs[type].willingDialogue;
        this.insideNeutralDialogue = enemyConfigs[type].insideNeutralDialogue;
        this.insideAngryDialogue = enemyConfigs[type].insideAngryDialogue;
        this.insideWillingDialogue = enemyConfigs[type].insideWillingDialogue;
        this.exp = getRandomInt(enemyConfigs[type].expMin, enemyConfigs[type].expMax);
        this.digestionTurns = getRandomInt(enemyConfigs[type].digestionTurnsMin, enemyConfigs[type].digestionTurnsMax);
        this.stuffTurns = getRandomInt(enemyConfigs[type].stuffTurnsMin, enemyConfigs[type].stuffTurnsMax);
        this.strength = getRandomInt(enemyConfigs[type].strengthMin, enemyConfigs[type].strengthMax);
        this.dexterity = getRandomInt(enemyConfigs[type].dexterityMin, enemyConfigs[type].dexterityMax);
        this.intelligence = getRandomInt(enemyConfigs[type].intelligenceMin, enemyConfigs[type].intelligenceMax);
        this.charisma = getRandomInt(enemyConfigs[type].charismaMin, enemyConfigs[type].charismaMax);
        this.wisdom = getRandomInt(enemyConfigs[type].wisdomMin, enemyConfigs[type].wisdomMax);
        this.pronouns = enemyConfigs[type].pronouns[Math.floor(Math.random() * enemyConfigs[type].pronouns.length)];
        this.pronoun1 = this.pronouns[0];
        this.pronoun2 = this.pronouns[1];
        this.pronoun3 = this.pronouns[2];
        this.hasAppetite = true;

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
}

class Tile {
    constructor(x, y, biomeType, name) {
        this.coordinates = `${x},${y}`;
        this.explored = false;
        this.name = "";
        this.color = "";
        this.enterText = "";
        this.revisitText = "";
        this.enemyChance = "";
        this.secondEnemyChance = "";
        this.additionalEnemyChance = "";
        this.enemyPreferences = "";
        this.encounterType = "";
        this.item = null;
        this.enemyList = [];
        this.biome = biomeType;
        this.isTown = false;
        this.isHouse = false;
        this.isPOI = false;
        this.isShop = false;
        this.isPath = false;
        this.isRiver = false;
        this.isMicrobiome = false;
        this.isNavigable = false;
        this.isBorderWall = false;
        this.isGlitch = false;

        this.determineField(biomeType, name);
    }

    getX() {
        var split = this.coordinates.split(",");
        return parseInt(split[0]);
    }

    getY() {
        var split = this.coordinates.split(",");
        return parseInt(split[1]);
    }

    determineField(biomeType, name) {
        var biome = "";
            if (biomeConfigs[biomeType] != undefined) {
                biome = biomeConfigs[biomeType];
            }
            else if (microbiomeConfigs[biomeType] != undefined) { 
                biome = microbiomeConfigs[biomeType];
            }
            else if (poiConfigs[biomeType] != undefined) { 
                biome = poiConfigs[biomeType];
            }
            else if (biomeType === "Glitch") { 
                biome = glitchAttributes["Glitch"];
            }
            else if (biomeType === "Town") { 
                biome = townAttributes["Town"];
            }
            else if (biomeType === "Shop") { 
                biome = townAttributes["Town"];
            }
            else if (biomeType === "TownPath") { 
                biome = townAttributes["Town"];
            }
            else if (biomeType === "QuestBoard") { 
                biome = townAttributes["Town"];
            }
            else if (biomeType === "Town Wall") { 
                biome = townAttributes["Town"];
            }
            else if (biomeType === "Border Wall") { 
                biome = borderWallAttributes["Border Wall"];
            }
            else if (biomeType === "Start") { 
                biome = startingHutAttributes["Start"];
                this.item = itemConfigs[2];
            }
            else {
                biome = biomeConfigs[biomeType];
            }

        try {
            var biomePOI = biome.variantTiles[Math.floor(Math.random() * Object.keys(biome.variantTiles).length)];;
            if (biomePOI) {
                this.isPOI = true;
            }
            var biomeVariant = biome.variantTiles[Math.floor(Math.random() * Object.keys(biome.variantTiles).length)];
            var biomePathTypes = "";
            if (biome.pathTypes != null) {
                biomePathTypes = biome.pathTypes[Math.floor(Math.random() * Object.keys(biome.pathTypes).length)];
            }
            var biomeHouseTypes = "";
            if (biome.houseTypes != null) {
                biomeHouseTypes = biome.houseTypes[Math.floor(Math.random() * Object.keys(biome.houseTypes).length)];
            }
            var biomeRiverTypes = "";
            if (biome.riverTypes != null) {
                biomeRiverTypes = biome.riverTypes[Math.floor(Math.random() * Object.keys(biome.riverTypes).length)];
            }
            var biomeDecorationTypes = "";
            if (biome.decorationTypes != null) {
                biomeDecorationTypes = biome.decorationTypes[Math.floor(Math.random() * Object.keys(biome.decorationTypes).length)];
            }
            var biomeWallTypes = "";
            if (biomeType === "Town Wall") {
                biomeWallTypes = biome.townWall[Math.floor(Math.random() * Object.keys(biome.townWall).length)];
            }
        } catch (e) {
            console.log(e);
        }

        var biomeBreakdown = "";
        var tileColor = "";

        var isTown = false;
        var isHouse = false;
        var isPOI = false;
        var isShop = false;
        var isPath = false;
        var isRiver = false;
        var isBorderWall = false;
        var isMicrobiome = false;
        var isGlitch = false;

        //Path, Shop, Town, House, QuestBoard, POI, else biome/microbiome
        
        switch (name) {
            case "Path":
                biomeBreakdown = biomePathTypes;
                isPath = true;
                tileColor = biome.pathColor;
                break;
            case "River":
                biomeBreakdown = biomeRiverTypes;
                isRiver = true;
                tileColor = biome.riverColor;
                break;
            case "Shop":
                biomeBreakdown = biomeHouseTypes;
                isShop = true;
                tileColor = biome.houseColor;
                break;
            case "House":
                biomeBreakdown = biomeHouseTypes;
                isHouse = true;
                tileColor = biome.houseColor;
                break;
            case "Town":
                biomeBreakdown = biomeVariant;
                isTown = true;
                tileColor = biome.color;
                break;
            case "QuestBoard":
                biomeBreakdown = biomeHouseTypes;
                isTown = true;
                tileColor = biome.houseColor;
                break;
            case "Town Wall":
                biomeBreakdown = biomeWallTypes;
                isTown = true;
                tileColor = biome.wallColor;
                break;
            case "Border Wall":
                biomeBreakdown = biomeVariant;
                isBorderWall = true;
                tileColor = biome.color;
                break;
            case "Start":
                biomeBreakdown = biomeVariant;
                isHouse = true;
                tileColor = biome.color;
                break;
            case "POI":
                biomeBreakdown = biomePOI;
                isPOI = true;
                tileColor = biome.color;
                break;
            case "Microbiome":
                biomeBreakdown = biomeVariant;
                isMicrobiome = true;
                tileColor = biome.color;
                break;
            case "Decoration":
                biomeBreakdown = biomeDecorationTypes;
                tileColor = biome.decorationColor;
                break;
            case "Glitch":
                biomeBreakdown = biomeVariant;
                tileColor = biome.color;
                isGlitch = true;
                break;
            default:
                biomeBreakdown = biomeVariant;
                tileColor = biome.color;
        }

        this.name = biomeBreakdown.name;
        this.color = tileColor;
        this.enterText = biomeBreakdown.enterText;
        this.revisitText = biomeBreakdown.revisitText;
        this.enemyChance = biomeBreakdown.enemyChance;
        this.secondEnemyChance = biomeBreakdown.secondEnemyChance;
        this.additionalEnemyChance = biomeBreakdown.additionalEnemyChance;
        this.enemyPreferences = biomeBreakdown.enemyPreferences;
        this.isNavigable = biomeBreakdown.isNavigable;
        this.isTown = isTown;
        this.isHouse = isHouse;
        this.isPOI = isPOI;
        this.isShop = isShop;
        this.isPath = isPath;
        this.isRiver = isRiver;
        this.isMicrobiome = isMicrobiome;
        this.isBorderWall = isBorderWall;
        this.isGlitch = isGlitch;
        this.encounterType = this.determineEncounterType();
        if (this.isPOI) {
            poiList.push(this);
        }
        if (this.isTown) {
            townList.push(this);
        }
        if (this.encounterType === "item" && this.item == null) {
            this.item = itemConfigs[Math.floor(Math.random() * itemConfigs.length)];
        }
    }

    determineEncounterType() {
        if (this.item !== null) return "item";
        if (this.isTown) return "passive";
        if (this.isShop) return "shop";
        if (this.enemyChance > Math.random()) return "encounter";
        if (Math.random() < 0.1) return "item";
        return "none";
    }
}

function getTileByCoordinates(x, y) {
    var tile = null;
    tileset.find(function(e) {
        if (e.coordinates === `${x},${y}`) {
            tile = e;
        }
    });
    return tile;
}

function removeTile(tile) {
    tileset = tileset.filter(function(item) {
        return item !== tile;
    })
}

// Helper functions
function createEmptyGrid(size) {
    return Array.from({ length: size }, () => Array(size).fill(null));
}

function createSudoGrid(size) {
    let emptyGrid = createEmptyGrid(size);
    for (let x = 0 ; x < size ; x++) {
        for (let y = 0 ; y < size ; y++) {
            emptyGrid[x][y] = [x,y];
        }
    }
    return emptyGrid;
}

function getNeighbors(x, y) {
    return [
        [x + 1, y],
        [x - 1, y],
        [x, y + 1],
        [x, y - 1],
    ];
}

function isWithinGrid(x, y, size) {
    return x >= 1 && y >= 1 && x < size - 1 && y < size - 1;
}

function getValidPathNeighbors(x, y, biomeType, grid) {
    return getNeighbors(x, y).filter(([nx, ny]) => {
        return (
            isWithinGrid(nx, ny, grid.length)
        );
    });
}

function getValidRiverNeighbors(x, y, grid) {
    return getNeighbors(x, y).filter(([nx, ny]) => {
        return (
            isWithinGrid(nx, ny, grid.length)
        );
    });
}

function isInTown(x, y, grid) {
    // Check if the tile at (x, y) exists and is part of a town
    return isWithinGrid(x, y, grid.length) && grid[x][y] && grid[x][y].isTown;
}

function getHouseType(pathType) {
    // Example implementation; should be biome-dependent
    switch (pathType) {
        case "Forest": return "ForestHouse";
        case "Desert": return "DesertHouse";
        default: return "GenericHouse";
    }
}

function generateBorderWall(grid, emptyGrid) {
    for (let x = 0; x < grid.length; x++) {
        let currentTile = getTileByCoordinates(x, 0);
        if (currentTile == null) removeTile(currentTile);
        let newTile = new Tile(x, 0, "Border Wall", "Border Wall");
        grid[x][0] = newTile;
        emptyGrid[x][0] = "filled";
        tileset.push(newTile);
        currentTile = getTileByCoordinates(x, grid.length-1);
        if (currentTile == null) removeTile(currentTile);
        newTile = new Tile(x, grid.length-1, "Border Wall", "Border Wall");
        grid[x][grid.length-1] = newTile;
        emptyGrid[x][grid.length-1] = "filled";
        tileset.push(newTile);
    }
    for (let y = 0; y < grid.length; y++) {
        let currentTile = getTileByCoordinates(0, y);
        if (currentTile == null) removeTile(currentTile);
        let newTile = new Tile(0, y, "Border Wall", "Border Wall");
        grid[0][y] = newTile;
        emptyGrid[0][y] = "filled";
        tileset.push(newTile);
        currentTile = getTileByCoordinates(grid.length-1, y);
        if (currentTile == null) removeTile(currentTile);
        newTile = new Tile(grid.length-1, y, "Border Wall", "Border Wall");
        emptyGrid[grid.length-1][y] = "filled";
        grid[grid.length-1][y] = newTile;
        tileset.push(newTile);
    }
}

function generateStartingHut(grid, emptyGrid) {
    let x = grid.length / 2;
    let y = grid.length / 2;
    currentTile = getTileByCoordinates(x, y);
    if (currentTile == null) removeTile(currentTile);
    newTile = new Tile(x, y, "Start", "Start");
    grid[x][y] = newTile;
    emptyGrid[x][y] = "filled";
    tileset.push(newTile);

}

function generateMicrobiome(biome, biomeType, grid, emptyGrid) {
    let microbiomeCount = biomeType[1].microbiomeCount;
    if (microbiomeCount == 0) return;
    while (microbiomeCount-- > 0) {
        let microbiomeType = biomeType[1].microbiomes[Math.floor(Math.random() * biomeType[1].microbiomes.length)];
        let microbiomeSize = microbiomeConfigs[microbiomeType].minSize * Math.floor(Math.random() * 10);
        let size = 0;
        let startTile = biome[Math.floor(Math.random() * biome.length)];
        let x = startTile.getX();
        let y = startTile.getY();
    
        createMicrobiomeTile(x, y);
    
        let frontier = [[x, y]];
        var lastX = x;
        var lastY = y;
        let badAttempts = 0;
    
        while (size < microbiomeSize && frontier.length > 0 && badAttempts < maxBadAttempts) {
            const [x, y] = frontier[Math.floor(Math.random() * frontier.length)];
    
            const validNeighbors = getValidNeighbors(x, y);
            if (validNeighbors.length > 0 ) {
                const [nx, ny] = validNeighbors[Math.floor(Math.random() * validNeighbors.length)];
                let targetTile = getTileByCoordinates(nx, ny);
                if (isWithinGrid(nx, ny, grid.length) && (Math.random() < .5 || microbiomeConfigs[microbiomeType].generation === "blob") && targetTile?.biome === biomeType[1].name) {
                    createMicrobiomeTile(nx, ny);
                    frontier.push([nx, ny]);
                    lastX = ny;
                    lastY = ny;
                } else {
                    badAttempts++;
                }
            }
    
            // To prevent infinite loop in case of dead ends
            frontier = frontier.filter(([fx, fy]) => getValidNeighbors(fx, fy).length > 0);
        }

        function getValidNeighbors(x, y) {
            const possibleNeighbors = [
                [x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1],
                [x + 1, y + 1], [x - 1, y - 1], [x + 1, y - 1], [x - 1, y + 1]
            ];
    
            return possibleNeighbors.filter(([nx, ny]) => 
                isWithinGrid(nx, ny, grid.length)
            );
        }

        function createMicrobiomeTile(nx, ny) {
            if (!isWithinGrid(nx, ny, grid.length)) return;
            size++;
            let currentTile = getTileByCoordinates(nx, ny);
            if (currentTile !== null) removeTile(currentTile);
            let newTile = new Tile(nx, ny, microbiomeType, "Microbiome");
            grid[nx][ny] = newTile;
            emptyGrid[nx][ny] = "filled";
            tileset.push(newTile);
        }
    }
}

function generateTown(x, y, grid, emptyGrid) {
    console.log("TOWN RUN: ", x, y);
    // Town dimensions and layout
    let townWalls = [];

    //Create Town tiles
    for (let tx = x - townWidth / 2 - 1; tx <= x + townWidth / 2 + 1; tx++) {
        for (let ty = y - townHeight / 2 - 1; ty <= y + townHeight / 2 + 1; ty++) {
            let currentTile = getTileByCoordinates(tx, ty);
            if (currentTile != null) {
                removeTile(currentTile);
            }
            if ((tx == x - townWidth / 2 - 1) || (tx == x + townWidth / 2 + 1)) {
                //Town Wall
                let newTile = new Tile(tx, ty, "Town Wall", "Town Wall"); // Town wall
                grid[tx][ty] = newTile;
                emptyGrid[tx][ty] = "filled";
                townWalls.push(grid[tx][ty]);
            } else if ((ty == y - townHeight / 2 - 1) || (ty == y + townHeight / 2 + 1)) {
                let newTile = new Tile(tx, ty, "Town Wall", "Town Wall"); // Town wall
                grid[tx][ty] = newTile;
                emptyGrid[tx][ty] = "filled";
                townWalls.push(grid[tx][ty]);
            } else if (Math.random() < 0.5) {
                let newTile = new Tile(tx, ty, "TownPath", "Path"); // Town Path
                grid[tx][ty] = newTile;
                emptyGrid[tx][ty] = "filled";
            } else if (Math.random() < 0.3) {
                generateHouses(tx, ty, "Town", grid, emptyGrid);
            } else {
                let newTile = new Tile(tx, ty, "Town", "Town"); // Town
                grid[tx][ty] = newTile;
                emptyGrid[tx][ty] = "filled";
            }
            tileset.push(grid[tx][ty]);
            townAttributes['Town'].biomeSet.push(grid[tx][ty])
        }
    }

    // Create TownPath tiles on opposite sides
    let tile1 = townWalls[Math.floor(Math.random() * townWalls.length)];
    let tile2 = townWalls[Math.floor(Math.random() * townWalls.length)];

    let tile1X = tile1.getX();
    let tile1Y = tile1.getY();
    let tile2X = tile2.getX();
    let tile2Y = tile2.getY();

    removeTile(tile1);
    let newTile1 = new Tile(tile1X, tile1Y, "TownPath", "Path");
    grid[tile1X][tile1Y] = newTile1;
    emptyGrid[tile1X][tile1Y] = "filled";
    tileset.push(newTile1);
    removeTile(tile2);
    let newTile2 = new Tile(tile2X, tile2Y, "TownPath", "Path");
    grid[tile2X][tile2Y] = newTile2;
    emptyGrid[tile2X][tile2Y] = "filled";
    tileset.push(newTile2);

    generatePath(tile1X, tile1Y, townList, poiList, grid, emptyGrid);
    generatePath(tile2X, tile2Y, townList, poiList, grid, emptyGrid);
    
    placeSpecialBuildings(x, y, townWidth, townHeight, grid, emptyGrid);
    return true;
}

function placeSpecialBuildings(x, y, width, height, grid, emptyGrid) {
    function placeBuilding(type) {
        let bx = x + Math.floor(Math.random() * width) - width / 2;
        let by = y + Math.floor(Math.random() * height) - height / 2;
        let currentTile = getTileByCoordinates(bx, by);
        if (currentTile != null) {
            removeTile(currentTile);
        }
        let newTile = new Tile(bx, by, type, type);
        grid[bx][by] = newTile;
        emptyGrid[bx][by] = "filled";
        tileset.push(newTile);
    }

    placeBuilding("Shop");
    placeBuilding("QuestBoard");
}

function generateHouses(x, y, biomeType, grid, emptyGrid) {

    var biomeConfig = "";
    if (biomeConfigs[biomeType] != undefined) {
        biomeConfig = biomeConfigs[biomeType];
    } else {
        biomeConfig = townAttributes;
    }

    let houseCount = Math.floor(Math.random() * 3) + 1;

    for (let i = 0; i < houseCount; i++) {
        let houseType = null;

        if (Math.random() < biomeConfig.shopChance && !isInTown(x, y, grid) && isWithinGrid(x, y, grid.length)) {
            houseType = "Shop";
        } else {
            houseType = "House";
        }

        var currentTile = getTileByCoordinates(x, y);
        if (currentTile != null) {
            removeTile(currentTile);
        }
        var houseTile = new Tile(x, y, biomeType, houseType);
        grid[x][y] = houseTile;
        emptyGrid[x][y] = "filled";
        tileset.push(houseTile);
    }
}

function generatePointsOfInterest(biome, biomeType, grid, emptyGrid) {
    let poiCount = poiBiomeCount;

    while (poiCount-- > 0) {
        let tile = biome[Math.floor(Math.random() * biome.length)];
        let x = tile.getX();
        let y = tile.getY();
        removeTile(tile);

        let poiListLength = Object.keys(biomeType[1].pois).length;
        let poiType = biomeType[1].pois[Math.floor(Math.random() * poiListLength)];
        const poiTile = new Tile(x, y, poiType, "POI");
        grid[x][y] = poiTile;
        emptyGrid[x][y] = poiTile;
        tileset.push(poiTile);
    }
}

function generateRandomHouses(biome, biomeType, grid, emptyGrid) {
    let houseCount = poiHouseCount;

    while (houseCount > 0) {
        let tile = biome[Math.floor(Math.random() * biome.length)];
        if (!tile.isPOI) {
            let x = tile.getX();
            let y = tile.getY();
            generateHouses(x, y, biomeType[0], grid, emptyGrid);
            houseCount--;
        }
    }
}

function createRiver(startX, startY, grid) {
    let currentX = startX;
    let currentY = startY;

    while (true) {
        if (!isWithinGrid(currentX, currentY, grid.length)) break;

        if (grid[currentX][currentY] === "Freezing") {
            grid[currentX][currentY] = "Frozen River";
        } else {
            grid[currentX][currentY] = "River";
        }

        let neighbors = getValidRiverNeighbors(currentX, currentY, grid);
        if (neighbors.length === 0) break; // Stop if no valid neighbors

        [currentX, currentY] = neighbors[Math.floor(Math.random() * neighbors.length)];

        // End river if it hits a lake microbiome
        if (grid[currentX][currentY] === "Lake") break;
    }
}
function placeBiome(biomeKey, startX, startY, grid, emptyGrid) {
    if (!biomeKey) return;

    const biome = biomeConfigs[biomeKey];
    let tilesPlaced = 0;
    let biomeTiles = [];

    function placeTile(x, y) {
        const newTile = new Tile(x, y, biomeKey, biomeKey);
        tileset.push(newTile);
        biomeTiles.push(newTile);
        grid[x][y] = newTile;
        emptyGrid[x][y] = "filled";
        tilesPlaced++;
    }

    function placeDecorationTile(x, y) {
        const newTile = new Tile(x, y, biomeKey, "Decoration");
        tileset.push(newTile);
        biomeTiles.push(newTile);
        grid[x][y] = newTile;
        emptyGrid[x][y] = "filled";
    }

    function getValidNeighbors(x, y) {
        const possibleNeighbors = [
            [x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1],
            [x + 1, y + 1], [x - 1, y - 1], [x + 1, y - 1], [x - 1, y + 1]
        ];

        return possibleNeighbors.filter(([nx, ny]) => 
            isWithinGrid(nx, ny, grid.length) && 
            grid[nx][ny] == null
        );
    }

    function getBiomeNeighbors(x, y) {
        const possibleNeighbors = [
            [x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]
        ];

        
        return possibleNeighbors.filter(([nx, ny]) => {
            let tile = getTileByCoordinates(nx, ny);
            return isWithinGrid(nx, ny, gameInfo.gridSize) && (tile === null || tile.biome !== biomeKey) && nx < gameInfo.gridSize && ny < gameInfo.gridSize
        });
    }

    function addBiomeDecorations() {
        if (biome.decoration === "none") {
            return;
        }
        if (biome.decoration === "border") {
            for (let tile of biomeTiles) {
                let neighborList = getBiomeNeighbors(tile.getX(), tile.getY());
                if (neighborList.length > 0) {
                    removeTile(tile);
                    biomeTiles = biomeTiles.filter(item => item !== tile);
                    placeDecorationTile(tile.getX(), tile.getY());
                }
            }
        }
    }

    placeTile(startX, startY);

    let frontier = [[startX, startY]];

    const biomeDeterminedSize = Math.ceil(biome.minSize * (1 + ((1 + Math.random()) * 0.3)) * gameInfo.gridSize / gridSizeRatio);
    var lastX = startX;
    var lastY = startY;
    let badAttempts = 0;

    while (tilesPlaced < biomeDeterminedSize && frontier.length > 0 && badAttempts < maxBadAttempts) {
        const [x, y] = frontier[Math.floor(Math.random() * frontier.length)];

        const validNeighbors = getValidNeighbors(x, y);
        if (validNeighbors.length > 0 ) {
            const [nx, ny] = validNeighbors[Math.floor(Math.random() * validNeighbors.length)];
            if (isWithinGrid(nx, ny, gameInfo.gridSize) && getTileByCoordinates(nx, ny) == null) {
                placeTile(nx, ny);
                frontier.push([nx, ny]);
                lastX = ny;
                lastY = ny;
            } else {
                badAttempts++;
            }
        }

        // To prevent infinite loop in case of dead ends
        frontier = frontier.filter(([fx, fy]) => getValidNeighbors(fx, fy).length > 0);
    }

    addBiomeDecorations();

    biomeConfigs[biomeKey].biomeSet.push(biomeTiles);
    return [lastX, lastY];
}    


// Main function to generate the grid
function generateBiomes(emptyGrid) {
    console.log("BEGIN RUN");
    const grid = createEmptyGrid(gameInfo.gridSize);
    emptyGrid = createSudoGrid(gameInfo.gridSize);

    emptyGrid = emptyGrid.map(k => k.filter(e => e !== 'filled'));

    generateBorderWall(grid, emptyGrid);

    let biomes = Object.keys(biomeConfigs);
    let completedBiomeList = [];
    let nextBiomeKey = "Forest";
    let loadingDisplay = document.getElement
    placeBiome(nextBiomeKey, gameInfo.gridSize / 2, gameInfo.gridSize / 2, grid, emptyGrid)
    completedBiomeList.push(nextBiomeKey);

    for (var biome of biomes) {
        if (!biomeConfigs[biome].isFillerBiome) {
            let frequency = biomeConfigs[biome].frequency * gameInfo.gridSize / gridSizeRatio;
            let frequencyLoop = 0;
            let coordX = "";
            let coordY = "";
            console.log("RUNNING BIOME", biome);
            while ( frequencyLoop < frequency) {
                coordX = Math.floor(Math.random() * gameInfo.gridSize);
                coordY = Math.floor(Math.random() * gameInfo.gridSize);
                if (isWithinGrid(coordX, coordY, gameInfo.gridSize) && getTileByCoordinates(coordX, coordY) == null) {
                    frequencyLoop++;
                    placeBiome(biome, coordX, coordY, grid, emptyGrid)
                }
            }
        }
    }

    console.log("DONE MAIN BIOMES")

    function recursiveFill() {
        emptyGrid = emptyGrid.map(k => k.filter(e => e !== 'filled'));
        for (let ax = 1 ; ax < emptyGrid.length - 1 ; ax++) {
            for (let ay = 0 ; ay < emptyGrid[ax].length ; ay++) {
                let firstItem = emptyGrid[ax][ay];
                if (getTileByCoordinates(firstItem[0], firstItem[1]) == null) {
                    let x = firstItem[0];
                    let y = firstItem[1];
                    placeBiome("Jungle", x, y, grid, emptyGrid);
                    emptyGrid = emptyGrid.map(k => k.filter(e => e !== 'filled'));
                }
            }
        }
    }

    function glitchFill() {
        glitchGrid = grid.map(k => k.filter(e => e == null));
        let glitchCount = 0;
        for (let ax = 1 ; ax < glitchGrid.length - 1 ; ax++) {
            for (let ay = 0 ; ay < glitchGrid[ax].length ; ay++) {
                if (glitchGrid[ax][ay] == null) {
                    let x = ax;
                    let y = ay;
                    let newTile = new Tile(x,y,"Glitch","Glitch");
                    grid[x][y] = newTile;
                    tileset.push(newTile);
                    glitchCount++;
                }
            }
        }
        while(glitchCount <= glitchGoal) {
            let x = Math.floor(Math.random() * (gameInfo.gridSize - 1)) + 1;
            let y = Math.floor(Math.random() * (gameInfo.gridSize - 1)) + 1;
            if (x !== gameInfo.gridSize / 2 && y !== gameInfo.gridSize / 2) {
                let currentTile = getTileByCoordinates(x,y);
                removeTile(currentTile);
                let newTile = new Tile(x,y,"Glitch","Glitch");
                grid[x][y] = newTile;
                tileset.push(newTile);
                glitchCount++;
            }
        }
    }

    recursiveFill();
    glitchFill();

    console.log("DONE RECURSIVE FILL")

    function findMountainStarts() {
        let mountainTiles = [];
        for (var biome of biomeConfigs['Mountain'].biomeSet) {
            let randomTile = biome[Math.floor(Math.random() * biome.length)];
            mountainTiles.push(randomTile);
        }
        return mountainTiles;
    }

    // Find mountain tiles and start rivers from them
    let mountainStarts = findMountainStarts();
    for (var tile of mountainStarts) {
        generateRiver(tile.getX(), tile.getY(), grid, emptyGrid);
    }

    console.log("DONE MOUNTAINS");

    // Generate points of interest, houses, microbiomes for each biome
    for (var biomeType of Object.entries(biomeConfigs)) {
        let biomeSetLength = biomeType[1].biomeSet.length;

        for (var i = 0 ; i < biomeSetLength ; i++) {

            generatePointsOfInterest(biomeType[1].biomeSet[i], biomeType, grid, emptyGrid);
            generateRandomHouses(biomeType[1].biomeSet[i], biomeType, grid, emptyGrid);
            generateMicrobiome(biomeType[1].biomeSet[i], biomeType, grid, emptyGrid)
        }
    }

    console.log("DONE POI");

    function checkTownCoord(x, y) {
        let tile = getTileByCoordinates(x, y);
        let filtered = null;
        filtered = townAttributes['Town'].biomeSet.filter(item => item == tile);
        if (filtered[0] !== undefined) {
            return true;
        }
        return false;
    }

    // Generate towns
    let townLoop = 0;
    while (townLoop < townCount) {
        let generated = false;
        while (!generated) {
            let x = Math.floor((Math.random() * gameInfo.gridSize));
            let y = Math.floor((Math.random() * gameInfo.gridSize));
            let isOutsideBorder = (x - townWidth / 2 - 1) > 0 && (x + townWidth / 2 + 1) < gameInfo.gridSize && (y - townHeight / 2 - 1) > 0 && (y + townHeight / 2 + 1) < gameInfo.gridSize? false : true;
            let overLap1 = checkTownCoord(x + (townWidth / 2) + townBuffer, y + (townHeight / 2) + townBuffer);
            let overLap2 = checkTownCoord(x - (townWidth / 2) - townBuffer, y + (townHeight / 2) + townBuffer);
            let overLap3 = checkTownCoord(x + (townWidth / 2) + townBuffer, y - (townHeight / 2) - townBuffer);
            let overLap4 = checkTownCoord(x - (townWidth / 2) - townBuffer, y - (townHeight / 2) - townBuffer);
            let overLap5 = checkTownCoord(x + (townWidth / 2) + 1, y + (townHeight / 2) + 1);
            let overLap6 = checkTownCoord(x - (townWidth / 2) - 1, y + (townHeight / 2) + 1);
            let overLap7 = checkTownCoord(x + (townWidth / 2) + 1, y - (townHeight / 2) - 1);
            let overLap8 = checkTownCoord(x - (townWidth / 2) - 1, y - (townHeight / 2) - 1);
            let centerOverlap = false;
            if (x > (gameInfo.gridSize / 2) - 20 && x < (gameInfo.gridSize / 2) + 20) {
                if (y > (gameInfo.gridSize / 2) - 20 && y < (gameInfo.gridSize / 2) + 20) {
                    centerOverlap = true;
                }
            }

            if (!isOutsideBorder && !centerOverlap && !overLap1 && !overLap2 && !overLap3 && !overLap4 && !overLap5 && !overLap6 && !overLap7 && !overLap8 && ((x - townWidth / 2) > 120 || (x + townWidth / 2) < 80) && ((y - townHeight / 2) > 120 || (y + townHeight / 2) < 80)) {
                generateTown(x, y, grid, emptyGrid);
                generated = true;
            }
        }
        townLoop++;
    }

    console.log("DONE TOWN");

    const pointsOfInterest = poiList;
    const towns = townList;

    // Generate paths based on the grid and tileset
    generatePaths(pointsOfInterest, towns, grid, emptyGrid);
    generateRivers(grid, emptyGrid);

    generateStartingHut(grid, emptyGrid);
    
    //renderGrid(grid);

    return grid;
}

// Function to generate paths in the grid
function generatePaths(towns, pointsOfInterest, grid, emptyGrid) {
    let centerX = Math.floor(grid.length / 2);
    let centerY = Math.floor(grid[0].length / 2);

    // Generate initial path from the center
    generatePath(centerX, centerY, towns, pointsOfInterest, grid, emptyGrid);

    // Generate additional random paths
    for (let i = 0; i < maxPaths; i++) {
        let startX = Math.floor(Math.random() * grid.length);
        let startY = Math.floor(Math.random() * grid[0].length);
        console.log("RUNNING PATH:", i);
        generatePath(startX, startY, towns, pointsOfInterest, grid, emptyGrid);
    }
}

function generatePath(startX, startY, towns, pointsOfInterest, grid, emptyGrid) {
    let x = startX;
    let y = startY;
    let pathLength = 0;

    // Define primary direction preferences
    var directionMath = Math.random();
    var primaryDirection = "";
    if (directionMath < .2) {
        primaryDirection = "right";
    } else if (directionMath < .4) {
        primaryDirection = "down";
    } else if (directionMath < .6) {
        primaryDirection = "left";
    } else if (directionMath < .8) {
        primaryDirection = "up-";
    } else if (directionMath < .85) {
        primaryDirection = "up-right";
    } else if (directionMath < .9) {
        primaryDirection = "down-left";
    } else if (directionMath < .95) {
        primaryDirection = "down-right";
    } else {
        primaryDirection = "up-left";
    }
    const directions = ["up", "down", "left", "right", "up-left", "up-right", "down-left", "down-right"];

    // Function to determine the next direction based on primary direction and crossroads
    function getNextDirection(x, y, previousDirection, towns, grid, emptyGrid, pointsOfInterest, pathPlacement) {
        let possibleDirections = [...directions];
        
        // Exclude the reverse direction to prevent backtracking

        if(!pathPlacement) {
            switch (previousDirection) {
                case "up": possibleDirections = possibleDirections.filter(dir => dir !== previousDirection); break;
                case "down": possibleDirections = possibleDirections.filter(dir => dir !== previousDirection); break;
                case "left": possibleDirections = possibleDirections.filter(dir => dir !== previousDirection); break;
                case "right": possibleDirections = possibleDirections.filter(dir => dir !== previousDirection); break;
                case "up-left": possibleDirections = possibleDirections.filter(dir => dir !== previousDirection); break;
                case "up-right": possibleDirections = possibleDirections.filter(dir => dir !== previousDirection); break;
                case "down-left": possibleDirections = possibleDirections.filter(dir => dir !== previousDirection); break;
                case "down-right": possibleDirections = possibleDirections.filter(dir => dir !== previousDirection); break;
            }
        } else {
            switch (previousDirection) {
                case "up": possibleDirections = possibleDirections.filter(dir => dir !== "down"); break;
                case "down": possibleDirections = possibleDirections.filter(dir => dir !== "up"); break;
                case "left": possibleDirections = possibleDirections.filter(dir => dir !== "right"); break;
                case "right": possibleDirections = possibleDirections.filter(dir => dir !== "left"); break;
                case "up-left": possibleDirections = possibleDirections.filter(dir => dir !== "down-right"); break;
                case "up-right": possibleDirections = possibleDirections.filter(dir => dir !== "down-left"); break;
                case "down-left": possibleDirections = possibleDirections.filter(dir => dir !== "up-right"); break;
                case "down-right": possibleDirections = possibleDirections.filter(dir => dir !== "up-left"); break;
            }
        }

        // If the path length exceeds the threshold, create a crossroad
        if (pathLength % 40 === 0 && Math.random() < .5) {
            return createCrossroad(x, y, grid, emptyGrid);
        }

        // Prefer primary direction but fallback to random direction if necessary
        if (Math.random() < 0.7) {
            return primaryDirection;
        }

        // Move towards the closest town or POI if they exist
        if (towns != null && pointsOfInterest != null) {
            let target = getClosestPoint(x, y, towns.concat(pointsOfInterest));
            if (target) {
                if (x < target.x && y < target.y && possibleDirections.includes("down-right")) return "down-right";
                if (x < target.x && y > target.y && possibleDirections.includes("up-right")) return "up-right";
                if (x > target.x && y < target.y && possibleDirections.includes("down-left")) return "down-left";
                if (x > target.x && y > target.y && possibleDirections.includes("up-left")) return "up-left";
                if (x < target.x && possibleDirections.includes("right")) return "right";
                if (x > target.x && possibleDirections.includes("left")) return "left";
                if (y < target.y && possibleDirections.includes("down")) return "down";
                if (y > target.y && possibleDirections.includes("up")) return "up";
            }
        }

        // Fall back to a random direction
        return possibleDirections[Math.floor(Math.random() * possibleDirections.length)];
    }

    function createCrossroad(x, y, grid) {
        let crossroadDirections = [];
        if (y > 0 && !getTileByCoordinates(x, y - 1)?.isPath) crossroadDirections.push("up");
        if (y < grid[0].length - 1 && !getTileByCoordinates(x, y + 1)?.isPath) crossroadDirections.push("down");
        if (x > 0 && !getTileByCoordinates(x - 1, y)?.isPath) crossroadDirections.push("left");
        if (x < grid.length - 1 && !getTileByCoordinates(x + 1, y)?.isPath) crossroadDirections.push("right");
        if (x > 0 && y > 0 && !getTileByCoordinates(x - 1, y - 1)?.isPath) crossroadDirections.push("up-left");
        if (x > 0 && y < grid[0].length - 1 && !getTileByCoordinates(x - 1, y + 1)?.isPath) crossroadDirections.push("down-left");
        if (x < grid.length - 1 && y > 0 && !getTileByCoordinates(x + 1, y - 1)?.isPath) crossroadDirections.push("up-right");
        if (x < grid.length - 1 && y < grid[0].length - 1 && !getTileByCoordinates(x + 1, y + 1)?.isPath) crossroadDirections.push("down-right");

        if (crossroadDirections.length > 0) {
            return crossroadDirections[Math.floor(Math.random() * crossroadDirections.length)];
        }

        // No crossroad possible, fallback to previous direction
        return primaryDirection;
    }

    let previousDirection = primaryDirection;
    let attempts = 0;
    while (pathLength < maxPathLength && isWithinGrid(x,y, grid.length) && attempts < maxPathAttempts) {

        // Remove 2x2 blocks by checking adjacent tiles
        let pathPlacement = allowPathPlacement(x,y);
        if (pathPlacement) {
            // Create a path tile at the current location
            let tileCurrent = getTileByCoordinates(x, y);
            if (tileCurrent) {
                removeTile(tileCurrent);
            }
            try {
                var newTile = new Tile(x, y, tileCurrent.biome, "Path");
                grid[x][y] = newTile;
                emptyGrid[x][y] = "filled";
                tileset.push(newTile);
            } catch (e) {
                var newTile = new Tile(x, y, 'Forest', "Path");
                grid[x][y] = newTile;
                emptyGrid[x][y] = "filled";
                tileset.push(newTile);
            }
            pathLength++;

            //Attempt a House Placement on chance
            if (Math.random() < houseChance) {
                let houseLocation = getHouseLocation(x, y);
                if (houseLocation != null) {
                    let currentTile = getTileByCoordinates(houseLocation.x, houseLocation.y);
                    generateHouses(houseLocation.x, houseLocation.y, currentTile.biome, grid, emptyGrid);
                }
            }
        } else {
            attempts++;
        }

        // Determine the next direction
        let nextDirection = getNextDirection(x, y, previousDirection, towns, grid, pointsOfInterest, pathPlacement);
        previousDirection = nextDirection;

        // Apply the movement in the selected direction
        switch (nextDirection) {
            case "up": if (y > 0) y--; break;
            case "down": if (y < grid[0].length - 1) y++; break;
            case "left": if (x > 0) x--; break;
            case "right": if (x < grid.length - 1) x++; break;
            case "up-left": if (x > 0 && y > 0) { x--; y--; } break;
            case "up-right": if (x < grid.length - 1 && y > 0) { x++; y--; } break;
            case "down-left": if (x > 0 && y < grid[0].length - 1) { x--; y++; } break;
            case "down-right": if (x < grid.length - 1 && y < grid[0].length - 1) { x++; y++; } break;
        }
    }
}

function generateRivers(grid, emptyGrid) {
    let riverCount = 0;
    while (riverCount < maxRivers) {
        let generated = false;
        while (!generated) {
            let startX = Math.floor(Math.random() * grid.length);
            let startY = Math.floor(Math.random() * grid[0].length);
            if (allowRiverPlacement(startX, startY)) {
                generateRiver(startX, startY, grid, emptyGrid);
                generated = true;
            }
        }
        riverCount++;
    }
}

function generateRiver(startX, startY, grid, emptyGrid) {
    console.log("GENERATING RIVER");
    let x = startX;
    let y = startY;
    let riverLength = 0;

    // Define primary direction preferences
    var directionMath = Math.random();
    var primaryDirection = "";
    if (directionMath < .2) {
        primaryDirection = "right";
    } else if (directionMath < .4) {
        primaryDirection = "down";
    } else if (directionMath < .6) {
        primaryDirection = "left";
    } else if (directionMath < .8) {
        primaryDirection = "up-";
    } else if (directionMath < .85) {
        primaryDirection = "up-right";
    } else if (directionMath < .9) {
        primaryDirection = "down-left";
    } else if (directionMath < .95) {
        primaryDirection = "down-right";
    } else {
        primaryDirection = "up-left";
    }
    const directions = ["up", "down", "left", "right", "up-left", "up-right", "down-left", "down-right"];

    // Function to determine the next direction based on primary direction and crossroads
    function getNextDirection(previousDirection, riverPlacement) {
        let possibleDirections = [...directions];
        
        // Exclude the reverse direction to prevent backtracking

        if(!riverPlacement) {
            switch (previousDirection) {
                case "up": possibleDirections = possibleDirections.filter(dir => dir !== previousDirection); break;
                case "down": possibleDirections = possibleDirections.filter(dir => dir !== previousDirection); break;
                case "left": possibleDirections = possibleDirections.filter(dir => dir !== previousDirection); break;
                case "right": possibleDirections = possibleDirections.filter(dir => dir !== previousDirection); break;
                case "up-left": possibleDirections = possibleDirections.filter(dir => dir !== previousDirection); break;
                case "up-right": possibleDirections = possibleDirections.filter(dir => dir !== previousDirection); break;
                case "down-left": possibleDirections = possibleDirections.filter(dir => dir !== previousDirection); break;
                case "down-right": possibleDirections = possibleDirections.filter(dir => dir !== previousDirection); break;
            }
        } else {
            switch (previousDirection) {
                case "up": possibleDirections = possibleDirections.filter(dir => dir !== "down"); break;
                case "down": possibleDirections = possibleDirections.filter(dir => dir !== "up"); break;
                case "left": possibleDirections = possibleDirections.filter(dir => dir !== "right"); break;
                case "right": possibleDirections = possibleDirections.filter(dir => dir !== "left"); break;
                case "up-left": possibleDirections = possibleDirections.filter(dir => dir !== "down-right"); break;
                case "up-right": possibleDirections = possibleDirections.filter(dir => dir !== "down-left"); break;
                case "down-left": possibleDirections = possibleDirections.filter(dir => dir !== "up-right"); break;
                case "down-right": possibleDirections = possibleDirections.filter(dir => dir !== "up-left"); break;
            }
        }

        // Prefer primary direction but fallback to random direction if necessary
        if (Math.random() < 0.5) {
            return primaryDirection;
        }

        // Fall back to a random direction
        return possibleDirections[Math.floor(Math.random() * possibleDirections.length)];
    }

    let previousDirection = primaryDirection;
    let attempts = 0;
    while (riverLength < maxRiverLength && isWithinGrid(x,y, grid.length) && attempts < maxRiverAttempts) {

        // Remove 2x2 blocks by checking adjacent tiles
        let riverPlacement = allowRiverPlacement(x,y);
        if (riverPlacement) {
            // Create a path tile at the current location
            let tileCurrent = getTileByCoordinates(x, y);
            if (tileCurrent) {
                removeTile(tileCurrent);
            }
            try {
                var newTile = new Tile(x, y, tileCurrent.biome, "River");
                grid[x][y] = newTile;
                emptyGrid[x][y] = "filled";
                tileset.push(newTile);
            } catch (e) {
                var newTile = new Tile(x, y, "Forest", "River");
                grid[x][y] = newTile;
                emptyGrid[x][y] = "filled";
                tileset.push(newTile);
            }
            riverLength++;
        } else {
            attempts++;
        }

        // Determine the next direction
        let nextDirection = getNextDirection(previousDirection);
        previousDirection = nextDirection;

        // Apply the movement in the selected direction
        switch (nextDirection) {
            case "up": if (y > 0) y--; break;
            case "down": if (y < grid[0].length - 1) y++; break;
            case "left": if (x > 0) x--; break;
            case "right": if (x < grid.length - 1) x++; break;
            case "up-left": if (x > 0 && y > 0) { x--; y--; } break;
            case "up-right": if (x < grid.length - 1 && y > 0) { x++; y--; } break;
            case "down-left": if (x > 0 && y < grid[0].length - 1) { x--; y++; } break;
            case "down-right": if (x < grid.length - 1 && y < grid[0].length - 1) { x++; y++; } break;
        }
    }
}

function getHouseLocation(x, y) {
    let candidates = [];
    let candidate1 = getTileByCoordinates(x + 1, y);
    let candidate2 = getTileByCoordinates(x + 1, y + 1);
    let candidate3 = getTileByCoordinates(x + 1, y - 1);
    let candidate4 = getTileByCoordinates(x - 1, y);
    let candidate5 = getTileByCoordinates(x - 1, y + 1);
    let candidate6 = getTileByCoordinates(x - 1, y - 1);
    let candidate7 = getTileByCoordinates(x, y + 1);
    let candidate8 = getTileByCoordinates(x, y - 1);
    if (candidate1 != null && !candidate1.isTown && !candidate1.isHouse && !candidate1.isPOI && !candidate1.isPath && !candidate1.isShop) {
        candidates.push(candidate1);
    }
    if (candidate2 != null && !candidate2.isTown && !candidate2.isHouse && !candidate2.isPOI && !candidate2.isPath && !candidate2.isShop) {
        candidates.push(candidate2);
    }
    if (candidate3 != null && !candidate3.isTown && !candidate3.isHouse && !candidate3.isPOI && !candidate3.isPath && !candidate3.isShop) {
        candidates.push(candidate3);
    }
    if (candidate4 != null && !candidate4.isTown && !candidate4.isHouse && !candidate4.isPOI && !candidate4.isPath && !candidate4.isShop) {
        candidates.push(candidate4);
    }
    if (candidate5 != null && !candidate5.isTown && !candidate5.isHouse && !candidate5.isPOI && !candidate5.isPath && !candidate5.isShop) {
        candidates.push(candidate5);
    }
    if (candidate6 != null && !candidate6.isTown && !candidate6.isHouse && !candidate6.isPOI && !candidate6.isPath && !candidate6.isShop) {
        candidates.push(candidate6);
    }
    if (candidate7 != null && !candidate7.isTown && !candidate7.isHouse && !candidate7.isPOI && !candidate7.isPath && !candidate7.isShop) {
        candidates.push(candidate7);
    }
    if (candidate8 != null && !candidate8.isTown && !candidate8.isHouse && !candidate8.isPOI && !candidate8.isPath && !candidate8.isShop) {
        candidates.push(candidate8);
    }
    
    let selectedCandidate = candidates[Math.floor(Math.random() * candidates.length)];
    let location = [];
    if (selectedCandidate != undefined) {
        location.x = selectedCandidate.getX();
        location.y = selectedCandidate.getY();
        return (location);
    } else {
        return null;
    }
}

// Helper function to find the closest point (town or POI) to the current location
function getClosestPoint(x, y, points) {
    if (points.length === 0) return null;
    let closestPoint = points[0];
    let closestDistance = Math.abs(x - closestPoint.x) + Math.abs(y - closestPoint.y);

    for (let point of points) {
        let distance = Math.abs(x - point.x) + Math.abs(y - point.y);
        if (distance < closestDistance) {
            closestPoint = point;
            closestDistance = distance;
        }
    }
    return closestPoint;
}

function checkPathCoord(nx, ny) 
{ 
    var tile = getTileByCoordinates(nx, ny);
    if (tile == null) {
        return 0;
    }
    if (tile.isPath) {
        return 1;
    }
    return 0;
};

function checkRiverCoord(nx, ny) 
{ 
    var tile = getTileByCoordinates(nx, ny);
    if (tile == null) {
        return 0;
    }
    if (tile.isRiver) {
        return 1;
    }
    return 0;
};

function allowPathPlacement(x, y) {
    if (checkPathCoord(x, y) == 1 ) {
        return false;
    }
    var adjacentPaths = 0;

    adjacentPaths += checkPathCoord(x + 1, y);
    adjacentPaths += checkPathCoord(x - 1, y);
    adjacentPaths += checkPathCoord(x, y + 1);
    adjacentPaths += checkPathCoord(x, y - 1);
    adjacentPaths += checkPathCoord (x + 1, y + 1);
    adjacentPaths += checkPathCoord (x - 1, y + 1);
    adjacentPaths += checkPathCoord (x + 1, y - 1);
    adjacentPaths += checkPathCoord (x - 1, y - 1);

    if (adjacentPaths >= 3) {
        return false;
    }

    var currentTile = getTileByCoordinates(x, y);
    filtered = townAttributes['Town'].biomeSet.filter(item => item == currentTile);
    if (filtered[0] !== undefined) {
        return false;
    }
    if (currentTile != null && currentTile.isTown) {
        return false;
    }
    if (currentTile != null && currentTile.isPOI) {
        return false;
    }
    if (currentTile != null && currentTile.isHouse) {
        return false;
    }
    if (currentTile != null && currentTile.isShop) {
        return false;
    }
    if (currentTile != null && currentTile.isMicrobiome) {
        return false;
    }
    if (currentTile != null && biomeConfigs[currentTile.biome] !== undefined && !biomeConfigs[currentTile.biome].isPathAllowed) {
        return false;
    }

    return true;
}
function allowRiverPlacement(x, y) {
    if (checkRiverCoord(x, y) == 1 ) {
        return false;
    }
    var adjacentPaths = 0;

    adjacentPaths += checkRiverCoord(x + 1, y);
    adjacentPaths += checkRiverCoord(x - 1, y);
    adjacentPaths += checkRiverCoord(x, y + 1);
    adjacentPaths += checkRiverCoord(x, y - 1);
    adjacentPaths += checkRiverCoord (x + 1, y + 1);
    adjacentPaths += checkRiverCoord (x - 1, y + 1);
    adjacentPaths += checkRiverCoord (x + 1, y - 1);
    adjacentPaths += checkRiverCoord (x - 1, y - 1);

    if (adjacentPaths >= 3) {
        return false;
    }

    var currentTile = getTileByCoordinates(x, y);
    filtered = townAttributes['Town'].biomeSet.filter(item => item == currentTile);
    if (filtered[0] !== undefined) {
        return false;
    }
    if (currentTile != null && currentTile.isTown) {
        return false;
    }
    if (currentTile != null && currentTile.isPOI) {
        return false;
    }
    if (currentTile != null && currentTile.isHouse) {
        return false;
    }
    if (currentTile != null && currentTile.isShop) {
        return false;
    }
    if (currentTile != null && currentTile.isMicrobiome) {
        return false;
    }
    if (currentTile != null && biomeConfigs[currentTile.biome] !== undefined && !biomeConfigs[currentTile.biome].isRiverAllowed) {
        return false;
    }

    return true;
}

function renderGrid(gridSet) {
    const gridContainer = document.getElementById("grid");
    gridContainer.style.gridTemplateColumns = `repeat(${gameInfo.gridSize}, 10px)`;
    let x = 0;
    while (x < gridSet.length) {
        let y = 0;
        while (y < gridSet.length) {
            const tileDiv = document.createElement("div");
            tileDiv.className = "tile";
            let tile = gridSet[x][y];
            if (tile == null) {
                tile = getTileByCoordinates(x,y);
            }
            tileDiv.classList.add(tile.constructor.name);
            tileDiv.style.backgroundColor = tile.color;
            if (tile.isGlitch) {
                tileDiv.classList.add("glitchTile");
            }
            gridContainer.appendChild(tileDiv);
            y++;
        }
        x++;
    }
}
    
let tileset = [];
let gridSet = [];
let emptyGrid = [];
let poiList = [];
let townList = [];
const gridSizeRatio = 200;
// const maxPaths = 1;
// const maxRivers = 1;
// const townCount = 8;
const maxPaths = 20 * Math.floor(gameInfo.gridSize / gridSizeRatio);
const maxRivers = 20 * Math.floor(gameInfo.gridSize / gridSizeRatio);
const townCount = Math.floor(gameInfo.gridSize / 25);
const townBuffer = 20 * Math.floor(gameInfo.gridSize / gridSizeRatio);
const houseChance = .2;
const neighbourChance = .3;
const poiBiomeCount = 5;
const poiHouseCount = 10;
const maxPathLength = 100;
const maxPathAttempts = 18;
const maxRiverLength = 100;
const maxRiverAttempts = 70;
const maxBadAttempts = 100;
const townWidth = 10;
const townHeight = 10;
const glitchGoal = 10;
const townDistanceFromCenter = gridSizeRatio;
//gridSet = generateBiomes(emptyGrid);

function include(file) {
 
    let script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;
 
    document.getElementsByTagName('head').item(0).appendChild(script);
}