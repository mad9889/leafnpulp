export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-xl transition duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
