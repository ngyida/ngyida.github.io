import {
  getCollection,
  type CollectionEntry,
  type CollectionKey,
} from "astro:content";

type PageSlug = "about" | "career" | "projects" | "contact";

export function toPageHref(slug: PageSlug) {
  return slug === "about" ? "/" : `/${slug}/`;
}

export function toCollectionHref(collection: "career" | "projects", slug: string) {
  return `/${collection}/${slug}/`;
}

function normalizeEntryId(id: string) {
  return id.replace(/\\/g, "/").split("/").pop()?.replace(/\.(md|mdx)$/, "") ?? id;
}

export function toEntrySlug(entry: CollectionEntry<"career"> | CollectionEntry<"projects">) {
  return normalizeEntryId(entry.id);
}

export async function getNavItems() {
  const entries = await getCollection("pages");

  return entries
    .sort((left, right) => left.data.order - right.data.order)
    .map((entry) => ({
      slug: normalizeEntryId(entry.id) as PageSlug,
      label: entry.data.navLabel,
      href: toPageHref(normalizeEntryId(entry.id) as PageSlug),
    }));
}

export async function getPageEntry(slug: PageSlug) {
  const entry = (await getCollection("pages")).find(
    (candidate) => normalizeEntryId(candidate.id) === slug
  );

  if (!entry) {
    throw new Error(`Missing page entry for "${slug}".`);
  }

  return entry;
}

function sortEntries<T extends CollectionKey>(entries: CollectionEntry<T>[]) {
  return entries.sort((left, right) => left.data.sortOrder - right.data.sortOrder);
}

export async function getCareerEntries() {
  return sortEntries(
    await getCollection("career", ({ data }) => !data.draft)
  );
}

export async function getProjectEntries() {
  return sortEntries(
    await getCollection("projects", ({ data }) => !data.draft)
  );
}

export function buildCareerMeta(entry: CollectionEntry<"career">) {
  return [entry.data.organization, entry.data.period, entry.data.location]
    .filter(Boolean)
    .join(" / ");
}

export function buildProjectMeta(entry: CollectionEntry<"projects">) {
  const stackLabel = entry.data.stack?.join(", ");

  return [entry.data.period, stackLabel].filter(Boolean).join(" / ");
}

export function buildCareerLinks(entry: CollectionEntry<"career">) {
  return entry.data.links ?? [];
}

export function buildProjectLinks(entry: CollectionEntry<"projects">) {
  const links = [];

  if (entry.data.repoUrl) {
    links.push({ label: "repo", url: entry.data.repoUrl });
  }

  if (entry.data.demoUrl) {
    links.push({ label: "demo", url: entry.data.demoUrl });
  }

  return links;
}

export function getProjectGroup(entry: CollectionEntry<"projects">) {
  const normalizedId = entry.id.replace(/\\/g, "/").toLowerCase();
  return normalizedId.includes("not-cool/") ? "not-cool" : "cool";
}
