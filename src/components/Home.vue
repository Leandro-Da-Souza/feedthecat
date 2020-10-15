<template>
  <div class="home">
      <h1>Do We Need To Feed The Cat?</h1>
      <img src="../assets/cat.png" alt="">
      <div class="select">
          <h3>How Many Times Do You Feed The Cat?</h3>
          <form>
              <select name="feed" id="feed" v-model="count" @change="createCheck()">
                  <option value="1" selected>One Time Per Day</option>
                  <option value="2">Two Times Per Day</option>
                  <option value="3">Three Times Per Day</option>
                  <option value="4">Four Times Per Day</option>
              </select>
          </form>
          <div class="wrapper">
              <ul>
                  <li v-for="item in list" :key="item._id">
                      <input type="checkbox" v-model="item.checked" @change="toggle(item._id)">
                      <span>{{!item.checked ? 'Cat Wants Food!' : 'Cat Is Stuffed.'}}</span>
                  </li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex"

export default {
    name: "Home",
    data() {
        return {
            count: '',
            list: [],
            number: 1
        }
    },
    async updated() {
        await this.createList()
    },
    computed: {
        ...mapState(['storeCount', 'checklist'])
    },
    methods: {
        ...mapActions(['getChecklist', 'setCount']),
        async createCheck() {
            this.setCount(this.count)
            await this.createList()
        },
        async createList() {
            await this.getChecklist()
            this.list = await this.checklist
        },
        async toggle(id) {
            try{
                await fetch(`http://localhost:5000/api/check/${id}`, {
                    method: 'PUT'
                })
            } catch(err) {
                console.log(err)
            }
        }
    },
    async created() {
        await this.createList()
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
.disabled {
    color: white;
}

ul {
    list-style-type: none;
}

li {
    margin: 15px 0px
}

ul li span {
    margin-left: 10px;
    font-size: 1.4rem;
    font-weight: 700;
}
</style>