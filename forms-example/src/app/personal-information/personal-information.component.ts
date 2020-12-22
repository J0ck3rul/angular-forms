import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  forwardRef,
  Input,
  OnInit,
} from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CustomControlValueAccessor } from '../forms/control-value-accessor';
import {
  PersonalInfoFormGroup,
  TypedPersonalInfoFormGroup,
} from '../forms/personal-info.form';
@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PersonalInformationComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => PersonalInformationComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalInformationComponent
  extends CustomControlValueAccessor
  implements OnInit {
  form: TypedPersonalInfoFormGroup;

  constructor(private cd: ChangeDetectorRef) {

    super();
    const form: any = new PersonalInfoFormGroup();
    this.form = form;
    this.form.controls.name.valueChanges.subscribe((x) => {});
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe((value) => {
      if (this.form.valid) {
        this.onChange(value);
      }
    });

    // this.form.statusChanges.subscribe(() => {
    //   this.onChange(this.form.value)
    // })
  }

  public validate(): any {
    return this.form.valid ? null : { valid: false };
  }
}
// TODO: ADD GITIGNORE
// TODO: ADD TO REPO
