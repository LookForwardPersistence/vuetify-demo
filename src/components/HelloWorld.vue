<template>
  <div class="hello">
  <!--  <v-tabs
            centered
            color="cyan"
    >
      <v-tabs-slider color="yellow"></v-tabs-slider>

      <v-tab href="#tab-1" color="white">
        Recents
      </v-tab>

      <v-tab href="#tab-2">
        Favorites
      </v-tab>

      <v-tab href="#tab-3">
        Nearby
      </v-tab>

      <v-tab-item
              v-for="i in 3"
              :key="i"
              :value="'tab-' + i"
      >
        <v-card flat>
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>-->
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
                color="primary"
                dark
                v-on="on"
        >
          {{lang}}
        </v-btn>
      </template>
      <v-list>
        <v-list-tile
                v-for="(item, index) in languages"
                :key="index"
                @click="selectLanguage(item)"
        >
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <v-tabs fixed-tabs>
      <v-tabs-slider color="yellow"></v-tabs-slider>
        <v-tab
           v-for="(item ,index) in items"
           :key="index"
           @click.native="showRoom(item.path)"
        >
          {{item.name}}
        </v-tab>
    </v-tabs>
    <router-view/>
  </div>
</template>

<script>
    import VTab from "vuetify/lib/components/VTabs/VTab";
export default {
    components: {VTab},
    name: 'HelloWorld',
  props: {
    msg: String
  },
    data(){
        return {
            lang:'中文',
            tab: 'null',
            items:[{
                name:'t2展厅',
                path: '/recent/t2Showroom',
            },{
                name:'t2参观走廊',
                path: '/recent/t2Corridor',
            },{
                name:'t6展厅',
                path:'/recent/t6Showroom'
            },{
                name:'Vip会议室',
                path:'/recent/vip',
            }],
            nav: 't2展厅',
            languages:[{title:'中文'},{title:'英文'}]
        }
    },
    methods:{
        selectLanguage:function (en) {
            this.lang = en.title
            if(this.lang === '英文'){
                this.$i18n.locale = 'en-US'
            }else{
                this.$i18n.locale = 'zh-CN';
            }
        },
        showRoom:function (path) {
           this.$router.push(path)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
