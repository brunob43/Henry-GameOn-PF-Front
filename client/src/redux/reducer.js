import { 
  GET_GAMES,
  SET_CURRENT_PAGE, 
  GET_DETAIL_FROM_STATE, 
  FILTER_BY_NAME_GAMES,
  FILTER_BY_VIEWS_GAMES, 
  FILTER_BY_TOPIC_GAMES, 
  FILTER_BY_DIFFICULTY_GAMES,
  GET_NAME_GAMES,
  GET_DOCS,
  GET_NAME_DOCS,
  FILTER_BY_TOPIC_DOCS,
  FILTER_BY_NAME_DOCS,
  GET_USERS,
  GET_NAME_USERS,
  FILTER_BY_NAME_USERS
} from "./actions";

const initialState = {
  allGames : [],
  allDocs : [],
  allUsers : [],
  topics: ["Languages", "String Methods", "Code"],
  docTopics: [],
  dificulties: ["Easy", "Medium", "Hard"],
  currentPage: 1,
  gameDetail: [],
  error: "",
  games : [],
  docs : [],
  users : []
};

const rootReducer = (state = initialState, action) => {
  switch(action.type){
    case GET_GAMES:
      if (!action.payload.length == 0) {    
        return {
         ...state, 
         games: action.payload,
         allGames: action.payload,
         currentPage: 1,
        };
      } else {
        return { 
          ...state,
          error: "Can't get games" 
        };
      }

    case GET_NAME_GAMES:
      if (!action.payload.length == 0) {    
        return {
         ...state, 
         games: action.payload,
         allGames: action.payload,
         currentPage: 1,
        };
      } else {
        return { 
          ...state,
          error: "Can't get games" 
        };
      }

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    case GET_DETAIL_FROM_STATE:
      const games = [...state.allGames];
      const gamesDetail = games.filter(
        (g) => g.game_id.toString() === action.payload
      );

      return {
        ...state,
        gameDetail: gamesDetail,
      };

    case FILTER_BY_NAME_GAMES:
      const gamesName = [...state.games];

      const nameFilter = action.payload === "asc" 
      ? gamesName.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (b.name > a.name) {
          return -1;
        }
        return 0;
      }) 
      : gamesName.sort((a, b) => {
        if (a.name > b.name) {
         return -1;
        }
        if (b.name > a.name) {
          return 1;
        }
        return 0;
      });

      return {
        ...state,
        games: nameFilter,
      };
    
    case FILTER_BY_VIEWS_GAMES:
      const gamesViews = [...state.games];
  
      const viewsFilter = action.payload === "popular" 
      ? gamesViews.sort((a, b) => {
        if (a.views > b.views) {
          return 1;
        }
        if (b.views > a.views) {
          return -1;
        }
        return 0;
      }) 
      : gamesViews.sort((a, b) => {
        if (a.views > b.views) {
         return -1;
        }
        if (b.views > a.views) {
          return 1;
        }
        return 0;
      });

      return {
        ...state,
        games: viewsFilter,
      };

    case FILTER_BY_TOPIC_GAMES:
      const gamesFT = [...state.games]
      let gamesByTopic = []
      gamesFT.forEach(game => game.topic === action.payload ? gamesByTopic.push(game) : false)
      return {
          ...state,
          games: gamesByTopic,
          error: gamesByTopic.length > 0 ? false : `There are no games with the "${action.payload}" topic`
      }

    case FILTER_BY_DIFFICULTY_GAMES:
      const gamesFD = [...state.games]
      let gamesByDifficulty = []
      gamesFD.forEach(game => game.difficulty === action.payload ? gamesByDifficulty.push(game) : false)
      return {
        ...state,
        games: gamesByDifficulty,
        error: gamesByDifficulty.length > 0 ? false : `There are no games with ${action.payload} difficulty`
      }

    case GET_DOCS: 
    if (!action.payload.length == 0) {    
      return {
       ...state, 
       docs: action.payload,
       allDocs: action.payload,
       currentPage: 1,
      };
    } else {
      return { 
        ...state,
        error: "Can't get docs" 
      };
    }

    case GET_NAME_DOCS:
      if (!action.payload.length == 0) {    
        return {
         ...state, 
         docs: action.payload,
         allDocs: action.payload,
         currentPage: 1,
        };
      } else {
        return { 
          ...state,
          error: "Can't get docs" 
        };
      }

    case FILTER_BY_TOPIC_DOCS:
      const docsFT = [...state.docs]
      let docsByTopic = []
      docsFT.forEach(doc => doc.topic === action.payload ? docsByTopic.push(doc) : false)
      return {
          ...state,
          docs: docsByTopic,
          error: docsByTopic.length > 0 ? false : `There are no docs with the "${action.payload}" topic`
      }
      
    case FILTER_BY_NAME_DOCS:
      const docsName = [...state.docs];

      const nameDocsFilter = action.payload === "asc" 
      ? docsName.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (b.name > a.name) {
          return -1;
        }
        return 0;
      }) 
      : docsName.sort((a, b) => {
        if (a.name > b.name) {
         return -1;
        }
        if (b.name > a.name) {
          return 1;
        }
        return 0;
      });

      return {
        ...state,
        docs: nameDocsFilter,
      };

    case GET_USERS: 
    if (!action.payload.length == 0) {    
      return {
       ...state, 
       users: action.payload,
       allUsers: action.payload,
       currentPage: 1,
      };
    } else {
      return { 
        ...state,
        error: "Can't get users" 
      };
    }

    case GET_NAME_USERS: 
    if (!action.payload.length == 0) {    
      return {
       ...state, 
       users: action.payload,
       allUsers: action.payload,
       currentPage: 1,
      };
    } else {
      return { 
        ...state,
        error: "Can't get users" 
      };
    }

    case FILTER_BY_NAME_USERS: 
    const userName = [...state.users];

      const nameUsersFilter = action.payload === "asc" 
      ? userName.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (b.name > a.name) {
          return -1;
        }
        return 0;
      }) 
      : userName.sort((a, b) => {
        if (a.name > b.name) {
         return -1;
        }
        if (b.name > a.name) {
          return 1;
        }
        return 0;
      });

      return {
        ...state,
        users: nameUsersFilter,
      };


    

      

    default: return {...state}
  }
}

export default rootReducer;