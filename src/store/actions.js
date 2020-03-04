import Arena from 'are.na';

const actions = {
  async init(context) {
    const arena = new Arena();
    await arena.channel('1-stop-2-soon').get()
      .then((chan) => {
        chan.contents.map((item) => context.commit('addItem', item));
      })
      .catch((err) => console.log(err));
  },
};

export default actions;
