export interface Recipe {
  id: string;
  title: string;
  image: string;
  cuisine: string;
  category: string;
  description: string;
  tags: string[];
  rating: number;
  ingredients: string[];
  instructions: string[];
  reviews: Review[];
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}