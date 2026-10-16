/**
 * Csolve Technology homepage — carousel, reveal, counters.
 */
(function () {
	'use strict';

	var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	function reveal() {
		var nodes = document.querySelectorAll('[data-reveal]');
		if (!nodes.length) return;

		if (reduce || !('IntersectionObserver' in window)) {
			nodes.forEach(function (el) {
				el.classList.add('is-visible');
			});
			return;
		}

		document.querySelectorAll('.csolve-hero [data-reveal]').forEach(function (el) {
			el.classList.add('is-visible');
		});

		var io = new IntersectionObserver(
			function (entries) {
				entries.forEach(function (entry) {
					if (entry.isIntersecting) {
						entry.target.classList.add('is-visible');
						io.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.12, rootMargin: '0px 0px -5% 0px' }
		);

		nodes.forEach(function (el) {
			if (!el.classList.contains('is-visible')) {
				io.observe(el);
			}
		});
	}

	function animateCount(el, target, duration) {
		var start = 0;
		var startTime = null;

		function step(ts) {
			if (!startTime) startTime = ts;
			var progress = Math.min((ts - startTime) / duration, 1);
			var eased = 1 - Math.pow(1 - progress, 3);
			el.textContent = Math.floor(start + (target - start) * eased).toLocaleString();
			if (progress < 1) {
				requestAnimationFrame(step);
			} else {
				el.textContent = target.toLocaleString();
			}
		}

		requestAnimationFrame(step);
	}

	function counters() {
		var nums = document.querySelectorAll('[data-count]');
		if (!nums.length) return;

		if (reduce) {
			nums.forEach(function (el) {
				el.textContent = Number(el.getAttribute('data-count')).toLocaleString();
			});
			return;
		}

		var io = new IntersectionObserver(
			function (entries) {
				entries.forEach(function (entry) {
					if (!entry.isIntersecting) return;
					var el = entry.target;
					var target = parseInt(el.getAttribute('data-count'), 10) || 0;
					animateCount(el, target, 1400);
					io.unobserve(el);
				});
			},
			{ threshold: 0.4 }
		);

		nums.forEach(function (el) {
			io.observe(el);
		});
	}

	function carousel() {
		var root = document.querySelector('.csolve-hero');
		if (!root) return;

		var slides = Array.prototype.slice.call(root.querySelectorAll('.csolve-hero__slide'));
		var dots = Array.prototype.slice.call(root.querySelectorAll('.csolve-hero__dot'));
		var pauseBtn = root.querySelector('.csolve-hero__pause');
		if (slides.length < 2) return;

		var index = 0;
		var timer = null;
		var paused = false;
		var interval = 5500;

		function setActive(next) {
			if (next === index) return;
			var prev = index;
			slides[prev].classList.remove('is-active');
			slides[prev].classList.add('is-leaving');
			slides[next].classList.add('is-active');
			slides[next].classList.remove('is-leaving');

			window.setTimeout(function () {
				slides[prev].classList.remove('is-leaving');
			}, 1100);

			dots.forEach(function (dot, i) {
				var on = i === next;
				dot.classList.toggle('is-active', on);
				dot.setAttribute('aria-selected', on ? 'true' : 'false');
			});

			index = next;
		}

		function nextSlide() {
			setActive((index + 1) % slides.length);
		}

		function start() {
			stop();
			if (reduce || paused) return;
			timer = window.setInterval(nextSlide, interval);
		}

		function stop() {
			if (timer) {
				window.clearInterval(timer);
				timer = null;
			}
		}

		dots.forEach(function (dot) {
			dot.addEventListener('click', function () {
				var goto = parseInt(dot.getAttribute('data-goto'), 10);
				if (!isNaN(goto)) {
					setActive(goto);
					start();
				}
			});
		});

		if (pauseBtn) {
			pauseBtn.addEventListener('click', function () {
				paused = !paused;
				pauseBtn.setAttribute('aria-pressed', paused ? 'true' : 'false');
				pauseBtn.querySelector('.csolve-hero__pause-label').textContent = paused ? 'Play' : 'Pause';
				if (paused) {
					stop();
				} else {
					start();
				}
			});
		}

		root.addEventListener('mouseenter', stop);
		root.addEventListener('mouseleave', function () {
			if (!paused) start();
		});

		document.addEventListener('visibilitychange', function () {
			if (document.hidden) {
				stop();
			} else if (!paused) {
				start();
			}
		});

		start();
	}

	function boot() {
		reveal();
		counters();
		carousel();
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', boot);
	} else {
		boot();
	}
})();
