export default function Highlight({ children }) {
  return (
    <span
      className="bg-clip-text text-transparent bg-linear-to-br from-eco-green to-eco-green-hover 
        drop-shadow-[0_0_15px_rgba(148,222,29,0.5)] font-black"
    >
      {children}
    </span>
  );
}
