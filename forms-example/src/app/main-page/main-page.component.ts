import {
  ChangeDetectionStrategy,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomControlValueAccessor } from '../forms/control-value-accessor';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent implements OnInit, OnChanges {
  form: FormGroup = new FormGroup({
    personal: new FormControl('', [Validators.required]),
    address: new FormControl(),
    optional: new FormControl(),
  });
  canSubmit = this.form.valid;
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
  }

  ngOnInit(): void {
    // console.log(this.form.valid);

    this.form.valueChanges.subscribe(() => {
      this.canSubmit = false;
    });
  }

  getFormState() {
    console.log('got state');
  }
}
