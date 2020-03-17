
import randomNumber from '../utils/randomNumber';

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
    const max = state.items.length - 1;
    state.activePhotos = [randomNumber(max), randomNumber(max)];
    setInterval(() => {
      state.activePhotos = [randomNumber(max), randomNumber(max)];
    }, 3000);
  },
};

export default mutations;
