<script lang="ts">
import { useForm } from "./use/form";
// import TodoWrapper from "./components/TodoWrapper.vue";

const required = (val) => !!val;
const minLength = (num) => (val) => val.length >= num;

export default {
  setup() {
    const form = useForm({
      email: {
        value: "test@example.com",
        validators: { required },
      },
      password: {
        value: "myPassword",
        validators: { required, minLength: minLength(8) },
      },
    });

    console.log(form.password, "password");
    function submit() {}
    return { form, submit };
  },
};
</script>

<template>
  <main>
    <pre>
      {{ form.email }}
    </pre>
    <pre>
      {{ form.password }}
    </pre>
    <form @submit.prevent="submit">
      <div class="form">
        <div class="form-control">
          <label for="email">1</label>
          <input type="text" name="email" v-model="form.email.value" />
        </div>
        <div class="form-control">
          <label for="password">2</label>
          <input type="text" name="password" v-model="form.password.value" />
        </div>
        <button>submit</button>
      </div>
    </form>
  </main>
</template>

<style scoped>
body {
  background-color: #3f72af;
  color: #000;
}
pre {
  color: #000;
}
main {
  background-color: #fff;
  border-radius: 16px;
  padding: 24px;
  width: 800px;
  margin: 0 auto;
}
</style>
