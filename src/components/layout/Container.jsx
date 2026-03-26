export default function Container({ children, className = "" }) {
  return (
    <div className={`max-w-7xl mx-auto px-10 md:py-30 py-16 ${className}`}>
      {children}
    </div>
  );
}
