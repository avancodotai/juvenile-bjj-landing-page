export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">BJJ for Kids at Next School</h3>
          <p className="text-gray-400 mb-4">
            Building confidence, discipline, and fitness one class at a time.
          </p>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Next School BJJ Program. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
