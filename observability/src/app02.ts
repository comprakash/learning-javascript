import { Observable } from "rxjs";


var observable = Observable.create((observer:any) => {
    observer.next('Using Rxjs  #2')
});

observable.subscribe((x:any) => console.log(x));