<template>
  <div>会社名： {{ store.person.company }}</div>
  <div>氏名： {{ store.name }}</div>
  <div>No： {{ store.no }}</div>
  <button v-on:click="store.increment">click</button>←クリックするとNoの値がインクリメントされます。
</template>

<script>
import { useStore } from "./stores/exampleStore";

export default {
  name:'app', 
  data() {
    return {
      store: useStore(),
    };
  },
};
</script>
