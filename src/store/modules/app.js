import Cookies from 'js-cookie';
// import router from '@/router';
import iView from 'iview';
import Vue from 'vue';
Vue.use(iView);

const app = {
  state: {
    sidebar: {
      opened: !+Cookies.get('sidebarStatus'),
      minOpen: false // 小屏时菜单状态
    },
    router: {
      currentPageName: 'index'
    },
    langList: [
      {
        value: 'CN',
        label: '中文简体'
      },
      {
        value: 'TW',
        label: '中文繁体'
      },
      {
        value: 'EN',
        label: 'English'
      }
    ],
    lang: 'CN'
  },
  mutations: {
    /**
     * 菜单的缩展
     */
    TOGGLE_SIDEBAR: state => {
      let winWidth = document.documentElement.clientWidth
      if (winWidth <= 600) {
        state.sidebar.minOpen = !state.sidebar.minOpen
        state.sidebar.opened = false
        Cookies.set('sidebarStatus', 0)
        return
      } else {
        if (state.sidebar.opened) {
          Cookies.set('sidebarStatus', 1)
        } else {
          Cookies.set('sidebarStatus', 0)
        }
        state.sidebar.opened = !state.sidebar.opened
      }
    },
    CLOSE_SLIDEBAR: state => {
      Cookies.set('sidebarStatus', 0)
      state.sidebar.opened = false
      state.sidebar.minOpen = false
    },
    OPEN_SLIDEBAR: state => {
      Cookies.set('sidebarStatus', 1)
      state.sidebar.opened = true
    },
    /**
     * 面包屑
     */
    GET_CURRENT_PAGE_NAME: (state, payload) => {
      state.router.currentPageName = payload
    },
    /**
     * 设置语言
     */
    SET_LANG: (state, payload) => {
      state.lang = payload
      Cookies.set('lang', payload)
    }
  },
  actions: {
    ToggleSideBar: ({ commit }) => {
      commit('TOGGLE_SIDEBAR')
    },
    getCurrentPageName: ({ commit }, payload) => {
      commit('GET_CURRENT_PAGE_NAME', payload)
    }
  }
}

export default app
