<template>
<div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
  <Row type="flex">
    <i-col :span="spanLeft" class="layout-menu-left">
      <Menu theme="dark" width="auto" :active-name="$route.path" accordion @on-select="handleSelect">
        <!-- logo -->
        <div class="layout-logo-left">LITE</div>
        <!-- 导航 -->
        <div class="layout-nav" v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
          <Submenu :name="index" v-if="item.leaf">
            <template slot="title">
              <Icon :type="item.icon" :size="iconSize"></Icon>
              {{item.name}}
            </template>
            <Menu-item :name="child.path" v-for="child in item.children" v-if="!child.hidden">{{child.name}}</Menu-item>
          </Submenu>
          <Menu-item :name="index" v-else>
            <Icon type="ios-paper" :size="iconSize"></Icon>
            <span class="layout-text">文章管理</span>
          </Menu-item>
        </div>
      </Menu>
    </i-col>
    <i-col :span="spanRight">
      <div class="layout-header">
        <i-button type="text" @click="toggleClick">
          <Icon type="navicon" size="32"></Icon>
        </i-button>
      </div>
      <!-- 面包屑 -->
      <div class="layout-breadcrumb">
        <Breadcrumb>
          <Breadcrumb-item href="#">首页</Breadcrumb-item>
          <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
          <Breadcrumb-item>某应用</Breadcrumb-item>
        </Breadcrumb>
      </div>
      <!-- 内容区域 -->
      <div class="layout-content">
        <div class="layout-content-main">
          内容区域
          <router-view></router-view>
        </div>
      </div>
      <!-- 脚注 -->
      <div class="layout-copy">
        2016-2017 &copy; chaoshuai
      </div>
    </i-col>
  </Row>
</div>
</template>
<script>
const HIDEWIDTH = 2
const EXPANDWIDTH = 5
export default {
  data() {
    return {
      spanLeft: EXPANDWIDTH,
      spanRight: 24 - EXPANDWIDTH
    }
  },
  computed: {
    iconSize() {
      return this.spanLeft === EXPANDWIDTH ? 14 : 20
    }
  },
  methods: {
    toggleClick() {
      if (this.spanLeft === EXPANDWIDTH) {
        this.spanLeft = HIDEWIDTH
        this.spanRight = 24 - HIDEWIDTH
      } else {
        this.spanLeft = EXPANDWIDTH
        this.spanRight = 24 - EXPANDWIDTH
      }
    },
    handleSelect(path) {
      console.log(path)
      this.$router.push({ path: path })
    }
  }
}
</script>

<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  text-align: left;
}

.layout-breadcrumb {
  padding: 10px 15px 0;
}

.layout-content {
  min-height: 80vh;
  margin: 15px;
  overflow: hidden;
  background: #fff;
  border-radius: 4px;
}

.layout-content-main {
  padding: 10px;
}

.layout-copy {
  text-align: center;
  padding: 10px 0 20px;
  color: #9ea7b4;
}

.layout-menu-left {
  background: #464c5b;
}

.layout-header {
  height: 60px;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
}

.layout-logo-left {
  width: 90%;
  height: 30px;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #ccc;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}

.layout-ceiling-main a {
  color: #9ba7b5;
}

.layout-hide-text .layout-text {
  display: none;
}

.ivu-col {
  transition: width .2s ease-in-out;
}
</style>
