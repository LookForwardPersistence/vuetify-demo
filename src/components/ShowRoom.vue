<template>
  <div class="hello">
   {{text}}

  </div>
</template>

<script>
export default {
    components: {},
    name: 'ShowRoom',
  props: {
    msg: String
  },
    data(){
        return {
            text: 'home'
        }
    },
    methods:{

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
