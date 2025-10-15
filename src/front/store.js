export const initialStore = () => {
  return {
    characterInfo: {
      details: {
        name: "MALEKITH THE WICKED",
        race: "HIGH ELF",
        characterClass: "WIZARD",
        subclass: "RUNECRAFTER",
        level: 7,
        hp: 73,
        ac: 12,
        hitDice: "3-D8",
        img: "https://i.pinimg.com/236x/aa/00/72/aa0072133c6bb0e1d968052509292a89.jpg",
      },
      stats: [
        {
          name: "STR",
          value: 12,
          check: 1,
          saving: 4,
          proficient: true,
        },
        {
          name: "DEX",
          value: 14,
          check: 2,
          saving: 2,
          proficient: false,
        },
        {
          name: "CON",
          value: 18,
          check: 4,
          saving: 7,
          proficient: false,
        },
        {
          name: "INT",
          value: 10,
          check: 0,
          saving: 3,
          proficient: false,
        },
        {
          name: "WIS",
          value: 18,
          check: 1,
          saving: 7,
          proficient: false,
        },
        {
          name: "CHA",
          value: 10,
          check: 0,
          saving: 0,
          proficient: false,
        },
      ],
      skills: [
        {
          name: "ATHLETICS",
          ability: "STR",
          proficient: false,
          expert: false,
        },
        {
          name: "ACROBATICS",
          ability: "DEX",
          proficient: false,
          expert: false,
        },
        {
          name: "SLEIGHT OF HAND",
          ability: "DEX",
          proficient: false,
          expert: false,
        },
        {
          name: "STEALTH",
          ability: "DEX",
          proficient: false,
          expert: false,
        },
        {
          name: "ARCANA",
          ability: "INT",
          proficient: false,
          expert: false,
        },
        {
          name: "HISTORY",
          ability: "INT",
          proficient: false,
          expert: false,
        },
        {
          name: "INVESTIGATION",
          ability: "INT",
          proficient: false,
          expert: false,
        },
        {
          name: "NATURE",
          ability: "INT",
          proficient: false,
          expert: false,
        },
        {
          name: "RELIGION",
          ability: "INT",
          proficient: false,
          expert: false,
        },
        {
          name: "ANIMAL HANDLING",
          ability: "WIS",
          proficient: false,
          expert: false,
        },
        {
          name: "INSIGHT",
          ability: "WIS",
          proficient: false,
          expert: false,
        },
        {
          name: "MEDICINE",
          ability: "WIS",
          proficient: false,
          expert: false,
        },
        {
          name: "PERCEPTION",
          ability: "WIS",
          proficient: false,
          expert: false,
        },
        {
          name: "SURVIVAL",
          ability: "WIS",
          proficient: false,
          expert: false,
        },
        {
          name: "DECEPTION",
          ability: "CHA",
          proficient: false,
          expert: false,
        },
        {
          name: "INTIMIDATION",
          ability: "CHA",
          proficient: false,
          expert: false,
        },
        {
          name: "PERFORMANCE",
          ability: "CHA",
          proficient: false,
          expert: false,
        },
        {
          name: "PERSUASION",
          ability: "CHA",
          proficient: false,
          expert: false,
        },
      ],
      speed: 34,
      initiative: 2,
      proficiency: 3,
      passiveWIS: 30,
      consumables: [
        {
          name: "Bardic Inspiration",
          ammount: 3,
        },
        {
          name: "Second Wind",
          ammount: 1,
        },
        {
          name: "Luck Points",
          ammount: 3,
        },
        {
          name: "Auto Crit",
          ammount: 1,
        },
      ],
    },
    races: [],
    classes: [],
    subclasses: [],
    spells: [],
    apiURL: "https://www.dnd5eapi.co/api/2014",
    races: [
      {
        index: "dragonborn",
        name: "Dragonborn",
        url: "/api/2014/races/dragonborn",
      },
      {
        index: "dwarf",
        name: "Dwarf",
        url: "/api/2014/races/dwarf",
      },
      {
        index: "elf",
        name: "Elf",
        url: "/api/2014/races/elf",
      },
      {
        index: "gnome",
        name: "Gnome",
        url: "/api/2014/races/gnome",
      },
      {
        index: "half-elf",
        name: "Half-Elf",
        url: "/api/2014/races/half-elf",
      },
      {
        index: "half-orc",
        name: "Half-Orc",
        url: "/api/2014/races/half-orc",
      },
      {
        index: "halfling",
        name: "Halfling",
        url: "/api/2014/races/halfling",
      },
      {
        index: "human",
        name: "Human",
        url: "/api/2014/races/human",
      },
      {
        index: "tiefling",
        name: "Tiefling",
        url: "/api/2014/races/tiefling",
      },
    ],
    classes: [
      {
        index: "barbarian",
        name: "Barbarian",
        url: "/api/2014/classes/barbarian",
      },
      {
        index: "bard",
        name: "Bard",
        url: "/api/2014/classes/bard",
      },
      {
        index: "cleric",
        name: "Cleric",
        url: "/api/2014/classes/cleric",
      },
      {
        index: "druid",
        name: "Druid",
        url: "/api/2014/classes/druid",
      },
      {
        index: "fighter",
        name: "Fighter",
        url: "/api/2014/classes/fighter",
      },
      {
        index: "monk",
        name: "Monk",
        url: "/api/2014/classes/monk",
      },
      {
        index: "paladin",
        name: "Paladin",
        url: "/api/2014/classes/paladin",
      },
      {
        index: "ranger",
        name: "Ranger",
        url: "/api/2014/classes/ranger",
      },
      {
        index: "rogue",
        name: "Rogue",
        url: "/api/2014/classes/rogue",
      },
      {
        index: "sorcerer",
        name: "Sorcerer",
        url: "/api/2014/classes/sorcerer",
      },
      {
        index: "warlock",
        name: "Warlock",
        url: "/api/2014/classes/warlock",
      },
      {
        index: "wizard",
        name: "Wizard",
        url: "/api/2014/classes/wizard",
      },
    ],
    subclasses: [
      {
        index: "berserker",
        name: "Berserker",
        url: "/api/2014/subclasses/berserker",
      },
      {
        index: "champion",
        name: "Champion",
        url: "/api/2014/subclasses/champion",
      },
      {
        index: "devotion",
        name: "Devotion",
        url: "/api/2014/subclasses/devotion",
      },
      {
        index: "draconic",
        name: "Draconic",
        url: "/api/2014/subclasses/draconic",
      },
      {
        index: "evocation",
        name: "Evocation",
        url: "/api/2014/subclasses/evocation",
      },
      {
        index: "fiend",
        name: "Fiend",
        url: "/api/2014/subclasses/fiend",
      },
      {
        index: "hunter",
        name: "Hunter",
        url: "/api/2014/subclasses/hunter",
      },
      {
        index: "land",
        name: "Land",
        url: "/api/2014/subclasses/land",
      },
      {
        index: "life",
        name: "Life",
        url: "/api/2014/subclasses/life",
      },
      {
        index: "lore",
        name: "Lore",
        url: "/api/2014/subclasses/lore",
      },
      {
        index: "open-hand",
        name: "Open Hand",
        url: "/api/2014/subclasses/open-hand",
      },
      {
        index: "thief",
        name: "Thief",
        url: "/api/2014/subclasses/thief",
      },
    ],
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "set_races":
      return {
        ...store,
        races: action.payload,
      };

    case "set_classes":
      return {
        ...store,
        classes: action.payload,
      };

    case "set_subclasses":
      return {
        ...store,
        subclasses: action.payload,
      };

    case "set_spells":
      return {
        ...store,
        spells: action.payload,
    case "save_character":
      const { name, race, characterClass, subclass } = action.payload;
      return {
        ...store,
        characterInfo: {
          ...store.characterInfo,
          details: {
            name: name,
            race: race,
            characterClass: characterClass,
            subclass: subclass,
          },
        },
      };

    default:
      throw Error("Unknown action.");
  }
}
