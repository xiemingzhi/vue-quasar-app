<template>
  <div class="q-pa-md">
    <div class="q-gutter-md" style="max-width: 300px">
      <q-input
        :value="name"
        ref="newTodoItem"
        label="Standard"
        @input="updateTodoName"
        placeholder="Todo Name"
      />
    </div>
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
      name: ""
    };
  },
  methods: {
    addTodo() {
      const newTodo = { name: this.name };
      axios
        .post("https://jsonplaceholder.typicode.com/todos", newTodo)
        .then(res => {
          // eslint-disable-next-line no-console
          console.log("addtodo", res);
          this.$router.push({ path: "/" });
        });
    },
    updateTodoName() {
      //ref defined on the input element
      this.name = this.$refs.newTodoItem.value;
    }
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
</style>
