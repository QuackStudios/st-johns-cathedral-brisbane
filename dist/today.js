/* Regular timetable: Cathedral /services/ detailed SERVICE TIMES, checked 2 Nov 2026.
   Calendar: APBA principal festivals and selected commemorations. Local annual
   transfers/dedications and timetable exceptions belong in dateOverrides below.
   Sources and coverage notes: CALENDAR_NOTES.md. No external live feed assumed. */
(function(root){
 const dateOverrides={};
 const fixed={
 '1-1':['The Naming of Jesus','White'],'1-6':['The Epiphany','White'],
 '1-25':['The Conversion of Paul','White'],'2-2':['The Presentation of Christ','White'],
 '2-24':['Matthias','Red'],'3-19':['Joseph','White'],'3-25':['The Annunciation','White'],
 '4-25':['Mark the Evangelist / ANZAC Day','Red'],'5-1':['Philip and James','Red'],
 '5-31':['The Visitation','White'],'6-11':['Barnabas','Red'],'6-24':['The Birth of John the Baptist','White'],
 '6-29':['Peter and Paul','Red'],'7-1':['Coming of the Light','White'],'7-22':['Mary Magdalene','White'],
 '7-25':['James','Red'],'8-6':['The Transfiguration','White'],'8-15':['Mary, Mother of the Lord','White'],
 '8-24':['Bartholomew','Red'],'9-2':['Martyrs of New Guinea','Red'],'9-14':['Holy Cross','Red'],
 '9-21':['Matthew','Red'],'9-29':['Michael and All Angels','White'],'10-4':['Francis of Assisi','White'],
 '10-18':['Luke','Red'],'10-28':['Simon and Jude','Red'],'11-1':['All Saints’ Day','White'],
 '11-2':['All Souls’ Day','Violet'],'11-3':['Richard Hooker','White'],
 '11-8':['Saints and teachers of the Anglican Communion','White'],'11-10':['Leo of Rome','White'],
 '11-11':['Martin of Tours','White'],'11-12':['Charles Simeon','White'],'11-16':['Margaret of Scotland','White'],
 '11-17':['Hilda of Whitby / Hugh of Lincoln','White'],'11-19':['Elisabeth of Hungary','White'],
 '11-23':['Clement of Rome','Red'],'11-25':['James Noble','White'],'11-30':['Andrew','Red'],
 '12-6':['Nicholas of Myra','White'],'12-21':['Thomas','Red'],'12-25':['Christmas Day','White'],
 '12-26':['Stephen','Red'],'12-27':['John the Evangelist','White'],'12-28':['The Holy Innocents','Red']};
 const day=86400000;
 function easter(y){const a=y%19,b=Math.floor(y/100),c=y%100,d=Math.floor(b/4),e=b%4,f=Math.floor((b+8)/25),g=Math.floor((b-f+1)/3),h=(19*a+b-d-g+15)%30,i=Math.floor(c/4),k=c%4,l=(32+2*e+2*i-h-k)%7,m=Math.floor((a+11*h+22*l)/451),n=h+l-7*m+114;return Date.UTC(y,Math.floor(n/31)-1,n%31+1)}
 function calendar(y,m,d){const t=Date.UTC(y,m-1,d),e=easter(y),offset=Math.round((t-e)/day),dow=new Date(t).getUTCDay();const christmas=Date.UTC(y,11,25),advent=Date.UTC(y,10,27)+(7-new Date(Date.UTC(y,10,27)).getUTCDay())%7*day;
 let season=['After Pentecost','Green'];
 if(t>=advent&&t<christmas)season=['Advent','Violet'];
 else if(m===12&&d>=25||m===1&&d<=5)season=['Christmas','White'];
 else if(offset>=-46&&offset<0)season=['Lent','Violet'];
 else if(offset>=0&&offset<49)season=['Easter','White'];
 else if(m<=2&&offset< -46)season=['After Epiphany','Green'];
 const movable={[-46]:['Ash Wednesday','Violet'],[-7]:['Palm Sunday','Red'],[-3]:['Maundy Thursday','White'],[-2]:['Good Friday','Red'],[-1]:['Holy Saturday','Violet'],[0]:['Easter Day','White'],[39]:['Ascension Day','White'],[49]:['Pentecost','Red'],[56]:['Trinity Sunday','White']};
 if(m===1&&d>=7&&d<=13&&dow===0)return {name:'The Baptism of Jesus',colour:'White',season:season[0]};
 if(t===advent-7*day)return {name:'Christ the King',colour:'White',season:season[0]};
 if(movable[offset])return {name:movable[offset][0],colour:movable[offset][1],season:season[0]};
 const feast=fixed[m+'-'+d];
 // Sundays and Holy Week/Easter octave take precedence; a local transfer needs an annual override.
 if(feast&&(!(dow===0)||['1-6','11-1','12-25'].includes(m+'-'+d))&&!(offset>-7&&offset<7))return {name:feast[0],colour:feast[1],season:season[0]};
 return {name:season[0],colour:season[1],season:season[0]};}
 function brisbane(now){const p=Object.fromEntries(new Intl.DateTimeFormat('en-AU',{timeZone:'Australia/Brisbane',year:'numeric',month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(now).map(x=>[x.type,x.value]));return {y:+p.year,m:+p.month,d:+p.day,minutes:+p.hour*60+(+p.minute)}}
 function services(y,m,d){const key=`${y}-${String(m).padStart(2,'0')}-${String(d).padStart(2,'0')}`;if(dateOverrides[key]?.services)return dateOverrides[key].services;const dow=new Date(Date.UTC(y,m-1,d)).getUTCDay();if(dow===0)return [[450,'Holy Eucharist'],[570,'Choral Eucharist'],[1020,'Holy Eucharist'],[1080,'Choral Evensong']];if(dow===6)return [];const list=[[510,'Morning Prayer'],[960,'Evening Prayer']];if([2,3,5].includes(dow))list.splice(1,0,[750,'Holy Eucharist']);if(dow===5)list.unshift([420,'Holy Eucharist']);return list;}
 function state(now=new Date()){const b=brisbane(now),list=services(b.y,b.m,b.d);return {...b,list,next:list.findIndex(s=>s[0]>=b.minutes),observance:dateOverrides[`${b.y}-${String(b.m).padStart(2,'0')}-${String(b.d).padStart(2,'0')}`]?.observance||calendar(b.y,b.m,b.d)}}
 const time=n=>`${Math.floor(n/60)%12||12}:${String(n%60).padStart(2,'0')} ${n>=720?'PM':'AM'}`;
 function render(){const panel=document.getElementById('today-services');if(!panel)return;const s=state(),date=new Date(Date.UTC(s.y,s.m-1,s.d));document.getElementById('today-date').textContent=new Intl.DateTimeFormat('en-AU',{timeZone:'UTC',weekday:'long',day:'numeric',month:'long',year:'numeric'}).format(date)+' · Brisbane';
 const colours={White:'#fff',Green:'#35664c',Violet:'#745480',Red:'#a23938'};
 document.getElementById('today-observance').innerHTML=`<span class="liturgical-dot" style="background:${colours[s.observance.colour]}" aria-hidden="true"></span><div><strong>${s.observance.name}</strong><small>${s.observance.colour} · ${s.observance.season}</small></div>`;
 const summary=!s.list.length?'No regular Services published for today.':s.next<0?'Today’s regular Services have all begun.':`Next Service · ${time(s.list[s.next][0])} — ${s.list[s.next][1]}`;
 const status=document.getElementById('today-summary');if(status.textContent!==summary)status.textContent=summary;
 document.getElementById('today-list').innerHTML=s.list.map(([n,title],i)=>`<li class="${n<s.minutes?'service-passed':i===s.next?'service-next':''}"><time datetime="${String(Math.floor(n/60)).padStart(2,'0')}:${String(n%60).padStart(2,'0')}">${time(n)}</time><span>${title}</span><small>${n<s.minutes?'Started':i===s.next?'Next Service':'Later today'}</small></li>`).join('')||'<li class="no-services">Special Services may be scheduled. View the full schedule for details.</li>';
 }
 if(typeof module!=='undefined'&&module.exports)module.exports={state,calendar,services,brisbane,easter};
 if(typeof document!=='undefined'){render();setInterval(render,30000);document.addEventListener('visibilitychange',()=>{if(!document.hidden)render()});}
})(typeof globalThis!=='undefined'?globalThis:this);
