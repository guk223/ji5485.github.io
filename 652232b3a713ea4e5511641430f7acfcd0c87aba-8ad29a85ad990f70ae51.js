(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    JgPm: function (t, e, c) {
      'use strict';
      c.d(e, 'a', function () {
        return l;
      });
      var i = c('wTIg'),
        n = (c('q1tI'), c('Bapl')),
        a = c('45fX'),
        o = c('qKvR');
      const l = Object(i.a)('div', { target: 'e199fzp10' })({
        name: 'jz69l',
        styles: 'display:flex;a + a{margin-left:20px;@media (max-width:768px){margin-left:15px;}}',
      });
      e.b = function ({ list: t, size: e }) {
        return Object(o.c)(
          l,
          null,
          t &&
            t.map(({ href: t, type: c }) =>
              Object(o.c)(
                'a',
                { href: t, key: Object(a.a)(), rel: 'noreferrer', target: '_blank' },
                Object(o.c)(n.b, { type: c, size: e }),
              ),
            ),
        );
      };
    },
    KUDz: function (t, e, c) {
      'use strict';
      c.d(e, 'a', function () {
        return l;
      });
      var i = c('wTIg'),
        n = (c('q1tI'), c('j/sC')),
        a = c('xn1H'),
        o = c('qKvR');
      const l = Object(i.a)('div', { target: 'ee58kfn0' })(
          'width:768px;height:80px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;@media (max-width:768px){padding:0 20px;width:100%;',
          a.a,
          '{width:100%;justify-content:space-between;}}',
        ),
        r = Object(i.a)(n.a, { target: 'ee58kfn1' })({
          name: 'mfcvg4',
          styles: 'font-size:17px;font-weight:700;@media (max-width:768px){display:none;}',
        });
      e.b = function ({}) {
        return Object(o.c)(
          l,
          null,
          Object(o.c)(r, null, 'Too Early To Stop'),
          Object(o.c)(a.b, { modeSwitch: !0 }),
        );
      };
    },
    qNq4: function (t, e, c) {
      'use strict';
      var i = c('wTIg'),
        n = (c('q1tI'), c('KUDz')),
        a = c('j/sC'),
        o = c('JgPm'),
        l = c('xn1H'),
        r = c('qKvR');
      const b = [
          { to: 'https://github.com/ji5485', type: 'github' },
          { to: 'https://www.instagram.com/?hl=ko', type: 'instagram' },
          { to: 'https://www.facebook.com/', type: 'facebook' },
        ],
        s = Object(i.a)('div', { target: 'ee9s27o0' })({
          name: '7f0jl2',
          styles: 'background:rgba(0,0,0,0.03);width:100%;padding:50px 0;',
        }),
        d = Object(i.a)('div', { target: 'ee9s27o1' })({
          name: '1dika57',
          styles:
            'width:768px;height:80px;margin:0 auto;display:flex;flex-direction:column;justify-content:space-between;@media (max-width:768px){width:100%;padding:0 20px;}',
        }),
        g = Object(i.a)('div', { target: 'ee9s27o2' })({
          name: '12d2mry',
          styles: 'width:100%;display:flex;align-items:center;justify-content:space-between;',
        });
      var p = function ({}) {
        return Object(r.c)(
          s,
          null,
          Object(r.c)(
            d,
            null,
            Object(r.c)(
              g,
              null,
              Object(r.c)(a.b, { size: 15, weight: 700 }, 'Too Early To Stop'),
              Object(r.c)(o.b, { list: b, size: 20 }),
            ),
            Object(r.c)(
              g,
              null,
              Object(r.c)(a.b, { size: 12, weight: 100 }, 'ⓒ Copyright'),
              Object(r.c)(l.b, { modeSwitch: !1, currentMode: 'light' }),
            ),
          ),
        );
      };
      const u = Object(i.a)('div', { target: 'e1hifug00' })({
          name: '1tmb54o',
          styles:
            'width:100%;height:100%;display:grid;grid-template-rows:80px 1fr 180px;grid-gap:100px;@media (max-width:768px){grid-gap:50px;}',
        }),
        j = Object(i.a)('div', { target: 'e1hifug01' })({
          name: '1gruebn',
          styles: 'width:768px;margin:0 auto;@media (max-width:768px){width:100%;padding:0 20px;}',
        });
      e.a = function ({ children: t }) {
        return Object(r.c)(
          u,
          null,
          Object(r.c)(n.b, null),
          Object(r.c)(j, null, t),
          Object(r.c)(p, null),
        );
      };
    },
    xn1H: function (t, e, c) {
      'use strict';
      c.d(e, 'a', function () {
        return r;
      });
      var i = c('wTIg'),
        n = c('q1tI'),
        a = c('pRDh'),
        o = c('j/sC'),
        l = c('qKvR');
      const r = Object(i.a)('div', { target: 'ew71pbr0' })(
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
        b = Object(i.a)(o.b, { target: 'ew71pbr1' })('');
      e.b = function ({ modeSwitch: t }) {
        const [e, c] = Object(n.useState)(localStorage.getItem('blog-current-mode'));
        return Object(l.c)(
          r,
          null,
          Object(l.c)(a.b, { to: '/' }, Object(l.c)(o.b, null, 'Main')),
          Object(l.c)(a.b, { to: '/about' }, Object(l.c)(o.b, null, 'About')),
          Object(l.c)(a.b, { to: '/portfolio' }, Object(l.c)(o.b, null, 'Portfolio')),
          Object(l.c)(a.b, { to: '/blog/1' }, Object(l.c)(o.b, null, 'Blog')),
          t &&
            Object(l.c)(
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
//# sourceMappingURL=652232b3a713ea4e5511641430f7acfcd0c87aba-8ad29a85ad990f70ae51.js.map
