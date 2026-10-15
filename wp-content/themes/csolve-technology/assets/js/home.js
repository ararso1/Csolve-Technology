/**
 * Csolve Technology homepage — reveal + counters.
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

		// Hero content is above the fold — show immediately.
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

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', function () {
			reveal();
			counters();
		});
	} else {
		reveal();
		counters();
	}
})();
