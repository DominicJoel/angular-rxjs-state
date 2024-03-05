export interface Block {
  id: string;
  type: string;
  attributes: Attributes;
}

interface Attributes {
  index: number;
  timestamp: number;
  data: string;
  previousHash: string;
  hash: string;
}
