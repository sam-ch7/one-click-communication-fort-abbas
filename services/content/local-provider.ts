import { localPlans } from "@/content/plans";
import { localSiteSettings } from "@/content/site-settings";
import type { InternetPlan, SiteSettings } from "@/types/content";
export async function getLocalPlans(): Promise<InternetPlan[]> { return [...localPlans].sort((a, b) => a.displayOrder - b.displayOrder) }
export async function getLocalSiteSettings(): Promise<SiteSettings> { return localSiteSettings }
