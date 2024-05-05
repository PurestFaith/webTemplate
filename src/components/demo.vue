<template>
  <div>
    <el-tree ref="treeRef" :data="data" show-checkbox check-strictly node-key="id" default-expand-all draggable @check="handlercurrent">
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ data.name }}</span>
        <span>
          <el-button type="text" size="mini" @click="() => append(data)">
            <!-- <div style="width: 20px; height: 20px; background-color: yellowgreen">+</div> -->
          </el-button>
        </span>
      </span>
    </el-tree>
  </div>
</template>

<script>
export default {
  name: "tree",
  data() {
    return {
      data: [
        {
          id: 3,
          name: "三车间",
          level: 1,
        },
        {
          id: 4,
          name: "四车间",
          level: 1,
        },
        {
          id: 5,
          name: "五车间",
          level: 1,
          children: [
            {
              id: 51,
              name: "五车间A",
              level: 2,
            },
            {
              id: 53,
              name: "五车间C",
              level: 2,
            },
          ],
        },
      ],
    };
  },
  methods: {
    handlercurrent(data, list) {
      if (data.level === 1) {
        this.$refs.treeRef.setCheckedKeys([data.id]);
      } else if (data.level === 2) {
        list.checkedNodes.forEach((element) => {
          if (element.level === 1) {
            //取消当前选中节点
            this.$refs.treeRef.setCheckedKeys([data.id]);
          }
        });
      }
    },
  },
};
</script>
