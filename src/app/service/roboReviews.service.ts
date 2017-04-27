import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/toPromise';

import { RoboGlobalConstants } from "../constants/roboGlobalConstants";
import { RoboReview } from "../model/roboReview";

@Injectable()
export class RoboReviewsService {

  constructor(private http: Http) { }

  getRoboReview(robo_id: string) :  Promise<RoboReview[]> {
    let headers = new Headers();
    headers.append('Content-Type', RoboGlobalConstants.CONTENT_TYPE);
    headers.append('Authorization', RoboGlobalConstants.TOKEN);
    headers.append('Access-Control-Allow-Origin', '*');
    let options = new RequestOptions({ headers: headers });

    return this.http.get( "http://" + RoboGlobalConstants.HOST + "/reviews/" + robo_id , options)
      .toPromise()
      .then(res => res.json().content as RoboReview[]);
  }
}
