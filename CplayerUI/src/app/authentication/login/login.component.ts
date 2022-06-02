import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthServiceService } from 'src/app/services/auth-service.service';
import { User } from 'src/app/services/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    credentials={
      userId:'',
      password:''
    }
    userId = '';
    formGroup!: FormGroup;
    user:User = new User();
    userIdentity:string= this.credentials.userId;
  
  //   user2 =  {
  //     userId:'',
  //     password:'',
  //     firstName:'',
  //     lastName:'',
  //     email:'',
  
  // }
  //  savedId= this.user2.userId;  

  constructor(private loginService: AuthServiceService ) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      userId: new FormControl("",[Validators.required]),
      password: new FormControl("",[Validators.required])
     });
    
  }
  
  // saveid= this.loginService.SaveUser.userId;

  onSubmit(){
    console.log('form is submitted')
    if((this.user.userId!='' && this.user.password!='') &&(this.user.userId!=null && this.user.password!=null))
    {
      console.log('We have to submit')
      //token generation
      this.loginService.dologin(this.user).subscribe(
        (data:any) =>{
          //succeess
          console.log(data);
          this.userIdentity = data.userId;
          this.loginService.loginUser(data.token)
          window.location.href='/Playerlist'
          // this.router.navigate(['/players/search']);
      },
      error =>{
        console.log(error);
        alert("Wrong user id or password");
      }
      )

      // this.authService.loginUser(this.user).subscribe(data => {
      //   console.log("Login successful");
      //   if(data['token']) {
      //     this.authService.setToken(data['token']);
      //     this.router.navigate(['/players/search']);
      //   }
    }else{
      console.log("Fields are empty")
    }
  }

//   var input = document.getElementById("saveServer");
// localStorage.setItem("server", input.val());
// inpu = document.getElementById("saveId");
// storedValue = this.inpu;
 
    


}
