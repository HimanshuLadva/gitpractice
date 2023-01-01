import { Component, OnInit ,Input ,Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }
  
  @Input() item: number = 0;
  @Output() getDataEvent = new EventEmitter<string>();
  ngOnInit(): void {
    this.getDataEvent.emit("my name is Ladva Himanshu 123");
  }

}
