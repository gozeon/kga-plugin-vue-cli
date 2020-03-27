<template>
    <div></div>
</template>
<script>
export default {
    created: function(){
        fetch("http://localhost:3000/post/" + this.$route.params.id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(res => {
          this.$router.push({ name: "postList" });
        })
        .catch(e => alert(e));
    }
}
</script>