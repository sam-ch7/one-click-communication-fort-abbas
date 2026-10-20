import { Check, MessageCircle } from "lucide-react";
import type { InternetPlan } from "@/types/content";

export function PlanCard({ plan, whatsappNumber }: { plan: InternetPlan; whatsappNumber: string }) {
  const message = `Assalam-o-Alaikum, I would like to get the ${plan.speed} plan for Rs. ${plan.price.toLocaleString("en-PK")}. Please check availability in my area.`;
  const href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  return (
    <article className={`plan-card ${plan.featured ? "plan-card-featured" : ""}`}>
      {plan.badge && <span className="plan-badge">{plan.badge}</span>}
      <div className="flex items-start justify-between gap-5">
        <div>{plan.speedFormula && <p className="mb-1 text-sm font-bold tracking-wide text-cyan-300">{plan.speedFormula}</p>}<h3 className="text-4xl font-black tracking-[-0.05em] sm:text-5xl">{plan.speed}</h3></div>
        <div className="text-right"><p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Monthly</p><p className="mt-1 text-2xl font-black">Rs. {plan.price.toLocaleString("en-PK")}</p></div>
      </div>
      {plan.note && <p className="mt-5 rounded-xl border border-cyan-300/10 bg-cyan-300/[0.045] px-4 py-3 text-sm font-semibold text-cyan-100/75">{plan.note}</p>}
      <ul className="mt-6 space-y-3 text-sm text-slate-400">{plan.features.map((feature) => <li key={feature} className="flex items-center gap-3"><span className="check-dot"><Check size={12} strokeWidth={3} /></span>{feature}</li>)}</ul>
      <a className={`button mt-8 w-full justify-center ${plan.featured ? "button-orange" : "button-ghost"}`} href={href} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Choose this plan</a>
    </article>
  );
}
