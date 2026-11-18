(function(){ 
  "use strict";
  var TODAY = new Date("2026-11-17T12:00:00");
  var SOURCES = [
    {id:"Dropbox", files:"6,412"},
    {id:"SharePoint", files:"1,108"},
    {id:"OneDrive", files:"2,377"},
    {id:"Google Drive", files:"1,893"}
  ];
  var EXAMPLES = ["slide with huts on the beach","bubble chart about Gen Z travel","futures wheel","master template","expense policy","Seabright proposal"];

  var ITEMS = [
    {id:"huts", kind:"beach", title:"Coastal escapes: where travelers go next", source:"Dropbox",
     path:["Clients","Seabright Hotels","Travel Futures 2026"], file:"Report_v3.2.pptx", loc:"Slide 14 of 38",
     version:"v3.2", date:"2026-10-29", by:"Wade L.", status:"cut",
     visual:["hut","beach","sand","ocean","sea","concrete","building","resort","sun","water"],
     extra:["coastal","travel","tourism","escape","hotel","seabright"],
     text:"Travelers are trading resort towers for small beach huts. Concrete hotel blocks read as dated to under-35s.",
     timeline:[{v:"v1.0",date:"2026-09-12",s:"absent"},{v:"v2.1",date:"2026-10-03",s:"added"},{v:"v3.2",date:"2026-10-29",s:"here"},{v:"v4.0 Final",date:"2026-10-30",s:"cut"}]},
    {id:"hutsfinal", kind:"bars", title:"Coastal escapes: where travelers go next", source:"Dropbox",
     path:["Clients","Seabright Hotels","Travel Futures 2026"], file:"Report_v4.0_FINAL.pptx", loc:"Slide 12 of 34",
     version:"v4.0 Final", date:"2026-10-30", by:"Priya S.", status:"final",
     visual:["bar","chart","graph","column"], extra:["coastal","travel","tourism","escape","hotel","seabright","booking"],
     text:"Beach and coastal bookings grew 22% since 2023. Redone for the final report, without the photo.",
     timeline:[{v:"v4.0 Final",date:"2026-10-30",s:"added"}]},
    {id:"bubbles", kind:"bubbles", title:"Gen Z travel motivations", source:"Dropbox",
     path:["Clients","Seabright Hotels","Travel Futures 2026"], file:"Report_v4.0_FINAL.pptx", loc:"Slide 6 of 34",
     version:"v4.0 Final", date:"2026-10-30", by:"Priya S.", status:"final",
     visual:["bubble","chart","circle","graph"], extra:["gen","z","genz","travel","motivation","survey","young","seabright"],
     text:"Bubble size shows share of respondents. Experience and authenticity outrank price for travelers aged 18 to 27.",
     timeline:[{v:"v2.1",date:"2026-10-03",s:"added"},{v:"v3.2",date:"2026-10-29",s:"here"},{v:"v4.0 Final",date:"2026-10-30",s:"here"}]},
    {id:"wheel", kind:"wheel", title:"Remote work: second-order effects", source:"SharePoint",
     path:["Meridian Health (client site)","Workforce 2035"], file:"Workshop_Deck_v1.3.pptx", loc:"Slide 9 of 22",
     version:"v1.3", date:"2026-08-21", by:"Dana R.", status:"final",
     visual:["wheel","circle","spoke","diagram","ripple"], extra:["future","futures","remote","work","workshop","implication","effect","meridian"],
     text:"Futures wheel from the client workshop: remote work leads to fewer commutes, emptier downtown offices and new neighborhood co-working."},
    {id:"matrix", kind:"matrix", title:"Four futures for grocery retail", source:"OneDrive",
     path:["Projects","Larkspur Grocers","Scenarios"], file:"Scenarios_v2.0.pptx", loc:"Slide 4 of 18",
     version:"v2.0", date:"2026-06-02", by:"Dana R.", status:"final",
     visual:["matrix","grid","quadrant","2x2","axis","box"], extra:["scenario","four","future","futures","grocery","retail","larkspur"],
     text:"Scenario matrix: delivery-first vs. store-first on one axis, local vs. national sourcing on the other."},
    {id:"persona", kind:"persona", title:"Persona: the cautious planner", source:"Google Drive",
     path:["Research","Personas"], file:"Personas_Master_v5.pptx", loc:"Slide 3 of 12",
     version:"v5", date:"2026-03-04", by:"Priya S.", status:"final",
     visual:["person","avatar","face","portrait","people"], extra:["persona","cautious","planner","customer","profile","segment"],
     text:"Books trips nine months ahead, reads every review, and avoids anything that looks too new."},
    {id:"trust", kind:"line", title:"Trust in AI assistants, 2019 to 2026", source:"Dropbox",
     path:["Internal","Survey trends"], file:"Trend_Pack_v2.4.pptx", loc:"Slide 7 of 15",
     version:"v2.4", date:"2026-01-20", by:"Wade L.", status:"final",
     visual:["line","chart","graph","trend"], extra:["trust","ai","assistant","survey","adult","percent"],
     text:"Share of adults who trust AI assistants with everyday tasks rose from 18% to 46%."},
    {id:"signals", kind:"timeline", title:"Signals of change: urban mobility", source:"OneDrive",
     path:["Projects","Northline Transit","Signals scan"], file:"Signals_Scan_v1.1.pptx", loc:"Slide 11 of 20",
     version:"v1.1", date:"2026-09-15", by:"Dana R.", status:"final",
     visual:["timeline","dot","line"], extra:["signal","change","mobility","transit","urban","city","bike","shuttle","northline"],
     text:"Six signals from 2024 to 2026: e-bike subsidies, curb pricing and driverless shuttle pilots."},
    {id:"template", kind:"template", title:"Master report template", source:"Dropbox",
     path:["Templates"], file:"Master_Report_Template_v7.potx", loc:"Layout 1 of 24",
     version:"v7", date:"2026-07-08", by:"Wade L.", status:"final",
     visual:["template","layout","placeholder"], extra:["master","template","report","example","format","cover"],
     text:"Use this for every client report: cover, executive summary, findings, implications, appendix."},
    {id:"quotes", kind:"quotes", title:"What people told us", source:"Google Drive",
     path:["Clients","Seabright Hotels","Interviews"], file:"Interview_Highlights_v2.pptx", loc:"Slide 5 of 9",
     version:"v2", date:"2026-10-10", by:"Priya S.", status:"final",
     visual:["quote","card"], extra:["quote","interview","traveler","hotel","seabright","people"],
     text:"“I don’t want a hotel tower. I want a hut on the beach that feels like it belongs there.” Traveler, 24."},
    {id:"expense", kind:"doc", docTitle:"3. Equipment and software", title:"Equipment and software purchases", source:"Google Drive",
     path:["Admin","Policies"], file:"Expense_Policy_v1.2.docx", loc:"Section 3 of 6",
     version:"v1.2", date:"2025-02-14", by:"R. Halden", status:"final",
     visual:[], extra:["expense","policy","reimburse","reimbursement","equipment","software","monitor","computer","subscription","purchase","buy","receipt"],
     text:"Staff may buy computers, monitors and AI tool subscriptions they need for client work. Submit the receipt within 30 days to be reimbursed."},
    {id:"sow", kind:"doc", docTitle:"Fees and payment schedule", title:"Statement of work: Seabright Hotels", source:"Dropbox",
     path:["Principals only","Seabright Hotels"], file:"SOW_Seabright_v2.docx", loc:"Page 2 of 6",
     version:"v2", date:"2026-08-30", by:"R. Halden", status:"final", confidential:true,
     visual:[], extra:["statement","work","sow","proposal","fee","price","pricing","budget","contract","seabright","scope"],
     text:"Fees, payment schedule and scope for the Travel Futures 2026 study."}
  ];

  var STOP = new Set(["the","a","an","with","on","of","and","that","slide","slides","about","for","in","to","i","we","our","my","me","find","show","where","is","it","was","from","one","had","little","picture","pictures","image","this","those","these","used","did","some","thing","things","any","like","what","which","deck","file","page","at","there","had","have","has"]);

  function norm(w){
    w = String(w).toLowerCase().replace(/[^a-z0-9]/g,"");
    if (w.length > 4 && w.slice(-3) === "ies") return w.slice(0,-3) + "y";
    if (w.length > 3 && w.slice(-1) === "s" && w.slice(-2) !== "ss") return w.slice(0,-1);
    return w;
  }
  function words(s){ return String(s).split(/[^A-Za-z0-9]+/).map(norm).filter(Boolean); }
  function tokens(q){ return words(q).filter(function(t){ return !STOP.has(t); }); }
  function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }
  function fmt(d){ return new Date(d + "T12:00:00").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}); }
  function monthsOld(d){ return Math.floor((TODAY - new Date(d + "T12:00:00")) / (1000*60*60*24*30.44)); }
  function uniq(a){ return a.filter(function(x,i){ return a.indexOf(x) === i; }); }

  ITEMS.forEach(function(it){
    it._visual = it.visual.map(norm);
    it._title = words(it.title);
    it._text = words([it.text, it.extra.join(" "), it.path.join(" "), it.file].join(" "));
    if (!it.timeline) it.timeline = [{v:it.version, date:it.date, s:"here"}];
  });

  /* ---------- slide drawings (160 x 90) ---------- */
  function box(c,x,y,w,h,extra){ return '<rect class="'+c+'" x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'"'+(extra||"")+'/>'; }
  function txt(c,x,y,s){ return '<text class="'+c+'" x="'+x+'" y="'+y+'">'+esc(s)+'</text>'; }
  var DRAW = {
    beach: function(){
      var s = box("s-bg",0,0,160,90) + txt("s-t s-h",8,12,"Coastal escapes");
      s += box("s-sky",8,18,92,30) + '<circle class="s-b" cx="58" cy="26" r="4"/>' + box("s-sea",8,48,92,10) + box("s-sand",8,58,92,24);
      [12,30,48].forEach(function(x){
        s += '<polygon class="s-b" points="'+x+',54 '+(x+8)+',46 '+(x+16)+',54"/>' + box("s-c",x+2,54,12,9) + box("s-d",x+6,57,4,6);
      });
      s += box("s-d",70,28,24,35);
      [32,39,46,53].forEach(function(y){ [73,80,87].forEach(function(x){ s += box("s-c",x,y,4,4); }); });
      s += box("s-c",108,20,44,3) + box("s-c",108,27,38,3) + box("s-c",108,34,42,3);
      s += txt("s-t s-h",108,48,"Huts over") + txt("s-t s-h",108,56,"towers") + box("s-c",108,62,40,3) + box("s-c",108,68,30,3);
      return s;
    },
    bubbles: function(){
      var s = box("s-bg",0,0,160,90) + txt("s-t s-h",8,12,"Gen Z travel motivations");
      s += '<path class="s-line" d="M16 20 V80 H152"/>';
      s += '<circle class="s-a" cx="42" cy="54" r="15" opacity=".9"/><circle class="s-b" cx="78" cy="40" r="11" opacity=".9"/>';
      s += '<circle class="s-sea" cx="104" cy="62" r="8" opacity=".9"/><circle class="s-c" cx="128" cy="34" r="12"/><circle class="s-d" cx="64" cy="70" r="6"/>';
      s += txt("s-m",28,77,"Experience") + txt("s-m",118,52,"Price");
      return s;
    },
    wheel: function(){
      var s = box("s-bg",0,0,160,90) + txt("s-t s-h",8,12,"Remote work: ripple effects");
      var cx = 80, cy = 52, i, a, x1, y1;
      for (i = 0; i < 6; i++){
        a = (i*60 - 90) * Math.PI/180; x1 = cx + 22*Math.cos(a); y1 = cy + 22*Math.sin(a);
        s += '<line class="s-line" x1="'+cx+'" y1="'+cy+'" x2="'+x1.toFixed(1)+'" y2="'+y1.toFixed(1)+'"/>';
        [-16,16].forEach(function(d){
          var b = a + d*Math.PI/180, x2 = cx + 33*Math.cos(b), y2 = cy + 33*Math.sin(b);
          s += '<line class="s-line" x1="'+x1.toFixed(1)+'" y1="'+y1.toFixed(1)+'" x2="'+x2.toFixed(1)+'" y2="'+y2.toFixed(1)+'"/>';
          s += '<circle class="s-b" cx="'+x2.toFixed(1)+'" cy="'+y2.toFixed(1)+'" r="2.8"/>';
        });
        s += '<circle class="s-c" cx="'+x1.toFixed(1)+'" cy="'+y1.toFixed(1)+'" r="5.5"/>';
      }
      s += '<circle class="s-a" cx="'+cx+'" cy="'+cy+'" r="9"/>';
      return s;
    },
    matrix: function(){
      var s = box("s-bg",0,0,160,90) + txt("s-t s-h",8,12,"Four futures for grocery retail");
      s += box("s-sky",30,18,59,31) + box("s-sand",91,18,59,31) + box("s-c",30,51,59,31) + box("s-sky",91,51,59,31);
      s += txt("s-m",34,27,"Delivery + local") + txt("s-m",95,27,"Delivery + national") + txt("s-m",34,60,"Store + local") + txt("s-m",95,60,"Store + national");
      s += '<text class="s-m" transform="translate(24 62) rotate(-90)">Channel</text>' + txt("s-m",80,89,"Sourcing");
      return s;
    },
    persona: function(){
      var s = box("s-bg",0,0,160,90) + txt("s-t s-h",8,12,"Persona: the cautious planner");
      s += '<circle class="s-c" cx="34" cy="50" r="18"/><circle class="s-d" cx="34" cy="44" r="6.5"/><path class="s-d" d="M22 62 a12 9 0 0 1 24 0 Z"/>';
      s += box("s-c",62,28,82,3) + box("s-c",62,35,70,3) + box("s-c",62,42,78,3) + box("s-c",62,49,60,3);
      s += box("s-sky",62,58,86,18) + txt("s-m",66,68,"“I read every review first.”");
      return s;
    },
    line: function(){
      var s = box("s-bg",0,0,160,90) + txt("s-t s-h",8,12,"Trust in AI assistants");
      [30,45,60,75].forEach(function(y){ s += '<line class="s-line" x1="18" y1="'+y+'" x2="150" y2="'+y+'" opacity=".5"/>'; });
      s += '<polyline class="s-trend" points="18,72 40,68 62,63 84,56 106,47 128,40 150,32"/>';
      s += '<circle class="s-b" cx="150" cy="32" r="3"/>' + txt("s-m",18,84,"2019: 18%") + txt("s-m",126,26,"2026: 46%");
      return s;
    },
    timeline: function(){
      var s = box("s-bg",0,0,160,90) + txt("s-t s-h",8,12,"Signals of change: mobility");
      s += '<line class="s-line" x1="14" y1="50" x2="146" y2="50"/>';
      [22,46,70,94,118,142].forEach(function(x,i){
        s += '<circle class="'+(i%2 ? "s-b" : "s-a")+'" cx="'+x+'" cy="50" r="4"/>';
        s += box("s-c", x-9, i%2 ? 58 : 38, 18, 3);
      });
      s += txt("s-m",14,76,"2024") + txt("s-m",134,76,"2026");
      return s;
    },
    template: function(){
      var s = box("s-bg",0,0,160,90) + box("s-a",0,0,160,16) + txt("s-w",8,11,"Client report");
      s += box("s-c",10,24,84,6) + box("s-c",10,34,56,4) + box("s-sky",102,24,48,40);
      s += box("s-c",10,46,80,3) + box("s-c",10,52,74,3) + box("s-c",10,58,82,3) + box("s-c",10,80,140,2);
      return s;
    },
    quotes: function(){
      var s = box("s-bg",0,0,160,90) + txt("s-t s-h",8,12,"What people told us");
      [8,58,108].forEach(function(x){
        s += box("s-sky",x,20,44,60,' rx="3"') + txt("s-q",x+4,36,"“");
        s += box("s-c",x+5,42,34,3) + box("s-c",x+5,48,30,3) + box("s-c",x+5,54,32,3) + box("s-d",x+5,68,16,3);
      });
      return s;
    },
    bars: function(){
      var s = box("s-bg",0,0,160,90) + txt("s-t s-h",8,12,"Coastal escapes");
      s += '<path class="s-line" d="M16 20 V78 H100"/>';
      [[22,48],[38,40],[54,30],[70,22]].forEach(function(b,i){ s += box(i === 3 ? "s-a" : "s-c", b[0], 78-b[1], 11, b[1]); });
      s += txt("s-m",18,85,"2023") + txt("s-m",66,85,"2026");
      s += box("s-c",108,22,44,3) + box("s-c",108,29,38,3) + txt("s-t s-h",108,46,"+22% beach") + txt("s-t s-h",108,54,"bookings") + box("s-c",108,60,40,3);
      return s;
    },
    doc: function(it){
      var s = box("s-bg",0,0,160,90) + txt("s-t s-h",12,14,it.docTitle || it.title);
      s += box("s-hl",10,31,140,14);
      [22,28,34,40,52,58,64,70,76].forEach(function(y,i){ s += box("s-c",12,y,[136,120,132,110,136,128,96,130,80][i],3); });
      return s;
    }
  };
  function drawing(it){
    return '<svg viewBox="0 0 160 90" role="img" aria-label="'+esc("Preview of " + it.title)+'">' + DRAW[it.kind](it) + '</svg>';
  }

  /* ---------- state ---------- */
  var state = { sources:new Set(SOURCES.map(function(s){ return s.id; })), versions:true, viewAs:"staff" };
  var $ = function(id){ return document.getElementById(id); };
  var input = $("q");

  function score(it, toks){
    var vis = [], txtm = [], sc = 0;
    toks.forEach(function(t){
      if (it._visual.indexOf(t) > -1){ sc += 3; vis.push(t); }
      else if (it._title.indexOf(t) > -1){ sc += 2; txtm.push(t); }
      else if (it._text.indexOf(t) > -1){ sc += 1; txtm.push(t); }
    });
    return {score:sc, vis:uniq(vis), txt:uniq(txtm)};
  }
  function highlight(text, toks){
    var set = new Set(toks);
    return esc(text).replace(/[A-Za-z0-9’']+/g, function(w){ return set.has(norm(w)) ? "<mark>" + w + "</mark>" : w; });
  }
  function displayWord(t, it){
    var src = it.visual.concat(it.extra);
    for (var i = 0; i < src.length; i++){ if (norm(src[i]) === t) return src[i]; }
    return t;
  }

  function run(){
    var q = input.value.trim(), toks = tokens(q), results = [], hidden = [];
    ITEMS.forEach(function(it){
      if (!state.sources.has(it.source)) return;
      if (!state.versions && it.status === "cut") return;
      var m = toks.length ? score(it, toks) : {score:1, vis:[], txt:[]};
      if (m.score <= 0) return;
      if (it.confidential && state.viewAs === "staff"){ hidden.push(it); return; }
      results.push({it:it, m:m});
    });
    results.sort(function(a,b){ return (b.m.score - a.m.score) || (b.it.date < a.it.date ? -1 : 1); });

    var st = $("status");
    if (!toks.length) st.innerHTML = "Showing recently updated files from <strong>" + state.sources.size + "</strong> sources.";
    else st.innerHTML = "<strong>" + results.length + "</strong> " + (results.length === 1 ? "match" : "matches") + " for “" + esc(q) + "” across " + state.sources.size + " sources.";

    if (hidden.length){
      $("locked").hidden = false;
      $("lockedText").textContent = (hidden.length === 1 ? "1 match is" : hidden.length + " matches are") + " in a folder you can't open (Principals only). Ask R. Halden if you need it.";
    } else { $("locked").hidden = true; }

    var out = $("results");
    if (!results.length){
      out.innerHTML = '<div class="empty"><h2>No matches for “' + esc(q) + '”</h2>' +
        '<p class="snippet">Try describing what was on it: the picture, the chart type, a phrase, or the client. ' +
        (state.versions ? "" : "Earlier versions are turned off, so slides cut from final reports are hidden. ") + '</p></div>';
      return;
    }
    out.innerHTML = results.map(function(r){
      var it = r.it, m = r.m, reason = [];
      if (m.vis.length) reason.push("Picture shows: " + m.vis.map(function(t){ return displayWord(t,it); }).join(", "));
      if (m.txt.length) reason.push("Text mentions: " + m.txt.map(function(t){ return displayWord(t,it); }).join(", "));
      if (!toks.length) reason.push("Recently updated");
      var badges = "";
      if (it.status === "cut") badges += '<span class="badge cut">Cut from final · found in ' + esc(it.version) + '</span>';
      var mo = monthsOld(it.date);
      if (mo >= 6) badges += '<span class="badge old">Updated ' + mo + ' months ago</span>';
      if (it.confidential) badges += '<span class="badge lock">Principals only</span>';
      return '<button class="card" type="button" data-id="' + it.id + '">' +
        '<span class="thumb">' + drawing(it) + '</span>' +
        '<span class="cbody">' +
          '<span class="ctitle">' + esc(it.title) + '</span>' +
          '<span class="reason">' + esc(reason.join(" · ")) + '</span>' +
          '<span class="snippet">' + highlight(it.text, toks) + '</span>' +
          '<span class="path">' + esc([it.source].concat(it.path).join(" › ")) + ' › ' + esc(it.file) + '</span>' +
          '<span class="meta">' + esc(it.loc) + ' · ' + esc(it.version) + ' · ' + fmt(it.date) + ' · ' + esc(it.by) + '</span>' +
          (badges ? '<span class="badges">' + badges + '</span>' : '') +
        '</span></button>';
    }).join("");
  }

  /* ---------- detail sheet ---------- */
  var lastFocus = null;
  var STATE_LABEL = {absent:"Not in this version", added:"Added in this version", here:"Included", cut:"Removed in this version"};
  function openDetail(id){
    var it = ITEMS.filter(function(x){ return x.id === id; })[0]; if (!it) return;
    lastFocus = document.activeElement;
    $("sheetTitle").textContent = it.title;
    var mo = monthsOld(it.date), html = '<div class="thumb">' + drawing(it) + '</div>';
    if (it.status === "cut") html += '<p class="callout cut">This slide was cut from the final report (v4.0). It still exists in ' + esc(it.version) + ', so you can reuse it.</p>';
    if (mo >= 6) html += '<p class="callout old">Last updated ' + mo + ' months ago. Check with ' + esc(it.by) + ' that it still applies.</p>';
    html += '<dl class="facts">' +
      '<dt>Where</dt><dd class="mono">' + esc([it.source].concat(it.path).join(" › ")) + ' › ' + esc(it.file) + '</dd>' +
      '<dt>Location</dt><dd>' + esc(it.loc) + '</dd>' +
      '<dt>Version</dt><dd>' + esc(it.version) + '</dd>' +
      '<dt>Updated</dt><dd>' + fmt(it.date) + ' by ' + esc(it.by) + '</dd>' +
      '<dt>Access</dt><dd>' + (it.confidential ? "Principals only" : "Everyone on the project team") + '</dd>' +
    '</dl>';
    html += '<div><p class="h3">Version history</p><ol class="versions">' + it.timeline.map(function(t){
      return '<li><span class="v">' + esc(t.v) + '</span><span>' + fmt(t.date) + '</span><span class="st-' + t.s + '">' + STATE_LABEL[t.s] + '</span></li>';
    }).join("") + '</ol></div>';
    html += '<div class="actions"><button class="btn" type="button" id="openFile">Open at ' + esc(it.loc.split(" of ")[0].toLowerCase()) + '</button>' +
            '<button class="btn ghost" type="button" id="copyLoc">Copy location</button></div>';
    $("sheetBody").innerHTML = html;
    $("sheetBg").hidden = false;
    $("closeSheet").focus();
    $("openFile").addEventListener("click", function(){
      toast("Prototype: the real product opens " + it.file + " in " + it.source + " at " + it.loc.split(" of ")[0].toLowerCase() + ".");
    });
    $("copyLoc").addEventListener("click", function(){
      var loc = [it.source].concat(it.path).join(" > ") + " > " + it.file + " (" + it.loc + ")";
      try {
        navigator.clipboard.writeText(loc).then(function(){ toast("Copied the file location."); }, function(){ toast("Couldn't copy. The location is listed under Where."); });
      } catch (e) { toast("Couldn't copy. The location is listed under Where."); }
    });
  }
  function closeDetail(){
    $("sheetBg").hidden = true;
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  var toastTimer = null;
  function toast(msg){
    var t = $("toast"); t.textContent = msg; t.hidden = false;
    clearTimeout(toastTimer); toastTimer = setTimeout(function(){ t.hidden = true; }, 3600);
  }

  /* ---------- wire up ---------- */
  var ex = $("examples");
  EXAMPLES.forEach(function(e){
    var b = document.createElement("button"); b.type = "button"; b.className = "chip"; b.textContent = e;
    b.addEventListener("click", function(){ input.value = e; run(); });
    ex.appendChild(b);
  });
  var srcBox = $("sources");
  SOURCES.forEach(function(s){
    var id = "src-" + s.id.toLowerCase().replace(/\s+/g,"-");
    var l = document.createElement("label"); l.className = "src"; l.setAttribute("for", id);
    l.innerHTML = '<input type="checkbox" id="' + id + '" checked><span>' + esc(s.id) + '</span><small>' + s.files + ' files</small>';
    srcBox.appendChild(l);
    l.querySelector("input").addEventListener("change", function(ev){
      if (ev.target.checked) state.sources.add(s.id); else state.sources.delete(s.id);
      run();
    });
  });
  $("versions").addEventListener("change", function(ev){ state.versions = ev.target.checked; run(); });
  $("viewas").addEventListener("change", function(ev){ state.viewAs = ev.target.value; run(); });
  $("searchForm").addEventListener("submit", function(ev){ ev.preventDefault(); run(); });
  input.addEventListener("input", run);
  $("results").addEventListener("click", function(ev){
    var c = ev.target.closest(".card"); if (c) openDetail(c.getAttribute("data-id"));
  });
  $("closeSheet").addEventListener("click", closeDetail);
  $("sheetBg").addEventListener("click", function(ev){ if (ev.target === $("sheetBg")) closeDetail(); });
  document.addEventListener("keydown", function(ev){ if (ev.key === "Escape" && !$("sheetBg").hidden) closeDetail(); });

  run();
})();
