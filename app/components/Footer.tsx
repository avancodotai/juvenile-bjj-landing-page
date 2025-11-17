import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <Image
              src="/westbay.png"
              alt="Westbay Brazilian Jiu-Jitsu"
              width={320}
              height={92}
              className="h-16 w-auto"
            />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            Westbay Brazilian Jiu-Jitsu
          </h3>
          <p className="text-gray-600 mb-4">
            Building confidence, discipline, and resilience — one class at a time.
          </p>
          <p className="text-sm text-gray-500 mb-2">
            Training locations across Mumbai
          </p>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Westbay Brazilian Jiu-Jitsu Academy. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
