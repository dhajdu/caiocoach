import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn('w-full max-w-[920px] mx-auto px-6 md:px-10', className)}>
      {children}
    </div>
  );
}
