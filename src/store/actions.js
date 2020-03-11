import Arena from 'are.na';

const actions = {
  async init(context) {
    const arena = new Arena();
    await arena.channel('one-stop-too-soon').get()
      .then((chan) => {
        chan.contents.map((item) => context.commit('addItem', item));
      })
      .catch((err) => err);
  },
  showPhotos(context) {
    context.commit('showPhotos');
    context.commit('activePhotos');
  },
};

export default actions;
