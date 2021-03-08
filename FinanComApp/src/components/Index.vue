<template>
  <div>
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-active="$route.path" :default-openeds="['3']" :router="true">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>聊天</template>
            <el-menu-item-group>
              <el-menu-item index="/ReturnBoard">私聊</el-menu-item>
              <el-menu-item index="/index3">群聊</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>社区</template>
            <el-menu-item-group>
              <el-menu-item index="2-1">最新话题</el-menu-item>
              <el-menu-item index="2-2">最热讨论</el-menu-item>
              <el-menu-item index="2-3">竞猜PK</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>推荐</template>
            <el-menu-item-group>
              <el-menu-item index="3-1">好股推荐</el-menu-item>
              <el-menu-item index="3-2">理财产品</el-menu-item>
              <el-menu-item index="/InfoList">投资大师</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title"><i class="el-icon-menu"></i>我的</template>
            <el-menu-item-group>
              <el-menu-item index="4-1">个人信息</el-menu-item>
              <el-menu-item index="4-2">收藏夹</el-menu-item>
              <el-menu-item index="4-3">历史记录</el-menu-item>
              <el-menu-item index="4-4">我的竞猜</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <router-link :to="{path: '/'}">
            <a-button type="primary">返回</a-button>
          </router-link>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>

      </el-container>
    </el-container>
  </div>


</template>

<script>

export default {
name: "Index.vue",
  data(){
    return {
    }
  },

}
</script>

<style scoped>
.el-header {
  background-color: #eef1f6;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
