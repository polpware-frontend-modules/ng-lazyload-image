import { Observable } from 'rxjs';
export declare function sampleObservable(obs: Observable<any>, scheduler?: any): Observable<string>;
export declare const getScrollListener: (scrollTarget: any) => Observable<String | Event>;
