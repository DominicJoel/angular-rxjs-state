import { Injectable } from "@angular/core";
import { Store } from "./store";
import { BlocksNode } from "../../models/blocks-node";
import { ApiService } from "./api.service";
import { BlockNodeState } from "./blocks-node-state";
import { environment } from "src/environments/environment";
import { map, startWith, catchError } from "rxjs/operators";
import { of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BlockNodeStoreService extends Store<BlocksNode> {
  endPointName = "blocks";
  constructor(private api: ApiService) {
    super(new BlockNodeState().nodeBlocks);
  }

  public getNodeBlocks(nodeUrl: string) {
    this._getNodeBlocks(nodeUrl).subscribe((value: any) => {
      this.setState(value);
    });
  }

  private _getNodeBlocks(nodeUrl: string) {
    return this.api
      .get(`${nodeUrl}${environment.apiName}${this.endPointName}`)
      .pipe(
        map((nodeBlocks) => {
          return {
            ...this.state,
            blocks: nodeBlocks.data,
            loading: false,
          };
        }),
        startWith({ loading: true }),
        catchError((error) => of({ blocks: [], loading: false }))
      );
  }
}
