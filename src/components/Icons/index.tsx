import React from 'react';
import { Bot, DatabaseZap } from 'lucide-react';

export const PhoneIcon = () => (
  <svg className="skill-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-2 20h-4v-1h4v1zm3.25-3H6.75V4h10.5v14z"/>
    <path d="M12 17h.01" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const AIIcon = () => (
  <Bot className="skill-icon" />
);

export const ArchitectureIcon = () => (
  <DatabaseZap className="skill-icon" />
);