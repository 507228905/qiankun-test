<template>
  <div id="app" class="main-container">
    <!-- 菜单栏 -->
    <the-menu class="main-menu-box" />
    <!-- 右测视图区 -->
    <div class="main-container-content">
      <!-- 上部导航区 -->
      <the-nav />
      <!-- 子应用渲染区域 -->
      <div class="main-container-view">
        <el-scrollbar>
          <div id="subapp-viewport" class="app-view-box"></div>
          <router-view />
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>
<script>
import TheMenu from './components/TheMenu'
import TheNav from './components/TheNav'
export default {
  components: {
    TheMenu,
    TheNav,
  },
}
</script>

<style lang="scss">
html,
body {
  margin: 0px;
  padding: 0px;
  height: 100%;
}
.main-container {
  display: flex;
  width: 100%;
  height: 100%;
}

.main-container-content {
  flex: 1;
  display: flex;
  overflow: hidden;
  flex-flow: column;
  > .main-container-view {
    width: 100%;
    height: calc(100vh-60px);
    padding: 8px;
    > .wl-scroll {
      width: 100%;
      height: 100%;
      background: #fff;
      border-radius: 4px;
      .el-scrollbar__wrap {
        overflow-x: hidden;
      }
    }

    .app-view-box {
      width: 100%;
      padding: 12px;
      box-sizing: border-box;
    }
  }
}
</style>
