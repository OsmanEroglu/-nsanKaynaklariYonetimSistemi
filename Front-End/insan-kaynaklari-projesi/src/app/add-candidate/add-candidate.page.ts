import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CandidatesService } from '../candidates.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.page.html',
  styleUrls: ['./add-candidate.page.scss'],
})
export class AddCandidatePage implements OnInit {

  candidateForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router,private candidatesService: CandidatesService) {
    this.candidateForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      position: [''],
      militaryStatus: [''],
      noticePeriod: [''],
      phone: [''],
      email: [''],
      cv: ['']
    });
  }

  ngOnInit() {}

  submitForm() {
      const candidateData = this.candidateForm.value;
      this.candidatesService.addCandidate(candidateData).subscribe();
      this.cancel();    
  }

  cancel(){
    this.candidateForm.reset();
    this.router.navigate(['/']);
  }
}
