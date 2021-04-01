export const scrollToId = (id: string) => {
  const nav = document.getElementById('nav-top');
  const navHeight = nav ? nav.getBoundingClientRect().height : 0;

  const target = document.getElementById(id);
  if (!target) {
    return false;
  }

  const targetTop = target.getBoundingClientRect().top;

  window.scrollTo({
    top: targetTop - navHeight + window.pageYOffset,
    left: 0,
    behavior: 'smooth',
  });

  return true;
};
