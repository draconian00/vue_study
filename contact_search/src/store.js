import Vue from 'vue';
import Vuex from 'vuex';

import Constant from './constant';
import SearchApi from './api/SearchAPI';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    contacts: [],
  },
  mutations: {
    [Constant.SEARCH_CONTACT]: (state, payload) => {
      // eslint-disable-next-line
      state.contacts = payload.contacts;
    },
  },
  actions: {
    [Constant.SEARCH_CONTACT]: (store, payload) => {
      SearchApi.searchContact(payload.name)
        .then((response) => {
          store.commit(Constant.SEARCH_CONTACT, { contacts: response.data });
        });
    },

    /**
     * async/await actions
     * async [Constant.SEARCH_CONTACT](store, payload) {
     *  let response = await SearchApi.searchContact(payload.name);
     *  store.commit(Constant.SEARCH_CONTACT, { contacts: response.data });
     * }
     */
  },
});
