import "../store/constData.js";
import * as constData from "src/store/constData";

const state = {
  budget: constData.budget,
  recCard: constData.recCard,
  catCard: constData.catCard,
  hotelCard: constData.hotelCard,
  model_parameter: [],
  model_init_param: {},
  hotel_parameter: [],
  hotel_init_param: {},
  formattedStartDate: "2023-04-27"
};
const mutations = {
  setRemoveFromBudget(state, budget) {
    state.budget -= budget.toFixed(2);
    state.budget.toFixed(2);
  },
  setBudget(state, budget) {
    state.budget = budget;
    state.budget.toFixed(2);
  },
  setRecCard(state, recCard) {
    state.recCard.push(recCard);
  },
  setModelInit(state, model_init_param) {
    state.model_init_param = model_init_param;
  },
  setModelParam(state, model_parameter) {
    state.model_init_param.cat_rating = model_parameter;
    const finalJSON = JSON.stringify(state.model_init_param);
    state.model_parameter.push(finalJSON);
  },
  setHotelInit(state, hotel_init_param) {
    state.hotel_init_param = hotel_init_param;
  },
  setHotelParam(state, hotel_parameter) {
    state.hotel_init_param.amenities = hotel_parameter;
    const finalJSON = JSON.stringify(state.hotel_init_param);
    state.hotel_parameter.push(finalJSON);
  },
  resetValues(state) {
    state.budget = 0;
    state.recCard = {};
    state.catCard = {};
    state.hotelCard = [];
    state.model_parameter = [];
    state.model_init_param = {};
    state.hotel_parameter = [];
    state.hotel_init_param = {};
    state.formattedStartDate = "";
  },
  setAddFromBudget(state, budget) {
    console.log(budget);
    state.budget += budget;
  },
  setFormattedDate(state, date){
    state.formattedStartDate = date;
  }
};

const actions = {
  updateBudget({ commit }, budget) {
    commit("setBudget", budget);
  },
  removeFromBudget({ commit }, budget) {
    commit("setRemoveFromBudget", budget);
  },
  addFromBudget({ commit }, budget) {
    commit("setAddFromBudget", budget);
  },
  updateRecCard({ commit }, recCard) {
    commit("setRecCard", recCard);
  },
  updateModelInit({ commit }, model_init_param) {
    commit("setModelInit", model_init_param);
  },
  updateModelParam({ commit }, model_parameter) {
    commit("setModelParam", model_parameter);
  },
  updateHotelInit({ commit }, hotel_init_param) {
    commit("setHotelInit", hotel_init_param);
  },
  updateHotelParam({ commit }, hotel_parameter) {
    commit("setHotelParam", hotel_parameter);
  },
  updateAllValues({ commit }) {
    commit("resetValues");
  },
  updateFormattedDate({commit}, date){
    commit("setFormattedDate", date)
  }
};
const getters = {
  getBudget(state) {
    return state.budget.toFixed(2);
  },
  getRecCard(state) {
    return state.recCard;
  },
  getCatCard(state) {
    return state.catCard;
  },
  getModelParam(state) {
    return state.model_parameter;
  },
  getModelInit(state) {
    return state.model_init_param;
  },
  getHotelParam(state) {
    return state.hotel_parameter;
  },
  getHotelInit(state) {
    return state.hotel_init_param;
  },
  getStartDate(state){
    return state.formattedStartDate;
  }

};


export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
};
