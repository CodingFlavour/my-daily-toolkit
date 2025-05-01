/** @type {import('next').NextConfig} */
import codingFlavourStylesConfig from "@coding-flavour/common/next.config.js";

const nextConfig = {
  ...codingFlavourStylesConfig,
  transpilePackages: ["@coding-flavour/common", "@coding-flavour/icons"],
};

export default nextConfig;