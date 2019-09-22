export class Quote {
    public upvotes:number;
    public downvotes:number;
    public showDetails:boolean;
    
    constructor(public id:number,public Name:string,public author:string,public submittedBy:string, public dateCreation:Date ){
        this.upvotes=0;
        this.downvotes=0;
        this.showDetails=false;
    }
}
