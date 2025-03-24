export function scrollToDiv(elementId: string) {
  const element = document.getElementById(elementId);
  if (element) {
    window.scrollTo({
      top: findElementPosition(element),
      behavior: 'smooth',
    });
  }
}

function findElementPosition(obj: HTMLElement) {
  let currentTop = 0;
  while (obj) {
    currentTop += obj.offsetTop;
    obj = obj.offsetParent as HTMLElement;
  }
  return currentTop;
}
