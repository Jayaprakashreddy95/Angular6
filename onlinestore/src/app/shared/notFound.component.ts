import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    templateUrl: './notFound.component.html',
    styleUrls: ['./notFound.component.css']
})

export class NotFoundComponent {
    constructor(private route: ActivatedRoute,
        private router: Router ) {}

    onBack(){
        this.router.navigate(['/home']);
    }

}