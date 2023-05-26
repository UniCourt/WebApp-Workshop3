import { Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() title:string;
  @Output() changeValue=new EventEmitter<any>

  OnClick(){
    this.changeValue.emit();
  }
}
