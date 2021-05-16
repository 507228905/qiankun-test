<template>
    <el-menu class="the-menu"
     :collapse="is_collapse" 
     :text-color="theme_menu.text"
     :background-color="theme_menu.background" 
     :default-active="activeMenu"
     :active-text-color="theme_menu.active_text">
        <div class="the-menu-logo">{{is_collapse?'CMS':'CMS管理系统'}} </div>
        <el-submenu v-for="sub of menuList" :index="sub.id" :key="sub.id">
                <template slot="title">
                    <i class="menu-icon" :class="sub.icon"></i>
                    <span class="menu-sub-title">{{sub.title}}</span>
                </template>
                <el-menu-item
                    v-for="item of sub.children"
                    :key="item.url"
                    :index="item.url"
                    @click="goto(sub.module,item.url)"
                >
                <span class="menu-item-title">{{item.title}}</span>
                </el-menu-item>
        </el-submenu>

    </el-menu>
</template>

<script>

/**
 * 跨应用路由跳转
 * @param {String} href url地址
 * @param {Object} stateObj 状态参数 可以通过history.state读取
 * @param {String} title 标题 暂时没有用
 */
function routerGo(href = '/', title = null, stateObj = {}) {
  window.history.pushState(stateObj, title, href + '');
}
import {mapGetters} from 'vuex'
export default {
   name :"theMenu" ,
   data() {
       return {
           theme_m:{
               background:"#2A3F54",
               text:"#fff",
               active_text:"#ffd04b"
           },
           menuList:[
          
             {
                id: "2",
                title: "qiankun-base",
                icon: "el-icon-date",
                children: [
                {
                    id: "2-1",
                    title: "home",
                    url: "/"
                },
                {
                    id: "2-2",
                    title: "about",
                    url: "/about/"
                }
                ]
            },
              {
                id: "2",
                title: "sub-vue",
                icon: "el-icon-date",
                children: [
                {
                    id: "2-1",
                    title: "home",
                    url: "/sub-vue/"
                },
                {
                    id: "2-2",
                    title: "about",
                    url: "/sub-vue/about/"
                }
                ]
            },


             {
                id: "2",
                title: "sub-react",
                icon: "el-icon-date",
                children: [
                {
                    id: "2-1",
                    title: "home",
                    url: "/sub-react"
                }
                , {
                    id: "2-2",
                    title: "about",
                    url: "/sub-react/about"
                }
                ]
            
            }
            ]
            }
        },
    computed:{
        theme_menu(){
            return this.theme_m
        },
        activeMenu() {
        
        return window.location.pathname
        },
        //主题
        //是否展开
        ...mapGetters(["is_collapse","msg"])

    },


    methods:{
        //跨域路由的跳转
        goto(title,herf){
         routerGo(herf, title);
        },

        
    }
}
</script>

<style scoped >
    .the-menu:not(.el-menu--collapse) {
        width:200px;
        /* min-height: 400px */
        height: 100vh;
    }
    .the-menu {
    height: 100%;
    border-color: #2a3f54;
    }
  .the-menu-logo {
    height: 60px;
    text-align: center;
    line-height: 60px;
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    }
    .menu-icon {
    color: #fff;
  }
  .menu-sub-title {
    margin-left: 6px;
    font-weight: 600;
  }
   
</style>


