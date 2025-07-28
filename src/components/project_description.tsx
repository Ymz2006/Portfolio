export default function Description({ children }: { children: React.ReactNode }) {
    return (
      <div className="w-[900px] h-[400px] rounded-2xl bg-gray-200 border-2 border-black mt-[50px] p-4">
        {children}
      </div>
    );
  }