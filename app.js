const body=document.body;const themeToggle=document.getElementById('themeToggle');const toast=document.getElementById('toast');
const saved=localStorage.getItem('qentra-theme');if(saved==='dark'){body.classList.add('dark');themeToggle.textContent='☀'}
themeToggle.addEventListener('click',()=>{body.classList.toggle('dark');const dark=body.classList.contains('dark');themeToggle.textContent=dark?'☀':'☾';localStorage.setItem('qentra-theme',dark?'dark':'light')});
document.querySelectorAll('[data-scroll]').forEach(btn=>btn.addEventListener('click',()=>document.querySelector(btn.dataset.scroll)?.scrollIntoView({behavior:'smooth'})));
function showToast(message){toast.textContent=message;toast.classList.add('show');clearTimeout(window.qToast);window.qToast=setTimeout(()=>toast.classList.remove('show'),2200)}
document.querySelectorAll('[data-exam]').forEach(btn=>btn.addEventListener('click',()=>showToast(`${btn.dataset.exam} Computer Science workspace selected`)));
document.getElementById('mockBtn').addEventListener('click',()=>showToast('Adaptive Mock Engine preview is ready for the next release.'));