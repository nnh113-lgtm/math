import { modules, navigation } from './modules.js';
import { icon } from './icons.js';

const app = document.querySelector('#app');
const link = (id, text, cls='') => `<a class="${cls}" href="#/${id}">${text}</a>`;
const moduleCard = m => `<a class="module-card clay" href="#/${m.id}"><div class="card-top"><span class="clay-icon ${m.tone}">${icon(m.icon)}</span><span class="badge">준비 중</span></div><h3>${m.title}</h3><p>${m.description}</p><span class="card-link">${m.label}${icon('arrow')}</span></a>`;

function home() {
 return `<section class="welcome"><div><span class="eyebrow">MY WORKSPACE</span><h1>모으는 일이, 가벼워지는 곳<span class="period">.</span></h1><p>필요한 정보를 모으고, 다음 가능성을 그려보세요.</p></div><span class="workspace-tag">개인 워크스페이스</span></section>
 <section class="hero clay"><div class="hero-copy"><span class="pill">${icon('sparkle')}작은 시작, 깔끔한 정리</span><h2>흩어진 것들을 모아,<br>한눈에 쏙.</h2><p>수합부터 시뮬레이션까지.<br>나만의 작업 공간을 차근차근 채워보세요.</p>${link('collection',`수합 공간 살펴보기 ${icon('arrow')}`,'button primary')}</div><div class="hero-stack" aria-label="수합과 시뮬레이션 기능 준비 중"><div class="stack-card stack-back"><span class="mini-label">SIMULATION</span><div class="stack-title">가능성을 그려요 ${icon('sliders')}</div><div class="bars"><i></i><i></i><i></i><i></i><i></i></div></div><div class="stack-card stack-front"><span class="mini-label">COLLECTION</span><div class="stack-title">한곳에 모아요 <span class="tiny-icon">${icon('folder')}</span></div><div class="sample-line"><span class="tick">${icon('check')}</span><span>응답과 자료</span></div><div class="sample-line"><span class="tick">${icon('check')}</span><span>아이디어와 의견</span></div><span class="sample-note">함께 채워갈 공간</span></div><span class="float-chip">${icon('layers')}차곡차곡, 모여</span></div></section>
 <section class="stats" aria-label="워크스페이스 현황"><div class="stat"><span class="stat-icon pink">${icon('folder')}</span><div><span>전체 수합</span><strong>0 <small>개</small></strong></div><span class="stat-note">첫 수합을 기다려요</span></div><div class="stat"><span class="stat-icon blue">${icon('sliders')}</span><div><span>시뮬레이션</span><strong>0 <small>개</small></strong></div><span class="stat-note">곧 만나요</span></div><div class="stat"><span class="stat-icon peach">${icon('clock')}</span><div><span>진행 중인 작업</span><strong>0 <small>개</small></strong></div><span class="stat-note">아직 작업이 없어요</span></div></section>
 <section><div class="section-heading"><h2>무엇부터 시작할까요?</h2><span>나에게 필요한 공간을 골라보세요</span></div><div class="module-grid">${modules.map(moduleCard).join('')}<a class="guide-card" href="#/guide"><span class="guide-icon">${icon('book')}</span><h3>모여가 처음이라면</h3><p>공간을 둘러보고<br>앞으로의 사용 흐름을 알아보세요.</p><span class="card-link">이용 가이드 ${icon('arrow')}</span></a></div></section>
 <section class="recent"><div class="section-heading"><h2>최근 작업</h2><span>지금부터 차곡차곡</span></div><div class="empty-row">${icon('layers')}<div><strong>아직 진행한 작업이 없어요</strong><p>수합과 시뮬레이션 기능이 추가되면 이곳에서 최근 작업을 확인할 수 있어요.</p></div></div></section>`;
}
function feature(id) {
 const m=modules.find(m=>m.id===id);
 return `<section class="welcome"><div><span class="eyebrow">${id==='collection'?'COLLECTION':'SIMULATION'}</span><h1>${m.title}</h1><p>${m.description}</p></div><span class="workspace-tag">준비 중</span></section><section class="feature-empty clay"><span class="clay-icon ${m.tone}">${icon(m.icon)}</span><span class="eyebrow">COMING SOON</span><h2>${id==='collection'?'새로운 수합이 시작될 자리예요':'가능성을 실험할 공간이에요'}</h2><p>${id==='collection'?'응답과 자료를 모으는 수합 기능이 이곳에 추가될 예정이에요.':'조건을 입력하고 결과를 비교하는 시뮬레이션이 이곳에 추가될 예정이에요.'}<br>현재는 기본 화면을 둘러볼 수 있어요.</p>${link('home',`홈으로 돌아가기 ${icon('arrow')}`,'button primary')}</section><div class="info-note">${icon('book')}<p>현재 버전에서는 수합 생성, 데이터 저장 및 시뮬레이션 실행을 제공하지 않아요.</p></div>`;
}
function guide() {return `<section class="welcome"><div><span class="eyebrow">QUICK GUIDE</span><h1>모여, 이렇게 둘러보세요.</h1><p>필요한 것을 모으고 살펴보는 작은 워크스페이스.</p></div></section><div class="guide-list">${[['01','홈에서 전체 흐름 보기','워크스페이스 현황과 각 기능으로 이동하는 바로가기를 확인하세요.','home'],['02','수합 공간 둘러보기','앞으로 응답과 자료를 모을 공간이에요. 현재는 준비 화면을 제공해요.','collection'],['03','시뮬레이션 공간 둘러보기','앞으로 조건에 따른 결과를 살펴볼 공간이에요. 현재는 준비 화면을 제공해요.','simulation']].map(([n,t,d,id])=>`<a class="guide-step clay" href="#/${id}"><span class="step-number">${n}</span><div><h2>${t}</h2><p>${d}</p></div>${icon('arrow')}</a>`).join('')}</div><div class="info-note">${icon('layers')}<p>기본 구조 버전 · 로그인, 서버 연결, 데이터 저장 기능은 아직 연결되지 않았어요.</p></div>`;}
function render() {
 const requested=location.hash.replace('#/','')||'home';
 const route=navigation.some(([id])=>id===requested)?requested:'home';
 document.title=`${navigation.find(([id])=>id===route)[1]} | 모여`;
 app.innerHTML=`<a class="skip-link" href="#main">본문으로 이동</a><aside class="sidebar"><a class="brand" href="#/home"><span class="brand-symbol">m</span><span>모여<span class="brand-sub">moyeo workspace</span></span></a><div class="workspace-switch"> <span class="workspace-avatar">M</span><div>나의 워크스페이스<small>Personal space</small></div></div><div class="nav-caption">WORKSPACE</div><nav aria-label="주 메뉴">${navigation.map(([id,label,i])=>link(id,`${icon(i)}<span>${label}</span>${id==='simulation'?'<span class="soon">SOON</span>':''}`,`nav-link ${id===route?'active':''}`).replace('class=',`${id===route?'aria-current="page" ':''}class=`)).join('')}</nav><div class="sidebar-bottom"><span class="bottom-mark">${icon('sparkle')}</span><strong>조금씩, 더 편리하게</strong><p>새로운 기능을 담아갈<br>우리의 작은 작업 공간.</p><span class="version">모여 · v0.1</span></div></aside><div class="page"><header class="topbar"><div class="breadcrumb">워크스페이스 <span>/</span> <strong>${navigation.find(([id])=>id===route)[1]}</strong></div><span class="top-label">차곡차곡 쌓이는 가능성</span><span class="profile" aria-label="개인 워크스페이스">M</span></header><main id="main" tabindex="-1">${route==='home'?home():route==='guide'?guide():feature(route)}<footer><span>© ${new Date().getFullYear()} 모여</span><span>모으고, 살펴보고, 한 걸음 더.</span></footer></main></div>`;
 window.scrollTo(0,0);
}
window.addEventListener('hashchange',()=>{render();document.querySelector('main').focus({preventScroll:true});});
app.addEventListener('click', event => {
 const skip = event.target.closest('.skip-link');
 if (skip) { event.preventDefault(); document.querySelector('main').focus(); }
});
render();
