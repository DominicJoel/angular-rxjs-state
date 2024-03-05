import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";

import { BlockNodeStoreService } from "./block-node-store.service";
import { ApiService } from "./api.service";
import { HttpClient } from "@angular/common/http";
import { Block } from "../../models/block";
import { of, throwError } from "rxjs";

fdescribe("BlockNodeStoreService", () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let blockStoreService: BlockNodeStoreService;
  const mosckBlockService = jasmine.createSpyObj("ApiService", ["get"]);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: ApiService, useValue: mosckBlockService }],
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    blockStoreService = TestBed.get(BlockNodeStoreService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it("should be created", () => {
    const service: BlockNodeStoreService = TestBed.get(BlockNodeStoreService);
    expect(service).toBeTruthy();
  });

  it("should get node's block", () => {
    ///Arrange
    const block = {
      data: [
        {
          id: "1",
          type: "blocks",
          attributes: {
            timestamp: 4556465,
            index: 1,
            previousHash: "asdasd",
            hash: "asdasdas",
            data: "Test",
          },
        },
      ],
    };

    mosckBlockService.get.and.returnValue(of(block));

    // Act
    blockStoreService.getNodeBlocks(
      "https://calm-anchorage-82141.herokuapp.com"
    );

    ///Assert

    expect(blockStoreService.state.loading).toBeFalsy();
    expect(blockStoreService.state.blocks.length).toEqual(1);
  });

  it("should handle node's block error ", () => {
    ///Arrange
    const error = throwError(new Error("Error"));

    mosckBlockService.get.and.returnValue(error);

    // Act
    blockStoreService.getNodeBlocks("local");

    ///Assert

    expect(blockStoreService.state.loading).toBeFalsy();
    expect(blockStoreService.state.blocks.length).toEqual(0);
  });
});
