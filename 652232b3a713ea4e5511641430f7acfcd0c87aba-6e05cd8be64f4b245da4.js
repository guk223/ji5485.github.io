(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    JgPm: function (t, e, c) {
      'use strict';
      c.d(e, 'a', function () {
        return r;
      });
      var n = c('wTIg'),
        a = (c('q1tI'), c('Bapl')),
        i = c('45fX'),
        o = c('qKvR');
      const r = Object(n.a)('div', { target: 'e199fzp10' })({
        name: 'jz69l',
        styles: 'display:flex;a + a{margin-left:20px;@media (max-width:768px){margin-left:15px;}}',
      });
      e.b = function ({ list: t, size: e }) {
        return Object(o.c)(
          r,
          null,
          t &&
            t.map(({ href: t, type: c }) =>
              Object(o.c)(
                'a',
                { href: t, key: Object(i.a)(), rel: 'noreferrer', target: '_blank' },
                Object(o.c)(a.b, { type: c, size: e }),
              ),
            ),
        );
      };
    },
    KUDz: function (t, e, c) {
      'use strict';
      c.d(e, 'a', function () {
        return r;
      });
      var n = c('wTIg'),
        a = (c('q1tI'), c('j/sC')),
        i = c('xn1H'),
        o = c('qKvR');
      const r = Object(n.a)('div', { target: 'ee58kfn0' })(
          'width:768px;height:80px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;@media (max-width:768px){padding:0 20px;width:100%;',
          i.a,
          '{width:100%;justify-content:space-between;}}',
        ),
        l = Object(n.a)(a.a, { target: 'ee58kfn1' })({
          name: 'mfcvg4',
          styles: 'font-size:17px;font-weight:700;@media (max-width:768px){display:none;}',
        });
      e.b = function ({}) {
        return Object(o.c)(
          r,
          null,
          Object(o.c)(l, null, 'Too Early To Stop'),
          Object(o.c)(i.b, { modeSwitch: !0 }),
        );
      };
    },
    qNq4: function (t, e, c) {
      'use strict';
      var n = c('wTIg'),
        a = (c('q1tI'), c('KUDz')),
        i = c('j/sC'),
        o = c('JgPm'),
        r = c('xn1H'),
        l = c('qKvR');
      const b = [
          { to: 'https://github.com/ji5485', type: 'github' },
          { to: 'https://www.instagram.com/?hl=ko', type: 'instagram' },
          { to: 'https://www.facebook.com/', type: 'facebook' },
        ],
        s = Object(n.a)('div', { target: 'ee9s27o0' })({
          name: '7f0jl2',
          styles: 'background:rgba(0,0,0,0.03);width:100%;padding:50px 0;',
        }),
        g = Object(n.a)('div', { target: 'ee9s27o1' })({
          name: '1dika57',
          styles:
            'width:768px;height:80px;margin:0 auto;display:flex;flex-direction:column;justify-content:space-between;@media (max-width:768px){width:100%;padding:0 20px;}',
        }),
        d = Object(n.a)('div', { target: 'ee9s27o2' })({
          name: '12d2mry',
          styles: 'width:100%;display:flex;align-items:center;justify-content:space-between;',
        });
      var u = function ({}) {
        return Object(l.c)(
          s,
          null,
          Object(l.c)(
            g,
            null,
            Object(l.c)(
              d,
              null,
              Object(l.c)(i.b, { size: 15, weight: 700 }, 'Too Early To Stop'),
              Object(l.c)(o.b, { list: b, size: 20 }),
            ),
            Object(l.c)(
              d,
              null,
              Object(l.c)(i.b, { size: 12, weight: 100 }, 'ⓒ Copyright'),
              Object(l.c)(r.b, { modeSwitch: !1, currentMode: 'light' }),
            ),
          ),
        );
      };
      const p = Object(n.a)('div', { target: 'e1hifug00' })({
          name: '1tmb54o',
          styles:
            'width:100%;height:100%;display:grid;grid-template-rows:80px 1fr 180px;grid-gap:100px;@media (max-width:768px){grid-gap:50px;}',
        }),
        f = Object(n.a)('div', { target: 'e1hifug01' })({
          name: '1gruebn',
          styles: 'width:768px;margin:0 auto;@media (max-width:768px){width:100%;padding:0 20px;}',
        });
      e.a = function ({ children: t }) {
        return Object(l.c)(
          p,
          null,
          Object(l.c)(a.b, null),
          Object(l.c)(f, null, t),
          Object(l.c)(u, null),
        );
      };
    },
    xn1H: function (t, e, c) {
      'use strict';
      c.d(e, 'a', function () {
        return b;
      });
      var n = c('wTIg'),
        a = (c('q1tI'), c('pRDh')),
        i = c('j/sC');
      var o = {
        set: (t, e) => {
          localStorage && (localStorage[t] = 'string' == typeof e ? e : JSON.stringify(e));
        },
        get: (t) => {
          if (!localStorage || !localStorage[t]) return null;
          try {
            return JSON.parse(localStorage[t]);
          } catch (e) {
            return localStorage[t];
          }
        },
      };
      var r = function () {
          const t = window.document.body,
            e = o.get('blog-current-mode');
          return {
            currentMode: e,
            toggleCurrentMode: () => {
              const c = 'light' === e ? 'dark' : 'light';
              t.classList.toggle('dark-mode'), o.set('blog-current-mode', c);
            },
          };
        },
        l = c('qKvR');
      const b = Object(n.a)('div', { target: 'ew71pbr0' })(
          'display:flex;font-weight:100;',
          i.a,
          '{cursor:pointer;font-size:15px;}',
          a.a,
          ' + ',
          i.a,
          ',',
          a.a,
          ' + ',
          a.a,
          '{margin-left:20px;}',
        ),
        s = Object(n.a)(i.b, { target: 'ew71pbr1' })('');
      e.b = function ({ modeSwitch: t }) {
        const { currentMode: e, toggleCurrentMode: c } = r();
        return Object(l.c)(
          b,
          null,
          Object(l.c)(a.b, { to: '/' }, Object(l.c)(i.b, null, 'Main')),
          Object(l.c)(a.b, { to: '/about' }, Object(l.c)(i.b, null, 'About')),
          Object(l.c)(a.b, { to: '/portfolio' }, Object(l.c)(i.b, null, 'Portfolio')),
          Object(l.c)(a.b, { to: '/blog/1' }, Object(l.c)(i.b, null, 'Blog')),
          t && Object(l.c)(s, { onClick: c }, 'light' === e ? 'Dark' : 'Light', ' Mode'),
        );
      };
    },
  },
]);
//# sourceMappingURL=652232b3a713ea4e5511641430f7acfcd0c87aba-6e05cd8be64f4b245da4.js.map
