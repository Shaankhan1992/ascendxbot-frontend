// year
document.getElementById('year').textContent = new Date().getFullYear();

// mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (menuBtn) menuBtn.onclick = () => mobileMenu.classList.toggle('hidden');

// modal helpers
function openModal(id){ document.getElementById(id).classList.add('show'); }
function closeModal(id){ document.getElementById(id).classList.remove('show'); }
function switchModal(from,to){ closeModal(from); openModal(to); }

// close on backdrop click
document.querySelectorAll('.modal').forEach(m=>{
  m.addEventListener('click', e=>{ if(e.target===m) m.classList.remove('show'); });
});
