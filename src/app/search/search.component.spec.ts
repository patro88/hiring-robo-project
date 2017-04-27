
import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { SearchComponent } from './search.component';
import { RoboAssistantService } from "../service/roboAssistant.service";

const roboAssistants = [
  {
    "_id": "58ed40da7c19aa59a3d8dea1",
    "robo_id": "MM204WZ39989",
    "name": "Raymond",
    "model": "G60",
    "price": 51660812,
    "avatar": "https://robohash.org/pariaturtemporibussit.jpg?size=250x250&set=set1",
    "__v": 1,
    "reviews": "58ee54dac3e88b670249f7ef"
  },
  {
    "_id": "58ed40da7c19aa59a3d8dea2",
    "robo_id": "4496XX89V36G",
    "name": "Peter",
    "model": "X40",
    "price": 53786350,
    "avatar": "https://robohash.org/atquesitvoluptas.png?size=250x250&set=set1",
    "__v": 1,
    "reviews": "58ee54dac3e88b670249f7f0"
  },
  
];

class MockRoboAssistantService {

  getAllRoboAssistants(filter : string) {
    return Promise.resolve(roboAssistants);
  }

  getRoboAssistant(robo_id : string) {
    return Promise.resolve(roboAssistants[0]);
  }
}


describe('SearchComponent Testing', () => {

  let comp: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let searchTextDe: DebugElement;
  let searchResultsDe: DebugElement[];
  let searchTextEl: HTMLElement;
  let searchResultsEl: HTMLElement[];
  let roboService : RoboAssistantService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent ],
      providers: [
        { provide: RoboAssistantService, useClass: MockRoboAssistantService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges(); 
    roboService = fixture.debugElement.injector.get(RoboAssistantService);
    searchTextDe = fixture.debugElement.query(By.css('.btn'));
    searchTextEl = searchTextDe.nativeElement;
    searchResultsDe = fixture.debugElement.queryAll(By.css('.card li'));
    //searchResultsEl = searchTextDe.nativeElement;
  });

  describe('when search text is empty' , () => {
        it('should return list of all robos ', fakeAsync(() => {
          searchTextEl.click();
          fixture.detectChanges();
          tick();
          fixture.detectChanges();
          expect(searchResultsDe.length).toEqual(4);
        }));
    });
});