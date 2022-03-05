module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/iletisim": { page: "/iletisim" },
      "/hizmetlerimiz": { page: "/hizmetlerimiz" },
      "/uzmanlarimiz": { page: "/uzmanlarimiz" },
    };
  },
};
