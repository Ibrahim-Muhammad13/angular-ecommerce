import { AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';

export class ConfirmPasswordValidator {
  static passwordConfirming(c: AbstractControl): ValidationErrors | null {    
    const password = c.get('password')?.value;
    console.log(c);

    const confirmPassword = c.get('confirm_password')?.value;

    if (password !== confirmPassword) {
      return { invalid: true };
    }

    return null;
  }
}
