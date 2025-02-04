export const Card: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ children, className }) => {
  return (
    <div className={`bg-white shadow rounded-lg p-4 ${className}`}>
      {children}
    </div>
  );
};

export const CardContent: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};
