export default {
  namespaced: true,
  state: {
    treeData: null,
  },
  mutations: {
    setTreeData(state, tree) {
      state.treeData = tree;
    },
  },
};
