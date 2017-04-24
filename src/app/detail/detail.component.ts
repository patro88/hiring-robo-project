import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { RoboAssistantService } from "../service/roboAssistant.service";
import { RoboReviewsService } from "../service/roboReviews.service";
import { RoboAssistant } from "../model/roboAssistant";
import { RoboReview } from "../model/roboReview";



@Component({
  selector: 'app-details',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute,
              private roboAssistantService: RoboAssistantService,
              private roboReviewsService: RoboReviewsService) { }
  
  private sub: any;

  robo : any;
  roboReviews : RoboReview[];
  
  ngOnInit() {
    this.getRoboDeatails();
  }

  getRoboDeatails() {
    this.sub = this.route.params.subscribe(params => {
      let robo_id = params['id']; 
      this.roboAssistantService.getRoboAssistant(robo_id).then((result) => {
        this.robo = result;
        this.roboReviewsService.getRoboReview(this.robo.reviews).then((reviews) => {
          this.roboReviews = reviews;
        });
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
