interface TextHighlightBoxProps {
  children: React.ReactNode;
  variant?: 'primary' | 'accent' | 'white';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function TextHighlightBox({ 
  children, 
  variant = 'white', 
  size = 'md',
  className = '' 
}: TextHighlightBoxProps) {
  const baseClasses = "rounded-lg shadow-xl font-bold transition-all duration-300 hover:shadow-2xl";
  
  const variantClasses = {
    primary: "bg-blue-600 text-white",
    accent: "bg-orange-500 text-white", 
    white: "bg-white/95 backdrop-blur-sm text-gray-800"
  };
  
  const sizeClasses = {
    sm: "px-3 py-2 text-lg",
    md: "px-4 py-3 text-xl",
    lg: "px-6 py-4 text-2xl"
  };
  
  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  );
}