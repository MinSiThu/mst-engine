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
            ["/articles/ReactiveProgramming/Closure.html","Closure"],
            ["/articles/ReactiveProgramming/Compose.html","Compose"],
            ["/articles/ReactiveProgramming/Introduction.html","Introduction"],
          ]
        },
        {
          title: 'Design Pattern',   // required
          sidebarDepth: 1,    // optional, defaults to 1
          children: [
            ["/articles/DesignPatterns/AdapterPattern.html","Adapter Pattern"],
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