/*******************

        COUNT

********************/

function countUp() 
{
  var countEl = document.querySelector('.counter');
  var countBar = document.querySelector('.progress-bar');
  var countText = document.querySelector('.count-text');
  countText.innerHTML = 'loading...'
  var x = 0;
  var y = countEl.dataset.to;
  var z = countBar.dataset.to;
  
  function addNum() 
  {
    countEl.innerHTML = x;
    x += 0.1;
    if (x > y && x > z) 
    {
      clearInterval(timer);
      countText.innerHTML = 'System OK';
      toggleBtn.classList.remove('hidden');
    }
  }
  
  var timer = window.setInterval(addNum, 60);
  var toggleBtn = document.querySelector('.repeat-btn');
}
countUp();

/*******************

        TOOLTIP

********************/

class Button {

  constructor(el) 
  {
    this.el = el;
    
    this.bind();
  }
  
  bind() 
  {
    let isTouch = false,
        isTouched = false;

    this.el.addEventListener('touchstart', (e) => {
      isTouch = true;
      this.el.classList.add('is-touch');
  });
    
    document.body.addEventListener('touchstart', (e) => 
    {
      if (isTouched && e.target !== this.el) 
      {
        isTouch = false;
        isTouched = false;
        this.el.classList.remove('is-touch-hover');
      }
    });

    this.el.addEventListener('click', (e) => 
    {
      const hasAction = e.currentTarget.getAttribute('href') !== '#';

      if (!hasAction) 
      {
        e.preventDefault();
      }

      if (isTouch) 
      {
        if (hasAction) 
        {
          if (!isTouched) 
          { 
            e.preventDefault();
            isTouched = true;
          } else 
          { 
            isTouched = false;
          }
        } else 
        { 
          isTouched = !isTouched;
        }
        
        console.log('Click, isTouched', isTouched);

        this.el.classList.toggle('is-touch-hover', isTouched);
      }
    });
  }
  
};

const buttons = Array.from(document.getElementsByClassName('button'), (node) => {
  return new Button(node);
}); 

/*******************

        FLASH

********************/

var flash = document.getElementById("flash1");

function animate() {
  flash.style.opacity = Math.random();

  window.requestAnimationFrame(animate);
}

animate();

/*******************

        AUDIO
        SQUARE

********************/
    
const audio1 = document.querySelector('.audio1')
const square2 = document.querySelector('.square2')
square2.addEventListener('click', () =>
{
    audio1.play(); 
})

/*******************

        AUDIO
        HUD

********************/
    
const audio2 = document.querySelector('.audio2')
const hud = document.querySelector('#hud')
hud.addEventListener('click', () =>
{
    audio2.play(); 
})

/*******************

        AUDIO
        XTA

********************/

const audio7 = document.querySelector('.audio7')
const squareholog4 = document.querySelector('.squareholog4')
squareholog4.addEventListener('click', () =>
{
    audio7.play(); 
})

/*******************

        AUDIO
        XVB1

********************/

const audio3 = document.querySelector('.audio3')
const squareholog1 = document.querySelector('.squareholog1')
squareholog1.addEventListener('click', () =>
{
    audio3.play(); 
})

/*******************

        AUDIO
        XCP

********************/

const audio5 = document.querySelector('.audio5')
const squareholog3 = document.querySelector('.squareholog3')
squareholog3.addEventListener('click', () =>
{
    audio5.play(); 
})

/*******************

        AUDIO
        XS1

********************/

const audio4 = document.querySelector('.audio4')
const squareholog2 = document.querySelector('.squareholog2')
squareholog2.addEventListener('click', () =>
{
    audio4.play(); 
})

/*******************

        LIBELLULE 

********************/

const audio8 = document.querySelector('.audio8')
const image2 = document.querySelector('.image2')
image2.addEventListener('click', () =>
{
    audio8.play(); 
})

/*******************

      TOGGLE1

********************/

const menuToggle = document.querySelector('.item-6')
const menu = document.querySelector('.hologram')

menuToggle.addEventListener('click', () =>
{
  menu.classList.toggle("hologram-display")

})
