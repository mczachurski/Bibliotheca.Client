import { Component, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Project } from '../../model/project';
import { Branch } from '../../model/branch';
import { HttpClient } from '../../services/httpClient.service';

@Component({
    selector: 'branches',
    templateUrl: 'app/components/branches/branches.component.html',
    styleUrls: ['app/components/branches/branches.component.css']
})
export class BranchesComponent {
    
    @Input()
    public projectId: string;

    public branches: Branch[];

    private httpClient:HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    ngOnInit() {
        this.httpClient.get('http://localhost:5000/api/projects/' + this.projectId + '/branches').subscribe(result => {
            this.branches = result.json();
        });
    }
}