import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidator {
  static validate(control: AbstractControl): ValidationErrors | null {
    const value: string = control.value;

    // Check for minimum length
    if (value && value.length < 8) {
      return { minLength: true };
    }

    // Check for lowercase, uppercase, digit, and special character using regular expressions
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
    if (value && !regex.test(value)) {
      return { complexity: true };
    }

    return null;
  }
}
