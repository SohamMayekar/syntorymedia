export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlight?: boolean;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface Project {
  client: string;
  category: string;
  image: string;
}