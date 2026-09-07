
(function(){
  if(!window.CV_DATA || !window.CVRender) return;
  const mode=document.body.dataset.listMode;
  let base=[];
  if(mode==='publications') base=[...CV_DATA.journals,...CV_DATA.conferences];
  if(mode==='patents') base=[...CV_DATA.patents];
  base.sort((a,b)=>(b.year-a.year)||a.title.localeCompare(b.title));
  const list=document.querySelector('#results');
  const search=document.querySelector('#search');
  const meta=document.querySelector('#results-meta');
  const buttons=[...document.querySelectorAll('[data-filter]')];
  const yearSel=document.querySelector('#year-filter');
  let active=mode==='publications'?'all':'patent';
  if(yearSel){
    const years=[...new Set(base.map(x=>x.year))].sort((a,b)=>b-a);
    years.forEach(y=>{const o=document.createElement('option');o.value=y;o.textContent=y;yearSel.appendChild(o);});
  }
  function render(){
    const q=(search?.value||'').toLowerCase().trim();
    const year=yearSel?.value||'all';
    const filtered=base.filter(p=>{
      const hay=[p.title,(p.authors||[]).join(' '),p.venue,p.note,p.year].join(' ').toLowerCase();
      return (active==='all'||p.type===active) && (year==='all'||String(p.year)===year) && (!q||hay.includes(q));
    });
    meta.textContent=filtered.length+' result'+(filtered.length===1?'':'s');
    if(!filtered.length){list.innerHTML='<div class="empty">No matching records.</div>';return;}
    let current=null, html='';
    filtered.forEach(p=>{
      if(p.year!==current){current=p.year;html+='<h2 class="year-heading">'+current+'</h2>';}
      html+=CVRender.pubCard(p);
    });
    list.innerHTML=html;
  }
  buttons.forEach(b=>b.addEventListener('click',()=>{active=b.dataset.filter;buttons.forEach(x=>x.classList.toggle('active',x===b));render();}));
  search?.addEventListener('input',render); yearSel?.addEventListener('change',render); render();
})();
