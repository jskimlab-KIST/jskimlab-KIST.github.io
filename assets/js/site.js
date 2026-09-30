function esc(value) {
  return String(value == null ? "" : value)
    .replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;").replace(/'/g,"&#039;");
}

function sectionEnabled(name) {
  return !(LAB.sections && LAB.sections[name] === false);
}

function labName() { return LAB.name || "Lab"; }
function labTagline() { return LAB.tagline || ""; }

function renderNav(basePath) {
  const el = document.getElementById("site-nav");
  if (!el) return;
  const links = ['<a href="' + basePath + 'index.html">Home</a>'];
  if (sectionEnabled("research")) links.push('<a href="' + basePath + 'index.html#research">Research</a>');
  if (sectionEnabled("people")) links.push('<a href="' + basePath + 'people/index.html">People</a>');
  if (sectionEnabled("publications")) links.push('<a href="' + basePath + 'publications/index.html">Publications</a>');
  if (sectionEnabled("news")) links.push('<a href="' + basePath + 'news/index.html">News</a>');
  if (sectionEnabled("join")) links.push('<a href="' + basePath + 'join/index.html">Join Us</a>');
  el.innerHTML = '<header class="wrap nav"><a class="brand" href="' + basePath + 'index.html">' + esc(labName()) + '</a><nav class="links">' + links.join("") + '</nav><span class="menu">MENU</span></header>';
}

function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;
  el.innerHTML = '<footer class="wrap"><span>© 2026 ' + esc(labName()) + '</span><span>' + esc(labTagline()) + '</span></footer>';
}

function renderHome() {
  document.title = labName();
  const hero = LAB.hero || {};
  const heroTitle = document.getElementById("hero-title");
  const heroDesc = document.getElementById("hero-description");
  const heroKicker = document.getElementById("hero-kicker");
  if (heroKicker) heroKicker.textContent = hero.kicker || "";
  if (heroTitle) heroTitle.textContent = hero.title || labTagline();
  if (heroDesc) heroDesc.textContent = hero.description || "";
  const heroImage = document.getElementById("hero-image");
  if (heroImage && hero.image) heroImage.src = hero.image;

  document.querySelectorAll("[data-section]").forEach(function(section){
    if (!sectionEnabled(section.getAttribute("data-section"))) section.remove();
  });

  const rc = document.getElementById("research-cards");
  if (rc && sectionEnabled("research")) rc.innerHTML = LAB.research.map(function(r){
    return '<a class="card" href="research/profile.html?research=' + encodeURIComponent(r.slug) + '"><div class="cardimg"><img src="' + esc(r.image) + '" alt="' + esc(r.title) + '"></div><div class="cardbody"><span class="num">' + esc(r.num) + ' / </span><span class="eyebrow">' + esc(r.eyebrow) + '</span><h3>' + esc(r.title) + '</h3><p>' + esc(r.summary) + '</p><span class="more">Explore research</span></div></a>';
  }).join("");

  const pl = document.getElementById("publication-list");
  if (pl && sectionEnabled("publications")) pl.innerHTML = LAB.publications.map(function(p){
    return '<div class="pub"><div class="muted">' + esc(p.year) + '</div><div><h3>' + esc(p.title) + '</h3><small>' + esc(p.venue) + '</small></div></div>';
  }).join("");

  const ppl = document.getElementById("people-list");
  if (ppl && sectionEnabled("people")) ppl.innerHTML = LAB.people.map(function(p){
    return '<a class="person person-link" href="people/profile.html?person=' + encodeURIComponent(p.slug) + '"><div class="avatar"><img src="' + esc(p.photo || "") + '" alt="' + esc(p.name) + '"></div><b>' + esc(p.name) + '</b><div class="muted">' + esc(p.role) + '</div><span class="more">View profile</span></a>';
  }).join("");

  const joinTitle = document.getElementById("join-title");
  const joinDesc = document.getElementById("join-description");
  if (joinTitle) joinTitle.textContent = LAB.join.title;
  if (joinDesc) joinDesc.textContent = LAB.join.description;
}

function renderPeoplePage() {
  document.title = "People · " + labName();
  if (!sectionEnabled("people")) { document.body.innerHTML = '<div class="wrap page"><h1>People is currently hidden.</h1><p class="muted">Enable <code>sections.people</code> in content.js.</p></div>'; return; }
  const list = document.getElementById("people-page-list");
  if (list) list.innerHTML = LAB.people.map(function(p){ return '<a class="person person-link" href="profile.html?person=' + encodeURIComponent(p.slug) + '"><div class="avatar"><img src="../' + esc(p.photo || "") + '" alt="' + esc(p.name) + '"></div><b>' + esc(p.name) + '</b><div class="muted">' + esc(p.role) + '</div><span class="more">View profile</span></a>'; }).join("");
  const desc = document.getElementById("people-page-description");
  if (desc) desc.textContent = labTagline();
}

function renderPublicationsPage() {
  document.title = "Publications · " + labName();
  if (!sectionEnabled("publications")) { document.body.innerHTML = '<div class="wrap page"><h1>Publications is currently hidden.</h1><p class="muted">Enable <code>sections.publications</code> in content.js.</p></div>'; return; }
  const list = document.getElementById("publications-page-list");
  if (list) list.innerHTML = LAB.publications.map(function(p){ return '<div class="pub"><div class="muted">' + esc(p.year) + '</div><div><h3>' + esc(p.title) + '</h3><small>' + esc(p.venue) + '</small></div></div>'; }).join("");
}

function renderNewsPage() {
  document.title = "News · " + labName();
  if (!sectionEnabled("news")) { document.body.innerHTML = '<div class="wrap page"><h1>News is currently hidden.</h1><p class="muted">Enable <code>sections.news</code> in content.js.</p></div>'; return; }
  const list = document.getElementById("news-page-list");
  if (list) list.innerHTML = LAB.news.map(function(n){ return '<div class="pub"><div class="muted">' + esc(n.date) + '</div><div><h3>' + esc(n.title) + '</h3></div></div>'; }).join("");
}

function renderJoinPage() {
  document.title = "Join Us · " + labName();
  if (!sectionEnabled("join")) { document.body.innerHTML = '<div class="wrap page"><h1>Join Us is currently hidden.</h1><p class="muted">Enable <code>sections.join</code> in content.js.</p></div>'; return; }
  const j = LAB.join || {};
  const title = document.getElementById("join-page-title");
  const desc = document.getElementById("join-page-description");
  const positions = document.getElementById("join-positions");
  const contact = document.getElementById("join-contact");
  if (title) title.textContent = j.title || "Join Our Lab";
  if (desc) desc.textContent = j.pageDescription || j.description || "";
  if (positions) positions.innerHTML = (j.positions || []).map(function(x){ return '<div class="project">' + esc(x) + '</div>'; }).join("");
  if (contact) contact.innerHTML = '<p class="muted">' + esc(j.contactText || "Contact us for opportunities.") + '</p><a class="btn primary" href="mailto:' + esc(j.email || LAB.email || "") + '">' + esc(j.email || LAB.email || "Contact us") + ' ↗</a>';
}

function renderResearchIndex() {
  document.title = "Research · " + labName();
  if (!sectionEnabled("research")) { document.body.innerHTML = '<div class="wrap page"><h1>Research is currently hidden.</h1><p class="muted">Enable <code>sections.research</code> in content.js.</p></div>'; return; }
  const list = document.getElementById("research-page-cards");
  if (list) list.innerHTML = LAB.research.map(function(r){ return '<a class="card" href="profile.html?research=' + encodeURIComponent(r.slug) + '"><div class="cardimg"><img src="../' + esc(r.image) + '" alt="' + esc(r.title) + '"></div><div class="cardbody"><span class="num">' + esc(r.num) + ' / </span><span class="eyebrow">' + esc(r.eyebrow) + '</span><h3>' + esc(r.title) + '</h3><p>' + esc(r.summary) + '</p><span class="more">Explore research</span></div></a>'; }).join("");
}


function researchItemData(item) {
  if (typeof item === "string") return {title:item, description:"", image:"", link:""};
  item = item || {};
  return {
    title: item.title || item.name || "",
    description: item.description || item.summary || "",
    image: item.image || "",
    link: item.link || item.url || ""
  };
}

function resolveAssetPath(path, basePath) {
  if (!path) return "";
  const value = String(path);
  // Keep absolute/external/data/blob URLs and already-relative paths unchanged.
  if (/^(?:[a-z][a-z0-9+.-]*:|\/\/|\/|\.\.\/)/i.test(value)) return value;
  return (basePath || "") + value;
}

function renderResearchItem(item, className, basePath) {
  const d = researchItemData(item);
  const imagePath = resolveAssetPath(d.image, basePath);
  let html = '';
  if (imagePath) html += '<div class="research-item-image"><img src="' + esc(imagePath) + '" alt="' + esc(d.title) + '"></div>';
  html += '<div class="research-item-content"><h3>' + esc(d.title) + '</h3>';
  if (d.description) html += '<p>' + esc(d.description) + '</p>';
  if (d.link) html += '<a class="more" href="' + esc(d.link) + '" target="_blank" rel="noopener">Learn more</a>';
  html += '</div>';
  return '<div class="' + className + ' research-rich-item">' + html + '</div>';
}

function renderResearchProfile() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("research") || "";
  const r = LAB.research.find(function(x){ return x.slug === slug; });

  const main = document.getElementById("research-profile");
  if (!r) {
    document.title = "Research not found · " + labName();
    if (main) main.innerHTML = '<h1>Research not found.</h1><p class="muted">Add the research to <code>LAB.research</code> in content.js and use the matching slug.</p><p><a class="back" href="index.html">← All research</a></p>';
    return;
  }

  document.title = r.title + " · " + labName();

  const setText = function(id, value) {
    const e = document.getElementById(id);
    if (e) e.textContent = value || "";
  };

  const hasItems = function(value) {
    return Array.isArray(value) ? value.length > 0 : !!(value && String(value).trim());
  };

  const hideIfEmpty = function(sectionId, value) {
    const section = document.getElementById(sectionId);
    if (section && !hasItems(value)) section.remove();
  };

  const renderItems = function(id, values, className) {
    const e = document.getElementById(id);
    if (!e) return;
    e.innerHTML = (Array.isArray(values) ? values : []).map(function(x) {
      return renderResearchItem(x, className, "../");
    }).join("");
  };

  setText("research-profile-eyebrow", r.eyebrow);
  setText("research-profile-title", r.title);
  setText("research-profile-summary", r.summary);

  const img = document.getElementById("research-profile-image");
  if (img) {
    if (r.image) {
      img.src = "../" + r.image;
      img.alt = r.title || "";
    } else {
      const wrap = img.closest(".detailimg");
      if (wrap) wrap.remove();
    }
  }

  renderItems("research-profile-topics", r.topics, "topic");
  renderItems("research-profile-projects", r.projects, "project");

  hideIfEmpty("research-profile-topics-section", r.topics);
  hideIfEmpty("research-profile-projects-section", r.projects);
}

function renderResearchDetail() {
  const slug = location.pathname.split("/").filter(Boolean).pop().replace(/\.html$/i,"");
  const r = LAB.research.find(function(x){ return x.slug === slug; }) || LAB.research[0];
  document.title = r.title + " · " + labName();
  const set = function(id, value){ const e=document.getElementById(id); if(e) e.textContent=value; };
  set("detail-eyebrow", r.eyebrow); set("detail-title", r.title); set("detail-summary", r.summary);
  const img=document.getElementById("detail-image"); if(img) { img.src="../"+r.image; img.alt=r.title; }
  const topics=document.getElementById("detail-topics"); if(topics) topics.innerHTML=(r.topics||[]).map(function(x){return '<div class="topic">'+esc(x)+'</div>';}).join("");
  const projects=document.getElementById("detail-projects"); if(projects) projects.innerHTML=(r.projects||[]).map(function(x){return '<div class="project">'+esc(x)+'</div>';}).join("");
}


function renderPersonPage() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("person") || "";
  const person = LAB.people.find(function(p){ return p.slug === slug; });

  if (!person) {
    document.title = "Person not found · " + labName();
    const main = document.getElementById("person-profile");
    if (main) main.innerHTML = '<h1>Person not found.</h1><p class="muted">Add the person to <code>LAB.people</code> in content.js and use the matching slug.</p><p><a class="back" href="index.html">← All people</a></p>';
    return;
  }

  document.title = person.name + " · " + labName();

  const setText = function(id, value){
    const e=document.getElementById(id);
    if(e) e.textContent=value || "";
  };

  const hasItems = function(value) {
    return Array.isArray(value) ? value.length > 0 : !!(value && String(value).trim());
  };

  const hideIfEmpty = function(sectionId, value) {
    const section=document.getElementById(sectionId);
    if(section && !hasItems(value)) section.remove();
  };

  const renderItems = function(id, values, className) {
    const e=document.getElementById(id);
    if(!e) return;
    e.innerHTML=(Array.isArray(values) ? values : []).map(function(x){
      return '<div class="' + className + '">' + esc(x) + '</div>';
    }).join("");
  };

  setText("person-name", person.name);
  setText("person-role", person.role);
  setText("person-bio", person.bio);

  const img=document.getElementById("person-photo");
  if(img){
    if(person.photo) {
      img.src="../" + person.photo;
      img.alt=person.name || "";
    } else {
      const photoWrap=img.closest(".profile-photo");
      if(photoWrap) photoWrap.remove();
    }
  }

  renderItems("person-interests", person.interests, "topic");
  renderItems("person-education", person.education, "project");
  renderItems("person-experience", person.experience, "project");
  renderItems("person-awards", person.awards, "project");
  renderItems("person-projects", person.projects, "project");

  hideIfEmpty("section-interests", person.interests);
  hideIfEmpty("section-education", person.education);
  hideIfEmpty("section-experience", person.experience);
  hideIfEmpty("section-awards", person.awards);
  hideIfEmpty("section-projects", person.projects);

  const pubs=document.getElementById("person-publications");
  if(pubs){
    const values=Array.isArray(person.publications) ? person.publications : [];
    pubs.innerHTML=values.map(function(title){
      const found=(LAB.publications || []).find(function(p){ return p.title === title; });
      return '<div class="pub"><div class="muted">' + esc(found ? found.year : "") +
        '</div><div><h3>' + esc(title) + '</h3><small>' +
        esc(found ? found.venue : "") + '</small></div></div>';
    }).join("");
  }
  hideIfEmpty("section-publications", person.publications);

  const contact=document.getElementById("person-contact");
  if(contact){
    let html='';
    if(person.email) html += '<a class="btn primary" href="mailto:' + esc(person.email) + '">Email ↗</a>';
    if(person.scholar) html += '<a class="btn" href="' + esc(person.scholar) + '" target="_blank" rel="noopener">Google Scholar ↗</a>';
    if(person.website) html += '<a class="btn" href="' + esc(person.website) + '" target="_blank" rel="noopener">Website ↗</a>';
    if(person.github) html += '<a class="btn" href="' + esc(person.github) + '" target="_blank" rel="noopener">GitHub ↗</a>';
    if(person.cv) html += '<a class="btn" href="' + esc(person.cv) + '" target="_blank" rel="noopener">CV ↗</a>';
    contact.innerHTML=html;
    if(!html) contact.remove();
  }
}
