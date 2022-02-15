export interface SignUpFlowEventProps {
  signUpStep:
    | 'identity'
    | 'consent'
    | 'name'
    | 'contact'
    | 'relationship'
    | 'password';
  signUpMethod?: 'email' | 'SMS';
  signUpButtonText: string;
}
