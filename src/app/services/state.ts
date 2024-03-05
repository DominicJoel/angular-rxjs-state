import { Node } from 'src/models/node.model';

export class State {
  list: Node[] = [
    {
      url: 'https://thawing-springs-53971.herokuapp.com',
      online: false,
      name: 'Node 1',
      loading: true
    },
    {
      url: 'https://secret-lowlands-62331.herokuapp.com',
      online: false,
      name: 'Node 2',
      loading: true
    },
    {
      url: 'https://calm-anchorage-82141.herokuapp.com',
      online: false,
      name: 'Node 3',
      loading: true
    },
    {
      url: 'http://localhost:3002',
      online: false,
      name: 'Node 4',
      loading: true
    }
  ];
}
