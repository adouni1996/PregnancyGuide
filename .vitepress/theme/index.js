import DefaultTheme from 'vitepress/theme'
import PregnancyTimeline from './components/PregnancyTimeline.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // 注册全局组件
    app.component('PregnancyTimeline', PregnancyTimeline)
  }
}