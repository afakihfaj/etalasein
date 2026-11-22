export interface NavItem {
  label: string;
  href: string;
}

export interface TrustPoint {
  id: string;
  label: string;
  highlight?: boolean;
}

export interface FeatureItem {
  id: string;
  step: string;
  title: string;
  description: string;
  badgeText: string;
  iconName: 'Zap' | 'MessageSquare' | 'PiggyBank';
  accent: 'green' | 'terracotta';
}

export interface CaseStudySpec {
  title: string;
  subtitle: string;
  icon: 'Cloud' | 'MousePointerClick' | 'Smartphone';
}

export interface CaseStudy {
  id: string;
  category: string;
  location: string;
  title: string;
  description: string;
  quote?: {
    text: string;
    author: string;
  };
  ctaText: string;
  ctaMessage: string;
  specs?: CaseStudySpec[];
  metrics?: {
    label: string;
    value: string;
    color: 'green' | 'terracotta';
  }[];
  previewUrl?: string;
  previewImageUrl?: string;
}

export interface PricingPlan {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  price: string;
  originalPrice: string;
  periodText: string;
  features: string[];
  ctaText: string;
  ctaMessage: string;
  isPopular?: boolean;
  popularBadge?: string;
  variant: 'standard' | 'popular' | 'custom';
}
