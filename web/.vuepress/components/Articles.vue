<template>
  <div class="grid">
        <router-link v-for="page in pages" class="article" :to="page.path">
            <time>
              <span class="day">{{new Date(page.frontmatter.created_time).getDay()}}</span>
              <span class="month">{{monthNames[new Date(page.frontmatter.created_time).getMonth()]}}</span>
              <span class="year">{{new Date(page.frontmatter.created_time).getFullYear()}}</span>
            </time>
            
            <img :src="page.frontmatter.cover"/>
            
            <div class="article-content">
              <h1>{{ page.title }}</h1>
              <p>{{ page.frontmatter.description }}</p>
            </div>
        </router-link>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pages: [],
      monthNames:["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ]
    }
  },
  mounted() {
    this.$site.pages.forEach(page => {
      if (page.frontmatter.type === 'article') {
        this.pages.push(page)
      }
    })
  }
}
</script>

<style scoped>
body {
        padding: 0;
        margin: 0;
        background: #efefef;
      }

      .article {
        width: 40%;
        margin: 10px auto;
        background: white;
        box-shadow: 0px 2px 10px 0px gray;
      }

      .article img {
        width: 100%;
        height: 200px;
      }

      .article-content {
        padding: 10px 30px;
      }

      .article-content h1 {
        font-size: 18px;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        margin: 5px 0;
      }

      .article-content p {
        margin: 0;
        font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
        color: orangered;
      }

      .article time {
        position: absolute;
        background: #e74c3e;
        margin: 0;
        color: white;
        display: flex;
        padding: 10px;
        flex-direction: column;
      }

      time .day {
        font-size: 1.5rem;
      }
      time .month {
        font-size: 0.75rem;
      }

      @media (max-width: 500px) {
        .article {
          width: 96%;
        }
      }

      @media (max-width: 800px) and (min-width: 501px) {
        .article {
          width: 55%;
        }
      }

      .grid {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
      }
</style>