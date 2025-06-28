export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (
  props
) => {
  return (
    <input
      {...props}
      className={`border text-black rounded px-3 py-2 ${props.className} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
    />
  );
};
