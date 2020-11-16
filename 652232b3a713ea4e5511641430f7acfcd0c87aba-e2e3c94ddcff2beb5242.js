(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    JgPm: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return r;
      });
      var c = n('wTIg'),
        i = (n('q1tI'), n('Bapl')),
        a = n('45fX'),
        o = n('qKvR');
      const r = Object(c.a)('div', { target: 'e199fzp10' })({
        name: 'jz69l',
        styles: 'display:flex;a + a{margin-left:20px;@media (max-width:768px){margin-left:15px;}}',
      });
      e.b = function ({ list: t, size: e }) {
        return Object(o.c)(
          r,
          null,
          t &&
            t.map(({ href: t, type: n }) =>
              Object(o.c)(
                'a',
                { href: t, key: Object(a.a)(), rel: 'noreferrer', target: '_blank' },
                Object(o.c)(i.b, { type: n, size: e }),
              ),
            ),
        );
      };
    },
    KUDz: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return r;
      });
      var c = n('wTIg'),
        i = (n('q1tI'), n('j/sC')),
        a = n('xn1H'),
        o = n('qKvR');
      const r = Object(c.a)('div', { target: 'ee58kfn0' })(
          'width:768px;height:80px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;@media (max-width:768px){padding:0 20px;width:100%;',
          a.a,
          '{width:100%;justify-content:space-between;}}',
        ),
        l = Object(c.a)(i.a, { target: 'ee58kfn1' })({
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
    qNq4: function (t, e, n) {
      'use strict';
      var c = n('wTIg'),
        i = (n('q1tI'), n('KUDz')),
        a = n('j/sC'),
        o = n('JgPm'),
        r = n('xn1H'),
        l = n('qKvR');
      const b = [
          { to: 'https://github.com/ji5485', type: 'github' },
          { to: 'https://www.instagram.com/?hl=ko', type: 'instagram' },
          { to: 'https://www.facebook.com/', type: 'facebook' },
        ],
        g = Object(c.a)('div', { target: 'ee9s27o0' })({
          name: '7f0jl2',
          styles: 'background:rgba(0,0,0,0.03);width:100%;padding:50px 0;',
        }),
        s = Object(c.a)('div', { target: 'ee9s27o1' })({
          name: '1dika57',
          styles:
            'width:768px;height:80px;margin:0 auto;display:flex;flex-direction:column;justify-content:space-between;@media (max-width:768px){width:100%;padding:0 20px;}',
        }),
        d = Object(c.a)('div', { target: 'ee9s27o2' })({
          name: '12d2mry',
          styles: 'width:100%;display:flex;align-items:center;justify-content:space-between;',
        });
      var u = function ({}) {
        return Object(l.c)(
          g,
          null,
          Object(l.c)(
            s,
            null,
            Object(l.c)(
              d,
              null,
              Object(l.c)(a.b, { size: 15, weight: 700 }, 'Too Early To Stop'),
              Object(l.c)(o.b, { list: b, size: 20 }),
            ),
            Object(l.c)(
              d,
              null,
              Object(l.c)(a.b, { size: 12, weight: 100 }, 'ⓒ Copyright'),
              Object(l.c)(r.b, { modeSwitch: !1, currentMode: 'light' }),
            ),
          ),
        );
      };
      const p = Object(c.a)('div', { target: 'e1hifug00' })({
          name: '1tmb54o',
          styles:
            'width:100%;height:100%;display:grid;grid-template-rows:80px 1fr 180px;grid-gap:100px;@media (max-width:768px){grid-gap:50px;}',
        }),
        f = Object(c.a)('div', { target: 'e1hifug01' })({
          name: '1gruebn',
          styles: 'width:768px;margin:0 auto;@media (max-width:768px){width:100%;padding:0 20px;}',
        });
      e.a = function ({ children: t }) {
        return Object(l.c)(
          p,
          null,
          Object(l.c)(i.b, null),
          Object(l.c)(f, null, t),
          Object(l.c)(u, null),
        );
      };
    },
    xn1H: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return g;
      });
      var c = n('wTIg'),
        i = n('q1tI'),
        a = n('pRDh'),
        o = n('j/sC');
      var r = {
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
      var l = function () {
          let t;
          const e = r.get('blog-current-mode');
          return (
            Object(i.useEffect)(() => {
              'undefined' != typeof window && (t = window.document.body);
            }),
            {
              initialMode: e,
              toggleCurrentMode: () => {
                t.classList.toggle('dark'),
                  r.set(
                    'blog-current-mode',
                    'light' === r.get('blog-current-mode') ? 'dark' : 'light',
                  );
              },
            }
          );
        },
        b = n('qKvR');
      const g = Object(c.a)('div', { target: 'ew71pbr0' })(
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
        s = Object(c.a)(o.b, { target: 'ew71pbr1' })('');
      e.b = function ({ modeSwitch: t }) {
        const { initialMode: e, toggleCurrentMode: n } = l(),
          [c, r] = Object(i.useState)(e);
        return Object(b.c)(
          g,
          null,
          Object(b.c)(a.b, { to: '/' }, Object(b.c)(o.b, null, 'Main')),
          Object(b.c)(a.b, { to: '/about' }, Object(b.c)(o.b, null, 'About')),
          Object(b.c)(a.b, { to: '/portfolio' }, Object(b.c)(o.b, null, 'Portfolio')),
          Object(b.c)(a.b, { to: '/blog/1' }, Object(b.c)(o.b, null, 'Blog')),
          t &&
            Object(b.c)(
              s,
              {
                onClick: () => {
                  n(), r('light' === c ? 'dark' : 'light');
                },
              },
              'light' === c ? 'Dark' : 'Light',
              ' Mode',
            ),
        );
      };
    },
  },
]);
//# sourceMappingURL=652232b3a713ea4e5511641430f7acfcd0c87aba-e2e3c94ddcff2beb5242.js.map
