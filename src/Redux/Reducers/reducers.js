// Reducers/reducers.js
const initialState = {
    searchQuery: '',
    searchOption: 'University',
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SEARCH_QUERY':
        return {
          ...state,
          searchQuery: action.payload,
        };
      case 'SET_SEARCH_OPTION':
        return {
          ...state,
          searchOption: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  