/* Design registry + early applier. Plain script, runs at page top so the design is set before first paint. */
(function(){
  var PREFIX="nitrox-course-v1"; /* must match KEY in nitrox-course.html */
  var DKEY=PREFIX+"-design", TKEY=PREFIX+"-theme";
  var list=[
    {id:"tide",name:"Tide",fonts:null},
    {id:"logbook",name:"Logbook",fonts:"https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=IBM+Plex+Mono:wght@500;700&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap"}
  ];
  var root=document.documentElement, loaded={}, cur="tide";
  window.NITROX_DESIGNS=list;
  function find(id){for(var i=0;i<list.length;i++)if(list[i].id===id)return list[i];return null;}
  function fonts(d){
    if(!d||!d.fonts||loaded[d.id])return;
    loaded[d.id]=1;
    var l=document.createElement("link");l.rel="stylesheet";l.href=d.fonts;
    document.head.appendChild(l);
  }
  function set(id){
    var d=find(id);
    if(!d||d.id==="tide"){cur="tide";root.removeAttribute("data-design");return;}
    cur=d.id;root.setAttribute("data-design",d.id);fonts(d);
  }
  window.NitroxDesigns={
    list:list,
    current:function(){return cur;},
    apply:function(id){
      set(id);
      try{if(cur==="tide")localStorage.removeItem(DKEY);else localStorage.setItem(DKEY,cur);}catch(e){}
    }
  };
  try{
    var t=localStorage.getItem(TKEY);
    if(t==="light"||t==="dark")root.setAttribute("data-theme",t);
    set(localStorage.getItem(DKEY));
  }catch(e){}
})();
