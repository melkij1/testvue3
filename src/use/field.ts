import { reactive, ref, watch } from "vue";

export function useField(field: any) {
  const valid = ref(true);
  const value = ref(field.value);
  const errors = reactive({});

  const reassign = (val) => {
    valid.value = true;
    Object.keys(field.validators ?? {}).map((name) => {
      console.log(name);
      const isValid = field.validators[name](val);
      errors[name] = !isValid;
      if (!isValid) {
        valid.value = false;
      }
    });
  };

  watch(value, reassign);
  reassign(value.value);
  return { value, valid, errors };
}
