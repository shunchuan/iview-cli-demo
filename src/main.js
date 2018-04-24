import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import Routers from './router';
import Vuex from 'vuex';
import Util from './libs/util';
import App from './app.vue';
import 'iview/dist/styles/iview.css';
import './assets/styles/index.css';
import './assets/styles/layout.less';
import './assets/styles/cover.less';
import './assets/styles/base.less';

import VueI18n from 'vue-i18n';
import Locales from './locale';

import bus from './components/bus';

import store from './store';
import Cookies from 'js-cookie';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueI18n);
Vue.use(iView);

import zhLocale from 'iview/src/locale/lang/zh-CN';
import enLocale from 'iview/src/locale/lang/en-US';

//  LangList
import twLocale from 'iview/src/locale/lang/zh-TW';
let lang = Cookies.getJSON('lang');
if (lang && lang === 'CN') {
    Vue.config.lang = 'zh-CN';
    window.localStorage.setItem('language', 'zh-CN');
    store.commit('SET_LANG', 'CN');
} else if (lang && lang === 'EN') {
    store.commit('SET_LANG', 'EN');
    window.localStorage.setItem('language', 'en-US');
    Vue.config.lang = 'en-US';
} else {
    Vue.config.lang = 'zh-TW';
    window.localStorage.setItem('language', 'zh-TW');
    store.commit('SET_LANG', 'TW');
}
// 多语言配置
const locales = Locales;
Object.assign(zhLocale, locales['zh-CN']);
Object.assign(enLocale, locales['en-US']);
Object.assign(twLocale, locales['zh-TW']);
Vue.locale('zh-CN', zhLocale);
Vue.locale('en-US', enLocale);
Vue.locale('zh-TW', twLocale);
// LangList End


// // Lang
// // 自动设置语言
// const navLang = navigator.language;
// const localLang = (navLang === 'zh-CN' || navLang === 'en-US') ? navLang : false;
// const lang = window.localStorage.getItem('language') || localLang || 'zh-CN';
// Vue.config.lang = lang;
// bus.lang = lang;
// bus.$on('on-change-lang', (lang, path) => {
//     Vue.config.lang = lang;
//     bus.lang = lang;
//     window.localStorage.setItem('language', lang);
//     window.location.href = path;
// });

// // 多语言配置
// const locales = Locales;
// Object.assign(zhLocale, locales['zh-CN']);
// Object.assign(enLocale, locales['en-US']);

// Vue.locale('zh-CN', zhLocale);
// Vue.locale('en-US', enLocale);
// // Lang End

// 路由配置
const RouterConfig = {
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    store.commit('GET_CURRENT_PAGE_NAME', to.fullPath);
    next();
});

router.afterEach(() => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

new Vue({
    el: '#app',
    router: router,
    // store: store,
    store,
    render: h => h(App),
});