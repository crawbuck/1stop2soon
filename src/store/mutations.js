const mutations = {
  addItem(state, payload) {
    let items = [...state.items];
    items.push(payload);
    state.items = items;
  }
}

export default mutations;