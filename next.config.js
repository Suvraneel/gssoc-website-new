// Set by the Pages workflow: "" for a custom domain, "/<repo>" for a project site.
const basePath = process.env.NEXT_BASE_PATH || "";

module.exports = {
  // Static HTML export to ./out (replaces the removed `next export` command).
  output: "export",
  images: {
    loader: "akamai",
    path: "/",
    // domains: ["user-images.githubusercontent.com"],
  },
  compiler: {
    styledComponents: true,
  },
  basePath,
  env: {
    // Prefix for files in public/ (see lib/asset.js).
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  assetPrefix: "",
};
