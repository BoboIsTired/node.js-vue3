import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Vue from 'vue'
import{
  Popup,
  Cell,
  CellGroup,
  Grid,
  GridItem,
  ConfigProvider,
  Tabbar,
  TabbarItem,
  Field,
  Search,
  Button ,
  Uploader,
} from 'vant'


// app.config.globalProperties.$http = axios;
axios.defaults.baseURL = "/api";

createApp(App).use(store).use(router)
.use(Popup)
.use(Cell)
.use(CellGroup)
.use(Grid)
.use(GridItem)
.use(ConfigProvider)
.use(Tabbar)
.use(TabbarItem)
.use(Field)
.use(Search)
.use(Button)
.use(ElementPlus)
.use(Uploader)
.mount('#app')