const library = window.CASE_LIBRARY || { cases: [], generatedAt: "", source: "" };
const state = { query: "", company: "", taipowerUnit: "", sort: "newest" };
const $ = (selector) => document.querySelector(selector);

function escapeHtml(value = "") {
  return value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
}

function inline(text) {
  return escapeHtml(text)
    .replace(/&lt;(https?:\/\/[^&]+)&gt;/g, '<a href="$1" target="_blank" rel="noreferrer">$1</a>')
    .replace(/\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/`([^`]+)`/g, "<code>$1</code>");
}

function markdownToHtml(markdown) {
  const lines = markdown.split("\n");
  let html = "", inList = false, inTable = false, tableRows = [];
  const closeList = () => { if (inList) { html += "</ul>"; inList = false; } };
  const flushTable = () => {
    if (!inTable) return;
    const useful = tableRows.filter((row) => !row.every((cell) => /^:?-+:?$/.test(cell.trim())));
    if (useful.length) {
      html += "<table><tbody>" + useful.map((row, index) => `<tr>${row.map((cell) => `<${index === 0 ? "th" : "td"}>${inline(cell.trim())}</${index === 0 ? "th" : "td"}>`).join("")}</tr>`).join("") + "</tbody></table>";
    }
    inTable = false; tableRows = [];
  };
  for (const raw of lines) {
    const line = raw.trim();
    if (/^\|.*\|$/.test(line)) { closeList(); inTable = true; tableRows.push(line.slice(1, -1).split("|")); continue; }
    flushTable();
    if (!line || line === "---") { closeList(); continue; }
    if (line.startsWith("## ")) { closeList(); html += `<h2>${inline(line.slice(3))}</h2>`; continue; }
    if (line.startsWith("### ")) { closeList(); html += `<h3>${inline(line.slice(4))}</h3>`; continue; }
    if (/^[-*]\s+/.test(line)) { if (!inList) { html += "<ul>"; inList = true; } html += `<li>${inline(line.replace(/^[-*]\s+/, ""))}</li>`; continue; }
    if (/^\d+\.\s+/.test(line)) { if (!inList) { html += "<ul>"; inList = true; } html += `<li>${inline(line.replace(/^\d+\.\s+/, ""))}</li>`; continue; }
    closeList(); html += `<p>${inline(line)}</p>`;
  }
  closeList(); flushTable(); return html;
}

function renderFilters() {
  const companies = library.companyGroups || [...new Set(library.cases.map((item) => item.company).filter(Boolean))];
  $("#company-filter").insertAdjacentHTML("beforeend", companies.map((value) => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`).join(""));
  const taipowerUnits = library.taipowerUnits || [...new Set(library.cases.map((item) => item.taipowerUnit).filter(Boolean))];
  $("#taipower-filter").insertAdjacentHTML("beforeend", taipowerUnits.map((value) => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`).join(""));
}

function filteredCases() {
  const query = state.query.toLocaleLowerCase("zh-Hant");
  const items = library.cases.filter((item) => {
    const haystack = `${item.title} ${item.id} ${item.company} ${item.taipowerUnit} ${item.domain} ${item.maturity} ${item.summary} ${item.markdown}`.toLocaleLowerCase("zh-Hant");
    return (!query || haystack.includes(query)) && (!state.company || item.company === state.company) && (!state.taipowerUnit || item.taipowerUnit === state.taipowerUnit);
  });
  return items.sort((a, b) => state.sort === "oldest" ? a.number - b.number : state.sort === "company" ? (a.company || "").localeCompare(b.company || "", "zh-Hant") : b.number - a.number);
}

function render() {
  const items = filteredCases();
  $("#result-count").textContent = items.length;
  $("#query-note").textContent = state.query ? `搜尋：${state.query}` : "";
  $("#case-list").innerHTML = items.map((item) => `<article class="case-card" tabindex="0" data-number="${item.number}">
    <span class="case-card__number">CASE ${String(item.number).padStart(3, "0")} ${item.id ? `· ${escapeHtml(item.id)}` : ""}</span>
    <h3>${escapeHtml(item.title.replace(/^案例\s*\d+｜?\s*/, ""))}</h3>
    <p>${escapeHtml(item.summary || "點選查看完整案例內容。")}</p>
    <div class="card-footer">${item.company ? `<span class="tag">${escapeHtml(item.company)}</span>` : ""}${item.taipowerUnit ? `<span class="tag tag--stage">${escapeHtml(item.taipowerUnit)}</span>` : ""}</div>
  </article>`).join("");
  $("#empty-state").hidden = items.length > 0;
}

function openCase(number) {
  const item = library.cases.find((entry) => entry.number === Number(number));
  if (!item) return;
  $("#case-detail").innerHTML = markdownToHtml(item.markdown);
  $("#case-dialog").showModal();
  history.replaceState(null, "", `#case-${item.number}`);
}

$("#total-count").textContent = library.cases.length;
$("#company-count").textContent = (library.companyGroups || []).length || new Set(library.cases.map((item) => item.company).filter(Boolean)).size;
renderFilters(); render();

$("#search-input").addEventListener("input", (event) => { state.query = event.target.value.trim(); render(); });
$("#company-filter").addEventListener("change", (event) => { state.company = event.target.value; render(); });
$("#taipower-filter").addEventListener("change", (event) => { state.taipowerUnit = event.target.value; render(); });
$("#sort-filter").addEventListener("change", (event) => { state.sort = event.target.value; render(); });
$("#reset-button").addEventListener("click", () => { Object.assign(state, { query: "", company: "", taipowerUnit: "" }); $("#search-input").value = ""; $("#company-filter").value = ""; $("#taipower-filter").value = ""; render(); });
$("#case-list").addEventListener("click", (event) => { const card = event.target.closest("[data-number]"); if (card) openCase(card.dataset.number); });
$("#case-list").addEventListener("keydown", (event) => { if ((event.key === "Enter" || event.key === " ") && event.target.matches("[data-number]")) openCase(event.target.dataset.number); });
$("#dialog-close").addEventListener("click", () => $("#case-dialog").close());
$("#case-dialog").addEventListener("click", (event) => { if (event.target === $("#case-dialog")) $("#case-dialog").close(); });
$("#case-dialog").addEventListener("close", () => history.replaceState(null, "", location.pathname));
document.addEventListener("keydown", (event) => { if (event.key === "/" && !/input|select|textarea/i.test(document.activeElement.tagName)) { event.preventDefault(); $("#search-input").focus(); } });

const deepLink = location.hash.match(/^#case-(\d+)$/);
if (deepLink) openCase(deepLink[1]);
