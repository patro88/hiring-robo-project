import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import { RoboGlobalConstants } from "../constants/roboGlobalConstants";
import { RoboAssistant } from "../model/roboAssistant";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RoboAssistantService {

  constructor(private http: Http) {}

  getAllRoboAssistants(filter: string) : Promise<RoboAssistant[]> {

    let headers = new Headers();
    headers.append('Content-Type', RoboGlobalConstants.CONTENT_TYPE);
    headers.append('Authorization', RoboGlobalConstants.TOKEN);

    let options = new RequestOptions({ headers: headers });

    return this.http.get( "http://" + RoboGlobalConstants.HOST + "/bots" + "?filter="+ filter , options)
      .toPromise()
      .then(res => res.json() as RoboAssistant[])
  }

  getRoboAssistant(robo_id: string) : Promise<RoboAssistant> {

    let headers = new Headers();
    headers.append('Content-Type', RoboGlobalConstants.CONTENT_TYPE);
    headers.append('Authorization', RoboGlobalConstants.TOKEN);
    let options = new RequestOptions({ headers: headers });

    return this.http.get( "http://" + RoboGlobalConstants.HOST + "/bots/" + robo_id , options)
      .toPromise()
      .then(res => res.json() as RoboAssistant);
  }

}
