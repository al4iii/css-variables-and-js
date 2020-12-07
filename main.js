const inputs = document.querySelectorAll('.controls input');

let handleUpdate = (e) => {
  const suffix = e.target.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${e.target.name}`, e.target.value + suffix);
};

document.body.addEventListener('change', handleUpdate);
document.body.addEventListener('mousemove', handleUpdate);
