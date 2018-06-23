export const morph = time => ({
  componentWillEnter({ done, overEl, triggerEl, targetEl, positionObj }) {
    const bb = triggerEl.getBoundingClientRect();
    const mybb = overEl.getBoundingClientRect();

    overEl.style.pointerEvents = 'none';
    overEl.style.opacity = 0;
    overEl.style.transition = 'none';
    overEl.style.transformOrigin = 'top left';

    overEl.style.transform = [
      `translate3d(calc(${bb.x - mybb.x}px), ${bb.y - mybb.y}px, 0)`,
      `scale(${bb.width / mybb.width}, ${bb.height / mybb.height})`,
    ].join(' ');

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        overEl.style.transition = `opacity ${time}ms cubic-bezier(0.175, 0.885, 0.32, 1), transform ${time}ms cubic-bezier(0.175, 0.885, 0.32, 1)`;
        overEl.style.opacity = 1;
        overEl.style.transform = 'none';
        setTimeout(() => {
          overEl.style.pointerEvents = 'all';
          done();
        }, time);
      });
    });
  },

  componentWillLeave({ done, overEl, triggerEl, targetEl, positionObj }) {
    const bb = triggerEl.getBoundingClientRect();
    const mybb = overEl.getBoundingClientRect();

    overEl.style.transition = `opacity ${time}ms cubic-bezier(0.375, 0.685, 0.32, 1), transform ${time}ms cubic-bezier(0.375, 0.685, 0.32, 1)`;

    requestAnimationFrame(() => {
      overEl.style.opacity = 0;
      overEl.style.transformOrigin = 'top left';

      overEl.style.transform = [
        `translate3d(calc(${bb.x - mybb.x}px), ${bb.y - mybb.y}px, 0)`,
        `scale(${bb.width / mybb.width}, ${bb.height / mybb.height})`,
      ].join(' ');

      setTimeout(() => {
        done();
      }, time);
    });
  },
});

export const expand = time => ({
  componentWillEnter({ done, overEl, triggerEl, targetEl, positionObj }) {
    overEl.style.pointerEvents = 'none';
    overEl.style.opacity = 0;
    overEl.style.transition = 'none';
    // This needs to be the anchor point relative to the node itself
    overEl.style.transformOrigin = 'top right';
    overEl.style.transform = `scale(0)`;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        overEl.style.transition = `opacity ${time}ms cubic-bezier(0.175, 0.885, 0.32, 1.275), transform ${time}ms cubic-bezier(0.175, 0.885, 0.32, 1.275)`;
        overEl.style.opacity = 1;
        overEl.style.transform = 'none';
        setTimeout(() => {
          overEl.style.pointerEvents = 'all';
          done();
        }, time);
      });
    });
  },

  componentWillLeave({ done, overEl, triggerEl, targetEl, positionObj }) {
    overEl.style.transition = `opacity ${time}ms cubic-bezier(0.6, -0.28, 0.735, 0.045), transform ${time}ms cubic-bezier(0.6, -0.28, 0.735, 0.045)`;

    requestAnimationFrame(() => {
      overEl.style.opacity = 0;
      overEl.style.transformOrigin = 'top right';
      overEl.style.transform = `scale(0)`;

      setTimeout(() => {
        done();
      }, time);
    });
  },
});

export const fadeIn = time => ({
  componentWillEnter({ done, overEl, triggerEl, targetEl, positionObj }) {
    overEl.style.opacity = 0;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        overEl.style.transition = `opacity ${time}ms ease-out`;
        overEl.style.opacity = 1;
        done();
      });
    });
  },

  componentWillLeave({ done, overEl }) {
    overEl.style.transition = `opacity ${time}ms ease-in`;
    overEl.style.opacity = 0;
    setTimeout(done, time);
  },
});
