import Image from "next/image";
import { Scale } from "lucide-react";
import { Toaster } from "sonner";

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2 bg-linear-to-br from-white via-slate-50 to-green-50">
      {/* Left Side */}
      <div className="flex flex-col px-8 lg:px-20 py-10">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
            <Scale className="h-6 w-6 text-green-700" />
          </div>

          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-emerald-700">
              NOTARY MANAGEMENT
            </p>

            <p className="text-sm text-slate-500">
              Digital Document & Notary Management Platform
            </p>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xl">{children}</div>
        </div>

        <Toaster position="top-right" richColors />
      </div>

      {/* Right Side */}
      <div className="relative h-full overflow-hidden rounded-3xl">
        <Image
          src="/image2.png"
          alt="Notary Illustration"
          fill
          priority
          className="object-cover scale-105"
        />

        <div className="absolute inset-0 bg-emerald-950/20" />

        <div className="absolute inset-0 bg-linear-to-r from-black/20 to-transparent" />
      </div>
    </div>
  );
}