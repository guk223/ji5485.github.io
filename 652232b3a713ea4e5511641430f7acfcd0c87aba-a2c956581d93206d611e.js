(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    JgPm: function (t, e, c) {
      'use strict';
      c.d(e, 'a', function () {
        return r;
      });
      var n = c('wTIg'),
        i = (c('q1tI'), c('Bapl')),
        a = c('45fX'),
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
                { href: t, key: Object(a.a)(), rel: 'noreferrer', target: '_blank' },
                Object(o.c)(i.b, { type: c, size: e }),
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
        i = (c('q1tI'), c('j/sC')),
        a = c('xn1H'),
        o = c('qKvR');
      const r = Object(n.a)('div', { target: 'ee58kfn0' })(
          'width:768px;height:80px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;@media (max-width:768px){padding:0 20px;width:100%;',
          a.a,
          '{width:100%;justify-content:space-between;}}',
        ),
        l = Object(n.a)(i.a, { target: 'ee58kfn1' })({
          name: 'mfcvg4',
          styles: 'font-size:17px;font-weight:700;@media (max-width:768px){display:none;}',
        });
      e.b = function ({}) {
        return Object(o.c)(
          r,
          null,
          Object(o.c)(l, null, 'Too Early To Stop'),
          Object(o.c)(a.b, { modeSwitch: !0 }),
        );
      };
    },
    qNq4: function (t, e, c) {
      'use strict';
      var n = c('wTIg'),
        i = (c('q1tI'), c('KUDz')),
        a = c('j/sC'),
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
        d = Object(n.a)('div', { target: 'ee9s27o1' })({
          name: '1dika57',
          styles:
            'width:768px;height:80px;margin:0 auto;display:flex;flex-direction:column;justify-content:space-between;@media (max-width:768px){width:100%;padding:0 20px;}',
        }),
        g = Object(n.a)('div', { target: 'ee9s27o2' })({
          name: '12d2mry',
          styles: 'width:100%;display:flex;align-items:center;justify-content:space-between;',
        });
      var p = function ({}) {
        return Object(l.c)(
          s,
          null,
          Object(l.c)(
            d,
            null,
            Object(l.c)(
              g,
              null,
              Object(l.c)(a.b, { size: 15, weight: 700 }, 'Too Early To Stop'),
              Object(l.c)(o.b, { list: b, size: 20 }),
            ),
            Object(l.c)(
              g,
              null,
              Object(l.c)(a.b, { size: 12, weight: 100 }, 'ⓒ Copyright'),
              Object(l.c)(r.b, { modeSwitch: !1, currentMode: 'light' }),
            ),
          ),
        );
      };
      const u = Object(n.a)('div', { target: 'e1hifug00' })({
          name: '1tmb54o',
          styles:
            'width:100%;height:100%;display:grid;grid-template-rows:80px 1fr 180px;grid-gap:100px;@media (max-width:768px){grid-gap:50px;}',
        }),
        j = Object(n.a)('div', { target: 'e1hifug01' })({
          name: '1gruebn',
          styles: 'width:768px;margin:0 auto;@media (max-width:768px){width:100%;padding:0 20px;}',
        });
      e.a = function ({ children: t }) {
        return Object(l.c)(
          u,
          null,
          Object(l.c)(i.b, null),
          Object(l.c)(j, null, t),
          Object(l.c)(p, null),
        );
      };
    },
    xn1H: function (t, e, c) {
      'use strict';
      c.d(e, 'a', function () {
        return l;
      });
      var n = c('wTIg'),
        i = c('q1tI'),
        a = c('pRDh'),
        o = c('j/sC'),
        r = c('qKvR');
      const l = Object(n.a)('div', { target: 'ew71pbr0' })(
          'display:flex;font-weight:100;',
          o.a,
          '{cursor:pointer;font-size:15px;}',
          a.a,
          ' + ',
          o.a,
          ',',
          a.a,
          ' + ',
          a.a,
          '{margin-left:20px;}',
        ),
        b = Object(n.a)(o.b, { target: 'ew71pbr1' })('');
      e.b = function ({ modeSwitch: t }) {
        const [e, c] = Object(i.useState)('');
        Object(i.useEffect)(() => {
          'undefined' != typeof window && setcurrentMode(localStorage.getItem('blog-current-mode'));
        });
        return Object(r.c)(
          l,
          null,
          Object(r.c)(a.b, { to: '/' }, Object(r.c)(o.b, null, 'Main')),
          Object(r.c)(a.b, { to: '/about' }, Object(r.c)(o.b, null, 'About')),
          Object(r.c)(a.b, { to: '/portfolio' }, Object(r.c)(o.b, null, 'Portfolio')),
          Object(r.c)(a.b, { to: '/blog/1' }, Object(r.c)(o.b, null, 'Blog')),
          t &&
            Object(r.c)(
              b,
              {
                onClick: () => {
                  const t = 'light' === e ? 'dark' : 'light';
                  window.document.body.classList.toggle('dark'),
                    localStorage.setItem('blog-current-mode', t),
                    c(t);
                },
              },
              'light' === e ? 'Dark' : 'Light',
              ' Mode',
            ),
        );
      };
    },
  },
]);
//# sourceMappingURL=652232b3a713ea4e5511641430f7acfcd0c87aba-a2c956581d93206d611e.js.map
