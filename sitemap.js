const {SitemapStream, XMLToSitemapItemStream} = require("sitemap");
const nodeFs = require("fs");
const path = require("path");
const codes = require("./src/server/codes.json");

/**
 * generate sitemap.xml
 */
const createSitemap = () => {
    const sitemap = new SitemapStream({hostname: "https://pengfeiw.github.io"});
    const writeStream = nodeFs.createWriteStream(path.join(__dirname, "./public/sitemap.xml"));
    sitemap.pipe(writeStream);

    // home
    sitemap.write({url: "/", changefreq: "monthly", priority: 1});
    // hellolinearalgebra home
    sitemap.write({url: "/minicode", changefreq: "monthly", priority: 0.9});

    for (let i = 0; i < codes.length; i++) {
        // codes
        sitemap.write({url: `/minicode/${codes[i].path}`, changefreq: "weekly", priority: 0.8});
    }

    sitemap.end();
};

module.exports = {createSitemap};
