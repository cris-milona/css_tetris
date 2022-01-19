const tl = gsap.timeline({
  defaults: { ease: Linear },
});
//to stop scrolling until animation has finished we set the overflow to hidden...
tl.set(document.body, { overflow: 'hidden' })
  .to('#starting__text', {
    y: '0%',
    duration: 2,
    stagger: 0.5,
  })
  .to('#start', { y: '100%', duration: 2.5 })
  //... and then we reveal it again
  .set(document.body, { overflow: 'auto' });
