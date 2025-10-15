export const initialState = {
  user: null,
  inventoryList: [],
  bagItems: [],
  selectedCharacter: null,
  loading: false,
  error: null,
};

export function reducer(state, action) {
  switch (action.type) {
    case "set_inventory":
      return { ...state, inventoryList: action.payload };

    case "set_bag_items":
      return { ...state, bagItems: action.payload };

    case "add_bag_item":
      return { ...state, bagItems: [...state.bagItems, action.payload] };

    case "remove_bag_item":
      return {
        ...state,
        bagItems: state.bagItems.filter(
          (item) => item.id !== action.payload
        ),
      };

    case "update_bag_item":
      return {
        ...state,
        bagItems: state.bagItems.map((item) =>
          item.id === action.payload.id ? { ...item, ...action.payload } : item
        ),
      };

    default:
      return state;
  }
}

