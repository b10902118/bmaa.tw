const MoreButton: React.FC<{
  text: string;
  href: string;
}> = ({ text, href }) => {
  return (
    <div className="text-center">
      <a
        href={href}
        className="inline-block border border-[#6B705C] text-black px-12 py-4 rounded-full font-bold hover:bg-[#6B705C] hover:text-white transition-all transform hover:scale-105"
      >
        {text}
      </a>
    </div>
  );
};

export default MoreButton;
