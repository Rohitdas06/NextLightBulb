export default function Footer() {
    return (
      <footer className="border-t bg-gray-50">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-gray-600 md:flex-row">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-black">Rohit Das</span>. All
            rights reserved.
          </p>
  
          <p>
            Built with <span className="text-red-500">❤️</span> using Next.js &
            Tailwind CSS
          </p>
        </div>
      </footer>
    );
  }