import { 
  GET_GAMES,
  SET_CURRENT_PAGE_GAMES,
  SET_CURRENT_PAGE_DOCS,  
  GET_GAME_DETAIL_FROM_STATE, 
  FILTER_BY_NAME_GAMES,
  FILTER_BY_VIEWS_GAMES, 
  FILTER_BY_TOPIC_GAMES, 
  FILTER_BY_DIFFICULTY_GAMES,
  GET_NAME_GAMES,
  GET_DOCS,
  GET_NAME_DOCS,
  FILTER_BY_TOPIC_DOCS,
  FILTER_BY_NAME_DOCS,
  FILTER_BY_VIEWS_DOCS, 
  GET_USERS,
  GET_USER_DETAIL,
  GET_NAME_USERS,
  FILTER_BY_NAME_USERS,
  ERROR_GAMES,
  ERROR_DOCS,
  POST_USERS,
  GET_TOPIC_DOCS,
  GET_DOC_DETAIL_FROM_STATE,
  SET_PROFILE,
  RESET_PROFILE,
  GET_DONATIONS,
  GET_GAMES_AD,
  GET_NAME_GAMES_AD,
  FILTER_BY_VIEWS_GAMES_AD,
  GET_GAME_DETAIL_FROM_STATE_AD,
  GET_DOCS_AD,
  FILTER_BY_VIEWS_DOCS_AD,
  GET_NAME_DOCS_AD,
  GET_DOC_DETAIL_FROM_STATE_AD
  
} from "./actions";

const initialState = {
  allGames : [],
  allDocs : [],
  allUsers : [],
  topics: ["Languages", "Strings Methods", "Code", "General"],
  docTopics: [],
  dificulties: ["Easy", "Medium", "Hard"],
  currentPageGames: 1,
  currentPageDocs: 1,
  gameDetail: [],
  gameDetailAd:{},
  errorGames: "",
  errorDocs: "",
  games : [],
  gamesAd:[],
  docs : [],
  docsAd:[],
  users : [],
  docDetail: [],
  docDetailAd:{},
  profile: {},
  donations:[],
  userDetail:{}
};

const rootReducer = (state = initialState, action) => {
  switch(action.type){
    case GET_DOCS_AD:
      return{
        ...state,
        docsAd: action.payload
      }
    case GET_NAME_DOCS_AD:
        return{
          ...state,
          docsAd: action.payload
        }
    case GET_GAMES_AD:
      return{
        ...state,
        gamesAd: action.payload
      }
    case GET_DONATIONS:
      return{
        ...state,
        donations:action.payload
      }
    case GET_GAMES:
      //if (!action.payload.length === 0) {    
        return {
         ...state, 
         games: action.payload,
         allGames: action.payload,
         currentPageGames: 1,
        };
    
    case ERROR_GAMES: 
      return { 
        ...state, 
        errorGames: action.payload,
      }  

    case ERROR_DOCS: 
      return { 
        ...state, 
        errorDocs: action.payload,
      }  

    case GET_NAME_GAMES:
     // if (!action.payload.length === 0) {    
        return {
         ...state, 
         games: action.payload,
         allGames: action.payload,
         currentPageGames: 1,
        };
     
    case GET_NAME_GAMES_AD:
      return{
        ...state,
        gamesAd: action.payload
      }
    case SET_CURRENT_PAGE_GAMES:
      return {
        ...state,
        currentPageGames: action.payload,
      };

    case GET_GAME_DETAIL_FROM_STATE:
      const games = [...state.allGames];
      const gamesDetail = games.filter(
        (g) => g.game_id.toString() === action.payload
      );

      return {
        ...state,
        gameDetail: gamesDetail,
      };
    case GET_GAME_DETAIL_FROM_STATE_AD:
      const gamesAd = [...state.gamesAd];
      const gamesDetailAd = games.filter(
        (g) => g.game_id.toString() === action.payload
      );

      return {
        ...state,
        gameDetailAd: gamesDetail[0],
      };
    case GET_USER_DETAIL:
      const users = [...state.allUsers];
      const userDetail = users.filter(
        (g) => g.game_id.toString() === action.payload
      );

      return {
        ...state,
        gameDetail: gamesDetail,
      };

    case GET_DOC_DETAIL_FROM_STATE:
        const docs = [...state.allDocs];
        const docsDetail = docs.filter(
          (g) => g.doc_id.toString() === action.payload
        );
  
        return {
          ...state,
          docDetail: docsDetail[0],
        }; 

    case GET_DOC_DETAIL_FROM_STATE_AD:
          const docsAd = [...state.docsAd];
          const docsDetailAd = docsAd.filter(
            (g) => g.doc_id.toString() === action.payload
          );
    
          return {
            ...state,
            docDetailAd: docsDetailAd[0],
          }; 

    case FILTER_BY_NAME_GAMES:
      const gamesName = [...state.games];

      const nameFilter = action.payload === "asc" 
      ? gamesName.sort((a, b) => {
        if (a.game_name > b.game_name) {
          return 1;
        }
        if (b.game_name > a.game_name) {
          return -1;
        }
        return 0;
      }) 
      : gamesName.sort((a, b) => {
        if (a.game_name > b.game_name) {
         return -1;
        }
        if (b.game_name > a.game_name) {
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
        if (a.game_views > b.game_views) {
          return -1;
        }
        if (b.game_views > a.game_views) {
          return 1;
        }
        return 0;
      }) 
      : gamesViews.sort((a, b) => {
        if (a.game_views > b.game_views) {
         return 1;
        }
        if (b.game_views > a.game_views) {
          return -1;
        }
        return 0;
      });

      return {
        ...state,
        games: viewsFilter,
      };
    
    case FILTER_BY_VIEWS_GAMES_AD:
        const gamesViewsAd = [...state.gamesAd];
    
        const viewsFilterAd = action.payload === "popular" 
        ? gamesViewsAd.sort((a, b) => {
          if (a.game_views > b.game_views) {
            return -1;
          }
          if (b.game_views > a.game_views) {
            return 1;
          }
          return 0;
        }) 
        : gamesViewsAd.sort((a, b) => {
          if (a.game_views > b.game_views) {
           return 1;
          }
          if (b.game_views > a.game_views) {
            return -1;
          }
          return 0;
        });
  
        return {
          ...state,
          gamesAd: viewsFilterAd,
        };
   
    case FILTER_BY_TOPIC_GAMES:
      const gamesFT = [...state.games]
      let gamesByTopic = []
      gamesFT.forEach(game => game.game_topic === action.payload ? gamesByTopic.push(game) : false)
      return {
          ...state,
          games: gamesByTopic,
          errorGames: gamesByTopic.length > 0 ? false : `There are no games with the "${action.payload}" topic`
      }

    case FILTER_BY_DIFFICULTY_GAMES:
      const gamesFD = [...state.games]
      let gamesByDifficulty = []
      gamesFD.forEach(game => game.game_difficulty === action.payload ? gamesByDifficulty.push(game) : false)
      return {
        ...state,
        games: gamesByDifficulty,
        errorGames: gamesByDifficulty.length > 0 ? false : `There are no games with ${action.payload} difficulty`
      }

    case GET_DOCS: 
   // if (!action.payload.length === 0) {    
      return {
       ...state, 
       docs: action.payload,
       allDocs: action.payload,
       currentPageDocs: 1,
      };

    case SET_CURRENT_PAGE_DOCS:
      return {
        ...state,
        currentPageDocs: action.payload,
      };

    case GET_NAME_DOCS:
      //if (!action.payload.length === 0) {    
        return {
         ...state, 
         docs: action.payload,
         allDocs: action.payload,
         currentPageDocs: 1,
        };
     
    case GET_TOPIC_DOCS:
      return {
        ...state,
        docTopics: action.payload,
    };

    case FILTER_BY_TOPIC_DOCS:
      const docsFT = [...state.docs]
      let docsByTopic = []
      docsFT.forEach(doc => doc.doc_topic === action.payload ? docsByTopic.push(doc) : false)
      return {
          ...state,
          docs: docsByTopic,
          errorDocs: docsByTopic.length > 0 ? false : `There are no docs with the "${action.payload}" topic`
        }
      
    case FILTER_BY_NAME_DOCS:
      const docsName = [...state.docs];

      const nameDocsFilter = action.payload === "asc" 
      ? docsName.sort((a, b) => {
        if (a.doc_name > b.doc_name) {
          return 1;
        }
        if (b.doc_name > a.doc_name) {
          return -1;
        }
        return 0;
      }) 
      : docsName.sort((a, b) => {
        if (a.doc_name > b.doc_name) {
         return -1;
        }
        if (b.doc_name > a.doc_name) {
          return 1;
        }
        return 0;
      });

      return {
        ...state,
        docs: nameDocsFilter,
      };

    case FILTER_BY_VIEWS_DOCS:
      const docsViews = [...state.docs];
  
      const docsFilter = action.payload === "popular" 
      ? docsViews.sort((a, b) => {
        if (a.doc_views > b.doc_views) {
          return -1;
        }
        if (b.doc_views > a.doc_views) {
          return 1;
        }
        return 0;
      }) 
      : docsViews.sort((a, b) => {
        if (a.doc_views > b.doc_views) {
         return 1;
        }
        if (b.doc_views > a.doc_views) {
          return -1;
        }
        return 0;
      });

      return {
        ...state,
        docs: docsFilter,
      };

    case FILTER_BY_VIEWS_DOCS_AD:
        const docsViewsAd = [...state.docsAd];
    
        const docsFilterAd = action.payload === "popular" 
        ? docsViewsAd.sort((a, b) => {
          if (a.doc_views > b.doc_views) {
            return -1;
          }
          if (b.doc_views > a.doc_views) {
            return 1;
          }
          return 0;
        }) 
        : docsViewsAd.sort((a, b) => {
          if (a.doc_views > b.doc_views) {
           return 1;
          }
          if (b.doc_views > a.doc_views) {
            return -1;
          }
          return 0;
        });
  
        return {
          ...state,
          docsAd: docsFilterAd,
        };
    
    case GET_USERS: 
    // if (!action.payload.length === 0) {  
      // console.log("reducer",action.payload)  
      return {
       ...state, 
       users: action.payload,
       allUsers: action.payload,
       currentPageUsers: 1
      };
    // } else {
    //   return { 
    //     ...state,
    //     errorUsers: "Can't get users" 
    //   };
    // }

    case GET_NAME_USERS: 
    // if (!action.payload.length === 0) {    
      return {
       ...state, 
       users: action.payload,
       allUsers: action.payload,
      };
    // } else {
    //   return { 
    //     ...state,
    //     errorUsers: "Can't get users" 
    //   };
    

    case FILTER_BY_NAME_USERS: 
    const userName = [...state.users];

      const nameUsersFilter = action.payload === "asc" 
      ? userName.sort((a, b) => {
        if (a.user_name > b.user_name) {
          return 1;
        }
        if (b.user_name > a.user_name) {
          return -1;
        }
        return 0;
      }) 
      : userName.sort((a, b) => {
        if (a.user_name > b.user_name) {
         return -1;
        }
        if (b.user_name > a.user_name) {
          return 1;
        }
        return 0;
      });

      return {
        ...state,
        users: nameUsersFilter,
      };

    case POST_USERS: 
      return {
        ...state,
      }

    case SET_PROFILE:
        return {
          ...state, 
          profile: action.payload
        }
    case RESET_PROFILE:
        return{
          ...state,
        profile:{}
              }

    default: return {...state}

  }
}

export default rootReducer;