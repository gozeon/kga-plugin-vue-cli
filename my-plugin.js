const { Plugin } = require("@kga/cli");

const { appendLine } = require('./append.js')

function routerTpl(name){
  return `
  {
    path: '/${name}',
    name: '${name}',
    component: () => import(/* webpackChunkName: "${name}" */ "../views/${name}/Router.vue"),
    children: [
      {
        path: "",
        name: "${name}List",
        component: () =>
          import(/* webpackChunkName: "${name}_list" */ "../views/${name}/List.vue")
      },
      {
        path: "add",
        name: "${name}Add",
        component: () =>
          import(/* webpackChunkName: "${name}_add" */ "../views/${name}/Add.vue")
      },
      {
        path: "detail/:id",
        name: "${name}Detail",
        component: () =>
          import(/* webpackChunkName: "${name}_detal" */ "../views/${name}/Detail.vue")
      },
      {
        path: "delete/:id",
        name: "${name}Delete",
        component: () =>
          import(/* webpackChunkName: "${name}_detal" */ "../views/${name}/Delete.vue")
      }
    ]
  },  
`
}

module.exports = class extends Plugin {
  async writing() {

    // 准备数据
    const { config } = this.kgaData.fileConfig;
    const { name } = config.model;
    this.fs.copyTpl(`${this.templatePath()}/Add.vue`, this.destinationPath(`src/views/${name}/Add.vue`), config)
    this.fs.copyTpl(`${this.templatePath()}/Delete.vue`, this.destinationPath(`src/views/${name}/Delete.vue`), config)
    this.fs.copyTpl(`${this.templatePath()}/Detail.vue`, this.destinationPath(`src/views/${name}/Detail.vue`), config)
    this.fs.copyTpl(`${this.templatePath()}/List.vue`, this.destinationPath(`src/views/${name}/List.vue`), config);
    this.fs.copyTpl(`${this.templatePath()}/router.vue`, this.destinationPath(`src/views/${name}/Router.vue`), config);

    // 写入路由
    await appendLine(this.destinationPath('src/router/index.js'), 7, routerTpl(name))

    // 添加路由
    await appendLine(this.destinationPath('src/App.vue'), 5, `| <router-link to="/${name}">${name}</router-link>`)

  }

  end() {
    this.log.info('\x1b[33m%s\x1b[0m %s', 'modified', this.destinationPath('src/router/index.js'))
    this.log.info('\x1b[33m%s\x1b[0m %s', 'modified', this.destinationPath('src/App.vue'))

    console.log('done.')
  }
};
