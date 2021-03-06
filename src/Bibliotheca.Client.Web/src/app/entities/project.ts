import { ContactPerson } from './contact-person';
import { EditLink } from './edit-link';
import { Branch } from './branch';

export class Project {
    id: string;
    name: string;
    description: string;
    defaultBranch: string;
    group: string;
    visibleBranches: string[];
    tags: string[];
    projectSite: string;
    contactPeople: ContactPerson[];
    editLinks: EditLink[];
    accessToken: string;
    isAccessLimited: Boolean;
    branches: Branch[];
}