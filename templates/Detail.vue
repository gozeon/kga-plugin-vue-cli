<template>
  <div>
    <form>
      <% model.data.forEach(function(item){ %>
       <div>
        <label><%= item %>:</label>
        <input type="text" v-model="data.<%= item %>" />
      </div>
      <% }); %>

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
    fetch("<%- url %>/<%= model.name %>/" + this.$route.params.id)
      .then(res => res.json())
      .then(res => this.data = res)
      .catch(err => alert(err));
  },
  methods: {
    submit: function() {
      fetch("<%- url %>/<%= model.name %>/"+ this.$route.params.id , {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.data)
      }).then(res => res.json())
      .then(res=> {
        this.$router.push({name: '<%= model.name %>List'})
      }).catch(e => alert(e))
    }
  }
};
</script>
