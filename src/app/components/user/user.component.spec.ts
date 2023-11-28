import { Component, OnInit } from '@angular/core';
import { LogService } from '../../log.service';

@Component({
  selector: 'app-user',
  template: `<p>User Component</p>`
})
export class UserComponent implements OnInit {
  constructor(private logService: LogService) {}

  ngOnInit() {
    this.logService.log('User Component Initialized');
  }
}
