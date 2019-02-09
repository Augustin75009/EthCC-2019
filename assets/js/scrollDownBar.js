const initScrollBar = () => {

    document.addEventListener('scroll', (event) => {
        const sh = document.body.scrollHeight;
        const ih = self.innerHeight
        const w = window.innerWidth
        const blueScroll = document.querySelector(".blue-scroll")
        const greyScroll = document.querySelector(".grey-scroll")
        const y = window.pageYOffset;
        const h = (y/(sh-ih))*(100-120/w*100) + 120/w*100;
        const hs = h.toString() + '%';
        const hg = 100 - h;
        const hgs = hg.toString() + '%';
        blueScroll.style.width = hs;
        greyScroll.style.width = hgs;
      });
}

initScrollBar()