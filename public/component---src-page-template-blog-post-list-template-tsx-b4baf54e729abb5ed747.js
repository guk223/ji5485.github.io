(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    'ALD/': function (t, e, a) {
      'use strict';
      var n = a('wTIg'),
        i = (a('q1tI'), a('j/sC')),
        c = a('qKvR');
      const o = Object(n.a)('div', { target: 'ep125aa0' })({
          name: 'siz53',
          styles:
            'width:100%;display:flex;justify-content:space-between;align-items:center;margin-bottom:100px;@media (max-width:768px){margin-bottom:60px;}',
        }),
        r = Object(n.a)('div', { target: 'ep125aa1' })({
          name: 'i7o3bs',
          styles: 'width:50%;height:1px;background:#1e1f21;@media (max-width:768px){width:30%;}',
        }),
        l = Object(n.a)('div', { target: 'ep125aa2' })('text-align:', ({ align: t }) => t, ';'),
        s = Object(n.a)(i.b, { target: 'ep125aa3' })({
          name: 'fvjg2s',
          styles: 'font-size:60px;font-weight:700;@media (max-width:768px){font-size:2rem;}',
        }),
        p = Object(n.a)(i.b, { target: 'ep125aa4' })({
          name: '1rdsk08',
          styles: 'font-size:30px;font-weight:100;@media (max-width:768px){font-size:25px;}',
        }),
        b = function ({ title: t, subTitle: e, align: a }) {
          return Object(c.c)(
            o,
            null,
            'right' === a && Object(c.c)(r, null),
            Object(c.c)(l, { align: a }, Object(c.c)(s, null, t), Object(c.c)(p, null, e)),
          );
        };
      (b.defaultProps = { align: 'left' }), (e.a = b);
    },
    ReGg: function (t, e, a) {
      'use strict';
      a.r(e),
        a.d(e, 'blogCategoryQuery', function () {
          return T;
        });
      a('q1tI');
      var n = a('oO+H'),
        i = a('ALD/'),
        c = a('wTIg'),
        o = a('pRDh');
      var r = function (t) {
          return t
            .split(/(?=[A-Z])/)
            .reduce((t, e) => (t.push(e.toLowerCase()), t), [])
            .join('-');
        },
        l = a('45fX'),
        s = a('qKvR');
      const p = Object(c.a)('div', { target: 'e1n9mbvw0' })(
        'display:flex;flex-wrap:wrap;margin:-5px -10px;margin-bottom:60px;',
        o.a,
        '{font-size:14px;font-weight:700;margin:5px 10px;&:hover{text-decoration:underline;}}@media (max-width:768px){margin-bottom:40px;}',
      );
      var b = function ({ categories: t }) {
          return Object(s.c)(
            p,
            null,
            Object.keys(t).map((e) => {
              const a = `/blog/${r(e)}/1`,
                n = t[e];
              return Object(s.c)(o.b, { to: a, key: Object(l.a)() }, '#', e, '(', n, ')');
            }),
          );
        },
        g = a('j/sC');
      const d = Object(c.a)('div', { target: 'e17hlqxe0' })({
          name: '1vfwati',
          styles:
            'display:flex;justify-content:space-between;align-items:stretch;padding:20px 0;border-top:1px solid #1e1f21;border-bottom:1px solid #1e1f21;& + &{border-top:none;}',
        }),
        u = Object(c.a)('div', { target: 'e17hlqxe1' })({
          name: 'sja2fo',
          styles:
            'width:calc(100% - 200px);display:flex;flex-direction:column;@media (max-width:768px){width:100%;}',
        }),
        x = Object(c.a)(o.a, { target: 'e17hlqxe2' })({
          name: '1044ejb',
          styles:
            'font-size:25px;font-weight:400;margin-bottom:5px;&:hover{text-decoration:underline;}@media (max-width:768px){font-size:20px;}',
        }),
        m = Object(c.a)('div', { target: 'e17hlqxe3' })(
          'display:flex;flex-wrap:wrap;margin-bottom:10px;',
          o.a,
          '{font-size:14px;font-weight:400;color:#1e1f21;opacity:0.75;margin-right:10px;@media (max-width:768px){font-size:12px;}}',
          o.a,
          ':hover{text-decoration:underline;}',
        ),
        f = Object(c.a)(g.a, { target: 'e17hlqxe4' })({
          name: '18dr0nj',
          styles:
            'font-size:15px;font-weight:400;color:#1e1f21;opacity:0.9;margin-top:auto;@media (max-width:768px){font-size:14px;}',
        }),
        j = Object(c.a)('img', { target: 'e17hlqxe5' })({
          name: '1dqznm',
          styles: 'width:180px;@media (max-width:768px){display:none;}',
        });
      var O = function ({
        title: t,
        summary: e,
        date: a,
        thumbnail: {
          childImageSharp: {
            resize: { src: n },
          },
        },
        categories: i,
        slug: c,
      }) {
        return Object(s.c)(
          d,
          null,
          Object(s.c)(
            u,
            null,
            Object(s.c)(x, { to: c }, t),
            Object(s.c)('div', null, a),
            Object(s.c)(
              m,
              null,
              i.map((t) => Object(s.c)(o.b, { to: `/blog/${r(t)}/1`, key: Object(l.a)() }, '#', t)),
            ),
            Object(s.c)(
              f,
              null,
              e.map((t) => Object(s.c)(g.b, { key: Object(l.a)() }, t)),
            ),
          ),
          Object(s.c)(j, { src: n, alt: 'Thumbnail Image' }),
        );
      };
      function h() {
        return (h =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var a = arguments[e];
              for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (t[n] = a[n]);
            }
            return t;
          }).apply(this, arguments);
      }
      const w = Object(c.a)('div', { target: 'e1su5eia0' })('');
      var y = function ({ list: t }) {
          return Object(s.c)(
            w,
            null,
            t.map(({ node: { fields: { slug: t }, frontmatter: e } }) =>
              Object(s.c)(O, h({ slug: t }, e, { key: Object(l.a)() })),
            ),
          );
        },
        v = a('Bapl');
      const z = Object(c.a)(o.a, { target: 'e1i8zm1n0' })({
        name: 'v9o2dj',
        styles:
          'width:25px;height:25px;border:1px solid #1e1f21;font-size:17px;font-weight:700;display:grid;place-items:center;color:#1e1f21;& + &{margin-left:10px;}&.active{background:#1e1f21;color:white;}',
      });
      var q = function ({ to: t, page: e }) {
        return Object(s.c)(z, { to: t, activeClassName: 'active' }, e);
      };
      const k = Object(c.a)('div', { target: 'eca3usr0' })({
          name: '1jc1tyd',
          styles: 'display:flex;justify-content:center;align-items:center;margin-top:80px;',
        }),
        P = Object(c.a)(o.a, { target: 'eca3usr1' })(
          'cursor:pointer;pointer-events:',
          ({ active: t }) => (t ? 'initial' : 'none'),
          ';padding:0 10px;',
          v.a,
          '{color:',
          ({ active: t }) => (t ? 'initial' : 'rgba(0, 0, 0, 0.3)'),
          ';}',
        );
      var C = function ({ totalPage: t, currentPage: e, category: a }) {
          const n = Math.floor((e - 1) / 5) + 1,
            i = 1 === n ? null : 5 * (n - 1),
            c = n === Math.floor((t - 1) / 5) + 1 ? null : 5 * n + 1,
            o = (t) => `/blog${a ? '/' + a : ''}/${t}`;
          return Object(s.c)(
            k,
            null,
            Object(s.c)(
              P,
              { to: o(i), active: i ? 1 : 0 },
              Object(s.c)(v.b, { type: 'caretLeft', size: 17 }),
            ),
            [1, 2, 3, 4, 5].map((e) => {
              const a = 5 * (n - 1) + e;
              return a <= t && Object(s.c)(q, { to: o(a), page: a, key: Object(l.a)() });
            }),
            Object(s.c)(
              P,
              { to: o(c), active: c ? 1 : 0 },
              Object(s.c)(v.b, { type: 'caretRight', size: 17 }),
            ),
          );
        },
        I = a('qNq4');
      var R = function ({
        list: t,
        context: { totalPage: e, currentPage: a, categories: n, category: c },
      }) {
        const o = c ? c.substring(1, c.length - 1) : null,
          r = o ? '#' + o : '';
        return Object(s.c)(
          I.a,
          null,
          Object(s.c)(i.a, { title: `Blog${r}.`, subTitle: 'Development, Record' }),
          Object(s.c)(b, { categories: n }),
          Object(s.c)(y, { list: t }),
          e > 1 && Object(s.c)(C, { totalPage: e, currentPage: a, category: o }),
        );
      };
      e.default = function ({ data: t, pageContext: { selectedCategory: e, ...a } }) {
        const i = e ? t.filtered : t.unfiltered;
        return Object(s.c)(n.a, null, Object(s.c)(R, { list: i.edges, context: a }));
      };
      const T = '1220650374';
    },
  },
]);
//# sourceMappingURL=component---src-page-template-blog-post-list-template-tsx-b4baf54e729abb5ed747.js.map
