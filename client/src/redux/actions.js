import axios from "axios";
export const GET_GAMES = "GET_GAMES";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const GET_DETAIL_FROM_STATE = "GET_DETAIL_FROM_STATE";
export const FILTER_BY_NAME_GAMES = "FILTER_BY_NAME_GAMES";
export const FILTER_BY_VIEWS_GAMES = "FILTER_BY_VIEWS_GAMES";
export const FILTER_BY_TOPIC_GAMES = "FILTER_BY_TOPIC_GAMES";
export const FILTER_BY_DIFFICULTY_GAMES = "FILTER_BY_DIFFICULTY";
export const GET_NAME_GAMES = "GET_NAME_GAMES";
export const GET_DOCS = "GET_DOCS";
export const GET_NAME_DOCS = "GET_NAME_DOCS";
export const FILTER_BY_TOPIC_DOCS = "FILTER_BY_TOPIC_DOCS";
export const FILTER_BY_NAME_DOCS = "FILTER_BY_NAME_DOCS";
export const GET_USERS = "GET_USERS";
export const GET_NAME_USERS = "GET_NAME_USERS";
export const FILTER_BY_NAME_USERS = "FILTER_BY_NAME_USERS";
export const ERROR = "ERROR";
export const POST_USER = "POST_USER"


export function getGames() {
  return async function (dispatch) {

  const apiGames = await axios.get("/game");
  const games = apiGames.data;
  

    dispatch({

      type: GET_GAMES,
      payload: games,
    });
  }catch (error){
    return dispatch({
      type: ERROR,
      payload: "Games could not be loaded",
    });
  };
};
}

export function setError(payload) {
  return {
    type: ERROR,
    payload,
  };
};

export function getNameGames(game_name) {
  return async function (dispatch) {

  const apiGames = await axios.get(`/game?name=${game_name}`);

  const games = apiGames.data;
  return dispatch({
      type: GET_NAME_GAMES,
      payload: games,
    });
  } catch (error) {
    return dispatch ({
      type: ERROR,
      payload:"There are no games with that name",
    });
  }
};
}

export function setCurrentPage(payload) {
  return {
    type: SET_CURRENT_PAGE,
    payload,
  };
};

export function getDetailFromState(payload) {
  return {
    type: GET_DETAIL_FROM_STATE,
    payload,
  };
};

export const filterByNameGames = (payload) => {
  return {
    type: FILTER_BY_NAME_GAMES,
    payload,
  };
};

export const filterByViewsGames = (payload) => {
  return {
    type: FILTER_BY_VIEWS_GAMES,
    payload,
  };
};

export const filterByTopicGames = (payload) => {
  return async function (dispatch) {
    dispatch({
      type: FILTER_BY_TOPIC_GAMES,
      payload,
    });  
  };
};

export const filterByDifficultyGames = (payload) => {
  return function (dispatch) {
    dispatch({
      type: FILTER_BY_DIFFICULTY_GAMES,
      payload,
    });  
  };
};

export function getDocs() {
  return async function (dispatch) {

  const apiDocs = await axios.get("/doc");
  const Docs = apiDocs.data;
  console.log(Docs)
    dispatch({

      type: GET_DOCS,
      payload: Docs,
    });
  } catch (error) {
    return dispatch({
      type: ERROR,
      payload:"Docs were not loaded",
    });
  }
};
}

export function getNameDocs(docs_name) {

  return async function (dispatch) {
  const apiDocs = await axios.get(`/doc?name=${docs_name}`);

  const Docs = apiDocs.data;
  return dispatch({
      type: GET_NAME_DOCS,
      payload: Docs,
    });
  } catch (error){
    return dispatch({
      type:ERROR,
      payload: "There is no docs with that name"
    })
  }
};
}

export const filterByTopicDocs = (payload) => {
  return async function (dispatch) {
    dispatch({
      type: FILTER_BY_TOPIC_DOCS,
      payload,
    });  
  };
};

export const filterByNameDocs = (payload) => {
  return {
    type: FILTER_BY_NAME_DOCS,
    payload,
  };
};

export function getUsers() {
  return async function (dispatch) {

  const apiUsers = await axios.get("/users");

  const Users = apiUsers.data;
  return dispatch({
      type: GET_USERS,
      payload: Users,
    });
  }catch (error) {
    return dispatch({
      type: ERROR,
      payload: "Users were not loaded"
    })
  }
};
}

export function getNameUsers(user_name) {
  return async function (dispatch) {

  const apiUsers = await axios.get(`/users?name=${user_name}`);

  const Users = apiUsers.data;
  return dispatch({
      type: GET_NAME_USERS,
      payload: Users,
    });
  }catch (error){
    return dispatch({
      type:ERROR,
      payload:"There is no user with that name"
    });
  }
};
}

export function postUser() {
  return async function (dispatch) {
  const response = await axios.post(`/user`);
  console.log(response)
  return response;
};
}



export const filterByNameUsers = (payload) => {
  return {
    type: FILTER_BY_NAME_USERS,
    payload,
  };
};