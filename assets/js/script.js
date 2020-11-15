const mc = document.getElementById("mc");
const totalh = mc.getBoundingClientRect();
document.getElementById("scroller").style.height = totalh.height + "px";

const onScroll = e => {
  // console.log(e);
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
  const totalh = mc.getBoundingClientRect();
  const scrollPos = document.body.scrollTop;
  const scrollMaxY = window.scrollMaxY || (document.body.scrollHeight - vh);
  console.log(document.body.scrollTop, window.scrollY);
  console.log(vh, scrollPos, document.body.scrollHeight, window.scrollY)
  mc.style.bottom = scrollMaxY - window.scrollY + "px";
}
onScroll();
window.addEventListener("scroll", onScroll, {passive: true});

new TypeIt("#webdev-adjective", {
  strings: ["crazy", "suspicious", "dangerous", "mind-blowing", "stupendous"],
  startDelete: true,
  breakLines: false,
  nextStringDelay: [2500, 200],
  lifeLike: true,
  loop: true,
  loopDelay: [200, 2000]
}).go();
