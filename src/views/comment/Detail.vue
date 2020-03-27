<template>
  <div>
    <form>
      
       <div>
        <label>body:</label>
        <input type="text" v-model="data.body" />
      </div>
      
       <div>
        <label>postId:</label>
        <input type="text" v-model="data.postId" />
      </div>
      

      <button @click.prevent="submit">submit</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: {}
    };
  },
  created: function() {
    fetch("http://localhost:3000/comment/" + this.$route.params.id)
      .then(res => res.json())
      .then(res => this.data = res)
      .catch(err => alert(err));
  },
  methods: {
    submit: function() {
      fetch("http://localhost:3000/comment/"+ this.$route.params.id , {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.data)
      }).then(res => res.json())
      .then(res=> {
        this.$router.push({name: 'commentList'})
      }).catch(e => alert(e))
    }
  }
};
</script>
