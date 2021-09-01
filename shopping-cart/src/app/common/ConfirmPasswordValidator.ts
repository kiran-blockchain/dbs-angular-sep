import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms"

export function ConfirmPassword(confirmPassword: AbstractControl, password: AbstractControl): ValidatorFn {
    // controlName  in our case which is confirmpassword
    //matching control to compare with the password field
    //return (formGroup:FormGroup):ValidationErrors=>{
    //return  (formGroup:FormGroup)=>{
    //        const confirmPassword = formGroup.controls[controlName];
    //        const password = formGroup.controls[matchingControl];

    //        if(confirmPassword.value === password.value){
    //            return null;
    //        }else{
    //            return {'mustMatch':true};
    //        }

    //    }
    return (): ValidationErrors => {
        if (confirmPassword.value == password.value) {
            return {
                "mustMatch": true
            }
        }
        return {
            "mustMatch": false
        }
    }

};