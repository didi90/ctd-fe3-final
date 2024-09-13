export const reducer = (state, action) => {
    switch (action.type) {
        case "GET_CHARS":
            return { ...state, odontologo: action.payload };
        case "ADD_FAV":
            return { ...state, favorites: [...state.favorites, action.payload] };
        case "RESET":
            return { ...state, favorites: [] };
        case "CHANGE_THEME":
            return { ...state, theme: state.theme === "dark-mode" ? "light" : "dark-mode",};
        default:
            return state;
    }
};