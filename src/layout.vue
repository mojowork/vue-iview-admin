<template>
<div class="layout">
  <!-- <Row type="flex"> -->
  <div class="layout-menu-left" :class="{collapsed: collapsed}">
    <Menu theme="dark" width="auto" :active-name="$route.path" accordion @on-select="handleSelect">
      <!-- logo -->
      <div class="layout-logo">{{adminName}}</div>
      <!-- 导航 -->
      <div class="layout-nav" v-for="(item,index) in $router.options.routes" v-if="!item.hidden" @mousedown="showMenu(index,true)" @mouseout="showMenu(index,false)" ref="menuCollapsed">
        <Submenu :name="index" v-if="!item.leaf">
          <template slot="title">
              <Icon :type="item.icon" :size="iconSize"></Icon>
              <transition name="nav" mode="out-in">
                <span class="" v-if="!collapsed">{{item.name}}</span>
              </transition>
            </template>
          <Menu-item :name="child.path" v-for="child in item.children" v-if="!child.hidden" :class="{menuitemcollapsed: collapsed}" :key="child.path">{{child.name}}</Menu-item>
        </Submenu>
        <Menu-item :name="item.children[0].path" v-if="item.leaf&&item.children.length>0">
          <Icon :type="item.children[0].icon" :size="iconSize"></Icon>
          <span class="layout-nav-text" v-if="!collapsed">{{item.children[0].name}}</span>
        </Menu-item>
      </div>
    </Menu>
  </div>
  <div class="layout-menu-right">
    <div class="layout-header">
      <i-button type="text" @click="toggleClick">
        <Icon type="navicon" size="32"></Icon>
      </i-button>
    </div>
    <!-- 面包屑 -->
    <div class="layout-breadcrumb">
      <Breadcrumb>
        <Breadcrumb-item v-for="item in $route.matched" :key="item.path">{{item.name}}</Breadcrumb-item>
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
  </div>
  <!-- </Row> -->
</div>
</template>
<script>
export default {
  data() {
    return {
      adminName: 'ADMIN',
      collapsed: false,
      currentYear: new Date().getFullYear()
    }
  },
  computed: {
    iconSize() {
      return this.collapsed ? 20 : 14
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
    },
    showMenu(i, status) {
      if (this.collapsed) {
        console.log('qq')
      }
      // this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-' + i)[0].style.display = status ? 'block' : 'none'
    }
  }
}
</script>

<style lang="less">
.layout {
    border: 1px solid #d7dde4;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    display: flex;
    border-radius: 4px;
    overflow: hidden;
    text-align: left;

    .layout-menu-left {
        flex: 0 230px;
        height: 100%;
        background: #464c5b;

        &.collapsed {
            width: 70px;
            flex: 0 70px;
        }
        .layout-logo {
            width: 90%;
            height: 30px;
            line-height: 30px;
            font-size: 20px;
            text-align: center;
            color: #ccc;
            background: #5b6270;
            border-radius: 3px;
            margin: 15px auto;
        }
        .layout-nav {}
    }
}

.layout-menu-right {
    flex: 1;
    display: flex;
    flex-direction: column;
    background: #f5f7f9;
    .layout-header {
        flex: 0 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
    }
    .layout-breadcrumb {
        flex: 0 20px;
        margin: 10px 15px 0;
    }
    .layout-content {
        flex: 1;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
        .layout-content-main {
            text-align: center;
            padding: 10px;
        }
    }
    .layout-copy {
        flex: 0 40px;
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
}
.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item.menuitemcollapsed {
    padding-left: 20px;
    text-align: center;
    display: block;
    left: 71px;
    white-space: nowrap;
    background: #495060;
    &:hover {
        background: #495060 0!important;
        color: #fff;
    }
}
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active:hover {
    background: #2d8cf0!important;
}

.ivu-col {
    transition: width 0.2s ease-in-out;
}

.fade-enter-active,
.fade-leave-active {
    transition: all 0.2s ease;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
}
</style>
