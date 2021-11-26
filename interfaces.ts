export interface Review {
  id: number;
  name: string;
  job: string;
  content: string;
}

export interface Metadata {
  id?: string;
  class?: string;
  style?: {[key:string]:string};
  type?: string;
  value?: string;
}