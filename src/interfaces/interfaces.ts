export interface Launch {
  id: string;
  provider: string;
}

export interface INews {
  id: number;
  title: string;
  url?: string;
  imageUrl: string;
  newsSite?: string;
  summary: string;
  publishedAt: string | number | Date;
  updatedAt?: Date;
  featured?: boolean;
  launches?: Launch[];
  events?: any[];
}
