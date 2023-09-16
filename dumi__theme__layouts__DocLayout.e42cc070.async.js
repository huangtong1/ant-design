"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[5096],{148050:function(ae,yn,t){t.d(yn,{Z:function(){return tn}});var mn=t(168400),w=t.n(mn),xn=t(667294),b=t(186548),Dn=t(65630),sn=t(879587),jn=t(785893),d,s="https://github.com/ant-design/ant-design/edit/master/",G=(0,Dn.kc)(function(j){var vn=j.token,Bn=j.css,m=vn.colorIcon,P=vn.colorText,A=vn.iconCls;return{editButton:Bn(d||(d=w()([`
      a& {
        position: relative;
        top: -2px;
        display: inline-block;
        text-decoration: none;
        vertical-align: middle;
        margin-inline-start: 6px;

        `,` {
          display: block;
          color: `,`;
          font-size: 16px;
          transition: all 0.3s;

          &:hover {
            color: `,`;
          }
        }
      }
    `])),A,m,P)}});function tn(j){var vn=j.title,Bn=j.filename,m=G(),P=m.styles;return(0,jn.jsx)(sn.Z,{title:vn,children:(0,jn.jsx)("a",{className:P.editButton,href:"".concat(s).concat(Bn),target:"_blank",rel:"noopener noreferrer",children:(0,jn.jsx)(b.Z,{})})})}},472638:function(ae,yn,t){var mn=t(97857),w=t.n(mn),xn=t(952677),b=t.n(xn),Dn=t(805574),sn=t.n(Dn),jn=t(513769),d=t.n(jn),s=t(667294),G=t(830084),tn=t(574865),j=t.n(tn),vn=t(785893),Bn=["to","children"],m=(0,s.forwardRef)(function(P,A){var n=P.to,nn=P.children,zn=d()(P,Bn),$n=(0,s.useTransition)(),Un=sn()($n,2),Hn=Un[0],ne=Un[1],Jn=(0,G.s0)(),ee=(0,G.TH)(),Xn=ee.pathname,Kn=(0,s.useMemo)(function(){return b()(n)==="object"?"".concat(n.pathname||Xn).concat(n.search||"").concat(n.hash||""):n},[n]),In=function(On){Kn.startsWith("http")||!On.metaKey&&!On.ctrlKey&&!On.shiftKey&&(On.preventDefault(),ne(function(){Jn(Kn)}))};return(0,s.useLayoutEffect)(function(){Hn?j().start():j().done()},[Hn]),(0,vn.jsx)("a",w()(w()({ref:A,href:Kn,onClick:In},zn),{},{children:nn}))});yn.Z=m},334230:function(ae,yn,t){t.r(yn),t.d(yn,{default:function(){return Nr}});var mn=t(805574),w=t.n(mn),xn=t(294184),b=t.n(xn),Dn=t(727484),sn=t.n(Dn),jn=t(533852),d=t(830084),s=t(667294),G=t(715778),tn=t(773036),j=t(302559),vn=t(438746),Bn=t(168400),m=t.n(Bn),P=t(370917),A=t(65630),n=t(785893),nn,zn={1:"#fff",2:"#fafafa",3:"#f5f5f5",4:"#f0f0f0",5:"#d9d9d9",6:"#bfbfbf",7:"#8c8c8c",8:"#595959",9:"#434343",10:"#262626",11:"#1f1f1f",12:"#141414",13:"#000"},$n=function(){var e=(0,A.Fg)(),o=function l(u){var x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return x<=10?`
.palette-`.concat(u,"-").concat(x,` {
  background: `).concat(e["".concat(u,"-").concat(x)],`;
}
`).concat(l(u,x+1),`
    `):""},i=function l(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;return u<=13?`
.palette-gray-`.concat(u,` {
  background: `).concat(zn[u],`;
}
`).concat(l(u+1),`
    `):""};return(0,n.jsx)(P.xB,{styles:(0,P.iv)(nn||(nn=m()([`
        .color-palettes {
          margin: 0 1%;

          &-dark {
            margin: 0;
            padding: 0 28px;
            background-color: #141414;

            .color-title {
              color: rgba(255, 255, 255, 0.85);
            }

            .color-description {
              color: rgba(255, 255, 255, 0.45);
            }

            .color-palette {
              margin: 45px 3.5% 45px 0;

              &:nth-of-type(3n) {
                margin-right: 0;
              }

              .main-color-item {
                margin-right: 0;

                &:hover {
                  margin-right: -8px;
                }
              }
            }
          }
        }

        .color-palette {
          display: inline-block;
          width: 31%;
          margin: 45px 1%;

          &-pick {
            margin: 0 0 20px;
            font-size: 20px;
            text-align: center;
          }

          &-picker {
            margin: 24px 0;

            &-value {
              position: relative;
              top: -3px;
              margin-left: 16px;
              font-size: 14px;
              font-family: Consolas, sans-serif;

              .ant-row-rtl & {
                margin-right: 16px;
                margin-left: 0;
              }
            }

            &-validation {
              position: relative;
              top: -3px;
              margin-left: 16px;
              color: `,`;
              font-size: 13px;

              .ant-row-rtl & {
                margin-right: 16px;
                margin-left: 0;
              }

              &-dark {
                margin-left: 0;
              }
            }
          }
        }

        .main-color {
          `,`
          `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  text-align: left;

          &-item {
            position: relative;
            height: 44px;
            margin-right: 4px;
            padding: 0 12px;
            font-size: 14px;
            font-family: Consolas, sans-serif;
            line-height: 44px;
            cursor: pointer;
            transition: all 0.2s;

            &:first-child {
              border-radius: 4px 4px 0 0;
            }

            &:last-child {
              border-radius: 0 0 4px 4px;
            }

            &:hover {
              margin-right: -8px;
              border-radius: 0 4px 4px 0;
            }
          }

          &-item &-text {
            float: left;
            transition: all 0.3s;
          }

          &-item &-value {
            position: relative;
            left: 3px;
            float: right;
            transform: scale(0.85);
            transform-origin: 100% 50%;
            opacity: 0;
            transition: all 0.3s;
          }
        }

        .color-title {
          margin: 0 0 24px;
          color: #5c6b77;
          font-weight: 500;
          font-size: 22px;
          text-align: center;
          text-transform: capitalize;
        }

        .color-description {
          display: block;
          color: #777;
          font-weight: lighter;
          font-size: 14px;
        }

        .main-color:hover {
          .main-color-value {
            left: 0;
            opacity: 0.7;
          }
        }

        .color-palette-horizontal {
          box-sizing: border-box;
          width: 100%;

          &-dark {
            height: 303px;
            padding: 32px 28px;
            background-color: #141414;

            .color-palette-picker {
              margin-bottom: 0;
            }

            .color-palette-pick {
              color: rgba(255, 255, 255, 0.65);
              text-align: left;

              &-hex {
                color: rgba(255, 255, 255, 0.65);
              }

              .ant-row-rtl & {
                direction: rtl;
                text-align: right;
              }
            }
          }

          .main-color {
            display: flex;

            &-item {
              position: relative;
              flex: 1;
              box-sizing: border-box;
              height: 86px;
              margin-right: 0;
              padding: 37px 0 0;
              line-height: normal;
              text-align: center;
              border-radius: 0;

              .main-color-text {
                float: none;
              }

              &:hover {
                height: 96px;
                margin-top: -10px;
                border-radius: 4px 4px 0 0;
              }
            }

            &-value {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              text-align: center;
              transform-origin: unset;
            }

            &:hover {
              .main-color-item {
                padding-top: 8px;
              }

              .main-color-value {
                bottom: 8px;
                opacity: 0.7;
              }
            }
          }
        }
      `])),e.colorError,o("blue"),o("purple"),o("cyan"),o("green"),o("magenta"),o("red"),o("volcano"),o("orange"),o("gold"),o("yellow"),o("lime"),o("geekblue"),i())})},Un=$n,Hn,ne=function(){return(0,n.jsx)(P.xB,{styles:(0,P.iv)(Hn||(Hn=m()([`
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        > a[aria-hidden]:first-child {
          float: left;
          width: 20px;
          padding-inline-end: 4px;
          font-size: 0;
          line-height: inherit;
          text-align: right;
          padding-inline-end: 4px;
          margin-inline-start: -24px;

          [data-direction='rtl'] & {
            float: right;
          }

          &:hover {
            border: 0;
          }

          > .icon-link::before {
            font-size: 20px;
            content: '#';
          }
        }

        &:not(:hover) > a[aria-hidden]:first-child > .icon-link {
          visibility: hidden;
        }
      }
    `])))})},Jn,ee=function(){var a=(0,A.Fg)();return(0,n.jsx)(P.xB,{styles:(0,P.iv)(Jn||(Jn=m()([`
        @font-face {
          font-weight: normal;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_6e11e43nfj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_6e11e43nfj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_6e11e43nfj.ttf') format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        @font-face {
          font-weight: bold;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_exesdog9toj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_exesdog9toj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_exesdog9toj.ttf')
              format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        // \u7EC4\u4EF6\u4E30\u5BCC\uFF0C\u9009\u7528\u81EA\u5982\u5B9A\u5236\u4E3B\u9898\u968F\u5FC3\u6240\u6B32\u8BBE\u8BA1\u8BED\u8A00\u4E0E\u7814\u53D1\u6846\u67B61234567890 QWERTYUIOPLKJHGFDSAZXCVBNM,.mnbvcxzasdfghjklpoiuytrewq
        /* CDN \u670D\u52A1\u4EC5\u4F9B\u5E73\u53F0\u4F53\u9A8C\u548C\u8C03\u8BD5\u4F7F\u7528\uFF0C\u5E73\u53F0\u4E0D\u627F\u8BFA\u670D\u52A1\u7684\u7A33\u5B9A\u6027\uFF0C\u4F01\u4E1A\u5BA2\u6237\u9700\u4E0B\u8F7D\u5B57\u4F53\u5305\u81EA\u884C\u53D1\u5E03\u4F7F\u7528\u5E76\u505A\u597D\u5907\u4EFD\u3002 */
        @font-face {
          font-weight: 900;
          font-family: 'AliPuHui';
          src: url('//at.alicdn.com/wf/webfont/exMpJIukiCms/Gsw2PSKrftc1yNWMNlXgw.woff2')
              format('woff2'),
            url('//at.alicdn.com/wf/webfont/exMpJIukiCms/vtu73by4O2gEBcvBuLgeu.woff') format('woff');
          font-display: swap;
        }

        html {
          direction: initial;

          &.rtl {
            direction: rtl;
          }
        }

        body {
          overflow-x: hidden;
          color: `,`;
          font-size: `,`px;
          font-family: `,`;
          line-height: `,`;
          background: `,`;
          transition: background-color 1s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
      `])),a.colorText,a.fontSize,a.fontFamily,a.lineHeight,a.colorBgContainer)})},Xn,Kn=function(){var a=(0,A.Fg)(),e=a.headerHeight,o=a.margin;return(0,n.jsx)(P.xB,{styles:(0,P.iv)(Xn||(Xn=m()([`
      body,
      div,
      dl,
      dt,
      dd,
      ul,
      ol,
      li,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      pre,
      code,
      form,
      fieldset,
      legend,
      input,
      textarea,
      p,
      blockquote,
      th,
      td,
      hr,
      button,
      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        margin: 0;
        padding: 0;
      }

      ul,
      ol {
        list-style: none;
      }

      img {
        vertical-align: middle;
        border-style: none;
      }

      html {
        scroll-padding-top: `,`px;
      }

      [data-prefers-color='dark'] {
        color-scheme: dark;
      }
    `])),e+o)})},In=t(510274),te,On=function(){var e=(0,A.Fg)(),o=e.antCls,i=e.colorPrimary;return(0,n.jsx)(P.xB,{styles:(0,P.iv)(te||(te=m()([`
        .markdown {
          color: `,`;
          font-size: 14px;
          line-height: 2;
        }

        .highlight {
          line-height: 1.5;
        }

        .markdown img {
          max-width: calc(100% - 32px);
          max-height: 100%;
          display: block;
          margin: 0 auto;
        }

        .markdown p > img {
          margin: 34px auto;
          box-shadow: 0 8px 20px rgba(143, 168, 191, 0.35);
          max-width: 1024px;
          width: 100%;
          display: block;
        }

        .markdown p > img.markdown-inline-image {
          margin: 0;
          box-shadow: none;
        }

        .markdown h1 {
          margin-top: 8px;
          margin-bottom: 20px;
          color: `,`;
          font-weight: 500;
          font-size: 30px;
          font-family: Avenir, `,`, sans-serif;
          line-height: 38px;

          .subtitle {
            margin-left: 12px;
          }
        }

        .markdown h2 {
          font-size: 24px;
          line-height: 32px;
        }

        .markdown h2,
        .markdown h3,
        .markdown h4,
        .markdown h5,
        .markdown h6 {
          clear: both;
          margin: 1.6em 0 0.6em;
          color: `,`;
          font-weight: 500;
          font-family: Avenir, `,`, sans-serif;
        }

        .markdown h3 {
          font-size: 18px;
        }

        .markdown h4 {
          font-size: 16px;
        }

        .markdown h5 {
          font-size: 14px;
        }

        .markdown h6 {
          font-size: 12px;
        }

        .markdown hr {
          clear: both;
          height: 1px;
          margin: 24px 0;
          background: `,`;
          border: 0;
        }

        .markdown p,
        .markdown pre {
          margin: 1em 0;

          `,`-row-rtl & {
            direction: rtl;
            text-align: right;
          }
        }

        .markdown ul > li {
          margin-left: 20px;
          padding-left: 4px;
          list-style-type: circle;

          .rtl & {
            margin-right: 20px;
            margin-left: 0;
            padding-right: 4px;
            padding-left: 0;
          }

          &:empty {
            display: none;
          }
        }

        .markdown ol > li {
          margin-left: 20px;
          padding-left: 4px;
          list-style-type: decimal;

          `,`-row-rtl & {
            margin-right: 20px;
            margin-left: 0;
            padding-right: 4px;
            padding-left: 0;
          }
        }

        .markdown ul > li > p,
        .markdown ol > li > p {
          margin: 0.2em 0;
        }

        .markdown code {
          margin: 0 1px;
          padding: 0.2em 0.4em;
          font-size: 0.9em;
          background: `,`;
          border: 1px solid `,`;
          border-radius: 3px;
        }

        .markdown pre {
          font-family: `,`;
          background: `,`;
          border-radius: `,`px;
        }

        .markdown pre code {
          margin: 0;
          padding: 0;
          overflow: auto;
          color: `,`;
          font-size: `,`px;
          direction: ltr;
          text-align: left;
          background: #f5f5f5;
          border: none;
        }

        .markdown strong,
        .markdown b {
          font-weight: 500;
        }

        .markdown .dumi-default-source-code {
          margin: 1em 0;
          background-color: `,`;
          border-radius: `,`px;
          > pre.prism-code {
            padding: 12px 20px;
            font-size: 13px;
            line-height: 2;
          }
        }
        .pic-plus {
          & > * {
            display: inline-block !important;
            vertical-align: middle;
          }
          span {
            margin: 0 20px;
            color: #aaa;
            font-size: 30px;
          }
        }
        .antd-site-snippet {
          .ant-tabs-tab {
            .snippet-label {
              display: flex;
              align-items: center;
              justify-content: center;
              svg {
                margin-inline-end: 8px;
              }
            }
          }
          .dumi-default-source-code {
            margin: 0 auto;
            background-color: `,`;
            border-radius: `,`px;
            > pre.prism-code {
              padding: 12px 20px;
              font-size: 13px;
              line-height: 2;
            }
          }
        }

        .markdown table td > a:not(:last-child) {
          margin-right: 0 !important;

          &::after {
            position: relative !important;
          }
        }

        .markdown blockquote {
          margin: 1em 0;
          padding-left: 0.8em;
          color: `,`;
          font-size: 90%;
          border-left: 4px solid `,`;

          .rtl & {
            padding-right: 0.8em;
            padding-left: 0;
            border-right: 4px solid `,`;
            border-left: none;
          }
        }

        .markdown blockquote p {
          margin: 0;
        }

        .markdown .anchor {
          margin-left: 8px;
          opacity: 0;
          transition: opacity 0.3s;

          .rtl & {
            margin-right: 8px;
            margin-left: 0;
          }
        }

        .markdown .waiting {
          color: #ccc;
          cursor: not-allowed;
        }

        .markdown a.edit-button {
          display: inline-block;
          margin-left: 8px;
          text-decoration: none;

          .rtl & {
            margin-right: 8px;
            margin-left: 0;
            transform: rotateY(180deg);
          }

          `,`icon {
            display: block;
            color: `,`;
            font-size: 16px;
            transition: all 0.3s;

            &:hover {
              color: `,`;
            }
          }
        }

        .markdown h1:hover .anchor,
        .markdown h2:hover .anchor,
        .markdown h3:hover .anchor,
        .markdown h4:hover .anchor,
        .markdown h5:hover .anchor,
        .markdown h6:hover .anchor {
          display: inline-block;
          opacity: 1;
        }

        .markdown > br,
        .markdown > p > br {
          clear: both;
        }

        .markdown .dumi-default-table {
          table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            direction: ltr;
            empty-cells: show;
            border: 1px solid `,`;
            border-collapse: collapse;
            border-spacing: 0;

            th,
            td {
              padding: 12px 24px;
              text-align: left;
              border: 1px solid `,`;

              &:first-child {
                border-left: 1px solid `,`;
              }

              &:last-child {
                border-right: 1px solid `,`;
              }

              img {
                max-width: unset;
              }
            }

            th {
              color: #5c6b77;
              font-weight: 500;
              white-space: nowrap;
              background: rgba(0, 0, 0, 0.02);
              border-width: 1px 1px 2px;
            }

            tbody tr {
              transition: all 0.3s;

              &:hover {
                background: rgba(60, 90, 100, 0.04);
              }
            }
          }

          table.component-api-table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            font-size: `,`px;
            font-family: `,`;
            line-height: `,`;
            border: 1px solid `,`;
            border-width: 0 1px;

            th {
              border-width: 1px 0 2px;
            }

            td {
              border-width: 1px 0;
              &:first-child {
                width: 18%;
                min-width: 58px;
                color: #595959;
                font-weight: 600;
                white-space: nowrap;
              }

              &:nth-child(2) {
                width: 55%;
                min-width: 160px;
              }

              &:nth-child(3) {
                width: 22%;
                color: `,`;
                font-size: `,`px;
              }

              &:nth-child(4) {
                width: 15%;
                font-size: `,`px;
              }

              &:nth-child(5) {
                width: 8%;
                font-size: `,`px;
              }

              &:nth-last-child(3):first-child {
                width: 38%;
              }

              &:nth-last-child(3):first-child ~ td:nth-last-child(2) {
                width: 70%;
              }
            }
          }
        }

        .grid-demo,
        [id^='components-grid-demo-'] {
          `,`-row > div,
            .code-box-demo `,`-row > div {
            min-height: 30px;
            margin-top: 8px;
            margin-bottom: 8px;
            color: #fff;
            text-align: center;
            border-radius: 0;
          }

          .code-box-demo `,`-row > div:not(.gutter-row) {
            padding: 16px 0;
            background: `,`;

            &:nth-child(2n + 1) {
              background: `,`;
            }
          }

          `,`-row .demo-col,
            .code-box-demo `,`-row .demo-col {
            margin-top: 0;
            margin-bottom: 0;
            padding: 30px 0;
            color: `,`;
            font-size: 18px;
            text-align: center;
            border: none;
          }

          `,`-row .demo-col-1 {
            background: `,`;
          }

          `,`-row .demo-col-2,
            .code-box-demo `,`-row .demo-col-2 {
            background: `,`;
          }

          `,`-row .demo-col-3,
            .code-box-demo `,`-row .demo-col-3 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          `,`-row .demo-col-4,
            .code-box-demo `,`-row .demo-col-4 {
            background: `,`;
          }

          `,`-row .demo-col-5,
            .code-box-demo `,`-row .demo-col-5 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          .code-box-demo .height-100 {
            height: 100px;
            line-height: 100px;
          }

          .code-box-demo .height-50 {
            height: 50px;
            line-height: 50px;
          }

          .code-box-demo .height-120 {
            height: 120px;
            line-height: 120px;
          }

          .code-box-demo .height-80 {
            height: 80px;
            line-height: 80px;
          }
        }

        [id='components-grid-demo-playground'],
        [id='components-grid-demo-gutter'] {
          > .code-box-demo `,`-row > div {
            margin-top: 0;
            margin-bottom: 0;
          }
        }
      `])),e.colorText,e.colorTextHeading,e.fontFamily,e.colorTextHeading,e.fontFamily,e.colorSplit,o,o,e.siteMarkdownCodeBg,e.colorSplit,e.codeFamily,e.siteMarkdownCodeBg,e.borderRadius,e.colorText,Math.max(e.fontSize-1,12),e.siteMarkdownCodeBg,e.borderRadius,e.siteMarkdownCodeBg,e.borderRadius,e.colorTextSecondary,e.colorSplit,e.colorSplit,o,e.colorTextSecondary,e.colorText,e.colorSplit,e.colorSplit,e.colorSplit,e.colorSplit,Math.max(e.fontSize-1,12),e.codeFamily,e.lineHeight,e.colorSplit,e.magenta7,Math.max(e.fontSize-1,12),Math.max(e.fontSize-1,12),Math.max(e.fontSize-1,12),o,o,o,i,new In.C(i).setAlpha(.75).toHex8String(),o,o,e.colorWhite,o,new In.C(i).setAlpha(.75).toHexString(),o,o,new In.C(i).setAlpha(.75).toHexString(),o,o,o,o,new In.C(i).setAlpha(.6).toHexString(),o,o,o)})},ie=On,le,se=function(){var a=(0,A.Fg)();return(0,n.jsx)(P.xB,{styles:(0,P.iv)(le||(le=m()([`
        /**
* prism.js default theme for JavaScript, CSS and HTML
* Based on dabblet (http://dabblet.com)
* @author Lea Verou
*/

        pre code {
          display: block;
          padding: 16px 32px;
          color: `,`;
          font-size: `,`px;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: 2;
          white-space: pre;
          background: white;
          border: 1px solid #e9e9e9;
          border-radius: `,`px;
        }

        code[class*='language-'],
        pre[class*='language-'] {
          color: black;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: 1.5;
          direction: ltr;
          white-space: pre;
          text-align: left;
          word-wrap: normal;
          word-break: normal;
          word-spacing: normal;
          tab-size: 4;
          hyphens: none;
          background: none;
        }

        code[class*='css'] {
          direction: ltr;
        }

        pre[class*='language-'] ::selection,
        code[class*='language-'] ::selection {
          text-shadow: none;
          background: #b3d4fc;
        }

        @media print {
          code[class*='language-'],
          pre[class*='language-'] {
            text-shadow: none;
          }
        }

        /* Code blocks */
        pre[class*='language-'] {
          margin: 16px 0;
          padding: 12px 20px;
          overflow: auto;
        }

        :not(pre) > code[class*='language-'],
        pre[class*='language-'] {
          background: #f5f5f5;
        }

        /* Inline code */
        :not(pre) > code[class*='language-'] {
          padding: 0.1em;
          white-space: normal;
          border-radius: 0.3em;
        }

        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
          color: slategray;
        }

        .token.punctuation {
          color: #999;
        }

        .namespace {
          opacity: 0.7;
        }

        .markdown {
          .token.property,
          .token.tag,
          .token.boolean,
          .token.number,
          .token.constant,
          .token.symbol,
          .token.deleted {
            color: #f81d22;
          }

          .token.selector,
          .token.attr-name,
          .token.string,
          .token.char,
          .token.builtin,
          .token.inserted {
            color: #0b8235;
          }

          .token.operator,
          .token.entity,
          .token.url,
          .language-css .token.string,
          .style .token.string {
            color: #0b8235;
          }

          .token.atrule,
          .token.attr-value,
          .token.keyword {
            color: #008dff;
          }

          .token.function {
            color: #f81d22;
          }

          .token.regex,
          .token.important,
          .token.variable {
            color: #e90;
          }

          .token.important,
          .token.bold {
            font-weight: bold;
          }

          .token.italic {
            font-style: italic;
          }

          .token.entity {
            cursor: help;
          }
        }
      `])),a.colorText,a.fontSize,a.borderRadius)})},wn,p=function(){var e=(0,A.Fg)(),o=e.antCls,i=e.iconCls;return(0,n.jsx)(P.xB,{styles:(0,P.iv)(wn||(wn=m()([`
        .code-boxes-col-1-1 {
          width: 100%;
        }

        .code-boxes-col-2-1 {
          display: inline-block;
          vertical-align: top;
        }

        .code-box {
          position: relative;
          display: inline-block;
          width: 100%;
          margin: 0 0 16px;
          background-color: `,`;
          border: 1px solid `,`;
          border-radius: `,`px;
          transition: all 0.2s;

          .code-box-title {
            &,
            a {
              color: `,` !important;
              background: `,`;
            }
          }

          .code-box-demo {
            background-color: `,`;
            border-radius: `,"px ",`px 0 0;
          }

          .markdown {
            pre {
              margin: 0.5em 0;
              padding: 6px 12px;
            }

            pre code {
              margin: 0;
              background: #f5f5f5;
            }
          }

          &:target {
            border: 1px solid `,`;
          }

          &-expand-trigger {
            position: relative;
            color: #3b4357;
            font-size: 20px;
            cursor: pointer;
            opacity: 0.75;
            transition: all 0.3s;
            margin-inline-start: 12px;

            &:hover {
              opacity: 1;
            }
          }

          &-title {
            position: absolute;
            top: -14px;
            padding: 1px 8px;
            color: #777;
            background: `,`;
            border-radius: `,"px ",`px 0 0;
            transition: background-color 0.4s;
            margin-inline-start: 16px;

            `,`-row-rtl & {
              border-radius: `,"px 0 0 ",`px;
            }

            a,
            a:hover {
              color: `,`;
              font-weight: 500;
              font-size: `,`px;
            }
          }

          &-description {
            padding: 18px 24px 12px;
          }

          a.edit-button {
            position: absolute;
            top: 7px;
            right: -16px;
            font-size: 12px;
            text-decoration: none;
            background: inherit;
            transform: scale(0.9);
            padding-inline-end: 6px;

            `,` {
              color: `,`;
              transition: all 0.3s;

              &:hover {
                color: `,`;
              }
            }

            `,"-row",`-row-rtl & {
              right: auto;
              left: -22px;
            }
          }

          &-demo {
            padding: 42px 24px 50px;
            color: `,`;
            border-bottom: 1px solid `,`;
          }

          iframe {
            width: 100%;
            border: 0;
          }

          &-meta {
            &.markdown {
              position: relative;
              width: 100%;
              font-size: `,`px;
              border-radius: 0 0 `,"px ",`px;
              transition: background-color 0.4s;
            }

            blockquote {
              line-height: 1.5;
            }

            h4,
            section& p {
              margin: 0;
            }

            > p {
              width: 100%;
              margin: 0.5em 0;
              font-size: 12px;
              word-break: break-word;
              padding-inline-end: 25px;
            }
          }

          &.expand &-meta {
            border-bottom: 1px dashed `,`;
            border-radius: 0;
          }

          .code-expand-icon {
            position: relative;
            width: 16px;
            height: 16px;
            cursor: pointer;
          }

          .code-expand-icon-show,
          .code-expand-icon-hide {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            max-width: 100%;
            margin: 0;
            box-shadow: none;
            transition: all 0.4s;
            user-select: none;

            `,`-row-rtl & {
              right: 0;
              left: auto;
            }
          }

          .code-expand-icon-show {
            opacity: 0.55;
            pointer-events: auto;

            &:hover {
              opacity: 1;
            }
          }

          .code-expand-icon`,`-tooltip-open .code-expand-icon-show {
            opacity: 1;
          }

          .code-expand-icon-hide {
            opacity: 0;
            pointer-events: none;
          }

          .highlight-wrapper {
            display: none;
            overflow: auto;
            border-radius: 0 0 `,"px ",`px;

            &-expand {
              display: block;
            }
          }

          .highlight {
            position: relative;

            pre {
              margin: 0;
              padding: 0;
              background: `,`;
            }

            &:not(:first-child) {
              border-top: 1px dashed `,`;
            }
          }

          &-actions {
            display: flex;
            justify-content: center;
            padding: 12px 0;
            border-top: 1px dashed `,`;
            opacity: 0.7;
            transition: opacity 0.3s;

            &:hover {
              opacity: 1;
            }
          }

          &-actions &-code-action {
            position: relative;
            display: flex;
            align-items: center;
            width: 16px;
            height: 16px;
            color: `,`;
            cursor: pointer;
            transition: all 0.24s;

            &:hover {
              color: `,`;
            }

            `,` {
              display: block;
            }
          }

          &-code-copy {
            width: 14px;
            height: 14px;
            font-size: 14px;
            text-align: center;
            background: `,`;
            cursor: pointer;
            transition: transform 0.24s;

            &`,`-check {
              color: `,` !important;
              font-weight: bold;
            }
          }

          &-codepen {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-riddle {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-codesandbox {
            width: 16px;
            height: 16px;
            overflow: hidden;
            border: 0;
            cursor: pointer;

            &:hover {
              opacity: 1;
            }
          }

          .highlight-wrapper:hover &-code-copy,
          .highlight-wrapper:hover &-codepen,
          .highlight-wrapper:hover &-codesandbox,
          .highlight-wrapper:hover &-riddle {
            opacity: 1;
          }

          pre {
            width: auto;
            margin: 0;

            code {
              background: `,`;
              border: none;
              box-shadow: unset;
              padding: 12px 16px;
              margin-top: -16px;
              font-size: 13px;
            }
          }

          &-debug {
            border-color: `,`;
          }

          &-debug &-title a {
            color: `,`;
          }
        }

        .demo-wrapper {
          position: relative;
        }

        .all-code-box-controls {
          position: absolute;
          top: -32px;
          inset-inline-end: 0;
        }

        `,`-row-rtl {
          #components-tooltip-demo-placement,
          #components-popover-demo-placement,
          #components-popconfirm-demo-placement {
            .code-box-demo {
              direction: ltr;
            }
          }
        }
      `])),e.colorBgContainer,e.colorSplit,e.borderRadius,e.colorText,e.colorBgContainer,e.colorBgContainer,e.borderRadius,e.borderRadius,e.colorPrimary,e.colorBgContainer,e.borderRadius,e.borderRadius,o,e.borderRadius,e.borderRadius,e.colorText,e.fontSize,i,e.colorTextSecondary,e.colorText,o,o,e.colorText,e.colorSplit,e.fontSize,e.borderRadius,e.borderRadius,e.colorSplit,o,o,e.borderRadius,e.borderRadius,e.colorBgContainer,e.colorSplit,e.colorSplit,e.colorTextSecondary,e.colorText,i,e.colorBgContainer,i,e.green6,e.colorBgContainer,e.purple3,e.purple6,o)})},y=p,r,c=function(){var a=(0,A.Fg)(),e=a.antCls,o=a.iconCls;return(0,n.jsx)(P.xB,{styles:(0,P.iv)(r||(r=m()([`
        ul.anticons-list {
          margin: 10px 0;
          overflow: hidden;
          direction: ltr;
          list-style: none;

          li {
            position: relative;
            float: left;
            width: 16.66%;
            height: 100px;
            margin: 3px 0;
            padding: 10px 0 0;
            overflow: hidden;
            color: #555;
            text-align: center;
            list-style: none;
            background-color: inherit;
            border-radius: 4px;
            cursor: pointer;
            transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;

            .rtl & {
              margin: 3px 0;
              padding: 10px 0 0;
            }

            `,` {
              margin: 12px 0 8px;
              font-size: 36px;
              transition: transform 0.3s ease-in-out;
              will-change: transform;
            }

            .anticon-class {
              display: block;
              font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono',
                monospace;
              white-space: nowrap;
              text-align: center;
              transform: scale(0.83);

              `,`-badge {
                transition: color 0.3s ease-in-out;
              }
            }

            &:hover {
              color: #fff;
              background-color: `,`;

              `,` {
                transform: scale(1.4);
              }

              `,`-badge {
                color: #fff;
              }
            }

            &.TwoTone:hover {
              background-color: #8ecafe;
            }

            &.copied:hover {
              color: rgba(255, 255, 255, 0.2);
            }

            &::after {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              color: #fff;
              line-height: 110px;
              text-align: center;
              background: #1677ff;
              opacity: 0;
              transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
              content: 'Copied!';
            }

            &.copied::after {
              opacity: 1;
            }
          }
        }

        .copied-code {
          padding: 2px 4px;
          font-size: 12px;
          background: #f5f5f5;
          border-radius: 2px;
        }
      `])),o,e,a.colorPrimary,o,e)})},h,S=function(){var a=(0,A.Fg)(),e=a.iconCls;return(0,n.jsx)(P.xB,{styles:(0,P.iv)(h||(h=m()([`
        .icon-pic-searcher {
          display: inline-block;
          margin: 0 8px;

          .icon-pic-btn {
            color: `,`;
            cursor: pointer;
            transition: all 0.3s;

            &:hover {
              color: `,`;
            }
          }
        }

        .icon-pic-preview {
          width: 66px;
          height: 66px;
          margin-top: 10px;
          padding: 8px;
          text-align: center;
          border: 1px solid `,`;
          border-radius: 4px;

          > img {
            max-width: 50px;
            max-height: 50px;
          }
        }

        .icon-pic-search-result {
          min-height: 50px;
          padding: 0 10px;

          > .result-tip {
            padding: 10px 0;
            color: `,`;
          }

          > table {
            width: 100%;

            .col-icon {
              width: 80px;
              padding: 10px 0;

              > `,` {
                font-size: 30px;

                :hover {
                  color: `,`;
                }
              }
            }
          }
        }
      `])),a.colorIcon,a.colorIconHover,a.colorBorder,a.colorTextSecondary,e,a.colorLinkHover)})},z,D=function(){return(0,n.jsx)(P.xB,{styles:(0,P.iv)(z||(z=m()([`
      /* Browser mockup code
 * Contribute: https://gist.github.com/jarthod/8719db9fef8deb937f4f
 * Live example: https://updown.io
 */

      .browser-mockup {
        position: relative;
        border-top: 2em solid rgba(230, 230, 230, 0.7);
        border-radius: 3px 3px 0 0;
        box-shadow: 0 0.1em 0.5em 0 rgba(0, 0, 0, 0.28);
      }

      .browser-mockup::before {
        position: absolute;
        top: -1.25em;
        left: 1em;
        display: block;
        width: 0.5em;
        height: 0.5em;
        background-color: #f44;
        border-radius: 50%;
        box-shadow: 0 0 0 2px #f44, 1.5em 0 0 2px #9b3, 3em 0 0 2px #fb5;
        content: '';
      }

      .browser-mockup.with-tab::after {
        position: absolute;
        top: -2em;
        left: 5.5em;
        display: block;
        width: 20%;
        height: 0;
        border-right: 0.8em solid transparent;
        border-bottom: 2em solid white;
        border-left: 0.8em solid transparent;
        content: '';
      }

      .browser-mockup.with-url::after {
        position: absolute;
        top: -1.6em;
        left: 5.5em;
        display: block;
        width: calc(100% - 6em);
        height: 1.2em;
        background-color: white;
        border-radius: 2px;
        content: '';
      }

      .browser-mockup > * {
        display: block;
      }
    `])))})},I,f=function(){var a=(0,A.Fg)();return(0,n.jsx)(P.xB,{styles:(0,P.iv)(I||(I=m()([`
        .nav-phone-icon {
          position: absolute;
          bottom: 17px;
          right: 30px;
          z-index: 1;
          display: none;
          width: 16px;
          height: 22px;
          cursor: pointer;
        }

        @media only screen and (max-width: `,`px) {
          .code-boxes-col-2-1,
          .code-boxes-col-1-1 {
            float: none;
            width: 100%;
            max-width: unset;
          }
        }

        @media only screen and (max-width: 767.99px) {
          .preview-image-boxes {
            float: none;
            width: 100%;
            margin: 0 !important;
          }

          .preview-image-box {
            width: 100%;
            margin: 10px 0;
            padding: 0;
          }

          .image-wrapper {
            display: none;
          }

          div.version {
            display: block;
            margin: 29px auto 16px;
          }

          .toc {
            display: none;
          }

          .nav-phone-icon {
            display: block;
          }

          .main {
            height: calc(100% - 86px);
          }

          .aside-container {
            float: none;
            width: auto;
            padding-bottom: 30px;
            border-right: 0;
          }

          .ant-row-rtl {
            margin-right: 0;
            margin-left: 0;
            padding-right: 16px;
            padding-left: 16px;

            > .markdown > * {
              width: 100% !important;
            }
          }

          .main-wrapper {
            width: 100%;
            margin: 0;
            border-radius: 0;
          }

          .prev-next-nav {
            width: calc(100% - 32px);
            margin-left: 16px;

            .ant-row-rtl & {
              margin-right: 16px;
              margin-left: 64px;
            }
          }

          .drawer {
            .ant-menu-inline .ant-menu-item::after,
            .ant-menu-vertical .ant-menu-item::after {
              right: auto;
              left: 0;
            }
          }

          /** home \u533A\u5757 **/
          .home-page-wrapper {
            .page {
              h2 {
                margin: 80px auto 64px;
              }
            }

            .parallax-bg {
              display: none;
            }
          }

          .banner {
            display: block;
            height: 632px;

            &-bg-wrapper {
              display: none;
            }

            .img-wrapper,
            .text-wrapper {
              display: inline-block;
              width: 100%;
              min-width: unset;
              max-width: unset;
              margin: auto;
              text-align: center;
            }

            .img-wrapper {
              position: initial;
              margin-top: 20px;
              text-align: center;

              svg {
                width: 100%;
                max-width: 260px;
                height: auto;
                margin: 0 auto;
              }
            }

            .text-wrapper {
              min-height: 200px;
              margin-top: 32px;
              padding: 0;

              h1 {
                display: none;
              }

              p {
                color: #314659;
                font-size: 14px;
                line-height: 28px;
              }

              .banner-btns {
                display: block;
                min-width: 100%;
                white-space: nowrap;
                text-align: center;

                .banner-btn {
                  padding: 0 20px;
                  font-size: 14px;
                }
              }

              .banner-promote {
                min-width: 100%;
                margin-top: 32px;

                .ant-divider {
                  display: none;
                }

                a {
                  font-size: 14px;
                  white-space: nowrap;

                  img {
                    width: 20px;
                  }
                }
              }
            }
          }

          .page1 {
            min-height: 1300px;

            .ant-row {
              margin: 24px auto 64px;

              > div {
                margin-bottom: 48px;
              }
            }
          }

          .page2 {
            min-height: 840px;
            background: `,`;

            &-content {
              box-shadow: none;
            }

            &-components {
              display: none;
            }

            &-product {
              min-height: auto;
              padding: 0 16px;

              .product-block {
                margin-bottom: 34px;
                padding-bottom: 35px;
                border-bottom: 1px solid `,`;

                &:last-child {
                  margin-bottom: 32px;
                  border-bottom: none;

                  .block-text-wrapper {
                    height: auto;
                  }
                }

                .block-image-wrapper {
                  height: 88px;

                  img {
                    height: 100%;
                  }
                }

                .block-text-wrapper {
                  padding-bottom: 0;
                  border-bottom: none;

                  h4 {
                    margin-bottom: 4px;
                    font-size: 18px;
                    line-height: 24px;
                  }

                  p {
                    margin-bottom: 8px;
                    font-size: 12px;
                    line-height: 20px;
                  }

                  a {
                    line-height: 20px;
                  }

                  .components-button-wrapper {
                    margin-top: 16px;
                    font-size: 12px;

                    a {
                      display: block;
                    }
                  }

                  a.more-mobile-react,
                  a.more-mobile-angular {
                    margin-top: 0;
                    color: `,`;
                  }

                  a.more-mobile-react:hover,
                  a.more-mobile-angular:hover {
                    color: #40a9ff;
                  }
                }
              }
            }
          }

          .page3 {
            min-height: 688px;
            background: url('https://gw.alipayobjects.com/zos/rmsportal/qICoJIqqQRMeRGhPHBBS.svg')
              no-repeat;
            background-size: cover;

            .ant-row {
              margin: 0 8px;
            }

            .page3-block {
              margin-bottom: 32px;
              padding: 24px;
              background: `,`;
              border-radius: 4px;
              box-shadow: 0 8px 16px rgba(174, 185, 193, 0.3);

              &:nth-child(2) {
                .page3-img-wrapper img {
                  display: block;
                  width: 70%;
                  margin: auto;
                }
              }

              p {
                font-size: 12px;
              }

              .page3-img-wrapper {
                width: 20%;

                img {
                  width: 100%;
                }
              }

              .page3-text-wrapper {
                width: 80%;
                max-width: initial;
                margin: 0;
                padding-left: 16px;
              }
            }
          }
        }
      `])),a.screenLG,a.colorBgContainer,a.colorSplit,a.colorLink,a.colorBgContainer)})},$,O=function(){var a=(0,A.Fg)();return(0,n.jsx)(P.xB,{styles:(0,P.iv)($||($=m()([`
        #nprogress {
          .bar {
            background: `,`;
          }

          .peg {
            box-shadow: 0 0 10px `,", 0 0 5px ",`;
          }

          .spinner-icon {
            border-top-color: `,`;
            border-left-color: `,`;
          }
        }
      `])),a.colorPrimary,a.colorPrimary,a.colorPrimary,a.colorPrimary,a.colorPrimary)})},U,on=function(){var a=(0,A.Fg)();return(0,n.jsx)(P.xB,{styles:(0,P.iv)(U||(U=m()([`
        .preview-image-boxes {
          display: flex;
          float: right;
          clear: both;
          width: 496px;
          margin: 0 0 70px 64px;

          &-with-carousel {
            width: 420px;

            .preview-image-box img {
              padding: 0;
            }
          }

          .ant-row-rtl & {
            float: left;
            margin: 0 64px 70px 0;
          }
        }

        .preview-image-boxes + .preview-image-boxes {
          margin-top: -35px;
        }

        .preview-image-box {
          float: left;
          width: 100%;
        }

        .preview-image-box + .preview-image-box {
          margin-left: 24px;

          .ant-row-rtl & {
            margin-right: 24px;
            margin-left: 0;
          }
        }

        .preview-image-wrapper {
          position: relative;
          display: inline-block;
          width: 100%;
          padding: 16px;
          text-align: center;
          background: #f2f4f5;
          box-sizing: border-box;
        }

        .preview-image-wrapper.video {
          display: block;
          padding: 0;
          background: 0;
        }

        .preview-image-wrapper video {
          display: block;
          width: 100%;

          + svg {
            position: absolute;
            top: 0;
            left: 0;
          }
        }

        .preview-image-wrapper.good::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-wrapper.bad::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-title {
          margin-top: 20px;
          color: `,`;
          font-size: 12px;
        }

        .preview-image-description {
          margin-top: 2px;
          color: `,`;
          font-size: 12px;
          line-height: 1.5;
        }

        .preview-image-description hr {
          margin: 2px 0;
          background: none;
          border: 0;
        }

        .preview-image-box img {
          box-sizing: border-box;
          max-width: 100%;
          padding: 12px;
          background: `,`;
          border-radius: `,`px;
          cursor: pointer;
          transition: all 0.3s;

          &.no-padding {
            padding: 0;
            background: none;
          }
        }

        .preview-image-boxes.preview-image-boxes-with-carousel img {
          padding: 0;
          box-shadow: 0 1px 0 0 #ddd, 0 3px 0 0 `,`, 0 4px 0 0 #ddd,
            0 6px 0 0 `,`, 0 7px 0 0 #ddd;
        }

        .preview-image-box img:hover {
          box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);
        }

        .transition-video-player,
        .motion-video-min {
          float: right;
          width: 600px;
          padding: 0 0 70px 20px;

          .preview-image-wrapper {
            padding: 0;
          }

          .ant-row-rtl & {
            float: left;
          }
        }

        .motion-video-min {
          width: 390px;
        }

        .motion-principle-wrapper {
          width: 100%;
          max-width: 900px;
          margin: 48px 0 24px;
        }

        .principle-wrapper {
          width: 100%;

          .principle {
            display: inline-block;
            box-sizing: border-box;
            width: 100%;
            min-height: 180px;
            margin-right: 12.5%;
            margin-bottom: 24px;
            padding: 24px;
            font-size: 24px;
            text-align: center;
            border: 1px solid #e8e8e8;
            border-radius: 4px;

            &:last-child {
              margin-right: 0;
            }

            h4 {
              margin: 16px 0 8px;
            }

            p {
              font-size: 12px;
              line-height: 24px;
            }
          }
        }
      `])),a.colorPrimary,a.colorError,a.colorText,a.colorTextSecondary,a.colorBgContainer,a.borderRadius,a.colorBgContainer,a.colorBgContainer)})},rn,an="dumi-default-",cn=function(){var a=(0,A.Fg)();return(0,n.jsx)(P.xB,{styles:(0,P.iv)(rn||(rn=m()([`
        html {
          .`,`search-bar {
            &-input {
              color: `,`;
              background: `,`;
              &:focus {
                background: `,`;
              }
              &::placeholder {
                color: `,` !important;
              }
            }
          }
          .`,`search-popover {
            background-color: `,` !important;
            &::before {
              border-bottom-color: `,` !important;
            }
          }
          .`,`search-result {
            dl {
              dt {
                background-color: `,` !important;
              }
              dd {
                a {
                  &:hover {
                    background-color: `,`;
                    h4,
                    p {
                      color: `,` !important;
                    }
                    svg {
                      fill: `,` !important;
                    }
                  }
                }
              }
            }
          }
        }
      `])),an,a.colorText,a.colorBgContainer,a.colorBgContainer,a.colorTextPlaceholder,an,a.colorBgElevated,a.colorBgElevated,an,a.controlItemBgActive,a.controlItemBgHover,a.colorText,a.colorText)})},H,Cn=function(){return(0,n.jsx)(P.xB,{styles:(0,P.iv)(H||(H=m()([`
      .design-inline-cards {
        display: flex;
        margin: 0 -20px;
      }
      .design-inline-cards > * {
        flex: 10%;
        margin: 0 20px;
      }
      .design-inline-cards img {
        width: 100%;
        max-width: 100%;
      }
      .design-inline-cards h4 {
        margin-bottom: 0;
      }
    `])))})},en=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ee,{}),(0,n.jsx)(Kn,{}),(0,n.jsx)(ie,{}),(0,n.jsx)(se,{}),(0,n.jsx)(y,{}),(0,n.jsx)(c,{}),(0,n.jsx)(S,{}),(0,n.jsx)(D,{}),(0,n.jsx)(f,{}),(0,n.jsx)(O,{}),(0,n.jsx)(on,{}),(0,n.jsx)(Cn,{}),(0,n.jsx)(Un,{}),(0,n.jsx)(ne,{}),(0,n.jsx)(cn,{})]})},Q=en,Mn=t(857278),Sn=t(430932),dn=t(985093),kn=t(115668),An=t(642207),oe=t(301210),V=t(13923),bn=t(825035),Zn=t(937993),me=t(448118),ce=t(938545),Qn=t(569980),we=t(391298),he=t(630770),Gn=t(438199),de=t(693399),_n="ant-where-checker",ge={cn:{whereNotSupport:"\u4F60\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u73B0\u4EE3 CSS Selector\uFF0C\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\uFF08\u5982 Chrome\u3001Firefox \u7B49\u7B49\uFF09\u67E5\u770B\u5B98\u7F51\u3002\u5982\u679C\u9700\u8981\u5BF9\u65E7\u7248\u6D4F\u89C8\u5668\u8FDB\u884C\u6837\u5F0F\u652F\u6301\uFF0C\u6B22\u8FCE\u67E5\u9605\u914D\u7F6E\u6587\u6863\uFF1A",whereDocTitle:"\u517C\u5BB9\u6027\u8C03\u6574\uFF08\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\u8BBF\u95EE\uFF09",whereDocUrl:"/docs/react/customize-theme-cn#\u517C\u5BB9\u6027\u8C03\u6574"},en:{whereNotSupport:"Your browser not support modern CSS Selector. Please use modern browser to view (e.g. Chrome, Firefox, etc). If you want to compatible style with legacy browser, please refer to the configuration document:",whereDocTitle:"Compatible adjustment (Please use modern browser to visit)",whereDocUrl:"/docs/react/customize-theme#compatible-adjustment"}};function Be(){var a=(0,j.Z)(ge),e=w()(a,1),o=e[0],i=s.useState(!0),l=w()(i,2),u=l[0],x=l[1];return s.useEffect(function(){var g=document.createElement("p");g.className=_n,g.style.position="fixed",g.style.pointerEvents="none",g.style.visibility="hidden",g.style.width="0",document.body.appendChild(g),(0,de.updateCSS)(`
:where(.`.concat(_n,`) {
  content: "__CHECK__";
}
    `),_n);var C=getComputedStyle(g),v=C.content;x(String(v).includes("CHECK")),document.body.removeChild(g),(0,de.removeCSS)(_n)},[]),u?null:(0,n.jsx)("div",{style:{position:"fixed",left:0,right:0,top:0,bottom:0,zIndex:99999999,background:"rgba(0,0,0,0.65)",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,n.jsxs)("div",{style:{border:"1px solid #ffe58f",background:"#fffbe6",color:"rgba(0,0,0,0.88)",padding:"8px 12px",borderRadius:"8px",zIndex:9999999999,lineHeight:"22px",width:520},children:[o.whereNotSupport," ",(0,n.jsx)("a",{style:{color:"#1677ff",textDecoration:"none"},href:o.whereDocUrl,children:o.whereDocTitle})]})})}var je,re,fe={cn:{owner:"\u8682\u8681\u96C6\u56E2\u548C Ant Design \u5F00\u6E90\u793E\u533A"},en:{owner:"Ant Group and Ant Design Community"}},ke=function(){var e=(0,s.useContext)(Gn.Z),o=e.isMobile;return(0,A.kc)(function(i){var l=i.token,u=i.css,x=new In.C((0,he.Z)("#f0f3fa","#fff")).onBackground(l.colorBgContainer).toHexString();return{holder:u(je||(je=m()([`
      background: `,`;
    `])),x),footer:u(re||(re=m()([`
      background: `,`;
      color: `,`;
      box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);

      * {
        box-sizing: border-box;
      }

      h2,
      a {
        color: `,`;
      }

      .rc-footer-column {
        margin-bottom: `,`px;
        :last-child {
          margin-bottom: `,`px;
        }
      }

      .rc-footer-item-icon {
        top: -1.5px;
      }

      .rc-footer-container {
        max-width: 1208px;
        margin-inline: auto;
        padding-inline: `,`px;
      }

      .rc-footer-bottom {
        box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);
        .rc-footer-bottom-container {
          font-size: `,`px;
        }
      }
    `])),x,l.colorTextSecondary,l.colorText,o?60:0,o?20:0,l.marginXXL,l.fontSize)}})()},He=function(){var e=(0,vn.Z)(),o=(0,j.Z)(fe),i=w()(o,2),l=i[0],u=i[1],x=ke(),g=x.styles,C=e.getLink,v=s.useMemo(function(){var E=u==="cn",N={title:(0,n.jsx)(d._H,{id:"app.footer.resources"}),items:[{title:"Ant Design Charts",url:E?"https://ant-design-charts.antgroup.com":"https://charts.ant.design",openExternal:!0},{title:"Ant Design Pro",url:"https://pro.ant.design",openExternal:!0},{title:"Ant Design Pro Components",url:"https://procomponents.ant.design",openExternal:!0},{title:"Ant Design Mobile",url:E?"https://ant-design-mobile.antgroup.com/zh":"https://mobile.ant.design",openExternal:!0},{title:"Ant Design Mini",url:E?"https://ant-design-mini.antgroup.com/":"https://mini.ant.design",openExternal:!0},{title:"Ant Design Landing",description:(0,n.jsx)(d._H,{id:"app.footer.landing"}),url:"https://landing.ant.design",openExternal:!0},{title:"Scaffolds",description:(0,n.jsx)(d._H,{id:"app.footer.scaffolds"}),url:"https://scaffold.ant.design",openExternal:!0},{title:"Umi",description:(0,n.jsx)(d._H,{id:"app.footer.umi"}),url:"https://umijs.org",openExternal:!0},{title:"dumi",description:(0,n.jsx)(d._H,{id:"app.footer.dumi"}),url:"https://d.umijs.org",openExternal:!0},{title:"qiankun",description:(0,n.jsx)(d._H,{id:"app.footer.qiankun"}),url:"https://qiankun.umijs.org",openExternal:!0},{title:"ahooks",description:(0,n.jsx)(d._H,{id:"app.footer.hooks"}),url:"https://github.com/alibaba/hooks",openExternal:!0},{title:"Ant Motion",description:(0,n.jsx)(d._H,{id:"app.footer.motion"}),url:"https://motion.ant.design",openExternal:!0},{title:(0,n.jsx)(d._H,{id:"app.footer.chinamirror"}),url:"https://ant-design.antgroup.com"}]},T={title:(0,n.jsx)(d._H,{id:"app.footer.community"}),items:[{icon:(0,n.jsx)(Mn.Z,{}),title:(0,n.jsx)(d._H,{id:"app.footer.awesome"}),url:"https://github.com/websemantics/awesome-ant-design",openExternal:!0},{icon:(0,n.jsx)(Sn.Z,{}),title:"Medium",url:"http://medium.com/ant-design/",openExternal:!0},{icon:(0,n.jsx)(dn.Z,{style:{color:"#1DA1F2"}}),title:"Twitter",url:"http://twitter.com/antdesignui",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,n.jsx)(d._H,{id:"app.footer.yuque.repo"}),url:"https://yuque.com/ant-design/ant-design",openExternal:!0},{icon:(0,n.jsx)(kn.Z,{style:{color:"#056de8"}}),title:(0,n.jsx)(d._H,{id:"app.footer.zhihu"}),url:"https://www.zhihu.com/column/c_1564262000561106944",openExternal:!0},{icon:(0,n.jsx)(kn.Z,{style:{color:"#056de8"}}),title:(0,n.jsx)(d._H,{id:"app.footer.zhihu.xtech"}),url:"https://www.zhihu.com/column/c_1543658574504751104",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/mZBWtboYbnMkTBaRIuWQ.png",width:16,height:16,alt:"seeconf"}),title:"SEE Conf",description:(0,n.jsx)(d._H,{id:"app.footer.seeconf"}),url:"https://seeconf.antfin.com/",openExternal:!0}]};E&&T.items.push({icon:(0,n.jsx)(An.Z,{}),title:(0,n.jsx)(d._H,{id:"app.footer.work_with_us"}),url:C("/docs/resources",{cn:"\u52A0\u5165\u6211\u4EEC",en:"JoinUs"}),LinkComponent:d.rU});var M={title:(0,n.jsx)(d._H,{id:"app.footer.help"}),items:[{icon:(0,n.jsx)(oe.Z,{}),title:"GitHub",url:"https://github.com/ant-design/ant-design",openExternal:!0},{icon:(0,n.jsx)(V.Z,{}),title:(0,n.jsx)(d._H,{id:"app.footer.change-log"}),url:C("/changelog"),LinkComponent:d.rU},{icon:(0,n.jsx)(bn.Z,{}),title:(0,n.jsx)(d._H,{id:"app.footer.faq"}),url:C("/docs/react/faq"),LinkComponent:d.rU},{icon:(0,n.jsx)(Zn.Z,{}),title:(0,n.jsx)(d._H,{id:"app.footer.bug-report"}),url:"https://new-issue.ant.design/",openExternal:!0},{icon:(0,n.jsx)(me.Z,{}),title:(0,n.jsx)(d._H,{id:"app.footer.issues"}),url:"https://github.com/ant-design/ant-design/issues",openExternal:!0},{icon:(0,n.jsx)(ce.Z,{}),title:(0,n.jsx)(d._H,{id:"app.footer.discussions"}),url:"https://github.com/ant-design/ant-design/discussions",openExternal:!0},{icon:(0,n.jsx)(bn.Z,{}),title:(0,n.jsx)(d._H,{id:"app.footer.stackoverflow"}),url:"http://stackoverflow.com/questions/tagged/antd",openExternal:!0},{icon:(0,n.jsx)(bn.Z,{}),title:(0,n.jsx)(d._H,{id:"app.footer.segmentfault"}),url:"https://segmentfault.com/t/antd",openExternal:!0}]},R={icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:22,height:22,alt:"Ant XTech"}),title:(0,n.jsx)(d._H,{id:"app.footer.more-product"}),items:[{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,n.jsx)(d._H,{id:"app.footer.yuque"}),url:"https://yuque.com",description:(0,n.jsx)(d._H,{id:"app.footer.yuque.slogan"}),openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/nc7Fc0XBg5/8a6844f5-a6ed-4630-9177-4fa5d0b7dd47.png",width:16,height:16,alt:"AntV"}),title:"AntV",url:"https://antv.antgroup.com",description:(0,n.jsx)(d._H,{id:"app.footer.antv.slogan"}),openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://www.eggjs.org/logo.svg",alt:"Egg",width:16,height:16}),title:"Egg",url:"https://eggjs.org",description:(0,n.jsx)(d._H,{id:"app.footer.egg.slogan"}),openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/DMDOlAUhmktLyEODCMBR.ico",width:16,height:16,alt:"kitchen"}),title:"Kitchen",description:(0,n.jsx)(d._H,{id:"app.footer.kitchen"}),url:"https://kitchen.alipay.com",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:16,height:16,alt:"xtech"}),title:(0,n.jsx)(d._H,{id:"app.footer.xtech"}),url:"https://xtech.antfin.com/",openExternal:!0},{icon:(0,n.jsx)(Qn.Z,{}),title:(0,n.jsx)(d._H,{id:"app.footer.theme"}),url:C("/theme-editor"),LinkComponent:d.rU}]};return[N,T,M,R]},[u,e.search]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(we.Z,{columns:v,className:g.footer,bottom:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{style:{opacity:"0.4"},children:["Made with ",(0,n.jsx)("span",{style:{color:"#fff"},children:"\u2764"})," by"]}),(0,n.jsx)("div",{children:l.owner})]})}),(0,n.jsx)(Be,{})]})},ze=He,Ze=t(97857),F=t.n(Ze),Ee=t(9783),xe=t.n(Ee),Le=t(660532),Re=t(24569),Fe=t(469181),We=t(344682),$e=t(11739),Ue=t(664095),ve=t(883458),Xe=t(316165),X="M448 64l512 0 0 128-128 0 0 768-128 0 0-768-128 0 0 768-128 0 0-448c-123.712 0-224-100.288-224-224s100.288-224 224-224zM64 448l256 224-256 224z",hn="M256 64l512 0 0 128-128 0 0 768-128 0 0-768-128 0 0 768-128 0 0-448c-123.712 0-224-100.288-224-224s100.288-224 224-224zM960 896l-256-224 256-224z",gn=function(e){return(0,n.jsx)(Xe.Z,F()(F()({},e),{},{children:(0,n.jsx)("svg",{viewBox:"0 0 1024 1024",fill:"currentColor",children:(0,n.jsx)("path",{d:e.direction==="ltr"?X:hn})})}))},Rn=gn,_=t(373638),Ne=t(562925),be,Vn,ye=(0,A.kc)(function(a){var e=a.token,o=a.css,i=e.headerHeight,l=e.colorTextHeading,u=e.fontFamily,x=e.mobileMaxWidth;return{logo:o(be||(be=m()([`
      height: `,`px;
      padding-inline-start: 40px;
      overflow: hidden;
      color: `,`;
      font-weight: bold;
      font-size: 18px;
      font-family: AlibabaPuHuiTi, `,`, sans-serif;
      line-height: `,`px;
      letter-spacing: -0.18px;
      white-space: nowrap;
      text-decoration: none;
      display: inline-flex;
      align-items: center;

      &:hover {
        color: `,`;
      }

      img {
        height: 32px;
        vertical-align: middle;
        margin-inline-end: 12px;
      }

      @media only screen and (max-width: `,`px) {
        padding-inline-start: 0;
        padding-inline-end: 0;
      }
    `])),i,l,u,i,l,x),title:o(Vn||(Vn=m()([`
      line-height: 32px;
    `])))}}),Me=function(e){var o=e.isZhCN,i=(0,d.TH)(),l=i.search,u=ye(),x=u.styles;return(0,n.jsx)("h1",{children:(0,n.jsxs)(d.rU,{to:_.J1("/",o,l),className:x.logo,children:[(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",height:32,width:32,alt:"logo"}),(0,n.jsx)("span",{className:x.title,children:"Ant Design"})]})})},Ae=Me,fo=t(280882),xo=t(963918),ue=t(988872),nt,et,tt,ot,rt=(0,A.kc)(function(a){var e=a.css,o=a.token;return{smallStyle:e(nt||(nt=m()([`
    font-size: 12px;
    color: #777;
    margin-left: 0.3em;
  `]))),down:e(et||(et=m()([`
    color: `,`;
  `])),o.colorTextQuaternary),downOutlined:e(tt||(tt=m()([`
    font-size: 9px;
    margin: -1px 0 0 2px;
    vertical-align: middle;
  `]))),downOutlinedRTL:e(ot||(ot=m()([`
    font-size: 9px;
    margin: -1px 2px 0 0;
    vertical-align: middle;
  `])))}}),at=function(){var e=rt(),o=e.styles;return(0,n.jsxs)("span",{className:o.smallStyle,children:["(",(0,n.jsx)(d._H,{id:"app.implementation.community"}),")"]})},it=function(){return[{label:(0,n.jsx)("a",{href:"https://charts.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(d._H,{id:"app.header.menu.charts"})}),key:"charts"},{label:(0,n.jsx)("a",{href:"http://pro.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(d._H,{id:"app.header.menu.pro.v4"})}),key:"pro"},{label:(0,n.jsx)("a",{href:"http://procomponents.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(d._H,{id:"app.header.menu.pro.components"})}),key:"procomponents"},{label:(0,n.jsxs)("a",{href:"http://ng.ant.design",target:"_blank",rel:"noopener noreferrer",children:["Ant Design of Angular",(0,n.jsx)(at,{})]}),key:"ng"},{label:(0,n.jsxs)("a",{href:"http://antdv.com",target:"_blank",rel:"noopener noreferrer",children:["Ant Design of Vue",(0,n.jsx)(at,{})]}),key:"vue"}]},vo=function(e){var o=e.isRTL,i=rt(),l=i.styles;return(0,n.jsx)(xo.Z,{menu:{items:it()},placement:"bottomRight",children:(0,n.jsxs)(ue.ZP,{size:"small",children:[(0,n.jsx)(d._H,{id:"app.header.menu.more"}),(0,n.jsx)(fo.Z,{className:b()(o?l.downOutlinedRTL:l.downOutlined,l.down)})]})})},bo=vo,yo=t(719632),pe=t.n(yo),lt=t(923232),qn=t(472638),st,ct,wo={cn:{design:"\u8BBE\u8BA1",development:"\u7814\u53D1",components:"\u7EC4\u4EF6",resources:"\u8D44\u6E90",blog:"\u535A\u5BA2"},en:{design:"Design",development:"Development",components:"Components",resources:"Resources",blog:"Blog"}},jo=(0,A.kc)(function(a){var e=a.token,o=e.antCls,i=e.iconCls,l=e.fontFamily,u=e.headerHeight,x=e.menuItemBorder,g=e.colorPrimary,C=e.colorText;return{nav:(0,A.iv)(st||(st=m()([`
      height: 100%;
      font-size: 14px;
      font-family: Avenir, `,`, sans-serif;
      border: 0;

      &`,`-menu-horizontal {
        border-bottom: none;

        & > `,"-menu-item, & > ",`-menu-submenu {
          min-width: `,`px;
          height: `,`px;
          padding-right: 12px;
          padding-left: 12px;
          line-height: `,`px;

          &::after {
            top: 0;
            right: 12px;
            bottom: auto;
            left: 12px;
            border-width: `,`px;
          }

          a {
            color: `,`;
          }

          a:before {
            position: absolute;
            inset: 0;
            background-color: transparent;
            content: "";
          }
        }

        & `,"-menu-submenu-title ",` {
          margin: 0;
        }

        & > `,`-menu-item-selected {
          a {
            color: `,`;
          }
        }
      }

      & > `,"-menu-item, & > ",`-menu-submenu {
        text-align: center;
      }
    `])),l,o,o,o,40+12*2,u,u,x,C,o,i,o,g,o,o),popoverMenuNav:(0,A.iv)(ct||(ct=m()([`
      `,`-menu-item,
      `,`-menu-submenu {
        text-align: left;
      }

      `,`-menu-item-group-title {
        padding-left: 24px;
      }

      `,`-menu-item-group-list {
        padding: 0 16px;
      }

      `,`-menu-item,
      a {
        color: #333;
      }
    `])),o,o,o,o,o)}}),Co=function(a){var e,o,i,l=a.isZhCN,u=a.isMobile,x=a.responsive,g=a.directionText,C=a.onLangChange,v=a.onDirectionChange,E=(0,d.TH)(),N=E.pathname,T=E.search,M=(0,j.Z)(wo),R=w()(M,1),Z=R[0],Y=(0,d.yh)(),W=((e=Y["/docs/blog"])===null||e===void 0||(o=e[0])===null||o===void 0?void 0:o.children)||[],L=jo(),k=L.styles,q=u?"inline":"horizontal",En=N.split("/").filter(function(B){return B}).slice(0,-1).join("/"),ln=En||"home";N.startsWith("/changelog")?ln="docs/react":N.startsWith("/docs/resources")&&(ln="docs/resources");var Ln,Nn=[{label:(0,n.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),key:"github"},{label:(0,n.jsx)(d._H,{id:"app.header.lang"}),onClick:C,key:"switch-lang"},{label:g,onClick:v,key:"switch-direction"}].concat(pe()(it()));u?Ln=Nn:x==="crowded"&&(Ln=[{label:(0,n.jsx)(Le.Z,{}),key:"additional",children:pe()(Nn)}]);var Fn=[{label:(0,n.jsx)(qn.Z,{to:_.J1("/docs/spec/introduce",l,T),children:Z.design}),key:"docs/spec"},{label:(0,n.jsx)(qn.Z,{to:_.J1("/docs/react/introduce",l,T),children:Z.development}),key:"docs/react"},{label:(0,n.jsx)(qn.Z,{to:_.J1("/components/overview/",l,T),children:Z.components}),key:"components"},W.length?{label:(0,n.jsx)(qn.Z,{to:_.J1(W.sort(function(B,un){return B.frontmatter.date>un.frontmatter.date?-1:1})[0].link,l,T),children:Z.blog}),key:"docs/blog"}:null,{label:(0,n.jsx)(qn.Z,{to:_.J1("/docs/resources",l,T),children:Z.resources}),key:"docs/resources"},l?{label:(0,n.jsx)("a",{href:"https://ant-design.antgroup.com",target:"_blank",rel:"noreferrer",children:"\u56FD\u5185\u955C\u50CF"}),key:"mirror",children:[{label:(0,n.jsx)("a",{href:"https://ant-design.antgroup.com",target:"_blank",rel:"noreferrer",children:"\u5B98\u65B9\u955C\u50CF"}),icon:(0,n.jsx)("img",{alt:"logo",src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",width:16,style:{verticalAlign:"text-bottom"}}),key:"antgroup"},{label:(0,n.jsx)("a",{href:"https://ant-design.gitee.io",target:"_blank",rel:"noreferrer",children:"Gitee \u955C\u50CF"}),icon:(0,n.jsx)("img",{alt:"gitee",src:"https://gw.alipayobjects.com/zos/bmw-prod/9e91e124-9bab-4113-b500-301412f6b370.svg",width:16,style:{verticalAlign:"text-bottom"}}),key:"gitee"}]}:null].concat(pe()((i=Ln)!==null&&i!==void 0?i:[]));return(0,n.jsx)(lt.Z,{mode:q,selectedKeys:[ln],className:k.nav,disabledOverflow:!0,items:Fn,style:{borderRight:0}})},dt=t(879587),ut,pt,mt,ht,gt,Ce="1.2em",So=(0,A.kc)(function(a){var e=a.token,o=a.css,i=e.colorText,l=e.colorBorder,u=e.colorBgContainer,x=e.colorBgTextHover,g=e.borderRadius,C=e.controlHeight,v=e.motionDurationMid;return{btn:o(ut||(ut=m()([`
      color: `,`;
      border-color: `,`;
      padding: 0 !important;
      width: `,`px;
      height: `,`px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: transparent;
      border-radius: `,`px;
      transition: all `,`;
      cursor: pointer;
      .btn-inner {
        transition: all `,`;
      }
      &:hover {
        background: `,`;
      }
      img {
        width: `,`;
        height: `,`;
      }
      .anticon {
        font-size: `,`;
      }
    `])),i,l,C,C,g,v,v,x,Ce,Ce,Ce),innerDiv:o(pt||(pt=m()([`
      position: relative;
      width: `,`;
      height: `,`;
    `])),Ce,Ce),labelStyle:o(mt||(mt=m()([`
      position: absolute;
      font-size: `,`;
      line-height: 1;
      border: 1px solid `,`;
      color: `,`;
    `])),Ce,i,i),label1Style:o(ht||(ht=m()([`
      left: -5%;
      top: 0;
      z-index: 1;
      background-color: `,`;
      color: `,`;
      transform: scale(0.7);
      transform-origin: 0 0;
    `])),i,u),label2Style:o(gt||(gt=m()([`
      right: -5%;
      bottom: 0;
      z-index: 0;
      transform: scale(0.5);
      transform-origin: 100% 100%;
    `])))}}),ko=function(e){var o=e.label1,i=e.label2,l=e.tooltip1,u=e.tooltip2,x=e.value,g=e.pure,C=e.onClick,v=So(),E=v.styles,N=E.btn,T=E.innerDiv,M=E.labelStyle,R=E.label1Style,Z=E.label2Style,Y=(0,n.jsx)("button",{onClick:C,className:N,"aria-label":e["aria-label"],children:(0,n.jsxs)("div",{className:"btn-inner",children:[g&&(x===1?o:i),!g&&(0,n.jsxs)("div",{className:T,children:[(0,n.jsx)("span",{className:b()(M,x===1?R:Z),children:o}),(0,n.jsx)("span",{className:b()(M,x===1?Z:R),children:i})]})]})},"lang-button");return l||u?(0,n.jsx)(dt.Z,{title:x===1?l:u,children:Y}):Y},Ke=ko,ft,xt,vt,bt,yt,wt,jt=1120,Ct=1200,zo={cn:{message:"\u8BED\u96C0\u516C\u76CA\u8BA1\u5212\uFF1A\u5927\u5B66\u751F\u8BA4\u8BC1\u6559\u80B2\u90AE\u7BB1\uFF0C\u5373\u53EF\u514D\u8D39\u83B7\u5F97\u8BED\u96C0\u4F1A\u5458\u3002\u8BED\u96C0\uFF0C\u652F\u4ED8\u5B9D\u5320\u5FC3\u6253\u9020\u7684\u5728\u7EBF\u6587\u6863\u5E73\u53F0\u3002",shortMessage:"\u652F\u4ED8\u5B9D\u8BED\u96C0 \xB7 \u5927\u5B66\u751F\u516C\u76CA\u8BA1\u5212\u706B\u70ED\u8FDB\u884C\u4E2D\uFF01",more:"\u4E86\u89E3\u66F4\u591A"}},Eo=(0,A.kc)(function(a){var e=a.token,o=a.css,i="#ced4d9";return{header:o(ft||(ft=m()([`
      position: sticky;
      top: 0;
      z-index: 1000;
      max-width: 100%;
      background: `,`;
      box-shadow: `,`;
      backdrop-filter: blur(8px);

      @media only screen and (max-width: `,`px) {
        text-align: center;
      }

      .nav-search-wrapper {
        display: flex;
        flex: auto;
      }

      .dumi-default-search-bar {
        border-inline-start: 1px solid rgba(0, 0, 0, 0.06);

        > svg {
          width: 14px;
          fill: `,`;
        }

        > input {
          height: 22px;
          border: 0;

          &:focus {
            box-shadow: none;
          }

          &::placeholder {
            color: `,`;
          }
        }

        .dumi-default-search-shortcut {
          color: `,`;
          background-color: rgba(150, 150, 150, 0.06);
          border-color: rgba(100, 100, 100, 0.2);
          border-radius: 4px;
        }

        .dumi-default-search-popover {
          inset-inline-start: 11px;
          inset-inline-end: unset;

          &::before {
            inset-inline-start: 100px;
            inset-inline-end: unset;
          }
        }
      }
    `])),e.colorBgContainer,e.boxShadowTertiary,e.mobileMaxWidth,i,i,i),menuRow:o(xt||(xt=m()([`
      display: flex;
      align-items: center;
      margin: 0;

      > * {
        flex: none;
        margin: 0;
        margin-inline-end: 12px;

        &:last-child {
          margin-inline-end: 40px;
        }
      }
    `]))),dataDirectionIcon:o(vt||(vt=m()([`
      width: 16px;
    `]))),popoverMenu:xe()({width:300},"".concat(e.antCls,"-popover-inner-content"),{padding:0}),banner:o(bt||(bt=m()([`
      width: 100%;
      background: #daf5eb;
      text-align: center;
      word-break: keep-all;
    `]))),link:o(yt||(yt=m()([`
      margin-left: 10px;

      @media only screen and (max-width: `,`px) {
        margin-left: 0;
      }
    `])),e.mobileMaxWidth),icon:o(wt||(wt=m()([`
      margin-right: 10px;
      width: 22px;
      height: 22px;
    `])))}}),Lo=function(){var e=(0,j.Z)(zo),o=w()(e,2),i=o[0],l=o[1],u=(0,d.WF)(),x=u.pkg,g=(0,_.Is)(),C=(0,s.useState)({menuVisible:!1,windowWidth:1400,searching:!1}),v=w()(C,2),E=v[0],N=v[1],T=(0,s.useContext)(Gn.Z),M=T.direction,R=T.isMobile,Z=T.bannerVisible,Y=T.updateSiteConfig,W=(0,s.useRef)(null),L=(0,d.TH)(),k=L.pathname,q=L.search,En=Eo(),ln=En.styles,Ln=(0,s.useCallback)(function(){N(function(pn){return F()(F()({},pn),{},{menuVisible:!1})})},[]),Nn=(0,s.useCallback)(function(){N(function(pn){return F()(F()({},pn),{},{windowWidth:window.innerWidth})})},[]),Fn=(0,s.useCallback)(function(){N(function(pn){return F()(F()({},pn),{},{menuVisible:!0})})},[]),B=(0,s.useCallback)(function(pn){N(function(Wn){return F()(F()({},Wn),{},{menuVisible:pn})})},[]),un=function(){Y({direction:M!=="rtl"?"rtl":"ltr"})},Tn=function(){Y({bannerVisible:!1}),_.Fy()&&localStorage.setItem(Ne.ANT_DESIGN_NOT_SHOW_BANNER,sn()().toISOString())};(0,s.useEffect)(function(){Ln()},[L]),(0,s.useEffect)(function(){return Nn(),window.addEventListener("resize",Nn),function(){window.removeEventListener("resize",Nn),W.current&&clearTimeout(W.current)}},[]);var Yn=(0,s.useCallback)(function(pn){var Wn=window.location.href,Oe=window.location.pathname;if(/overview/.test(Oe)&&/0?[1-39][0-3]?x/.test(pn)){window.location.href=Wn.replace(window.location.origin,pn).replace(/\/components\/overview/,"/docs".concat(/0(9|10)x/.test(pn)?"":"/react","/introduce")).replace(/\/$/,"");return}var qe=new URL(Wn.replace(window.location.origin,pn));qe.host.includes("antgroup")&&(window.location.href="".concat(qe.href.replace(/\/$/,""),"/")),window.location.href=qe.href.replace(/\/$/,"")},[]),Pn=(0,s.useCallback)(function(){var pn="".concat(window.location.protocol,"//"),Wn=window.location.href.slice(pn.length);_.Fy()&&localStorage.setItem("locale",_.KE(k)?"en-US":"zh-CN"),window.location.href=pn+Wn.replace(window.location.pathname,_.J1(k,!_.KE(k),q).pathname)},[L]),Je=(0,s.useMemo)(function(){return M!=="rtl"?"RTL":"LTR"},[M]),K=(0,s.useMemo)(function(){return M==="rtl"?{direction:"ltr",textAlign:"right"}:{}},[M]),J=E.menuVisible,fn=E.windowWidth,Se=E.searching,uo=F()(xe()({},x.version,x.version),g==null?void 0:g.docVersions),Tr=Object.keys(uo).map(function(pn){return{value:uo[pn],label:pn}}),po=["","index","index-cn"].includes(k),mo=l==="cn",Pr=M==="rtl",Qe=null;fn<jt?Qe="crowded":fn<Ct&&(Qe="narrow");var Br=b()(ln.header,"clearfix",{"home-header":po}),_e={isZhCN:mo,isRTL:Pr},ho=(0,n.jsx)(Co,F()(F()({},_e),{},{responsive:Qe,isMobile:R,directionText:Je,onLangChange:Pn,onDirectionChange:un}),"nav"),Pe=[ho,(0,n.jsx)(Fe.Z,{className:"version",size:"small",defaultValue:x.version,onChange:Yn,dropdownStyle:K,popupMatchSelectWidth:!1,getPopupContainer:function(Wn){return Wn.parentNode},options:Tr},"version"),(0,n.jsx)(bo,F()({},_e),"more"),(0,n.jsx)(Ke,{onClick:Pn,value:_.KE(k)?1:2,label1:"\u4E2D",label2:"En",tooltip1:"\u4E2D\u6587 / English",tooltip2:"English / \u4E2D\u6587"},"lang"),(0,n.jsx)(Ke,{onClick:un,value:M==="rtl"?2:1,label1:(0,n.jsx)(Rn,{className:ln.dataDirectionIcon,direction:"ltr"}),tooltip1:"LTR",label2:(0,n.jsx)(Rn,{className:ln.dataDirectionIcon,direction:"rtl"}),tooltip2:"RTL",pure:!0,"aria-label":"RTL Switch Button"},"direction"),(0,n.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noreferrer",children:(0,n.jsx)(Ke,{value:1,label1:(0,n.jsx)(oe.Z,{}),tooltip1:"Github",label2:null,pure:!0})},"github")];fn<jt?Pe=Se?[]:[ho]:fn<Ct&&(Pe=Se?[]:Pe);var go=po?[{flex:"none"},{flex:"auto"}]:[{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24},{xxl:20,xl:19,lg:18,md:18,sm:0,xs:0}];return(0,n.jsxs)("header",{className:Br,children:[R&&(0,n.jsx)(We.Z,{overlayClassName:ln.popoverMenu,placement:"bottomRight",content:Pe,trigger:"click",open:J,arrow:{arrowPointAtCenter:!0},onOpenChange:B,children:(0,n.jsx)(Le.Z,{className:"nav-phone-icon",onClick:Fn})}),mo&&Z&&(0,n.jsx)($e.Z,{className:ln.banner,message:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("img",{className:ln.icon,src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",alt:"yuque"}),R?i.shortMessage:i.message,(0,n.jsx)("a",{className:ln.link,href:"https://www.yuque.com/yuque/blog/welfare-edu?source=antd",target:"_blank",rel:"noreferrer",onClick:function(){var Wn,Oe;(Wn=(Oe=window).gtag)===null||Wn===void 0||Wn.call(Oe,"event","\u70B9\u51FB",{event_category:"top_banner",event_label:"https://www.yuque.com/yuque/blog/welfare-edu?source=antd"})},children:i.more})]}),type:"info",banner:!0,closable:!0,showIcon:!1,onClose:Tn}),(0,n.jsxs)(Ue.Z,{style:{flexFlow:"nowrap",height:64},children:[(0,n.jsx)(ve.Z,F()(F()({},go[0]),{},{children:(0,n.jsx)(Ae,F()(F()({},_e),{},{location:L}))})),(0,n.jsxs)(ve.Z,F()(F()({},go[1]),{},{className:ln.menuRow,children:[(0,n.jsx)("div",{className:"nav-search-wrapper",children:(0,n.jsx)(Re.ZP,{})}),!R&&Pe]}))]})]})},No=Lo,Mr=t(945462),To=t(377376),De=t(185209),Po=function(){var e=(0,d.eL)(),o=(0,s.useMemo)(function(){var x;if(!e.frontmatter.subtitle&&!e.frontmatter.title)x="404 Not Found - Ant Design";else{var g;x="".concat(e.frontmatter.subtitle||""," ").concat(((g=e.frontmatter)===null||g===void 0?void 0:g.title)||""," - Ant Design")}var C=e.frontmatter.description||"";return[x,C]},[e]),i=w()(o,2),l=i[0],u=i[1];return(0,n.jsxs)(d.ql,{children:[(0,n.jsx)("title",{children:l}),(0,n.jsx)("meta",{property:"og:title",content:l}),u&&(0,n.jsx)("meta",{name:"description",content:u})]})},St=Po,kt=t(148050),Bo=t(823493),Mo=t.n(Bo),Ao=t(468990),Do=t(658192),zt,Et,Lt,Nt=["scroll","resize"],Io=(0,A.kc)(function(a){var e=a.token,o=a.css,i=e.boxShadowSecondary,l=e.antCls;return{affixTabs:o(zt||(zt=m()([`
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 11;
      padding: 0 40px;
      background: #fff;
      box-shadow: `,`;
      transform: translate3d(0, -100%, 0);
      opacity: 0;
      transition: opacity 0.3s, transform 0.3s;

      `,`-tabs {
        max-width: 1208px;
        margin: 0 auto;

        `,`-tabs-nav {
          margin: 0;

          &::before {
            border-bottom-color: transparent;
          }

          `,`-tabs-tab {
            padding: 21px 0;
          }
        }
      }
    `])),i,l,l,l),affixTabsFixed:o(Et||(Et=m()([`
      transform: translate3d(0, 0, 0);
      opacity: 1;
    `]))),span:o(Lt||(Lt=m()([`
      text-transform: capitalize;
    `])))}}),Tt=32,Oo=function(){var e=s.useRef(null),o=s.useRef([]),i=s.useState(!1),l=w()(i,2),u=l[0],x=l[1],g=s.useState(null),C=w()(g,2),v=C[0],E=C[1],N=Io(),T=N.styles,M=T.affixTabs,R=T.affixTabsFixed,Z=T.span;function Y(L){var k=document.getElementById(L);if(k){var q=k.offsetTop-e.current.offsetHeight-Tt;(0,Do.Z)(q)}}s.useEffect(function(){o.current=Array.from(document.querySelectorAll("h2[id]")).map(function(L){var k=L.id;return k}),x(!0)},[]),s.useEffect(function(){var L=decodeURIComponent((location.hash||"").slice(1));L&&Y(L)},[u]);var W=s.useMemo(function(){function L(){for(var k=window,q=k.scrollY,En=e.current.offsetHeight,ln=o.current.length-1;ln>=0;ln-=1){var Ln=o.current[ln],Nn=document.getElementById(Ln),Fn=Nn.offsetTop-En-Tt;if(Fn<=q){E(Ln);return}}E(null)}return Mo()(L)},[]);return s.useEffect(function(){return Nt.forEach(function(L){return window.addEventListener(L,W)}),W(),function(){Nt.forEach(function(L){return window.removeEventListener(L,W)})}},[]),(0,n.jsx)("div",{className:b()(M,v&&R),ref:e,children:(0,n.jsx)(Ao.Z,{activeKey:v,onChange:Y,items:o.current.map(function(L){return{key:L,label:(0,n.jsx)("span",{className:Z,children:L.replace(/-/g," ")})}})})})},Ho=Oo,Pt,Bt,Mt,At=40,Ie=1208,Ge=24,Zo=(0,A.kc)(function(a){var e=a.token,o=a.css,i=e.antCls;return{resourcePage:o(Pt||(Pt=m()([`
      footer {
        margin-top: 176px;

        .rc-footer-container {
          max-width: `,`px;
          margin: 0 auto;
          padding-right: 0;
          padding-left: 0;
        }
      }
    `])),Ie),resourceContent:o(Bt||(Bt=m()([`
      padding: 0 `,`px;
      max-width: `,`px;
      margin: 0 auto;
      box-sizing: content-box;
      min-height: 100vh;

      > .markdown {
        > p {
          margin-bottom: 56px;
        }

        h2 {
          margin-top: 124px;
          color: #314659;
          font-weight: lighter;
          font-size: 30px;
          line-height: 38px;

          &:first-child {
            margin-top: 88px;
          }
        }

        h3 {
          margin-top: 56px;
          font-weight: 400;
          font-size: 24px;
          line-height: 32px;
        }

        p {
          color: #697b8c;
        }
      }

      @media only screen and (max-width: 767.99px) {
        & {
          article {
            padding: 0 `,`px;
          }

          `,`-col {
            padding-top: 16px !important;
            padding-bottom: 16px !important;
          }
        }
      }
    `])),At,Ie,Ge,i),banner:o(Mt||(Mt=m()([`
      padding: 0 `,`px;
      overflow: hidden;
      background: url('https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*y_r7RogIG1wAAAAAAAAAAABkARQnAQ');
      background-size: cover;

      h1 {
        box-sizing: content-box;
        max-width: `,`px;
        margin: 56px auto 16px;
      }

      section {
        max-width: `,`px;
        margin: 0 auto 56px;
        font-weight: 200;
        font-size: 16px;
        line-height: 24px;
      }

      @media only screen and (max-width: 767.99px) {
        & {
          margin: 0 -`,`px;
          padding: 0 `,`px;
        }
      }
    `])),At,Ie,Ie,Ge,Ge)}}),Ro=function(e){var o,i=e.children,l=Zo(),u=l.styles,x=(0,d.eL)();return(0,n.jsx)(tn.ZP,{theme:{token:{colorBgLayout:"#fff"}},children:(0,n.jsxs)(To.Z,{children:[(0,n.jsx)(St,{}),(0,n.jsxs)("div",{id:"resources-page",className:u.resourcePage,children:[(0,n.jsx)(Ho,{}),(0,n.jsxs)("div",{className:u.banner,children:[(0,n.jsxs)(De.Z.Title,{style:{fontSize:30},children:[(o=x.frontmatter)===null||o===void 0?void 0:o.title,(0,n.jsx)(kt.Z,{title:(0,n.jsx)(d._H,{id:"app.content.edit-page"}),filename:x.frontmatter.filename})]}),(0,n.jsx)("section",{children:x.frontmatter.description})]}),(0,n.jsx)("div",{className:u.resourceContent,children:i}),(0,n.jsx)(ze,{})]})]})})},Fo=Ro,Wo=t(720841),$o=t(538294),Dt=t(575054),It=t(796586),Uo=t(605071),Ve=t(209269),Xo=t(217187),Te=t(618073),Ot=t(206171),Ko=t(844183),Go=t(566254),Vo=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=(0,d.yh)(),i=(0,vn.Z)(),l=i.pathname,u=i.search,x=(0,d.tx)(),g=e.before,C=e.after,v=(0,s.useMemo)(function(){var E,N=pe()(x!=null?x:[]);if(l.startsWith("/docs/spec")){var T=N.splice(0,1);N.push.apply(N,pe()(T))}if(l.startsWith("/docs/react")){var M,R=(M=Object.entries(o).find(function(L){var k=w()(L,1),q=k[0];return q.startsWith("/changelog")}))===null||M===void 0?void 0:M[1];R&&N.splice(1,0,R[0])}if(l.startsWith("/changelog")){var Z,Y=(Z=Object.entries(o).find(function(L){var k=w()(L,1),q=k[0];return q.startsWith("/docs/react")}))===null||Z===void 0?void 0:Z[1];Y&&(N.unshift(Y[0]),N.push.apply(N,pe()(Y.slice(1))))}var W=function(k){var q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return k&&q&&(0,n.jsx)(Ko.Z,{color:k==="New"?"success":"processing",bordered:!1,style:{marginInlineStart:"auto",marginInlineEnd:0,marginTop:-2},children:k.replace("VERSION",Go.Z)})};return(E=N==null?void 0:N.reduce(function(L,k){if(k!=null&&k.title)if(l.startsWith("/docs/spec")){var q,En,ln=k.children.reduce(function(B,un){var Tn,Yn,Pn=(Tn=(Yn=un.frontmatter)===null||Yn===void 0?void 0:Yn.type)!==null&&Tn!==void 0?Tn:"default";return B[Pn]||(B[Pn]=[]),B[Pn].push(un),B},{}),Ln=[];Ln.push.apply(Ln,pe()((q=(En=ln.default)===null||En===void 0?void 0:En.map(function(B){return{label:(0,n.jsxs)(qn.Z,{to:"".concat(B.link).concat(u),children:[g,B==null?void 0:B.title,C]}),key:B.link.replace(/(-cn$)/g,"")}}))!==null&&q!==void 0?q:[])),Object.entries(ln).forEach(function(B){var un=w()(B,2),Tn=un[0],Yn=un[1];Tn!=="default"&&Ln.push({type:"group",label:Tn,key:Tn,children:Yn==null?void 0:Yn.map(function(Pn){return{label:(0,n.jsxs)(qn.Z,{to:"".concat(Pn.link).concat(u),children:[g,Pn==null?void 0:Pn.title,C]}),key:Pn.link.replace(/(-cn$)/g,"")}})})}),L.push({label:k==null?void 0:k.title,key:k==null?void 0:k.title,children:Ln})}else{var Nn;L.push({type:"group",label:k==null?void 0:k.title,key:k==null?void 0:k.title,children:(Nn=k.children)===null||Nn===void 0?void 0:Nn.map(function(B){var un,Tn;return{label:(0,n.jsxs)(qn.Z,{to:"".concat(B.link).concat(u),style:{display:"flex",alignItems:"center"},children:[g,(0,n.jsx)("span",{children:B==null?void 0:B.title},"english"),(0,n.jsx)("span",{className:"chinese",children:(un=B.frontmatter)===null||un===void 0?void 0:un.subtitle},"chinese"),W((Tn=B.frontmatter)===null||Tn===void 0?void 0:Tn.tag,!g&&!C),C]}),key:B.link.replace(/(-cn$)/g,"")}})})}else{var Fn=k.children||[];Fn.every(function(B){var un;return B==null||(un=B.frontmatter)===null||un===void 0?void 0:un.date})&&Fn.sort(function(B,un){return B.frontmatter.date>un.frontmatter.date?-1:1}),L.push.apply(L,pe()(Fn.map(function(B){return{label:(0,n.jsxs)(qn.Z,{to:"".concat(B.link).concat(u),style:{display:"flex",alignItems:"center"},children:[g,B==null?void 0:B.title,W(B.frontmatter.tag,!g&&!C),C]}),key:B.link.replace(/(-cn$)/g,"")}})))}return L},[]))!==null&&E!==void 0?E:[]},[x,o,l,u,e]);return[v,l]},Ht=Vo,Zt,Rt,Ft,Wt,Yo=(0,A.kc)(function(a){var e=a.token,o=a.css,i=e.colorSplit,l=e.iconCls,u=e.fontSizeIcon;return{prevNextNav:o(Zt||(Zt=m()([`
      width: calc(100% - 234px);
      margin-inline-end: 170px;
      margin-inline-start: 64px;
      overflow: hidden;
      font-size: 14px;
      border-top: 1px solid `,`;
      display: flex;
    `])),i),pageNav:o(Rt||(Rt=m()([`
      flex: 1;
      height: 72px;
      line-height: 72px;
      text-decoration: none;

      `,` {
        color: #999;
        font-size: `,`px;
        transition: all 0.3s;
      }

      .chinese {
        margin-inline-start: 4px;
      }
    `])),l,u),prevNav:o(Ft||(Ft=m()([`
      text-align: start;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .footer-nav-icon-after {
        display: none;
      }

      .footer-nav-icon-before {
        position: relative;
        line-height: 0;
        vertical-align: middle;
        transition: inset-inline-end 0.3s;
        margin-inline-end: 1em;
        inset-inline-end: 0;
      }

      &:hover .footer-nav-icon-before {
        inset-inline-end: 0.2em;
      }
    `]))),nextNav:o(Wt||(Wt=m()([`
      text-align: end;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .footer-nav-icon-before {
        display: none;
      }

      .footer-nav-icon-after {
        position: relative;
        margin-bottom: 1px;
        line-height: 0;
        vertical-align: middle;
        transition: inset-inline-start 0.3s;
        margin-inline-start: 1em;
        inset-inline-start: 0;
      }

      &:hover .footer-nav-icon-after {
        inset-inline-start: 0.2em;
      }
    `])))}}),Jo=function a(e){return Array.isArray(e)?e.reduce(function(o,i){if(!i)return o;if("children"in i&&i.children){var l;return o.concat((l=a(i.children))!==null&&l!==void 0?l:[])}return o.concat(i)},[]):null},Qo=function(e){var o=e.rtl,i=Yo(),l=i.styles,u={className:"footer-nav-icon-before"},x={className:"footer-nav-icon-after"},g=o?(0,n.jsx)(Te.Z,F()({},u)):(0,n.jsx)(Ot.Z,F()({},u)),C=o?(0,n.jsx)(Ot.Z,F()({},x)):(0,n.jsx)(Te.Z,F()({},x)),v=Ht({before:g,after:C}),E=w()(v,2),N=E[0],T=E[1],M=(0,s.useContext)(Gn.Z),R=M.isMobile,Z=(0,s.useMemo)(function(){var k=Jo(N);if(!k)return[null,null];var q=-1;return k.forEach(function(En,ln){En&&En.key===T&&(q=ln)}),[k[q-1],k[q+1]]},[N,T]),Y=w()(Z,2),W=Y[0],L=Y[1];return R?null:(0,n.jsxs)("section",{className:l.prevNextNav,children:[W&&s.cloneElement(W.label,{className:b()(l.pageNav,l.prevNav,W.className)}),L&&s.cloneElement(L.label,{className:b()(l.pageNav,l.nextNav,L.className)})]})},_o=Qo,qo=t(302281),nr=t(15060),er=t(889812),$t,Ut,Xt,tr=(0,A.kc)(function(a){var e=a.token,o=a.css;return{history:o($t||($t=m()([`
    position: absolute;
    top: 0;
    inset-inline-end: 0;
  `]))),li:o(Ut||(Ut=m()([`
    // white-space: pre;
  `]))),ref:o(Xt||(Xt=m()([`
    margin-left: `,`px;
  `])),e.marginXS)}}),or={cn:{full:"\u5B8C\u6574\u66F4\u65B0\u65E5\u5FD7",changelog:"\u66F4\u65B0\u65E5\u5FD7",loading:"\u52A0\u8F7D\u4E2D...",empty:"\u6682\u65E0\u66F4\u65B0"},en:{full:"Full Changelog",changelog:"Changelog",loading:"loading...",empty:"Nothing update"}};function rr(a){var e=a.changelog,o=e===void 0?"":e,i=a.refs,l=i===void 0?[]:i,u=a.styles,x=s.useMemo(function(){for(var g=[],C=!1,v="",E=0;E<o.length;E+=1){var N=o[E];if(N!=="`")v+=N;else{var T=v;C&&(T=(0,n.jsx)("code",{children:T})),g.push(T),v="",C=!C}}return g.push(v),g},[o]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{children:x}),l==null?void 0:l.map(function(g){var C;return(0,n.jsxs)("a",{className:u.ref,href:g,target:"_blank",rel:"noreferrer",children:["#",(C=g.match(/^.*\/(\d+)$/))===null||C===void 0?void 0:C[1]]},g)})]})}function ar(a,e){var o=(0,er.Z)(e==="cn"?{key:"component-changelog-cn",request:function(){return t.e(2104).then(t.t.bind(t,332104,19))}}:{key:"component-changelog-en",request:function(){return t.e(5212).then(t.t.bind(t,365212,19))}});return(0,s.useMemo)(function(){var i=a.replace(/-/g,""),l=Object.keys(o).find(function(u){return u.toLowerCase()===i.toLowerCase()});return o[l]},[o,a])}function ir(a){var e,o=a.pathname,i=o===void 0?"":o,l=(0,j.Z)(or),u=w()(l,2),x=u[0],g=u[1],C=s.useState(!1),v=w()(C,2),E=v[0],N=v[1],T=tr(),M=T.styles,R=((e=i.match(/\/components\/([^/]+)/))===null||e===void 0?void 0:e[1])||"",Z=ar(R,g),Y=s.useMemo(function(){var W={};return Z==null||Z.forEach(function(L){W[L.version]=W[L.version]||[],W[L.version].push(L)}),Object.keys(W).map(function(L){var k=W[L];return{children:(0,n.jsxs)(De.Z,{children:[(0,n.jsx)("h4",{children:L}),(0,n.jsx)("ul",{children:k.map(function(q,En){return(0,n.jsx)("li",{className:M.li,children:(0,n.jsx)(rr,F()(F()({},q),{},{styles:M}))},En)})})]})}})},[Z]);return!Z||!Z.length?null:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ue.ZP,{className:M.history,icon:(0,n.jsx)(V.Z,{}),onClick:function(){N(!0)},children:x.changelog}),(0,n.jsx)(qo.Z,{title:x.changelog,extra:(0,n.jsx)(qn.Z,{style:{fontSize:14},to:"/changelog".concat(g==="cn"?"-cn":""),children:x.full}),open:E,width:"40vw",onClose:function(){N(!1)},destroyOnClose:!0,children:(0,n.jsx)(nr.Z,{items:Y})})]})}var lr=function(a){return(0,n.jsx)(s.Suspense,{fallback:null,children:(0,n.jsx)(ir,F()({},a))})},sr=t(524229),Kt=t(211646),cr=t(294047),Gt=t(315816),dr=function(e){var o=e.className,i=e.style;return(0,n.jsx)("svg",{className:o,style:i,xmlns:"http://www.w3.org/2000/svg",width:"36",height:"28",viewBox:"0 0 36 28",fill:"none",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.5875 6.77268L21.8232 3.40505L17.5875 0.00748237L17.5837 0L13.3555 3.39757L17.5837 6.76894L17.5875 6.77268ZM17.5863 17.3955H17.59L28.5161 8.77432L25.5526 6.39453L17.59 12.6808H17.5863L17.5825 12.6845L9.61993 6.40201L6.66016 8.78181L17.5825 17.3992L17.5863 17.3955ZM17.5828 23.2891L17.5865 23.2854L32.2133 11.7456L35.1768 14.1254L28.5238 19.3752L17.5865 28L0.284376 14.3574L0 14.1291L2.95977 11.7531L17.5828 23.2891Z",fill:"currentColor"})})},Vt=dr,Yt,Jt,Qt,_t,qt,no,eo,Ye="https://picx.zhimg.com/v2-3b2bca09c2771e7a82a81562e806be4d.jpg?source=d16d100b",ur=(0,A.kc)(function(a){var e=a.token,o=a.css;return{card:o(Yt||(Yt=m()([`
      width: 100%;
      margin: 40px 0;
      transition: all 0.2s;
      background-color: `,`;
    `])),e.colorFillQuaternary),bigTitle:o(Jt||(Jt=m()([`
      font-size: 16px;
      color: #121212;
      margin-bottom: 24px;
      font-weight: 600;
    `]))),cardBody:o(Qt||(Qt=m()([`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `]))),left:o(_t||(_t=m()([`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      img {
        width: 200px;
        margin-right: 24px;
        overflow: hidden;
        border-radius: 8px;
      }
    `]))),title:o(qt||(qt=m()([`
      color: #444;
      font-size: 16px;
      font-weight: 600;
    `]))),subTitle:o(no||(no=m()([`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #646464;
      font-size: 14px;
      font-weight: 400;
      margin-top: 8px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      .logo {
        width: 24px;
        height: 24px;
        font-size: 24px;
        &.zhihu-logo {
          color: #056de8;
        }
        &.yuque-logo {
          color: #00b96b;
        }
        &.juejin-logo {
          color: #1e80ff;
        }
      }
      .arrowIcon {
        margin: 0 8px;
        color: #8a8f8d;
        font-size: 12px;
      }
      .zl-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        color: #646464;
      }
    `]))),btn:o(eo||(eo=m()([`
      display: flex;
      justify-content: center;
      align-items: center;
    `])))}}),pr={cn:{bigTitle:"\u6587\u7AE0\u88AB\u4EE5\u4E0B\u4E13\u680F\u6536\u5F55\uFF1A",zhiHu:"\u4E00\u4E2A UI \u8BBE\u8BA1\u4F53\u7CFB",yuQue:"Ant Design \u5B98\u65B9\u4E13\u680F",junjin:"Ant Design \u5F00\u6E90\u4E13\u680F",buttonText:"\u6211\u6709\u60F3\u6CD5\uFF0C\u53BB\u53C2\u4E0E\u8BA8\u8BBA"},en:{bigTitle:"Articles are included in the column:",zhiHu:"A UI design system",yuQue:"Ant Design official column",junjin:"Ant Design Open Source Column",buttonText:"Go to discuss"}},mr=function(e){var o=e.zhihuLink,i=e.yuqueLink,l=e.juejinLink,u=(0,j.Z)(pr),x=w()(u,1),g=x[0],C=ur(),v=C.styles,E=v.card,N=v.bigTitle,T=v.cardBody,M=v.left,R=v.title,Z=v.subTitle,Y=v.btn;return!o&&!i&&!l?null:(0,n.jsxs)(cr.Z,{className:E,bordered:!1,children:[(0,n.jsx)("h3",{className:N,children:g.bigTitle}),o&&(0,n.jsxs)("div",{className:T,children:[(0,n.jsxs)("div",{className:M,children:[(0,n.jsx)("img",{src:Ye,alt:"antd"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:R,children:"Ant Design"}),(0,n.jsxs)("div",{className:Z,children:[(0,n.jsx)(kn.Z,{className:"logo zhihu-logo"}),(0,n.jsx)(Te.Z,{className:"arrowIcon"}),(0,n.jsx)(ue.ZP,{target:"_blank",href:"https://www.zhihu.com/column/c_1564262000561106944",className:"zl-btn",type:"link",children:g.zhiHu})]})]})]}),(0,n.jsx)(ue.ZP,{type:"primary",className:Y,icon:(0,n.jsx)(kn.Z,{style:{fontSize:16}}),ghost:!0,target:"_blank",href:o,children:g.buttonText})]}),i&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Gt.Z,{}),(0,n.jsxs)("div",{className:T,children:[(0,n.jsxs)("div",{className:M,children:[(0,n.jsx)("img",{src:Ye,alt:"antd"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:R,children:"Ant Design"}),(0,n.jsxs)("div",{className:Z,children:[(0,n.jsx)(Kt.Z,{className:"logo yuque-logo"}),(0,n.jsx)(Te.Z,{className:"arrowIcon"}),(0,n.jsx)(ue.ZP,{target:"_blank",href:"https://www.yuque.com/ant-design/ant-design",className:"zl-btn",type:"link",children:g.yuQue})]})]})]}),(0,n.jsx)(ue.ZP,{type:"primary",className:Y,icon:(0,n.jsx)(Kt.Z,{style:{fontSize:16}}),ghost:!0,target:"_blank",href:i,children:g.buttonText})]})]}),l&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Gt.Z,{}),(0,n.jsxs)("div",{className:T,children:[(0,n.jsxs)("div",{className:M,children:[(0,n.jsx)("img",{src:Ye,alt:"antd"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:R,children:"Ant Design"}),(0,n.jsxs)("div",{className:Z,children:[(0,n.jsx)(Vt,{className:"logo juejin-logo"}),(0,n.jsx)(Te.Z,{className:"arrowIcon"}),(0,n.jsx)(ue.ZP,{target:"_blank",href:"https://juejin.cn/column/7247354308258054200",className:"zl-btn",type:"link",children:g.junjin})]})]})]}),(0,n.jsx)(ue.ZP,{type:"primary",className:Y,icon:(0,n.jsx)(Vt,{style:{fontSize:16,width:16,height:16}}),ghost:!0,target:"_blank",href:l,children:g.buttonText})]})]})]})},hr=mr,to,oo,ro,ao,io,gr=(0,A.kc)(function(a){var e=a.token,o=a.css,i=e.antCls;return{contributorsList:o(to||(to=m()([`
      display: flex;
      flex-wrap: wrap;
      margin-top: 120px !important;
      clear: both;

      li {
        height: 24px;
      }

      li,
      `,"-avatar + ",`-avatar {
        transition: all `,`;
        margin-inline-end: -8px;
      }
      &:hover {
        li,
        `,`-avatar {
          margin-inline-end: 0;
        }
      }
    `])),i,i,e.motionDurationSlow,i),listMobile:o(oo||(oo=m()([`
      margin: 1em 0 !important;
    `]))),toc:o(ro||(ro=m()([`
      `,`-anchor {
        `,`-anchor-link-title {
          font-size: 12px;
        }
      }
    `])),i,i),tocWrapper:o(ao||(ao=m()([`
      position: fixed;
      top: `,`px;
      inset-inline-end: 0;
      width: 160px;
      margin: 0 0 12px 0;
      padding: 8px 0;
      padding-inline: 4px 8px;
      backdrop-filter: blur(8px);
      border-radius: `,`px;
      box-sizing: border-box;
      z-index: 1000;

      .toc-debug {
        color: `,`;

        &:hover {
          color: `,`;
        }
      }

      > div {
        box-sizing: border-box;
        width: 100%;
        max-height: calc(100vh - 40px) !important;
        margin: 0 auto;
        overflow: auto;
        padding-inline: 4px;
      }

      @media only screen and (max-width: `,`px) {
        display: none;
      }
    `])),e.headerHeight+e.contentMarginTop,e.borderRadius,e.purple6,e.purple5,e.screenLG),articleWrapper:o(io||(io=m()([`
      padding: 0 170px 32px 64px;

      &.rtl {
        padding: 0 64px 144px 170px;
      }

      @media only screen and (max-width: `,`px) {
        &,
        &.rtl {
          padding: 0 48px;
        }
      }
    `])),e.screenLG)}}),fr=function(e){var o=e.num,i=o===void 0?3:o;return(0,n.jsx)("li",{children:Array.from({length:i}).map(function(l,u){return(0,n.jsx)(Dt.Z.Avatar,{size:"small",active:!0,style:{marginLeft:u===0?0:-8}},u)})})},xr=function(e){var o=e.name,i=e.avatar,l=(0,s.useState)(!0),u=w()(l,2),x=u[0],g=u[1],C=(0,s.useState)(!1),v=w()(C,2),E=v[0],N=v[1];return(0,s.useLayoutEffect)(function(){var T=new Image;T.src=i,T.onload=function(){return g(!1)},T.onerror=function(){return N(!0)}},[]),E?null:x?(0,n.jsx)(Dt.Z.Avatar,{size:"small",active:!0}):(0,n.jsx)(It.C,{size:"small",src:i,alt:o,children:o})},vr=function(e){var o,i,l,u,x,g,C=e.children,v=(0,d.eL)(),E=(0,d.zh)(),N=(0,vn.Z)(),T=N.pathname,M=N.hash,R=(0,d.YB)(),Z=R.formatMessage,Y=gr(),W=Y.styles,L=(0,A.Fg)(),k=(0,s.useContext)(Gn.Z),q=k.direction,En=k.isMobile,ln=(0,Xo.Z)(!1),Ln=w()(ln,2),Nn=Ln[0],Fn=Ln[1],B=(0,s.useMemo)(function(){var K;return((K=v.toc)===null||K===void 0?void 0:K.filter(function(J){return J._debug_demo}).map(function(J){return J.id}))||[]},[v]),un=B.includes(M.slice(1));(0,s.useLayoutEffect)(function(){Fn(un)},[]);var Tn=(0,s.useMemo)(function(){return{showDebug:Nn,setShowDebug:Fn}},[Nn,B]),Yn=(0,s.useMemo)(function(){return((E==null?void 0:E.toc)||v.toc).reduce(function(K,J){if(J.depth===2)K.push(F()({},J));else if(J.depth===3){var fn=K[K.length-1];fn&&(fn.children=fn.children||[],fn.children.push(F()({},J)))}return K},[])},[E==null?void 0:E.toc,v.toc]),Pn=q==="rtl",Je=(0,s.useMemo)(function(){var K=v.frontmatter.author;return K?typeof K=="string"?K.split(",").map(function(J){return{name:J,avatar:"https://github.com/".concat(J,".png")}}):Array.isArray(K)?K:[]:[]},[v.frontmatter.author]);return(0,n.jsx)(sr.Z.Provider,{value:Tn,children:(0,n.jsxs)(ve.Z,{xxl:20,xl:19,lg:18,md:18,sm:24,xs:24,children:[!!v.frontmatter.toc&&(0,n.jsx)("section",{className:W.tocWrapper,children:(0,n.jsx)(Uo.Z,{className:W.toc,affix:!1,targetOffset:L.marginXXL,showInkInFixed:!0,items:Yn.map(function(K){var J;return{href:"#".concat(K.id),title:K.title,key:K.id,children:(J=K.children)===null||J===void 0?void 0:J.filter(function(fn){return Nn||!B.includes(fn.id)}).map(function(fn){return{key:fn.id,href:"#".concat(fn.id),title:(0,n.jsx)("span",{className:b()(B.includes(fn.id)&&"toc-debug"),children:fn==null?void 0:fn.title})}})}})})}),(0,n.jsxs)("article",{className:b()(W.articleWrapper,{rtl:Pn}),children:[(o=v.frontmatter)!==null&&o!==void 0&&o.title?(0,n.jsxs)(De.Z.Title,{style:{fontSize:30,position:"relative"},children:[(0,n.jsxs)(Ve.Z,{size:"small",children:[(i=v.frontmatter)===null||i===void 0?void 0:i.title,(l=v.frontmatter)===null||l===void 0?void 0:l.subtitle,!T.startsWith("/components/overview")&&(0,n.jsx)(kt.Z,{title:(0,n.jsx)(d._H,{id:"app.content.edit-page"}),filename:v.frontmatter.filename})]}),T.startsWith("/components/")&&(0,n.jsx)(lr,{pathname:T})]}):null,v.frontmatter.date||v.frontmatter.author?(0,n.jsx)(De.Z.Paragraph,{children:(0,n.jsxs)(Ve.Z,{children:[v.frontmatter.date&&(0,n.jsxs)("span",{style:{opacity:.65},children:[(0,n.jsx)(Wo.Z,{})," ",sn()(v.frontmatter.date).format("YYYY-MM-DD")]}),Je.map(function(K){return(0,n.jsx)("a",{href:"https://github.com/".concat(K.name),target:"_blank",rel:"noopener noreferrer",children:(0,n.jsxs)(Ve.Z,{size:3,children:[(0,n.jsx)(xr,{name:K.name,avatar:K.avatar}),(0,n.jsxs)("span",{style:{opacity:.65},children:["@",K.name]})]})},K.name)})]})}):null,!v.frontmatter.__autoDescription&&v.frontmatter.description,(0,n.jsx)("div",{style:{minHeight:"calc(100vh - 64px)"},children:C}),(((u=v.frontmatter)===null||u===void 0?void 0:u.zhihu_url)||((x=v.frontmatter)===null||x===void 0?void 0:x.yuque_url)||((g=v.frontmatter)===null||g===void 0?void 0:g.juejin_url))&&(0,n.jsx)(hr,{zhihuLink:v.frontmatter.zhihu_url,yuqueLink:v.frontmatter.yuque_url,juejinLink:v.frontmatter.juejin_url}),v.frontmatter.filename&&(0,n.jsx)($o.Z,{cache:!0,repo:"ant-design",owner:"ant-design",className:b()(W.contributorsList,xe()({},W.listMobile,En)),fileName:v.frontmatter.filename,renderItem:function(J,fn){var Se;return!J||fn?(0,n.jsx)(fr,{}):(Se=J.username)!==null&&Se!==void 0&&Se.includes("github-actions")?null:(0,n.jsx)(dt.Z,{mouseEnterDelay:.3,title:"".concat(Z({id:"app.content.contributors"}),": ").concat(J.username),children:(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://github.com/".concat(J.username),target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(It.C,{size:"small",src:J.url,alt:J.username,children:J.username})})})},J.username)}})]}),(0,n.jsx)(_o,{rtl:Pn}),(0,n.jsx)(ze,{})]})})},br=vr,yr=t(650010),lo,so,wr=(0,A.kc)(function(a){var e=a.token,o=a.css,i=e.antCls,l=e.fontFamily,u=e.colorSplit;return{asideContainer:o(lo||(lo=m()([`
      min-height: 100%;
      padding-bottom: 48px;
      font-family: Avenir, `,`, sans-serif;

      &`,`-menu-inline {
        `,`-menu-submenu-title h4,
        > `,`-menu-item,
        `,`-menu-item a {
          overflow: hidden;
          font-size: 14px;
          text-overflow: ellipsis;
        }

        > `,"-menu-item-group > ",`-menu-item-group-title {
          margin-top: 16px;
          margin-bottom: 16px;
          font-size: 13px;

          &::after {
            position: relative;
            top: 12px;
            display: block;
            width: calc(100% - 20px);
            height: 1px;
            background: `,`;
            content: '';
          }
        }

        > `,`-menu-item,
        > `,`-menu-submenu
        > `,`-menu-submenu-title,
        > `,`-menu-item-group
        > `,`-menu-item-group-title,
        > `,`-menu-item-group
        > `,`-menu-item-group-list
        > `,`-menu-item,
        &`,`-menu-inline
        > `,`-menu-item-group
        > `,`-menu-item-group-list
        > `,`-menu-item {
          padding-left: 40px !important;

          `,`-row-rtl & {
            padding-right: 40px !important;
            padding-left: 16px !important;
          }
        }

        // Nest Category > Type > Article
        &`,`-menu-inline {
          `,`-menu-item-group-title {
            margin-left: 4px;
            padding-left: 60px;

            `,`-row-rtl & {
              padding-right: 60px;
              padding-left: 16px;
            }
          }

          `,"-menu-item-group-list > ",`-menu-item {
            padding-left: 80px !important;

            `,`-row-rtl & {
              padding-right: 80px !important;
              padding-left: 16px !important;
            }
          }
        }

        `,`-menu-item-group:first-child {
          `,`-menu-item-group-title {
            margin-top: 0;
          }
        }
      }

      a[disabled] {
        color: #ccc;
      }

      .chinese {
        margin-left: 6px;
        font-weight: normal;
        font-size: 12px;
        opacity: 0.67;
      }
    `])),l,i,i,i,i,i,i,u,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),mainMenu:o(so||(so=m()([`
      z-index: 1;

      .main-menu-inner {
        position: sticky;
        top: `,`px;
        width: 100%;
        height: 100%;
        max-height: calc(100vh - `,`px);
        overflow: hidden;
      }

      &:hover .main-menu-inner {
        overflow-y: auto;
      }
    `])),e.headerHeight+e.contentMarginTop,e.headerHeight+e.contentMarginTop)}}),jr=function(){var e=(0,d.tx)(),o=(0,s.useContext)(Gn.Z),i=o.isMobile,l=o.theme,u=wr(),x=u.styles,g=Ht(),C=w()(g,2),v=C[0],E=C[1],N=l.includes("dark"),T=(0,A.Fg)(),M=T.colorBgContainer,R=(0,n.jsx)(tn.ZP,{theme:{components:{Menu:{itemBg:M,darkItemBg:M}}},children:(0,n.jsx)(lt.Z,{items:v,inlineIndent:30,className:x.asideContainer,mode:"inline",theme:N?"dark":"light",selectedKeys:[E],defaultOpenKeys:e==null?void 0:e.map(function(Z){var Y=Z.title;return Y}).filter(function(Z){return Z})})});return i?(0,n.jsx)(yr.Z,{children:R},"Mobile-menu"):(0,n.jsx)(ve.Z,{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24,className:x.mainMenu,children:(0,n.jsx)("section",{className:"main-menu-inner",children:R})})},Cr=jr,co,Sr=(0,A.kc)(function(a){var e=a.css,o=a.token;return{main:e(co||(co=m()([`
    display: flex;
    margin-top: `,`px;
  `])),o.contentMarginTop)}}),kr=function(e){var o=e.children,i=Sr(),l=i.styles;return(0,n.jsxs)("main",{className:l.main,children:[(0,n.jsx)(St,{}),(0,n.jsx)(Cr,{}),(0,n.jsx)(br,{children:o})]})},zr=kr,Er={cn:{title:"Ant Design - \u4E00\u5957\u4F01\u4E1A\u7EA7 UI \u8BBE\u8BA1\u8BED\u8A00\u548C React \u7EC4\u4EF6\u5E93",description:"\u57FA\u4E8E Ant Design \u8BBE\u8BA1\u4F53\u7CFB\u7684 React UI \u7EC4\u4EF6\u5E93\uFF0C\u7528\u4E8E\u7814\u53D1\u4F01\u4E1A\u7EA7\u4E2D\u540E\u53F0\u4EA7\u54C1\u3002"},en:{title:"Ant Design - The world's second most popular React UI framework",description:"An enterprise-class UI design language and React UI library with a set of high-quality React components, one of best React UI library for enterprises"}},Lr=function(){var e=(0,d.pC)(),o=(0,vn.Z)(),i=o.pathname,l=o.search,u=(0,j.Z)(Er),x=w()(u,2),g=x[0],C=x[1],v=(0,s.useRef)(null),E=(0,s.useContext)(Gn.Z),N=E.direction;(0,s.useLayoutEffect)(function(){C==="cn"?sn().locale("zh-cn"):sn().locale("en")},[]),(0,s.useEffect)(function(){var M=document.getElementById("nprogress-style");M&&(v.current=setTimeout(function(){var R;(R=M.parentNode)===null||R===void 0||R.removeChild(M)},0))},[]),(0,s.useEffect)(function(){typeof window.ga!="undefined"&&window.ga("send","pageview",i+l)},[o]);var T=(0,s.useMemo)(function(){return["","/"].some(function(M){return M===i})||["/index"].some(function(M){return i.startsWith(M)})?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{style:{minHeight:"100vh"},children:e}),(0,n.jsx)(ze,{})]}):i.startsWith("/docs/resource")?(0,n.jsx)(Fo,{children:e}):i.startsWith("/theme-editor")?e:(0,n.jsx)(zr,{children:e})},[i,e]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(d.ql,{encodeSpecialCharacters:!1,children:[(0,n.jsx)("html",{lang:C==="cn"?"zh-CN":C,"data-direction":N,className:b()({rtl:N==="rtl"})}),(0,n.jsx)("title",{children:g==null?void 0:g.title}),(0,n.jsx)("link",{sizes:"144x144",href:"https://gw.alipayobjects.com/zos/antfincdn/UmVnt3t4T0/antd.png"}),(0,n.jsx)("meta",{name:"description",content:g.description}),(0,n.jsx)("meta",{property:"og:title",content:g==null?void 0:g.title}),(0,n.jsx)("meta",{property:"og:description",content:g.description}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:image",content:"https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png"})]}),(0,n.jsxs)(tn.ZP,{direction:N,locale:C==="cn"?G.Z:void 0,children:[(0,n.jsx)(Q,{}),(0,n.jsx)(No,{}),T]})]})},Nr=Lr},647727:function(ae,yn,t){t.d(yn,{Z:function(){return mn.Z}});var mn=t(332231)},605071:function(ae,yn,t){t.d(yn,{Z:function(){return p}});var mn=t(97857),w=t.n(mn),xn=t(9783),b=t.n(xn),Dn=t(719632),sn=t.n(Dn),jn=t(805574),d=t.n(jn),s=t(667294),G=t(294184),tn=t.n(G),j=t(656790),vn=t(517423),Bn=t(982673),m=t(658192),P=t(252901),A=t(73287),n=s.createContext(void 0),nn=n,zn=t(785893),$n=function(r){var c=r.href,h=r.title,S=r.prefixCls,z=r.children,D=r.className,I=r.target,f=r.replace,$=s.useContext(nn),O=$||{},U=O.registerLink,on=O.unregisterLink,rn=O.scrollTo,an=O.onClick,cn=O.activeLink,H=O.direction;s.useEffect(function(){return U==null||U(c),function(){on==null||on(c)}},[c]);var Cn=function(V){f&&(V.preventDefault(),window.location.replace(c)),an==null||an(V,{title:h,href:c}),rn==null||rn(c)};if(!1)var en;var Q=s.useContext(A.E_),Mn=Q.getPrefixCls,Sn=Mn("anchor",S),dn=cn===c,kn=tn()("".concat(Sn,"-link"),D,b()({},"".concat(Sn,"-link-active"),dn)),An=tn()("".concat(Sn,"-link-title"),b()({},"".concat(Sn,"-link-title-active"),dn));return(0,zn.jsxs)("div",{className:kn,children:[(0,zn.jsx)("a",{className:An,href:c,title:typeof h=="string"?h:"",target:I,onClick:Cn,children:h}),H!=="horizontal"?z:null]})},Un=$n,Hn=t(548073),ne=t(141035),Jn=t(986943),ee=function(r){var c,h,S=r.componentCls,z=r.holderOffsetBlock,D=r.motionDurationSlow,I=r.lineWidthBold,f=r.colorPrimary,$=r.lineType,O=r.colorSplit;return b()({},"".concat(S,"-wrapper"),(h={marginBlockStart:-z,paddingBlockStart:z},b()(h,S,w()(w()({},(0,Hn.Wf)(r)),{},b()({position:"relative",paddingInlineStart:I},"".concat(S,"-link"),(c={paddingBlock:r.linkPaddingBlock,paddingInline:"".concat(r.linkPaddingInlineStart,"px 0"),"&-title":w()(w()({},Hn.vS),{},{position:"relative",display:"block",marginBlockEnd:r.anchorTitleBlock,color:r.colorText,transition:"all ".concat(r.motionDurationSlow),"&:only-child":{marginBlockEnd:0}})},b()(c,"&-active > ".concat(S,"-link-title"),{color:r.colorPrimary}),b()(c,"".concat(S,"-link"),{paddingBlock:r.anchorPaddingBlockSecondary}),c)))),b()(h,"&:not(".concat(S,"-wrapper-horizontal)"),b()({},S,b()({"&::before":{position:"absolute",insetInlineStart:0,top:0,height:"100%",borderInlineStart:"".concat(I,"px ").concat($," ").concat(O),content:'" "'}},"".concat(S,"-ink"),b()({position:"absolute",insetInlineStart:0,display:"none",transform:"translateY(-50%)",transition:"top ".concat(D," ease-in-out"),width:I,backgroundColor:f},"&".concat(S,"-ink-visible"),{display:"inline-block"})))),b()(h,"".concat(S,"-fixed ").concat(S,"-ink ").concat(S,"-ink"),{display:"none"}),h))},Xn=function(r){var c,h=r.componentCls,S=r.motionDurationSlow,z=r.lineWidthBold,D=r.colorPrimary;return b()({},"".concat(h,"-wrapper-horizontal"),b()({position:"relative","&::before":{position:"absolute",left:{_skip_check_:!0,value:0},right:{_skip_check_:!0,value:0},bottom:0,borderBottom:"1px ".concat(r.lineType," ").concat(r.colorSplit),content:'" "'}},h,(c={overflowX:"scroll",position:"relative",display:"flex",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},b()(c,"".concat(h,"-link:first-of-type"),{paddingInline:0}),b()(c,"".concat(h,"-ink"),{position:"absolute",bottom:0,transition:"left ".concat(S," ease-in-out, width ").concat(S," ease-in-out"),height:z,backgroundColor:D}),c)))},Kn=(0,ne.Z)("Anchor",function(y){var r=y.fontSize,c=y.fontSizeLG,h=y.paddingXXS,S=(0,Jn.TS)(y,{holderOffsetBlock:h,anchorPaddingBlockSecondary:h/2,anchorTitleBlock:r/14*3,anchorBallSize:c/2});return[ee(S),Xn(S)]},function(y){return{linkPaddingBlock:y.paddingXXS,linkPaddingInlineStart:y.padding}});function In(){return window}function te(y,r){if(!y.getClientRects().length)return 0;var c=y.getBoundingClientRect();return c.width||c.height?r===window?(r=y.ownerDocument.documentElement,c.top-r.clientTop):c.top-r.getBoundingClientRect().top:c.top}var On=/#([\S ]+)$/,ie=function(r){var c,h,S=r.rootClassName,z=r.anchorPrefixCls,D=r.className,I=r.style,f=r.offsetTop,$=r.affix,O=$===void 0?!0:$,U=r.showInkInFixed,on=U===void 0?!1:U,rn=r.children,an=r.items,cn=r.direction,H=cn===void 0?"vertical":cn,Cn=r.bounds,en=r.targetOffset,Q=r.onClick,Mn=r.onChange,Sn=r.getContainer,dn=r.getCurrentAnchor,kn=r.replace;if(!1)var An;var oe=s.useState([]),V=d()(oe,2),bn=V[0],Zn=V[1],me=s.useState(null),ce=d()(me,2),Qn=ce[0],we=ce[1],he=s.useRef(Qn),Gn=s.useRef(null),de=s.useRef(null),_n=s.useRef(!1),ge=s.useContext(A.E_),Be=ge.direction,je=ge.getTargetContainer,re=ge.anchor,fe=(c=Sn!=null?Sn:je)!==null&&c!==void 0?c:In,ke=JSON.stringify(bn),He=(0,j.zX)(function(X){bn.includes(X)||Zn(function(hn){return[].concat(sn()(hn),[X])})}),ze=(0,j.zX)(function(X){bn.includes(X)&&Zn(function(hn){return hn.filter(function(gn){return gn!==X})})}),Ze=function(){var hn,gn=(hn=Gn.current)===null||hn===void 0?void 0:hn.querySelector(".".concat(z,"-link-title-active"));if(gn&&de.current){var Rn=de.current.style,_=H==="horizontal";Rn.top=_?"":"".concat(gn.offsetTop+gn.clientHeight/2,"px"),Rn.height=_?"":"".concat(gn.clientHeight,"px"),Rn.left=_?"".concat(gn.offsetLeft,"px"):"",Rn.width=_?"".concat(gn.clientWidth,"px"):"",_&&(0,vn.Z)(gn,{scrollMode:"if-needed",block:"nearest"})}},F=function(hn){var gn=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,Rn=arguments.length>2&&arguments[2]!==void 0?arguments[2]:5,_=[],Ne=fe();if(hn.forEach(function(Vn){var ye=On.exec(Vn==null?void 0:Vn.toString());if(ye){var Me=document.getElementById(ye[1]);if(Me){var Ae=te(Me,Ne);Ae<gn+Rn&&_.push({link:Vn,top:Ae})}}}),_.length){var be=_.reduce(function(Vn,ye){return ye.top>Vn.top?ye:Vn});return be.link}return""},Ee=(0,j.zX)(function(X){if(he.current!==X){var hn=typeof dn=="function"?dn(X):X;we(hn),he.current=hn,Mn==null||Mn(X)}}),xe=s.useCallback(function(){if(!_n.current){var X=F(bn,en!==void 0?en:f||0,Cn);Ee(X)}},[ke,en,f]),Le=s.useCallback(function(X){Ee(X);var hn=On.exec(X);if(hn){var gn=document.getElementById(hn[1]);if(gn){var Rn=fe(),_=(0,Bn.Z)(Rn,!0),Ne=te(gn,Rn),be=_+Ne;be-=en!==void 0?en:f||0,_n.current=!0,(0,m.Z)(be,{getContainer:fe,callback:function(){_n.current=!1}})}}},[en,f]),Re=tn()(S,"".concat(z,"-wrapper"),(h={},b()(h,"".concat(z,"-wrapper-horizontal"),H==="horizontal"),b()(h,"".concat(z,"-rtl"),Be==="rtl"),h),D,re==null?void 0:re.className),Fe=tn()(z,b()({},"".concat(z,"-fixed"),!O&&!on)),We=tn()("".concat(z,"-ink"),b()({},"".concat(z,"-ink-visible"),Qn)),$e=w()(w()({maxHeight:f?"calc(100vh - ".concat(f,"px)"):"100vh"},re==null?void 0:re.style),I),Ue=function X(hn){return Array.isArray(hn)?hn.map(function(gn){return(0,s.createElement)(Un,w()(w()({replace:kn},gn),{},{key:gn.key}),H==="vertical"&&X(gn.children))}):null},ve=(0,zn.jsx)("div",{ref:Gn,className:Re,style:$e,children:(0,zn.jsxs)("div",{className:Fe,children:[(0,zn.jsx)("span",{className:We,ref:de}),"items"in r?Ue(an):rn]})});s.useEffect(function(){var X=fe();return xe(),X==null||X.addEventListener("scroll",xe),function(){X==null||X.removeEventListener("scroll",xe)}},[ke]),s.useEffect(function(){typeof dn=="function"&&Ee(dn(he.current||""))},[dn]),s.useEffect(function(){Ze()},[H,dn,ke,Qn]);var Xe=s.useMemo(function(){return{registerLink:He,unregisterLink:ze,scrollTo:Le,activeLink:Qn,onClick:Q,direction:H}},[Qn,Q,Le,H]);return(0,zn.jsx)(nn.Provider,{value:Xe,children:O?(0,zn.jsx)(P.Z,{offsetTop:f,target:fe,children:ve}):ve})},le=function(r){var c=r.prefixCls,h=r.rootClassName,S=s.useContext(A.E_),z=S.getPrefixCls,D=z("anchor",c),I=Kn(D),f=d()(I,2),$=f[0],O=f[1];return $((0,zn.jsx)(ie,w()(w()({},r),{},{rootClassName:tn()(O,h),anchorPrefixCls:D})))},se=le,wn=se;wn.Link=Un;var p=wn},302281:function(ae,yn,t){t.d(yn,{Z:function(){return se}});var mn=t(97857),w=t.n(mn),xn=t(9783),b=t.n(xn),Dn=t(805574),sn=t.n(Dn),jn=t(513769),d=t.n(jn),s=t(667294),G=t(294184),tn=t.n(G),j=t(650010),vn=t(851863),Bn=t(73287),m=t(976883),P=t(578294),A=t(358245),n=t(46287),nn=t(785893),zn=function(p){var y=p.prefixCls,r=p.title,c=p.footer,h=p.extra,S=p.closeIcon,z=p.closable,D=p.onClose,I=p.headerStyle,f=p.drawerStyle,$=p.bodyStyle,O=p.footerStyle,U=p.children,on=s.useCallback(function(Q){return(0,nn.jsx)("button",{type:"button",onClick:D,"aria-label":"Close",className:"".concat(y,"-close"),children:Q})},[D]),rn=(0,n.Z)(z,S,on,void 0,!0),an=sn()(rn,2),cn=an[0],H=an[1],Cn=s.useMemo(function(){return!r&&!cn?null:(0,nn.jsxs)("div",{style:I,className:tn()("".concat(y,"-header"),b()({},"".concat(y,"-header-close-only"),cn&&!r&&!h)),children:[(0,nn.jsxs)("div",{className:"".concat(y,"-header-title"),children:[H,r&&(0,nn.jsx)("div",{className:"".concat(y,"-title"),children:r})]}),h&&(0,nn.jsx)("div",{className:"".concat(y,"-extra"),children:h})]})},[cn,H,h,I,y,r]),en=s.useMemo(function(){if(!c)return null;var Q="".concat(y,"-footer");return(0,nn.jsx)("div",{className:Q,style:O,children:c})},[c,O,y]);return(0,nn.jsxs)("div",{className:"".concat(y,"-wrapper-body"),style:f,children:[Cn,(0,nn.jsx)("div",{className:"".concat(y,"-body"),style:$,children:U}),en]})},$n=zn,Un=t(141035),Hn=t(986943),ne=function(p){var y,r=p.componentCls,c=p.motionDurationSlow,h={"&-enter, &-appear, &-leave":{"&-start":{transition:"none"},"&-active":{transition:"all ".concat(c)}}};return b()({},r,(y={},b()(y,"".concat(r,"-mask-motion"),{"&-enter, &-appear, &-leave":{"&-active":{transition:"all ".concat(c)}},"&-enter, &-appear":{opacity:0,"&-active":{opacity:1}},"&-leave":{opacity:1,"&-active":{opacity:0}}}),b()(y,"".concat(r,"-panel-motion"),{"&-left":[h,{"&-enter, &-appear":{"&-start":{transform:"translateX(-100%) !important"},"&-active":{transform:"translateX(0)"}},"&-leave":{transform:"translateX(0)","&-active":{transform:"translateX(-100%)"}}}],"&-right":[h,{"&-enter, &-appear":{"&-start":{transform:"translateX(100%) !important"},"&-active":{transform:"translateX(0)"}},"&-leave":{transform:"translateX(0)","&-active":{transform:"translateX(100%)"}}}],"&-top":[h,{"&-enter, &-appear":{"&-start":{transform:"translateY(-100%) !important"},"&-active":{transform:"translateY(0)"}},"&-leave":{transform:"translateY(0)","&-active":{transform:"translateY(-100%)"}}}],"&-bottom":[h,{"&-enter, &-appear":{"&-start":{transform:"translateY(100%) !important"},"&-active":{transform:"translateY(0)"}},"&-leave":{transform:"translateY(0)","&-active":{transform:"translateY(100%)"}}}]}),y))},Jn=ne,ee=function(p){var y,r,c=p.componentCls,h=p.zIndexPopup,S=p.colorBgMask,z=p.colorBgElevated,D=p.motionDurationSlow,I=p.motionDurationMid,f=p.padding,$=p.paddingLG,O=p.fontSizeLG,U=p.lineHeightLG,on=p.lineWidth,rn=p.lineType,an=p.colorSplit,cn=p.marginSM,H=p.colorIcon,Cn=p.colorIconHover,en=p.colorText,Q=p.fontWeightStrong,Mn=p.footerPaddingBlock,Sn=p.footerPaddingInline,dn="".concat(c,"-content-wrapper");return b()({},c,(r={position:"fixed",inset:0,zIndex:h,pointerEvents:"none","&-pure":(y={position:"relative",background:z},b()(y,"&".concat(c,"-left"),{boxShadow:p.boxShadowDrawerLeft}),b()(y,"&".concat(c,"-right"),{boxShadow:p.boxShadowDrawerRight}),b()(y,"&".concat(c,"-top"),{boxShadow:p.boxShadowDrawerUp}),b()(y,"&".concat(c,"-bottom"),{boxShadow:p.boxShadowDrawerDown}),y),"&-inline":{position:"absolute"}},b()(r,"".concat(c,"-mask"),{position:"absolute",inset:0,zIndex:h,background:S,pointerEvents:"auto"}),b()(r,dn,{position:"absolute",zIndex:h,maxWidth:"100vw",transition:"all ".concat(D),"&-hidden":{display:"none"}}),b()(r,"&-left > ".concat(dn),{top:0,bottom:0,left:{_skip_check_:!0,value:0},boxShadow:p.boxShadowDrawerLeft}),b()(r,"&-right > ".concat(dn),{top:0,right:{_skip_check_:!0,value:0},bottom:0,boxShadow:p.boxShadowDrawerRight}),b()(r,"&-top > ".concat(dn),{top:0,insetInline:0,boxShadow:p.boxShadowDrawerUp}),b()(r,"&-bottom > ".concat(dn),{bottom:0,insetInline:0,boxShadow:p.boxShadowDrawerDown}),b()(r,"".concat(c,"-content"),{width:"100%",height:"100%",overflow:"auto",background:z,pointerEvents:"auto"}),b()(r,"".concat(c,"-wrapper-body"),{display:"flex",flexDirection:"column",width:"100%",height:"100%"}),b()(r,"".concat(c,"-header"),{display:"flex",flex:0,alignItems:"center",padding:"".concat(f,"px ").concat($,"px"),fontSize:O,lineHeight:U,borderBottom:"".concat(on,"px ").concat(rn," ").concat(an),"&-title":{display:"flex",flex:1,alignItems:"center",minWidth:0,minHeight:0}}),b()(r,"".concat(c,"-extra"),{flex:"none"}),b()(r,"".concat(c,"-close"),{display:"inline-block",marginInlineEnd:cn,color:H,fontWeight:Q,fontSize:O,fontStyle:"normal",lineHeight:1,textAlign:"center",textTransform:"none",textDecoration:"none",background:"transparent",border:0,outline:0,cursor:"pointer",transition:"color ".concat(I),textRendering:"auto","&:focus, &:hover":{color:Cn,textDecoration:"none"}}),b()(r,"".concat(c,"-title"),{flex:1,margin:0,color:en,fontWeight:p.fontWeightStrong,fontSize:O,lineHeight:U}),b()(r,"".concat(c,"-body"),{flex:1,minWidth:0,minHeight:0,padding:$,overflow:"auto"}),b()(r,"".concat(c,"-footer"),{flexShrink:0,padding:"".concat(Mn,"px ").concat(Sn,"px"),borderTop:"".concat(on,"px ").concat(rn," ").concat(an)}),b()(r,"&-rtl",{direction:"rtl"}),r))},Xn=(0,Un.Z)("Drawer",function(wn){var p=(0,Hn.TS)(wn,{});return[ee(p),Jn(p)]},function(wn){return{zIndexPopup:wn.zIndexPopupBase,footerPaddingBlock:wn.paddingXS,footerPaddingInline:wn.padding}}),Kn=["rootClassName","width","height","size","mask","push","open","afterOpenChange","onClose","prefixCls","getContainer","style","className","visible","afterVisibleChange"],In=["prefixCls","style","className","placement"],te=null,On={distance:180},ie=function(p){var y=p.rootClassName,r=p.width,c=p.height,h=p.size,S=h===void 0?"default":h,z=p.mask,D=z===void 0?!0:z,I=p.push,f=I===void 0?On:I,$=p.open,O=p.afterOpenChange,U=p.onClose,on=p.prefixCls,rn=p.getContainer,an=p.style,cn=p.className,H=p.visible,Cn=p.afterVisibleChange,en=d()(p,Kn),Q=s.useContext(Bn.E_),Mn=Q.getPopupContainer,Sn=Q.getPrefixCls,dn=Q.direction,kn=Q.drawer,An=Sn("drawer",on),oe=Xn(An),V=sn()(oe,2),bn=V[0],Zn=V[1],me=rn===void 0&&Mn?function(){return Mn(document.body)}:rn,ce=tn()(b()({"no-mask":!D},"".concat(An,"-rtl"),dn==="rtl"),y,Zn);if(!1)var Qn,we;var he=s.useMemo(function(){return r!=null?r:S==="large"?736:378},[r,S]),Gn=s.useMemo(function(){return c!=null?c:S==="large"?736:378},[c,S]),de={motionName:(0,vn.m)(An,"mask-motion"),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500},_n=function(je){return{motionName:(0,vn.m)(An,"panel-motion-".concat(je)),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500}},ge=(0,A.H)();return bn((0,nn.jsx)(P.BR,{children:(0,nn.jsx)(m.Ux,{status:!0,override:!0,children:(0,nn.jsx)(j.Z,w()(w()({prefixCls:An,onClose:U,maskMotion:de,motion:_n},en),{},{open:$!=null?$:H,mask:D,push:f,width:he,height:Gn,style:w()(w()({},kn==null?void 0:kn.style),an),className:tn()(kn==null?void 0:kn.className,cn),rootClassName:ce,getContainer:me,afterOpenChange:O!=null?O:Cn,panelRef:ge,children:(0,nn.jsx)($n,w()(w()({prefixCls:An},en),{},{onClose:U}))}))})}))},le=function(p){var y=p.prefixCls,r=p.style,c=p.className,h=p.placement,S=h===void 0?"right":h,z=d()(p,In),D=s.useContext(Bn.E_),I=D.getPrefixCls,f=I("drawer",y),$=Xn(f),O=sn()($,2),U=O[0],on=O[1],rn=tn()(f,"".concat(f,"-pure"),"".concat(f,"-").concat(S),on,c);return U((0,nn.jsx)("div",{className:rn,style:r,children:(0,nn.jsx)($n,w()({prefixCls:f},z))}))};ie._InternalPanelDoNotUseOrYouWillBeFired=le;var se=ie},377376:function(ae,yn,t){var mn=t(83996),w=t(296708),xn=mn.ZP;xn.Header=mn.h4,xn.Footer=mn.$_,xn.Content=mn.VY,xn.Sider=w.Z,yn.Z=xn},715778:function(ae,yn,t){t.d(yn,{Z:function(){return j}});var mn=t(174219),w=t(97857),xn=t.n(w),b=t(585369),Dn={placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",rangePlaceholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"]},sn=Dn,jn={lang:xn()({placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",yearPlaceholder:"\u8BF7\u9009\u62E9\u5E74\u4EFD",quarterPlaceholder:"\u8BF7\u9009\u62E9\u5B63\u5EA6",monthPlaceholder:"\u8BF7\u9009\u62E9\u6708\u4EFD",weekPlaceholder:"\u8BF7\u9009\u62E9\u5468",rangePlaceholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"],rangeYearPlaceholder:["\u5F00\u59CB\u5E74\u4EFD","\u7ED3\u675F\u5E74\u4EFD"],rangeMonthPlaceholder:["\u5F00\u59CB\u6708\u4EFD","\u7ED3\u675F\u6708\u4EFD"],rangeQuarterPlaceholder:["\u5F00\u59CB\u5B63\u5EA6","\u7ED3\u675F\u5B63\u5EA6"],rangeWeekPlaceholder:["\u5F00\u59CB\u5468","\u7ED3\u675F\u5468"]},b.Z),timePickerLocale:xn()({},sn)};jn.lang.ok="\u786E\u5B9A";var d=jn,s=d,G="${label}\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684${type}",tn={locale:"zh-cn",Pagination:mn.Z,DatePicker:d,TimePicker:sn,Calendar:s,global:{placeholder:"\u8BF7\u9009\u62E9"},Table:{filterTitle:"\u7B5B\u9009",filterConfirm:"\u786E\u5B9A",filterReset:"\u91CD\u7F6E",filterEmptyText:"\u65E0\u7B5B\u9009\u9879",filterCheckall:"\u5168\u9009",filterSearchPlaceholder:"\u5728\u7B5B\u9009\u9879\u4E2D\u641C\u7D22",selectAll:"\u5168\u9009\u5F53\u9875",selectInvert:"\u53CD\u9009\u5F53\u9875",selectNone:"\u6E05\u7A7A\u6240\u6709",selectionAll:"\u5168\u9009\u6240\u6709",sortTitle:"\u6392\u5E8F",expand:"\u5C55\u5F00\u884C",collapse:"\u5173\u95ED\u884C",triggerDesc:"\u70B9\u51FB\u964D\u5E8F",triggerAsc:"\u70B9\u51FB\u5347\u5E8F",cancelSort:"\u53D6\u6D88\u6392\u5E8F"},Modal:{okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",justOkText:"\u77E5\u9053\u4E86"},Tour:{Next:"\u4E0B\u4E00\u6B65",Previous:"\u4E0A\u4E00\u6B65",Finish:"\u7ED3\u675F\u5BFC\u89C8"},Popconfirm:{cancelText:"\u53D6\u6D88",okText:"\u786E\u5B9A"},Transfer:{titles:["",""],searchPlaceholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",itemUnit:"\u9879",itemsUnit:"\u9879",remove:"\u5220\u9664",selectCurrent:"\u5168\u9009\u5F53\u9875",removeCurrent:"\u5220\u9664\u5F53\u9875",selectAll:"\u5168\u9009\u6240\u6709",removeAll:"\u5220\u9664\u5168\u90E8",selectInvert:"\u53CD\u9009\u5F53\u9875"},Upload:{uploading:"\u6587\u4EF6\u4E0A\u4F20\u4E2D",removeFile:"\u5220\u9664\u6587\u4EF6",uploadError:"\u4E0A\u4F20\u9519\u8BEF",previewFile:"\u9884\u89C8\u6587\u4EF6",downloadFile:"\u4E0B\u8F7D\u6587\u4EF6"},Empty:{description:"\u6682\u65E0\u6570\u636E"},Icon:{icon:"\u56FE\u6807"},Text:{edit:"\u7F16\u8F91",copy:"\u590D\u5236",copied:"\u590D\u5236\u6210\u529F",expand:"\u5C55\u5F00"},PageHeader:{back:"\u8FD4\u56DE"},Form:{optional:"\uFF08\u53EF\u9009\uFF09",defaultValidateMessages:{default:"\u5B57\u6BB5\u9A8C\u8BC1\u9519\u8BEF${label}",required:"\u8BF7\u8F93\u5165${label}",enum:"${label}\u5FC5\u987B\u662F\u5176\u4E2D\u4E00\u4E2A[${enum}]",whitespace:"${label}\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u7B26",date:{format:"${label}\u65E5\u671F\u683C\u5F0F\u65E0\u6548",parse:"${label}\u4E0D\u80FD\u8F6C\u6362\u4E3A\u65E5\u671F",invalid:"${label}\u662F\u4E00\u4E2A\u65E0\u6548\u65E5\u671F"},types:{string:G,method:G,array:G,object:G,number:G,date:G,boolean:G,integer:G,float:G,regexp:G,email:G,url:G,hex:G},string:{len:"${label}\u987B\u4E3A${len}\u4E2A\u5B57\u7B26",min:"${label}\u6700\u5C11${min}\u4E2A\u5B57\u7B26",max:"${label}\u6700\u591A${max}\u4E2A\u5B57\u7B26",range:"${label}\u987B\u5728${min}-${max}\u5B57\u7B26\u4E4B\u95F4"},number:{len:"${label}\u5FC5\u987B\u7B49\u4E8E${len}",min:"${label}\u6700\u5C0F\u503C\u4E3A${min}",max:"${label}\u6700\u5927\u503C\u4E3A${max}",range:"${label}\u987B\u5728${min}-${max}\u4E4B\u95F4"},array:{len:"\u987B\u4E3A${len}\u4E2A${label}",min:"\u6700\u5C11${min}\u4E2A${label}",max:"\u6700\u591A${max}\u4E2A${label}",range:"${label}\u6570\u91CF\u987B\u5728${min}-${max}\u4E4B\u95F4"},pattern:{mismatch:"${label}\u4E0E\u6A21\u5F0F\u4E0D\u5339\u914D${pattern}"}}},Image:{preview:"\u9884\u89C8"},QRCode:{expired:"\u4E8C\u7EF4\u7801\u8FC7\u671F",refresh:"\u70B9\u51FB\u5237\u65B0"},ColorPicker:{presetEmpty:"\u6682\u65E0"}},j=tn},15060:function(ae,yn,t){t.d(yn,{Z:function(){return p}});var mn=t(97857),w=t.n(mn),xn=t(805574),b=t.n(xn),Dn=t(513769),sn=t.n(Dn),jn=t(667294),d=t(294184),s=t.n(d),G=t(73287),tn=t(9783),j=t.n(tn),vn=t(548073),Bn=t(141035),m=t(986943),P=function(r){var c,h,S,z,D,I,f=r.componentCls;return j()({},f,w()(w()({},(0,vn.Wf)(r)),{},(I={margin:0,padding:0,listStyle:"none"},j()(I,"".concat(f,"-item"),{position:"relative",margin:0,paddingBottom:r.itemPaddingBottom,fontSize:r.fontSize,listStyle:"none","&-tail":{position:"absolute",insetBlockStart:r.itemHeadSize,insetInlineStart:(r.itemHeadSize-r.tailWidth)/2,height:"calc(100% - ".concat(r.itemHeadSize,"px)"),borderInlineStart:"".concat(r.tailWidth,"px ").concat(r.lineType," ").concat(r.tailColor)},"&-pending":(c={},j()(c,"".concat(f,"-item-head"),{fontSize:r.fontSizeSM,backgroundColor:"transparent"}),j()(c,"".concat(f,"-item-tail"),{display:"none"}),c),"&-head":{position:"absolute",width:r.itemHeadSize,height:r.itemHeadSize,backgroundColor:r.dotBg,border:"".concat(r.dotBorderWidth,"px ").concat(r.lineType," transparent"),borderRadius:"50%","&-blue":{color:r.colorPrimary,borderColor:r.colorPrimary},"&-red":{color:r.colorError,borderColor:r.colorError},"&-green":{color:r.colorSuccess,borderColor:r.colorSuccess},"&-gray":{color:r.colorTextDisabled,borderColor:r.colorTextDisabled}},"&-head-custom":{position:"absolute",insetBlockStart:r.itemHeadSize/2,insetInlineStart:r.itemHeadSize/2,width:"auto",height:"auto",marginBlockStart:0,paddingBlock:r.customHeadPaddingVertical,lineHeight:1,textAlign:"center",border:0,borderRadius:0,transform:"translate(-50%, -50%)"},"&-content":{position:"relative",insetBlockStart:-(r.fontSize*r.lineHeight-r.fontSize)+r.lineWidth,marginInlineStart:r.margin+r.itemHeadSize,marginInlineEnd:0,marginBlockStart:0,marginBlockEnd:0,wordBreak:"break-word"},"&-last":(h={},j()(h,"> ".concat(f,"-item-tail"),{display:"none"}),j()(h,"> ".concat(f,"-item-content"),{minHeight:r.controlHeightLG*1.2}),h)}),j()(I,"&".concat(f,`-alternate,
        &`).concat(f,`-right,
        &`).concat(f,"-label"),j()({},"".concat(f,"-item"),{"&-tail, &-head, &-head-custom":{insetInlineStart:"50%"},"&-head":{marginInlineStart:"-".concat(r.marginXXS,"px"),"&-custom":{marginInlineStart:r.tailWidth/2}},"&-left":j()({},"".concat(f,"-item-content"),{insetInlineStart:"calc(50% - ".concat(r.marginXXS,"px)"),width:"calc(50% - ".concat(r.marginSM,"px)"),textAlign:"start"}),"&-right":j()({},"".concat(f,"-item-content"),{width:"calc(50% - ".concat(r.marginSM,"px)"),margin:0,textAlign:"end"})})),j()(I,"&".concat(f,"-right"),j()({},"".concat(f,"-item-right"),(S={},j()(S,"".concat(f,`-item-tail,
            `).concat(f,`-item-head,
            `).concat(f,"-item-head-custom"),{insetInlineStart:"calc(100% - ".concat((r.itemHeadSize+r.tailWidth)/2,"px)")}),j()(S,"".concat(f,"-item-content"),{width:"calc(100% - ".concat(r.itemHeadSize+r.marginXS,"px)")}),S))),j()(I,"&".concat(f,`-pending
        `).concat(f,`-item-last
        `).concat(f,"-item-tail"),{display:"block",height:"calc(100% - ".concat(r.margin,"px)"),borderInlineStart:"".concat(r.tailWidth,"px dotted ").concat(r.tailColor)}),j()(I,"&".concat(f,`-reverse
        `).concat(f,`-item-last
        `).concat(f,"-item-tail"),{display:"none"}),j()(I,"&".concat(f,"-reverse ").concat(f,"-item-pending"),(z={},j()(z,"".concat(f,"-item-tail"),{insetBlockStart:r.margin,display:"block",height:"calc(100% - ".concat(r.margin,"px)"),borderInlineStart:"".concat(r.tailWidth,"px dotted ").concat(r.tailColor)}),j()(z,"".concat(f,"-item-content"),{minHeight:r.controlHeightLG*1.2}),z)),j()(I,"&".concat(f,"-label"),(D={},j()(D,"".concat(f,"-item-label"),{position:"absolute",insetBlockStart:-(r.fontSize*r.lineHeight-r.fontSize)+r.tailWidth,width:"calc(50% - ".concat(r.marginSM,"px)"),textAlign:"end"}),j()(D,"".concat(f,"-item-right"),j()({},"".concat(f,"-item-label"),{insetInlineStart:"calc(50% + ".concat(r.marginSM,"px)"),width:"calc(50% - ".concat(r.marginSM,"px)"),textAlign:"start"})),D)),j()(I,"&-rtl",j()({direction:"rtl"},"".concat(f,"-item-head-custom"),{transform:"translate(50%, -50%)"})),I)))},A=(0,Bn.Z)("Timeline",function(y){var r=(0,m.TS)(y,{itemHeadSize:10,customHeadPaddingVertical:y.paddingXXS,paddingInlineEnd:2});return[P(r)]},function(y){return{tailColor:y.colorSplit,tailWidth:y.lineWidthBold,dotBorderWidth:y.wireframe?y.lineWidthBold:y.lineWidth*3,dotBg:y.colorBgContainer,itemPaddingBottom:y.padding*1.25}}),n=t(785893),nn=["prefixCls","className","color","dot","pending","position","label","children"],zn=function(r){var c,h=r.prefixCls,S=r.className,z=r.color,D=z===void 0?"blue":z,I=r.dot,f=r.pending,$=f===void 0?!1:f,O=r.position,U=r.label,on=r.children,rn=sn()(r,nn),an=jn.useContext(G.E_),cn=an.getPrefixCls,H=cn("timeline",h),Cn=s()("".concat(H,"-item"),j()({},"".concat(H,"-item-pending"),$),S),en=/blue|red|green|gray/.test(D||"")?void 0:D,Q=s()("".concat(H,"-item-head"),(c={},j()(c,"".concat(H,"-item-head-custom"),!!I),j()(c,"".concat(H,"-item-head-").concat(D),!en),c));return(0,n.jsxs)("li",w()(w()({},rn),{},{className:Cn,children:[U&&(0,n.jsx)("div",{className:"".concat(H,"-item-label"),children:U}),(0,n.jsx)("div",{className:"".concat(H,"-item-tail")}),(0,n.jsx)("div",{className:Q,style:{borderColor:en,color:en},children:I}),(0,n.jsx)("div",{className:"".concat(H,"-item-content"),children:on})]}))},$n=zn,Un=t(719632),Hn=t.n(Un),ne=t(100628),Jn=t.n(ne),ee=["prefixCls","className","pending","children","items","rootClassName","reverse","direction","hashId","pendingDot","mode"],Xn=["className"],Kn=function(r){var c,h=r.prefixCls,S=r.className,z=r.pending,D=z===void 0?!1:z,I=r.children,f=r.items,$=r.rootClassName,O=r.reverse,U=O===void 0?!1:O,on=r.direction,rn=r.hashId,an=r.pendingDot,cn=r.mode,H=cn===void 0?"":cn,Cn=sn()(r,ee),en=function(bn,Zn){return H==="alternate"?bn==="right"?"".concat(h,"-item-right"):bn==="left"||Zn%2===0?"".concat(h,"-item-left"):"".concat(h,"-item-right"):H==="left"?"".concat(h,"-item-left"):H==="right"||bn==="right"?"".concat(h,"-item-right"):""},Q=Hn()(f||[]),Mn=typeof D=="boolean"?null:D;D&&Q.push({pending:!!D,dot:an||(0,n.jsx)(Jn(),{}),children:Mn}),U&&Q.reverse();var Sn=Q.length,dn="".concat(h,"-item-last"),kn=Q.filter(function(V){return!!V}).map(function(V,bn){var Zn,me=bn===Sn-2?dn:"",ce=bn===Sn-1?dn:"",Qn=V.className,we=sn()(V,Xn);return(0,jn.createElement)($n,w()(w()({},we),{},{className:s()([Qn,!U&&D?me:ce,en((Zn=V==null?void 0:V.position)!==null&&Zn!==void 0?Zn:"",bn)]),key:(V==null?void 0:V.key)||bn}))}),An=Q.some(function(V){return!!(V!=null&&V.label)}),oe=s()(h,(c={},j()(c,"".concat(h,"-pending"),!!D),j()(c,"".concat(h,"-reverse"),!!U),j()(c,"".concat(h,"-").concat(H),!!H&&!An),j()(c,"".concat(h,"-label"),An),j()(c,"".concat(h,"-rtl"),on==="rtl"),c),S,$,rn);return(0,n.jsx)("ul",w()(w()({},Cn),{},{className:oe,children:kn}))},In=Kn,te=t(45598);function On(y,r){return y&&Array.isArray(y)?y:(0,te.default)(r).map(function(c){var h,S;return w()({children:(h=c==null||(S=c.props)===null||S===void 0?void 0:S.children)!==null&&h!==void 0?h:""},c.props)})}var ie=On,le=["prefixCls","children","items","className","style"],se=function(r){var c=jn.useContext(G.E_),h=c.getPrefixCls,S=c.direction,z=c.timeline,D=r.prefixCls,I=r.children,f=r.items,$=r.className,O=r.style,U=sn()(r,le),on=h("timeline",D);if(!1)var rn;var an=A(on),cn=b()(an,2),H=cn[0],Cn=cn[1],en=ie(f,I);return H((0,n.jsx)(In,w()(w()({},U),{},{className:s()(z==null?void 0:z.className,$),style:w()(w()({},z==null?void 0:z.style),O),prefixCls:on,direction:S,items:en,hashId:Cn})))};se.Item=$n;var wn=se,p=wn}}]);
