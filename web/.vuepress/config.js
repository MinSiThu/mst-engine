module.exports = {
    title:"MST Engine",
    description:"Programming Articles in Myanmar",
    themeConfig:{
      sidebar: [
        {
          title: 'Reactive Programming',   // required
          sidebarDepth: 1,    // optional, defaults to 1
          children: [
            ["/articles/ReactiveProgramming/HigherOrderFunction.html","Higher Order Function"],
            ["/articles/ReactiveProgramming/Introduction.html","Introduction"],
          ]
        },
      ]
    },
    plugins: [
        [
          '@vuepress/google-analytics',
          {
            'ga': 'UA-148716119-2' // UA-00000000-0
          }
        ]
      ]
}