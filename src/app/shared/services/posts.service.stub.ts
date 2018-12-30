import { of } from "rxjs";


interface Posts {
  user: any,
  id: number,
  title: string,
  body: string
}

export class PostsServiceStub {
  
  public getPosts() {
    return of({})
  }
  
  public deletePost(id: number) {
    return of({})
  }
  
  public getPostById(id: number) {
    return of({})
  }
  
  public updatePost(id: number, data: Posts) {
    return of({})
  }



}

