"use client"
import { RootLayout } from "@/shared/components/layout/root-layout"
import { useUserStore } from '@/shared/store/user.store';
import { FileText, Users } from "lucide-react";

export default function Page() {
  const { role } = useUserStore()
  return (
    <RootLayout title="Welcome Page">
      <div className="space-y-6">
        {/* Welcome */}
        <div className="rounded-3xl bg-white border py-5 px-8 shadow-sm">
          <h1 className="text-3xl font-bold text-slate-900">
            Welcome back, {role} 👋
          </h1>

          <p className="mt-2 text-slate-500">
            Manage documents, schedules, and notarial records efficiently.
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          <div className="rounded-2xl border bg-blue-50 p-6 ">
            <div className="flex items-center space-x-2">
              <FileText className="h-6 w-6 text-blue-500" />
              <p className="text-sm text-blue-500">Documents</p>
            </div>

            <h3 className="mt-2 text-3xl font-bold">124</h3>
          </div>

          <div className="rounded-2xl border bg-amber-50 p-6">
            <div className="flex items-center space-x-2">
              <FileText className="h-6 w-6 text-amber-500" />
              <p className="text-sm text-amber-500">Pending Review</p>
            </div>
            <h3 className="mt-2 text-3xl font-bold">12</h3>
          </div>

          <div className="rounded-2xl border bg-purple-50 p-6">
            <div className="flex items-center space-x-2">
              <Users className="h-6 w-6 text-purple-500" />
              <p className="text-sm text-purple-500">Clients</p>
            </div>
            <h3 className="mt-2 text-3xl font-bold">89</h3>
          </div>

          <div className="rounded-2xl border bg-green-50 p-6">
            <div className="flex items-center space-x-2">
              <FileText className="h-6 w-6 text-green-500" />
              <p className="text-sm text-green-500">Today's Schedule</p>
            </div>
            <h3 className="mt-2 text-3xl font-bold">5</h3>
          </div>
        </div>

      </div>
    </RootLayout>
  )
}
