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
  root.classList.remove('home-intro-pending','home-intro-arriving','home-intro-launch');
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
  // Turn into the route before accelerating, rather than sliding an upright emblem.
  const heading=Math.atan2(-y,-x)*180/Math.PI;
  const bank=Math.max(-44,Math.min(-12,heading-72));
  root.classList.add('home-intro-launch');
  animations.push(mark.animate([
   {transform:'perspective(600px) translate(0,0) rotate(0deg) rotateY(0deg) scale(1)',opacity:1,offset:0},
   {transform:`perspective(600px) translate(${x*.025}px,-18px) rotate(${bank*.7}deg) rotateY(24deg) scale(.98)`,opacity:1,offset:.16},
   {transform:`perspective(600px) translate(${x*.14}px,${y*.18}px) rotate(${bank}deg) rotateY(28deg) scale(.88)`,opacity:1,offset:.34},
   {transform:`perspective(600px) translate(${x*.7}px,${y*.75}px) rotate(${bank*.78}deg) rotateY(18deg) scale(${Math.max(scale,.5)})`,opacity:1,offset:.7},
   {transform:`perspective(600px) translate(${x*.96}px,${y*.98}px) rotate(${bank*.3}deg) rotateY(6deg) scale(${scale*1.08})`,opacity:1,offset:.88},
   {transform:`perspective(600px) translate(${x}px,${y}px) rotate(0deg) rotateY(0deg) scale(${scale})`,opacity:0,offset:1}
  ],{duration:1400,easing:'cubic-bezier(.4,0,.2,1)',fill:'forwards'}));
  const rearProfile=intro.querySelector('.home-intro-rear-profile');
  if(rearProfile?.animate)animations.push(rearProfile.animate([
   {transform:'scaleX(1)',offset:0},
   {transform:'scaleX(.72)',offset:.34},
   {transform:'scaleX(.82)',offset:.7},
   {transform:'scaleX(1)',offset:1}
  ],{duration:1400,easing:'ease-in-out',fill:'forwards'}));
  animations.push(glass.animate([{transform:'translateY(0)'},{transform:'translateY(-100%)'}],{duration:1450,delay:200,easing:'cubic-bezier(.65,0,.2,1)',fill:'forwards'}));
  timers.push(setTimeout(()=>root.classList.add('home-intro-arriving'),1050));
  timers.push(setTimeout(finish,1650));
 },850));
 timers.push(setTimeout(finish,3500));
})();
