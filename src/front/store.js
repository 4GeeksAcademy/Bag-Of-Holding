export const initialStore = () => {
  return {
    user_id: 2,
    characterInfo: {
      stats: [
        {
          name: "STR",
          value: 10,
          proficient: true,
        },
        {
          name: "DEX",
          value: 10,
          proficient: false,
        },
        {
          name: "CON",
          value: 10,
          proficient: false,
        },
        {
          name: "INT",
          value: 10,
          proficient: false,
        },
        {
          name: "WIS",
          value: 10,
          proficient: false,
        },
        {
          name: "CHA",
          value: 10,
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
      name: "Name",
      race: "Race",
      characterClass: "Class",
      subclass: "Subclass",
      level: 1,
      hp: 0,
      ac: 0,
      hitDice: "",
      img: "https://i.pinimg.com/236x/aa/00/72/aa0072133c6bb0e1d968052509292a89.jpg",
      speed: 0,
      initiative: 0,
      proficiency: 0,
      consumables: [],
    },
    races: [],
    classes: [],
    subclasses: [],
    spells: [],
    user: null,
    inventoryList: [],
    bagItems: [],
    selectedCharacter: null,
    characters: [],
    loading: false,
    error: null,
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

    case "select_character":
      return {
        ...store,
        characterInfo: action.payload,
      };

    case "save_character_info":
      const { name, race, characterClass, subclass } = action.payload;
      return {
        ...store,
        characterInfo: {
          ...store.characterInfo,
          name: name,
          race: race,
          characterClass: characterClass,
          subclass: subclass,
        },
      };

    case "save_attributes":
      const { speed, initiative, proficiency } = action.payload;
      return {
        ...store,
        characterInfo: {
          ...store.characterInfo,
          speed: speed,
          initiative: initiative,
          proficiency: proficiency,
        },
      };

    case "update_consumables":
      const { consumables } = action.payload;
      return {
        ...store,
        characterInfo: {
          ...store.characterInfo,
          consumables: consumables,
        },
      };

    case "update_stats":
      const { stats } = action.payload;
      return {
        ...store,
        characterInfo: {
          ...store.characterInfo,
          stats: stats,
        },
      };

    case "update_info":
      const { level, hp, ac, hitDice } = action.payload;
      return {
        ...store,
        characterInfo: {
          ...store.characterInfo,
          level: level,
          hp: hp,
          ac: ac,
          hitDice: hitDice,
        },
      };

    case "set_inventory":
      return { ...state, inventoryList: action.payload };

    case "set_bag_items":
      return { ...state, bagItems: action.payload };

    case "add_bag_item":
      return { ...state, bagItems: [...state.bagItems, action.payload] };

    case "remove_bag_item":
      return {
        ...state,
        bagItems: state.bagItems.filter((item) => item.id !== action.payload),
      };

    case "update_bag_item":
      return {
        ...state,
        bagItems: state.bagItems.map((item) =>
          item.id === action.payload.id ? { ...item, ...action.payload } : item
        ),
      };
    default:
      throw Error("unknown action");
  }
}
