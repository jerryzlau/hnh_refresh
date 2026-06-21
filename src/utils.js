export function imgFb(el) {
  if (el.dataset.cdn) { el.src = el.dataset.cdn; delete el.dataset.cdn; }
  else if (el.dataset.cdn2) { el.src = el.dataset.cdn2; delete el.dataset.cdn2; }
}
