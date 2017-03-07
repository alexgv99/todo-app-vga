import { FirebaseListObservable } from 'angularfire2/database';
import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Pipe({
	name: 'reverseOrder'
})
export class ReverseOrderPipe implements PipeTransform {

	transform(observable: FirebaseListObservable<any>, args: string): Observable<any> {
		return observable.map(a => a.reverse());
	}

}
