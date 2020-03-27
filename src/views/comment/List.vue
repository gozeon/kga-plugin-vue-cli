<template>
  <div>
    <table v-if="data.length">
      <thead>
        <tr>
          <th>id</th>
          
          <th>body</th>
          
          <th>postId</th>
          
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item.id">
          <td>{{item.id}}</td>
          
          <td>{{item.body}}</td>
          
          <td>{{item.postId}}</td>
          
          <td>
            <router-link :to="'/comment/detail/' +  item.id">Edit</router-link>
          </td>
          <td>
            <router-link :to="'/comment/delete/' +  item.id">Del</router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-else>Empty.</div>

    <router-link to="/comment/add">New</router-link>

  </div>
</template>
<script>
export default {
  data() {
    return {
      data: []
    };
  },
  created: function() {
    fetch("http://localhost:3000/comment")
      .then(res => res.json())
      .then(res => (this.data = res));
  }
};
</script>

<style scoped>
</style>