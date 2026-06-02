import Image from "next/image";
import { Scale } from "lucide-react";
import { Toaster } from "sonner";

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen bg-linear-to-br from-white via-slate-50 to-green-50 lg:grid lg:grid-cols-2">
      {/* Left Side */}
      <div className="flex flex-col px-4 py-6 md:px-8 md:py-10 lg:px-20">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100">
            <Scale className="h-6 w-6 text-green-700" />
          </div>

          <div>
            <p className="uppercase tracking-[0.25em] text-[10px] font-medium text-emerald-700 md:text-xs">
              NOTARY MANAGEMENT
            </p>

            <p className="text-xs text-slate-500 md:text-sm">
              Digital Document & Notary Management Platform
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="flex flex-1 items-center justify-center py-8 lg:py-0">
          <div className="w-full max-w-md lg:max-w-lg">
            {children}
          </div>
        </div>

        <Toaster position="top-right" richColors />
      </div>

      {/* Right Side */}
      <div className="relative hidden overflow-hidden rounded-l-3xl lg:block">
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