var plugins = [{
      plugin: require('/Users/dharmon/Development/code/themeforest-t8Cqheo1-flexiblog-react-gatsby-blog-template 7.03.59 PM/@gatsby-theme-flexiblog/node_modules/gatsby-source-sanity/gatsby-ssr'),
      options: {"plugins":[],"projectId":"uqh0q4zh","dataset":"production","token":"sk4XAox7w2z6Bne2Z58ajA9ba7efN5laNXxxplvBThuWwQ6rUMTPAkFKXwK3l6XRfLPMQyjpkfdbEswiVou0Q9neq3jfgW969QqHxwnJ1dRrLdoGIWisUlEZ6boygwKzyVhdlVSxQIakDC50e8kJShanXinK0qLbNJ9yv199rJLIUcPoCYH8"},
    },{
      plugin: require('/Users/dharmon/Development/code/themeforest-t8Cqheo1-flexiblog-react-gatsby-blog-template 7.03.59 PM/@gatsby-theme-flexiblog/node_modules/gatsby-plugin-mdx/gatsby-ssr'),
      options: {"plugins":[],"extensions":[".mdx",".md"],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-images","options":{"maxWidth":1140,"quality":85,"showCaptions":true,"linkImagesToOriginal":false,"disableBgImageOnAlpha":true}},{"resolve":"gatsby-remark-embed-video","options":{"width":800}},{"resolve":"gatsby-remark-responsive-iframe"},{"resolve":"gatsby-remark-copy-linked-files"},{"resolve":"gatsby-remark-smartypants"}],"remarkPlugins":[null]},
    },{
      plugin: require('/Users/dharmon/Development/code/themeforest-t8Cqheo1-flexiblog-react-gatsby-blog-template 7.03.59 PM/@gatsby-theme-flexiblog/node_modules/gatsby-plugin-theme-ui/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/dharmon/Development/code/themeforest-t8Cqheo1-flexiblog-react-gatsby-blog-template 7.03.59 PM/@gatsby-theme-flexiblog/node_modules/gatsby-plugin-preconnect/gatsby-ssr'),
      options: {"plugins":[],"domains":["https://fonts.gstatic.com/","https://fonts.googleapis.com/"]},
    },{
      plugin: require('/Users/dharmon/Development/code/themeforest-t8Cqheo1-flexiblog-react-gatsby-blog-template 7.03.59 PM/@gatsby-theme-flexiblog/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/dharmon/Development/code/themeforest-t8Cqheo1-flexiblog-react-gatsby-blog-template 7.03.59 PM/@gatsby-theme-flexiblog/node_modules/gatsby-plugin-layout/gatsby-ssr'),
      options: {"plugins":[],"component":"/Users/dharmon/Development/code/themeforest-t8Cqheo1-flexiblog-react-gatsby-blog-template 7.03.59 PM/@gatsby-theme-flexiblog/packages/shared/src/layout/Layout/Layout.jsx"},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
