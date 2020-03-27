<template>
  <div>
    <table v-if="data.length">
      <thead>
        <tr>
          <th>id</th>
          
          <th>title</th>
          
          <th>author</th>
          
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item.id">
          <td>{{item.id}}</td>
          
          <td>{{item.title}}</td>
          
          <td>{{item.author}}</td>
          
          <td>
            <router-link :to="'/post/detail/' +  item.id">Edit</router-link>
          </td>
          <td>
            <router-link :to="'/post/delete/' +  item.id">Del</router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-else>Empty.</div>

    <router-link to="/post/add">New</router-link>

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
    fetch("http://localhost:3000/post")
      .then(res => res.json())
      .then(res => (this.data = res));
  }
};
</script>

<style scoped>
</style>