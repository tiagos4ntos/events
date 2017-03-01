import { TOASTR_TOKEN, Toastr } from './../commom/toastr.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from './auth.service';


@Component({
    templateUrl: 'app/user/profile.component.html',
    styles: [`
        em { float:right; color: #E05C65; padding-left: 10px; }
        .error input { background-color: #E3C3C5 }
        .error ::-webkit-input-placeholder { color: #999 }
        .error ::-moz-placeholder { color: #999 }
        .error :-moz-placeholder { color: #999 }
        .error :-ms-input-placeholder { color: #999 }
    `]
})
export class ProfileComponent implements OnInit {

    profileForm:FormGroup
    firstName:FormControl
    lastName:FormControl

    constructor(private authService:AuthService, 
        private route:Router,
        @Inject(TOASTR_TOKEN) private toastr: Toastr){

    }

    ngOnInit(){
        this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')])
        this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required)

        this.profileForm = new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName
        })
    }

    validateFistName(){
        return this.firstName.valid || this.firstName.untouched
    }

    validateLastName(){
        return this.lastName.valid || this.lastName.untouched
    }


    saveProfile(formValues){

        this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
        .subscribe(() => {
            this.toastr.success("Profile saved with success!")
            this.route.navigate(['events'])
        });        
    }

    cancel(){
        this.route.navigate(['events'])
    }
}