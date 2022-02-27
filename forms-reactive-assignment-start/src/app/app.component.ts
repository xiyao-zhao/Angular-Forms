import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PromiseType } from 'protractor/built/plugins';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    projectForm: FormGroup;

    ngOnInit() {
        this.projectForm = new FormGroup({
            'projectData': new FormGroup({
                'projectName': new FormControl(null, [Validators.required, this.forbiddenName]),
                'email': new FormControl(null, [Validators.required, Validators.email])
            }),
            'status': new FormControl('critical')
        });
    }

    onSubmit() {
        console.log(this.projectForm.value);
    }

    forbiddenName(control: FormControl): {[s: string]: boolean} {
       if(control.value === 'test') {
           return {'nameIsForbidden': true};
       }
       return null;
    }
}
