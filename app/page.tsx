import { redirect } from 'next/navigation';
import { defaultLocale } from '../utils/i18n';

export default function Home() {
  // Redirect to the default locale
  redirect(`/${defaultLocale}`);
  
  // This return statement is never reached, but is required for TypeScript
  return null;
}
