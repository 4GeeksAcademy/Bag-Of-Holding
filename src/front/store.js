export const initialStore = () => {
  return {
    user_id: 2,
    characterInfo:{},
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
