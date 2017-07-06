<template>
<div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
  <Row type="flex">
    <i-col :span="spanLeft" class="layout-menu-left">
      <Menu active-name="1" theme="dark" width="auto">
        <!-- logo -->
        <div class="layout-logo-left">LITE</div>
        <!-- 导航 -->
        <div class="layout-nav">
          <Menu-item name="1">
            <Icon type="ios-navigate"></Icon>
            导航一
          </Menu-item>
          <Menu-item name="2">
            <Icon type="ios-keypad"></Icon>
            导航二
          </Menu-item>
          <Menu-item name="3">
            <Icon type="ios-analytics"></Icon>
            导航三
          </Menu-item>
          <Menu-item name="4">
            <Icon type="ios-paper"></Icon>
            导航四
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
      return this.spanLeft === EXPANDWIDTH ? 14 : 24
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
