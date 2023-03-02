// TABS
(() => {
  const firstParams = {
    tabsBtnClass: "js-tab",
    wrap: "js-tabs-wrap",
    content: "js-tab-content",
    active: "active"
  };

  function setTabs(params) {
    const tabBtns = document.querySelectorAll(`.${params.tabsBtnClass}`);

    function onTabClick(e) {
      e.preventDefault();
      const path = e.target.dataset.path;
      const wrap = e.target.closest(`.${params.wrap}`);
      console.log(e);
      console.log(wrap);
      const currentContent = wrap.querySelector(`.${params.content}[data-target="${path}"]`);
      const contents = wrap.querySelectorAll(`.${params.content}`);

      contents.forEach((el) => {
        el.classList.remove(params.active);
      });

      currentContent.classList.add(params.active);

      tabBtns.forEach((el) => {
        el.classList.remove(params.active);
      });

      this.classList.add(params.active);
    }

    tabBtns.forEach(function (el) {
      el.addEventListener("click", onTabClick);
    });
  }

  setTabs(firstParams);

})();


// BURGER
(() => {
  function setBurger(params) {
    const btn = document.querySelector(`.${params.btnClass}`);
    const nav = document.querySelector(`.${params.navClass}`);
    const menu = document.querySelector(`.${params.menuClass}`);

    btn.setAttribute('aria-expanded', false);

    menu.addEventListener("animationend", function () {
      if (this.classList.contains(params.hiddenClass)) {
        this.classList.remove(params.activeClass);
        this.classList.remove(params.hiddenClass);
      }
    });

    nav.addEventListener("animationend", function () {
      if (this.classList.contains(params.hiddenClass)) {
        this.classList.remove(params.activeClass);
        this.classList.remove(params.hiddenClass);
      }
    });

    btn.addEventListener("click", function () {
      this.classList.toggle(params.activeClass);

      if (
        !menu.classList.contains(params.activeClass) &&
        !menu.classList.contains(params.hiddenClass)
      ) {
        menu.classList.add(params.activeClass);
        document.body.style.overflow = 'hidden';
        btn.setAttribute('aria-expanded', true);
      } else {
        menu.classList.add(params.hiddenClass);
        document.body.removeAttribute('style');
        btn.setAttribute('aria-expanded', false);
      }

      if (
        !nav.classList.contains(params.activeClass) &&
        !nav.classList.contains(params.hiddenClass)
      ) {
        nav.classList.add(params.activeClass);
        document.body.style.overflow = 'hidden';
        btn.setAttribute('aria-expanded', true);
      } else {
        nav.classList.add(params.hiddenClass);
        document.body.removeAttribute('style');
        btn.setAttribute('aria-expanded', false);
      }
    });

  }

  setBurger({
    btnClass: "js-hamburger",
    menuClass: "js-header-list",
    navClass: "js-header-nav",
    activeClass: "is-active",
    hiddenClass: "is-closed"
  });
})();

// player expand

(() => {
  const liveBtn = document.getElementById('liveBtn');
  const liveBtnOpened1 = document.getElementById('liveBtn-opened1');
  const liveBtnOpened2 = document.getElementById('liveBtn-opened2');
  const playBtn1 = document.getElementById('player-btn1');
  const playBtn2 = document.getElementById('player-btn2');
  const playText1 = document.getElementById('player-text1');
  const playText2 = document.getElementById('player-text2');


  liveBtn.addEventListener('click', function () {
    liveBtnOpened1.classList.toggle('is-opened');
    liveBtnOpened2.classList.toggle('is-opened');
    playBtn1.classList.toggle('is-opened');
    playBtn2.classList.toggle('is-opened');
    playText1.classList.toggle('is-opened');
    playText2.classList.toggle('is-opened');
  })
})();

// programs Select

(() => {
  const select = document.querySelector('.js-select-choice');
  const choices = new Choices(select, {
    searchEnabled: false,
    itemSelectText: '',
    position: 'bottom',
    classNames: {
      containerOuter: 'default-select',
      containerInner: 'default-select__inner',
      input: 'default-select__input',
      inputCloned: 'default-select__input--cloned',
      list: 'default-select__list',
      listItems: 'default-select__list--multiple',
      listSingle: 'default-select__list--single',
      listDropdown: 'default-select__list--dropdown',
      item: 'default-select__item',
      itemSelectable: 'default-select__item--selectable',
      itemDisabled: 'default-select__item--disabled',
      itemChoice: 'default-select__item--choice',
      placeholder: 'default-select__placeholder',
      group: 'default-select__group',
      groupHeading: 'default-select__heading',
      button: 'default-select__button',
      activeState: 'is-active',
      focusState: 'is-focused',
      openState: 'is-open',
      disabledState: 'is-disabled',
      highlightedState: 'is-highlighted',
      selectedState: 'is-selected',
      flippedState: 'is-flipped',
      loadingState: 'is-loading',
      noResults: 'has-no-results',
      noChoices: 'has-no-default-select'
    },
  });
})();

// Accordion
(() => {
new Accordion('.js-accordion-container');
})();

(() => {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    updateOnWindowResize: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 2.2,
        spaceBetween: 25,
      },
      680: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1281: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    }

  });

const swiperPrev = document.getElementById('swiperPrev')
const swiperNext = document.getElementById('swiperNext')

swiperPrev.addEventListener('click', () => {
  swiper.slidePrev();
})
swiperNext.addEventListener('click', () => {
  swiper.slideNext();
})
})();

(() => {
const validation = new JustValidate('#form');

validation
  .addField('#message', [
    {
      rule: 'required',
      errorMessage: 'Введите сообщение!',
    }
  ])
  .addField('#agreement', [
    {
      rule: 'required',
      errorMessage: ' ',
    }
  ])
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Ошибка',
    },
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 30,
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Требуется указать e-mail',
    },
    {
      rule: 'email',
      errorMessage: 'Неверный формат e-mail',
    },
  ])
})();

(() => {
  const expandBtn = document.querySelector('.podcasts__btn');
  const playlistItem = document.querySelectorAll('.podcasts__list-item');
  expandBtn.addEventListener('click', function () {
    playlistItem.forEach((el) => {
      el.style.display = 'flex';
    })
  })

})();

(() => {
function setSearch(params) {
  const openBtn = document.querySelector(`.${params.openBtnClass}`);
  const search = document.querySelector(`.${params.searchClass}`);
  const closeBtn = search.querySelector(`.${params.closeBtnClass}`);

  search.addEventListener("animationend", function (evt) {
    if (this._isOpened) {
      this.classList.remove(params.activeClass);
      this.classList.remove(params.hiddenClass);
      this._isOpened = false;
    } else {
      this._isOpened = true;
    }
  });

  search.addEventListener('click', function(evt) {
    evt._isSearch = true;
  });

  openBtn.addEventListener("click", function (evt) {
    this.disabled = true;

    if (
      !search.classList.contains(params.activeClass) &&
      !search.classList.contains(params.hiddenClass)
    ) {
      search.classList.add(params.activeClass);
    }
  });

  closeBtn.addEventListener('click', function () {
    openBtn.disabled = false;
    search.classList.add(params.hiddenClass);
  });

  document.body.addEventListener('click', function (evt) {
    if (!evt._isSearch && search._isOpened) {
      openBtn.disabled = false;
      search.classList.add(params.hiddenClass);
    }
  });
}

setSearch({
  openBtnClass: "js-open-search",
  closeBtnClass: "js-close",
  searchClass: "js-form",
  activeClass: "is-opened",
  hiddenClass: "is-closed"
});

})();
