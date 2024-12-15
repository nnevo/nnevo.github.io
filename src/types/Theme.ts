export interface Theme {
  id: string;
  name: string;
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
  accentColor: string;
  backgroundColor: string;
}

export const sampleThemes: Theme[] = [
  {
    id: 'professional',
    name: 'Professional',
    primaryColor: '#2C3E50',
    secondaryColor: '#34495E',
    fontFamily: 'Arial, sans-serif',
    accentColor: '#3498DB',
    backgroundColor: '#ECF0F1'
  },
  {
    id: 'modern',
    name: 'Modern',
    primaryColor: '#16A085',
    secondaryColor: '#1ABC9C',
    fontFamily: 'Helvetica, sans-serif',
    accentColor: '#E74C3C',
    backgroundColor: '#FFFFFF'
  },
  {
    id: 'classic',
    name: 'Classic',
    primaryColor: '#8E44AD',
    secondaryColor: '#9B59B6',
    fontFamily: 'Georgia, serif',
    accentColor: '#F1C40F',
    backgroundColor: '#F9F9F9'
  }
]; 