const state = {
  budget: null,
  recCard: [],
  model_parameter:[],
  model_init_param: {},
  hotel_parameter: [],
  hotel_init_param: {}
};
const mutations = {
  setBudget(state, budget) {
    state.budget = budget;
  },
  setRecCard(state, recCard) {
    state.recCard.push(recCard);
  },
  setModelInit(state, model_init_param ){
    state.model_init_param = model_init_param;
  },
  setModelParam(state, model_parameter){
    state.model_init_param.cat_rating = model_parameter;
    const finalJSON = JSON.stringify(state.model_init_param);
    state.model_parameter.push(finalJSON);
  },
  setHotelInit(state, hotel_init_param){
    state.hotel_init_param = hotel_init_param;
  },
  setHotelParam(state, hotel_parameter){
    console.log("dummy", hotel_parameter)
  }
};

const actions = {
  updateBudget({ commit }, budget) {
    commit("setBudget", budget);
  },
  updateRecCard({ commit }, recCard) {
    commit("setRecCard", recCard);
  },
  updateModelInit({commit}, model_init_param){
    commit("setModelInit", model_init_param)
  },
  updateModelParam({commit}, model_parameter){
    commit("setModelParam", model_parameter)
  },
  updateHotelInit({commit}, hotel_init_param){
    commit("setHotelInit", hotel_init_param)
  },
  updateHotelParam({commit}, hotel_parameter){
    commit("setHotelParam", hotel_parameter)
  }
};
const getters = {
  getBudget(state) {
    return state.budget;
  },
  getRecCard(state) {
    return state.recCard;
  },
  getModelParam(state){
    return state.model_parameter;
  },
  getModelInit(state){
    return state.model_init_param;
  },
  getHotelParam(state){
    return state.hotel_parameter;
  },
  getHotelInit(state){
    return state.hotel_init_param;
  }
};


export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
};
