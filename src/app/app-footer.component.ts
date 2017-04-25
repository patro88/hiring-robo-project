import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
        <footer class="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-bottom">
            <div class="container " style="color:#fff">
                <p>Prepared for 
                    <a href="https://github.com/patro88/hiring-robo-project">Robo Hiring Project</a>
                    , by 
                    <a href="https://github.com/patro88">Shakti Prasad Patro</a>
                </p>
            </div>
    </footer>
    `
})
export class AppFooterComponent {}