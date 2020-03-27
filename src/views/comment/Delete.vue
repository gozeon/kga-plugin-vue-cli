<template>
    <div></div>
</template>
<script>
export default {
    created: function(){
        fetch("http://localhost:3000/comment/" + this.$route.params.id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(res => {
          this.$router.push({ name: "commentList" });
        })
        .catch(e => alert(e));
    }
}
</script>