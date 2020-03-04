const mutations = {
  addItem(state, payload) {
    const items = [...state.items];
    items.push(payload);
    state.items = items;
  },
};

export default mutations;
