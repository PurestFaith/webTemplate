export default {
  namespaced: true,
  state: {
    treeData: null,
    setEerTreeData: null,
  },
  mutations: {
    setTreeData(state, tree) {
      state.treeData = tree;
    },
    setEerTreeData(state, tree) {
      state.setEerTreeData = tree;
    },
  },
};
