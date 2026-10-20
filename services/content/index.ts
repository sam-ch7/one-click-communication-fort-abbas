import { getContentfulPlans, getContentfulSiteSettings } from "./contentful-provider";
import { getLocalPlans, getLocalSiteSettings } from "./local-provider";
const useContentful = process.env.CONTENT_SOURCE === "contentful";
export const getPlans = useContentful ? getContentfulPlans : getLocalPlans;
export const getSiteSettings = useContentful ? getContentfulSiteSettings : getLocalSiteSettings;
