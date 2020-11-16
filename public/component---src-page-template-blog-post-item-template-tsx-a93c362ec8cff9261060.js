(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    '9eSz': function (e, t, a) {
      'use strict';
      var i = a('5NKs');
      (t.__esModule = !0), (t.default = void 0);
      var r,
        n = i(a('v06X')),
        s = i(a('XEEL')),
        o = i(a('uDP2')),
        d = i(a('j8BX')),
        l = i(a('q1tI')),
        c = i(a('17x9')),
        u = function (e) {
          var t = (0, d.default)({}, e),
            a = t.resolutions,
            i = t.sizes,
            r = t.critical;
          return (
            a && ((t.fixed = a), delete t.resolutions),
            i && ((t.fluid = i), delete t.sizes),
            r && (t.loading = 'eager'),
            t.fluid && (t.fluid = w([].concat(t.fluid))),
            t.fixed && (t.fixed = w([].concat(t.fixed))),
            t
          );
        },
        f = function (e) {
          var t = e.media;
          return !!t && x && !!window.matchMedia(t).matches;
        },
        p = function (e) {
          var t = e.fluid,
            a = e.fixed,
            i = g(t || a || []);
          return i && i.src;
        },
        g = function (e) {
          if (
            x &&
            (function (e) {
              return (
                !!e &&
                Array.isArray(e) &&
                e.some(function (e) {
                  return void 0 !== e.media;
                })
              );
            })(e)
          ) {
            var t = e.findIndex(f);
            if (-1 !== t) return e[t];
            var a = e.findIndex(function (e) {
              return void 0 === e.media;
            });
            if (-1 !== a) return e[a];
          }
          return e[0];
        },
        m = Object.create({}),
        h = function (e) {
          var t = u(e),
            a = p(t);
          return m[a] || !1;
        },
        b = 'undefined' != typeof HTMLImageElement && 'loading' in HTMLImageElement.prototype,
        x = 'undefined' != typeof window,
        y = x && window.IntersectionObserver,
        v = new WeakMap();
      function O(e) {
        return e.map(function (e) {
          var t = e.src,
            a = e.srcSet,
            i = e.srcSetWebp,
            r = e.media,
            n = e.sizes;
          return l.default.createElement(
            l.default.Fragment,
            { key: t },
            i &&
              l.default.createElement('source', {
                type: 'image/webp',
                media: r,
                srcSet: i,
                sizes: n,
              }),
            a && l.default.createElement('source', { media: r, srcSet: a, sizes: n }),
          );
        });
      }
      function w(e) {
        var t = [],
          a = [];
        return (
          e.forEach(function (e) {
            return (e.media ? t : a).push(e);
          }),
          [].concat(t, a)
        );
      }
      function j(e) {
        return e.map(function (e) {
          var t = e.src,
            a = e.media,
            i = e.tracedSVG;
          return l.default.createElement('source', { key: t, media: a, srcSet: i });
        });
      }
      function S(e) {
        return e.map(function (e) {
          var t = e.src,
            a = e.media,
            i = e.base64;
          return l.default.createElement('source', { key: t, media: a, srcSet: i });
        });
      }
      function E(e, t) {
        var a = e.srcSet,
          i = e.srcSetWebp,
          r = e.media,
          n = e.sizes;
        return (
          '<source ' +
          (t ? "type='image/webp' " : '') +
          (r ? 'media="' + r + '" ' : '') +
          'srcset="' +
          (t ? i : a) +
          '" ' +
          (n ? 'sizes="' + n + '" ' : '') +
          '/>'
        );
      }
      var I = function (e, t) {
          var a =
            (void 0 === r &&
              'undefined' != typeof window &&
              window.IntersectionObserver &&
              (r = new window.IntersectionObserver(
                function (e) {
                  e.forEach(function (e) {
                    if (v.has(e.target)) {
                      var t = v.get(e.target);
                      (e.isIntersecting || e.intersectionRatio > 0) &&
                        (r.unobserve(e.target), v.delete(e.target), t());
                    }
                  });
                },
                { rootMargin: '200px' },
              )),
            r);
          return (
            a && (a.observe(e), v.set(e, t)),
            function () {
              a.unobserve(e), v.delete(e);
            }
          );
        },
        L = function (e) {
          var t = e.src ? 'src="' + e.src + '" ' : 'src="" ',
            a = e.sizes ? 'sizes="' + e.sizes + '" ' : '',
            i = e.srcSet ? 'srcset="' + e.srcSet + '" ' : '',
            r = e.title ? 'title="' + e.title + '" ' : '',
            n = e.alt ? 'alt="' + e.alt + '" ' : 'alt="" ',
            s = e.width ? 'width="' + e.width + '" ' : '',
            o = e.height ? 'height="' + e.height + '" ' : '',
            d = e.crossOrigin ? 'crossorigin="' + e.crossOrigin + '" ' : '',
            l = e.loading ? 'loading="' + e.loading + '" ' : '',
            c = e.draggable ? 'draggable="' + e.draggable + '" ' : '';
          return (
            '<picture>' +
            e.imageVariants
              .map(function (e) {
                return (e.srcSetWebp ? E(e, !0) : '') + E(e);
              })
              .join('') +
            '<img ' +
            l +
            s +
            o +
            a +
            i +
            t +
            n +
            r +
            d +
            c +
            'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'
          );
        },
        z = l.default.forwardRef(function (e, t) {
          var a = e.src,
            i = e.imageVariants,
            r = e.generateSources,
            n = e.spreadProps,
            s = e.ariaHidden,
            o = l.default.createElement(
              R,
              (0, d.default)({ ref: t, src: a }, n, { ariaHidden: s }),
            );
          return i.length > 1 ? l.default.createElement('picture', null, r(i), o) : o;
        }),
        R = l.default.forwardRef(function (e, t) {
          var a = e.sizes,
            i = e.srcSet,
            r = e.src,
            n = e.style,
            s = e.onLoad,
            c = e.onError,
            u = e.loading,
            f = e.draggable,
            p = e.ariaHidden,
            g = (0, o.default)(e, [
              'sizes',
              'srcSet',
              'src',
              'style',
              'onLoad',
              'onError',
              'loading',
              'draggable',
              'ariaHidden',
            ]);
          return l.default.createElement(
            'img',
            (0, d.default)({ 'aria-hidden': p, sizes: a, srcSet: i, src: r }, g, {
              onLoad: s,
              onError: c,
              ref: t,
              loading: u,
              draggable: f,
              style: (0, d.default)(
                {
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                },
                n,
              ),
            }),
          );
        });
      R.propTypes = { style: c.default.object, onError: c.default.func, onLoad: c.default.func };
      var k = (function (e) {
        function t(t) {
          var a;
          ((a = e.call(this, t) || this).seenBefore = x && h(t)),
            (a.isCritical = 'eager' === t.loading || t.critical),
            (a.addNoScript = !(a.isCritical && !t.fadeIn)),
            (a.useIOSupport = !b && y && !a.isCritical && !a.seenBefore);
          var i = a.isCritical || (x && (b || !a.useIOSupport));
          return (
            (a.state = {
              isVisible: i,
              imgLoaded: !1,
              imgCached: !1,
              fadeIn: !a.seenBefore && t.fadeIn,
              isHydrated: !1,
            }),
            (a.imageRef = l.default.createRef()),
            (a.placeholderRef = t.placeholderRef || l.default.createRef()),
            (a.handleImageLoaded = a.handleImageLoaded.bind((0, n.default)(a))),
            (a.handleRef = a.handleRef.bind((0, n.default)(a))),
            a
          );
        }
        (0, s.default)(t, e);
        var a = t.prototype;
        return (
          (a.componentDidMount = function () {
            if (
              (this.setState({ isHydrated: x }),
              this.state.isVisible &&
                'function' == typeof this.props.onStartLoad &&
                this.props.onStartLoad({ wasCached: h(this.props) }),
              this.isCritical)
            ) {
              var e = this.imageRef.current;
              e && e.complete && this.handleImageLoaded();
            }
          }),
          (a.componentWillUnmount = function () {
            this.cleanUpListeners && this.cleanUpListeners();
          }),
          (a.handleRef = function (e) {
            var t = this;
            this.useIOSupport &&
              e &&
              (this.cleanUpListeners = I(e, function () {
                var e = h(t.props);
                t.state.isVisible ||
                  'function' != typeof t.props.onStartLoad ||
                  t.props.onStartLoad({ wasCached: e }),
                  t.setState({ isVisible: !0 }, function () {
                    t.setState({
                      imgLoaded: e,
                      imgCached: !(!t.imageRef.current || !t.imageRef.current.currentSrc),
                    });
                  });
              }));
          }),
          (a.handleImageLoaded = function () {
            var e, t, a;
            (e = this.props),
              (t = u(e)),
              (a = p(t)) && (m[a] = !0),
              this.setState({ imgLoaded: !0 }),
              this.props.onLoad && this.props.onLoad();
          }),
          (a.render = function () {
            var e = u(this.props),
              t = e.title,
              a = e.alt,
              i = e.className,
              r = e.style,
              n = void 0 === r ? {} : r,
              s = e.imgStyle,
              o = void 0 === s ? {} : s,
              c = e.placeholderStyle,
              f = void 0 === c ? {} : c,
              p = e.placeholderClassName,
              m = e.fluid,
              h = e.fixed,
              b = e.backgroundColor,
              x = e.durationFadeIn,
              y = e.Tag,
              v = e.itemProp,
              w = e.loading,
              E = e.draggable,
              I = m || h;
            if (!I) return null;
            var k = !1 === this.state.fadeIn || this.state.imgLoaded,
              C = !0 === this.state.fadeIn && !this.state.imgCached,
              H = (0, d.default)(
                { opacity: k ? 1 : 0, transition: C ? 'opacity ' + x + 'ms' : 'none' },
                o,
              ),
              V = 'boolean' == typeof b ? 'lightgray' : b,
              T = { transitionDelay: x + 'ms' },
              q = (0, d.default)({ opacity: this.state.imgLoaded ? 0 : 1 }, C && T, o, f),
              P = {
                title: t,
                alt: this.state.isVisible ? '' : a,
                style: q,
                className: p,
                itemProp: v,
              },
              N = this.state.isHydrated ? g(I) : I[0];
            if (m)
              return l.default.createElement(
                y,
                {
                  className: (i || '') + ' gatsby-image-wrapper',
                  style: (0, d.default)(
                    {
                      position: 'relative',
                      overflow: 'hidden',
                      maxWidth: N.maxWidth ? N.maxWidth + 'px' : null,
                      maxHeight: N.maxHeight ? N.maxHeight + 'px' : null,
                    },
                    n,
                  ),
                  ref: this.handleRef,
                  key: 'fluid-' + JSON.stringify(N.srcSet),
                },
                l.default.createElement(y, {
                  'aria-hidden': !0,
                  style: { width: '100%', paddingBottom: 100 / N.aspectRatio + '%' },
                }),
                V &&
                  l.default.createElement(y, {
                    'aria-hidden': !0,
                    title: t,
                    style: (0, d.default)(
                      {
                        backgroundColor: V,
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        opacity: this.state.imgLoaded ? 0 : 1,
                        right: 0,
                        left: 0,
                      },
                      C && T,
                    ),
                  }),
                N.base64 &&
                  l.default.createElement(z, {
                    ariaHidden: !0,
                    ref: this.placeholderRef,
                    src: N.base64,
                    spreadProps: P,
                    imageVariants: I,
                    generateSources: S,
                  }),
                N.tracedSVG &&
                  l.default.createElement(z, {
                    ariaHidden: !0,
                    ref: this.placeholderRef,
                    src: N.tracedSVG,
                    spreadProps: P,
                    imageVariants: I,
                    generateSources: j,
                  }),
                this.state.isVisible &&
                  l.default.createElement(
                    'picture',
                    null,
                    O(I),
                    l.default.createElement(R, {
                      alt: a,
                      title: t,
                      sizes: N.sizes,
                      src: N.src,
                      crossOrigin: this.props.crossOrigin,
                      srcSet: N.srcSet,
                      style: H,
                      ref: this.imageRef,
                      onLoad: this.handleImageLoaded,
                      onError: this.props.onError,
                      itemProp: v,
                      loading: w,
                      draggable: E,
                    }),
                  ),
                this.addNoScript &&
                  l.default.createElement('noscript', {
                    dangerouslySetInnerHTML: {
                      __html: L(
                        (0, d.default)({ alt: a, title: t, loading: w }, N, { imageVariants: I }),
                      ),
                    },
                  }),
              );
            if (h) {
              var W = (0, d.default)(
                {
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'inline-block',
                  width: N.width,
                  height: N.height,
                },
                n,
              );
              return (
                'inherit' === n.display && delete W.display,
                l.default.createElement(
                  y,
                  {
                    className: (i || '') + ' gatsby-image-wrapper',
                    style: W,
                    ref: this.handleRef,
                    key: 'fixed-' + JSON.stringify(N.srcSet),
                  },
                  V &&
                    l.default.createElement(y, {
                      'aria-hidden': !0,
                      title: t,
                      style: (0, d.default)(
                        {
                          backgroundColor: V,
                          width: N.width,
                          opacity: this.state.imgLoaded ? 0 : 1,
                          height: N.height,
                        },
                        C && T,
                      ),
                    }),
                  N.base64 &&
                    l.default.createElement(z, {
                      ariaHidden: !0,
                      ref: this.placeholderRef,
                      src: N.base64,
                      spreadProps: P,
                      imageVariants: I,
                      generateSources: S,
                    }),
                  N.tracedSVG &&
                    l.default.createElement(z, {
                      ariaHidden: !0,
                      ref: this.placeholderRef,
                      src: N.tracedSVG,
                      spreadProps: P,
                      imageVariants: I,
                      generateSources: j,
                    }),
                  this.state.isVisible &&
                    l.default.createElement(
                      'picture',
                      null,
                      O(I),
                      l.default.createElement(R, {
                        alt: a,
                        title: t,
                        width: N.width,
                        height: N.height,
                        sizes: N.sizes,
                        src: N.src,
                        crossOrigin: this.props.crossOrigin,
                        srcSet: N.srcSet,
                        style: H,
                        ref: this.imageRef,
                        onLoad: this.handleImageLoaded,
                        onError: this.props.onError,
                        itemProp: v,
                        loading: w,
                        draggable: E,
                      }),
                    ),
                  this.addNoScript &&
                    l.default.createElement('noscript', {
                      dangerouslySetInnerHTML: {
                        __html: L(
                          (0, d.default)({ alt: a, title: t, loading: w }, N, { imageVariants: I }),
                        ),
                      },
                    }),
                )
              );
            }
            return null;
          }),
          t
        );
      })(l.default.Component);
      k.defaultProps = { fadeIn: !0, durationFadeIn: 500, alt: '', Tag: 'div', loading: 'lazy' };
      var C = c.default.shape({
          width: c.default.number.isRequired,
          height: c.default.number.isRequired,
          src: c.default.string.isRequired,
          srcSet: c.default.string.isRequired,
          base64: c.default.string,
          tracedSVG: c.default.string,
          srcWebp: c.default.string,
          srcSetWebp: c.default.string,
          media: c.default.string,
        }),
        H = c.default.shape({
          aspectRatio: c.default.number.isRequired,
          src: c.default.string.isRequired,
          srcSet: c.default.string.isRequired,
          sizes: c.default.string.isRequired,
          base64: c.default.string,
          tracedSVG: c.default.string,
          srcWebp: c.default.string,
          srcSetWebp: c.default.string,
          media: c.default.string,
          maxWidth: c.default.number,
          maxHeight: c.default.number,
        });
      function V(e) {
        return function (t, a, i) {
          var r;
          if (!t.fixed && !t.fluid)
            throw new Error(
              'The prop `fluid` or `fixed` is marked as required in `' +
                i +
                '`, but their values are both `undefined`.',
            );
          c.default.checkPropTypes((((r = {})[a] = e), r), t, 'prop', i);
        };
      }
      k.propTypes = {
        resolutions: C,
        sizes: H,
        fixed: V(c.default.oneOfType([C, c.default.arrayOf(C)])),
        fluid: V(c.default.oneOfType([H, c.default.arrayOf(H)])),
        fadeIn: c.default.bool,
        durationFadeIn: c.default.number,
        title: c.default.string,
        alt: c.default.string,
        className: c.default.oneOfType([c.default.string, c.default.object]),
        critical: c.default.bool,
        crossOrigin: c.default.oneOfType([c.default.string, c.default.bool]),
        style: c.default.object,
        imgStyle: c.default.object,
        placeholderStyle: c.default.object,
        placeholderClassName: c.default.string,
        backgroundColor: c.default.oneOfType([c.default.string, c.default.bool]),
        onLoad: c.default.func,
        onError: c.default.func,
        onStartLoad: c.default.func,
        Tag: c.default.string,
        itemProp: c.default.string,
        loading: c.default.oneOf(['auto', 'lazy', 'eager']),
        draggable: c.default.bool,
      };
      var T = k;
      t.default = T;
    },
    jERG: function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, 'blogQuery', function () {
          return N;
        });
      var i = a('q1tI'),
        r = a('oO+H'),
        n = a('qNq4'),
        s = a('wTIg'),
        o = a('j/sC'),
        d = a('9eSz'),
        l = a.n(d),
        c = a('45fX'),
        u = a('qKvR');
      const f = Object(s.a)(o.b, { target: 'e83sm7b0' })({
          name: '1vj3g',
          styles:
            'font-size:40px;font-weight:700;margin-top:30px;@media (max-width:768px){font-size:30px;}',
        }),
        p = Object(s.a)('div', { target: 'e83sm7b1' })({
          name: 'f3acar',
          styles:
            'display:flex;justify-content:space-between;align-items:flex-start;margin-top:10px;@media (max-width:768px){flex-direction:column;}',
        }),
        g = Object(s.a)('div', { target: 'e83sm7b2' })(
          'display:flex;flex-wrap:wrap;',
          o.a,
          '{font-size:15px;font-weight:100;margin-right:15px;}',
        ),
        m = Object(s.a)('div', { target: 'e83sm7b3' })({
          name: '1p5pc85',
          styles:
            'font-size:15px;font-weight:100;flex-shrink:0;padding-left:30px;@media (max-width:768px){padding:0;margin-top:5px;}',
        });
      var h = function ({ title: e, date: t, categories: a, thumbnail: i }) {
        return Object(u.c)(
          'div',
          null,
          Object(u.c)(l.a, { fluid: i, alt: 'Thumbnail Image' }),
          Object(u.c)(f, null, e),
          Object(u.c)(
            p,
            null,
            Object(u.c)(
              g,
              null,
              a.map((e) => Object(u.c)(o.b, { key: Object(c.a)() }, '#', e)),
            ),
            Object(u.c)(m, null, t),
          ),
        );
      };
      const b = Object(s.a)('div', { target: 'e1x7tfxi0' })({
        name: 't5nks0',
        styles:
          'display:flex;flex-direction:column;line-height:1.8;font-size:18px;h1{font-size:30px;}h2{font-size:25px;}h3{font-size:20px;}h1,h2,h3{font-weight:700;margin:20px 0;}blockquote{padding:5px 15px;border-left:3px solid rgba(30,31,32,0.5);margin:20px 0;}ol,ul{margin:20px 0 20px 25px;}hr{border:1px solid rgba(30,31,32,0.5);margin:20px 0;}p{padding:3px 0;}@media (max-width:768px){line-height:1.6;font-size:16px;h1{font-size:30px;}h2{font-size:25px;}h3{font-size:20px;}}',
      });
      var x = function ({ html: e }) {
        return Object(u.c)(b, { dangerouslySetInnerHTML: { __html: e } });
      };
      var y = function (e) {
        const [t, a] = Object(i.useState)(''),
          [r, n] = Object(i.useState)([]),
          s = function () {
            for (let e = r.length - 1; e >= 0; e--) {
              const { top: i } = r[e].getBoundingClientRect();
              if (i <= 0.1 && r[e].id !== t) return void a(r[e].id);
            }
            a('');
          };
        return (
          Object(i.useEffect)(() => {
            (() => {
              const e = Array.from(window.document.querySelectorAll('h1, h2, h3'));
              n(e);
            })();
          }, [e]),
          Object(i.useEffect)(
            () => (
              window.addEventListener('scroll', s), () => window.removeEventListener('scroll', s)
            ),
            [r],
          ),
          t
        );
      };
      const v = Object(s.a)('div', { target: 'e198x7ef0' })({
          name: 'chczlk',
          styles: 'position:relative;width:250px;@media (max-width:1350px){display:none;}',
        }),
        O = Object(s.a)('div', { target: 'e198x7ef1' })(
          "position:sticky;top:150px;border-left:3px solid rgba(30,31,33,0.5);padding:5px 0;a{display:block;padding:4px 0;color:rgba(30,31,33,0.5);transition:0.3s all;}ul,li{list-style-type:none;}& ul{padding:0 10px;ul{padding-left:0 10px;}}a[href$='#",
          ({ activeSlug: e }) => e,
          "']{color:#1e1f21;font-weight:700;}",
        );
      var w = function ({ toc: e }) {
        const t = y(e);
        return Object(u.c)(
          v,
          null,
          e && Object(u.c)(O, { dangerouslySetInnerHTML: { __html: e }, activeSlug: t }),
        );
      };
      const j = Object(s.a)('div', { target: 'eiv8d5s0' })({
        name: '5d8xo2',
        styles:
          'margin:150px 0;display:grid;grid-template-columns:768px 250px;grid-gap:30px;@media (max-width:1350px){display:block;}@media (max-width:768px){margin:80px 0;}',
      });
      var S = function ({ html: e, toc: t }) {
          return Object(u.c)(j, null, Object(u.c)(x, { html: e }), Object(u.c)(w, { toc: t }));
        },
        E = a('Bapl'),
        I = a('pRDh');
      const L = Object(s.a)(I.a, { target: 'e1qaylmp0' })(
          'width:45%;display:flex;flex-direction:column;',
          ({ direction: e }) =>
            'next' === e ? '\n    align-items: flex-end;\n    margin-left: auto;\n  ' : '',
          '',
        ),
        z = Object(s.a)('div', { target: 'e1qaylmp1' })(
          'display:flex;flex-direction:',
          ({ direction: e }) => 'row' + ('prev' === e ? '' : '-reverse'),
          ';align-items:center;font-size:18px;margin-bottom:15px;',
          E.a,
          '{',
          ({ direction: e }) => 'margin-' + ('prev' === e ? 'right' : 'left'),
          ':15px;}',
        ),
        R = Object(s.a)(o.b, { target: 'e1qaylmp2' })({
          name: 'dcocd9',
          styles: 'font-size:18px;font-weight:100;',
        });
      var k = function ({ direction: e, slug: t, title: a }) {
        return Object(u.c)(
          L,
          { to: t, direction: e },
          Object(u.c)(
            z,
            { direction: e },
            Object(u.c)(E.b, { type: 'arrow' + ('prev' === e ? 'Left' : 'Right'), size: 20 }),
            Object(u.c)(o.b, null, e.charAt(0).toUpperCase() + e.slice(1)),
          ),
          Object(u.c)(R, null, a),
        );
      };
      const C = function ({ repo: e, mode: t }) {
        const a = Object(i.createRef)();
        return (
          Object(i.useEffect)(() => {
            const i = document.createElement('script'),
              r = {
                src: 'https://utteranc.es/client.js',
                repo: e,
                'issue-term': 'pathname',
                label: 'utterances-comment',
                theme: 'github-' + t,
                crossorigin: 'anonymous',
                async: !0,
              };
            Object.entries(r).forEach(([e, t]) => {
              i.setAttribute(e, t);
            }),
              a.current.appendChild(i);
          }, []),
          Object(u.c)('div', { ref: a })
        );
      };
      C.defaultProps = { mode: 'light' };
      var H = C;
      function V() {
        return (V =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t];
              for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
            }
            return e;
          }).apply(this, arguments);
      }
      const T = Object(s.a)('div', { target: 'e1gtxo120' })({
        name: 's2xrj7',
        styles: 'display:flex;justify-content:space-between;margin-bottom:60px;',
      });
      var q = function ({ prevItem: e, nextItem: t }) {
        return Object(u.c)(
          'div',
          null,
          Object(u.c)(
            T,
            null,
            e && Object(u.c)(k, V({ direction: 'prev' }, e)),
            t && Object(u.c)(k, V({ direction: 'next' }, t)),
          ),
          Object(u.c)(H, { mode: 'light', repo: 'ji5485/ji5485.github.io' }),
        );
      };
      var P = function ({
        postInfo: {
          title: e,
          date: t,
          categories: a,
          thumbnail: {
            childImageSharp: { fluid: i },
          },
        },
        html: r,
        prevItem: s,
        nextItem: o,
        toc: d,
      }) {
        return Object(u.c)(
          n.a,
          null,
          Object(u.c)(h, { title: e, date: t, categories: a, thumbnail: i }),
          Object(u.c)(S, { html: r, toc: d }),
          Object(u.c)(q, { prevItem: s, nextItem: o }),
        );
      };
      t.default = function ({
        data: {
          markdownRemark: { html: e, frontmatter: t, tableOfContents: a },
        },
        pageContext: { prev: i, next: n },
      }) {
        return Object(u.c)(
          r.a,
          null,
          Object(u.c)(P, { postInfo: t, html: e, prevItem: i, nextItem: n, toc: a }),
        );
      };
      const N = '2317515419';
    },
  },
]);
//# sourceMappingURL=component---src-page-template-blog-post-item-template-tsx-a93c362ec8cff9261060.js.map
