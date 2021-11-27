import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  public dynamicForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.dynamicForm = this.fb.group({
      row: this.fb.array([this.addRowGroup()])
    });
  }

  private addRowGroup(): FormGroup {
    return this.fb.group({
      category: [null, Validators.required],
      Subcategory: [null, Validators.required],
      Units: [null, Validators.required],
    });
  }

  addRow(): void {
    if (this.rowArray.valid) {
      this.rowArray.push(this.addRowGroup());
      // console.log(this.rowArray);
    }
  }

  removeAddress(index: number): void {
    this.rowArray.removeAt(index);
  }

  get rowArray(): FormArray {
    return <FormArray>this.dynamicForm.get('row');
  }

  ngOnInit(): void {
  }
  Submit(val){
console.log(val.value);

  }
}
