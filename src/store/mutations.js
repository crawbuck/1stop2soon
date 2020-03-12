const mutations = {
  addItem(state, payload) {
    const items = [...state.items];
    items.push(payload);
    state.items = items;
  },
  showPhotos(state) {
    state.showPhotos = true;
  },
};

export default mutations;
