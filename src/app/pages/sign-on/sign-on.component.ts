import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface IUser {
  username: string,
  password: string
}

@Component({
  selector: 'app-sign-on',
  templateUrl: './sign-on.component.html',
  styleUrls: ['./sign-on.component.scss']
})

export class SignOnComponent implements OnInit {


  // TODO: these properties are not very DRY, could consider implementing an interface or class to handle the input validity & values

  // TODO: might want to look into Angular form validation to see if the framework could do some of the heavy lifting for us instead of custom components/properties

  // TODO: could move the register/forgot password popups and logic to their own components

  
  // Booleans to show the popups or not
  showRegistrationModal: boolean = false;
  showForgotPasswordModal: boolean = false;

  // Log on
  username: string = '';
  password: string = '';
  valid: boolean = true;

  // Register
  registerUsername: string = '';
  registerPassword: string = '';
  registerEmail: string = '';
  registerPasswordValid: boolean = true;
  registerEmailValid: boolean = true;

  // ForgotPassword
  forgotPasswordEmail: string = '';
  forgotPasswordEmailValid: boolean = true;

  // Verification Regex
   emailValidation: RegExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
   passwordValidation: RegExp = /^(?=.*\d)[0-9a-zA-Z]{8,}$/

  // User model
  users: IUser[] = [{username: 'test', password: 'password123'}]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showRegistrationPopup(){
    this.showRegistrationModal = true;
  }

  forgotPassword(){
    this.showForgotPasswordModal = true;
  }

  closeModal(){
    this.showForgotPasswordModal = false;
    this.showRegistrationModal = false;
  }

  signOn(){

    // Find a user with matching username/password, we can consider this a successful login
    const signedInUser = this.users.find(user => {
      return user.password == this.password && user.username == this.username
    });

    // Upon successful login we send the user to the app view page, otherwise show the invalid username/pass message
    if(signedInUser){
      this.router.navigate(['/application-view'])
    }
    else {
      // handle error
      this.valid = false;
    }
  }

  registerAccount(){

    // cross check the user inputs for email and password against the regex validator
    if(!this.registerEmail.match(this.emailValidation)){
      this.registerEmailValid = false;
    }
    else{
      this.registerEmailValid = true;
    }
    
    if(!this.registerPassword.match(this.passwordValidation)){
      this.registerPasswordValid = false;
    }
    else{
      this.registerPasswordValid = true;
    }

    // when we have a valid username/email/password we can create a new user and close the popup
    // user should be able to sign in with newly created credentials
    if(this.registerPasswordValid && this.registerEmailValid && this.registerUsername){
      this.users.push({username: this.registerUsername, password: this.registerPassword});
      this.showRegistrationModal = false;
    }
  }

  sendVerificationCode(){
    window.alert(`verification code sent to ${this.forgotPasswordEmail}`)
    this.showForgotPasswordModal = false;
  }

}
