export interface ContactFormFields {
  fullName: string;
  email: string;
  message: string;
}

export interface ValidationRules {
  required?: boolean;
  pattern?: RegExp;
  maxLength?: number;
}
