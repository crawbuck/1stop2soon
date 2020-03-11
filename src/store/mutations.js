const mutations = {
  addItem(state, payload) {
    const items = [...state.items];
    items.push(payload);
    state.items = items;
  },
  showPhotos(state) {
    state.showPhotos = true;
  },
  activePhotos(state) {
    const limit = state.items.length - 1;
    setInterval(() => {
      const arr = [];
      while (arr.length < 2) {
        const number = Math.floor(Math.random() * limit);
        if (arr.indexOf(number) === -1) arr.push(number);
      }
      state.activePhotos = arr;
    }, 3000);
  },
};

export default mutations;
