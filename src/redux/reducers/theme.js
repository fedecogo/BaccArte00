const themeReducer = (state = { isDarkTheme: localStorage.getItem('theme') === 'dark' }, action) => {
    switch (action.type) {
      case 'TOGGLE_THEME':
        const newTheme = state.isDarkTheme ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        return { ...state, isDarkTheme: !state.isDarkTheme };
      default:
        return state;
    }
  };
  
  export default themeReducer;
  