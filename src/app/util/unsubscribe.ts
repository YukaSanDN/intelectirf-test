import {Subject} from 'rxjs';
import {OnDestroy} from '@angular/core';

export class Unsubscribe implements OnDestroy{
  public unSubscribe = new Subject();
  public ngOnDestroy(): void {
    this.unSubscribe.next();
    this.unSubscribe.complete();
  }
}
