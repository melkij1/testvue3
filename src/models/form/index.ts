export interface IForm {
  email?: {
    value: string;
    validators?: IValidators;
  };
  password?: {
    value: string;
    validators?: IValidators;
  };
}
interface IValidators {
  required: boolean;
  minLength?: number;
}
