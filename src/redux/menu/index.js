// Import libraries
import { createAction, handleActions } from "redux-actions";
import { createSelector } from "reselect";

const defaultState = [
  {
    id: 0,
    name: "investments",
    title: "Инвестиции",
    icon: "appstore-o",
    path: "investments",
    active: false
  },
  {
    id: 1,
    name: "applications",
    title: "Заявки",
    icon: "tag-o",
    path: "applications",
    active: false
  },
  {
    id: 2,
    name: "clients",
    title: "Клиенты",
    icon: "team",
    path: "clients",
    active: false
  }
];

// Exports selectors
export const getMenuItems = state => state.menuReducer;
export const getNameOfActiveMenuItem = createSelector(
  [getMenuItems],
  menuItems => {
    const foundedItem = menuItems.find(menuItem => menuItem.active);

    return foundedItem ? foundedItem.name : "";
  }
);

// Exports actions
export const toggleMenuItem = createAction("TOGGLE_MENU_ITEM", name => name);

// Exports reducer
export const menuReducer = handleActions(
  {
    [toggleMenuItem]: (state, action) =>
      state.map(
        menuItem =>
          action.payload === menuItem.name
            ? { ...menuItem, active: true }
            : { ...menuItem, active: false }
      )
  },
  defaultState
);
