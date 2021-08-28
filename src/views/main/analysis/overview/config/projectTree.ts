const tree = `
vue3_ts_cms
│  .browserslistrc
│  .editorconfig
│  .env.development
│  .env.production
│  .env.test
│  .eslintrc.js
│  .gitignore
│  .prettierignore
│  .prettierrc
│  babel.config.js
│  commitlint.config.js
│  package-lock.json
│  package.json
│  README.md
│  tsconfig.json
│  vue.config.js
│
├─.husky
│  │  commit-msg
│  │  pre-commit
│  │
│  └─_
│          .gitignore
│          husky.sh
│
├─public
│      favicon.ico
│      index.html
│
└─src
    │  App.vue
    │  main.ts
    │  shims-vue.d.ts
    │
    ├─assets
    │  ├─css
    │  │      base.less
    │  │      index.less
    │  │      wangEditor.less
    │  │
    │  └─images
    │          background_img.jpg
    │          logo.png
    │
    ├─common-ui
    │  ├─breadcrumb
    │  │  │  index.ts
    │  │  │
    │  │  ├─src
    │  │  │      BreadCrumb.vue
    │  │  │
    │  │  └─types
    │  │          types.ts
    │  │
    │  ├─msi-card
    │  │  │  index.ts
    │  │  │
    │  │  └─src
    │  │          MsiCard.vue
    │  │
    │  ├─msi-descriptions
    │  │  │  index.ts
    │  │  │
    │  │  └─src
    │  │          MsiDescriptions.vue
    │  │
    │  ├─msi-echarts
    │  │  │  index.ts
    │  │  │
    │  │  ├─hooks
    │  │  │      initECharts.ts
    │  │  │      mapCityToMap.ts
    │  │  │
    │  │  ├─map
    │  │  │      china.json
    │  │  │      city.ts
    │  │  │
    │  │  └─src
    │  │          MsiEcharts.vue
    │  │
    │  ├─msi-editor
    │  │  │  index.ts
    │  │  │
    │  │  └─src
    │  │          MsiEditor.vue
    │  │
    │  ├─msi-form
    │  │  │  index.ts
    │  │  │
    │  │  ├─src
    │  │  │      MsiForm.vue
    │  │  │
    │  │  └─types
    │  │          types.ts
    │  │
    │  ├─msi-tabel
    │  │  │  index.ts
    │  │  │
    │  │  ├─src
    │  │  │      MsiTabel.vue
    │  │  │
    │  │  └─types
    │  │          types.ts
    │  │
    │  └─msi-upload
    │      │  index.ts
    │      │
    │      └─src
    │              MsiUpload.vue
    │
    ├─components
    │  ├─nav-header
    │  │  │  index.ts
    │  │  │
    │  │  └─src
    │  │          NavHeader.vue
    │  │
    │  ├─nav-menu
    │  │  │  index.ts
    │  │  │
    │  │  └─src
    │  │          NavMenu.vue
    │  │
    │  ├─page-dialog
    │  │  │  index.ts
    │  │  │
    │  │  ├─src
    │  │  │      PageDialog.vue
    │  │  │
    │  │  └─types
    │  │          types.ts
    │  │
    │  ├─page-echart
    │  │  │  index.ts
    │  │  │
    │  │  └─src
    │  │          PageBarChart.vue
    │  │          PageChinaChart.vue
    │  │          PageLineChart.vue
    │  │          PagePicChart.vue
    │  │          PagePicLableChart.vue
    │  │          PageRoseChart.vue
    │  │
    │  ├─page-search
    │  │  │  index.ts
    │  │  │
    │  │  └─src
    │  │          PageSearch.vue
    │  │
    │  └─page-tabel
    │      │  index.ts
    │      │
    │      └─src
    │              PageTabel.vue
    │
    ├─global
    │      index.ts
    │      registerElement.ts
    │      registerGlobal.ts
    │
    ├─hooks
    │      countAction.ts
    │      pageLinkage.ts
    │      permission.ts
    │
    ├─router
    │  │  index.ts
    │  │
    │  └─main
    │      ├─analysis
    │      │  ├─dashboard
    │      │  │      dashboard.ts
    │      │  │
    │      │  └─overview
    │      │          overview.ts
    │      │
    │      ├─product
    │      │  ├─category
    │      │  │      category.ts
    │      │  │
    │      │  └─goods
    │      │          goods.ts
    │      │
    │      ├─story
    │      │  ├─chat
    │      │  │      chat.ts
    │      │  │
    │      │  └─list
    │      │          list.ts
    │      │
    │      └─system
    │          ├─department
    │          │      department.ts
    │          │
    │          ├─menu
    │          │      menu.ts
    │          │
    │          ├─role
    │          │      role.ts
    │          │
    │          └─user
    │                  user.ts
    │
    ├─service
    │  │  index.ts
    │  │  types.ts
    │  │
    │  ├─login
    │  │      index.ts
    │  │      types.ts
    │  │
    │  ├─main
    │  │  ├─analysis
    │  │  │      index.ts
    │  │  │
    │  │  ├─story
    │  │  │      index.ts
    │  │  │
    │  │  └─system
    │  │          index.ts
    │  │
    │  └─request
    │          index.ts
    │          type.ts
    │
    ├─store
    │  │  index.ts
    │  │  types.ts
    │  │
    │  ├─analysis
    │  │      index.ts
    │  │      types.ts
    │  │
    │  ├─login
    │  │      index.ts
    │  │      types.ts
    │  │
    │  ├─product
    │  │      index.ts
    │  │      types.ts
    │  │
    │  └─system
    │          index.ts
    │          types.ts
    │
    ├─utils
    │      cache.ts
    │      formate.ts
    │      handleString.ts
    │      menuToRoute.ts
    │
    └─views
        ├─login
        │  │  Login.vue
        │  │
        │  ├─cpns
        │  │      LoginPhone.vue
        │  │      LoginUser.vue
        │  │
        │  └─hooks
        │          rules.ts
        │
        ├─main
        │  │  Main.vue
        │  │
        │  ├─analysis
        │  │  ├─dashboard
        │  │  │  │  dashboard.vue
        │  │  │  │
        │  │  │  ├─config
        │  │  │  │      showCountConfig.ts
        │  │  │  │
        │  │  │  ├─cpn
        │  │  │  │      ShowCharts.vue
        │  │  │  │      ShowCount.vue
        │  │  │  │
        │  │  │  └─hook
        │  │  └─overview
        │  │      │  overview copy.vue
        │  │      │  overview.vue
        │  │      │
        │  │      └─config
        │  │              dependencies.ts
        │  │              devDependencies.ts
        │  │              projectStandard.ts
        │  │              projectTree.ts
        │  │              technologyStacks.ts
        │  │
        │  ├─product
        │  │  ├─category
        │  │  │  │  category.vue
        │  │  │  │
        │  │  │  ├─config
        │  │  │  │      dialog.config.ts
        │  │  │  │      form.config.ts
        │  │  │  │      tabel.config.ts
        │  │  │  │
        │  │  │  └─cpn
        │  │  │          CategoryHeader.vue
        │  │  │
        │  │  └─goods
        │  │      │  goods.vue
        │  │      │
        │  │      └─configs
        │  │              dialog.config.ts
        │  │              tabel.config.ts
        │  │
        │  ├─story
        │  │  ├─chat
        │  │  │      chat.vue
        │  │  │
        │  │  └─list
        │  │      │  list.vue
        │  │      │
        │  │      └─config
        │  │              tabel.config.ts
        │  │
        │  └─system
        │      ├─department
        │      │  │  department.vue
        │      │  │
        │      │  └─config
        │      │          dialog.config.ts
        │      │          from.config.ts
        │      │          tabel.config.ts
        │      │
        │      ├─menu
        │      │  │  menu.vue
        │      │  │
        │      │  └─configs
        │      │          dialog.config.ts
        │      │          tabel.config.ts
        │      │
        │      ├─role
        │      │  │  role.vue
        │      │  │
        │      │  └─config
        │      │          dialog.config.ts
        │      │          form.config.ts
        │      │          tabel.config.ts
        │      │
        │      └─user
        │          │  user.vue
        │          │
        │          └─configs
        │                  dialog.config.ts
        │                  form.config.ts
        │                  tabel.config.ts
        │
        └─not-found
            │  NotFound.vue
            │
            └─src
`;

export default tree;
