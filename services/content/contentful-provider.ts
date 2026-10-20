import type { InternetPlan, SiteSettings } from "@/types/content";
type GraphQLResponse<T> = { data?: T; errors?: Array<{ message: string }> };
async function contentfulQuery<T>(query: string): Promise<T> {
  const space = process.env.CONTENTFUL_SPACE_ID;
  const environment = process.env.CONTENTFUL_ENVIRONMENT ?? "master";
  const token = process.env.CONTENTFUL_DELIVERY_TOKEN;
  if (!space || !token) throw new Error("Contentful is selected but its credentials are missing.");
  const response = await fetch(`https://graphql.contentful.com/content/v1/spaces/${space}/environments/${environment}`, { method: "POST", headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }, body: JSON.stringify({ query }), next: { revalidate: 300 } });
  if (!response.ok) throw new Error(`Contentful request failed with ${response.status}.`);
  const payload = (await response.json()) as GraphQLResponse<T>;
  if (payload.errors?.length || !payload.data) throw new Error(payload.errors?.[0]?.message ?? "Contentful returned no data.");
  return payload.data;
}
export async function getContentfulPlans(): Promise<InternetPlan[]> {
  const data = await contentfulQuery<{ internetPlanCollection: { items: InternetPlan[] } }>(`query Plans { internetPlanCollection(order: displayOrder_ASC) { items { id speed speedFormula price note badge features featured displayOrder } } }`);
  return data.internetPlanCollection.items;
}
export async function getContentfulSiteSettings(): Promise<SiteSettings> {
  const data = await contentfulQuery<{ siteSettingsCollection: { items: SiteSettings[] } }>(`query Settings { siteSettingsCollection(limit: 1) { items { whatsappNumber displayPhone businessHours supportHours mapUrl generalWhatsAppMessage } } }`);
  const settings = data.siteSettingsCollection.items[0];
  if (!settings) throw new Error("No Site Settings entry was found in Contentful.");
  return settings;
}
