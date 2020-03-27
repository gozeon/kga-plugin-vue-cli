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
  methods: {
    submit: function() {
      fetch("http://localhost:3000/comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.data)
      }).then(res => res.json())
      .then(res=> {
        this.$router.push({name:'commentList'})
      }).catch(e => alert(e))
    }
  }
};
</script>
