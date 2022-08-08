interface LoginFormData {
  username: string;
  password: string;
}

interface LoginFormActions {
  setSubmitting: (value: boolean) => void;
  setErrors: (errors: Record<string, string>) => void;
}
