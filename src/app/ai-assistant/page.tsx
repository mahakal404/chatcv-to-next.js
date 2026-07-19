import type { Metadata } from 'next';
import AIAssistantPage from '../../views/AIAssistantPage';

export const metadata: Metadata = {
  title: 'AI Career Assistant',
  description:
    'Your personal AI career coach is waking up. ChatCV\'s AI assistant will provide real-time resume suggestions and bullet point improvements.',
};

export default function AIAssistantRoute() {
  return <AIAssistantPage />;
}
