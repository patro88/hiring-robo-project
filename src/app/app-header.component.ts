import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    styles : ['.navbar-brand { background-color: rgb(41, 43, 44);}'],
    template: `
        <nav class="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
                aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            </button>
            <a class="navbar-brand" href="#">Robo Inc.</a>
        </nav>
        `
})
export class AppHeaderComponent {}