module.exports = {
    title:"MST Engine",
    description:"Programming Articles in Myanmar",
    themeConfig:{
      sidebar: [
        {
          title: 'Reactive Programming',   // required
          sidebarDepth: 1,    // optional, defaults to 1
          children: [
            ["http://localhost:8080/articles/ReactiveProgramming/Introduction.html","Introduction"]
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