import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CandidatesService } from '../candidates.service';
import { Router } from '@angular/router';
import { Candidate } from 'src/candidate.model';

@Component({
  selector: 'app-update-candidate',
  templateUrl: './update-candidate.page.html',
  styleUrls: ['./update-candidate.page.scss'],
})
export class UpdateCandidatePage implements OnInit {
  candidate: any;
  id: any;
  constructor(private formBuilder: FormBuilder,private router:Router, private candidateService: CandidatesService) {
    this.candidateInit();
  }

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if(navigation?.extras.state){
      this.candidate = navigation.extras.state['candidate'];
      this.id = navigation.extras.state['id'];
    }
  }

  candidateInit(){
    this.candidate = {
      firstName: '',
      lastName: '',
      position: '',
      militaryStatus: '',
      noticePeriod: '',
      phone: '',
      email: '',
      cv: '',
    };
  }

  updateCandidate(){
    this.candidateService.updateCandidate(this.id,this.candidate).subscribe();
    this.router.navigate(['/']);
  }

  cancel(){
    this.router.navigate(['/']);
  }

}
