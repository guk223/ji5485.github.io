(window.webpackJsonp = window.webpackJsonp || []).push([
  [13],
  {
    'ALD/': function (e, t, a) {
      'use strict';
      var o = a('wTIg'),
        i = (a('q1tI'), a('j/sC')),
        n = a('qKvR');
      const l = Object(o.a)('div', { target: 'ep125aa0' })({
          name: 'siz53',
          styles:
            'width:100%;display:flex;justify-content:space-between;align-items:center;margin-bottom:100px;@media (max-width:768px){margin-bottom:60px;}',
        }),
        s = Object(o.a)('div', { target: 'ep125aa1' })({
          name: 'i7o3bs',
          styles: 'width:50%;height:1px;background:#1e1f21;@media (max-width:768px){width:30%;}',
        }),
        r = Object(o.a)('div', { target: 'ep125aa2' })('text-align:', ({ align: e }) => e, ';'),
        h = Object(o.a)(i.b, { target: 'ep125aa3' })({
          name: 'fvjg2s',
          styles: 'font-size:60px;font-weight:700;@media (max-width:768px){font-size:2rem;}',
        }),
        g = Object(o.a)(i.b, { target: 'ep125aa4' })({
          name: '1rdsk08',
          styles: 'font-size:30px;font-weight:100;@media (max-width:768px){font-size:25px;}',
        }),
        p = function ({ title: e, subTitle: t, align: a }) {
          return Object(n.c)(
            l,
            null,
            'right' === a && Object(n.c)(s, null),
            Object(n.c)(r, { align: a }, Object(n.c)(h, null, e), Object(n.c)(g, null, t)),
          );
        };
      (p.defaultProps = { align: 'left' }), (t.a = p);
    },
    OQOg: function (e, t, a) {
      'use strict';
      a.r(t);
      a('q1tI');
      var o = a('oO+H'),
        i = a('ALD/'),
        n = a('wTIg'),
        l = a('j/sC'),
        s = a('pRDh'),
        r = a('Bapl'),
        h = a('b0J9'),
        g = a('qKvR');
      const p = Object(n.a)(l.b, { target: 'egm5qfu0' })({
          name: '1kf9wqd',
          styles: 'font-size:25px;font-weight:700;',
        }),
        c = Object(n.a)(s.a, { target: 'egm5qfu1' })(
          'width:100%;height:200px;margin:10px 0;position:relative;',
          r.a,
          '{width:100%;height:100%;background:rgba(0,0,0,0.7);position:absolute;display:grid;place-items:center;transition:0.1s opacity;opacity:0;}&:hover{',
          r.a,
          '{opacity:1;}}',
        ),
        d = Object(n.a)('img', { target: 'egm5qfu2' })({
          name: '6jrdpz',
          styles: 'width:100%;height:100%;object-fit:cover;',
        }),
        k = Object(n.a)(l.b, { target: 'egm5qfu3' })({
          name: '1fv1pn4',
          styles: 'font-size:20px;font-weight:700;margin-bottom:3px;',
        }),
        m = Object(n.a)('div', { target: 'egm5qfu4' })({
          name: '1cdq6jl',
          styles:
            'font-size:15px;font-weight:400;height:3rem;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;word-wrap:break-word;',
        }),
        u = Object(n.a)('div', { target: 'egm5qfu5' })('');
      var b = function ({ type: e, index: t, title: a, content: o, image: i }) {
          const n = (t < 10 ? '0' : '') + t;
          return Object(g.c)(
            u,
            null,
            Object(g.c)(p, null, n, '.'),
            Object(g.c)(
              c,
              { to: `/portfolio/${e}/${t}` },
              Object(g.c)(r.b, { type: 'search', color: '#ffffff', size: 30 }),
              Object(g.c)(d, { src: Object(h.a)(i), alt: 'Portfolio Item Image' }),
            ),
            Object(g.c)(k, null, a),
            Object(g.c)(m, null, o),
          );
        },
        f = a('45fX');
      function w() {
        return (w =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t];
              for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
            }
            return e;
          }).apply(this, arguments);
      }
      const j = Object(n.a)('div', { target: 'e3gzuew0' })({
          name: 'xotk0i',
          styles: '& + &{margin-top:120px;}',
        }),
        y = Object(n.a)(l.b, { target: 'e3gzuew1' })({
          name: 'frd1bp',
          styles: 'font-size:40px;font-weight:700;margin-bottom:60px;',
        }),
        I = Object(n.a)('div', { target: 'e3gzuew2' })({
          name: '11013sw',
          styles:
            'display:grid;grid-template-columns:1fr 1fr;grid-gap:30px;@media (max-width:768px){grid-template-columns:1fr;}',
        });
      var _ = function ({ type: e, title: t, list: a }) {
          return Object(g.c)(
            j,
            null,
            Object(g.c)(y, null, '#', t),
            Object(g.c)(
              I,
              null,
              a.map((t, a) =>
                Object(g.c)(b, w({}, t, { type: e, index: a + 1, key: Object(f.a)() })),
              ),
            ),
          );
        },
        x = a('qNq4'),
        L = a('VugM');
      var v = function ({}) {
        return Object(g.c)(
          x.a,
          null,
          Object(g.c)(i.a, { title: 'Portfolio.', subTitle: 'My Projects & Activities' }),
          Object(g.c)(_, { type: 'project', title: 'Projects', list: L.project }),
          Object(g.c)(_, { type: 'activity', title: 'Activities', list: L.activity }),
        );
      };
      t.default = function ({}) {
        return Object(g.c)(o.a, null, Object(g.c)(v, null));
      };
    },
    VugM: function (e) {
      e.exports = JSON.parse(
        '{"project":[{"title":"LikeLion Hackathon","content":"전국 대학교 멋쟁이 사자처럼 동아리 원들이 모여 다 같이 밤샘 개발을 하는 행사","image":"likelion_hackathon.jpg","extraInfo":{"subTitle":"중앙 멋쟁이 사자처럼 해커톤","period":"2019.07. ~ 2019.08.","description":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites.","review":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.","extraImage":["likelion_hackathon.jpg","likelion_hackathon.jpg","likelion_hackathon.jpg","likelion_hackathon.jpg","likelion_hackathon.jpg","likelion_hackathon.jpg"]}},{"title":"LikeLion Hackathon","content":"전국 대학교 멋쟁이 사자처럼 동아리 원들이 모여 다 같이 밤샘 개발을 하는 행사","image":"likelion_hackathon.jpg","extraInfo":{"subTitle":"중앙 멋쟁이 사자처럼 해커톤","period":"2019.07. ~ 2019.08.","description":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites.","review":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.","extraImage":["likelion_hackathon.jpg","likelion_hackathon.jpg","likelion_hackathon.jpg","likelion_hackathon.jpg","likelion_hackathon.jpg","likelion_hackathon.jpg"]}},{"title":"LikeLion Hackathon","content":"전국 대학교 멋쟁이 사자처럼 동아리 원들이 모여 다 같이 밤샘 개발을 하는 행사","image":"likelion_hackathon.jpg","extraInfo":{"subTitle":"중앙 멋쟁이 사자처럼 해커톤","period":"2019.07. ~ 2019.08.","description":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites.","review":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.","extraImage":["likelion_hackathon.jpg","likelion_hackathon.jpg","likelion_hackathon.jpg","likelion_hackathon.jpg","likelion_hackathon.jpg","likelion_hackathon.jpg"]}},{"title":"LikeLion Hackathon","content":"전국 대학교 멋쟁이 사자처럼 동아리 원들이 모여 다 같이 밤샘 개발을 하는 행사","image":"likelion_hackathon.jpg","extraInfo":{"subTitle":"중앙 멋쟁이 사자처럼 해커톤","period":"2019.07. ~ 2019.08.","description":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites.","review":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.","extraImage":["likelion_hackathon.jpg","likelion_hackathon.jpg","likelion_hackathon.jpg","likelion_hackathon.jpg","likelion_hackathon.jpg","likelion_hackathon.jpg"]}},{"title":"LikeLion Hackathon","content":"전국 대학교 멋쟁이 사자처럼 동아리 원들이 모여 다 같이 밤샘 개발을 하는 행사","image":"likelion_hackathon.jpg","extraInfo":{"subTitle":"중앙 멋쟁이 사자처럼 해커톤","period":"2019.07. ~ 2019.08.","description":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites.","review":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.","extraImage":["likelion_hackathon.jpg","likelion_hackathon.jpg","likelion_hackathon.jpg","likelion_hackathon.jpg","likelion_hackathon.jpg","likelion_hackathon.jpg"]}},{"title":"LikeLion Hackathon","content":"전국 대학교 멋쟁이 사자처럼 동아리 원들이 모여 다 같이 밤샘 개발을 하는 행사","image":"likelion_hackathon.jpg","extraInfo":{"subTitle":"중앙 멋쟁이 사자처럼 해커톤","period":"2019.07. ~ 2019.08.","description":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites.","review":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.","extraImage":["likelion_hackathon.jpg","likelion_hackathon.jpg","likelion_hackathon.jpg","likelion_hackathon.jpg","likelion_hackathon.jpg","likelion_hackathon.jpg"]}}],"activity":[{"title":"LikeLion Hackathon","content":"전국 대학교 멋쟁이 사자처럼 동아리 원들이 모여 다 같이 밤샘 개발을 하는 행사","image":"likelion_hackathon.jpg","extraInfo":{"subTitle":"중앙 멋쟁이 사자처럼 해커톤","period":"2019.07. ~ 2019.08.","description":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites.","review":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.","extraImage":["likelion_hackathon.jpg","likelion_hackathon.jpg","likelion_hackathon.jpg","likelion_hackathon.jpg","likelion_hackathon.jpg","likelion_hackathon.jpg"]}},{"title":"LikeLion Hackathon","content":"전국 대학교 멋쟁이 사자처럼 동아리 원들이 모여 다 같이 밤샘 개발을 하는 행사","image":"likelion_hackathon.jpg","extraInfo":{"subTitle":"중앙 멋쟁이 사자처럼 해커톤","period":"2019.07. ~ 2019.08.","description":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites.","review":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.","extraImage":["likelion_hackathon.jpg","likelion_hackathon.jpg","likelion_hackathon.jpg","likelion_hackathon.jpg","likelion_hackathon.jpg","likelion_hackathon.jpg"]}},{"title":"LikeLion Hackathon","content":"전국 대학교 멋쟁이 사자처럼 동아리 원들이 모여 다 같이 밤샘 개발을 하는 행사","image":"likelion_hackathon.jpg","extraInfo":{"subTitle":"중앙 멋쟁이 사자처럼 해커톤","period":"2019.07. ~ 2019.08.","description":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites.","review":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.","extraImage":["likelion_hackathon.jpg","likelion_hackathon.jpg","likelion_hackathon.jpg","likelion_hackathon.jpg","likelion_hackathon.jpg","likelion_hackathon.jpg"]}},{"title":"LikeLion Hackathon","content":"전국 대학교 멋쟁이 사자처럼 동아리 원들이 모여 다 같이 밤샘 개발을 하는 행사","image":"likelion_hackathon.jpg","extraInfo":{"subTitle":"중앙 멋쟁이 사자처럼 해커톤","period":"2019.07. ~ 2019.08.","description":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites.","review":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.","extraImage":["likelion_hackathon.jpg","likelion_hackathon.jpg","likelion_hackathon.jpg","likelion_hackathon.jpg","likelion_hackathon.jpg","likelion_hackathon.jpg"]}},{"title":"LikeLion Hackathon","content":"전국 대학교 멋쟁이 사자처럼 동아리 원들이 모여 다 같이 밤샘 개발을 하는 행사","image":"likelion_hackathon.jpg","extraInfo":{"subTitle":"중앙 멋쟁이 사자처럼 해커톤","period":"2019.07. ~ 2019.08.","description":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites.","review":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.","extraImage":["likelion_hackathon.jpg","likelion_hackathon.jpg","likelion_hackathon.jpg","likelion_hackathon.jpg","likelion_hackathon.jpg","likelion_hackathon.jpg"]}},{"title":"LikeLion Hackathon","content":"전국 대학교 멋쟁이 사자처럼 동아리 원들이 모여 다 같이 밤샘 개발을 하는 행사","image":"likelion_hackathon.jpg","extraInfo":{"subTitle":"중앙 멋쟁이 사자처럼 해커톤","period":"2019.07. ~ 2019.08.","description":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites.","review":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.","extraImage":["likelion_hackathon.jpg","likelion_hackathon.jpg","likelion_hackathon.jpg","likelion_hackathon.jpg","likelion_hackathon.jpg","likelion_hackathon.jpg"]}}]}',
      );
    },
    b0J9: function (e, t, a) {
      'use strict';
      t.a = function (e) {
        return '../../portfolio_images/' + e;
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-portfolio-tsx-35c1575b54becce74a39.js.map
