<template>
  <div>
    <table v-if="data.length">
      <thead>
        <tr>
          <th>id</th>
          <% model.data.forEach(function(item){ %>
          <th><%= item %></th>
          <% }); %>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item.id">
          <td>{{item.id}}</td>
          <% model.data.forEach(function(item){ %>
          <td>{{item.<%= item %>}}</td>
          <% }); %>
          <td>
            <router-link :to="'/<%= model.name %>/detail/' +  item.id">Edit</router-link>
          </td>
          <td>
            <router-link :to="'/<%= model.name %>/delete/' +  item.id">Del</router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-else>Empty.</div>

    <router-link to="/<%= model.name %>/add">New</router-link>

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
    fetch("<%- url %>/<%= model.name %>")
      .then(res => res.json())
      .then(res => (this.data = res));
  }
};
</script>

<style scoped>
</style>