export interface Review {
  name: string;
  job: string;
  content: string;
  avatar: any;
}

export interface Metadata {
  id?: string;
  class?: string;
  style?: {[key:string]:string};
  type?: string;
  value?: string;
  src?: string;
  alt?: string;
}