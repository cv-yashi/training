import { Component, ViewChild, ViewChildren } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('nums') inputValue;
  title = 'ecommerce';

  compositeNums: any[] = [2, 3, 4, 5, 6];
  color: string;

  constructor(private toastr: ToastrService) { }

  //modifying the original array
  onSubmit(num) {
    if (num > 2) {
      this.compositeNums.push(num);
    }
    else {
      this.toastr.error(num + ' is not composite number', 'Error');
    }
    this.inputValue.nativeElement.value = '';
  }
}
