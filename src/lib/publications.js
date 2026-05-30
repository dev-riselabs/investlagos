// Small helpers shared between the Publications list page and the
// Publication detail page so both stay in sync when the backend is
// unreachable in local/preview environments.

/**
 * Convert a string into a URL-safe slug. Mirrors Laravel's Str::slug
 * closely enough for the static fallback rows to resolve correctly.
 */
export function slugify(text) {
  return String(text || '')
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// Generic body shown for fallback publications so the detail view
// always renders something meaningful even without a live CMS.
export const FALLBACK_PUBLICATION_CONTENT = `Lagos State continues to position itself as Africa's premier investment destination, with a vibrant private sector, deepening capital markets and a reform-driven government committed to predictable, investor-friendly policy.

This publication brings together verified data, analysis and case material to support informed decision-making by investors, policymakers and partners working with the State.

It examines the sectoral pipeline, regulatory landscape and the structural reforms underway across Lagos — from infrastructure and logistics to digital services, manufacturing, agribusiness, real estate and the creative economy — and outlines practical entry points for participation.

Readers will find:

• A concise overview of macroeconomic context and demographic fundamentals.
• Sector deep-dives highlighting market size, demand drivers and active opportunities.
• A snapshot of incentives, fiscal and non-fiscal supports available to qualifying investors.
• Notes on the institutional framework, including the role of MCCTI and partner agencies.
• Selected case studies illustrating successful deal structures, partnerships and outcomes.

For the most current data, deal flow and partnership opportunities, please contact the Invest Lagos secretariat or visit the Investment Information Hub.`
