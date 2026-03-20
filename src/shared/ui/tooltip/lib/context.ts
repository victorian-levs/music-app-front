import type { useTooltip } from './use-tooltip';
import { createContext, use } from 'react';

type TooltipContextData = ReturnType<typeof useTooltip>;

export const TooltipContext = createContext<TooltipContextData | null>(null);

export const useTooltipContext = () => {
  const ctx = use(TooltipContext);
  if (!ctx) {
    throw new Error('useTooltipContext must be used within a <Tooltip />');
  }
  return ctx;
};
