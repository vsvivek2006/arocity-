import type { Metadata } from 'next';
import { PrivacyPolicyPage } from '@/components/LegalPages';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Privacy Policy | Aerocity Escort Service Escort Service',
  description: 'Our privacy policy outlines how Aerocity Escort Service protects client confidentiality, data handling practices, and zero-trace privacy guarantees.',
  keywords: [
    ...siteConfig.keywords.slice(0, 10),
    'privacy policy, discreet escort service, client confidentiality',
  ],
  alternates: { canonical: `${siteConfig.url}/privacy-policy` },
  robots: {
    index: false,
    follow: true,
  },
};


export default function Page() {
  return <PrivacyPolicyPage />;
}
