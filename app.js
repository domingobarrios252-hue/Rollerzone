var DB = {
  noticias: [
    {id:1,titulo:'Lagos 2026 arde en los 500m',cat:'Reportaje',fecha:'2026-04-03',autor:'Redacción RollerZone',excerpt:'Velocidad pura, emoción sin control y finales de infarto. Lagos se convierte en el epicentro mundial del patinaje con actuaciones que ya son historia.',tiempo:'8 min',img:'https://domingobarrios252-hue.github.io/Rollerzone/images/jessi.jpg',contenido:'',featured:true,seccion:'',visitas:0},
    {id:2,titulo:'Chevi Guzmán encabeza el ranking nacional tras la tercera jornada',cat:'Resultados',fecha:'2026-04-02',autor:'Redacción RollerZone',excerpt:'Actuación brillante del patinador asturiano que supera a sus rivales por un margen histórico.',tiempo:'4 min',img:'',contenido:'',featured:false,seccion:'',visitas:0},
    {id:3,titulo:'España cierra la temporada europea con tres medallas en Bogotá',cat:'Selección',fecha:'2026-04-01',autor:'Redacción RollerZone',excerpt:'El equipo nacional demuestra su nivel en el Campeonato Internacional con un balance histórico.',tiempo:'6 min',img:'',contenido:'',featured:false,seccion:'',visitas:0},
    {id:4,titulo:'Los secretos del viraje perfecto: análisis biomecánico del sprint',cat:'Técnica',fecha:'2026-03-31',autor:'Carlos Redondo',excerpt:'El entrenador nacional Carlos Redondo explica cómo los patinadores élite optimizan la posición en curva.',tiempo:'5 min',img:'',contenido:'',featured:false,seccion:'',visitas:0},
    {id:5,titulo:'Bont Vaypor S3: probamos el patín que está dominando la temporada 2026',cat:'Equipación',fecha:'2026-03-29',autor:'Redacción RollerZone',excerpt:'Análisis completo del modelo más vendido del año. Rigidez, peso, ajuste y rendimiento en pista real.',tiempo:'7 min',img:'',contenido:'',featured:false,seccion:'',visitas:0},
  ],
  eventos: [
    {id:1,nombre:'Open de Asturias 2026 - 4ª Fase Regional',fecha:'2026-04-11',tipo:'Autonomico',lugar:'Pabellón Moreda, Gijón',inscritos:'187 inscritos · Plazas libres',img:'https://domingobarrios252-hue.github.io/Rollerzone/images/open.jpg',descripcion:'4ª Jornada del Open de Asturias en el patinodromo de Moreda de Gijón.',categorias:[],web:'',facebook:'',instagram:''},
    {id:2,nombre:'Copa de España Inline 2026',fecha:'2026-04-26',tipo:'Copa',lugar:'Velódromo Valencia',inscritos:'231 inscritos · Inscripción abierta',img:'',descripcion:'La Copa de España Inline es el evento más importante del calendario nacional de pista corta.',categorias:[],web:'',facebook:'',instagram:''},
    {id:3,nombre:'Grand Prix Internacional Inzell',fecha:'2026-05-10',tipo:'Internacional',lugar:'Inzell Ice Speed Center, Alemania',inscritos:'Copa Europa ISU',img:'',descripcion:'El Grand Prix de Inzell es la cita más importante del calendario europeo.',categorias:[],web:'',facebook:'',instagram:''},
    {id:4,nombre:'Campeonato de España Pista Larga',fecha:'2026-05-24',tipo:'Nacional',lugar:'Palacio de los Deportes, Madrid',inscritos:'310 inscritos · Inscripción abierta',img:'',descripcion:'El Campeonato de España de Pista Larga es una de las competiciones más prestigiosas del calendario nacional.',categorias:[],web:'',facebook:'',instagram:''},
    {id:5,nombre:'Open Internacional Barcelona',fecha:'2026-06-07',tipo:'Internacional',lugar:'Velòdrom Lluís Puig, Barcelona',inscritos:'Inscripción abierta · Internacional',img:'',descripcion:'El Open Internacional de Barcelona reúne a patinadores de más de 20 países.',categorias:[],web:'',facebook:'',instagram:''},
    {id:6,nombre:'Trofeo Asturias Speed',fecha:'2026-06-21',tipo:'Nacional',lugar:'Pabellón Moreda, Gijón',inscritos:'Por confirmar',img:'',descripcion:'El tradicional Trofeo Asturias Speed regresa a Gijón con una edición especial.',categorias:[],web:'',facebook:'',instagram:''},
    {id:7,nombre:'World Inline Cup Berlin',fecha:'2026-07-05',tipo:'Internacional',lugar:'Berlín, Alemania',inscritos:'Cita mundial UCI',img:'',descripcion:'La World Inline Cup de Berlín es uno de los eventos más importantes del calendario mundial.',categorias:[],web:'',facebook:'',instagram:''},
  ],
  entrevistas: [
    {id:1,nombre:'Chevi Guzmán',rol:'Patinador élite — Gijón PC',quote:'El patinaje de velocidad te enseña que los límites solo existen si tú los pones. Cada día en pista es una oportunidad de romperlos.',tags:'Técnica,Motivación,Élite',img:'',imagenes:[],contenido:'P: ¿Cuál es el secreto de tu éxito esta temporada?\nR: El trabajo diario. No hay atajos. Llevo doce años en la pista y cada día aprendo algo nuevo.\nP: ¿Cómo vives la presión de ser el número uno en el ranking?\nR: Con mucha responsabilidad. Pero también como un privilegio.\nP: ¿Qué objetivos tienes para el resto de la temporada?\nR: Quiero mantener el liderato y hacer un papel digno en el Grand Prix de Inzell.'},
    {id:2,nombre:'Carlos Redondo',rol:'Seleccionador Nacional',quote:'La nueva generación tiene hambre de medallas. Hemos cambiado la metodología de entrenamiento y los resultados empiezan a llegar.',tags:'Selección,Entrenamiento,Táctica',img:'',imagenes:[],contenido:'P: ¿Cómo ha evolucionado el patinaje español en los últimos años?\nR: De forma extraordinaria. Cuando empecé como seleccionador hace cuatro años, teníamos talento pero nos faltaba estructura.\nP: ¿Cuál es la clave de la nueva metodología de entrenamiento?\nR: Trabajamos mucho la personalización.\nP: ¿Qué espera de la temporada internacional?\nR: Que España esté presente en todos los podios importantes.'},
    {id:3,nombre:'Lucía Martín',rol:'Patinadora élite — Gijón PC',quote:'Ser la número uno de España es un orgullo enorme, pero lo que más me motiva es saber que cada record que rompo abre el camino a las que vienen detrás.',tags:'Femenino,Records,Inspiración',img:'',imagenes:[],contenido:'P: ¿Cómo empezaste en el patinaje de velocidad?\nR: Empecé a los cinco años. Mi madre me llevó a la pista y no salí más.\nP: Eres referente para las patinadas más jóvenes, ¿cómo llevas esa responsabilidad?\nR: Con mucho cariño. Me encanta cuando las pequeñas se me acercan después de las competiciones.\nP: ¿Qué te queda por conseguir en tu carrera?\nR: Un podio en un campeonato del mundo.'},
  ],
  sponsors: [
    {id:1,nombre:'IRIER',tier:'Oro',tagline:'Fabricante oficial del uniforme de la selección española de patinaje',desc:'IRIER es además el patrocinador principal de RollerZone y apoya el desarrollo de la revista Rollerzone y el patinaje español.',web:'https://irier.es',social:'',sector:'Material deportivo',img:''},
    {id:2,nombre:'Doop Inline',tier:'Oro',tagline:'Equipación técnica de alto rendimiento',desc:'Doop Inline es la marca de referencia en equipación técnica para patinaje de velocidad.',web:'https://doopinline.com',social:'',sector:'Equipación deportiva',img:''},
    {id:3,nombre:'Seba Skates',tier:'Plata',tagline:'Patines y accesorios para élite',desc:'Seba Skates ofrece una amplia gama de patines y accesorios para competición de élite.',web:'https://sebaskates.com',social:'',sector:'Material deportivo',img:''},
    {id:4,nombre:'SpeedZone Pro',tier:'Bronce',tagline:'Cronometraje y tecnología deportiva',desc:'SpeedZone Pro proporciona soluciones de cronometraje y análisis de rendimiento.',web:'https://speedzonepro.com',social:'',sector:'Tecnología deportiva',img:''},
  ],
  colaboradores: [
    {id:1,nombre:'Marcos Vidal',rol:'Fotógrafo Deportivo',bio:'Fotógrafo especializado en deportes de deslizamiento con más de 10 años cubriendo competiciones internacionales.',desde:'2023',social:'@marcosvidal_foto',img:''},
    {id:2,nombre:'Ana Solís',rol:'Redactora Técnica',bio:'Expatinadora nacional reconvertida en periodista deportiva. Aporta a RollerZone su visión técnica desde dentro de la competición.',desde:'2024',social:'@anasolis_speed',img:''},
    {id:3,nombre:'Jorge Pérez',rol:'Analista de Datos',bio:'Ingeniero especialista en ciencias del deporte. Desarrolla los sistemas de estadística y análisis de rendimiento.',desde:'2024',social:'@jorgeperez_data',img:''},
    {id:4,nombre:'Elena Castro',rol:'Diseñadora Gráfica',bio:'Directora de arte responsable de la identidad visual de la revista RollerZone.',desde:'2023',social:'@ecastro_design',img:''},
  ],
  revista: [
    {num:1,titulo:'El Nacimiento de una Revista',subtitulo:'Gijón, cuna del patinaje',precio:'6€',img:'',fechaEdicion:'',portada:''},
    {num:2,titulo:'Los Pioneros del Speed',subtitulo:'Historia del patinaje español',precio:'6€',img:'',fechaEdicion:'',portada:''},
    {num:3,titulo:'Técnica y Velocidad',subtitulo:'Especial biomecánica',precio:'6€',img:'',fechaEdicion:'',portada:''},
    {num:4,titulo:'Las Estrellas del Futuro',subtitulo:'Promesas 2025',precio:'6€',img:'',fechaEdicion:'',portada:''},
    {num:5,titulo:'Copa del Mundo',subtitulo:'Crónicas de Bogotá',precio:'6€',img:'',fechaEdicion:'',portada:''},
    {num:6,titulo:'Invierno de Campeones',subtitulo:'Especial pista cubierta',precio:'6€',img:'',fechaEdicion:'',portada:''},
    {num:7,titulo:'La Nueva Generación',subtitulo:'Patinaje español 2026',precio:'6€',img:'',fechaEdicion:'',portada:''},
  ],
  ranking: [
    {id:1,nombre:'',foto:'',club:{nombre:'',logo:''},marcas:[],puntos:0,bandera:'',historial:[]},
  ],
  hero:{tag:'En Vivo · Abril 2026',titulo:'LAGOS 2026 <em>ARDE</em> EN LOS 500M',meta:'Speed Track European Series · <span>Portugal</span>',excerpt:'Velocidad pura, emoción sin control y finales de infarto. Lagos se convierte en el epicentro mundial del patinaje.',img:'https://domingobarrios252-hue.github.io/Rollerzone/images/jessi.jpg',num:'01'},
  ticker:['Chevi Guzmán bate el récord de pista en 500m','Liga Nacional 3ª División · Jornada 4 en curso','Open Madrid 2026 · Inscripciones abiertas','Daniel Milagros convocado con la selección española','Adrián Alonso · Nuevo patrocinador con Bont Skates','Campeonato Internacional Bogotá · Resultados disponibles','Livio Wenger debuta en la Liga Nacional 2026'],
  whatsapp:'34600000000',
  nextId:20,
  eventosExpanded:false
};

/* =================== UTILS =================== */
function genId(){ return ++DB.nextId; }
function monthStr(d){ if(!d) return ''; var p=d.split('-'); return ['ENE','FEB','MAR','ABR','MAY','JUN','JUL','AGO','SEP','OCT','NOV','DIC'][parseInt(p[1])-1]||''; }
function dayStr(d){ if(!d) return ''; return d.split('-')[2]||''; }
function fmtDateES(d){ if(!d) return ''; var p=d.split('-'); return p[2]+' '+['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'][parseInt(p[1])-1]+' '+p[0]; }
function catClass(c){ return {'Selección':'cat-seleccion','Técnica':'cat-tecnica','Entrevista':'cat-entrevista'}[c]||''; }
function tipoClass(t){ return {'Nacional':'badge-nacional','Internacional':'badge-internacional','Copa':'badge-copa','Autonomico':'badge-autonomico'}[t]||'badge-nacional'; }
function tblBadgeClass(c){ return {'Reportaje':'reportaje','Selección':'seleccion','Técnica':'tecnica','Entrevista':'entrevista','Nacional':'nacional','Internacional':'internacional','Copa':'copa'}[c]||'reportaje'; }
function tierClass(t){ return {'Oro':'tier-gold','Plata':'tier-silver','Bronce':'tier-bronze'}[t]||'tier-gold'; }
function tierEmoji(t){ return {'Oro':'★','Plata':'✦','Bronce':'◆'}[t]||'★'; }

function showToast(msg,err){
  var t=document.getElementById('admin-toast');
  t.textContent=msg; t.className='admin-toast'+(err?' error':'');
  setTimeout(function(){t.classList.add('show');},10);
  setTimeout(function(){t.classList.remove('show');},3000);
}

/* =================== SPA ROUTER =================== */
var allPages = ['page-home','page-noticia','page-evento','page-entrevista'];
function showPage(pageId){
  allPages.forEach(function(p){ document.getElementById(p).style.display='none'; });
  document.getElementById(pageId).style.display='block';
  window.scrollTo(0,0);
}
function goHome(){
  showPage('page-home');
  document.getElementById('mobileMenu').classList.remove('open');
}
function openFeaturedNews(){
  var featured = DB.noticias.find(function(n){ return n.featured; });
  if(featured) openNoticia(featured.id);
}

/* =================== OPEN NOTICIA =================== */
function openNoticia(id){
  var n = DB.noticias.find(function(x){ return x.id===id; });
  if(!n) return;
  document.getElementById('noticia-breadcrumb-title').textContent = n.titulo.substring(0,40)+'…';
  var heroImg = document.getElementById('noticia-hero-img');
  if(n.img){ heroImg.src=n.img; heroImg.style.display='block'; }
  else { heroImg.style.display='none'; }
  document.getElementById('noticia-page-cat').className = 'page-noticia-category ' + catClass(n.cat);
  document.getElementById('noticia-page-cat').textContent = n.cat;
  document.getElementById('noticia-page-title').textContent = n.titulo;
  var autor = n.autor || 'Redacción RollerZone';
  document.getElementById('noticia-page-meta').innerHTML =
    '<span>Por <strong>'+autor+'</strong></span>' +
    '<span style="color:var(--muted)">· '+fmtDateES(n.fecha)+'</span>' +
    (n.tiempo ? '<span style="color:var(--muted)">· '+n.tiempo+' lectura</span>' : '');
  document.getElementById('noticia-page-lead').textContent = n.excerpt || 'Sigue leyendo para descubrir todos los detalles.';
  var body = '';
  if(n.contenido && n.contenido.trim()){
    n.contenido.split('\n').forEach(function(line){
      line = line.trim(); if(!line) return;
      if(line.startsWith('### ')) body += '<h3>' + line.slice(4) + '</h3>';
      else if(line.startsWith('> ')) body += '<blockquote>' + line.slice(2) + '</blockquote>';
      else body += '<p>' + line + '</p>';
    });
  } else {
    body = '<p>El patinaje de velocidad en España vive uno de sus mejores momentos en términos de nivel competitivo y participación. Los datos de esta temporada confirman una tendencia al alza que los expertos llevan años prediciendo.</p>';
    body += '<h3>Un momento histórico</h3>';
    body += '<p>La combinación de nuevas instalaciones, metodologías de entrenamiento renovadas y patinadores con talento excepcional está dando sus frutos. Las cifras hablan por sí solas: más de 1.200 patinadores federados, 38 competiciones previstas para 2026.</p>';
    body += '<blockquote>El nivel que estamos viendo este año es simplemente increíble. Nunca habíamos tenido tanta densidad de talento en la élite nacional.</blockquote>';
    body += '<p>Los clubs tradicionales como el Gijón Patín Club, Barcelona Inline o Sevilla Rollers siguen siendo los pilares del patinaje español, pero nuevas organizaciones están emergiendo con fuerza.</p>';
  }
  document.getElementById('noticia-page-body').innerHTML = body;

  /* Botones compartir */
  var pageUrl = encodeURIComponent(window.location.href);
  var pageTitle = encodeURIComponent(n.titulo);
  document.getElementById('share-facebook').href = 'https://www.facebook.com/sharer/sharer.php?u='+pageUrl;
  document.getElementById('share-whatsapp').href = 'https://wa.me/?text='+pageTitle+'%20'+pageUrl;
  document.getElementById('share-twitter').href = 'https://twitter.com/intent/tweet?text='+pageTitle+'&url='+pageUrl;

  var tagArr = [n.cat, 'Patinaje', 'España', '2026'];
  document.getElementById('noticia-page-tags').innerHTML = tagArr.map(function(t){ return '<span class="page-tag">'+t+'</span>'; }).join('');
  var others = DB.noticias.filter(function(x){ return x.id!==id; }).slice(0,4);
  document.getElementById('noticia-sidebar-list').innerHTML = others.map(function(x,i){
    return '<div class="sidebar-news-item" onclick="openNoticia('+x.id+')">'+(x.img?'<img src="'+x.img+'" style="width:52px;height:40px;object-fit:cover;flex-shrink:0;border:1px solid var(--border-solid);">':'<div class="sidebar-news-num">0'+(i+1)+'</div>')+'<div><div class="sidebar-news-title">'+x.titulo+'</div><div class="sidebar-news-date">'+fmtDateES(x.fecha)+'</div></div></div>';
  }).join('');
  document.getElementById('noticia-sidebar-eventos').innerHTML = DB.eventos.slice(0,2).map(function(e){
    return '<div class="sidebar-news-item" onclick="openEvento('+e.id+')"><div class="sidebar-news-num" style="font-size:18px;min-width:36px;text-align:center;line-height:1.1;"><div style="color:var(--gold)">'+dayStr(e.fecha)+'</div><div style="font-size:10px;color:var(--muted);font-family:\'Barlow Condensed\',sans-serif;letter-spacing:1px;">'+monthStr(e.fecha)+'</div></div><div><div class="sidebar-news-title">'+e.nombre+'</div><div class="sidebar-news-date">'+e.lugar+'</div></div></div>';
  }).join('');
  showPage('page-noticia');
}

/* =================== OPEN EVENTO =================== */
function openEvento(id){
  var e = DB.eventos.find(function(x){ return x.id===id; });
  if(!e) return;
  document.getElementById('evento-breadcrumb-title').textContent = e.nombre;
  document.getElementById('evento-hero-date-big').textContent = dayStr(e.fecha)+' '+monthStr(e.fecha);
  var badge = document.getElementById('evento-page-badge');
  badge.className = 'evento-badge ' + tipoClass(e.tipo);
  badge.textContent = e.tipo;
  document.getElementById('evento-page-title').textContent = e.nombre;
  document.getElementById('evento-page-meta').innerHTML =
    '<span>'+fmtDateES(e.fecha)+'</span>' +
    '<span style="color:var(--muted)">📍 '+e.lugar+'</span>' +
    (e.inscritos ? '<span style="color:var(--green)">✓ '+e.inscritos+'</span>' : '');
  var descHTML = '';
  if(e.descripcion){
    e.descripcion.split('\n').forEach(function(p){ if(p.trim()) descHTML += '<p>'+p.trim()+'</p>'; });
  } else {
    descHTML = '<p>Información completa del evento próximamente.</p>';
  }
  document.getElementById('evento-page-desc').innerHTML = descHTML;
  document.getElementById('evento-info-rows').innerHTML = [
    {icon:'📅', label:'Fecha', value: fmtDateES(e.fecha)},
    {icon:'📍', label:'Lugar', value: e.lugar},
    {icon:'🏆', label:'Tipo', value: e.tipo},
    {icon:'👥', label:'Participantes', value: e.inscritos || 'Por confirmar'},
  ].map(function(r){
    return '<div class="evento-info-row"><div class="evento-info-icon">'+r.icon+'</div><div><div class="evento-info-label">'+r.label+'</div><div class="evento-info-value">'+r.value+'</div></div></div>';
  }).join('');
  /* Cartel a pantalla completa */
  var cartelWrap = document.getElementById('evento-cartel-wrap');
  if(e.img){
    cartelWrap.innerHTML = '<img class="evento-cartel-full-poster" src="'+e.img+'" alt="Cartel '+e.nombre+'">';
  } else {
    cartelWrap.innerHTML = '<div class="evento-cartel-placeholder-full"><svg width="60" height="60" viewBox="0 0 60 60" fill="none"><ellipse cx="30" cy="30" rx="24" ry="12" stroke="#F5A623" stroke-width="1.5"/><circle cx="30" cy="30" r="6" fill="#F5A623" opacity="0.3"/></svg><span>SIN CARTEL</span></div>';
  }
  document.getElementById('evento-sidebar-news').innerHTML = DB.noticias.slice(0,3).map(function(n,i){
    return '<div class="sidebar-news-item" onclick="openNoticia('+n.id+')"><div class="sidebar-news-num">0'+(i+1)+'</div><div><div class="sidebar-news-title">'+n.titulo+'</div><div class="sidebar-news-date">'+fmtDateES(n.fecha)+'</div></div></div>';
  }).join('');
  document.getElementById('eventos-relacionados').innerHTML = DB.eventos.filter(function(x){ return x.id!==id; }).slice(0,3).map(function(ev){
    return '<div class="evento-card" onclick="openEvento('+ev.id+')">'+
      (ev.img ? '<img class="evento-cartel" src="'+ev.img+'" alt="cartel" style="width:100%;height:180px;object-fit:contain;background:#111;border:1px solid var(--border-solid);">' : '<div class="evento-cartel-placeholder" style="height:80px;">'+ev.nombre.substring(0,20)+'</div>')+
      '<div class="evento-card-inner"><div class="evento-date"><div class="evento-day">'+dayStr(ev.fecha)+'</div><div class="evento-month">'+monthStr(ev.fecha)+'</div></div><div class="evento-info"><div class="evento-badge '+tipoClass(ev.tipo)+'">'+ev.tipo+'</div><div class="evento-nombre">'+ev.nombre+'</div><div class="evento-lugar">📍 '+ev.lugar+'</div></div></div><div class="evento-card-arrow">Ver evento →</div></div>';
  }).join('');
  showPage('page-evento');
}

/* =================== OPEN ENTREVISTA =================== */
function openEntrevista(id){
  var e = DB.entrevistas.find(function(x){ return x.id===id; });
  if(!e) return;
  document.getElementById('entrevista-breadcrumb-title').textContent = e.nombre;
  var heroImg = document.getElementById('entrevista-hero-img');
  if(e.img){ heroImg.src=e.img; heroImg.style.display='block'; }
  else { heroImg.style.display='none'; }
  var initials = e.nombre.split(' ').map(function(w){ return w[0]; }).slice(0,2).join('');
  var avatarEl = document.getElementById('entrevista-page-avatar-lg');
  if(e.img){ avatarEl.innerHTML = '<img src="'+e.img+'" alt="'+e.nombre+'">'; }
  else { avatarEl.textContent = initials; }
  document.getElementById('entrevista-page-nombre').textContent = e.nombre;
  document.getElementById('entrevista-page-rol').textContent = e.rol;
  document.getElementById('entrevista-page-quote').textContent = e.quote;
  var body = '';
  if(e.contenido && e.contenido.trim()){
    var lines = e.contenido.split('\n');
    var currentQ = '', currentA = '';
    lines.forEach(function(line){
      line = line.trim(); if(!line) return;
      if(line.startsWith('P: ')){
        if(currentQ){ body += '<div class="entrevista-qa"><div class="entrevista-q">'+currentQ+'</div><div class="entrevista-a">'+currentA+'</div></div>'; }
        currentQ = line.slice(3); currentA = '';
      } else if(line.startsWith('R: ')){ currentA = line.slice(3); }
      else { body += '<p>'+line+'</p>'; }
    });
    if(currentQ) body += '<div class="entrevista-qa"><div class="entrevista-q">'+currentQ+'</div><div class="entrevista-a">'+currentA+'</div></div>';
  } else {
    body += '<div class="entrevista-qa"><div class="entrevista-q">¿Cuál es tu mayor motivación cada día?</div><div class="entrevista-a">La pasión por el deporte y el deseo de superarme constantemente.</div></div>';
  }
  /* Galería de imágenes adicionales */
  if(e.imagenes && e.imagenes.length > 0){
    body += '<div class="entrevista-galeria">';
    e.imagenes.forEach(function(imgUrl){
      body += '<img src="'+imgUrl+'" alt="'+e.nombre+'" class="entrevista-galeria-img">';
    });
    body += '</div>';
  }
  document.getElementById('entrevista-page-body').innerHTML = body;
  var tagArr = (e.tags||'').split(',').map(function(t){ return t.trim(); });
  document.getElementById('entrevista-page-tags').innerHTML = tagArr.map(function(t){ return '<span class="page-tag">'+t+'</span>'; }).join('');
  document.getElementById('entrevista-sidebar-list').innerHTML = DB.entrevistas.filter(function(x){ return x.id!==id; }).map(function(x,i){
    var ini = x.nombre.split(' ').map(function(w){ return w[0]; }).slice(0,2).join('');
    return '<div class="sidebar-news-item" onclick="openEntrevista('+x.id+')">'+(x.img?'<img src="'+x.img+'" style="width:40px;height:40px;object-fit:cover;border-radius:50%;flex-shrink:0;">':'<div class="sidebar-news-num" style="font-size:16px;min-width:36px;text-align:center;font-family:\'Bebas Neue\',sans-serif;color:rgba(74,158,255,.4);">'+ini+'</div>')+'<div><div class="sidebar-news-title">'+x.nombre+'</div><div class="sidebar-news-date">'+x.rol+'</div></div></div>';
  }).join('');
  document.getElementById('entrevista-sidebar-eventos').innerHTML = DB.eventos.slice(0,2).map(function(e){
    return '<div class="sidebar-news-item" onclick="openEvento('+e.id+')"><div class="sidebar-news-num" style="font-size:18px;min-width:36px;text-align:center;line-height:1.1;"><div style="color:var(--gold)">'+dayStr(e.fecha)+'</div><div style="font-size:10px;color:var(--muted);font-family:\'Barlow Condensed\',sans-serif;letter-spacing:1px;">'+monthStr(e.fecha)+'</div></div><div><div class="sidebar-news-title">'+e.nombre+'</div><div class="sidebar-news-date">'+e.lugar+'</div></div></div>';
  }).join('');
  showPage('page-entrevista');
}

/* =================== OPEN REVISTA =================== */
function openRevista(num){
  var r = DB.revista.find(function(x){ return x.num===num; });
  if(!r) return;
  var tel = DB.whatsapp || '34600000000';
  var msg = encodeURIComponent('Hola! Quiero comprar la revista RollerZone Nº'+r.num+' — '+r.titulo+' ('+r.precio+')');
  window.open('https://wa.me/'+tel+'?text='+msg, '_blank');
}

/* =================== RENDER HOME =================== */
function renderNoticias(){
  var grid = document.getElementById('news-grid');
  var more = document.getElementById('more-news-grid');
  var featured = DB.noticias.filter(function(n){ return n.featured; })[0];
  var others = DB.noticias.filter(function(n){ return !n.featured; });
  var gridHTML = '';
  if(featured){
    gridHTML += '<article class="news-card featured" onclick="openNoticia('+featured.id+')">';
    gridHTML += '<div class="hero-img-placeholder">';
    if(featured.img){ gridHTML += '<img class="news-img-real" src="'+featured.img+'" alt="">'; }
    else { gridHTML += '<svg viewBox="0 0 200 120" fill="none"><ellipse cx="100" cy="60" rx="80" ry="38" stroke="#F5A623" stroke-width="2"/><circle cx="100" cy="60" r="12" fill="#F5A623" opacity="0.3"/></svg>'; }
    gridHTML += '</div>';
    gridHTML += '<div class="news-category '+catClass(featured.cat)+'">'+featured.cat+'</div>';
    gridHTML += '<h3 class="news-title">'+featured.titulo+'</h3>';
    if(featured.excerpt) gridHTML += '<p class="news-excerpt">'+featured.excerpt+'</p>';
    gridHTML += '<div class="news-meta"><span>'+fmtDateES(featured.fecha)+'</span>'+(featured.tiempo?'<span style="color:var(--muted)">'+featured.tiempo+'</span>':'')+'</div>';
    gridHTML += '<div style="margin-top:1rem"><span style="font-family:\'Barlow Condensed\',sans-serif;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--gold)">Leer más →</span></div>';
    gridHTML += '</article>';
  }
  others.slice(0,2).forEach(function(n,i){
    gridHTML += '<article class="news-card small" onclick="openNoticia('+n.id+')">';
    gridHTML += '<div class="small-num">0'+(i+1)+'</div>';
    gridHTML += '<div class="small-content"><div class="news-category '+catClass(n.cat)+'">'+n.cat+'</div>';
    gridHTML += '<h3 class="news-title">'+n.titulo+'</h3>';
    gridHTML += '<div class="news-meta"><span>'+fmtDateES(n.fecha)+'</span></div></div></article>';
  });
  grid.innerHTML = gridHTML;
  var moreHTML = '';
  others.slice(2).forEach(function(n){
    moreHTML += '<article class="more-news-card" onclick="openNoticia('+n.id+')">';
    if(n.img) moreHTML += '<img class="news-img-thumb" src="'+n.img+'" alt="">';
    moreHTML += '<div class="news-category '+catClass(n.cat)+'">'+n.cat+'</div>';
    moreHTML += '<h3 class="news-title">'+n.titulo+'</h3>';
    if(n.excerpt) moreHTML += '<p class="news-excerpt">'+n.excerpt+'</p>';
    moreHTML += '<div class="news-meta"><span>'+fmtDateES(n.fecha)+'</span>'+(n.tiempo?'<span style="color:var(--muted)">'+n.tiempo+'</span>':'')+'</div>';
    moreHTML += '<div style="margin-top:.5rem"><span style="font-family:\'Barlow Condensed\',sans-serif;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--gold)">Leer más →</span></div>';
    moreHTML += '</article>';
  });
  more.innerHTML = moreHTML;
}

function renderEventos(){
  var grid = document.getElementById('eventos-grid');
  var html = '';
  var maxVisible = 6;
  DB.eventos.forEach(function(e, idx){
    var d = e.fecha || '';
    var hidden = idx >= maxVisible && !DB.eventosExpanded;
    html += '<div class="evento-card evento-card-poster'+(hidden?' eventos-hidden':'')+'" onclick="openEvento('+e.id+')">';
    /* Cartel completo sin recorte */
    if(e.img){
      html += '<div class="evento-poster-wrap"><img class="evento-poster-img" src="'+e.img+'" alt="cartel '+e.nombre+'"></div>';
    } else {
      html += '<div class="evento-poster-wrap evento-poster-placeholder"><div class="evento-poster-date-big">'+dayStr(d)+'<span>'+monthStr(d)+'</span></div><div class="evento-poster-nombre">'+e.nombre+'</div></div>';
    }
    html += '<div class="evento-card-footer">';
    html += '<div class="evento-badge '+tipoClass(e.tipo)+'">'+e.tipo+'</div>';
    html += '<div class="evento-nombre">'+e.nombre+'</div>';
    html += '<div class="evento-lugar">📍 '+e.lugar+'</div>';
    if(e.inscritos) html += '<div class="evento-inscritos">✓ '+e.inscritos+'</div>';
    html += '<div class="evento-card-arrow">Ver detalles →</div>';
    html += '</div></div>';
  });
  grid.innerHTML = html;
  var btnWrap = document.getElementById('eventos-show-more-btn');
  if(DB.eventos.length > maxVisible){
    btnWrap.style.display = 'block';
    document.getElementById('eventos-toggle-label').textContent = DB.eventosExpanded ? 'Ver menos eventos ↑' : 'Ver más eventos ↓';
  } else {
    btnWrap.style.display = 'none';
  }
}

function toggleVerMasEventos(){
  DB.eventosExpanded = !DB.eventosExpanded;
  renderEventos();
}

function renderEntrevistas(){
  var grid = document.getElementById('entrevistas-grid');
  var html = '';
  DB.entrevistas.forEach(function(e){
    var tags = (e.tags||'').split(',').map(function(t){ return '<span class="entrevista-tag">'+t.trim()+'</span>'; }).join('');
    var initials = e.nombre.split(' ').map(function(w){ return w[0]; }).slice(0,2).join('');
    html += '<div class="entrevista-card" onclick="openEntrevista('+e.id+')">';
    /* Foto del entrevistado en grande si existe */
    if(e.img){
      html += '<div class="entrevista-card-foto"><img src="'+e.img+'" alt="'+e.nombre+'"></div>';
    } else {
      html += '<div class="entrevista-card-foto entrevista-card-foto-placeholder">'+initials+'</div>';
    }
    html += '<div class="entrevista-card-body">';
    html += '<div class="entrevista-top">';
    html += '<div><div class="entrevista-nombre">'+e.nombre+'</div><div class="entrevista-rol">'+e.rol+'</div></div>';
    html += '</div><p class="entrevista-quote">'+e.quote+'</p>';
    html += '<div class="entrevista-tags">'+tags+'</div>';
    html += '<div class="entrevista-link">Leer entrevista completa →</div>';
    html += '</div></div>';
  });
  grid.innerHTML = html;
}

function renderSponsors(){
  var grid = document.getElementById('sponsors-grid');
  var html = '';
  DB.sponsors.forEach(function(s){
    html += '<div class="sponsor-card-v2">';
    /* Tier accent */
    html += '<div class="sponsor-tier-accent '+tierClass(s.tier)+'">'+tierEmoji(s.tier)+' '+s.tier+'</div>';
    /* Logo */
    html += '<div class="sponsor-logo-wrap-v2">';
    if(s.img){ html += '<img class="sponsor-logo-img-v2" src="'+s.img+'" alt="'+s.nombre+'">'; }
    else { html += '<div class="sponsor-logo-placeholder-v2">'+s.nombre.substring(0,2).toUpperCase()+'</div>'; }
    html += '</div>';
    html += '<div class="sponsor-name-v2">'+s.nombre+'</div>';
    html += '<div class="sponsor-tagline-v2">'+s.tagline+'</div>';
    html += '<div class="sponsor-desc-v2">'+s.desc+'</div>';
    /* Links */
    html += '<div class="sponsor-links-v2">';
    if(s.web){ html += '<a href="'+s.web+'" target="_blank" class="sponsor-link-btn" onclick="event.stopPropagation()">🌐 Web</a>'; }
    if(s.social){ html += '<a href="'+s.social+'" target="_blank" class="sponsor-link-btn sponsor-link-social" onclick="event.stopPropagation()">📱 Redes</a>'; }
    html += '</div></div>';
  });
  grid.innerHTML = html;
}

function renderColaboradores(){
  var grid = document.getElementById('colaboradores-grid');
  var html = '';
  DB.colaboradores.forEach(function(c){
    var initials = c.nombre.split(' ').map(function(w){ return w[0]; }).slice(0,2).join('');
    html += '<div class="equipo-card">';
    html += '<div class="equipo-foto-wrap">';
    if(c.img){ html += '<img class="equipo-foto" src="'+c.img+'" alt="'+c.nombre+'">'; }
    else { html += '<div class="equipo-foto equipo-foto-placeholder">'+initials+'</div>'; }
    html += '</div>';
    html += '<div class="equipo-nombre">'+c.nombre+'</div>';
    html += '<div class="equipo-rol">'+c.rol+'</div>';
    html += '<div class="equipo-bio">'+c.bio+'</div>';
    if(c.social){ html += '<div class="equipo-social"><span class="colab-social-btn">'+c.social+'</span></div>'; }
    html += '<div class="equipo-desde">Desde '+c.desde+'</div>';
    html += '</div>';
  });
  grid.innerHTML = html;
}

function renderRevista(){
  var grid = document.getElementById('revista-numeros-grid');
  var html = '';
  DB.revista.forEach(function(r){
    html += '<div class="revista-numero-item" onclick="openRevista('+r.num+')">';
    if(r.img){
      html += '<img class="revista-numero-cover" src="'+r.img+'" alt="Número '+r.num+'">';
    } else {
      html += '<div class="revista-numero-placeholder">';
      html += '<div class="revista-num-logo">ROLLER<br>ZONE</div>';
      html += '<svg class="revista-num-art" viewBox="0 0 60 60"><ellipse cx="30" cy="30" rx="24" ry="12" stroke="#F5A623" stroke-width="1.5" fill="none"/><circle cx="30" cy="30" r="6" fill="#F5A623" opacity="0.5"/></svg>';
      html += '<div class="revista-num-issue">Nº'+r.num+' · 2026</div>';
      html += '</div>';
    }
    html += '<div class="revista-numero-label">Nº '+r.num+'</div>';
    html += '</div>';
  });
  grid.innerHTML = html;
}

function renderTicker(){
  var track = document.getElementById('ticker-track');
  var items = DB.ticker.concat(DB.ticker);
  track.innerHTML = items.map(function(item){
    return '<div class="ticker-item">'+item+'<div class="ticker-dot"></div></div>';
  }).join('');
}

function renderHero(){
  var h = DB.hero;
  document.getElementById('hero-tag').textContent = h.tag;
  document.getElementById('hero-title').innerHTML = h.titulo;
  document.getElementById('hero-meta').innerHTML = h.meta;
  document.getElementById('hero-excerpt').textContent = h.excerpt;
  document.getElementById('hero-num').textContent = h.num||'01';
  var wrap = document.getElementById('hero-bg-img-wrap');
  wrap.innerHTML = h.img ? '<img class="hero-bg-img" src="'+h.img+'" alt="hero">' : '';
}

/* =================== ADMIN TABLE RENDERS =================== */
function renderAdminNoticias(){
  var tb = document.getElementById('admin-noticias-tbody');
  var h = '';
  DB.noticias.forEach(function(n){
    h += '<tr>';
    h += n.img ? '<td><img class="tbl-img" src="'+n.img+'" alt=""></td>' : '<td><div class="tbl-img-placeholder">IMG</div></td>';
    h += '<td style="max-width:260px;font-weight:600;">'+n.titulo+'</td>';
    h += '<td><span class="tbl-badge '+tblBadgeClass(n.cat)+'">'+n.cat+'</span></td>';
    h += '<td>'+n.fecha+'</td>';
    h += '<td>'+(n.featured?'<span style="color:var(--gold)">★ Sí</span>':'<span style="color:var(--muted)">No</span>')+'</td>';
    h += '<td><div class="tbl-actions"><button class="btn-edit" onclick="editNoticia('+n.id+')">Editar</button><button class="btn-del" onclick="delNoticia('+n.id+')">Eliminar</button></div></td>';
    h += '</tr>';
  });
  tb.innerHTML = h;
  document.getElementById('dash-noticias').textContent = DB.noticias.length;
}

function renderAdminEventos(){
  var tb = document.getElementById('admin-eventos-tbody');
  var h = '';
  DB.eventos.forEach(function(e){
    h += '<tr>';
    h += e.img ? '<td><img class="tbl-img" src="'+e.img+'" alt="" style="height:48px;object-fit:contain;"></td>' : '<td><div class="tbl-img-placeholder" style="height:48px;">CARTEL</div></td>';
    h += '<td style="font-weight:600;">'+e.nombre+'</td>';
    h += '<td>'+e.fecha+'</td>';
    h += '<td>'+e.lugar+'</td>';
    h += '<td><span class="tbl-badge '+tblBadgeClass(e.tipo)+'">'+e.tipo+'</span></td>';
    h += '<td><div class="tbl-actions"><button class="btn-edit" onclick="editEvento('+e.id+')">Editar</button><button class="btn-del" onclick="delEvento('+e.id+')">Eliminar</button></div></td>';
    h += '</tr>';
  });
  tb.innerHTML = h;
  document.getElementById('dash-eventos').textContent = DB.eventos.length;
}

function renderAdminEntrevistas(){
  var tb = document.getElementById('admin-entrevistas-tbody');
  var h = '';
  DB.entrevistas.forEach(function(e){
    var initials = e.nombre.split(' ').map(function(w){ return w[0]; }).slice(0,2).join('');
    h += '<tr>';
    h += e.img ? '<td><img class="tbl-img" src="'+e.img+'" alt="" style="border-radius:50%;width:40px;height:40px;"></td>' : '<td><div class="tbl-img-placeholder" style="width:40px;height:40px;border-radius:50%;font-size:14px;font-family:\'Bebas Neue\';color:var(--gold);">'+initials+'</div></td>';
    h += '<td style="font-weight:600;">'+e.nombre+'</td>';
    h += '<td style="color:var(--muted);font-size:12px;">'+e.rol+'</td>';
    h += '<td style="max-width:220px;font-size:12px;color:var(--muted);">'+e.quote.substring(0,70)+'...</td>';
    h += '<td><div class="tbl-actions"><button class="btn-edit" onclick="editEntrevista('+e.id+')">Editar</button><button class="btn-del" onclick="delEntrevista('+e.id+')">Eliminar</button></div></td>';
    h += '</tr>';
  });
  tb.innerHTML = h;
  document.getElementById('dash-entrevistas').textContent = DB.entrevistas.length;
}

function renderAdminSponsors(){
  var tb = document.getElementById('admin-sponsors-tbody');
  var h = '';
  DB.sponsors.forEach(function(s){
    h += '<tr>';
    h += s.img ? '<td><img class="tbl-img" src="'+s.img+'" alt=""></td>' : '<td><div class="tbl-img-placeholder">'+s.nombre[0]+'</div></td>';
    h += '<td style="font-weight:600;">'+s.nombre+'</td>';
    h += '<td><span class="tbl-badge" style="background:rgba(245,166,35,.15);color:var(--gold);">'+s.tier+'</span></td>';
    h += '<td style="max-width:200px;font-size:12px;color:var(--muted);">'+s.tagline+'</td>';
    h += '<td><div class="tbl-actions"><button class="btn-edit" onclick="editSponsor('+s.id+')">Editar</button><button class="btn-del" onclick="delSponsor('+s.id+')">Eliminar</button></div></td>';
    h += '</tr>';
  });
  tb.innerHTML = h;
}

function renderAdminColaboradores(){
  var tb = document.getElementById('admin-colaboradores-tbody');
  var h = '';
  DB.colaboradores.forEach(function(c){
    var initials = c.nombre.split(' ').map(function(w){ return w[0]; }).slice(0,2).join('');
    h += '<tr>';
    h += c.img ? '<td><img class="tbl-img" src="'+c.img+'" alt="" style="border-radius:50%;"></td>' : '<td><div class="tbl-img-placeholder" style="border-radius:50%;">'+initials+'</div></td>';
    h += '<td style="font-weight:600;">'+c.nombre+'</td>';
    h += '<td style="color:var(--muted);font-size:12px;">'+c.rol+'</td>';
    h += '<td>'+c.desde+'</td>';
    h += '<td><div class="tbl-actions"><button class="btn-edit" onclick="editColaborador('+c.id+')">Editar</button><button class="btn-del" onclick="delColaborador('+c.id+')">Eliminar</button></div></td>';
    h += '</tr>';
  });
  tb.innerHTML = h;
  document.getElementById('dash-colaboradores').textContent = DB.colaboradores.length;
}

function renderTickerAdmin(){
  var list = document.getElementById('ticker-items-list');
  var h = '';
  DB.ticker.forEach(function(item,i){
    h += '<div style="display:flex;align-items:center;gap:.5rem;padding:.5rem 0;border-bottom:1px solid var(--admin-border);">';
    h += '<span style="font-family:\'Bebas Neue\',sans-serif;font-size:16px;color:var(--gold);min-width:24px;">'+(i+1)+'</span>';
    h += '<span style="flex:1;font-size:13px;color:var(--text);">'+item+'</span>';
    h += '<button class="btn-del" onclick="delTickerItem('+i+')">✕</button>';
    h += '</div>';
  });
  list.innerHTML = h || '<span style="color:var(--muted);font-size:13px;">No hay items en el ticker</span>';
}

/* =================== MODALS =================== */
function openModal(id){ document.getElementById(id).classList.add('open'); }
function closeModal(id){ document.getElementById(id).classList.remove('open'); }

function openModalNoticia(){
  document.getElementById('noticia-id').value='';
  ['noticia-titulo','noticia-excerpt','noticia-contenido','noticia-tiempo','noticia-img-url','noticia-autor'].forEach(function(f){ document.getElementById(f).value=''; });
  document.getElementById('noticia-cat').value='Reportaje';
  document.getElementById('noticia-fecha').value='';
  document.getElementById('noticia-featured').checked=false;
  document.getElementById('modal-noticia-title').textContent='Nueva Noticia';
  openModal('modal-noticia');
}
function editNoticia(id){
  var n = DB.noticias.find(function(x){ return x.id===id; }); if(!n) return;
  document.getElementById('noticia-id').value=n.id;
  document.getElementById('noticia-titulo').value=n.titulo;
  document.getElementById('noticia-cat').value=n.cat;
  document.getElementById('noticia-fecha').value=n.fecha;
  document.getElementById('noticia-excerpt').value=n.excerpt;
  document.getElementById('noticia-contenido').value=n.contenido||'';
  document.getElementById('noticia-tiempo').value=n.tiempo;
  document.getElementById('noticia-img-url').value=n.img||'';
  document.getElementById('noticia-autor').value=n.autor||'';
  document.getElementById('noticia-featured').checked=n.featured;
  document.getElementById('modal-noticia-title').textContent='Editar Noticia';
  openModal('modal-noticia');
}
function saveNoticia(){
  var id = document.getElementById('noticia-id').value;
  var titulo = document.getElementById('noticia-titulo').value.trim();
  if(!titulo){ showToast('El título es obligatorio',true); return; }
  var data = { titulo:titulo, cat:document.getElementById('noticia-cat').value, fecha:document.getElementById('noticia-fecha').value, excerpt:document.getElementById('noticia-excerpt').value, contenido:document.getElementById('noticia-contenido').value, tiempo:document.getElementById('noticia-tiempo').value, img:document.getElementById('noticia-img-url').value, autor:document.getElementById('noticia-autor').value||'Redacción RollerZone', featured:document.getElementById('noticia-featured').checked };
  if(data.featured) DB.noticias.forEach(function(n){ n.featured=false; });
  if(id){ var idx=DB.noticias.findIndex(function(x){ return x.id==id; }); if(idx>-1){ data.id=parseInt(id); DB.noticias[idx]=data; } }
  else { data.id=genId(); DB.noticias.unshift(data); }
  closeModal('modal-noticia'); renderAdminNoticias(); renderNoticias(); showToast('✓ Noticia guardada');
}
function delNoticia(id){
  if(!confirm('¿Eliminar esta noticia?')) return;
  DB.noticias = DB.noticias.filter(function(n){ return n.id!==id; });
  renderAdminNoticias(); renderNoticias(); showToast('Noticia eliminada');
}

function openModalEvento(){
  document.getElementById('evento-id').value='';
  ['evento-nombre','evento-lugar','evento-inscritos','evento-descripcion','evento-img-url'].forEach(function(f){ document.getElementById(f).value=''; });
  document.getElementById('evento-tipo').value='Nacional';
  document.getElementById('evento-fecha').value='';
  document.getElementById('modal-evento-title').textContent='Nuevo Evento';
  openModal('modal-evento');
}
function editEvento(id){
  var e = DB.eventos.find(function(x){ return x.id===id; }); if(!e) return;
  document.getElementById('evento-id').value=e.id;
  document.getElementById('evento-nombre').value=e.nombre;
  document.getElementById('evento-fecha').value=e.fecha;
  document.getElementById('evento-tipo').value=e.tipo;
  document.getElementById('evento-lugar').value=e.lugar;
  document.getElementById('evento-inscritos').value=e.inscritos||'';
  document.getElementById('evento-descripcion').value=e.descripcion||'';
  document.getElementById('evento-img-url').value=e.img||'';
  document.getElementById('modal-evento-title').textContent='Editar Evento';
  openModal('modal-evento');
}
function saveEvento(){
  var id = document.getElementById('evento-id').value;
  var nombre = document.getElementById('evento-nombre').value.trim();
  if(!nombre){ showToast('El nombre es obligatorio',true); return; }
  var data = { nombre:nombre, fecha:document.getElementById('evento-fecha').value, tipo:document.getElementById('evento-tipo').value, lugar:document.getElementById('evento-lugar').value, inscritos:document.getElementById('evento-inscritos').value, descripcion:document.getElementById('evento-descripcion').value, img:document.getElementById('evento-img-url').value };
  if(id){ var idx=DB.eventos.findIndex(function(x){ return x.id==id; }); if(idx>-1){ data.id=parseInt(id); DB.eventos[idx]=data; } }
  else { data.id=genId(); DB.eventos.push(data); }
  closeModal('modal-evento'); renderAdminEventos(); renderEventos(); showToast('✓ Evento guardado');
}
function delEvento(id){
  if(!confirm('¿Eliminar este evento?')) return;
  DB.eventos = DB.eventos.filter(function(e){ return e.id!==id; });
  renderAdminEventos(); renderEventos(); showToast('Evento eliminado');
}

function openModalEntrevista(){
  document.getElementById('entrevista-id').value='';
  ['entrevista-nombre','entrevista-rol','entrevista-quote','entrevista-contenido','entrevista-tags','entrevista-img-url'].forEach(function(f){ document.getElementById(f).value=''; });
  document.getElementById('modal-entrevista-title').textContent='Nueva Entrevista';
  openModal('modal-entrevista');
}
function editEntrevista(id){
  var e = DB.entrevistas.find(function(x){ return x.id===id; }); if(!e) return;
  document.getElementById('entrevista-id').value=e.id;
  document.getElementById('entrevista-nombre').value=e.nombre;
  document.getElementById('entrevista-rol').value=e.rol;
  document.getElementById('entrevista-quote').value=e.quote;
  document.getElementById('entrevista-contenido').value=e.contenido||'';
  document.getElementById('entrevista-tags').value=e.tags||'';
  document.getElementById('entrevista-img-url').value=e.img||'';
  document.getElementById('modal-entrevista-title').textContent='Editar Entrevista';
  openModal('modal-entrevista');
}
function saveEntrevista(){
  var id = document.getElementById('entrevista-id').value;
  var nombre = document.getElementById('entrevista-nombre').value.trim();
  if(!nombre){ showToast('El nombre es obligatorio',true); return; }
  var data = { nombre:nombre, rol:document.getElementById('entrevista-rol').value, quote:document.getElementById('entrevista-quote').value, contenido:document.getElementById('entrevista-contenido').value, tags:document.getElementById('entrevista-tags').value, img:document.getElementById('entrevista-img-url').value, imagenes:[] };
  if(id){ var idx=DB.entrevistas.findIndex(function(x){ return x.id==id; }); if(idx>-1){ data.id=parseInt(id); DB.entrevistas[idx]=data; } }
  else { data.id=genId(); DB.entrevistas.push(data); }
  closeModal('modal-entrevista'); renderAdminEntrevistas(); renderEntrevistas(); showToast('✓ Entrevista guardada');
}
function delEntrevista(id){
  if(!confirm('¿Eliminar esta entrevista?')) return;
  DB.entrevistas = DB.entrevistas.filter(function(e){ return e.id!==id; });
  renderAdminEntrevistas(); renderEntrevistas(); showToast('Entrevista eliminada');
}

function openModalSponsor(){
  document.getElementById('sponsor-id').value='';
  ['sponsor-nombre','sponsor-tagline','sponsor-desc','sponsor-web','sponsor-sector','sponsor-img-url','sponsor-social'].forEach(function(f){ document.getElementById(f).value=''; });
  document.getElementById('sponsor-tier').value='Oro';
  document.getElementById('modal-sponsor-title').textContent='Nuevo Patrocinador';
  openModal('modal-sponsor');
}
function editSponsor(id){
  var s = DB.sponsors.find(function(x){ return x.id===id; }); if(!s) return;
  document.getElementById('sponsor-id').value=s.id;
  document.getElementById('sponsor-nombre').value=s.nombre;
  document.getElementById('sponsor-tier').value=s.tier;
  document.getElementById('sponsor-tagline').value=s.tagline||'';
  document.getElementById('sponsor-desc').value=s.desc||'';
  document.getElementById('sponsor-web').value=s.web||'';
  document.getElementById('sponsor-sector').value=s.sector||'';
  document.getElementById('sponsor-img-url').value=s.img||'';
  document.getElementById('sponsor-social').value=s.social||'';
  document.getElementById('modal-sponsor-title').textContent='Editar Patrocinador';
  openModal('modal-sponsor');
}
function saveSponsor(){
  var id = document.getElementById('sponsor-id').value;
  var nombre = document.getElementById('sponsor-nombre').value.trim();
  if(!nombre){ showToast('El nombre es obligatorio',true); return; }
  var data = { nombre:nombre, tier:document.getElementById('sponsor-tier').value, tagline:document.getElementById('sponsor-tagline').value, desc:document.getElementById('sponsor-desc').value, web:document.getElementById('sponsor-web').value, sector:document.getElementById('sponsor-sector').value, img:document.getElementById('sponsor-img-url').value, social:document.getElementById('sponsor-social').value };
  if(id){ var idx=DB.sponsors.findIndex(function(x){ return x.id==id; }); if(idx>-1){ data.id=parseInt(id); DB.sponsors[idx]=data; } }
  else { data.id=genId(); DB.sponsors.push(data); }
  closeModal('modal-sponsor'); renderAdminSponsors(); renderSponsors(); showToast('✓ Patrocinador guardado');
}
function delSponsor(id){
  if(!confirm('¿Eliminar este patrocinador?')) return;
  DB.sponsors = DB.sponsors.filter(function(s){ return s.id!==id; });
  renderAdminSponsors(); renderSponsors(); showToast('Patrocinador eliminado');
}

function openModalColaborador(){
  document.getElementById('colaborador-id').value='';
  ['colaborador-nombre','colaborador-rol','colaborador-bio','colaborador-desde','colaborador-social','colaborador-img-url'].forEach(function(f){ document.getElementById(f).value=''; });
  document.getElementById('modal-colaborador-title').textContent='Nuevo Miembro del Equipo';
  openModal('modal-colaborador');
}
function editColaborador(id){
  var c = DB.colaboradores.find(function(x){ return x.id===id; }); if(!c) return;
  document.getElementById('colaborador-id').value=c.id;
  document.getElementById('colaborador-nombre').value=c.nombre;
  document.getElementById('colaborador-rol').value=c.rol;
  document.getElementById('colaborador-bio').value=c.bio;
  document.getElementById('colaborador-desde').value=c.desde;
  document.getElementById('colaborador-social').value=c.social||'';
  document.getElementById('colaborador-img-url').value=c.img||'';
  document.getElementById('modal-colaborador-title').textContent='Editar Miembro del Equipo';
  openModal('modal-colaborador');
}
function saveColaborador(){
  var id = document.getElementById('colaborador-id').value;
  var nombre = document.getElementById('colaborador-nombre').value.trim();
  if(!nombre){ showToast('El nombre es obligatorio',true); return; }
  var data = { nombre:nombre, rol:document.getElementById('colaborador-rol').value, bio:document.getElementById('colaborador-bio').value, desde:document.getElementById('colaborador-desde').value, social:document.getElementById('colaborador-social').value, img:document.getElementById('colaborador-img-url').value };
  if(id){ var idx=DB.colaboradores.findIndex(function(x){ return x.id==id; }); if(idx>-1){ data.id=parseInt(id); DB.colaboradores[idx]=data; } }
  else { data.id=genId(); DB.colaboradores.push(data); }
  closeModal('modal-colaborador'); renderAdminColaboradores(); renderColaboradores(); showToast('✓ Miembro del equipo guardado');
  document.getElementById('dash-colaboradores').textContent = DB.colaboradores.length;
}
function delColaborador(id){
  if(!confirm('¿Eliminar este miembro del equipo?')) return;
  DB.colaboradores = DB.colaboradores.filter(function(c){ return c.id!==id; });
  renderAdminColaboradores(); renderColaboradores(); showToast('Miembro eliminado');
  document.getElementById('dash-colaboradores').textContent = DB.colaboradores.length;
}

/* TICKER ADMIN */
function addTickerItem(){
  var input = document.getElementById('ticker-new-input');
  var val = input.value.trim(); if(!val) return;
  DB.ticker.push(val); input.value=''; renderTickerAdmin();
}
function delTickerItem(i){ DB.ticker.splice(i,1); renderTickerAdmin(); }
function saveTickerItems(){ renderTicker(); showToast('✓ Ticker actualizado'); }

/* HERO */
function saveHero(){
  DB.hero.tag = document.getElementById('hero-tag-input').value || DB.hero.tag;
  DB.hero.titulo = document.getElementById('hero-title-input').value || DB.hero.titulo;
  DB.hero.meta = document.getElementById('hero-meta-input').value || DB.hero.meta;
  DB.hero.excerpt = document.getElementById('hero-excerpt-input').value || DB.hero.excerpt;
  renderHero(); showToast('✓ Hero actualizado');
}

/* ADMIN PANELS */
function showPanel(panelId, btn){
  document.querySelectorAll('.admin-panel').forEach(function(p){ p.classList.remove('active'); });
  document.querySelectorAll('.admin-nav-item').forEach(function(b){ b.classList.remove('active'); });
  var el = document.getElementById('panel-'+panelId);
  if(el) el.classList.add('active');
  if(btn) btn.classList.add('active');
  document.getElementById('admin-topbar-title').textContent = (btn ? btn.textContent.trim() : panelId);
}

/* ADMIN OPEN/CLOSE */
function openAdmin(){
  document.getElementById('admin-overlay').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeAdmin(){
  document.getElementById('admin-overlay').classList.remove('open');
  document.body.style.overflow='';
}
function doLogin(){
  var user = document.getElementById('login-user').value;
  var pass = document.getElementById('login-pass').value;
  if(user==='admin' && pass==='admin123'){
    document.getElementById('admin-login').classList.add('hidden');
    var ui = document.getElementById('admin-ui');
    ui.classList.remove('hidden');
    ui.style.display='flex';
    renderAdminNoticias(); renderAdminEventos(); renderAdminEntrevistas(); renderAdminSponsors(); renderAdminColaboradores(); renderTickerAdmin();
  } else {
    document.getElementById('login-error').style.display='block';
  }
}

/* =================== SITE JS =================== */
function toggleMenu(){ document.getElementById('mobileMenu').classList.toggle('open'); }

window.addEventListener('scroll',function(){
  var sp = window.scrollY + 80;
  var navLinks = document.querySelectorAll('.nav-links a');
  document.querySelectorAll('[id]').forEach(function(s){
    if(s.offsetTop<=sp && s.offsetTop+s.offsetHeight>sp){
      navLinks.forEach(function(l){ l.classList.remove('active'); if(l.getAttribute('href')==='#'+s.id) l.classList.add('active'); });
    }
  });
});

var ro = new IntersectionObserver(function(entries){
  entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('visible'); ro.unobserve(e.target); } });
},{threshold:.08});
document.querySelectorAll('.reveal').forEach(function(el){ ro.observe(el); });

var co = new IntersectionObserver(function(entries){
  entries.forEach(function(e){ if(e.isIntersecting){ animateCounter(e.target); co.unobserve(e.target); } });
},{threshold:.5});
document.querySelectorAll('.stat-num[data-target]').forEach(function(el){ co.observe(el); });
function animateCounter(el){
  var target = parseInt(el.getAttribute('data-target'));
  var start = null;
  function step(ts){
    if(!start) start=ts;
    var prog = Math.min((ts-start)/1400,1);
    var eased = 1-Math.pow(1-prog,3);
    el.textContent = Math.floor(eased*target)>=1000 ? Math.floor(eased*target).toLocaleString('es-ES') : Math.floor(eased*target);
    if(prog<1) requestAnimationFrame(step);
    else el.textContent = target>=1000 ? target.toLocaleString('es-ES') : target;
  }
  requestAnimationFrame(step);
}

function switchCat(btn,catId){
  document.querySelectorAll('.ranking-cat-btn').forEach(function(b){ b.classList.remove('active'); });
  document.querySelectorAll('.ranking-cat-panel').forEach(function(p){ p.classList.remove('active'); });
  btn.classList.add('active');
  var panel = document.getElementById(catId); if(panel) panel.classList.add('active');
}
function switchGender(btn,panelId){
  var parent = btn.closest('.ranking-cat-panel'); if(!parent) return;
  parent.querySelectorAll('.ranking-gender-tab').forEach(function(b){ b.classList.remove('active'); });
  parent.querySelectorAll('.ranking-gender-panel').forEach(function(p){ p.classList.remove('active'); });
  btn.classList.add('active');
  var panel = document.getElementById(panelId); if(panel) panel.classList.add('active');
}

function showNewsletter(){
  var bar = document.querySelector('.newsletter-bar');
  if(bar) bar.scrollIntoView({behavior:'smooth',block:'center'});
  setTimeout(function(){ var el=document.getElementById('nlEmail'); if(el) el.focus(); },600);
}
function subscribeNewsletter(){
  var email = document.getElementById('nlEmail').value.trim();
  if(!email||!email.includes('@')){ alert('Por favor, introduce un correo válido.'); return; }
  var btn = document.querySelector('.newsletter-btn');
  btn.textContent='✓ Suscrito'; btn.style.background='var(--green)';
  document.getElementById('nlEmail').value='';
  setTimeout(function(){ btn.textContent='Suscribirse'; btn.style.background=''; },3000);
}

function closeLightbox(){ document.getElementById('lightbox').classList.remove('open'); document.body.style.overflow=''; }
document.addEventListener('keydown',function(e){ if(e.key==='Escape'){ closeLightbox(); closeAdmin(); } });

/* =================== INIT =================== */
renderHero();
renderNoticias();
renderEventos();
renderEntrevistas();
renderSponsors();
renderColaboradores();
renderRevista();
renderTicker();
