import type { IForm } from "@/models/form";
import { ref, reactive, computed } from "vue";
import { useField } from "./field";

interface IuseForm extends IForm {
  errors?: {
    required?: boolean;
    minLength?: boolean;
  };
}

export function useForm(init: IForm = {}): IuseForm {
  const form = reactive({});
  for (const [key, value] of Object.entries(init)) {
    console.log(key, value);
    form[key] = useField(value);
  }

  console.log(form, "form");
  return form;
}
