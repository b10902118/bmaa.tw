const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#F9F5F2] font-serif text-[#64686d] selection:bg-[#6B705C] selection:text-white min-h-screen">
      {children}
    </div>
  );
};
export default PageContainer;
