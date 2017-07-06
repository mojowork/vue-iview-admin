<template>
<div class="layout" :class="{'layout-hide-text': collapsed}">
  <Row type="flex">
    <i-col :span="spanLeft" class="layout-menu-left">
      <Menu theme="dark" width="auto" :active-name="$route.path" accordion @on-select="handleSelect">
        <!-- logo -->
        <div class="layout-logo-left">{{adminName}}</div>
        <!-- 导航 -->
        <div class="layout-nav" v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
          <Submenu :name="index" v-if="item.leaf">
            <template slot="title">
              <Icon :type="item.icon" :size="iconSize"></Icon>
              <transition name="fade" mode="out-in">
                <span class="" v-if="!collapsed">{{item.name}}</span>
              </transition>
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
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
      </div>
      <!-- 脚注 -->
      <div class="layout-copy">
        2017-{{currentYear}} &copy; chaoshuai
      </div>
    </i-col>
  </Row>
</div>
</template>
<script>
const COLLAPSEDWIDTH = 2
const EXPANDWIDTH = 5
export default {
  data() {
    return {
      adminName: 'LITE',
      collapsed: false,
      currentYear: new Date().getFullYear()
    }
  },
  computed: {
    iconSize() {
      return this.spanLeft === EXPANDWIDTH ? 14 : 20
    },
    spanLeft() {
      return this.collapsed ? COLLAPSEDWIDTH : EXPANDWIDTH
    },
    spanRight() {
      return 24 - this.spanLeft
    }
  },
  methods: {
    toggleClick() {
      this.collapsed = !this.collapsed
    },
    handleSelect(path) {
      this.$router.push({
        path
      })
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

.fade-enter-active,
.fade-leave-active {
  transition: all .2s ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
