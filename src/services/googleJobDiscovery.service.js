import axios from "axios";
import * as cheerio from "cheerio";

/**
 * Build a Google search URL
 */
function buildGoogleSearchUrl({ role, location }) {
  const query = `${role} ${location} visa sponsorship jobs`;
  return `https://www.google.com/search?q=${encodeURIComponent(query)}`;
}

/**
 * Discover jobs using Google Search
 */
export async function discoverJobsFromGoogle({ role, location }) {
  const url = buildGoogleSearchUrl({ role, location });

  const response = await axios.get(url, {
    headers: {
      // IMPORTANT: realistic user agent
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36"
    }
  });

  const $ = cheerio.load(response.data);
  const jobs = [];

  $("div.g").each((_, element) => {
    const title = $(element).find("h3").text();
    const link = $(element).find("a").attr("href");
    const snippet = $(element).find(".VwiC3b").text();

    if (!title || !link) return;

    // Filter out non-job links
    if (
      link.includes("jobs") ||
      link.includes("careers") ||
      link.includes("greenhouse") ||
      link.includes("lever")
    ) {
      jobs.push({
        title,
        company: extractCompanyName(title),
        location,
        applyLink: link,
        source: "Google Jobs"
      });
    }
  });

  return jobs.slice(0, 10); // limit results
}

function extractCompanyName(title) {
  // Simple heuristic (can improve later)
  return title.split("-")[1]?.trim() || "Unknown Company";
}
