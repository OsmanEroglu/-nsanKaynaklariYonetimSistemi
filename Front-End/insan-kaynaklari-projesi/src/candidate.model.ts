export class Candidate {
    id: number;
    firstName: string;
    lastName: string;
    position: string;
    militaryStatus: string;
    noticePeriod: string;
    phone : string;
    email : string;
    cv : string;
    remainingTime: number;
  
    constructor(id: number, name: string, surname: string, position: string, militaryStatus: string, noticePeriod: string, phone: string, email: string, cv: string,remainingTime: number) {
      this.id = id;
      this.firstName = name;
      this.lastName = surname;
      this.position = position;
      this.militaryStatus = militaryStatus;
      this.noticePeriod = noticePeriod;
      this.phone = phone;
      this.email = email;
      this.cv = cv;
      this.remainingTime = remainingTime;
    }
  }
  