import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'search-field-component',
    templateUrl: 'app/components/searchField/searchField.component.html'
})
export class SearchFieldComponent {
    private searchKeywords: string;
    private project: string;
    private branch: string;
    private scope: string;

    constructor(private router: Router, private route: ActivatedRoute) {
        this.searchKeywords = "";
        this.scope = "All projects";
    }

    public onSearch(event: Event) {
        event.preventDefault();

        if(this.project) {
            this.router.navigate(['/documentation'], { queryParams: { 
                'query': this.searchKeywords, 'project': this.project, 'branch': this.branch } });
        }
        else {
            this.router.navigate(['/search'], { queryParams: { 'query': this.searchKeywords } });
        }
    }

    ngOnInit() {
        this.route.queryParams
            .switchMap((params: Params) => {

                this.searchKeywords = params["query"];

                if(params["project"]) {
                    this.scope = "This project";
                }
                else {
                    this.scope = "All projects";
                }

                return Observable.of(
                    { 'query': params["query"], 'project': params["project"], 'branch': params["branch"] }
                );

            })
            .subscribe(data => {

                if(data["project"]) {
                    this.project = data["project"];
                }
                else {
                    this.project = null;
                }

                if(data["branch"]) {
                    this.branch = data["branch"];
                }
                else {
                    this.branch = null;
                }
                
            },
                err => console.error(err)
            );
    }
}