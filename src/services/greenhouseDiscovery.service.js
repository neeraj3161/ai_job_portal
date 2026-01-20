import axios from "axios";
import * as cheerio from "cheerio";

export async function discoverFromGreenhouse(companySlug) {
  const url = `https://boards.greenhouse.io/${companySlug}`;
  const { data } = await axios.get(url);

  const $ = cheerio.load(data);
  const jobs = [];

  $("section.level-0 a").each((_, el) => {
    jobs.push({
      title: $(el).text().trim(),
      company: companySlug,
      location: $(el).next().text().trim() || "Unknown",
      applyLink: `https://boards.greenhouse.io${$(el).attr("href")}`,
      source: "Greenhouse"
    });
  });

  return jobs;
}
