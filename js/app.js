document.addEventListener("DOMContentLoaded", function (event) {

	// бургер меню
	let burger = document.querySelector(".boxes-burger-menu");
	let menu = document.querySelector(".boxes-menu");
	let body = document.querySelector("body");

	burger.addEventListener("click", function () {
		burger.classList.toggle("boxes-active");
		menu.classList.toggle("boxes-active");
		body.classList.toggle("boxes-lock");
	});


	/* Проверка мобильного браузера */
	let isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

	// Добавление класса touch для HTML если браузер мобильный
	if (isMobile.any()) {
		document.documentElement.classList.add('touch');
		const arrows = document.querySelectorAll('.boxes-menu__arrow');
		arrows.forEach(arrow => {
			const subMenu = arrow.nextElementSibling;
			arrow.addEventListener("click", function (e) {
				subMenu.classList.toggle('boxes-open');
				arrow.classList.toggle('boxes-active');
			});
		});
	} else {
		document.documentElement.classList.add('mouse');
	}

	// видео
	const boxVideo = document.querySelector('.boxes-appreciated__video video');
	const boxPlay = document.querySelector('.boxes-appreciated__play');

	boxPlay.addEventListener("click", function (e) {
		boxVideo.play();
		boxPlay.classList.add('boxes-appreciated__play_act');
	});

	boxVideo.addEventListener("click", function (e) {
		boxVideo.pause();
		boxPlay.classList.remove('boxes-appreciated__play_act');
	});


	// галерея
	Fancybox.bind("[data-fancybox]", {
		// Your custom options
	});

	// слайдеры 
	let mobSwiper1;
	function mobileSlider1() {
		const sliderMob1 = document.querySelector('.boxes-advantages__slider'); //класс слайдера
		if (sliderMob1) {
			if (window.innerWidth <= 1300 && sliderMob1.dataset.mobile === 'false') {
				mobSwiper1 = new Swiper(sliderMob1, {
					observer: true,
					observeParents: true,
					slidesPerView: 1.5,
					spaceBetween: 0,
					speed: 800,


					// Кнопки "влево/вправо"
					navigation: {
						prevEl: '.swiper-button-prev',
						nextEl: '.swiper-button-next',
					},

					// Брейкпоинты

					breakpoints: {
						768: {
							slidesPerView: 2,
							spaceBetween: 0,
							autoHeight: true,
						},
						992: {
							slidesPerView: 3,
							spaceBetween: 10,
						},
					},
				});

				sliderMob1.dataset.mobile = 'true';
			}

			if (window.innerWidth > 1300) {
				sliderMob1.dataset.mobile = 'false';

				if (sliderMob1.classList.contains('swiper-initialized')) {
					mobSwiper1.destroy();
				}

			}
		}
	}



	function initSliders() {
		// Перечень слайдеров
		// Проверяем, есть ли слайдер на странице
		if (document.querySelector('.boxes-results__slider')) { // Указываем скласс нужного слайдера
			// Создаем слайдер
			new Swiper('.boxes-results__slider', { // Указываем скласс нужного слайдера
				observer: true,
				observeParents: true,
				slidesPerView: 1,
				spaceBetween: 20,
				speed: 800,

				pagination: {
					el: ".boxes-results__pagination",
					type: "fraction",
					renderFraction: function (currentClass, totalClass) {
						return '<span class="' + currentClass + '"></span>' +
							'<span>из</span>' +
							'<span class="' + totalClass + '"></span>';
					}
				},

				// Кнопки "влево/вправо"
				navigation: {
					prevEl: '.boxes-results__prev',
					nextEl: '.boxes-results__next',
				},

				breakpoints: {
					768: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					1300: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
				},

			});
		}

		if (document.querySelector('.boxes-doctors__slider')) { // Указываем скласс нужного слайдера
			// Создаем слайдер
			new Swiper('.boxes-doctors__slider', { // Указываем скласс нужного слайдера
				observer: true,
				observeParents: true,
				slidesPerView: 1,
				spaceBetween: 20,
				speed: 800,

				pagination: {
					el: ".boxes-doctors__pagination",
					type: "fraction",
					renderFraction: function (currentClass, totalClass) {
						return '<span class="' + currentClass + '"></span>' +
							'<span>из</span>' +
							'<span class="' + totalClass + '"></span>';
					}
				},

				// Кнопки "влево/вправо"
				navigation: {
					prevEl: '.boxes-doctors__prev',
					nextEl: '.boxes-doctors__next',
				},

				breakpoints: {
					768: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					1300: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
				},

			});
		}

		if (document.querySelector('.boxes-reviews__slider')) { // Указываем скласс нужного слайдера
			// Создаем слайдер
			new Swiper('.boxes-reviews__slider', { // Указываем скласс нужного слайдера
				observer: true,
				observeParents: true,
				slidesPerView: 1,
				spaceBetween: 20,
				speed: 800,

				pagination: {
					el: ".boxes-reviews__pagination",
					type: "fraction",
					renderFraction: function (currentClass, totalClass) {
						return '<span class="' + currentClass + '"></span>' +
							'<span>из</span>' +
							'<span class="' + totalClass + '"></span>';
					}
				},

				// Кнопки "влево/вправо"
				navigation: {
					prevEl: '.boxes-reviews__prev',
					nextEl: '.boxes-reviews__next',
				},

				breakpoints: {
					768: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					1300: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
				},

			});
		}

		if (document.querySelector('.boxes-stocks__slider')) { // Указываем скласс нужного слайдера
			// Создаем слайдер
			new Swiper('.boxes-stocks__slider', { // Указываем скласс нужного слайдера
				observer: true,
				observeParents: true,
				slidesPerView: 1,
				spaceBetween: 20,
				speed: 800,

				pagination: {
					el: ".boxes-stocks__pagination",
					type: "fraction",
					renderFraction: function (currentClass, totalClass) {
						return '<span class="' + currentClass + '"></span>' +
							'<span>из</span>' +
							'<span class="' + totalClass + '"></span>';
					}
				},

				// Кнопки "влево/вправо"
				navigation: {
					prevEl: '.boxes-stocks__prev',
					nextEl: '.boxes-stocks__next',
				},

				breakpoints: {
					768: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					1300: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
				},

			});
		}

		if (document.querySelector('.boxes-blog__slider')) { // Указываем скласс нужного слайдера
			// Создаем слайдер
			new Swiper('.boxes-blog__slider', { // Указываем скласс нужного слайдера
				observer: true,
				observeParents: true,
				slidesPerView: 1,
				spaceBetween: 20,
				speed: 800,

				// Кнопки "влево/вправо"
				navigation: {
					prevEl: '.boxes-blog__prev',
					nextEl: '.boxes-blog__next',
				},

				breakpoints: {
					768: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					1300: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
				},

			});
		}

		if (document.querySelector('.boxes-licenses__slider')) { // Указываем скласс нужного слайдера
			// Создаем слайдер
			new Swiper('.boxes-licenses__slider', { // Указываем скласс нужного слайдера
				observer: true,
				observeParents: true,
				slidesPerView: 1,
				spaceBetween: 20,
				speed: 800,

				// Кнопки "влево/вправо"
				navigation: {
					prevEl: '.boxes-licenses__prev',
					nextEl: '.boxes-licenses__next',
				},

				breakpoints: {
					768: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
					1300: {
						slidesPerView: 4,
						spaceBetween: 30,
					},
				},

			});
		}
	}



	window.addEventListener("load", function (e) {
		// Запуск инициализации мобильных слайдеров
		initSliders();
		mobileSlider1();

		window.addEventListener('resize', function (event) {
			mobileSlider1();
		});

	});



	// Табы

	function dataMediaQueries(array, dataSetValue) {
		// Получение объектов с медиа запросами
		const media = Array.from(array).filter(function (item, index, self) {
			if (item.dataset[dataSetValue]) {
				return item.dataset[dataSetValue].split(",")[0];
			}
		});
		// Инициализация объектов с медиа запросами
		if (media.length) {
			const breakpointsArray = [];
			media.forEach(item => {
				const params = item.dataset[dataSetValue];
				const breakpoint = {};
				const paramsArray = params.split(",");
				breakpoint.value = paramsArray[0];
				breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
				breakpoint.item = item;
				breakpointsArray.push(breakpoint);
			});
			// Получаем уникальные брейкпоинты
			let mdQueries = breakpointsArray.map(function (item) {
				return '(' + item.type + "-width: " + item.value + "px)," + item.value + ',' + item.type;
			});
			mdQueries = uniqArray(mdQueries);
			const mdQueriesArray = [];

			if (mdQueries.length) {
				// Работаем с каждым брейкпоинтом
				mdQueries.forEach(breakpoint => {
					const paramsArray = breakpoint.split(",");
					const mediaBreakpoint = paramsArray[1];
					const mediaType = paramsArray[2];
					const matchMedia = window.matchMedia(paramsArray[0]);
					// Объекты с нужными условиями
					const itemsArray = breakpointsArray.filter(function (item) {
						if (item.value === mediaBreakpoint && item.type === mediaType) {
							return true;
						}
					});
					mdQueriesArray.push({
						itemsArray,
						matchMedia
					})
				});
				return mdQueriesArray;
			}
		}
	}

	// Получение хеша в адресе сайта
	function getHash() {
		if (location.hash) { return location.hash.replace('#', ''); }
	}

	function tabs() {
		const tabs = document.querySelectorAll('[data-tabs]');
		let tabsActiveHash = [];

		if (tabs.length > 0) {
			const hash = getHash();
			if (hash && hash.startsWith('tab-')) {
				tabsActiveHash = hash.replace('tab-', '').split('-');
			}
			tabs.forEach((tabsBlock, index) => {
				tabsBlock.classList.add('_tab-init');
				tabsBlock.setAttribute('data-tabs-index', index);
				tabsBlock.addEventListener("click", setTabsAction);
				initTabs(tabsBlock);
			});

			// Получение слойлеров с медиа запросами
			let mdQueriesArray = dataMediaQueries(tabs, "tabs");
			if (mdQueriesArray && mdQueriesArray.length) {
				mdQueriesArray.forEach(mdQueriesItem => {
					// Событие
					mdQueriesItem.matchMedia.addEventListener("change", function () {
						setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
					});
					setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
				});
			}
		}
		// Установка позиций заголовков
		function setTitlePosition(tabsMediaArray, matchMedia) {
			tabsMediaArray.forEach(tabsMediaItem => {
				tabsMediaItem = tabsMediaItem.item;
				let tabsTitles = tabsMediaItem.querySelector('[data-tabs-titles]');
				let tabsTitleItems = tabsMediaItem.querySelectorAll('[data-tabs-title]');
				let tabsContent = tabsMediaItem.querySelector('[data-tabs-body]');
				let tabsContentItems = tabsMediaItem.querySelectorAll('[data-tabs-item]');
				tabsTitleItems = Array.from(tabsTitleItems).filter(item => item.closest('[data-tabs]') === tabsMediaItem);
				tabsContentItems = Array.from(tabsContentItems).filter(item => item.closest('[data-tabs]') === tabsMediaItem);
				tabsContentItems.forEach((tabsContentItem, index) => {
					if (matchMedia.matches) {
						tabsContent.append(tabsTitleItems[index]);
						tabsContent.append(tabsContentItem);
						tabsMediaItem.classList.add('_tab-spoller');
					} else {
						tabsTitles.append(tabsTitleItems[index]);
						tabsMediaItem.classList.remove('_tab-spoller');
					}
				});
			});
		}
		// Работа с контентом
		function initTabs(tabsBlock) {
			let tabsTitles = tabsBlock.querySelectorAll('[data-tabs-titles]>*');
			let tabsContent = tabsBlock.querySelectorAll('[data-tabs-body]>*');
			const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
			const tabsActiveHashBlock = tabsActiveHash[0] == tabsBlockIndex;

			if (tabsActiveHashBlock) {
				const tabsActiveTitle = tabsBlock.querySelector('[data-tabs-titles]>._tab-active');
				tabsActiveTitle ? tabsActiveTitle.classList.remove('_tab-active') : null;
			}
			if (tabsContent.length) {
				tabsContent = Array.from(tabsContent).filter(item => item.closest('[data-tabs]') === tabsBlock);
				tabsTitles = Array.from(tabsTitles).filter(item => item.closest('[data-tabs]') === tabsBlock);
				tabsContent.forEach((tabsContentItem, index) => {
					tabsTitles[index].setAttribute('data-tabs-title', '');
					tabsContentItem.setAttribute('data-tabs-item', '');

					if (tabsActiveHashBlock && index == tabsActiveHash[1]) {
						tabsTitles[index].classList.add('_tab-active');
					}
					tabsContentItem.hidden = !tabsTitles[index].classList.contains('_tab-active');
				});
			}
		}
		function setTabsStatus(tabsBlock) {
			let tabsTitles = tabsBlock.querySelectorAll('[data-tabs-title]');
			let tabsContent = tabsBlock.querySelectorAll('[data-tabs-item]');
			const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
			function isTabsAnamate(tabsBlock) {
				if (tabsBlock.hasAttribute('data-tabs-animate')) {
					return tabsBlock.dataset.tabsAnimate > 0 ? Number(tabsBlock.dataset.tabsAnimate) : 500;
				}
			}
			const tabsBlockAnimate = isTabsAnamate(tabsBlock);
			if (tabsContent.length > 0) {
				const isHash = tabsBlock.hasAttribute('data-tabs-hash');
				tabsContent = Array.from(tabsContent).filter(item => item.closest('[data-tabs]') === tabsBlock);
				tabsTitles = Array.from(tabsTitles).filter(item => item.closest('[data-tabs]') === tabsBlock);
				tabsContent.forEach((tabsContentItem, index) => {
					if (tabsTitles[index].classList.contains('_tab-active')) {
						if (tabsBlockAnimate) {
							_slideDown(tabsContentItem, tabsBlockAnimate);
						} else {
							tabsContentItem.hidden = false;
						}
						if (isHash && !tabsContentItem.closest('.popup')) {
							setHash(`tab-${tabsBlockIndex}-${index}`);
						}
					} else {
						if (tabsBlockAnimate) {
							_slideUp(tabsContentItem, tabsBlockAnimate);
						} else {
							tabsContentItem.hidden = true;
						}
					}
				});
			}
		}
		function setTabsAction(e) {
			const el = e.target;
			if (el.closest('[data-tabs-title]')) {
				const tabTitle = el.closest('[data-tabs-title]');
				const tabsBlock = tabTitle.closest('[data-tabs]');
				if (!tabTitle.classList.contains('_tab-active') && !tabsBlock.querySelector('._slide')) {
					let tabActiveTitle = tabsBlock.querySelectorAll('[data-tabs-title]._tab-active');
					tabActiveTitle.length ? tabActiveTitle = Array.from(tabActiveTitle).filter(item => item.closest('[data-tabs]') === tabsBlock) : null;
					tabActiveTitle.length ? tabActiveTitle[0].classList.remove('_tab-active') : null;
					tabTitle.classList.add('_tab-active');
					setTabsStatus(tabsBlock);
				}
				e.preventDefault();
			}
		}
	}

	tabs();


	// Показать ещё

	let _slideUp = (target, duration = 500, showmore = 0) => {
		if (!target.classList.contains('_slide')) {
			target.classList.add('_slide');
			target.style.transitionProperty = 'height, margin, padding';
			target.style.transitionDuration = duration + 'ms';
			target.style.height = `${target.offsetHeight}px`;
			target.offsetHeight;
			target.style.overflow = 'hidden';
			target.style.height = showmore ? `${showmore}px` : `0px`;
			target.style.paddingTop = 0;
			target.style.paddingBottom = 0;
			target.style.marginTop = 0;
			target.style.marginBottom = 0;
			window.setTimeout(() => {
				target.hidden = !showmore ? true : false;
				!showmore ? target.style.removeProperty('height') : null;
				target.style.removeProperty('padding-top');
				target.style.removeProperty('padding-bottom');
				target.style.removeProperty('margin-top');
				target.style.removeProperty('margin-bottom');
				!showmore ? target.style.removeProperty('overflow') : null;
				target.style.removeProperty('transition-duration');
				target.style.removeProperty('transition-property');
				target.classList.remove('_slide');
				// Создаем событие 
				document.dispatchEvent(new CustomEvent("slideUpDone", {
					detail: {
						target: target
					}
				}));
			}, duration);
		}
	}
	let _slideDown = (target, duration = 500, showmore = 0) => {
		if (!target.classList.contains('_slide')) {
			target.classList.add('_slide');
			target.hidden = target.hidden ? false : null;
			showmore ? target.style.removeProperty('height') : null;
			let height = target.offsetHeight;
			target.style.overflow = 'hidden';
			target.style.height = showmore ? `${showmore}px` : `0px`;
			target.style.paddingTop = 0;
			target.style.paddingBottom = 0;
			target.style.marginTop = 0;
			target.style.marginBottom = 0;
			target.offsetHeight;
			target.style.transitionProperty = "height, margin, padding";
			target.style.transitionDuration = duration + 'ms';
			target.style.height = height + 'px';
			target.style.removeProperty('padding-top');
			target.style.removeProperty('padding-bottom');
			target.style.removeProperty('margin-top');
			target.style.removeProperty('margin-bottom');
			window.setTimeout(() => {
				target.style.removeProperty('height');
				target.style.removeProperty('overflow');
				target.style.removeProperty('transition-duration');
				target.style.removeProperty('transition-property');
				target.classList.remove('_slide');
				// Создаем событие 
				document.dispatchEvent(new CustomEvent("slideDownDone", {
					detail: {
						target: target
					}
				}));
			}, duration);
		}
	}
	let _slideToggle = (target, duration = 500) => {
		if (target.hidden) {
			return _slideDown(target, duration);
		} else {
			return _slideUp(target, duration);
		}
	}
	// Обработа медиа запросов из атрибутов 
	function dataMediaQueries(array, dataSetValue) {
		// Получение объектов с медиа запросами
		const media = Array.from(array).filter(function (item, index, self) {
			if (item.dataset[dataSetValue]) {
				return item.dataset[dataSetValue].split(",")[0];
			}
		});
		// Инициализация объектов с медиа запросами
		if (media.length) {
			const breakpointsArray = [];
			media.forEach(item => {
				const params = item.dataset[dataSetValue];
				const breakpoint = {};
				const paramsArray = params.split(",");
				breakpoint.value = paramsArray[0];
				breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
				breakpoint.item = item;
				breakpointsArray.push(breakpoint);
			});
			// Получаем уникальные брейкпоинты
			let mdQueries = breakpointsArray.map(function (item) {
				return '(' + item.type + "-width: " + item.value + "px)," + item.value + ',' + item.type;
			});
			mdQueries = uniqArray(mdQueries);
			const mdQueriesArray = [];

			if (mdQueries.length) {
				// Работаем с каждым брейкпоинтом
				mdQueries.forEach(breakpoint => {
					const paramsArray = breakpoint.split(",");
					const mediaBreakpoint = paramsArray[1];
					const mediaType = paramsArray[2];
					const matchMedia = window.matchMedia(paramsArray[0]);
					// Объекты с нужными условиями
					const itemsArray = breakpointsArray.filter(function (item) {
						if (item.value === mediaBreakpoint && item.type === mediaType) {
							return true;
						}
					});
					mdQueriesArray.push({
						itemsArray,
						matchMedia
					})
				});
				return mdQueriesArray;
			}
		}
	}

	function showMore() {
		window.addEventListener("load", function (e) {
			const showMoreBlocks = document.querySelectorAll('[data-showmore]');
			let showMoreBlocksRegular;
			let mdQueriesArray;
			if (showMoreBlocks.length) {
				// Получение обычных объектов
				showMoreBlocksRegular = Array.from(showMoreBlocks).filter(function (item, index, self) {
					return !item.dataset.showmoreMedia;
				});
				// Инициализация обычных объектов
				showMoreBlocksRegular.length ? initItems(showMoreBlocksRegular) : null;

				document.addEventListener("click", showMoreActions);
				window.addEventListener("resize", showMoreActions);

				// Получение объектов с медиа запросами
				mdQueriesArray = dataMediaQueries(showMoreBlocks, "showmoreMedia");
				if (mdQueriesArray && mdQueriesArray.length) {
					mdQueriesArray.forEach(mdQueriesItem => {
						// Событие
						mdQueriesItem.matchMedia.addEventListener("change", function () {
							initItems(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
						});
					});
					initItemsMedia(mdQueriesArray);
				}
			}
			function initItemsMedia(mdQueriesArray) {
				mdQueriesArray.forEach(mdQueriesItem => {
					initItems(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
				});
			}
			function initItems(showMoreBlocks, matchMedia) {
				showMoreBlocks.forEach(showMoreBlock => {
					initItem(showMoreBlock, matchMedia);
				});
			}
			function initItem(showMoreBlock, matchMedia = false) {
				showMoreBlock = matchMedia ? showMoreBlock.item : showMoreBlock;
				let showMoreContent = showMoreBlock.querySelectorAll('[data-showmore-content]');
				let showMoreButton = showMoreBlock.querySelectorAll('[data-showmore-button]');
				showMoreContent = Array.from(showMoreContent).filter(item => item.closest('[data-showmore]') === showMoreBlock)[0];
				showMoreButton = Array.from(showMoreButton).filter(item => item.closest('[data-showmore]') === showMoreBlock)[0];
				const hiddenHeight = getHeight(showMoreBlock, showMoreContent);
				if (matchMedia.matches || !matchMedia) {
					if (hiddenHeight < getOriginalHeight(showMoreContent)) {
						_slideUp(showMoreContent, 0, hiddenHeight);
						showMoreButton.hidden = false;
					} else {
						_slideDown(showMoreContent, 0, hiddenHeight);
						showMoreButton.hidden = true;
					}
				} else {
					_slideDown(showMoreContent, 0, hiddenHeight);
					showMoreButton.hidden = true;
				}
			}
			function getHeight(showMoreBlock, showMoreContent) {
				let hiddenHeight = 0;
				const showMoreType = showMoreBlock.dataset.showmore ? showMoreBlock.dataset.showmore : 'size';
				if (showMoreType === 'items') {
					const showMoreTypeValue = showMoreContent.dataset.showmoreContent ? showMoreContent.dataset.showmoreContent : 3;
					const showMoreItems = showMoreContent.children;
					for (let index = 1; index < showMoreItems.length; index++) {
						const showMoreItem = showMoreItems[index - 1];
						hiddenHeight += showMoreItem.offsetHeight;
						if (index == showMoreTypeValue) break
					}
				} else {
					const showMoreTypeValue = showMoreContent.dataset.showmoreContent ? showMoreContent.dataset.showmoreContent : 150;
					hiddenHeight = showMoreTypeValue;
				}
				return hiddenHeight;
			}
			function getOriginalHeight(showMoreContent) {
				let parentHidden;
				let hiddenHeight = showMoreContent.offsetHeight;
				showMoreContent.style.removeProperty('height');
				if (showMoreContent.closest(`[hidden]`)) {
					parentHidden = showMoreContent.closest(`[hidden]`);
					parentHidden.hidden = false;
				}
				let originalHeight = showMoreContent.offsetHeight;
				parentHidden ? parentHidden.hidden = true : null;
				showMoreContent.style.height = `${hiddenHeight}px`;
				return originalHeight;
			}
			function showMoreActions(e) {
				const targetEvent = e.target;
				const targetType = e.type;
				if (targetType === 'click') {
					if (targetEvent.closest('[data-showmore-button]')) {
						const showMoreButton = targetEvent.closest('[data-showmore-button]');
						const showMoreBlock = showMoreButton.closest('[data-showmore]');
						const showMoreContent = showMoreBlock.querySelector('[data-showmore-content]');
						const showMoreSpeed = showMoreBlock.dataset.showmoreButton ? showMoreBlock.dataset.showmoreButton : '500';
						const hiddenHeight = getHeight(showMoreBlock, showMoreContent);
						if (!showMoreContent.classList.contains('_slide')) {
							showMoreBlock.classList.contains('_showmore-active') ? _slideUp(showMoreContent, showMoreSpeed, hiddenHeight) : _slideDown(showMoreContent, showMoreSpeed, hiddenHeight);
							showMoreBlock.classList.toggle('_showmore-active');
						}
					}
				} else if (targetType === 'resize') {
					showMoreBlocksRegular && showMoreBlocksRegular.length ? initItems(showMoreBlocksRegular) : null;
					mdQueriesArray && mdQueriesArray.length ? initItemsMedia(mdQueriesArray) : null;
				}
			}
		});
	}

	showMore();



	//Спойлеры

	function dataMediaQueries(array, dataSetValue) {
		// Получение объектов с медиа запросами
		const media = Array.from(array).filter(function (item, index, self) {
			if (item.dataset[dataSetValue]) {
				return item.dataset[dataSetValue].split(",")[0];
			}
		});
		// Инициализация объектов с медиа запросами
		if (media.length) {
			const breakpointsArray = [];
			media.forEach(item => {
				const params = item.dataset[dataSetValue];
				const breakpoint = {};
				const paramsArray = params.split(",");
				breakpoint.value = paramsArray[0];
				breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
				breakpoint.item = item;
				breakpointsArray.push(breakpoint);
			});
			// Получаем уникальные брейкпоинты
			let mdQueries = breakpointsArray.map(function (item) {
				return '(' + item.type + "-width: " + item.value + "px)," + item.value + ',' + item.type;
			});
			mdQueries = uniqArray(mdQueries);
			const mdQueriesArray = [];

			if (mdQueries.length) {
				// Работаем с каждым брейкпоинтом
				mdQueries.forEach(breakpoint => {
					const paramsArray = breakpoint.split(",");
					const mediaBreakpoint = paramsArray[1];
					const mediaType = paramsArray[2];
					const matchMedia = window.matchMedia(paramsArray[0]);
					// Объекты с нужными условиями
					const itemsArray = breakpointsArray.filter(function (item) {
						if (item.value === mediaBreakpoint && item.type === mediaType) {
							return true;
						}
					});
					mdQueriesArray.push({
						itemsArray,
						matchMedia
					})
				});
				return mdQueriesArray;
			}
		}
	}

	// Уникализация массива
	function uniqArray(array) {
		return array.filter(function (item, index, self) {
			return self.indexOf(item) === index;
		});
	}

	const spollersArray = document.querySelectorAll('[data-spollers]');
	if (spollersArray.length > 0) {
		// Получение обычных слойлеров
		const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
			return !item.dataset.spollers.split(",")[0];
		});
		// Инициализация обычных слойлеров
		if (spollersRegular.length) {
			initSpollers(spollersRegular);
		}
		// Получение слойлеров с медиа запросами
		let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
		if (mdQueriesArray && mdQueriesArray.length) {
			mdQueriesArray.forEach(mdQueriesItem => {
				// Событие
				mdQueriesItem.matchMedia.addEventListener("change", function () {
					initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
				});
				initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
			});
		}
		// Инициализация
		function initSpollers(spollersArray, matchMedia = false) {
			spollersArray.forEach(spollersBlock => {
				spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
				if (matchMedia.matches || !matchMedia) {
					spollersBlock.classList.add('_spoller-init');
					initSpollerBody(spollersBlock);
					spollersBlock.addEventListener("click", setSpollerAction);
				} else {
					spollersBlock.classList.remove('_spoller-init');
					initSpollerBody(spollersBlock, false);
					spollersBlock.removeEventListener("click", setSpollerAction);
				}
			});
		}
		// Работа с контентом
		function initSpollerBody(spollersBlock, hideSpollerBody = true) {
			let spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
			if (spollerTitles.length) {
				spollerTitles = Array.from(spollerTitles).filter(item => item.closest('[data-spollers]') === spollersBlock);
				spollerTitles.forEach(spollerTitle => {
					if (hideSpollerBody) {
						spollerTitle.removeAttribute('tabindex');
						if (!spollerTitle.classList.contains('_spoller-active')) {
							spollerTitle.nextElementSibling.hidden = true;
						}
					} else {
						spollerTitle.setAttribute('tabindex', '-1');
						spollerTitle.nextElementSibling.hidden = false;
					}
				});
			}
		}
		function setSpollerAction(e) {
			const el = e.target;
			if (el.closest('[data-spoller]')) {
				const spollerTitle = el.closest('[data-spoller]');
				const spollersBlock = spollerTitle.closest('[data-spollers]');
				const oneSpoller = spollersBlock.hasAttribute('data-one-spoller');
				const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
				if (!spollersBlock.querySelectorAll('._slide').length) {
					if (oneSpoller && !spollerTitle.classList.contains('_spoller-active')) {
						hideSpollersBody(spollersBlock);
					}
					spollerTitle.classList.toggle('_spoller-active');
					_slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
				}
				e.preventDefault();
			}
		}
		function hideSpollersBody(spollersBlock) {
			const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._spoller-active');
			const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
			if (spollerActiveTitle && !spollersBlock.querySelectorAll('._slide').length) {
				spollerActiveTitle.classList.remove('_spoller-active');
				_slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
			}
		}
		// Закрытие при клике вне спойлера
		const spollersClose = document.querySelectorAll('[data-spoller-close]');
		if (spollersClose.length) {
			document.addEventListener("click", function (e) {
				const el = e.target;
				if (!el.closest('[data-spollers]')) {
					spollersClose.forEach(spollerClose => {
						const spollersBlock = spollerClose.closest('[data-spollers]');
						const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
						spollerClose.classList.remove('_spoller-active');
						_slideUp(spollerClose.nextElementSibling, spollerSpeed);
					});
				}
			});
		}
	}




	//динамический адаптив
	function DynamicAdapt(type) {
		this.type = type;
	}
	DynamicAdapt.prototype.init = function () {
		const _this = this;
		// массив объектов
		this.оbjects = [];
		this.daClassname = "_dynamic_adapt_";
		// массив DOM-элементов
		this.nodes = document.querySelectorAll("[data-da]");
		// наполнение оbjects объктами
		for (let i = 0; i < this.nodes.length; i++) {
			const node = this.nodes[i];
			const data = node.dataset.da.trim();
			const dataArray = data.split(",");
			const оbject = {};
			оbject.element = node;
			оbject.parent = node.parentNode;
			оbject.destination = document.querySelector(dataArray[0].trim());
			оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
			оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
			оbject.index = this.indexInParent(оbject.parent, оbject.element);
			this.оbjects.push(оbject);
		}
		this.arraySort(this.оbjects);
		// массив уникальных медиа-запросов
		this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
			return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
		}, this);
		this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
			return Array.prototype.indexOf.call(self, item) === index;
		});
		// навешивание слушателя на медиа-запрос
		// и вызов обработчика при первом запуске
		for (let i = 0; i < this.mediaQueries.length; i++) {
			const media = this.mediaQueries[i];
			const mediaSplit = String.prototype.split.call(media, ',');
			const matchMedia = window.matchMedia(mediaSplit[0]);
			const mediaBreakpoint = mediaSplit[1];
			// массив объектов с подходящим брейкпоинтом
			const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
				return item.breakpoint === mediaBreakpoint;
			});
			matchMedia.addListener(function () {
				_this.mediaHandler(matchMedia, оbjectsFilter);
			});
			this.mediaHandler(matchMedia, оbjectsFilter);
		}
	};
	DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
		if (matchMedia.matches) {
			for (let i = 0; i < оbjects.length; i++) {
				const оbject = оbjects[i];
				оbject.index = this.indexInParent(оbject.parent, оbject.element);
				this.moveTo(оbject.place, оbject.element, оbject.destination);
			}
		} else {
			//for (let i = 0; i < оbjects.length; i++) {
			for (let i = оbjects.length - 1; i >= 0; i--) {
				const оbject = оbjects[i];
				if (оbject.element.classList.contains(this.daClassname)) {
					this.moveBack(оbject.parent, оbject.element, оbject.index);
				}
			}
		}
	};
	// Функция перемещения
	DynamicAdapt.prototype.moveTo = function (place, element, destination) {
		element.classList.add(this.daClassname);
		if (place === 'last' || place >= destination.children.length) {
			destination.insertAdjacentElement('beforeend', element);
			return;
		}
		if (place === 'first') {
			destination.insertAdjacentElement('afterbegin', element);
			return;
		}
		destination.children[place].insertAdjacentElement('beforebegin', element);
	}
	// Функция возврата
	DynamicAdapt.prototype.moveBack = function (parent, element, index) {
		element.classList.remove(this.daClassname);
		if (parent.children[index] !== undefined) {
			parent.children[index].insertAdjacentElement('beforebegin', element);
		} else {
			parent.insertAdjacentElement('beforeend', element);
		}
	}
	// Функция получения индекса внутри родителя
	DynamicAdapt.prototype.indexInParent = function (parent, element) {
		const array = Array.prototype.slice.call(parent.children);
		return Array.prototype.indexOf.call(array, element);
	};
	// Функция сортировки массива по breakpoint и place 
	// по возрастанию для this.type = min
	// по убыванию для this.type = max
	DynamicAdapt.prototype.arraySort = function (arr) {
		if (this.type === "min") {
			Array.prototype.sort.call(arr, function (a, b) {
				if (a.breakpoint === b.breakpoint) {
					if (a.place === b.place) {
						return 0;
					}

					if (a.place === "first" || b.place === "last") {
						return -1;
					}

					if (a.place === "last" || b.place === "first") {
						return 1;
					}

					return a.place - b.place;
				}

				return a.breakpoint - b.breakpoint;
			});
		} else {
			Array.prototype.sort.call(arr, function (a, b) {
				if (a.breakpoint === b.breakpoint) {
					if (a.place === b.place) {
						return 0;
					}

					if (a.place === "first" || b.place === "last") {
						return 1;
					}

					if (a.place === "last" || b.place === "first") {
						return -1;
					}

					return b.place - a.place;
				}

				return b.breakpoint - a.breakpoint;
			});
			return;
		}
	};
	const da = new DynamicAdapt("max");
	da.init();

});



