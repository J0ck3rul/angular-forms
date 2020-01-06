import { ControlValueAccessor} from '@angular/forms';

export class CustomControlValueAccessor implements ControlValueAccessor {
  protected onChange: Function;
  protected onTouched: Function;

  protected formChanges: any;


  public writeValue(obj: any): void {
    // do nothing
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    // do nothing
  }
}
