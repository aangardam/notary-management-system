"use client";

import { LogIn, ShieldCheck } from "lucide-react";

import { Form } from "@/shared/components/ui/form";
import { Button } from "@/shared/components/ui/button";

import FormInput from "@/shared/components/form/form-input";

import useLogin from "../hooks/use-login";

const FormLogin = () => {
  const { form, handleSubmit, isLoading } = useLogin();

  return (
    <div
      className="
        w-full
        rounded-3xl
        border
        border-slate-200
        bg-white/90
        p-5
        shadow-[0_15px_40px_rgba(0,0,0,0.08)]
        backdrop-blur-md
        md:p-8
      "
    >
      <div className="mb-8">
        <div
          className="
            mb-5
            h-1.5
            w-20
            rounded-full
            bg-linear-to-r
            from-emerald-700
            to-emerald-400
          "
        />

        <h1
          className="
            font-heading
            text-3xl
            font-semibold
            tracking-tight
            text-slate-900
            md:text-4xl
          "
        >
          Welcome back
        </h1>

        <p className="mt-3 text-sm text-slate-500 md:text-base">
          Sign in to continue to your account
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="space-y-5"
        >
          <FormInput
            name="email"
            label="Email Address"
            placeholder="admin@mail.com"
            control={form.control}
          />

          <FormInput
            name="password"
            label="Password"
            type="password"
            isPassword
            placeholder="••••••••"
            control={form.control}
          />

          <Button
            type="submit"
            isLoading={isLoading}
            disabled={isLoading}
            className="
              h-12
              w-full
              rounded-xl
              bg-emerald-700
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:scale-[1.01]
              hover:bg-emerald-800
              hover:shadow-xl
            "
          >
            {!isLoading && <LogIn className="mr-2 h-4 w-4" />}
            Login
          </Button>

          <div
            className="
              flex
              items-center
              justify-center
              gap-2
              pt-2
              text-center
              text-xs
              text-slate-500
              md:text-sm
            "
          >
            <ShieldCheck className="h-4 w-4 shrink-0" />

            <span>
              Secure access to your notary management system
            </span>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default FormLogin;