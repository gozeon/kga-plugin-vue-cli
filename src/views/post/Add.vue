<template>
  <div>
    <form>
      
       <div>
        <label>title:</label>
        <input type="text" v-model="data.title" />
      </div>
      
       <div>
        <label>author:</label>
        <input type="text" v-model="data.author" />
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
      fetch("http://localhost:3000/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.data)
      }).then(res => res.json())
      .then(res=> {
        this.$router.push({name:'postList'})
      }).catch(e => alert(e))
    }
  }
};
</script>
