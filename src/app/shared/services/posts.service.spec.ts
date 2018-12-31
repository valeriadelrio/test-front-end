/* tslint:disable:no-unused-variable */
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { TestBed, fakeAsync, tick } from "@angular/core/testing";
import { HttpClient } from "@angular/common/http";
import { PostsService } from "./posts.service";
import { post } from "selenium-webdriver/http";

describe("Service: PostsService", () => {
  let service: PostsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
      TestBed.configureTestingModule({
          imports: [HttpClientTestingModule],
          providers: [PostsService]
      });
      // Returns a service with the MockBackend so we can test with dummy responses
      service = TestBed.get(PostsService);
      // Inject the http service and test controller for each test
      httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
      // After every test, assert that there are no more pending requests.
      httpTestingController.verify();
  });

  it(
      "search should return getposts",
      fakeAsync(() => {
          let posts = [
            {
              "user": {
                "id": 1,
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "Sincere@april.biz"
              },
              "title": "qui est esse",
              "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
              "id": 1
            },
          ]

          // Perform a request (this is fakeAsync to the responce won't be called until tick() is called)
          service.getPosts().subscribe((post: any) => {
            expect(post.length).toBe(1);
            expect(post).toEqual(posts)
          });

          // Expect a call to this URL
          const  req = httpTestingController.expectOne(`${service.url}`);
          // const req = httpTestingController.expectOne(
          //     "http://localhost:3000/posts/1"
          // );
          // Assert that the request is a GET.
          expect(req.request.method).toEqual("GET");
          // Respond with this data when called
          req.flush(posts);

          httpTestingController.verify();
          // Call tick whic actually processes te response
          tick();
      })
  );


  it(
    "should call deletePost",
    fakeAsync(() => {

        // Perform a request (this is fakeAsync to the responce won't be called until tick() is called)
        const id = 1;
        service.deletePost(id).subscribe((post: any) => {});

        // Expect a call to this URL
        const  req = httpTestingController.expectOne(`${service.url}/${id}`);
      
        // Assert that the request is a GET.
        expect(req.request.method).toEqual("DELETE");

        httpTestingController.verify();
        // Call tick whic actually processes te response
        tick();
    })
);

it(
  "should return getpostByID",
  fakeAsync(() => {
      let posts = [
        {
          "user": {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz"
          },
          "title": "qui est esse",
          "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
          "id": 1
        },
      ]

      // Perform a request (this is fakeAsync to the responce won't be called until tick() is called)
      const id = 1;
      service.getPostById(id).subscribe((post: any) => {
        expect(post.length).toBe(1);
        expect(post).toEqual(posts)
      });

      // Expect a call to this URL
      const  req = httpTestingController.expectOne(`${service.url}/${id}`);
      // Assert that the request is a GET.
      expect(req.request.method).toEqual("GET");
      // Respond with this data when called
      req.flush(posts);

      httpTestingController.verify();
      // Call tick whic actually processes te response
      tick();
  })
);


});

