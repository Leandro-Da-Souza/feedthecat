<template>
  <div class="home">
      <h1>Do We Need To Feed The Cat?</h1>
      <img src="../assets/cat.png" alt="">
      <div class="select">
          <h3>How Many Times Do You Feed The Cat?</h3>
          <form>
              <select name="feed" id="feed" v-model="count">
                  <option value="1" selected>One Time Per Day</option>
                  <option value="2">Two Times Per Day</option>
                  <option value="3">Three Times Per Day</option>
                  <option value="4">Four Times Per Day</option>
              </select>
          </form>
      </div>
  </div>
</template>

<script>
import { mapState,mapMutations } from "vuex"
export default {
    name: "Home",
    data() {
        return {
            count: 1
        }
    },
    updated() {
        console.log(this.count)
        this.SET_COUNT(this.count)
        console.log(this.storeCount)
    },
    computed: {
        ...mapState(['storeCount'])
    },
    methods: {
        ...mapMutations(['SET_COUNT'])
    },
    created() {
        console.log(this.storeCount)
    }

}
</script>

<style scoped>
img {
    max-width: 200px;
    max-height: 200px;
    margin: 10px 0 10px 0;
}

.home {
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction: column;
    justify-content: center; 
    align-items:center;
    margin: 20px 0 20px 0;
    padding: 5px
}

select {
    width: 100%;
    background: #333;
    color: whitesmoke;
    margin-top: 5px;
    padding: 5px 3px;
}

</style>