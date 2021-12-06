export interface Article {
  id: string;
  title: string;
  content: Array<string>;
  // e.g. from 1-10
  priority?: number;
  // e.g. results ready, waiting
  introduceAt?: string;
}
