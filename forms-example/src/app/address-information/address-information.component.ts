import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address-information',
  templateUrl: './address-information.component.html',
  styleUrls: ['./address-information.component.scss'],
})
export class AddressInformationComponent implements OnInit, OnChanges {
  @Input()
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      location: new FormControl(''),
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {

    // this.form.value.

  }
}
