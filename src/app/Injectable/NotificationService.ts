import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MessageService } from 'primeng/api';
import { Notifiy } from './models/Notify';

@Injectable()
export class NotificationService {
  notify: Subject<any> = new Subject<any>();

  constructor(private messageService: MessageService) {}

  notifiyGlobalMessage(data: Notifiy) {
    console.log('Notifiy Message');
    this.messageService.add(data as Object);
    this.notify.next(data);
  }
}
