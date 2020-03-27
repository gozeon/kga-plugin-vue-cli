<template>
    <div></div>
</template>
<script>
export default {
    created: function(){
        fetch("<%- url %>/<%= model.name %>/" + this.$route.params.id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(res => {
          this.$router.push({ name: "<%= model.name %>List" });
        })
        .catch(e => alert(e));
    }
}
</script>