import {
  AbstractControl,
  Form,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

export interface PersonalInfoModel {
  name: string;
  email: string;
}

type PersonalInfoControls = {
  [key in keyof PersonalInfoModel]: AbstractControl;
};

export type TypedPersonalInfoFormGroup = Omit<
  PersonalInfoFormGroup,
  'value' | 'controls'
> & { value: PersonalInfoModel; controls: PersonalInfoControls };

export class PersonalInfoFormGroup extends FormGroup {
  constructor() {
    super({
      name: new FormControl('', [Validators.minLength(4)]),
      email: new FormControl(''),
    });
  }

  addData(): void {
    console.log('lala');
  }
}
