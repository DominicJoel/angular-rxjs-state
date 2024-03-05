import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BlockComponent } from "./block.component";
import { Block } from "../../models/block";

fdescribe("BlockComponent", () => {
  let component: BlockComponent;
  let fixture: ComponentFixture<BlockComponent>;
  const block: Block = {
    id: "1",
    type: "blocks",
    attributes: {
      timestamp: 4556465,
      index: 1,
      previousHash: "asdasd",
      hash: "asdasdas",
      data: "Test",
    },
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BlockComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockComponent);
    component = fixture.componentInstance;
    component.block = block;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Should display correct Id", () => {
    expect(fixture.nativeElement.querySelector("label").innerText).toEqual("1");
  });

  it("Should display correct Data", () => {
    expect(fixture.nativeElement.querySelector("p").innerText).toEqual("Test");
  });
});
