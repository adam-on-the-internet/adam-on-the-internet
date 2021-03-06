import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ContactBody} from "../models/ContactBody.model";
import {RestUrlBuilder} from "../utilities/rest-url-builder.util";
import {ServiceUrl} from "../constants/rest.constants";

@Injectable({
  providedIn: "root"
})
export class ContactService {

  constructor(
    private http: HttpClient,
  ) {
  }

  public contactAOTI(contactBody: ContactBody): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "contact"
    });
    return this.http.post(url, contactBody) as Observable<any>;
  }
}
