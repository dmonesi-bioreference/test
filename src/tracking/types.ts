export interface SignUpFlowEventProps {
  signUpStep:
    | 'start'
    | 'identity'
    | 'consent'
    | 'name'
    | 'contact'
    | 'relationship'
    | 'password';
  signUpMethod?: 'email' | 'SMS';
  signUpButtonText: string;
}
