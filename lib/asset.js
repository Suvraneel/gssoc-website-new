// URL of a file in public/, including the base path the site is deployed under
// (e.g. "/gssoc-website-new" on a GitHub Pages project site).
export const asset = (path) => `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`;
