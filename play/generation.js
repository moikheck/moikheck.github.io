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
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Goblin", "Wolf"]
            },
            {
                name: "Leafy Clearing",
                enterText: "You find a leafy clearing. The sun beams shine down on you.",
                revisitText: "You stomp through the leaves again, having cleared a way before.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Goblin", "Wolf"]
            },
            {
                name: "Wooded Forest",
                enterText: "Large, thick trees surround your path. It would be easy to get lost in here.",
                revisitText: "You are pretty sure you have seen this before.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Goblin", "Wolf"]
            },
            {
                name: "Quiet Forest",
                enterText: "The sounds of the forest are quieter in this spot.",
                revisitText: "The serenity almost makes you relax.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Goblin", "Wolf"]
            }
        ],
        pathTypes: [
            {
                name: "Dirt Path",
                enterText: "The dirt path is a nice break from the wildlife.",
                revisitText: "Trusty ol' dirt paths.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Goblin", "Wolf"]
            },
            {
                name: "Brush Path",
                enterText: "The path in front of you is covered in underbrush.",
                revisitText: "Your footsteps are quieter on the underbrush.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Goblin", "Wolf"]
            },
            {
                name: "Uneven Path",
                enterText: "Your way forward is full of uneven land, dug up by tree roots.",
                revisitText: "You are careful not to trip on any rogue tree roots.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Goblin", "Wolf"]
            }
        ],
        houseTypes: [
            {
                name: "Log Cabin",
                enterText: "A humble log cabin stands before you. A fire is on inside.",
                revisitText: "The fire has been left running for too long, and the house is burnt down.",
                isNavigable: true,
                enemyChance: 0.2,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Witch", "Hermit"]
            },
            {
                name: "Forest Camp",
                enterText: "A group of people have set up at a makeshift camp.",
                revisitText: "The camp is still standing.",
                isNavigable: true,
                enemyChance: 0.15,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Hermit", "Giant"]
            },
            {
                name: "Hidden Burrow",
                enterText: "You almost miss spotting a well-hidden burrow in front of you.",
                revisitText: "The burrow has nearly caved in from the commotion.",
                isNavigable: true,
                enemyChance: 0.15,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Hermit", "Giant"]
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
                enemyChance: 0.15,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Hermit", "Giant"]
            },
            {
                name: "Rapid River",
                enterText: "The water threatens to pull you away with each movement.",
                revisitText: "You have to brace yourself with each movement.",
                isNavigable: true,
                enemyChance: 0.15,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Hermit", "Giant"]
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
                enemyChance: 0.2,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Ice Troll", "Yeti"]
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
                enemyPreferences: ["Goblin", "Wolf"]
            }
        ],
        houseTypes: [
            {
                name: "Mountain Overhang",
                enterText: "You are pretty sure something lives in this overhang.",
                revisitText: "You step back into the overhang, shielding yourself from the cold.",
                isNavigable: true,
                enemyChance: 0.2,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Witch", "Hermit"]
            },
            {
                name: "Mountain Climber Hut",
                enterText: "Although it seems abandoned, the hut must be fresh.",
                revisitText: "No wonder the hut was abandoned.",
                isNavigable: true,
                enemyChance: 0.15,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Hermit", "Giant"]
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
                enemyChance: 0.15,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Hermit", "Giant"]
            },
            {
                name: "Rapid River",
                enterText: "The water threatens to pull you away with each movement.",
                revisitText: "You have to brace yourself with each movement.",
                isNavigable: true,
                enemyChance: 0.15,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Hermit", "Giant"]
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
        riverColor: "#FFD700",
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
                enemyChance: 0.15,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Scorpion", "Sand Serpent"]
            },
            {
                name: "Sand Valley",
                enterText: "You slide down a hill of sand into a small valley.",
                revisitText: "You can still see where you slid last time.",
                isNavigable: true,
                enemyChance: 0.15,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Scorpion", "Sand Serpent"]
            },
            {
                name: "Flat Desert",
                enterText: "The desert stretches as far as you can see.",
                revisitText: "You can vaguely see landmarks in the distance.",
                isNavigable: true,
                enemyChance: 0.15,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Scorpion", "Sand Serpent"]
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
                enemyPreferences: ["Goblin", "Wolf"]
            },
            {
                name: "Sandy Path",
                enterText: "A divot in the dunes traces your path through the desert.",
                revisitText: "The path has slightly changed, but still gets the job done.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Goblin", "Wolf"]
            },
            {
                name: "Windy Path",
                enterText: "Sand covers most of the otherwise carved path.",
                revisitText: "You're not sure if there's more or less sand on the path.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Goblin", "Wolf"]
            }
        ],
        houseTypes: [
            {
                name: "Sandstone House",
                enterText: "A sandstone house stands against the harsh environment.",
                revisitText: "The sandstone house is a quiet stopping point on your adventure.",
                isNavigable: true,
                enemyChance: 0.2,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Witch", "Hermit"]
            },
            {
                name: "Mine Entrance",
                enterText: "An old, rickety mineshaft lies below. You're not sure you should go any deeper than the cobwebs will allow.",
                revisitText: "Something makes a sound that echoes down the mineshaft.",
                isNavigable: true,
                enemyChance: 0.15,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Hermit", "Giant"]
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
                enemyChance: 0.15,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Hermit", "Giant"]
            },
            {
                name: "Rapid River",
                enterText: "The water threatens to pull you away with each movement.",
                revisitText: "You have to brace yourself with each movement.",
                isNavigable: true,
                enemyChance: 0.15,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Hermit", "Giant"]
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
                enemyChance: 0.05,
                secondEnemyChance: 0.02,
                additionalEnemyChance: 0.01,
                enemyPreferences: ["Deer", "Rabbit"]
            },
            {
                name: "Grassy Hill",
                enterText: "Climbing the hill is a tall order, but you make it to the top without breaking a sweat.",
                revisitText: "You really don't feel like climbing the hill again.",
                isNavigable: true,
                enemyChance: 0.05,
                secondEnemyChance: 0.02,
                additionalEnemyChance: 0.01,
                enemyPreferences: ["Deer", "Rabbit"]
            },
            {
                name: "Tallgrass Plain",
                enterText: "You almost have to cut through the weeds to get through.",
                revisitText: "A thin path marks where you've already been.",
                isNavigable: true,
                enemyChance: 0.05,
                secondEnemyChance: 0.02,
                additionalEnemyChance: 0.01,
                enemyPreferences: ["Deer", "Rabbit"]
            },
            {
                name: "Windy Plain",
                enterText: "You almost have to cut through the weeds to.",
                revisitText: "Despite the wind battering you, you're pretty sure you've been here.",
                isNavigable: true,
                enemyChance: 0.05,
                secondEnemyChance: 0.02,
                additionalEnemyChance: 0.01,
                enemyPreferences: ["Deer", "Rabbit"]
            },
            {
                name: "Flat Plain",
                enterText: "This plain feels almost unnaturally flat.",
                revisitText: "Yep. Still flat.",
                isNavigable: true,
                enemyChance: 0.05,
                secondEnemyChance: 0.02,
                additionalEnemyChance: 0.01,
                enemyPreferences: ["Deer", "Rabbit"]
            },
            {
                name: "Deserted Plain",
                enterText: "Even the sounds of insects are void from this spot.",
                revisitText: "You remember the eery quietness of this spot.",
                isNavigable: true,
                enemyChance: 0.05,
                secondEnemyChance: 0.02,
                additionalEnemyChance: 0.01,
                enemyPreferences: ["Deer", "Rabbit"]
            },
            {
                name: "Wet Plain",
                enterText: "Your feet squish a little into the ground.",
                revisitText: "Some of your squishy footsteps are still here.",
                isNavigable: true,
                enemyChance: 0.05,
                secondEnemyChance: 0.02,
                additionalEnemyChance: 0.01,
                enemyPreferences: ["Deer", "Rabbit"]
            },
            {
                name: "Wildflower Field",
                enterText: "You wander into a field full of vibrant wildflowers.",
                revisitText: "The wildflowers sway gently in the breeze.",
                isNavigable: true,
                enemyChance: 0.05,
                secondEnemyChance: 0.02,
                additionalEnemyChance: 0.01,
                enemyPreferences: ["Deer", "Rabbit"]
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
                enemyPreferences: ["Goblin", "Wolf"]
            },
            {
                name: "Quiet Dirt Path",
                enterText: "A dirt path, but with not a lot going on.",
                revisitText: "Still dirt.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Goblin", "Wolf"]
            },
            {
                name: "Worn Dirt Path",
                enterText: "This dirt seems especially stepped on.",
                revisitText: "You're more than happy to use the dirt path.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Goblin", "Wolf"]
            }
        ],
        houseTypes: [
            {
                name: "Small Cottage",
                enterText: "A small cottage sits on a hill, with a winding path up.",
                revisitText: "The cottage is peaceful out in the plains.",
                isNavigable: true,
                enemyChance: 0.2,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Witch", "Hermit"]
            },
            {
                name: "Rabbit Burrow",
                enterText: "The rabbits inside are making lots of noise.",
                revisitText: "Revisiting the burrow is much quieter.",
                isNavigable: true,
                enemyChance: 0.15,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Hermit", "Giant"]
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
                enemyChance: 0.15,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Hermit", "Giant"]
            },
            {
                name: "Rapid River",
                enterText: "The water threatens to pull you away with each movement.",
                revisitText: "You have to brace yourself with each movement.",
                isNavigable: true,
                enemyChance: 0.15,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Hermit", "Giant"]
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
                enemyPreferences: ["Swamp Monster", "Frog"]
            },
            {
                name: "Wooded Swamp",
                enterText: "Trees cover the area, their large roots peeking out.",
                revisitText: "The trees are still.",
                isNavigable: true,
                enemyChance: 0.2,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Swamp Monster", "Frog"]
            },
            {
                name: "Swamp Pond",
                enterText: "A pond of murky swamp water lies still before you.",
                revisitText: "The water is still again.",
                isNavigable: true,
                enemyChance: 0.2,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Swamp Monster", "Frog"]
            },
            {
                name: "Slimy Swamp",
                enterText: "You nearly slip on a streak of slime.",
                revisitText: "You're careful to avoid the slime this time.",
                isNavigable: true,
                enemyChance: 0.2,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Swamp Monster", "Frog"]
            }
        ],
        pathTypes: [
            {
                name: "Wet Path",
                enterText: "Your shoes soak in the watery path.",
                revisitText: "The mossy rock looks as though it’s been here for ages.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Goblin", "Wolf"]
            },
            {
                name: "Muddy Path",
                enterText: "The path squishes under your feet.",
                revisitText: "Your shoes certainly can't get any muddier right now.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Goblin", "Wolf"]
            },
            {
                name: "Fallen Log",
                enterText: "An old log has been rolled to be a makeshift bridge over a particularly nasty batch of water.",
                revisitText: "The old log rolls slightly as you cross again.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Goblin", "Wolf"]
            }
        ],
        houseTypes: [
            {
                name: "Swamp Hut",
                enterText: "You find a small, ramshackle hut in the swamp.",
                revisitText: "The swamp hut is still half-submerged in the muck.",
                isNavigable: true,
                enemyChance: 0.2,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Witch", "Hermit"]
            },
            {
                name: "Bog Cabin",
                enterText: "You discover a cabin built on stilts above the swamp.",
                revisitText: "The bog cabin seems to have settled deeper into the mire.",
                isNavigable: true,
                enemyChance: 0.15,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Hermit", "Giant"]
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
                enemyChance: 0.15,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Hermit", "Giant"]
            },
            {
                name: "Rapid River",
                enterText: "The water threatens to pull you away with each movement.",
                revisitText: "You have to brace yourself with each movement.",
                isNavigable: true,
                enemyChance: 0.15,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Hermit", "Giant"]
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
                enemyChance: 0.2,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Swamp Monster", "Frog"]
            },
            {
                name: "Splintering Badlands",
                enterText: "You can't seem to sweat fast enough. The heat is almost too much.",
                revisitText: "The sweltering heat is slowing you down.",
                isNavigable: true,
                enemyChance: 0.2,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Swamp Monster", "Frog"]
            },
            {
                name: "Crumbling Badlands",
                enterText: "The ground is cracking and falling apart here.",
                revisitText: "A piece of the ground is missing from the last time you were here.",
                isNavigable: true,
                enemyChance: 0.2,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Swamp Monster", "Frog"]
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
                enemyPreferences: ["Goblin", "Wolf"]
            },
            {
                name: "Carved Path",
                enterText: "A long time has been spent to carve this path through the badlands.",
                revisitText: "You can't imagine how long the trek would be without this path.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Goblin", "Wolf"]
            },
            {
                name: "Rail Path",
                enterText: "An old rail path, likely for a mine cart, leads your way forward.",
                revisitText: "The rail path is short, but useful.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Goblin", "Wolf"]
            }
        ],
        houseTypes: [
            {
                name: "Clay Cave",
                enterText: "A damp, clay cave acts as your refuge from the uninhabitable badlands weather.",
                revisitText: "It feels nice to be back in the cave.",
                isNavigable: true,
                enemyChance: 0.2,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Witch", "Hermit"]
            },
            {
                name: "Mineshaft",
                enterText: "A railway leads you to a mineshaft, with barrels of dynamite surrounding it.",
                revisitText: "You're not sure you want to get too close to the dynamite.",
                isNavigable: true,
                enemyChance: 0.15,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Hermit", "Giant"]
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
                enemyChance: 0.15,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Hermit", "Giant"]
            },
            {
                name: "Rapid River",
                enterText: "The water threatens to pull you away with each movement.",
                revisitText: "You have to brace yourself with each movement.",
                isNavigable: true,
                enemyChance: 0.15,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Hermit", "Giant"]
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
                enemyChance: 0.2,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Swamp Monster", "Frog"]
            },
            {
                name: "Windswept Tundra",
                enterText: "The cold wind is harsh on your face.",
                revisitText: "The tundra winds are blowing against your back this time.",
                isNavigable: true,
                enemyChance: 0.2,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Swamp Monster", "Frog"]
            },
            {
                name: "Quiet Tundra",
                enterText: "A quiet portion of the tundra surrounds you. The snowflakes are peaceful.",
                revisitText: "You remember this spot, if only for the silence.",
                isNavigable: true,
                enemyChance: 0.2,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Swamp Monster", "Frog"]
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
                enemyPreferences: ["Goblin", "Wolf"]
            },
            {
                name: "Icy Path",
                enterText: "You nearly slip on some particularly nasty spots in the path.",
                revisitText: "You are careful to avoid any other slick areas on your way back through this spot.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Goblin", "Wolf"]
            }
        ],
        houseTypes: [
            {
                name: "Igloo",
                enterText: "The igloo is warm as you enter it.",
                revisitText: "You find yourself back in the refuge of the igloo.",
                isNavigable: true,
                enemyChance: 0.2,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Witch", "Hermit"]
            },
            {
                name: "Encampment",
                enterText: "You approach an encampment full of logs and leather.",
                revisitText: "The encampment is a bit quieter than you remember it being.",
                isNavigable: true,
                enemyChance: 0.15,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Hermit", "Giant"]
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
                enemyPreferences: ["Hermit", "Giant"]
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
                enemyPreferences: ["Swamp Monster", "Frog"]
            },
            {
                name: "Miniature Hill",
                enterText: "You nearly lose balance on the small hill below you.",
                revisitText: "You watch your step over the \"hill\".",
                isNavigable: true,
                enemyChance: 0.2,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Swamp Monster", "Frog"]
            },
            {
                name: "Tiny Tree",
                enterText: "A little tree stands before you. It seems real.",
                revisitText: "The tiny tree shakes in the wind.",
                isNavigable: true,
                enemyChance: 0.2,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Swamp Monster", "Frog"]
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
                enemyPreferences: ["Goblin", "Wolf"]
            },
            {
                name: "Shrunken Path",
                enterText: "You feel like a giant on the path.",
                revisitText: "This place is a marvel.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Goblin", "Wolf"]
            }
        ],
        houseTypes: [
            {
                name: "Doll House",
                enterText: "This house looks just like a dollhouse.",
                revisitText: "Definitely a dollhouse.",
                isNavigable: true,
                enemyChance: 0.2,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Witch", "Hermit"]
            },
            {
                name: "Block House",
                enterText: "You're pretty sure this house is made of building blocks.",
                revisitText: "The house has tumbled apart.",
                isNavigable: true,
                enemyChance: 0.15,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Hermit", "Giant"]
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
                enemyPreferences: ["Hermit", "Giant"]
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
                enemyPreferences: ["Swamp Monster", "Frog"]
            },
            {
                name: "Choppy Lake Waters",
                enterText: "You struggle to stay balanced in the waters.",
                revisitText: "You're more careful to avoid the tempests stirring.",
                isNavigable: true,
                enemyChance: 0.2,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Swamp Monster", "Frog"]
            },
            {
                name: "Deep Lake Waters",
                enterText: "You have to actually swim in this spot of the lake.",
                revisitText: "Your feet don't touch the bottom.",
                isNavigable: true,
                enemyChance: 0.2,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Swamp Monster", "Frog"]
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
                enemyPreferences: ["Swamp Monster", "Frog"]
            },
            {
                name: "Choppy Lake Waters",
                enterText: "You struggle to stay balanced in the waters.",
                revisitText: "You're more careful to avoid the tempests stirring.",
                isNavigable: true,
                enemyChance: 0.2,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Swamp Monster", "Frog"]
            },
            {
                name: "Deep Lake Waters",
                enterText: "You have to actually swim in this spot of the lake.",
                revisitText: "Your feet don't touch the bottom.",
                isNavigable: true,
                enemyChance: 0.2,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Swamp Monster", "Frog"]
            }
        ],
        houseTypes: [
            {
                name: "Fishing Boat",
                enterText: "An old wooden fishing boat heads your way.",
                revisitText: "The boat is left here, forced to drift or sink.",
                isNavigable: true,
                enemyChance: 0.2,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Witch", "Hermit"]
            },
            {
                name: "Small Mariner",
                enterText: "The owner of a boat like this must be wealthy.",
                revisitText: "The mariner bobs in the lake water.",
                isNavigable: true,
                enemyChance: 0.15,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Hermit", "Giant"]
            },
            {
                name: "Rowboat",
                enterText: "A tiny rowboat drifts your way.",
                revisitText: "The rowboat is flipped over, and the oars are nowhere to be found.",
                isNavigable: true,
                enemyChance: 0.15,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Hermit", "Giant"]
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
                enemyPreferences: ["Hermit", "Giant"]
            }
        ],
        riverTypes: [
            {
                name: "Lazy River",
                enterText: "The water isn't running particularly fast.",
                revisitText: "You trudge through the water easily.",
                isNavigable: true,
                enemyChance: 0.15,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Hermit", "Giant"]
            },
            {
                name: "Rapid River",
                enterText: "The water threatens to pull you away with each movement.",
                revisitText: "You have to brace yourself with each movement.",
                isNavigable: true,
                enemyChance: 0.15,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Hermit", "Giant"]
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
                enemyChance: 0.2,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Swamp Monster", "Frog"]
            },
            {
                name: "Blackened Dirt",
                enterText: "The dirt is warm.",
                revisitText: "Whatever happened here seems to have been recent.",
                isNavigable: true,
                enemyChance: 0.2,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Swamp Monster", "Frog"]
            },
            {
                name: "Solidified Lava",
                enterText: "The lava is still warm, but not dangerously so.",
                revisitText: "You don't see a volcano that could have done this.",
                isNavigable: true,
                enemyChance: 0.2,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Swamp Monster", "Frog"]
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
                enemyPreferences: ["Goblin", "Wolf"]
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
                enemyPreferences: ["Witch", "Hermit"]
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
                enemyPreferences: ["Swamp Monster", "Frog"]
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
                enemyPreferences: ["Swamp Monster", "Frog"]
            },
            {
                name: "Spore-Wind Clearing",
                enterText: "A gust of spores hits you as you step into the clearing.",
                revisitText: "There are somehow more spores blowing through.",
                isNavigable: true,
                enemyChance: 0.2,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Swamp Monster", "Frog"]
            },
            {
                name: "Red-Capped Cliffs",
                enterText: "Large, red mushrooms line the walls of the hills and cliffs.",
                revisitText: "These mushrooms sure are strange.",
                isNavigable: true,
                enemyChance: 0.2,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Swamp Monster", "Frog"]
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
                enemyPreferences: ["Goblin", "Wolf"]
            },
            {
                name: "Glowing Mushroom Path",
                enterText: "The glowing mushrooms do wonders for your visibility along the strange atmosphere of the valley.",
                revisitText: "None of the natives seem to want to approach the glowing mushrooms.",
                isNavigable: true,
                enemyChance: 0,
                secondEnemyChance: 0,
                additionalEnemyChance: 0,
                enemyPreferences: []
            }
        ],
        houseTypes: [
            {
                name: "Mushroom House",
                enterText: "The smell of something cooking reaches your nose.",
                revisitText: "You can still smell something cooking.",
                isNavigable: true,
                enemyChance: 0.2,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Witch", "Hermit"]
            },
            {
                name: "Stump House",
                enterText: "Someone very small lives in this stump.",
                revisitText: "Someone very small used to live in this stump.",
                isNavigable: true,
                enemyChance: 0.15,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Hermit", "Giant"]
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
                enemyChance: 0.15,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Hermit", "Giant"]
            },
            {
                name: "Rapid River",
                enterText: "The water threatens to pull you away with each movement.",
                revisitText: "You have to brace yourself with each movement.",
                isNavigable: true,
                enemyChance: 0.15,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Hermit", "Giant"]
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
        pois: ["Ancient Clearing"],
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
                enemyPreferences: ["Goblin", "Wolf"]
            },
            {
                name: "Thick Jungle",
                enterText: "The jungle is hard to get through.",
                revisitText: "You've at least cleared your path here before.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Goblin", "Wolf"]
            },
            {
                name: "Sweltering Jungle",
                enterText: "The heat and humidity is making the jungle uncomfortable.",
                revisitText: "You hear the croaking of far-off frogs.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Goblin", "Wolf"]
            }
        ],
        pathTypes: [
            {
                name: "Dirt Path",
                enterText: "The dirt path is a nice break from the wildlife.",
                revisitText: "Trusty ol' dirt paths.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Goblin", "Wolf"]
            },
            {
                name: "Brush Path",
                enterText: "The path in front of you is covered in underbrush.",
                revisitText: "Your footsteps are quieter on the underbrush.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Goblin", "Wolf"]
            },
            {
                name: "Uneven Path",
                enterText: "Your way forward is full of uneven land, dug up by tree roots.",
                revisitText: "You are careful not to trip on any rogue tree roots.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.02,
                enemyPreferences: ["Goblin", "Wolf"]
            }
        ],
        houseTypes: [
            {
                name: "Tiki Hut",
                enterText: "A tiki hut, like that of some magic creature, stands before you.",
                revisitText: "The hut is small, but has all of the essentials.",
                isNavigable: true,
                enemyChance: 0.2,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.07,
                enemyPreferences: ["Witch", "Hermit"]
            },
            {
                name: "Adventurer's Hut",
                enterText: "Someone has set up here.",
                revisitText: "The hut lies dormant.",
                isNavigable: true,
                enemyChance: 0.15,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Hermit", "Giant"]
            },
            {
                name: "Treehouse",
                enterText: "An extravagant treehouse lies above you.",
                revisitText: "The treehouse rope still dangles for you.",
                isNavigable: true,
                enemyChance: 0.15,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Hermit", "Giant"]
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
                enemyChance: 0.15,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Hermit", "Giant"]
            },
            {
                name: "Rapid River",
                enterText: "The water threatens to pull you away with each movement.",
                revisitText: "You have to brace yourself with each movement.",
                isNavigable: true,
                enemyChance: 0.15,
                secondEnemyChance: 0.1,
                additionalEnemyChance: 0.05,
                enemyPreferences: ["Hermit", "Giant"]
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
                enemyChance: 0.05,
                secondEnemyChance: 0.02,
                additionalEnemyChance: 0.01,
                enemyPreferences: ["Bee", "Butterfly"]
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
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.03,
                enemyPreferences: ["Cactus Cat", "Desert Fox"]
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
                enemyChance: 0.05,
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
                enemyChance: 0.05,
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
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.03,
                enemyPreferences: ["Mudskipper", "Leech"]
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
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.03,
                enemyPreferences: ["Mudskipper", "Leech"]
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
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.03,
                enemyPreferences: ["Mudskipper", "Leech"]
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
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.03,
                enemyPreferences: ["Mudskipper", "Leech"]
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
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.03,
                enemyPreferences: ["Mudskipper", "Leech"]
            },
            {
                name: "Saloon",
                enterText: "As you step in, the piano music stops, and heads turn to see you.",
                revisitText: "The saloon is back to business.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.03,
                enemyPreferences: ["Mudskipper", "Leech"]
            },
            {
                name: "Watch Tower",
                enterText: "The guards see you long before you see them.",
                revisitText: "The watch tower remains empty.",
                isNavigable: true,
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.03,
                enemyPreferences: ["Mudskipper", "Leech"]
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
                enemyChance: 0.1,
                secondEnemyChance: 0.05,
                additionalEnemyChance: 0.03,
                enemyPreferences: ["Mudskipper", "Leech"]
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
                enemyPreferences: ["Mudskipper", "Leech"]
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
                enemyPreferences: ["Mudskipper", "Leech"]
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
                enemyChance: 0.05,
                secondEnemyChance: 0.02,
                additionalEnemyChance: 0.01,
                enemyPreferences: ["Bee", "Butterfly"]
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
                enemyChance: 0.5,
                secondEnemyChance: 0.2,
                additionalEnemyChance: 0.1,
                enemyPreferences: ["Bee", "Butterfly"]
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
                enemyChance: 0.05,
                secondEnemyChance: 0.02,
                additionalEnemyChance: 0.01,
                enemyPreferences: ["Bee", "Butterfly"]
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
                enemyChance: 0.05,
                secondEnemyChance: 0.02,
                additionalEnemyChance: 0.01,
                enemyPreferences: ["Bee", "Butterfly"]
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
                enemyChance: 0.05,
                secondEnemyChance: 0.02,
                additionalEnemyChance: 0.01,
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
                enemyChance: 0.05,
                secondEnemyChance: 0.02,
                additionalEnemyChance: 0.01,
                enemyPreferences: ["Deer", "Rabbit"]
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
                enemyChance: 0.05,
                secondEnemyChance: 0.02,
                additionalEnemyChance: 0.01,
                enemyPreferences: ["Deer", "Rabbit"]
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
                enemyChance: 0.05,
                secondEnemyChance: 0.02,
                additionalEnemyChance: 0.01,
                enemyPreferences: ["Deer", "Rabbit"]
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
                enemyChance: 0.05,
                secondEnemyChance: 0.02,
                additionalEnemyChance: 0.01,
                enemyPreferences: ["Deer", "Rabbit"]
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
                enemyChance: 0.05,
                secondEnemyChance: 0.02,
                additionalEnemyChance: 0.01,
                enemyPreferences: ["Deer", "Rabbit"]
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
                enemyChance: 0.05,
                secondEnemyChance: 0.02,
                additionalEnemyChance: 0.01,
                enemyPreferences: ["Deer", "Rabbit"]
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
                enemyPreferences: ["Deer", "Rabbit"]
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
                enemyChance: 0.05,
                secondEnemyChance: 0.02,
                additionalEnemyChance: 0.01,
                enemyPreferences: ["Deer", "Rabbit"]
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
                enemyPreferences: ["Deer", "Rabbit"]
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
                enemyChance: 0.05,
                secondEnemyChance: 0.02,
                additionalEnemyChance: 0.01,
                enemyPreferences: ["Deer", "Rabbit"]
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
                enemyPreferences: ["Deer", "Rabbit"]
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
                enemyChance: 0.05,
                secondEnemyChance: 0.02,
                additionalEnemyChance: 0.01,
                enemyPreferences: ["Deer", "Rabbit"]
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
                enemyChance: 0.05,
                secondEnemyChance: 0.02,
                additionalEnemyChance: 0.01,
                enemyPreferences: ["Deer", "Rabbit"]
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
                enemyChance: 0.05,
                secondEnemyChance: 0.02,
                additionalEnemyChance: 0.01,
                enemyPreferences: ["Deer", "Rabbit"]
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
                enemyChance: 0.05,
                secondEnemyChance: 0.02,
                additionalEnemyChance: 0.01,
                enemyPreferences: ["Deer", "Rabbit"]
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
                enemyChance: 0.05,
                secondEnemyChance: 0.02,
                additionalEnemyChance: 0.01,
                enemyPreferences: ["Deer", "Rabbit"]
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
                enemyChance: 0,
                secondEnemyChance: 0,
                additionalEnemyChance: 0,
                enemyPreferences: []
            },
            {
                name: "Apartment Building",
                enterText: "A tall apartment building towers in front of you.",
                revisitText: "You recognize the address of the apartment building.",
                isNavigable: true,
                enemyChance: 0,
                secondEnemyChance: 0,
                additionalEnemyChance: 0,
                enemyPreferences: []
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

class Town {
    constructor(tileset, questBoard, shop, houses) {
        this.tileset = tileset;
        this.questBoard = questBoard;
        this.shop = shop;
        this.houses = houses;
        this.name = '';
        this.primarySpecies = '';
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
                biomeRiverTypes = biome.riverTypes[Math.floor(Math.random() * Object.keys(biome.houseTypes).length)];
            }
            var biomeDecorationTypes = "";
            if (biome.decorationTypes != null) {
                biomeDecorationTypes = biome.decorationTypes[Math.floor(Math.random() * Object.keys(biome.decorationTypes).length)];
            }
            var biomeWallTypes = "";
            if (biomeType === "Town Hall") {
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
                biomeBreakdown = biomePathTypes;
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
                biomeBreakdown = biomeDecorationTypes;
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
    }

    determineEncounterType() {
        if (this.isTown) return "passive";
        if (this.isShop) return "shop";
        if (this.enemyChance > Math.random()) return "encounter";
        if (Math.random() < 0.01) return "item";
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
        currentTile = getTileByCoordinates(x, grid.length);
        if (currentTile == null) removeTile(currentTile);
        newTile = new Tile(x, grid.length, "Border Wall", "Border Wall");
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
        currentTile = getTileByCoordinates(grid.length, y);
        if (currentTile == null) removeTile(currentTile);
        newTile = new Tile(grid.length, y, "Border Wall", "Border Wall");
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
    const sideX = [townWalls[Math.floor(Math.random() * townWalls.length)].getX(), townWalls[Math.floor(Math.random() * townWalls.length)].getX()];
    const sideY = [townWalls[Math.floor(Math.random() * townWalls.length)].getY(), townWalls[Math.floor(Math.random() * townWalls.length)].getY()];

    // Randomly pick two opposite sides
    const pathSides = [
        { x: sideX[Math.floor(Math.random() * 2)], y: sideY[Math.floor(Math.random() * 2)] }, // Left side
        { x: sideX[Math.floor(Math.random() * 2)], y: sideY[Math.floor(Math.random() * 2)] }  // Right side
    ];

    pathSides.forEach(({ x: px, y: py }) => {
        let currentTile = getTileByCoordinates(px, py);
        removeTile(currentTile);
        let newTile = new Tile(px, py, "TownPath", "Path");
        grid[px][py] = newTile;
        emptyGrid[px][py] = "filled";
        tileset.push(grid[px][py]);
        generatePath(px, py, townList, poiList, grid, emptyGrid);

    });
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
            return isWithinGrid(nx, ny, gridSize) && (tile === null || tile.biome !== biomeKey) && nx < gridSize && ny < gridSize
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

    const biomeDeterminedSize = Math.ceil(biome.minSize * (1 + ((1 + Math.random()) * 0.3)) * gridSize / gridSizeRatio);
    var lastX = startX;
    var lastY = startY;
    let badAttempts = 0;

    while (tilesPlaced < biomeDeterminedSize && frontier.length > 0 && badAttempts < maxBadAttempts) {
        const [x, y] = frontier[Math.floor(Math.random() * frontier.length)];

        const validNeighbors = getValidNeighbors(x, y);
        if (validNeighbors.length > 0 ) {
            const [nx, ny] = validNeighbors[Math.floor(Math.random() * validNeighbors.length)];
            if (isWithinGrid(nx, ny, gridSize) && getTileByCoordinates(nx, ny) == null) {
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
async function generateBiomes(gridSize, emptyGrid) {
    //console.log("PAUSE RUN");
    await delay(2000);
    console.log("BEGIN RUN");
    const grid = createEmptyGrid(gridSize);
    emptyGrid = createSudoGrid(gridSize);

    emptyGrid = emptyGrid.map(k => k.filter(e => e !== 'filled'));

    generateBorderWall(grid, emptyGrid);

    let biomes = Object.keys(biomeConfigs);
    let completedBiomeList = [];
    let nextBiomeKey = "Forest";
    placeBiome(nextBiomeKey, gridSize / 2, gridSize / 2, grid, emptyGrid)
    completedBiomeList.push(nextBiomeKey);

    for (var biome of biomes) {
        if (!biomeConfigs[biome].isFillerBiome) {
            let frequency = biomeConfigs[biome].frequency * gridSize / gridSizeRatio;
            let frequencyLoop = 0;
            let coordX = "";
            let coordY = "";
            console.log("RUNNING BIOME", biome);
            while ( frequencyLoop < frequency) {
                coordX = Math.floor(Math.random() * gridSize);
                coordY = Math.floor(Math.random() * gridSize);
                if (isWithinGrid(coordX, coordY, gridSize) && getTileByCoordinates(coordX, coordY) == null) {
                    frequencyLoop++;
                    placeBiome(biome, coordX, coordY, grid, emptyGrid)
                }
            }
        }
    }

    console.log("DONE MAIN BIOMES")

    function findFirstEmpty(x, y) {
        while (x++ < grid.length - 1) {
            while (y++ < grid.length - 1) {
                if (getTileByCoordinates(x, y) == null) {
                    return [x,y];
                }
            }
        }
        return [-1, -1];
    }

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
        console.log(glitchGrid);
        let glitchCount = 0;
        for (let ax = 1 ; ax < glitchGrid.length - 1 ; ax++) {
            for (let ay = 0 ; ay < glitchGrid[ax].length ; ay++) {
                if (glitchGrid[ax][ay] == null) {
                    console.log(ax, ay)
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
            let x = Math.floor(Math.random() * (gridSize - 1)) + 1;
            let y = Math.floor(Math.random() * (gridSize - 1)) + 1;
            if (x !== gridSize / 2 && y !== gridSize / 2) {
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
            let x = Math.floor((Math.random() * gridSize));
            let y = Math.floor((Math.random() * gridSize));
            let isOutsideBorder = (x - townWidth / 2 - 1) > 0 && (x + townWidth / 2 + 1) < gridSize && (y - townHeight / 2 - 1) > 0 && (y + townHeight / 2 + 1) < gridSize? false : true;
            let overLap1 = checkTownCoord(x + (townWidth / 2) + townBuffer, y + (townHeight / 2) + townBuffer);
            let overLap2 = checkTownCoord(x - (townWidth / 2) - townBuffer, y + (townHeight / 2) + townBuffer);
            let overLap3 = checkTownCoord(x + (townWidth / 2) + townBuffer, y - (townHeight / 2) - townBuffer);
            let overLap4 = checkTownCoord(x - (townWidth / 2) - townBuffer, y - (townHeight / 2) - townBuffer);
            let overLap5 = checkTownCoord(x + (townWidth / 2) + 1, y + (townHeight / 2) + 1);
            let overLap6 = checkTownCoord(x - (townWidth / 2) - 1, y + (townHeight / 2) + 1);
            let overLap7 = checkTownCoord(x + (townWidth / 2) + 1, y - (townHeight / 2) - 1);
            let overLap8 = checkTownCoord(x - (townWidth / 2) - 1, y - (townHeight / 2) - 1);
            let centerOverlap = false;
            if (x > (gridSize / 2) - 20 && x < (gridSize / 2) + 20) {
                if (y > (gridSize / 2) - 20 && y < (gridSize / 2) + 20) {
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
    
    renderGrid(grid);

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
                var newTile = new Tile(x, y, 'Forest', "River");
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
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 10px)`;
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

const delay = ms => new Promise(res => setTimeout(res, ms));
let gridSize = 100;
let tileset = [];
let gridSet = [];
let emptyGrid = [];
let poiList = [];
let townList = [];
const gridSizeRatio = 200;
// const maxPaths = 1;
// const maxRivers = 1;
// const townCount = 8;
const maxPaths = 20;
const maxRivers = 20;
const townCount = Math.floor(gridSize / 25);
const townBuffer = 20 * Math.floor(gridSize / gridSizeRatio);
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
gridSet = generateBiomes(gridSize, emptyGrid);