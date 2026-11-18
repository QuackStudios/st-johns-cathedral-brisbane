const sections={
'About':{'Our Cathedral':['Welcome to St John’s','Mission and Vision','Cathedral History and Heritage','Caring for the Cathedral','The Cathedral and the Diocese'],'Leadership':['Leadership and Governance','Our Clergy','The Dean of Brisbane','The Archbishop of Brisbane'],'Information':['News and Media','Safeguarding','Contact Us']},
'Congregation':{'Cathedral Life':['Our Congregation','Ministries and Fellowship','Pastoral Care','Children and Families'],'Get Involved':['Join the Congregation','Volunteering','Cathedral Community News']},
'Support':{'Support St John’s':['Support St John’s','Make a Donation','Planned Giving','St John’s Association','The Choral Music Trust','Gifts in Wills','Current Appeals','Caring for the Cathedral']},
'Contact':{'Talk to us':['Cathedral Reception','Host an event','Music Department']},
'Worship':{'Worship With Us':['Worship at St John’s','Service Times','The Eucharist','Choral Evensong','Children’s Ministry','The Church’s Year'],'Prayer and Reflection':['Prayer at the Cathedral','Watch Online','Sermons and Service Notes'],'Life’s Significant Moments':['Baptisms','Weddings','Funerals and Memorials']},
'Music':{'Cathedral Music':['Music at St John’s','The Cathedral Choir','Choirs and Choristers','Our Musicians','The Cathedral Organs'],'Experience and Support':['Music in Worship','Concerts and Recitals','Music Opportunities','The Choral Music Trust','Brisbane Contemporary Church Music Festival']},
'Visit':{'Plan Your Visit':['Plan Your Visit','Opening Hours and Getting Here','Accessibility','Guided Tours','Cathedral Shop'],'Explore the Cathedral':['Explore the Cathedral','Art and Architecture','Sacred Spaces and Chapels','Stained Glass, Art and Memorials','The Bells','Virtual Tour']},
'Faith & Spirituality':{'Explore Faith':['Faith and Spirituality at St John’s','The Anglican Faith','Exploring Faith and Confirmation','A Better Way'],'Spiritual Practices':['Prayer at the Cathedral','The Labyrinth','Christian Meditation'],'Programs and Conversations':['Theologians and God Botherers','Saints on a Mission','Holy Hermits Online'],'Listen and Reflect':['On the Way Podcast','Daily Devotions','Weekly Reflections','Reflections and Resources']},
'Our Work':{'Our Work':['Our Work','Ministries and Outreach','Get Involved'],'Advocacy':['Aboriginal and Torres Strait Islander Peoples','Community Belonging','Environment and Climate','Refugees and Asylum Seekers','Domestic Abuse Working Group']},
'What’s On':{'What’s Happening':['Cathedral Calendar','Upcoming Events','News and Stories'],'Explore by Type':['Services and Festivals','Concerts and Recitals','Talks and Community Events','Faith and Spirituality Events']}};
const $=s=>document.querySelector(s),slug=s=>s.toLowerCase().replace(/[’']/g,'').replace(/&/g,'and').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const entries=[];Object.entries(sections).forEach(([section,groups])=>Object.values(groups).flat().forEach(title=>{if(!entries.some(x=>x.title===title))entries.push({title,section,id:slug(title)})}));
const primary=['Worship','Music','Visit','Faith & Spirituality','Our Work','What’s On'];
function sectionButton(s){return `<button data-section="${s}" aria-haspopup="dialog" aria-controls="menu" aria-expanded="false">${s}</button>`}
$('#upper').innerHTML=['About','Congregation','Support','Contact'].map(sectionButton).join('')+'<button id="a11yButton" aria-haspopup="dialog" aria-controls="accessibility-panel">Accessibility</button><a class="give" href="https://www.stjohnscathedral.com.au/give/">Give ↗</a>';
$('#primary').innerHTML=primary.map(sectionButton).join('');
$('#menuSections').innerHTML='<p class="menu-index-label">Explore the Cathedral</p>'+primary.map(s=>`<button data-tab="${s}">${s}</button>`).join('')+'<p class="menu-index-label utility-label">Cathedral life</p><div class="menu-utility-list">'+['About','Congregation','Support','Contact'].map(s=>`<button class="menu-utility" data-tab="${s}">${s}</button>`).join('')+'</div>';
let previousFocus=null;
function setBackgroundInert(value){document.querySelectorAll('body>header,body>main,body>footer,body>.skip,#a11yButton').forEach(el=>el.inert=value)}
function closeOverlays(){const open=document.querySelector('.overlay:not([hidden])');if(!open)return;document.querySelectorAll('.overlay').forEach(x=>x.hidden=true);document.body.classList.remove('locked');setBackgroundInert(false);document.querySelectorAll('[aria-expanded]').forEach(el=>el.setAttribute('aria-expanded','false'));previousFocus?.focus()}

function openOverlay(which){previousFocus=document.activeElement.closest('#menu')?$('#menuButton'):document.activeElement;document.querySelectorAll('.overlay').forEach(x=>x.hidden=x.id!==which);document.body.classList.add('locked');setBackgroundInert(true);if(previousFocus?.tagName==='BUTTON')previousFocus.setAttribute('aria-expanded','true');$('#menuButton').setAttribute('aria-expanded',String(which==='menu'));$('#'+which+' .close').focus()}
const menuIntroductions={Worship:'Find a Service, explore prayer, or mark a significant moment.',Music:'Discover the voices, instruments and people behind our music.',Visit:'Plan your time here, and discover the stories in the stone.','Faith & Spirituality':'Bring your questions. Make room for reflection.','Our Work':'Explore how faith becomes care, connection and action.','What’s On':'Find your next Cathedral experience.',About:'Discover our story, our people and our purpose.',Congregation:'Find your place in the life of St John’s.',Support:'Help sustain a place of worship, music and welcome.',Contact:'Three simple ways to reach the right team.'};
function renderMenu(s){
 $('#menuContent').innerHTML=`<div class="menu-category-heading"><p class="eyebrow">DISCOVER ST JOHN’S</p><h2>${s}</h2><p>${menuIntroductions[s]}</p></div><div class="menu-columns ${s==='Contact'?'contact-menu':''} ${Object.keys(sections[s]).length===4?'four-groups':''}">${Object.entries(sections[s]).map(([group,links])=>`<section class="menu-group"><h3>${group}</h3>${links.map(t=>`<a href="#${slug(t)}">${t}<span aria-hidden="true">↗</span></a>`).join('')}</section>`).join('')}</div>`;
 document.querySelectorAll('[data-tab]').forEach(b=>{b.classList.toggle('active',b.dataset.tab===s);b.setAttribute('aria-pressed',String(b.dataset.tab===s))});
}
document.addEventListener('click',e=>{if(e.target.closest('[data-open-accessibility]')){openOverlay('accessibility-panel');return}const jump=e.target.closest('[data-article-jump]');if(jump){e.preventDefault();const target=document.getElementById(jump.dataset.articleJump);target?.scrollIntoView({behavior:document.documentElement.classList.contains('access-motion')?'auto':'smooth'});if(target){target.tabIndex=-1;target.focus({preventScroll:true})}return}const s=e.target.closest('[data-section]');if(s){renderMenu(s.dataset.section);openOverlay('menu')}const t=e.target.closest('[data-tab]');if(t)renderMenu(t.dataset.tab);if(e.target.closest('.close'))closeOverlays();if(e.target.closest('.overlay a[href^="#"]'))closeOverlays()});
$('#menuButton').onclick=()=>{renderMenu('Worship');openOverlay('menu')};$('#searchButton').onclick=()=>{openOverlay('search');renderSearch();$('#query').focus()};
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeOverlays();return}const dialog=document.querySelector('.overlay:not([hidden])');if(e.key==='Tab'&&dialog){const f=[...dialog.querySelectorAll('a,button,input,select,[tabindex="0"]')].filter(x=>x.getClientRects().length);if(e.shiftKey&&document.activeElement===f[0]){e.preventDefault();f.at(-1).focus()}else if(!e.shiftKey&&document.activeElement===f.at(-1)){e.preventDefault();f[0].focus()}}});
function renderSearch(){const q=$('#query').value.toLowerCase().trim();const matches=entries.filter(x=>!q||x.title.toLowerCase().includes(q)||x.section.toLowerCase().includes(q));$('#results').innerHTML=(q?`<p>${matches.length} results</p>`:'<p>Popular places to begin</p>')+(q?matches:entries.filter(x=>['Service Times','Plan Your Visit','Concerts and Recitals','Contact Us','Upcoming Events'].includes(x.title))).map(x=>`<a href="#${x.id}">${x.title}<small>${x.section} ↗</small></a>`).join('')+(matches.length?'':'<p>Try “worship”, “music” or “visit”, or contact the Cathedral office.</p>')}
$('#query').addEventListener('input',renderSearch);
const intros={About:'Discover the people, purpose and heritage of St John’s Cathedral, a living expression of Anglican faith in Brisbane.',Congregation:'Find community through worship, shared life and care for one another. There are many ways to become part of Cathedral life.',Support:'Help sustain the worship, music, heritage and community life of St John’s Cathedral for generations to come.',Contact:'Connect with the Cathedral team for help with your visit, an enquiry or a significant moment in your life.',Worship:'Join a community shaped by prayer, the Eucharist and the beauty of Anglican worship. Come as you are, whether you are a regular worshipper or exploring for the first time.',Music:'Experience music as part of the living tradition of St John’s, from choral worship to concerts and recitals in an extraordinary setting.',Visit:'Step into a space of beauty and stillness in the heart of Brisbane. Discover the Cathedral’s architecture, art and sacred spaces at your own pace.','Faith & Spirituality':'Make room for questions, reflection and spiritual discovery. Explore practices and conversations that connect faith with the experience of everyday life.','Our Work':'Explore how faith becomes action through care, outreach and advocacy for a more compassionate community.','What’s On':'Discover opportunities to gather at St John’s, from worship and music to conversations, reflection and community events.'};
const descriptions={
'worship-times':['Gather for worship','Sunday worship includes the Holy Eucharist and Choral Eucharist, with Choral Evensong also part of Cathedral life. Special festivals can change the usual pattern.','See the current service schedule and service notes on the Cathedral’s existing website.'],
'plan-your-visit':['A place to pause and discover','Come to explore the architecture, enjoy the music or take a quiet moment. If you are planning a group visit, guided tour or need accessibility information, contact the Cathedral team before you travel.','Check current opening hours, access and service arrangements before your visit.'],
'contact-us':['We’re here to help','For general enquiries, contact the Cathedral office at cathedral@stjohnscathedral.com.au or call +61 7 3835 2222.','For pastoral care, weddings, baptisms, music and tours, the office can help direct your enquiry.'],
'welcome-to-st-johns':['Your Cathedral, your welcome','St John’s is a place to worship, celebrate, seek solace, converse and learn. The community welcomes open-minded conversation and invites people to explore their own spiritual journeys.','You are welcome to join a service, discover Cathedral life or simply spend time in this remarkable space.'],
'safeguarding':['Care, dignity and respect','Safeguarding is central to a community where people can participate with dignity and care.','Visit the Cathedral’s current safeguarding information for policies, reporting pathways and contact details.']};
const official={'Worship':'services/','Music':'music/','Visit':'contact/','Contact':'contact/','About':'','Support':'give/','Congregation':'community/','Faith & Spirituality':'spirituality/','Our Work':'advocacy/','What’s On':'whats-on/'};
const sectionImages={About:['carving.jpg','Carved timber details at St John’s Cathedral'],Congregation:['gathering.jpg','People gathered in the Cathedral'],Support:['carving.jpg','Cathedral craftsmanship'],Contact:['hero.jpg','The interior of St John’s Cathedral'],Worship:['mass.jpg','Elements of the Eucharist'],Music:['choir.jpg','Cathedral choristers in choir robes'],Visit:['hero.jpg','Vaulted stone architecture and stained glass'],'Faith & Spirituality':['candles.jpg','Candles lit in prayer'],'Our Work':['outreach.jpg','People taking part in climate advocacy'],'What’s On':['gathering.jpg','An event bringing people together at the Cathedral']};
const specificImages={'weddings':['wedding2.jpg','A couple with a minister during their Cathedral wedding'],'baptisms':['font.jpg','The Cathedral baptismal font'],'the-cathedral-organs':['organ.jpg','Cathedral organ stops'],'stained-glass-art-and-memorials':['light.jpg','Colourful light from stained glass']};
function detailPhoto(item){const pair=specificImages[item.id]||sectionImages[item.section];return `<figure class="detail-photo"><img src="assets/${pair[0]}" alt="${pair[1]}" loading="lazy"></figure>`;}
function route(){let id=decodeURIComponent(location.hash.slice(1));if(['welcome','service-times','worship-times','service-times','explore-cathedral-home','today-services'].includes(id)){$('#home').hidden=false;$('#detail').hidden=true;requestAnimationFrame(()=>document.getElementById(id==='worship-times'?'service-times':id).scrollIntoView());return}const item=entries.find(x=>x.id===id);$('#home').hidden=!!item;$('#detail').hidden=!item;$('#header').classList.toggle('solid',!!item||scrollY>75);if(item){const related=entries.filter(x=>x.section===item.section&&x.id!==id).slice(0,9);const d=descriptions[id];$('#detail').innerHTML=renderEditorial(item);document.title=item.title+' — St John’s Cathedral Brisbane';scrollTo(0,0)}else{document.title='St John’s Cathedral Brisbane — A place for all';if(!id)scrollTo(0,0)}}
window.addEventListener('hashchange',()=>{route();requestAnimationFrame(()=>{const id=location.hash.slice(1);const target=['worship-times','service-times'].includes(id)?$('#service-heading'):(!$('#detail').hidden?$('#detail h1'):$('#home h1'));if(target){target.tabIndex=-1;target.focus({preventScroll:true})}updatePageTone()})});window.addEventListener('scroll',()=>$('#header').classList.toggle('solid',!$('#detail').hidden||scrollY>75),{passive:true});$('#year').textContent=new Date().getFullYear();route();

// Display preferences work across the home page, menus and routed pages.
const defaultPreferences={size:'1',contrast:false,links:false,spacing:false,motion:false};
let preferences={...defaultPreferences};
try{preferences={...defaultPreferences,...JSON.parse(localStorage.getItem('cathedral-reading-preferences')||'{}')}}catch{}
const motionPreference=matchMedia('(prefers-reduced-motion: reduce)');
function applyPreferences(announce=false){
 if(!['1','1.15','1.3'].includes(String(preferences.size)))preferences.size='1';
 document.documentElement.style.setProperty('--text-scale',preferences.size);
 ['contrast','links','spacing'].forEach(p=>document.documentElement.classList.toggle('access-'+p,!!preferences[p]));
 document.documentElement.classList.toggle('access-motion',preferences.motion||motionPreference.matches);
 document.documentElement.classList.toggle('enlarged-type',preferences.size!=='1');
 document.querySelectorAll('[data-pref]').forEach(b=>{const active=!!preferences[b.dataset.pref];b.setAttribute('aria-pressed',String(active));b.textContent=active?'On':'Off'});
 document.querySelectorAll('[data-text-size]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.textSize===String(preferences.size))));
 try{localStorage.setItem('cathedral-reading-preferences',JSON.stringify(preferences))}catch{}
 if(announce)$('#preferenceStatus').textContent='Reading preferences updated.';
 alignHeader();updatePageTone();
}
$('#a11yButton').onclick=()=>openOverlay('accessibility-panel');
$('#resetPreferences').onclick=()=>{preferences={...defaultPreferences};applyPreferences(true);$('#preferenceStatus').textContent='Reading preferences reset.'};
document.querySelectorAll('[data-pref]').forEach(b=>b.onclick=()=>{preferences[b.dataset.pref]=!preferences[b.dataset.pref];applyPreferences(true)});
document.querySelectorAll('[data-text-size]').forEach(b=>b.onclick=()=>{preferences.size=b.dataset.textSize;applyPreferences(true)});
motionPreference.addEventListener('change',()=>applyPreferences());
// Align both icon centres with the lower navigation row, and both row endings.
function alignHeader(){
 const header=$('#header');
 if(innerWidth<=1100)return;
 const primary=$('#primary'),tools=$('.tools');
 if(!primary.getClientRects().length){header.style.setProperty('--tools-shift','0px');return}
 const a=primary.getBoundingClientRect(),b=tools.getBoundingClientRect();
 const current=parseFloat(getComputedStyle(header).getPropertyValue('--tools-shift'))||0;
 header.style.setProperty('--tools-shift',`${a.top+a.height/2-(b.top+b.height/2-current)}px`);
}
window.addEventListener('resize',alignHeader);
new ResizeObserver(()=>alignHeader()).observe($('#primary'));
// Blend the cool white palette continuously through the homepage reading journey.
const pageTones=[['service-times',[249,250,252]],['.living-cathedral',[235,238,243]],['explore-cathedral-home',[255,255,255]],['.visit-gateway',[239,241,244]],['welcome',[232,237,244]],['.photo-stories',[249,250,252]],['.care-gateway',[235,238,243]]];
function updatePageTone(){
 const root=document.documentElement;
 let tone=[249,250,252];
 if(root.classList.contains('access-contrast'))tone=[255,255,255];
 else if($('#detail').hidden&&!root.classList.contains('access-motion')){
  const landmarks=[{y:0,color:[255,255,255]}];
  for(const [key,color] of pageTones){const el=key.startsWith('.')?$(key):document.getElementById(key);if(el)landmarks.push({y:el.getBoundingClientRect().top+scrollY,color})}
  const readingY=scrollY+innerHeight*.42;
  let from=landmarks[0],to=landmarks.at(-1);
  for(let i=1;i<landmarks.length;i++){if(readingY<landmarks[i].y){to=landmarks[i];break}from=landmarks[i]}
  const progress=Math.max(0,Math.min(1,(readingY-from.y)/Math.max(1,to.y-from.y)));
  const blend=progress*progress*(3-2*progress);
  tone=from.color.map((c,i)=>Math.round(c+(to.color[i]-c)*blend));
 }
 root.style.setProperty('--page-tint',`rgb(${tone.join(',')})`);
}
window.addEventListener('resize',updatePageTone);
let scrollFrame=0;window.addEventListener('scroll',()=>{if(!scrollFrame)scrollFrame=requestAnimationFrame(()=>{scrollFrame=0;updatePageTone();alignHeader()})},{passive:true});
applyPreferences();
// Label page-changing controls and announce their destination to assistive technology.
$('#searchButton').setAttribute('aria-controls','search');$('#menuButton').setAttribute('aria-controls','menu');
document.querySelectorAll('a[target="_blank"]').forEach(a=>{const extra=document.createElement('span');extra.className='sr-only';extra.textContent=' (opens in a new tab)';a.append(extra)});
function matchHeroPanels(){const hero=document.querySelector('.gateway-hero'),panel=hero?.querySelector('.hero-content');if(hero&&panel)hero.style.setProperty('--hero-panel-height',`${panel.getBoundingClientRect().height}px`)}
new ResizeObserver(matchHeroPanels).observe(document.querySelector('.gateway-hero .hero-content'));
matchHeroPanels();
// Let the footer occupy the viewport without the pinned navigation above it.
const footerHeader=document.getElementById('header');
const siteFooter=document.querySelector('footer');
let footerInView=false;
function updateFooterHeader(){
 const hide=footerInView&&!footerHeader.contains(document.activeElement);
 footerHeader.classList.toggle('at-footer',hide);
 footerHeader.inert=hide;
 if(hide)footerHeader.setAttribute('aria-hidden','true');
 else footerHeader.removeAttribute('aria-hidden');
}
// Retire the header only once the footer becomes the topmost viewport content.
let footerHeaderFrame=0;
function checkFooterBoundary(){footerHeaderFrame=0;footerInView=siteFooter.getBoundingClientRect().top<=0;updateFooterHeader()}
function queueFooterBoundary(){if(!footerHeaderFrame)footerHeaderFrame=requestAnimationFrame(checkFooterBoundary)}
window.addEventListener('scroll',queueFooterBoundary,{passive:true});
window.addEventListener('resize',queueFooterBoundary);
new ResizeObserver(queueFooterBoundary).observe(document.body);
checkFooterBoundary();
footerHeader.addEventListener('focusout',()=>requestAnimationFrame(updateFooterHeader));
