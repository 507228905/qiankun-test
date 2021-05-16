<template>
    <div class="the-nav">
        <!-- 菜单折叠按钮 -->
        <div class="nav-handle-collapse">
            <i class="nav-icon"
            :class="isCollapse?'el-icon-d-arrow-right':'el-icon-d-arrow-left'"
            @click="setMenuCollapsStatus"
            >
            </i>
        </div>

        <div class="pager-msg">广播：{{message}}</div>
        <div class="nav-handle-box">
            <!-- 消息 -->
             <i class="nav-icon nav-handle-item el-icon-bell"></i>
            <!-- 全屏按钮 -->
            <i class="nav-icon nav-handle-item el-icon-rank" @click="handleFullScreen"></i>
            <!-- 用户名 -->
            <span class="nav-handle-item nav-user-name">{{user_name}}</span>
            <!-- 退出登录按钮 -->
            <i class="nav-icon nav-handle-item el-icon-switch-button" @click="logOut()"></i>

        </div>
    </div>
</template>

<script>
export default {
    name:'theNav',
    data() {
        return {
        user_name:'xiangcaihua',
        // full_screen:fasle
        }
    },
    
    computed:{
         isCollapse() {
           return this.$store.getters.is_collapse;
        },

        message(){
          return this.$store.getters.msg;
        }
        
    },

    methods:{
        //设置右测菜单折叠状态，
        setMenuCollapsStatus() {
           this.$store.dispatch("menu/setCollapseStatus",!this.isCollapse)  
        },
        // 退出登录
        logOut() {
        
        },

        //  // 全屏操作
        handleFullScreen() {
        }

    }
}
</script>

<style  scoped>
.the-nav {
  display: flex;
  justify-content: space-between;
  z-index: 1;
  height: 60px;
  padding: 15px;
  line-height:30px;
  background: #ededed;
  color: #2a3f54;
  box-shadow: #c1c0c0 1px 4px 5px 2px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;

}
  .nav-icon,
  .nav-user-name {
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
  }

  .nav-handle-item + .nav-handle-item {
    margin-left: 12px;
  }

  .pager-msg {
    font-weight: 600;
    font-size: 16px;
  }

</style>


