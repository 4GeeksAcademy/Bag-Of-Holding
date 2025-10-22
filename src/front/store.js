export let skillLevels = {str: 0, dex: 0, con:0, int: 0, wis: 0, cha: 0, loading: true} // Object that stores values for the various skills

export const initialStore = () => {
  return {
    strValue: 0,
    characterInfo: {
      details: {
        name: "Name",
        race: "Race",
        characterClass: "Class",
        subclass: "Subclass",
        level: 7,
        hp: 73,
        ac: 12,
        hitDice: "3-D8",
        img: "https://i.pinimg.com/236x/aa/00/72/aa0072133c6bb0e1d968052509292a89.jpg",
      },
      stats: [
        {
          name: "STR",
          value: skillLevels.str,
          check: 1,
          saving: 4,
          proficient: true,
        },
        {
          name: "DEX",
          value: skillLevels.dex,
          check: 2,
          saving: 2,
          proficient: false,
        },
        {
          name: "CON",
          value: skillLevels.con,
          check: 4,
          saving: 7,
          proficient: false,
        },
        {
          name: "INT",
          value: skillLevels.int,
          check: 0,
          saving: 3,
          proficient: false,
        },
        {
          name: "WIS",
          value: skillLevels.wis,
          check: 1,
          saving: 7,
          proficient: false,
        },
        {
          name: "CHA",
          value: skillLevels.cha,
          check: 0,
          saving: 0,
          proficient: false,
        },
      ],
      skills: [
        {
          name: "ATHLETICS",
          ability: skillLevels.str,
          proficient: false,
          expert: false,
        },
        {
          name: "ACROBATICS",
          ability: skillLevels.dex,
          proficient: false,
          expert: false,
        },
        {
          name: "SLEIGHT OF HAND",
          ability: skillLevels.dex,
          proficient: false,
          expert: false,
        },
        {
          name: "STEALTH",
          ability: skillLevels.dex,
          proficient: false,
          expert: false,
        },
        {
          name: "ARCANA",
          ability: skillLevels.int,
          proficient: false,
          expert: false,
        },
        {
          name: "HISTORY",
          ability: skillLevels.int,
          proficient: false,
          expert: false,
        },
        {
          name: "INVESTIGATION",
          ability: skillLevels.int,
          proficient: false,
          expert: false,
        },
        {
          name: "NATURE",
          ability: skillLevels.int,
          proficient: false,
          expert: false,
        },
        {
          name: "RELIGION",
          ability: skillLevels.int,
          proficient: false,
          expert: false,
        },
        {
          name: "ANIMAL HANDLING",
          ability: skillLevels.wis,
          proficient: false,
          expert: false,
        },
        {
          name: "INSIGHT",
          ability: skillLevels.wis,
          proficient: false,
          expert: false,
        },
        {
          name: "MEDICINE",
          ability: skillLevels.wis,
          proficient: false,
          expert: false,
        },
        {
          name: "PERCEPTION",
          ability: skillLevels.wis,
          proficient: false,
          expert: false,
        },
        {
          name: "SURVIVAL",
          ability: skillLevels.wis,
          proficient: false,
          expert: false,
        },
        {
          name: "DECEPTION",
          ability: skillLevels.cha,
          proficient: false,
          expert: false,
        },
        {
          name: "INTIMIDATION",
          ability: skillLevels.cha,
          proficient: false,
          expert: false,
        },
        {
          name: "PERFORMANCE",
          ability: skillLevels.cha,
          proficient: false,
          expert: false,
        },
        {
          name: "PERSUASION",
          ability: skillLevels.cha,
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
    characters: [], // Array to store list of all characters
    apiURL: "https://www.dnd5eapi.co/api/2014",
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
      };
    case "set_characters":
      return {
        ...store,
        characters: action.payload,
      };
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
