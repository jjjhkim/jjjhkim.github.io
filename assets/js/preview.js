
(function(){
  if(!window.CV_DATA || !window.CVRender) return;
  const el=document.querySelector('#recent-publications');
  if(!el)return;
  const all=[...CV_DATA.journals,...CV_DATA.conferences].sort((a,b)=>(b.year-a.year)||0).slice(0,6);
  el.innerHTML=all.map(CVRender.pubCard).join('');
})();
