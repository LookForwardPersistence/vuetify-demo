<template>
  <div class="home">
  <v-card class="v-card_contain" flat>
    <div class="headline text-xs-center pa-0">

      <router-view/>
    </div>
    <v-bottom-nav :active.sync="bottomNav"
                  :value="true"
                  absolute
                  color="transparent"
                  >
      <v-btn
       color="teal"
       flat
       value="recent"
      >
        <span>{{$t('m.recent')}}</span>
        <v-icon>history</v-icon>
      </v-btn>
      <v-btn
         color="teal"
         flat
         value="favorites"
      >
        <span>{{$t('m.favorites')}}</span>
        <v-icon>favorite</v-icon>
      </v-btn>
      <v-btn
       color="teal"
       flat
       value="nearby"
      >
      <span>{{$t('m.nearBy')}}</span>
        <v-icon>place</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-card>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
  },
    data(){
      return {
          bottomNav: 'recent'
      }
    },
    watch:{
        bottomNav:function (val) {
            /*切换路由,绝对路径*/
            this.$router.push("/"+val)
        }
    }
}
</script>
<style scoped>
  .v-card_contain{
    position: absolute;
    height: 100%;
    width: 100%;
    bottom: 0px;
  }
</style>
