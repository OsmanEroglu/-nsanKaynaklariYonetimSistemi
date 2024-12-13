import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidate } from 'src/candidate.model';

@Injectable({
  providedIn: 'root'
})
export class CandidatesService {
 
  
  private apiUrl = 'http://localhost:8080/api/candidates'; 

  constructor(private http: HttpClient) { }

  getCandidates(): Observable<Candidate[]> {
    return this.http.get<Candidate[]>(this.apiUrl);
  }


  deleteCandidate(id: number) {
    return this.http.delete(this.apiUrl+"/"+id);
  }

  addCandidate(candidateData: Candidate) {
    return this.http.post(this.apiUrl, candidateData);
  }

  updateCandidate(id: number, candidate: Candidate) {
    return this.http.put(this.apiUrl+"/"+id,candidate);
  }

}
