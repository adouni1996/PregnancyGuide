import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "孕产期全面护理指南",
  description: "一份详细的孕产期护理指南",
  base:'/PregnancyGuide/',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '孕产期护理指南', link: '/prenatal-care-guides/' }
    ],

    sidebar: [
      {
        text: '孕产期全面护理指南',
        items: [
          { text: '指南概述', link: '/prenatal-care-guides/' },
          {
            text: '备孕期准备',
            items: [
              { text: '身体调理与营养补充', link: '/prenatal-care-guides/preparation/preconception-preparation' }
            ]
          },
          {
            text: '孕期各阶段护理',
            items: [
              { text: '孕期阶段划分', link: '/prenatal-care-guides/pregnancy-stages/stages-of-pregnancy' },
              { text: '每周注意事项', link: '/prenatal-care-guides/weekly-care/weekly-pregnancy-care' }
            ]
          },
          {
            text: '孕期安全与检查',
            items: [
              { text: '孕期禁忌清单', link: '/prenatal-care-guides/prohibitions/pregnancy-prohibitions' },
              { text: '产检时间表与指标', link: '/prenatal-care-guides/checkups/prenatal-checkups' }
            ]
          },
          {
            text: '分娩与产后护理',
            items: [
              { text: '分娩前征象识别', link: '/prenatal-care-guides/labor-signs/signs-of-labor' },
              { text: '产后恢复护理', link: '/prenatal-care-guides/postpartum-care/postpartum-recovery' }
            ]
          },
          {
            text: '营养与运动',
            items: [
              { text: '营养食谱与运动指导', link: '/prenatal-care-guides/nutrition-exercise/nutrition-and-exercise' }
            ]
          },
          {
            text: '常见问题解答',
            items: [
              { text: 'FAQ', link: '/prenatal-care-guides/faq/pregnancy-faq' }
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    logo: '/logo.png'
  },
  srcDir: '.',
  outDir: './dist',
  appearance: true,
  lastUpdated: false
})
