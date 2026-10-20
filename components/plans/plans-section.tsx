import type { InternetPlan } from "@/types/content";
import { PlanCard } from "./plan-card";
export function PlansSection({ plans, whatsappNumber }: { plans: InternetPlan[]; whatsappNumber: string }) {
  return <section id="plans" className="relative py-24 sm:py-32"><div className="mx-auto max-w-7xl px-5 sm:px-8">
    <div className="mx-auto max-w-3xl text-center"><div className="section-kicker justify-center">Simple monthly plans</div><h2 className="section-title mt-5">Pick your speed.<br /><span className="text-white/35">We’ll handle the rest.</span></h2><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">From everyday browsing to a home full of connected devices, there’s a plan that fits.</p></div>
    <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-6">{plans.map((plan, index) => <div key={plan.id} className={index < 2 ? "lg:col-span-3" : "lg:col-span-2"}><PlanCard plan={plan} whatsappNumber={whatsappNumber} /></div>)}</div>
    <p className="mt-7 text-center text-sm text-slate-500">Need help choosing? Message us on WhatsApp and we’ll recommend a plan for your household.</p>
  </div></section>;
}
