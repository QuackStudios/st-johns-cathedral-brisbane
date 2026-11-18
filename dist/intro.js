/* Replay the arrival on each fresh, unanchored homepage load. */
(()=>{
 const root=document.documentElement, intro=document.getElementById('home-intro');
 if(!intro)return;
 if(!root.classList.contains('home-intro-pending')){intro.remove();return}
 const motion=matchMedia('(prefers-reduced-motion: reduce)');
 const timers=[],animations=[];
 let done=false;
 const finish=()=>{
  if(done)return;done=true;
  timers.forEach(clearTimeout);clearTimeout(window.cathedralIntroFallback);
  animations.forEach(a=>a.cancel());
  root.classList.remove('home-intro-pending','home-intro-arriving');
  intro.remove();
  ['pointerdown','keydown','hashchange','pagehide'].forEach(t=>window.removeEventListener(t,finish));
  window.removeEventListener('scroll',onScroll);
  motion.removeEventListener('change',onMotion);
 };
 const onScroll=()=>{if(scrollY>20)finish()};
 const onMotion=()=>{if(motion.matches)finish()};
 ['pointerdown','keydown','hashchange','pagehide'].forEach(t=>window.addEventListener(t,finish,{once:true}));
 window.addEventListener('scroll',onScroll,{passive:true});
 motion.addEventListener('change',onMotion);
 if(motion.matches||root.classList.contains('access-motion')||scrollY>20){finish();return}
 const mark=intro.querySelector('.home-intro-mark'),glass=intro.querySelector('.home-intro-glass');
 mark.querySelector('svg').addEventListener('error',finish,{once:true});
 timers.push(setTimeout(()=>{
  if(done)return;
  const brand=document.querySelector('#header .brand');
  if(!brand||!mark.animate){finish();return}
  const from=mark.getBoundingClientRect(),to=brand.getBoundingClientRect();
  // Aim for the eagle at the left of the existing header wordmark.
  const x=to.left+to.width*.145-(from.left+from.width/2);
  const y=to.top+to.height*.53-(from.top+from.height/2);
  const scale=to.width*.27/from.width;
  animations.push(mark.animate([
   {transform:'translate(0,0) scale(1)',opacity:1,offset:0},
   {transform:`translate(${x*.18}px,${y*.32}px) scale(.88) rotate(-10deg)`,opacity:1,offset:.35},
   {transform:`translate(${x*.72}px,${y*.84}px) scale(${Math.max(scale,.45)}) rotate(-5deg)`,opacity:1,offset:.78},
   {transform:`translate(${x}px,${y}px) scale(${scale})`,opacity:0,offset:1}
  ],{duration:1400,easing:'cubic-bezier(.45,0,.2,1)',fill:'forwards'}));
  animations.push(glass.animate([{transform:'translateY(0)'},{transform:'translateY(-100%)'}],{duration:1450,delay:200,easing:'cubic-bezier(.65,0,.2,1)',fill:'forwards'}));
  timers.push(setTimeout(()=>root.classList.add('home-intro-arriving'),1050));
  timers.push(setTimeout(finish,1650));
 },850));
 timers.push(setTimeout(finish,3500));
})();
