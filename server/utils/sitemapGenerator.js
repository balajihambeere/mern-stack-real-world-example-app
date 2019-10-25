const xmlUrl = (items) => {
    let str = ``;
    for (const item of items) {
        for (const lesson of item.lessons) {
            str += `<url>
            <loc>${`https://www.raptei.com/${item.name.toLowerCase()}/${lesson.slug}.html`}</loc>
            <lastmod>${new Date().getFullYear() + `-` + (new Date().getMonth() + 1) + `-` + new Date().getDate()}</lastmod>
            <changefreq>daily</changefreq>
            <priority>0.5</priority>
        </url>`;
        }
    }
    return str;
}

const xmlSiteMap = (item) => {
    return new Promise((resolve, reject) => {
        resolve(`<?xml version="1.0" encoding="UTF-8" ?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
        <url>
        <loc>https://www.raptei.com/</loc>
        <lastmod>${new Date().getFullYear() + `-` + (new Date().getMonth() + 1) + `-` + new Date().getDate()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.5</priority>
        </url>
        ${xmlUrl(item)}
        </urlset>
        `)
    });
}

const htmlUrl = (items) => {
    let str = ``;
    for (const item of items) {
        for (const lesson of item.lessons) {
            str += `<li>
            <a href="${`https://www.raptei.com/${item.name.toLowerCase()}/${lesson.slug}.html`}">${lesson.title}</a>
        </li>`;
        }
    }
    return str;
}
const htmlSiteMap = (item) => {
    return new Promise((resolve, reject) => {
        resolve(`
        <!DOCTYPE html>
        <html>
        <head>
        <title>Sitemap</title>
        </head>
        <body>
        <a href="http://www.raptei.com/">Home</a>
        <ul>
        ${htmlUrl(item)}
        </ul>
        </body>
        </html>
        `)
    });
}
module.exports = {
    xmlSiteMap,
    htmlSiteMap
}