import { Component } from '@angular/core';
import { CandidatesService } from '../candidates.service';
import { Candidate } from 'src/candidate.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.page.html',
  styleUrls: ['./candidates.page.scss'],
})
export class CandidatesPage {
  private apiUrl = 'http://localhost:8080/api/candidates';

  candidates: Candidate[] = [];
  positions:string[]=[];
  militaryStatus:string[]=[];
  noticePeriod:string[]=[];

  filter = { position: '', militaryStatus: '', noticePeriod:''};
  filteredCandidates = this.candidates;



  constructor(private candidatesService: CandidatesService, private router: Router,private http: HttpClient){}

  ngOnInit() {
    this.loadCandidates();
  }

  ionViewWillEnter() {
    this.loadCandidates();
  }

  loadCandidates() {
    this.candidatesService.getCandidates().subscribe((data) => {
      this.candidates = data;
      this.filteredCandidates = [...this.candidates]; // Başlangıçta tüm adayları listele
      this.loadFilter();
      this.applyFilters();
    });
  }

  loadFilter(){
    this.positions =[...new Set(this.candidates.map(candidate => candidate.position))];
    this.militaryStatus =[...new Set(this.candidates.map(candidate => candidate.militaryStatus))];
    this.noticePeriod =[...new Set(this.candidates.map(candidate => candidate.noticePeriod))];
  }

  applyFilters() {
    this.filteredCandidates = this.candidates.filter(candidate => {
      return (
        (this.filter.position === "" || candidate.position === this.filter.position) &&
        (this.filter.militaryStatus === "" || candidate.militaryStatus === this.filter.militaryStatus) &&
        (this.filter.noticePeriod === "" || candidate.noticePeriod === this.filter.noticePeriod)
      );
    });
  }

  addCandidate() {
    this.router.navigate(['/add-candidate']);
  }

  deleteCandidate(id: number) {
    this.candidatesService.deleteCandidate(id).subscribe(() => this.loadCandidates());
  }

  updateCandidate(candidate:Candidate){
    this.router.navigate(['/update-candidate'],{state:{candidate: candidate,id: candidate.id}});
  }
  
}
