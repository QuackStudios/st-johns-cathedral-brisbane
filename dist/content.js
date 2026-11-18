/* Editorial content compiled from the Cathedral, Diocese and Anglican Church sources. */
const editorialPages={};
function article(keys,eyebrow,dek,image,sections,source,extras={}){keys.split('|').forEach(key=>editorialPages[key]={eyebrow,dek,image,sections,source,...extras})}
const cathedralBase='https://www.stjohnscathedral.com.au/';
article('cathedral-history-and-heritage','A CATHEDRAL IN THE MAKING','A vision carried across generations. A building that continues to hold the life of a city.','carving.jpg',[
 ['The beginning of a long ambition','Bishop William Webber’s vision for Brisbane was a cathedral of enduring architectural and spiritual significance. He commissioned John Loughborough Pearson, whose work included Truro Cathedral in Cornwall. Following Pearson’s death, his son Frank continued the design.'],
 ['Built across a century','The foundation stone was laid in 1901. Construction followed in three major campaigns, as successive generations gave their skills, resources and care to the same endeavour. The completed building was consecrated in 2009.'],
 ['A place that is still becoming','Its story continues in the work of musicians, guides, clergy, volunteers and the people who worship here. Heritage is experienced through daily use: a voice lifted into the vaults, a procession through the nave, a visitor discovering a quiet corner.']
],cathedralBase+'discover-st-johns/',{timeline:[['1901','The foundation stone is laid.'],['1906–1910','The first stage of construction.'],['1964–1968','A second major building campaign.'],['1989–2009','The final construction stage.'],['2009','Completion and consecration.']],secondarySource:['The foundation stone story','https://anglicanfocus.org.au/2021/12/14/cathedral-foundation-stone-celebrating-120-years/']});
article('art-and-architecture|explore-the-cathedral','STONE, LIGHT & CRAFT','Look closely. Every surface has something to reveal.','hero.jpg',[
 ['A conversation between stone and light','Slender columns, pointed arches and a fully stone-vaulted ceiling draw the eye upwards. The interior is built from Helidon sandstone; the exterior also features Brisbane tuff, with its distinctive pink and lavender tones.'],
 ['Designed to be experienced','The Gothic Revival building gathers influences from English and French cathedral architecture. Move slowly from the nave towards the sanctuary, noticing how proportion, changing light and the rhythm of the columns shape the experience.'],
 ['An invitation to look again','Take time for the choir stalls, carved details, windows and memorials. A guided visit offers another way to read the building: as a place of craftsmanship, memory and continuing worship.']
],cathedralBase+'discover-st-johns/',{facts:[['Material','Helidon sandstone'],['Architecture','Gothic Revival'],['Experience','Art, light and living worship']]});
article('the-cathedral-and-the-diocese','A CHURCH WITHIN A WIDER CHURCH','The mother church of the Diocese of Brisbane. A meeting place for a much wider community.','peace.jpg',[
 ['What makes a cathedral?','A cathedral takes its name from the cathedra: the bishop’s official seat. At St John’s, this relationship connects the local congregation to the Archbishop and to Anglican communities throughout Southern Queensland.'],
 ['A shared history','The Diocese of Brisbane was established in 1859. Its life has grown through parishes, schools, chaplaincies, community services and ministry across the region. The Cathedral is one part of this wider story of worship and service.'],
 ['Local welcome. Regional belonging.','The Cathedral serves its own congregation while also gathering people for occasions that reach beyond a single parish. Visitors can encounter the life of a local church and the broader traditions of Anglicanism in the same place.']
],'https://anglicanchurchsq.org.au/',{secondarySource:['History of bishops and archbishops','https://anglicanchurchsq.org.au/bishops-and-archbishops'],facts:[['1859','Diocese established'],['Brisbane','Cathedral city'],['Southern Queensland','Our wider church community']]});
article('the-anglican-faith','AN ANCIENT FAITH. AN OPEN CONVERSATION.','Scripture, shared prayer and sacramental life, lived in conversation with the world.','mass.jpg',[
 ['Christian faith, expressed together','Anglicans share the Christian faith expressed in the Apostles’ and Nicene Creeds. The Bible is central to faith and worship; baptism and Holy Communion stand at the heart of sacramental life.'],
 ['A tradition with many voices','Anglicanism has roots in the Church of England and brings together strands of early Christianity, the medieval church and the Reformation. Across the Communion, different cultures give distinct expression to a shared tradition.'],
 ['Begin where you are','You do not need to understand every word or gesture before attending. Listen to the readings, let the prayers become familiar, and ask questions. Exploring faith can begin with simply being present.']
],'https://anglican.org.au/about-us/what-we-believe/',{secondarySource:['Being Anglican in Southern Queensland','https://anglicanchurchsq.org.au/being-anglican']});
article('welcome-to-st-johns|mission-and-vision','FAITH. BEAUTY. BELONGING.','A place to worship, to wonder, and to discover what it means to live well together.','sanctuary.jpg',[
 ['A living place in a changing city','The Cathedral is both a place of Christian worship and a public space for encounter. People come with a settled faith, with difficult questions, for music, or simply for a pause in the day.'],
 ['Tradition in conversation','St John’s seeks to bring Anglican tradition into dialogue with contemporary life. Its welcome is expressed through worship, open conversation, spiritual reflection and a concern for how beliefs become action.'],
 ['Find your way in','Attend a Service, explore the building, follow a conversation online or become part of the congregation. Your first visit need not come with a plan.']
],cathedralBase,{links:['Worship at St John’s','Plan Your Visit','Our Congregation']});
article('worship-at-st-johns|the-eucharist','GATHERED IN PRAYER','An ordinary week. An extraordinary invitation to pause, listen and share.','mass.jpg',[
 ['At the heart of worship','The Eucharist brings together scripture, prayer, thanksgiving and the sharing of bread and wine. Across the week, spoken and choral worship offer different ways to enter this shared life.'],
 ['Choose a Sunday Service','The regular Sunday pattern includes Holy Eucharist at 7:30 AM, Choral Eucharist at 9:30 AM, Holy Eucharist at 5:00 PM and Choral Evensong at 6:00 PM. Festival and seasonal arrangements may differ.'],
 ['Your first time','Take a seat, follow the Service notes and participate as you feel comfortable. If you are unsure about a part of the liturgy, ask a welcomer or member of the clergy.']
],cathedralBase+'services/',{links:['Service Times','Watch Online','Children’s Ministry']});
article('choral-evensong','MUSIC AT THE DAY’S END','Let the day settle into a different rhythm.','carving.jpg',[
 ['A tradition of sung prayer','Choral Evensong is an Anglican evening office in which psalms, readings and choral music form a space for attentive listening. The choir gives voice to much of the liturgy; you can allow the music to carry your reflection.'],
 ['Come and listen','The Cathedral’s regular Sunday Evensong is at 6:00 PM. During Advent, special evening offerings replace the usual pattern. Consult the current schedule for the Service you intend to attend.'],
 ['Join from wherever you are','The Cathedral also streams Sunday Evensong. Listening online can introduce you to the shape of the Service before visiting in person.']
],cathedralBase+'services/',{links:['Service Times','Music in Worship','Watch Online']});
article('prayer-at-the-cathedral|the-churchs-year','A RHYTHM BEYOND THE EVERYDAY','Prayer gives shape to the day; the Christian year gives shape to the seasons.','candles.jpg',[
 ['A daily practice','Morning and Evening Prayer create a rhythm of scripture, silence and intercession. You can join a shared office or visit the Cathedral for personal prayer.'],
 ['The story we return to','Advent, Christmas, Lent, Holy Week, Easter and Pentecost invite the church to inhabit the story of Christ through changing readings, music and liturgical colour. Ordinary Time gives room to carry that story into daily life.'],
 ['Begin simply','Sit for a few moments. Bring a concern, remember someone you love, or let the quiet be enough. For a particular Service or festival, check the current Cathedral programme.']
],'https://anglican.org.au/our-work/liturgy-worship/',{links:['Service Times','The Labyrinth','Daily Devotions']});
article('watch-online|sermons-and-service-notes','THE CATHEDRAL, WHEREVER YOU ARE','Stay connected through streamed worship, readings and reflection.','gathering.jpg',[
 ['Join Sunday worship','The Cathedral’s YouTube channel carries its streamed worship. The regular streaming pattern includes the 7:30 AM and 9:30 AM Eucharists and 6:00 PM Evensong.'],
 ['Follow the liturgy','Service notes on the Cathedral’s current website contain the readings, prayers and music for the relevant Sunday. Use these alongside the stream or bring them into your own preparation.'],
 ['Return in your own time','Recordings make it possible to revisit a Service or listen when you can. The sermon archive offers another way to follow the conversation between faith, scripture and contemporary life.']
],cathedralBase,{resource:['Open the Cathedral’s YouTube channel','https://www.youtube.com/@StJohnsCathedralBris/streams'],secondarySource:['Sermon archive',cathedralBase+'sermons/']});
article('children-and-families|childrens-ministry','SMALL PEOPLE. A FULL PLACE IN OUR LIFE.','Children bring their curiosity, energy and questions into Cathedral life.','font.jpg',[
 ['Worship across generations','Children’s Ministry accompanies the regular Sunday 9:30 AM Choral Eucharist. The Cathedral’s children’s area provides space for stories, activities and participation in a way that recognises different ages and attention spans.'],
 ['Make yourself at home','A play area, toys and colouring materials are part of the Cathedral’s welcome to families. Ask a welcomer about the best place for your family to sit and how children can take part.'],
 ['Celebrate a beginning','For families thinking about baptism, the Cathedral team can talk through preparation and the shape of a baptism Service. Bring your questions before making arrangements.']
],cathedralBase+'services/',{links:['Baptisms','Service Times','Join the Congregation']});
article('music-at-st-johns|music-in-worship','A BUILDING MADE TO RESONATE','Music belongs to the Cathedral’s daily life, not only to its special occasions.','organ.jpg',[
 ['Voices within the stone','Choral music accompanies the Cathedral’s worship, bringing text, breath and the building’s acoustic into a single experience. Choirs and organ give different voices to the church’s seasons.'],
 ['Listen in more than one way','A Service, a recital and a concert offer different encounters with the same space. Come for a familiar piece or let an unfamiliar work open a new way of listening.'],
 ['A tradition sustained by people','Singers, musicians, teachers and supporters keep Cathedral music alive. Discover the choirs, explore opportunities and learn how the Choral Music Trust supports this work.']
],cathedralBase+'music/',{links:['The Cathedral Choir','Concerts and Recitals','The Choral Music Trust']});
article('the-cathedral-choir|choirs-and-choristers|music-opportunities','A LIFE IN SONG','Musical discipline, shared purpose and the pleasure of singing together.','choir.jpg',[
 ['The Cathedral Choir','Boy choristers sing the treble line alongside adult Lay Clerks. The chorister tradition connects the Cathedral with Anglican Church Grammar School and a structured musical education.'],
 ['Many voices','The Girl Choristers, Cathedral Singers and Cathedral Chamber Choir contribute to a varied musical life. Each ensemble brings its own role to worship and performance.'],
 ['Explore an opportunity','Choir membership and chorister opportunities have their own requirements and application processes. Read the current choir information and speak with the music team about the appropriate pathway.']
],cathedralBase+'choirs/',{links:['Our Musicians','Music in Worship','The Choral Music Trust']});
article('the-cathedral-organs','AN INSTRUMENT WITH A HISTORY','Thousands of pipes. One remarkable voice.','organ.jpg',[
 ['An instrument shaped for its setting','The Cathedral organ grew alongside the building. Its story includes the early twentieth-century work of Norman and Beard and a major rebuilding during the 1970s.'],
 ['Architecture you can hear','High stone vaults and Gothic arches help create the acoustic in which the organ is heard. Sound moves through the same space that visitors experience through stone, light and proportion.'],
 ['Hear it for yourself','Organ music is part of worship and the recital programme. Explore the Cathedral’s organ history and look for a forthcoming opportunity to listen.']
],cathedralBase+'the-cathedral-organ/',{facts:[['4,500+','Pipes'],['Worship','A living liturgical instrument'],['Recitals','Music beyond the Service']],links:['Concerts and Recitals','Music in Worship']});
article('concerts-and-recitals|brisbane-contemporary-church-music-festival','ROOM FOR THE UNEXPECTED','A remarkable acoustic. An invitation to listen closely.','gathering.jpg',[
 ['Music beyond Sunday','The Cathedral presents and hosts concerts, organ recitals and performances across musical traditions. The building’s scale and resonance give each performance a distinctive setting.'],
 ['Tradition meets the contemporary','The Brisbane Contemporary Church Music Festival brings contemporary choral and organ music into conversation with the liturgy. The broader programme also welcomes visiting musicians and ensembles.'],
 ['Make a plan','Check the current events programme for performers, dates, ticketing and access arrangements. Programme details belong to individual events and can change.']
],cathedralBase+'music/',{resource:['View the current events programme',cathedralBase+'whats-on/']});
article('plan-your-visit|opening-hours-and-getting-here','YOUR FIRST VISIT STARTS HERE','Leave the city’s pace at the door.','hero.jpg',[
 ['Find the Cathedral','St John’s stands on Ann Street between the central city and Fortitude Valley. Central Station is a short walk away. The Cathedral precinct also contains the Deanery and St Martin’s House.'],
 ['Come with time to look','The Cathedral’s published visitor hours are 9:30 AM–4:30 PM daily. Services, rehearsals, private occasions and special events may affect access to particular areas.'],
 ['Arrive with confidence','Accessible entrances are on the northern carpark and southern St Martin’s courtyard sides. Onsite parking is limited; check current transport and parking information before travelling.']
],cathedralBase+'contact-us/',{facts:[['9:30 AM–4:30 PM','Published visitor hours'],['Ann Street','Brisbane city'],['Central Station','A short walk away']],links:['Accessibility','Guided Tours','Cathedral Shop']});
article('accessibility','A WELCOME THAT CONSIDERS YOU','Plan your visit around the access and support you need.','hero.jpg',[
 ['Getting into the building','The Cathedral publishes accessible entry via the northern carpark and the southern St Martin’s courtyard. Please contact the office if you need help planning a route or have a particular access requirement.'],
 ['For a Service or event','Let the team know if seating, mobility, hearing or other support would make attending easier. Arrangements may depend on the Service, event or area of the building being used.'],
 ['Reading this website','Use the Accessibility button to adjust text size, contrast, spacing and motion. Menus support keyboard navigation, and the skip link takes you directly to the main content.']
],cathedralBase+'contact-us/',{resource:['Discuss your visit with the office','mailto:cathedral@stjohnscathedral.com.au']});
article('guided-tours|virtual-tour','DISCOVER THE STORIES IN THE STONE','See more with a guide. Or begin exploring from home.','carving.jpg',[
 ['Look beyond the first impression','A guided visit offers context for the architecture, windows, memorials and daily life of the Cathedral. It is an opportunity to ask about details that might otherwise pass unnoticed.'],
 ['Arrange a visit','Contact the Cathedral about current tour options and group arrangements. Share your preferred date, group size, access needs and particular interests so the team can advise.'],
 ['Begin online','The Cathedral’s discovery page includes a virtual tour. Use it to explore the shape of the building before arriving, or to return to a place that caught your attention.']
],cathedralBase+'discover-st-johns/',{resource:['Enquire about tours','mailto:community@stjohnscathedral.com.au']});
article('the-bells','THE CITY’S SUNDAY SOUNDTRACK','A tradition carried by people, practice and twelve bells.','carving.jpg',[
 ['More than a sound in the skyline','The Cathedral’s twelve bells are arranged for English-style change ringing. Volunteer ringers combine physical skill, timing and concentration to create the changing patterns heard across the city.'],
 ['A history before this building','The bells were first acquired by public subscription in 1876 for the earlier Pro-Cathedral. They moved to the present site in 1910, beginning another chapter in a continuing story.'],
 ['A living craft','The bells accompany Sunday worship and special occasions. If you are curious about ringing, the Cathedral’s discovery information explains how to connect with the ringers.']
],cathedralBase+'discover-st-johns/',{facts:[['12','Bells'],['1876','First purchased by subscription'],['Volunteer ringers','Keeping the tradition alive']]});
article('sacred-spaces-and-chapels|stained-glass-art-and-memorials','AN INVITATION TO LOOK CLOSELY','Places of remembrance, changing light and quiet prayer.','light.jpg',[
 ['Light changes the building','Stained glass transforms the Cathedral throughout the day. Colour falls across stone and furnishings, revealing a building that never looks quite the same on two visits.'],
 ['Memory within a living church','Art and memorials hold stories of people, faith and the wider community. Encounter them within a place still used for worship, rather than as objects separated from everyday life.'],
 ['Explore with care','Allow space for people praying or attending a Service. A guided tour or the Cathedral’s art resources can deepen your understanding of individual works and their setting.']
],cathedralBase+'discover-st-johns/',{links:['Art and Architecture','Guided Tours','Prayer at the Cathedral']});
article('baptisms','A BEGINNING IN WATER & WELCOME','An invitation into the shared life of Christian faith.','font.jpg',[
 ['A sacrament of belonging','In Anglican worship, baptism marks entry into the life of the Church. Water and prayer express a new beginning, received within a community that promises support.'],
 ['Bring your questions','Whether you are enquiring for yourself or for a child, begin with a conversation. The Cathedral team can explain preparation, the role of sponsors or godparents, and how a baptism fits into worship.'],
 ['Take the first step','Contact the Cathedral office before making plans. You do not need to have every detail settled to ask about baptism and what it could mean for you or your family.']
],'https://anglican.org.au/our-work/liturgy-worship/',{resource:['Ask about baptism','mailto:cathedral@stjohnscathedral.com.au'],links:['Children and Families','Exploring Faith and Confirmation']});
article('weddings','A PROMISE, HELD IN A SACRED PLACE','A celebration of love, witnessed by the people who matter to you.','wedding3.jpg',[
 ['A setting for your promises','Exchange vows in a living church, surrounded by stained glass, stone vaults and the people you have invited to witness them. The marriage Service places those promises within prayer and blessing.'],
 ['Begin with a conversation','You can contact the Cathedral before choosing a date or settling the details. Discuss your hopes, ask about preparation and explore the possibilities for readings and music with the team.'],
 ['Plan with the Cathedral','The events team provides current information about availability, booking and arrangements. Request the wedding brochure and speak with them before committing to other suppliers.']
],cathedralBase+'weddings/',{resource:['Begin your wedding enquiry','mailto:events@stjohnscathedral.com.au'],links:['Music at St John’s','Plan Your Visit']});
article('funerals-and-memorials|pastoral-care','CARE IN THE MOMENTS THAT MATTER','A conversation, a prayer, and space to be heard.','candles.jpg',[
 ['You do not need to find all the words','Times of grief, illness, change or uncertainty can leave little room for planning. Begin by contacting the Cathedral office and asking to speak with a member of the clergy about pastoral support.'],
 ['Remembering a life','For a funeral or memorial enquiry, the team can discuss the shape of a Service, readings, music and arrangements. Share what is important to you and the people who will gather.'],
 ['Find the right next step','The Cathedral office can direct your enquiry to the appropriate person. For an immediate emergency, call 000; the office is not an emergency response service.']
],cathedralBase+'contact-us/',{resource:['Contact the Cathedral office','tel:+61738352222']});
article('our-congregation|join-the-congregation|ministries-and-fellowship','A PLACE TO BELONG','Shared worship becomes shared life, one conversation at a time.','sanctuary.jpg',[
 ['Start by coming along','There is no single story behind the people who gather at St John’s. Some have a long connection to Anglican worship; others are returning, questioning or visiting for the first time.'],
 ['Make a connection','Stay after a Service when there is an opportunity to meet others. Ask a welcomer about community notices and ways to hear about the Cathedral’s gatherings, conversations and activities.'],
 ['Let belonging grow','Regular worship, fellowship, learning and volunteering offer different ways to participate. Begin with something that fits your life, and talk with the team about where you might contribute.']
],cathedralBase+'community/',{links:['Service Times','Volunteering','Cathedral Community News']});
article('cathedral-community-news|news-and-media|news-and-stories','THE LIFE BETWEEN THE SERVICES','Stories, notices and conversations from a living community.','peace.jpg',[
 ['Keep up with Cathedral life','The community page brings together notices and publications that help people stay connected. These sit alongside the events programme and the Cathedral’s channels for worship and reflection.'],
 ['Read beyond the headlines','The Eagle offers a longer form of conversation, making room for reflection on faith and the questions of contemporary life. Community notices provide the more practical rhythm of what is coming up.'],
 ['Find the current edition','Read the Cathedral’s existing community page for the latest publications. For media enquiries or information about a particular story, contact the office.']
],cathedralBase+'community/',{resource:['Read current Cathedral publications',cathedralBase+'community/']});
article('volunteering|get-involved','YOUR TIME CAN MAKE A DIFFERENCE','Bring your skills, curiosity and care into the life of the Cathedral.','gathering.jpg',[
 ['Many ways to contribute','A living Cathedral depends on people who welcome, organise, guide, sing, care and help behind the scenes. The right opportunity begins with a conversation about your interests and availability.'],
 ['Find an appropriate role','Contact the office to ask about current needs, preparation and any screening or training that applies. Roles vary, and some require particular experience or a regular commitment.'],
 ['Take a practical next step','Tell the team what you enjoy doing, how often you can help and whether you need support to participate. There is no need to arrive with a perfect role already in mind.']
],cathedralBase+'contact-us/',{resource:['Ask about volunteering','mailto:cathedral@stjohnscathedral.com.au']});
article('faith-and-spirituality-at-st-johns|exploring-faith-and-confirmation|a-better-way','MAKE ROOM FOR THE QUESTIONS','Faith can begin with curiosity, a conversation, or the sense that there is more to explore.','light.jpg',[
 ['An invitation to explore','The Cathedral’s spiritual life includes worship, reflection and conversation. You can approach Christian faith through its practices as well as its ideas: by praying, listening, learning and sharing life with others.'],
 ['Find a way of beginning','For some people, a Sunday Service is the starting point. For others, it is meditation, a podcast or a discussion. Those considering baptism or confirmation can ask the clergy about preparation and opportunities to learn.'],
 ['Bring your own experience','Questions about meaning, belief, doubt and vocation belong in the conversation. Begin where you are, and let the next step emerge through attention and dialogue.']
],cathedralBase+'spirituality/',{links:['The Anglican Faith','Christian Meditation','On the Way Podcast']});
article('the-labyrinth','A PATH WITH ROOM TO PAUSE','Walk slowly. Attend to what you notice.','light.jpg',[
 ['Prayer in movement','A labyrinth offers a path for reflection rather than a puzzle to solve. Its simple invitation is to walk, pay attention and allow a different pace to shape your thoughts.'],
 ['Walk with others','The Cathedral publishes a regular labyrinth walk on the first Sunday of the month following the 9:30 AM Eucharist, with an online offering as well. Check current notices for the particular walk.'],
 ['Continue from home','Walking notes, archived reflections and a finger labyrinth make it possible to explore this practice beyond the building. Use the Cathedral’s labyrinth resources to find a starting point.']
],cathedralBase+'spirituality/labyrinth/',{resource:['Explore the labyrinth resources',cathedralBase+'spirituality/labyrinth/']});
article('christian-meditation','STILLNESS, SILENCE & ATTENTION','An ancient practice, offered within the life of a contemporary city.','candles.jpg',[
 ['A prayer of attention','Christian meditation invites stillness of body and mind, making room for attentive presence. It belongs to the contemplative stream of Christian spirituality and can be approached without prior experience.'],
 ['Practise together','The Cathedral advertises a weekly Tuesday meditation group at 6:45 PM. Both people new to meditation and those with an established practice are welcome to explore it.'],
 ['Before you come','Consult current notices for access, online participation and any shared meal arrangements. The published spiritual life pages contain further reflections and resources.']
],cathedralBase+'spirituality/meditation/',{resource:['Read the meditation resources',cathedralBase+'spirituality/meditation/']});
article('on-the-way-podcast','A CONVERSATION TO TAKE WITH YOU','Faith, meaning and beauty, explored through the experiences of others.','light.jpg',[
 ['Listen beyond the familiar','On the Way is the Cathedral’s series of recorded conversations about spirituality and contemporary life. It invites a reflective engagement with questions that do not always have quick answers.'],
 ['At your own pace','Listen while walking, travelling, or making room for a quiet hour. You can begin with a topic that catches your attention rather than following a prescribed order.'],
 ['Find an episode','The Cathedral’s podcast page links to its published conversations and listening platforms. Explore the archive for the subjects and voices that speak to your own questions.']
],cathedralBase+'podcasts/',{resource:['Browse On the Way episodes',cathedralBase+'podcasts/']});
article('daily-devotions|weekly-reflections|reflections-and-resources|saints-on-a-mission|theologians-and-god-botherers','FAITH IN CONVERSATION WITH LIFE','A practice of returning: to a story, a question, a prayer.','carving.jpg',[
 ['Make time to reflect','Cathedral resources connect Christian tradition with contemporary experience through scripture, spiritual writing and conversation. They offer starting points for personal reflection and discussion with others.'],
 ['Follow a thread','Weekly reflections consider the meeting of faith and everyday life. Saints on a Mission explores the continuing significance of ancient stories and feast days; other conversations introduce thinkers and spiritual traditions.'],
 ['Choose your next encounter','Read the current resources and programme for the subject, dates and participation details that interest you. You can listen first, revisit a theme, or bring a question to a future gathering.']
],cathedralBase+'spirituality/',{resource:['Read current spiritual life resources',cathedralBase+'spirituality/']});
article('our-work|ministries-and-outreach','FAITH THAT MOVES INTO THE WORLD','Prayer and practical care belong in the same life.','outreach.jpg',[
 ['Beyond the Cathedral doors','The Cathedral’s advocacy and community life ask what Christian faith means in public. Care for neighbours, attention to exclusion and responsibility for the earth form part of that conversation.'],
 ['A wider network of care','Across Southern Queensland, Anglican parishes, schools, chaplaincies and community services express ministry in different settings. Cathedral life sits within this wider network of people and institutions.'],
 ['Find a way to take part','Explore the advocacy areas, follow current notices and ask about opportunities to contribute. Start with an issue or a practical commitment that you are prepared to understand and sustain.']
],cathedralBase+'advocacy/',{secondarySource:['The wider Anglican community','https://anglicanchurchsq.org.au/what-we-do'],links:['Environment and Climate','Community Belonging','Get Involved']});
article('environment-and-climate','CARING FOR OUR COMMON HOME','Creation care connects spiritual responsibility with the choices of everyday life.','outreach.jpg',[
 ['A question of faith and action','The Cathedral’s environmental advocacy connects with the Anglican commitment to protect creation and the life it sustains. It asks communities to consider how their practices affect their neighbours and the earth.'],
 ['Make room for constructive conversation','Good communication can turn concern into shared purpose. Cathedral resources explore how language, values and local experience can help people engage with climate and creation care.'],
 ['Begin with the resources','Read the environmental material, consider how it connects to your own community, and follow current opportunities for learning and participation.']
],cathedralBase+'discover-st-johns/advocacy/environment/',{resource:['Climate and creation care resources',cathedralBase+'discover-st-johns/advocacy/environment/reframe/']});
article('aboriginal-and-torres-strait-islander-peoples','COUNTRY, RELATIONSHIP & RECONCILIATION','Listening with respect. Learning with humility.','peace.jpg',[
 ['Begin with acknowledgement','The Cathedral stands within a place whose stories and custodianship long precede the building. Acknowledging Country recognises continuing relationships between First Peoples, land, waters and community.'],
 ['A continuing responsibility','The Diocese’s reconciliation work calls for relationships of dignity, equity and respect with Aboriginal and Torres Strait Islander peoples. Reconciliation is an ongoing practice rather than a single statement.'],
 ['Listen and learn','Explore the Diocese’s reconciliation resources and action plan. They provide context for respectful participation and opportunities to deepen understanding.']
],'https://anglicanchurchsq.org.au/reconciliation',{resource:['Explore the Diocese’s reconciliation work','https://anglicanchurchsq.org.au/reconciliation']});
article('safeguarding|domestic-abuse-working-group','DIGNITY, SAFETY & CARE','A community’s welcome must include attention to the wellbeing of the people within it.','carving.jpg',[
 ['Know where to turn','Safeguarding information should be easy to find. The Diocese publishes its policies, reporting pathways and professional standards information through its Safe Ministry resources.'],
 ['Raise a concern','Use the Diocese’s current safeguarding and complaints channels for the appropriate contact and process. Concerns about abuse require a clear pathway rather than an informal promise that they will be handled.'],
 ['Find support','For an immediate emergency, call 000. The Cathedral office can help with a pastoral enquiry; the Diocese’s safeguarding pages provide specialist reporting and support information.']
],'https://anglicanchurchsq.org.au/safeguarding',{resource:['Open safeguarding and reporting information','https://anglicanchurchsq.org.au/safeguarding']});
article('leadership-and-governance|our-clergy|the-dean-of-brisbane','PEOPLE ENTRUSTED WITH CARE','Spiritual leadership, shared responsibility and the work of a living Cathedral.','community.jpg',[
 ['Ministry in a community','Clergy and lay people contribute different gifts to Cathedral life. Leading worship is one part of a wider responsibility that includes teaching, pastoral care, stewardship and attention to the community’s future.'],
 ['The role of the Dean','The Dean’s office leads the Cathedral’s life and ministry within its relationship to the Archbishop and Diocese. The role brings together the public, pastoral and liturgical responsibilities of a cathedral church.'],
 ['Connect with the right person','For current appointments and contact arrangements, use the Cathedral office and published clergy directory. Enquiries about governance can also be directed through the office.']
],cathedralBase+'discover-st-johns/',{resource:['Contact the Cathedral office','mailto:cathedral@stjohnscathedral.com.au']});
article('the-archbishop-of-brisbane','LEADERSHIP IN THE WIDER CHURCH','The Cathedral holds the Archbishop’s seat within the Diocese of Brisbane.','peace.jpg',[
 ['Archbishop Jeremy Greaves','Jeremy Greaves was installed as Archbishop of Brisbane and Metropolitan of the Province of Queensland at St John’s Cathedral on 16 December 2023.'],
 ['A regional ministry','The Archbishop’s ministry connects the Cathedral with the church’s parishes and agencies across Southern Queensland. This wider life includes worship, education, community services and engagement with public questions.'],
 ['Read more','The Diocese’s leadership page provides the current biography and contact information for the Archbishop and regional bishops.']
],'https://anglicanchurchsq.org.au/leadership',{resource:['Meet the Diocese’s leadership','https://anglicanchurchsq.org.au/leadership']});
article('support-st-johns|make-a-donation|planned-giving|gifts-in-wills|current-appeals|caring-for-the-cathedral|st-johns-association|the-choral-music-trust','A LEGACY HELD TOGETHER','Help sustain the worship, music, welcome and craftsmanship of St John’s.','carving.jpg',[
 ['Care for a living place','A Cathedral needs more than preservation. Its daily life depends on people, skills, music, hospitality and the ongoing care of the building entrusted to each generation.'],
 ['Choose how you would like to help','Explore the Cathedral’s current giving options and appeals. Music, heritage and general ministry may have distinct funds and arrangements; read the current information for the purpose you wish to support.'],
 ['Begin a conversation','For regular giving, an intended legacy or a gift to a particular area of work, ask the office about the appropriate contact. Use the official giving page for current donation pathways.']
],cathedralBase+'give/',{resource:['View current giving options',cathedralBase+'give/']});
article('contact-us|general-enquiries|worship-and-clergy|tours-and-visiting|media-enquiries|music|cathedral-shop','LET’S FIND THE RIGHT PERSON','A clear next step for your enquiry.','carving.jpg',[
 ['The Cathedral office','For general enquiries, telephone +61 7 3835 2222 or email cathedral@stjohnscathedral.com.au. The published office hours are 9:00 AM–5:00 PM, Monday to Friday.'],
 ['A particular enquiry','For weddings and events, contact events@stjohnscathedral.com.au. Tour enquiries can be directed to community@stjohnscathedral.com.au, and shop enquiries to shop@stjohnscathedral.com.au.'],
 ['Before you visit','The Cathedral stands on Ann Street in Brisbane. Services, events and access arrangements can affect a visit, so contact the team if you have specific requirements.']
],cathedralBase+'contact-us/',{resource:['Email the Cathedral office','mailto:cathedral@stjohnscathedral.com.au']});
article('cathedral-calendar|upcoming-events|services-and-festivals|talks-and-community-events|faith-and-spirituality-events','GATHER, LISTEN, DISCOVER','Find a reason to make time for the Cathedral.','gathering.jpg',[
 ['A programme with many entry points','Services and festivals sit alongside music, reflection, conversations and community gatherings. Each offers a different way to encounter the people and space of St John’s.'],
 ['Make your own connection','Choose an event because of a performer, a subject that interests you, or the simple wish to experience the Cathedral in company. There is no single way to begin.'],
 ['Check the live programme','The existing Cathedral events page carries current notices and participation details. Confirm the date, time, ticketing and access arrangements for your chosen event before travelling.']
],cathedralBase+'whats-on/',{resource:['View the current Cathedral programme',cathedralBase+'whats-on/']});
article('our-musicians','PEOPLE BEHIND THE SOUND','Teaching, performance and the craft of listening together.','organ.jpg',[
 ['A musical team','The Cathedral’s published music directory identifies Dr Graeme Morton AM as Director of Music and Andrej Kouznetsov as Assistant Director of Music. Their work spans choral leadership, the organ and the formation of young singers.'],
 ['A shared discipline','Preparing music for worship involves much that listeners do not see: rehearsal, interpretation, teaching and attention to how words and sound serve the liturgy.'],
 ['Meet the musicians','Read the Cathedral’s current music staff biographies for backgrounds and responsibilities. For a music enquiry, begin with the Cathedral office or the contacts in the published directory.']
],cathedralBase+'music-staff/',{resource:['Read the music team biographies',cathedralBase+'music-staff/']});
article('holy-hermits-online','BELONGING BEYOND THE BUILDING','A church community that gathers online, wherever life finds you.','light.jpg',[
 ['An online expression of church','Holy Hermits Online is an ecumenical community offering worship and shared faith through digital gathering. It seeks to include people whose circumstances make access to a physical church difficult.'],
 ['Community as well as a connection','Alongside worship, the community makes room for study, care and the sharing of people’s gifts. Participation can be a short-term connection or a more regular part of life.'],
 ['Find out how to join','Read the community’s current website for worship, membership and participation details. Begin by finding out what is happening and how an online gathering works.']
],cathedralBase+'discover-st-johns/holy-hermits/',{resource:['Visit Holy Hermits Online','https://www.holyhermits.com.au/']});
article('community-belonging','CONNECTIONS THAT MATTER','Belonging grows through the quality of our relationships.','peace.jpg',[
 ['More than being in the same room','The Cathedral’s Community Belonging work considers how meaningful connection can respond to loneliness and unwanted isolation. Its concern is with relationships that carry purpose, care and mutual attention.'],
 ['A community response','People cannot create belonging entirely on their own. It asks something of the people around them: a willingness to notice, include, listen and make space for another person’s contribution.'],
 ['Explore the work','The Cathedral’s dedicated Community Belonging pages bring together programme information, resources and current developments. Read them to understand the approach and the opportunities to connect.']
],cathedralBase+'community-connections/',{resource:['Explore Community Belonging',cathedralBase+'community-connections/']});
article('refugees-and-asylum-seekers','HOSPITALITY WITH CONSEQUENCE','The question of welcome extends beyond the Cathedral doors.','sanctuary.jpg',[
 ['Faith in public life','The Cathedral’s advocacy includes attention to refugees and people seeking asylum. It sits within a commitment to social justice and the dignity of people whose lives are shaped by displacement.'],
 ['Listening before acting','Understanding another person’s circumstances asks for careful attention. Advocacy, practical care and public conversation each have a role in the church’s response to exclusion.'],
 ['Follow the Cathedral’s work','Explore the published advocacy pages for the Cathedral’s position and resources. Follow current notices to learn about opportunities for informed participation.']
],cathedralBase+'discover-st-johns/advocacy/',{resource:['Read the Cathedral’s advocacy information',cathedralBase+'discover-st-johns/advocacy/']});
// Category-specific corrections and distinct next steps.
editorialPages['cathedral-shop']={...editorialPages['cathedral-shop'],eyebrow:'TAKE SOMETHING OF THE CATHEDRAL WITH YOU',dek:'Books, gifts and a place to continue your discovery.',image:'carving.jpg',sections:[['Browse during your visit','The Cathedral Shop offers another way to connect with the building and its life. Ask about resources that relate to the architecture, faith or music that caught your attention.'],['Shop opening times','Published shop hours are 11:00 AM–2:00 PM, Monday to Friday, and after Sunday Services. Check arrangements for special occasions before making a dedicated trip.'],['Make an enquiry','For a particular item, contact shop@stjohnscathedral.com.au or visit the Cathedral’s online shop.']],source:cathedralBase+'shop/',resource:['Visit the Cathedral Shop',cathedralBase+'shop/']};
article('cathedral-reception','A FRIENDLY FIRST POINT OF CONTACT','Let us help you find the right person or plan your visit.','hero.jpg',[
 ['Speak to reception','Call +61 7 3835 2222 or email cathedral@stjohnscathedral.com.au. The published office hours are 9:00 AM–5:00 PM, Monday to Friday.'],
 ['How we can help','Reception can direct questions about worship, pastoral care, baptisms, tours, visiting and the Cathedral Shop to the appropriate team.'],
 ['Planning a visit','Tell us if you have access requirements, are bringing a group, or need advice about an occasion you plan to attend.']
],cathedralBase+'contact-us/',{resource:['Email Cathedral Reception','mailto:cathedral@stjohnscathedral.com.au']});
article('host-an-event','A REMARKABLE SETTING FOR YOUR OCCASION','Begin a conversation about gathering at St John’s.','gathering.jpg',[
 ['Tell us what you have in mind','For an event or wedding enquiry, contact events@stjohnscathedral.com.au. You can begin with an idea before dates and arrangements are final.'],
 ['Plan with the events team','Share your preferred dates, expected attendance and the kind of occasion you would like to host. The team can advise on suitability, availability and next steps.'],
 ['A living place of worship','Events take place within the continuing life of the Cathedral. The team will help you understand the arrangements appropriate to the building and your occasion.']
],cathedralBase+'contact-us/',{resource:['Email the events team','mailto:events@stjohnscathedral.com.au']});
article('music-department','CONNECT WITH CATHEDRAL MUSIC','An enquiry about choirs, music or an opportunity to take part.','organ.jpg',[
 ['Start with the music team','The Cathedral’s music directory provides current biographies and responsibilities. For help directing your enquiry, contact Cathedral Reception and ask for the Music Department.'],
 ['Help us direct your enquiry','Let us know whether you are asking about a choir, a music opportunity, a performance or music for a particular occasion.'],
 ['Discover the programme','Explore the choirs and recital programme while planning your enquiry. Opportunities and arrangements are confirmed by the Cathedral team.']
],cathedralBase+'music-staff/',{resource:['Contact the Music Department via reception','mailto:cathedral@stjohnscathedral.com.au'],links:['Our Musicians','Choirs and Choristers','Concerts and Recitals']});
const editorialEscape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function renderEditorial(item){
 const d=editorialPages[item.id];
 if(!d)return `<h1>${editorialEscape(item.title)}</h1><p>Explore this part of Cathedral life through the links below.</p>`;
 const e=editorialEscape;
 const siblings=entries.filter(x=>x.section===item.section&&x.id!==item.id).slice(0,3);
 const links=d.links?d.links.map(t=>entries.find(x=>x.title===t)).filter(Boolean):siblings;
 const figures={ 'carving.jpg':'Timber carving within St John’s Cathedral','hero.jpg':'Stone vaults and stained-glass windows at St John’s Cathedral','mass.jpg':'Bread and wine prepared for Holy Communion','sanctuary.jpg':'People gathered in the Cathedral','light.jpg':'Colourful light from stained glass','peace.jpg':'An event gathering people in the Cathedral','outreach.jpg':'Community members engaged in climate advocacy','candles.jpg':'Candles lit for prayer','font.jpg':'The Cathedral baptismal font','choir.jpg':'Cathedral choristers in red and white choir robes','wedding3.jpg':'A newly married couple walking through the Cathedral','community.jpg':'Members of the Cathedral community at its entrance','organ.jpg':'A close view of the Cathedral organ stops','gathering.jpg':'A gathering in the Cathedral nave'};
 const sourceList=[[d.source.includes('anglicanchurchsq')?'Anglican Church Southern Queensland':d.source.includes('anglican.org.au')?'Anglican Church of Australia':'St John’s Cathedral',d.source],...(d.secondarySource?[d.secondarySource]:[])];
 return `<div class="article-masthead"><nav aria-label="Breadcrumb"><a href="#">Home</a><span>/</span><span>${e(item.section)}</span></nav><div class="article-title-row"><div><p class="eyebrow">${e(d.eyebrow)}</p><h1>${e(item.title)}</h1></div><span class="article-edition">ST JOHN’S<br>BRISBANE<br><span>Explore / ${String(entries.indexOf(item)+1).padStart(2,'0')}</span></span></div><p class="article-dek">${e(d.dek)}</p></div>
 <figure class="article-cover ${['choir.jpg','font.jpg','community.jpg'].includes(d.image)?'portrait-cover':''}"><img src="assets/${e(d.image)}" alt="${e(figures[d.image]||item.title)}" width="1000" height="600" fetchpriority="high"><figcaption>${e(figures[d.image]||item.title)}<span>ST JOHN’S CATHEDRAL / BRISBANE</span></figcaption></figure>
 ${d.facts?`<dl class="article-facts">${d.facts.map(x=>`<div><dt>${e(x[0])}</dt><dd>${e(x[1])}</dd></div>`).join('')}</dl>`:''}
 <div class="article-reading"><aside class="article-index"><p class="eyebrow">ON THIS PAGE</p>${d.sections.map((x,i)=>`<a href="#article-${item.id}-${i}" data-article-jump="article-${item.id}-${i}"><span>${String(i+1).padStart(2,'0')}</span>${e(x[0])}</a>`).join('')}<a class="article-index-back" href="#">← Back to the Cathedral</a></aside><div class="article-prose">${d.sections.map((x,i)=>`<section id="article-${item.id}-${i}" class="article-chapter"><span class="chapter-number">${String(i+1).padStart(2,'0')} /</span><h2>${e(x[0])}</h2><p>${e(x[1])}</p></section>`).join('')}
 ${d.timeline?`<section class="article-timeline"><p class="eyebrow">A CENTURY OF COMMITMENT</p><h2>From vision<br>to living landmark.</h2><ol>${d.timeline.map(x=>`<li><strong>${e(x[0])}</strong><span>${e(x[1])}</span></li>`).join('')}</ol></section>`:''}
 <div class="article-invitation"><p class="eyebrow">YOUR NEXT STEP</p><h2>${d.resource?'Continue the conversation.':'Make it part of your visit.'}</h2><a class="article-action" href="${e(d.resource?.[1]||'mailto:cathedral@stjohnscathedral.com.au')}">${e(d.resource?.[0]||'Talk with the Cathedral team')} <span>↗</span></a></div>
 <details class="article-sources"><summary>Read further & sources</summary><p>Prepared from the Cathedral and Anglican sources below. Follow the current programme for changing schedules, appointments and participation details.</p>${sourceList.map(x=>`<a href="${e(x[1])}" target="_blank" rel="noopener">${e(x[0])} ↗<span class="sr-only"> (opens in a new tab)</span></a>`).join('')}</details></div></div>
 <section class="article-onward"><div class="section-heading"><div><p class="eyebrow">THERE’S MORE TO DISCOVER</p><h2>Keep exploring.</h2></div><span>${e(item.section)}</span></div><div>${links.map((x,i)=>`<a href="#${x.id}"><span>${String(i+1).padStart(2,'0')}</span><h3>${e(x.title)}</h3><b>↗</b></a>`).join('')}</div></section>`;
}
