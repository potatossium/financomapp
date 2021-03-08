<template>
  <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="listData">
    <div slot="footer"><b>用户展示列表</b></div>
    <a-list-item slot="renderItem" key="item.title" slot-scope="item, index">
      <template v-for="{ type, text } in actions" slot="actions">
        <span :key="type">
          <a-icon :type="type" style="margin-right: 8px" />
          {{ text }}
        </span>
      </template>
      <img
        slot="extra"
        width="272"
        alt="logo"
        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
      />
      <a-list-item-meta :description="item.description">
        <span slot="title" :href="item.href">{{ item.title }}</span>
        <a-avatar
          slot="avatar" :src="require('../assets/img/v'+item.avatar+'.jpg')"
        />
      </a-list-item-meta>
      {{ item.content }}
    </a-list-item>
  </a-list>
</template>

<script>
const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    // href: 'https://www.antdv.com/',
    title: `用户00${i}`,
    avatar: i%6+1,
    description:
      '<个性签名>',
    content:
      '2020年年化收益率超过60%，最大回撤15%'
  });
}


export default {
  name: "Index3.vue",
  data() {
    return {
      listData,
      pagination: {
        onChange: page => {
          console.log(page);
        },
        pageSize: 3,
      },
      actions: [
        { type: 'star-o', text: '156' },
        { type: 'like-o', text: '156' },
        { type: 'message', text: '2' },
      ],
    };
  },
}
</script>

<style scoped>
@import '../../node_modules/ant-design-vue/dist/antd.css';
</style>
