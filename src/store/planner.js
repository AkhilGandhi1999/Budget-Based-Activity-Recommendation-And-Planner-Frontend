const state = {
  budget: null,
  recCard: [],
  model_parameter:[]
};
const mutations = {
  setBudget(state, budget) {
    state.budget = budget;
  },
  setRecCard(state, recCard) {
    state.recCard.push(recCard);
  }
};

const actions = {
  updateBudget({ commit }, budget) {
    commit("setBudget", budget);
  },
  updateRecCard({ commit }, recCard) {
    commit("setRecCard", recCard);
  }
};
const getters = {
  getBudget(state) {
    return state.budget;
  },
  getRecCard(state) {
    return state.recCard;
  }
};


export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
};
