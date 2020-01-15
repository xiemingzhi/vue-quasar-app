<template>
  <div class="q-pa-md" style="max-width: 350px">
    <q-list bordered separator>
      <q-item clickable v-ripple v-for="todo in todos" :key="todo.id">
        <q-item-section>{{ todo.title }}</q-item-section>
      </q-item>
    </q-list>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="accent" @click="addTodo" />
    </q-page-sticky>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      todos: []
    };
  },
  methods: {
    addTodo() {
      this.$router.push({ path: "add" });
    }
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => (this.todos = res.data));
  },
  mounted() {
    // eslint-disable-next-line no-console
    console.log("todos length", this.todos.length);
  }
};
</script>

<style lang="scss" scoped>
.todo-fab {
  position: fixed;
  bottom: 25px;
  right: 15px;
  font-size: 30px;
}

.content {
  padding: 10px 10px 10px 0px;
}
</style>
