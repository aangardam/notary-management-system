"use client"
import { RootLayout } from "@/shared/components/layout/root-layout"
import { useUserStore } from '@/shared/store/user.store';

export default function Page() {
  const { role } = useUserStore()
  return (
    <RootLayout title="Welcome Page">
      <div className="space-y-6">
        <div className="rounded-3xl bg-white border p-8 shadow-sm">
          <h1 className="text-3xl font-bold text-slate-900">
            Welcome back, {role}
          </h1>

          <p className="mt-2 text-slate-500">
            Welcome to Notary Management System.
            Manage documents and administrative workflows securely.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6">
            <h3 className="font-semibold">
              Account Role
            </h3>

            <p className="mt-2 text-slate-500">
              {role}
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6">
            <h3 className="font-semibold">
              System Status
            </h3>

            <p className="mt-2 text-green-600">
              Online
            </p>
          </div>
        </div>

        <div className="rounded-2xl border bg-white p-6">
          <h3 className="font-semibold mb-2">
            About This System
          </h3>

          <p className="text-slate-500 leading-relaxed">
            This platform is designed to manage notarial documents,
            records, and administrative processes efficiently and securely.
          </p>
        </div>
      </div>
    </RootLayout>
  )
}
