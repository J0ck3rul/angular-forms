import { ControlValueAccessor, FormGroup} from '@angular/forms';
import { Directive } from '@angular/core';

@Directive()
export class CustomControlValueAccessor implements ControlValueAccessor {
  protected onChange: Function;
  protected onTouched: Function;

  protected formChanges: any;

  // public form: FormGroup = new FormGroup({});

  public writeValue(): void {
    // do nothing
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState?(): void {
    // do nothing
  }

//   public validate(): any {
//     return this.form.valid? null : {valid: false};
//   }
}
