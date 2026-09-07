
(function(){
  const toggle=document.querySelector('.nav-toggle');
  const links=document.querySelector('.nav-links');
  if(toggle && links){toggle.addEventListener('click',()=>links.classList.toggle('open'));}
  document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>links&&links.classList.remove('open')));

  function esc(s){return (s||'').replace(/[&<>\"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));}
  function authorHTML(authors){
    return (authors||[]).map(a=>{
      const mine=/Junhyeong Kim|김준형/i.test(a);
      return mine?'<strong>'+esc(a)+'</strong>':esc(a);
    }).join(', ');
  }
  function pubCard(p){
    const typeLabel=p.type==='journal'?'Journal':p.type==='conference'?'Conference':'Patent';
    const venue=[p.venue,p.year].filter(Boolean).join(' · ');
    const extras=[];
    if(p.volume) extras.push('Vol. '+esc(p.volume));
    if(p.number) extras.push('No. '+esc(p.number));
    if(p.pages) extras.push('pp. '+esc(p.pages));
    const link=p.url?'<a href="'+esc(p.url)+'" target="_blank" rel="noopener">View record ↗</a>':'';
    const doi=p.doi?'<a href="https://doi.org/'+esc(p.doi)+'" target="_blank" rel="noopener">DOI ↗</a>':'';
    return '<article class="publication-item" data-year="'+p.year+'" data-type="'+p.type+'">'+
      '<h3><span class="tag">'+typeLabel+'</span>'+esc(p.title)+'</h3>'+
      '<div class="authors">'+authorHTML(p.authors)+'</div>'+
      '<div class="venue">'+esc(venue)+(extras.length?' · '+extras.join(' · '):'')+(p.note?' · '+esc(p.note):'')+'</div>'+
      ((link||doi)?'<div class="links">'+[doi,link].filter(Boolean).join('')+'</div>':'')+
      '</article>';
  }
  window.CVRender={esc,authorHTML,pubCard};
})();
