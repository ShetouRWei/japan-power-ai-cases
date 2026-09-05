import { readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const sourcePath = resolve(here, "..", "日本電力公司AI案例庫.md");
const taipowerMappingPath = resolve(here, "..", "台電8加1系統事業部案例對照.md");
const outputPath = resolve(here, "cases-data.js");
const siteVersion = "v1.0";
const markdown = (await readFile(sourcePath, "utf8")).replace(/\r\n/g, "\n");
const taipowerMappingMarkdown = (await readFile(taipowerMappingPath, "utf8")).replace(/\r\n/g, "\n");

const companyGroups = [
  "北海道電力集團",
  "東北電力集團",
  "東京電力集團",
  "北陸電力集團",
  "中部電力集團",
  "關西電力集團",
  "中國電力集團",
  "四國電力集團",
  "九州電力集團",
  "沖繩電力集團",
  "JERA集團",
  "J-POWER集團",
];

const taipowerUnits = [
  "數位發展系統",
  "財會資源系統",
  "營建工程系統",
  "策略行政系統",
  "水火力發電事業部",
  "核能發電事業部",
  "輸供電事業部",
  "配售電事業部",
  "綜合研究所",
];

const taipowerMapping = new Map();
for (const line of taipowerMappingMarkdown.split("\n")) {
  const cells = line.split("|").slice(1, -1).map((cell) => cell.trim());
  if (/^\d{3}$/.test(cells[0] || "") && /^JP-/.test(cells[1] || "")) {
    taipowerMapping.set(cells[1], cells[3] || "");
  }
}

const sections = markdown
  .split(/(?=^## 案例\s*\d+[^\n]*$)/gm)
  .filter((section) => /^## 案例\s*\d+/m.test(section));

function firstMatch(text, patterns) {
  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match?.[1]) return match[1].replace(/\*\*/g, "").trim();
  }
  return "";
}

function stripMarkdown(value) {
  return value
    .replace(/<https?:\/\/[^>]+>/g, "")
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1")
    .replace(/[`*_#|]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function canonicalCompany(value) {
  const aliases = [
    [/北海道電力|ほくでん/i, "北海道電力集團"],
    [/東北電力/i, "東北電力集團"],
    [/東京電力|TEPCO/i, "東京電力集團"],
    [/北陸電力|北電(?!道)/i, "北陸電力集團"],
    [/中部電力|CHUBU/i, "中部電力集團"],
    [/関西電力|關西電力|KEPCO/i, "關西電力集團"],
    [/中国電力|中國電力|ENERGIA/i, "中國電力集團"],
    [/四国電力|四國電力|YONDEN/i, "四國電力集團"],
    [/九州電力|KYUDEN/i, "九州電力集團"],
    [/沖縄電力|沖繩電力/i, "沖繩電力集團"],
    [/\bJERA\b/i, "JERA集團"],
    [/J-?POWER|電源開発|電源開發/i, "J-POWER集團"],
  ];
  return aliases.find(([pattern]) => pattern.test(value))?.[1] || "";
}

const cases = sections.map((section) => {
  const heading = section.match(/^##\s+(案例\s*(\d+)｜?[^\n]*)/m);
  const number = Number(heading?.[2] || 0);
  const title = stripMarkdown(heading?.[1] || `案例 ${number}`);
  const id = firstMatch(section, [
    /\*\*案例 ID：\*\*\s*([^\n]+)/,
    /\|\s*案例編號\s*\|\s*([^|\n]+)/,
    /\|\s*案例 ID\s*\|\s*([^|\n]+)/,
  ]);
  const companyDetail = firstMatch(section, [
    /\*\*(?:電力公司|公司)：\*\*\s*([^\n]+)/,
    /\|\s*(?:電力公司|公司|電力集團|集團／公司|電力集團／公司|電力公司／集團)\s*\|\s*([^|\n]+)/,
  ]);
  const company = canonicalCompany(stripMarkdown(companyDetail));
  if (!company) throw new Error(`無法歸類案例 ${number} 的公司：${companyDetail}`);
  const domain = firstMatch(section, [
    /\*\*應用領域：\*\*\s*([^\n]+)/,
    /\|\s*應用領域\s*\|\s*([^|\n]+)/,
  ]);
  const maturity = firstMatch(section, [
    /\*\*成熟度判定：\*\*\s*([^\n]+)/,
    /\|\s*(?:成熟度判定|成熟度|導入階段)\s*\|\s*([^|\n]+)/,
  ]);
  const cleanId = stripMarkdown(id);
  const taipowerUnit = taipowerMapping.get(cleanId) || "";
  if (!taipowerUnit) throw new Error(`案例 ${number} (${cleanId}) 缺少台電系統／事業部對照`);
  if (!taipowerUnits.includes(taipowerUnit)) throw new Error(`案例 ${number} 的台電系統／事業部無效：${taipowerUnit}`);
  const summaryBlock = section.match(/###\s*案例摘要\s*\n+([\s\S]*?)(?=\n###\s|$)/);
  const summary = stripMarkdown(summaryBlock?.[1] || section.split("\n").slice(1, 8).join(" ")).slice(0, 240);

  return {
    number,
    title,
    id: cleanId,
    company,
    companyDetail: stripMarkdown(companyDetail),
    domain: stripMarkdown(domain),
    maturity: stripMarkdown(maturity),
    taipowerUnit,
    summary,
    markdown: section.trim(),
  };
});

const payload = `window.CASE_LIBRARY = ${JSON.stringify({
  version: siteVersion,
  generatedAt: new Date().toISOString(),
  source: "日本電力公司AI案例庫.md",
  companyGroups,
  taipowerUnits,
  cases,
})};\n`;

await writeFile(outputPath, payload, "utf8");
console.log(`已產生 ${cases.length} 個案例：${outputPath}`);
