(()=>{var a={};a.id=786,a.ids=[786],a.modules={261:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/app-paths")},3295:a=>{"use strict";a.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},5513:(a,b,c)=>{"use strict";c.d(b,{AccountNavLinks:()=>l});var d=c(48249),e=c(88872),f=c(14490),g=c(35107),h=c(62955),i=c(54264),j=c(77360);let k={Package:g.A,MapPin:h.A,User:i.A};function l({items:a,layout:b}){let c=(0,e.a8)(),g=(0,j.c)("Navigation");return"horizontal"===b?(0,d.jsx)("nav",{className:"flex gap-1 overflow-x-auto border-b border-border pb-px",children:a.map(a=>{let b=c.startsWith(a.href),h=k[a.icon];return(0,d.jsxs)(e.N_,{href:a.href,className:(0,f.cn)("flex items-center gap-2 px-4 py-2 text-sm font-medium whitespace-nowrap border-b-2 transition-colors",b?"border-primary text-foreground":"border-transparent text-muted-foreground hover:text-foreground hover:border-border"),children:[h&&(0,d.jsx)(h,{className:"h-4 w-4"}),g(a.labelKey)]},a.href)})}):(0,d.jsx)("nav",{className:"space-y-1",children:a.map(a=>{let b=c.startsWith(a.href),h=k[a.icon];return(0,d.jsxs)(e.N_,{href:a.href,className:(0,f.cn)("flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-md transition-colors",b?"bg-accent text-accent-foreground":"text-muted-foreground hover:bg-accent hover:text-accent-foreground"),children:[h&&(0,d.jsx)(h,{className:"h-5 w-5"}),g(a.labelKey)]},a.href)})})}},10846:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},17891:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/get-segment-param")},19121:a=>{"use strict";a.exports=require("next/dist/server/app-render/action-async-storage.external.js")},26713:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/is-bot")},28354:a=>{"use strict";a.exports=require("util")},29294:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-async-storage.external.js")},33873:a=>{"use strict";a.exports=require("path")},34099:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>o});var d=c(5735),e=c(91986),f=c(81557),g=c(50920);(0,g.U)(`
    mutation Login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            __typename
            ... on CurrentUser {
                id
                identifier
            }
            ... on ErrorResult {
                errorCode
                message
            }
        }
    }
`),(0,g.U)(`
    mutation AddToCart($variantId: ID!, $quantity: Int!) {
        addItemToOrder(productVariantId: $variantId, quantity: $quantity) {
            __typename
            ... on Order {
                id
                code
                totalQuantity
                lines {
                    id
                    productVariant {
                        id
                        name
                    }
                    quantity
                }
            }
            ... on ErrorResult {
                errorCode
                message
            }
        }
    }
`),(0,g.U)(`
    mutation RemoveFromCart($lineId: ID!) {
        removeOrderLine(orderLineId: $lineId) {
            __typename
            ... on Order {
                id
                code
                totalQuantity
            }
            ... on ErrorResult {
                errorCode
                message
            }
        }
    }
`),(0,g.U)(`
    mutation AdjustCartItem($lineId: ID!, $quantity: Int!) {
        adjustOrderLine(orderLineId: $lineId, quantity: $quantity) {
            __typename
            ... on Order {
                id
                code
                totalQuantity
            }
            ... on ErrorResult {
                errorCode
                message
            }
        }
    }
`),(0,g.U)(`
    mutation ApplyPromotionCode($couponCode: String!) {
        applyCouponCode(couponCode: $couponCode) {
            __typename
            ... on Order {
                id
                code
                totalWithTax
                couponCodes
                discounts {
                    description
                    amountWithTax
                }
            }
            ... on ErrorResult {
                errorCode
                message
            }
        }
    }
`),(0,g.U)(`
    mutation RemovePromotionCode($couponCode: String!) {
        removeCouponCode(couponCode: $couponCode) {
            id
            code
            totalWithTax
            couponCodes
            discounts {
                description
                amountWithTax
            }
        }
    }
`),(0,g.U)(`
    mutation CreateCustomerAddress($input: CreateAddressInput!) {
        createCustomerAddress(input: $input) {
            id
            fullName
            company
            streetLine1
            streetLine2
            city
            province
            postalCode
            country {
                id
                code
                name
            }
            phoneNumber
            defaultShippingAddress
            defaultBillingAddress
        }
    }
`),(0,g.U)(`
    mutation UpdateCustomerAddress($input: UpdateAddressInput!) {
        updateCustomerAddress(input: $input) {
            id
            fullName
            company
            streetLine1
            streetLine2
            city
            province
            postalCode
            country {
                id
                code
                name
            }
            phoneNumber
            defaultShippingAddress
            defaultBillingAddress
        }
    }
`),(0,g.U)(`
    mutation DeleteCustomerAddress($id: ID!) {
        deleteCustomerAddress(id: $id) {
            success
        }
    }
`),(0,g.U)(`
    mutation SetOrderShippingAddress($input: CreateAddressInput!) {
        setOrderShippingAddress(input: $input) {
            __typename
            ... on Order {
                id
                code
                shippingAddress {
                    fullName
                    company
                    streetLine1
                    streetLine2
                    city
                    province
                    postalCode
                    country
                    phoneNumber
                }
            }
            ... on ErrorResult {
                errorCode
                message
            }
        }
    }
`),(0,g.U)(`
    mutation SetOrderBillingAddress($input: CreateAddressInput!) {
        setOrderBillingAddress(input: $input) {
            __typename
            ... on Order {
                id
                code
                billingAddress {
                    fullName
                    company
                    streetLine1
                    streetLine2
                    city
                    province
                    postalCode
                    country
                    phoneNumber
                }
            }
            ... on ErrorResult {
                errorCode
                message
            }
        }
    }
`),(0,g.U)(`
    mutation SetOrderShippingMethod($shippingMethodId: [ID!]!) {
        setOrderShippingMethod(shippingMethodId: $shippingMethodId) {
            __typename
            ... on Order {
                id
                code
                shippingWithTax
                totalWithTax
                shippingLines {
                    shippingMethod {
                        id
                        name
                        description
                    }
                    priceWithTax
                }
            }
            ... on ErrorResult {
                errorCode
                message
            }
        }
    }
`),(0,g.U)(`
    mutation TransitionOrderToState($state: String!) {
        transitionOrderToState(state: $state) {
            __typename
            ... on Order {
                id
                code
                state
            }
            ... on OrderStateTransitionError {
                errorCode
                message
                transitionError
                fromState
                toState
            }
        }
    }
`),(0,g.U)(`
    mutation AddPaymentToOrder($input: PaymentInput!) {
        addPaymentToOrder(input: $input) {
            __typename
            ... on Order {
                id
                code
                state
                payments {
                    id
                    method
                    amount
                    state
                }
            }
            ... on ErrorResult {
                errorCode
                message
            }
        }
    }
`),(0,g.U)(`
    mutation RegisterCustomerAccount($input: RegisterCustomerInput!) {
        registerCustomerAccount(input: $input) {
            __typename
            ... on Success {
                success
            }
            ... on ErrorResult {
                errorCode
                message
            }
        }
    }
`),(0,g.U)(`
    mutation VerifyCustomerAccount($token: String!, $password: String) {
        verifyCustomerAccount(token: $token, password: $password) {
            __typename
            ... on CurrentUser {
                id
                identifier
            }
            ... on ErrorResult {
                errorCode
                message
            }
        }
    }
`),(0,g.U)(`
    mutation RequestPasswordReset($emailAddress: String!) {
        requestPasswordReset(emailAddress: $emailAddress) {
            __typename
            ... on Success {
                success
            }
            ... on ErrorResult {
                errorCode
                message
            }
        }
    }
`),(0,g.U)(`
    mutation ResetPassword($token: String!, $password: String!) {
        resetPassword(token: $token, password: $password) {
            __typename
            ... on CurrentUser {
                id
                identifier
            }
            ... on ErrorResult {
                errorCode
                message
            }
        }
    }
`),(0,g.U)(`
    mutation UpdateCustomerPassword($currentPassword: String!, $newPassword: String!) {
        updateCustomerPassword(currentPassword: $currentPassword, newPassword: $newPassword) {
            __typename
            ... on Success {
                success
            }
            ... on ErrorResult {
                errorCode
                message
            }
        }
    }
`),(0,g.U)(`
    mutation Logout {
        logout {
            __typename
            ... on Success {
                success
            }
        }
    }
`),(0,g.U)(`
    mutation UpdateCustomer($input: UpdateCustomerInput!) {
        updateCustomer(input: $input) {
            __typename
            id
            firstName
            lastName
            emailAddress
        }
    }
`),(0,g.U)(`
    mutation RequestUpdateCustomerEmailAddress($password: String!, $newEmailAddress: String!) {
        requestUpdateCustomerEmailAddress(password: $password, newEmailAddress: $newEmailAddress) {
            __typename
            ... on Success {
                success
            }
            ... on ErrorResult {
                errorCode
                message
            }
        }
    }
`);let h=(0,g.U)(`
    mutation UpdateCustomerEmailAddress($token: String!) {
        updateCustomerEmailAddress(token: $token) {
            __typename
            ... on Success {
                success
            }
            ... on ErrorResult {
                errorCode
                message
            }
        }
    }
`);(0,g.U)(`
    mutation SetCustomerForOrder($input: CreateCustomerInput!) {
        setCustomerForOrder(input: $input) {
            __typename
            ... on Order {
                id
                code
                customer {
                    id
                    firstName
                    lastName
                    emailAddress
                    phoneNumber
                }
            }
            ... on AlreadyLoggedInError {
                errorCode
                message
            }
            ... on EmailAddressConflictError {
                errorCode
                message
            }
            ... on GuestCheckoutError {
                errorCode
                message
            }
            ... on NoActiveOrderError {
                errorCode
                message
            }
        }
    }
`);var i=c(38309),j=c(85939),k=c(18890),l=c(63195),m=c(79893);async function n({searchParams:a,locale:b}){let c=await (0,l.KB)({locale:b,namespace:"Account"}),e=(await a).token,g=Array.isArray(e)?e[0]:e;if(!g)return(0,d.jsxs)(i.Zp,{className:"max-w-md mx-auto",children:[(0,d.jsxs)(i.aR,{children:[(0,d.jsx)(i.ZB,{children:c("verifyEmail.invalidLink")}),(0,d.jsx)(i.BT,{children:c("verifyEmail.invalidLinkDesc")})]}),(0,d.jsxs)(i.Wu,{children:[(0,d.jsx)("p",{className:"text-sm text-muted-foreground mb-4",children:c("verifyEmail.checkEmail")}),(0,d.jsx)(j.Button,{render:(0,d.jsx)(k.N_,{href:"/account/profile"}),nativeButton:!1,children:c("verifyEmail.goToProfile")})]})]});let m=await (0,f.T)(h,{token:g},{useAuthToken:!0});if(!m)return(0,d.jsxs)(i.Zp,{className:"max-w-md mx-auto",children:[(0,d.jsxs)(i.aR,{children:[(0,d.jsx)(i.ZB,{children:c("verifyEmail.error")}),(0,d.jsx)(i.BT,{children:c("verifyEmail.errorDesc")})]}),(0,d.jsxs)(i.Wu,{children:[(0,d.jsx)("p",{className:"text-sm text-muted-foreground mb-4",children:c("verifyEmail.errorMessage")}),(0,d.jsx)(j.Button,{render:(0,d.jsx)(k.N_,{href:"/account/profile"}),nativeButton:!1,children:c("verifyEmail.goToProfile")})]})]});let o=m.data.updateCustomerEmailAddress;return"Success"===o.__typename?(0,d.jsxs)(i.Zp,{className:"max-w-md mx-auto",children:[(0,d.jsxs)(i.aR,{children:[(0,d.jsx)(i.ZB,{children:c("verifyEmail.success")}),(0,d.jsx)(i.BT,{children:c("verifyEmail.successDesc")})]}),(0,d.jsxs)(i.Wu,{children:[(0,d.jsx)("p",{className:"text-sm text-muted-foreground mb-4",children:c("verifyEmail.successMessage")}),(0,d.jsx)(j.Button,{render:(0,d.jsx)(k.N_,{href:"/account/profile"}),nativeButton:!1,children:c("verifyEmail.goToProfile")})]})]}):(0,d.jsxs)(i.Zp,{className:"max-w-md mx-auto",children:[(0,d.jsxs)(i.aR,{children:[(0,d.jsx)(i.ZB,{children:c("verifyEmail.failed")}),(0,d.jsx)(i.BT,{children:o.message||c("verifyEmail.failedDefault")})]}),(0,d.jsxs)(i.Wu,{children:[(0,d.jsx)("p",{className:"text-sm text-muted-foreground mb-4",children:c("verifyEmail.failedMessage")}),(0,d.jsx)(j.Button,{render:(0,d.jsx)(k.N_,{href:"/account/profile"}),nativeButton:!1,children:c("verifyEmail.goToProfile")})]})]})}async function o({params:a,searchParams:b}){let c=await (0,l.Hw)(a);(0,m.I)(c);let f=await (0,l.KB)({locale:c,namespace:"Account"});return(0,d.jsx)("div",{className:"container mx-auto px-4 py-8 mt-16",children:(0,d.jsx)(e.Suspense,{fallback:(0,d.jsx)(i.Zp,{className:"max-w-md mx-auto",children:(0,d.jsxs)(i.aR,{children:[(0,d.jsx)(i.ZB,{children:f("verifyEmail.verifying")}),(0,d.jsx)(i.BT,{children:f("verifyEmail.verifyingDesc")})]})}),children:(0,d.jsx)(n,{searchParams:b,locale:c})})})}},36115:(a,b,c)=>{"use strict";c.d(b,{AccountNavLinks:()=>d});let d=(0,c(77943).registerClientReference)(function(){throw Error("Attempted to call AccountNavLinks() from the server but AccountNavLinks is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Mediaservis\\Downloads\\nextjs-vendure\\src\\components\\account\\account-nav-links.tsx","AccountNavLinks")},38309:(a,b,c)=>{"use strict";c.d(b,{BT:()=>i,Wu:()=>j,ZB:()=>h,Zp:()=>f,aR:()=>g,wL:()=>k});var d=c(5735);c(91986);var e=c(81764);function f({className:a,size:b="default",...c}){return(0,d.jsx)("div",{"data-slot":"card","data-size":b,className:(0,e.cn)("group/card flex flex-col gap-6 overflow-hidden rounded-xl bg-card py-6 text-sm text-card-foreground shadow-xs ring-1 ring-foreground/10 has-[>img:first-child]:pt-0 data-[size=sm]:gap-4 data-[size=sm]:py-4 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl",a),...c})}function g({className:a,...b}){return(0,d.jsx)("div",{"data-slot":"card-header",className:(0,e.cn)("group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-6 group-data-[size=sm]/card:px-4 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-6 group-data-[size=sm]/card:[.border-b]:pb-4",a),...b})}function h({className:a,...b}){return(0,d.jsx)("div",{"data-slot":"card-title",className:(0,e.cn)("text-base leading-normal font-medium group-data-[size=sm]/card:text-sm",a),...b})}function i({className:a,...b}){return(0,d.jsx)("div",{"data-slot":"card-description",className:(0,e.cn)("text-sm text-muted-foreground",a),...b})}function j({className:a,...b}){return(0,d.jsx)("div",{"data-slot":"card-content",className:(0,e.cn)("px-6 group-data-[size=sm]/card:px-4",a),...b})}function k({className:a,...b}){return(0,d.jsx)("div",{"data-slot":"card-footer",className:(0,e.cn)("flex items-center rounded-b-xl px-6 group-data-[size=sm]/card:px-4 [.border-t]:pt-6 group-data-[size=sm]/card:[.border-t]:pt-4",a),...b})}},41025:a=>{"use strict";a.exports=require("next/dist/server/app-render/dynamic-access-async-storage.external.js")},43954:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/interception-routes")},46786:(a,b,c)=>{"use strict";c.r(b),c.d(b,{"00e00d7c4904e8de68c2bc572150c6d70bab9afe2e":()=>e.Z,"40a6f3c2293be0b42392985345bb063207b07a5e09":()=>d.G,"600e7103d70e2587ee429cd7457770962ea19f313b":()=>e.i});var d=c(56002),e=c(63688)},54100:(a,b,c)=>{"use strict";c.r(b),c.d(b,{__next_app__:()=>O,handler:()=>Q,routeModule:()=>P});var d=c(7553),e=c(84006),f=c(67798),g=c(34775),h=c(99373),i=c(73461),j=c(1020),k=c(26349),l=c(54365),m=c(16023),n=c(14965),o=c(63747),p=c(24235),q=c(23938),r=c(261),s=c(66758),t=c(77243),u=c(26713),v=c(37527),w=c(22820),x=c(88216),y=c(47929),z=c(79551),A=c(71797),B=c(89125),C=c(86439),D=c(77068),E=c(27269),F=c(37525),G=c(61287),H=c(81494),I=c(70722),J=c(70753),K=c(43954),L=c(17891),M={};for(let a in G)0>["default","__next_app__","routeModule","handler"].indexOf(a)&&(M[a]=()=>G[a]);c.d(b,M);let N={children:["",{children:["[locale]",{children:["account",{children:["verify-email",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(c.bind(c,34099)),"C:\\Users\\Mediaservis\\Downloads\\nextjs-vendure\\src\\app\\[locale]\\account\\verify-email\\page.tsx"]}]},{"global-error":[()=>Promise.resolve().then(c.t.bind(c,95547,23)),"next/dist/client/components/builtin/global-error.js"]},[]]},{layout:[()=>Promise.resolve().then(c.bind(c,93592)),"C:\\Users\\Mediaservis\\Downloads\\nextjs-vendure\\src\\app\\[locale]\\account\\layout.tsx"],"global-error":[()=>Promise.resolve().then(c.t.bind(c,95547,23)),"next/dist/client/components/builtin/global-error.js"]},[]]},{layout:[()=>Promise.resolve().then(c.bind(c,44250)),"C:\\Users\\Mediaservis\\Downloads\\nextjs-vendure\\src\\app\\[locale]\\layout.tsx"],"global-error":[()=>Promise.resolve().then(c.t.bind(c,95547,23)),"next/dist/client/components/builtin/global-error.js"],"not-found":[()=>Promise.resolve().then(c.bind(c,11060)),"C:\\Users\\Mediaservis\\Downloads\\nextjs-vendure\\src\\app\\[locale]\\not-found.tsx"]},["_not-found","_global-error","api"]]},{layout:[()=>Promise.resolve().then(c.bind(c,76537)),"C:\\Users\\Mediaservis\\Downloads\\nextjs-vendure\\src\\app\\layout.tsx"],"global-error":[()=>Promise.resolve().then(c.t.bind(c,95547,23)),"next/dist/client/components/builtin/global-error.js"],"not-found":[()=>Promise.resolve().then(c.bind(c,8979)),"C:\\Users\\Mediaservis\\Downloads\\nextjs-vendure\\src\\app\\not-found.tsx"],forbidden:[()=>Promise.resolve().then(c.t.bind(c,45270,23)),"next/dist/client/components/builtin/forbidden.js"],unauthorized:[()=>Promise.resolve().then(c.t.bind(c,28193,23)),"next/dist/client/components/builtin/unauthorized.js"]},[]]}.children,O={require:c,loadChunk:()=>Promise.resolve()},P=new d.AppPageRouteModule({definition:{kind:e.RouteKind.APP_PAGE,page:"/[locale]/account/verify-email/page",pathname:"/[locale]/account/verify-email",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:N},distDir:".next",relativeProjectDir:""});async function Q(a,b,d){var M,R,S,T,U;d.requestMeta&&(0,h.setRequestMeta)(a,d.requestMeta),P.isDev&&(0,h.addRequestMeta)(a,"devRequestTimingInternalsEnd",process.hrtime.bigint());let V=!!(0,h.getRequestMeta)(a,"minimalMode"),W="/[locale]/account/verify-email/page";"/index"===W&&(W="/");let X=await P.prepare(a,b,{srcPage:W,multiZoneDraftMode:!1});if(!X)return b.statusCode=400,b.end("Bad Request"),null==d.waitUntil||d.waitUntil.call(d,Promise.resolve()),null;let{buildId:Y,query:Z,params:$,pageIsDynamic:_,buildManifest:aa,nextFontManifest:ab,reactLoadableManifest:ac,serverActionsManifest:ad,clientReferenceManifest:ae,subresourceIntegrityManifest:af,prerenderManifest:ag,isDraftMode:ah,resolvedPathname:ai,revalidateOnlyGenerated:aj,routerServerContext:ak,nextConfig:al,parsedUrl:am,interceptionRoutePatterns:an,deploymentId:ao,clientAssetToken:ap}=X,aq=(0,r.normalizeAppPath)(W),{isOnDemandRevalidate:ar}=X,as=al.experimental.ppr&&!al.cacheComponents&&(0,K.isInterceptionRouteAppPath)(ai)?null:P.match(ai,ag),at=(null==as?void 0:as.route)??null,au=!!ag.routes[ai],av=a.headers["user-agent"]||"",aw=(0,u.getBotType)(av),ax=(0,q.isHtmlBotRequest)(a),ay=(0,h.getRequestMeta)(a,"isPrefetchRSCRequest")??"1"===a.headers[t.NEXT_ROUTER_PREFETCH_HEADER],az=(0,h.getRequestMeta)(a,"isRSCRequest")??(0,n.f)(a.headers[t.RSC_HEADER]),aA=(0,s.getIsPossibleServerAction)(a),aB=(0,m.checkIsAppPPREnabled)(al.experimental.ppr),aC=a.headers[y.NEXT_RESUME_STATE_LENGTH_HEADER];if(!(0,h.getRequestMeta)(a,"postponed")&&V&&aB&&aA&&aC&&"string"==typeof aC){let e=parseInt(aC,10),{maxPostponedStateSize:f,maxPostponedStateSizeBytes:g}=(0,E.getMaxPostponedStateSize)(al.experimental.maxPostponedStateSize);if(!isNaN(e)&&e>0){if(e>g)return b.statusCode=413,b.end((0,E.getPostponedStateExceededErrorMessage)(f)),null==d.waitUntil||d.waitUntil.call(d,Promise.resolve()),null;let i="1 MB",j=(null==(U=al.experimental.serverActions)?void 0:U.bodySizeLimit)??i,k=e+(j!==i?c(95726).parse(j):1048576),l=await (0,E.readBodyWithSizeLimit)(a,k);if(null===l)return b.statusCode=413,b.end("Request body exceeded limit. To configure the body size limit for Server Actions, see: https://nextjs.org/docs/app/api-reference/next-config-js/serverActions#bodysizelimit"),null==d.waitUntil||d.waitUntil.call(d,Promise.resolve()),null;if(l.length>=e){let b=l.subarray(0,e).toString("utf8");(0,h.addRequestMeta)(a,"postponed",b);let c=l.subarray(e);(0,h.addRequestMeta)(a,"actionBody",c)}else throw Object.defineProperty(Error(`invariant: expected ${e} bytes of postponed state but only received ${l.length} bytes`),"__NEXT_ERROR_CODE",{value:"E979",enumerable:!1,configurable:!0})}}if(!(0,h.getRequestMeta)(a,"postponed")&&aB&&"1"===a.headers[y.NEXT_RESUME_HEADER]&&"POST"===a.method){let{maxPostponedStateSize:c,maxPostponedStateSizeBytes:e}=(0,E.getMaxPostponedStateSize)(al.experimental.maxPostponedStateSize),f=await (0,E.readBodyWithSizeLimit)(a,e);if(null===f)return b.statusCode=413,b.end((0,E.getPostponedStateExceededErrorMessage)(c)),null==d.waitUntil||d.waitUntil.call(d,Promise.resolve()),null;let g=f.toString("utf8");(0,h.addRequestMeta)(a,"postponed",g)}let aD=!0===P.isDev||!0===al.experimental.exposeTestingApiInProductionBuild,aE=aD&&("1"===a.headers[t.NEXT_INSTANT_PREFETCH_HEADER]||!(0,n.f)(a.headers[t.RSC_HEADER])&&"string"==typeof a.headers.cookie&&a.headers.cookie.includes(t.NEXT_INSTANT_TEST_COOKIE+"=")),aF=(aB||aE)&&((null==(M=ag.routes[aq]??ag.dynamicRoutes[aq])?void 0:M.renderingMode)==="PARTIALLY_STATIC"||aE&&(aD||(null==ak?void 0:ak.experimentalTestProxy)===!0)),aG=aE&&aF,aH=aG&&!0===P.isDev,aI=!1,aJ=aF?(0,h.getRequestMeta)(a,"postponed"):void 0,aK=null==(R=ag.routes[ai])?void 0:R.prefetchDataRoute,aL=aF&&az&&!ay&&!aK;V&&(aL=aL&&!!aJ);let aM=(0,h.getRequestMeta)(a,"segmentPrefetchRSCRequest"),aN=(!aw||!aF)&&(!av||(0,q.shouldServeStreamingMetadata)(av,al.htmlLimitedBots)),aO=!!((at||au||ag.routes[aq])&&!(aw&&aF)),aP=aF&&!0===al.cacheComponents,aQ=!0===P.isDev||!aO||"string"==typeof aJ||(aP&&(0,h.getRequestMeta)(a,"onCacheEntryV2")?aL&&!V:aL),aR=!!aw&&aF,aS=(null==at?void 0:at.remainingPrerenderableParams)??[],aT=(null==at?void 0:at.fallback)===null&&((null==(S=at.fallbackRootParams)?void 0:S.length)??0)>0,aU=null;if(!ah&&aO&&!aQ&&!aA&&!aJ&&!aL){let a=as?"string"==typeof(null==at?void 0:at.fallback)?at.fallback:as.source:null;if(!0===al.experimental.partialFallbacks&&a&&(null==at?void 0:at.fallbackRouteParams)&&!aT){if(aS.length>0){let b,c=(b=new Map(aS.map(a=>[a.paramName,a])),a.split("/").map(a=>{let c=(0,L.getSegmentParam)(a);if(!c)return a;let d=b.get(c.paramName);if(!d)return a;let e=null==$?void 0:$[d.paramName];if(!e)return a;let f=Array.isArray(e)?e.map(a=>encodeURIComponent(a)).join("/"):encodeURIComponent(e);return a.replace((0,o.buildDynamicSegmentPlaceholder)(d),f)}).join("/")||"/");aU=c!==a?c:null}}else aU=ai}let aV=aU;!aV&&(P.isDev||aO&&_&&(null==at?void 0:at.fallbackRouteParams)&&!aA)&&(aV=ai),P.isDev||ah||!aO||!az||aL||(0,k.d)(a.headers);let aW={...G,tree:N,handler:Q,routeModule:P,__next_app__:O};ad&&ae&&(0,p.setManifestsSingleton)({page:W,clientReferenceManifest:ae,serverActionsManifest:ad});let aX=a.method||"GET",aY=(0,g.getTracer)(),aZ=aY.getActiveScopeSpan(),a$=!!(null==ak?void 0:ak.isWrappedByNextServer),a_=!0===al.experimental.partialFallbacks&&aS.length>0?(null==at||null==(T=at.fallbackRouteParams)?void 0:T.filter(a=>!aS.some(b=>b.paramName===a.paramName)))??[]:[],a0=async()=>((null==ak?void 0:ak.render404)?await ak.render404(a,b,am,!1):b.end("This page could not be found"),null);try{let k,m=P.getVaryHeader(ai,an);b.setHeader("Vary",m);let n=async(c,d)=>{let e=new l.NodeNextRequest(a),f=new l.NodeNextResponse(b);return P.render(e,f,d).finally(()=>{if(!c)return;c.setAttributes({"http.status_code":b.statusCode,"next.rsc":!1});let a=aY.getRootSpanAttributes();if(!a)return;if(a.get("next.span_type")!==i.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${a.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let d=a.get("next.route");if(d){let a=`${aX} ${d}`;c.setAttributes({"next.route":d,"http.route":d,"next.span_name":a}),c.updateName(a),k&&k!==c&&(k.setAttribute("http.route",d),k.updateName(a))}else c.updateName(`${aX} ${W}`)})},p=(0,h.getRequestMeta)(a,"incrementalCache")||await P.getIncrementalCache(a,al,ag,V);null==p||p.resetRequestCache(),globalThis.__incrementalCache=p;let q=async({span:e,postponed:f,fallbackRouteParams:g,forceStaticRender:i})=>{let k={query:Z,params:$,page:aq,sharedContext:{buildId:Y,deploymentId:ao,clientAssetToken:ap},serverComponentsHmrCache:(0,h.getRequestMeta)(a,"serverComponentsHmrCache"),fallbackRouteParams:g,renderOpts:{App:()=>null,Document:()=>null,pageConfig:{},ComponentMod:aW,Component:(0,j.T)(aW),params:$,routeModule:P,page:W,postponed:f,shouldWaitOnAllReady:aR,serveStreamingMetadata:aN,supportsDynamicResponse:"string"==typeof f||aQ,buildManifest:aa,nextFontManifest:ab,reactLoadableManifest:ac,subresourceIntegrityManifest:af,setCacheStatus:null==ak?void 0:ak.setCacheStatus,setIsrStatus:null==ak?void 0:ak.setIsrStatus,setReactDebugChannel:null==ak?void 0:ak.setReactDebugChannel,sendErrorsToBrowser:null==ak?void 0:ak.sendErrorsToBrowser,dir:c(33873).join(process.cwd(),P.relativeProjectDir),isDraftMode:ah,botType:aw,isOnDemandRevalidate:ar,isPossibleServerAction:aA,assetPrefix:al.assetPrefix,nextConfigOutput:al.output,crossOrigin:al.crossOrigin,trailingSlash:al.trailingSlash,images:al.images,previewProps:ag.preview,enableTainting:al.experimental.taint,htmlLimitedBots:al.htmlLimitedBots,reactMaxHeadersLength:al.reactMaxHeadersLength,multiZoneDraftMode:!1,incrementalCache:p,cacheLifeProfiles:al.cacheLife,basePath:al.basePath,serverActions:al.experimental.serverActions,logServerFunctions:"object"==typeof al.logging&&!!al.logging.serverFunctions,...aG||aH||aI?{isBuildTimePrerendering:!0,supportsDynamicResponse:!1,isStaticGeneration:!0,isDebugDynamicAccesses:aH}:{},cacheComponents:!!al.cacheComponents,experimental:{isRoutePPREnabled:aF,expireTime:al.expireTime,staleTimes:al.experimental.staleTimes,dynamicOnHover:!!al.experimental.dynamicOnHover,optimisticRouting:!!al.experimental.optimisticRouting,inlineCss:!!al.experimental.inlineCss,prefetchInlining:al.experimental.prefetchInlining??!1,authInterrupts:!!al.experimental.authInterrupts,cachedNavigations:!!al.experimental.cachedNavigations,clientTraceMetadata:al.experimental.clientTraceMetadata||[],clientParamParsingOrigins:al.experimental.clientParamParsingOrigins,maxPostponedStateSizeBytes:(0,D.parseMaxPostponedStateSize)(al.experimental.maxPostponedStateSize)},waitUntil:d.waitUntil,onClose:a=>{b.on("close",a)},onAfterTaskError:()=>{},onInstrumentationRequestError:(b,c,d,e)=>P.onRequestError(a,b,d,e,ak),err:(0,h.getRequestMeta)(a,"invokeError")}};i&&(k.renderOpts.supportsDynamicResponse=!1);let l=await n(e,k),{metadata:m}=l,{cacheControl:o,headers:q={},fetchTags:r,fetchMetrics:s}=m;if(r&&(q[y.NEXT_CACHE_TAGS_HEADER]=r),a.fetchMetrics=s,aO&&(null==o?void 0:o.revalidate)===0&&!P.isDev&&!aF){let a=m.staticBailoutInfo,b=Object.defineProperty(Error(`Page changed from static to dynamic at runtime ${ai}${(null==a?void 0:a.description)?`, reason: ${a.description}`:""}
see more here https://nextjs.org/docs/messages/app-static-to-dynamic-error`),"__NEXT_ERROR_CODE",{value:"E132",enumerable:!1,configurable:!0});if(null==a?void 0:a.stack){let c=a.stack;b.stack=b.message+c.substring(c.indexOf("\n"))}throw b}return{value:{kind:v.CachedRouteKind.APP_PAGE,html:l,headers:q,rscData:m.flightData,postponed:m.postponed,status:m.statusCode,segmentData:m.segmentData},cacheControl:o}},r=async({hasResolved:c,previousCacheEntry:g,isRevalidating:i,span:j,forceStaticRender:k=!1})=>{let l=!1===P.isDev,m=c||b.writableEnded;try{var n;let f;if(ar&&aj&&!g&&!V)return(null==ak?void 0:ak.render404)?await ak.render404(a,b):(b.statusCode=404,b.end("This page could not be found")),null;if(at&&(f=(0,w.parseFallbackField)(at.fallback)),!0===al.experimental.partialFallbacks&&(null==at?void 0:at.fallback)===null&&!aT&&aS.length>0&&(f=w.FallbackMode.PRERENDER),f===w.FallbackMode.PRERENDER&&(0,u.isBot)(av)&&(!aF||ax)&&(f=w.FallbackMode.BLOCKING_STATIC_RENDER),(null==g?void 0:g.isStale)===-1&&(ar=!0),ar&&(f!==w.FallbackMode.NOT_FOUND||g)&&(f=w.FallbackMode.BLOCKING_STATIC_RENDER),!V&&f!==w.FallbackMode.BLOCKING_STATIC_RENDER&&aV&&!m&&!ah&&_&&(l||!au)){if((l||at)&&f===w.FallbackMode.NOT_FOUND){if(al.adapterPath)return await a0();throw new C.NoFallbackError}if(aF&&(al.cacheComponents?!aL:!az)){let b=l&&"string"==typeof(null==at?void 0:at.fallback)?at.fallback:aq,f=(l||aG)&&(null==at?void 0:at.fallbackRouteParams)?(0,o.createOpaqueFallbackRouteParams)(at.fallbackRouteParams):aI?(0,o.getFallbackRouteParams)(aq,P):null;aG&&f&&(0,h.addRequestMeta)(a,"fallbackParams",f);let g=await P.handleResponse({cacheKey:b,req:a,nextConfig:al,routeKind:e.RouteKind.APP_PAGE,isFallback:!0,prerenderManifest:ag,isRoutePPREnabled:aF,responseGenerator:async()=>q({span:j,postponed:void 0,fallbackRouteParams:f,forceStaticRender:!0}),waitUntil:d.waitUntil,isMinimalMode:V});if(null===g)return null;if(g)return V||!aF||!(aS.length>0)||!0!==al.experimental.partialFallbacks||!aU||!p||ar||aI||aD||aE||ay||(0,J.scheduleOnNextTick)(async()=>{let b=P.getResponseCache(a);try{await b.revalidate(aU,p,aF,!1,a=>q({span:a.span,postponed:void 0,fallbackRouteParams:a_.length>0?(0,o.createOpaqueFallbackRouteParams)(a_):null,forceStaticRender:!0}),null,c,d.waitUntil)}catch(a){console.error("Error revalidating the page in the background",a)}}),delete g.cacheControl,g}}let s=ar||i||!aJ?void 0:aJ;if(aP&&!V&&p&&(aL||aA)&&!k){let b=await p.get(ai,{kind:v.IncrementalCacheKind.APP_PAGE,isRoutePPREnabled:!0,isFallback:!1});b&&b.value&&b.value.kind===v.CachedRouteKind.APP_PAGE&&(s=b.value.postponed,b&&(-1===b.isStale||!0===b.isStale)&&(0,J.scheduleOnNextTick)(async()=>{let b=P.getResponseCache(a);try{await b.revalidate(ai,p,aF,!1,a=>r({...a,forceStaticRender:!0}),null,c,d.waitUntil)}catch(a){console.error("Error revalidating the page in the background",a)}}))}if((aG||aH)&&void 0!==s)return{cacheControl:{revalidate:1,expire:void 0},value:{kind:v.CachedRouteKind.PAGES,html:x.default.EMPTY,pageData:{},headers:void 0,status:void 0}};let t=!P.isDev&&_&&(null==at?void 0:at.fallbackRouteParams)?(0,o.getPlaceholderFallbackRouteParams)($,at.fallbackRouteParams):null,y=t&&t.length>0?t:null==at?void 0:at.fallbackRouteParams,z=null!=t&&t.length>0,A=null;if(al.cacheComponents&&(null==at?void 0:at.fallbackRouteParams)){let b=(0,h.getRequestMeta)(a,"resolvedRouteParamKeys");b&&b.size>0&&(A=at.fallbackRouteParams.filter(a=>!b.has(a.paramName)))}let B=(l&&(0,h.getRequestMeta)(a,"renderFallbackShell")||z||aG&&!au)&&y?(0,o.createOpaqueFallbackRouteParams)(y):A&&A.length>0&&A.length<((null==at||null==(n=at.fallbackRouteParams)?void 0:n.length)??0)?(0,o.createOpaqueFallbackRouteParams)(A):aI?(0,o.getFallbackRouteParams)(aq,P):null;if((l||aG)&&al.cacheComponents&&!au&&(null==at?void 0:at.fallbackRouteParams)){let b=(0,o.createOpaqueFallbackRouteParams)(y??at.fallbackRouteParams);b&&(0,h.addRequestMeta)(a,"fallbackParams",b)}return q({span:j,postponed:s,fallbackRouteParams:B,forceStaticRender:k})}catch(b){throw(null==g?void 0:g.isStale)&&await P.onRequestError(a,b,{routerKind:"App Router",routePath:W,routeType:"render",revalidateReason:(0,f.c)({isStaticGeneration:aO,isOnDemandRevalidate:ar})},!1,ak),b}},s=async c=>{var f,g,i,j,k,l;let m,n=await P.handleResponse({cacheKey:aU,responseGenerator:a=>r({span:c,...a}),routeKind:e.RouteKind.APP_PAGE,isOnDemandRevalidate:ar,isRoutePPREnabled:aF,req:a,nextConfig:al,prerenderManifest:ag,waitUntil:d.waitUntil,isMinimalMode:V});if(ah&&b.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate"),P.isDev&&b.setHeader("Cache-Control","no-cache, must-revalidate"),!n){if(aU)throw Object.defineProperty(Error("invariant: cache entry required but not generated"),"__NEXT_ERROR_CODE",{value:"E62",enumerable:!1,configurable:!0});return null}if((null==(f=n.value)?void 0:f.kind)!==v.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant app-page handler received invalid cache entry ${null==(i=n.value)?void 0:i.kind}`),"__NEXT_ERROR_CODE",{value:"E707",enumerable:!1,configurable:!0});let o="string"==typeof n.value.postponed;az&&!aA&&ao&&b.setHeader(y.NEXT_NAV_DEPLOYMENT_ID_HEADER,ao),aO&&!aL&&(!o||ay)&&(V||b.setHeader("x-nextjs-cache",ar?"REVALIDATED":n.isMiss?"MISS":n.isStale?"STALE":"HIT"),b.setHeader(t.NEXT_IS_PRERENDER_HEADER,"1"));let{value:p}=n;if(aJ)m={revalidate:0,expire:void 0};else if(aL)m={revalidate:0,expire:void 0};else if(!P.isDev)if(ah)m={revalidate:0,expire:void 0};else if(aO){if(n.cacheControl)if("number"==typeof n.cacheControl.revalidate){if(n.cacheControl.revalidate<1)throw Object.defineProperty(Error(`Invalid revalidate configuration provided: ${n.cacheControl.revalidate} < 1`),"__NEXT_ERROR_CODE",{value:"E22",enumerable:!1,configurable:!0});m={revalidate:n.cacheControl.revalidate,expire:(null==(j=n.cacheControl)?void 0:j.expire)??al.expireTime}}else m={revalidate:y.CACHE_ONE_YEAR_SECONDS,expire:void 0}}else b.getHeader("Cache-Control")||(m={revalidate:0,expire:void 0});if(n.cacheControl=m,"string"==typeof aM&&(null==p?void 0:p.kind)===v.CachedRouteKind.APP_PAGE&&p.segmentData){b.setHeader(t.NEXT_DID_POSTPONE_HEADER,"2");let c=null==(k=p.headers)?void 0:k[y.NEXT_CACHE_TAGS_HEADER];V&&aO&&c&&"string"==typeof c&&b.setHeader(y.NEXT_CACHE_TAGS_HEADER,c);let d=p.segmentData.get(aM);return void 0!==d?(0,B.sendRenderResult)({req:a,res:b,generateEtags:al.generateEtags,poweredByHeader:al.poweredByHeader,result:x.default.fromStatic(d,t.RSC_CONTENT_TYPE_HEADER),cacheControl:n.cacheControl}):(b.statusCode=204,(0,B.sendRenderResult)({req:a,res:b,generateEtags:al.generateEtags,poweredByHeader:al.poweredByHeader,result:x.default.EMPTY,cacheControl:n.cacheControl}))}let s=aP?(0,h.getRequestMeta)(a,"onCacheEntryV2")??(0,h.getRequestMeta)(a,"onCacheEntry"):(0,h.getRequestMeta)(a,"onCacheEntry");if(s){let b=(0,h.getRequestMeta)(a,"initURL")??a.url,c=b?(null==(l=(0,F.parseUrl)(b))?void 0:l.pathname)??b:void 0;if(await s(n,{url:c}))return null}if(p.headers){let a={...p.headers};for(let[c,d]of(V&&aO||delete a[y.NEXT_CACHE_TAGS_HEADER],Object.entries(a)))if(void 0!==d)if(Array.isArray(d))for(let a of d)b.appendHeader(c,a);else"number"==typeof d&&(d=d.toString()),b.appendHeader(c,d)}let u=null==(g=p.headers)?void 0:g[y.NEXT_CACHE_TAGS_HEADER];if(V&&aO&&u&&"string"==typeof u&&b.setHeader(y.NEXT_CACHE_TAGS_HEADER,u),!p.status||az&&aF||(b.statusCode=p.status),!V&&p.status&&H.RedirectStatusCode[p.status]&&az&&(b.statusCode=200),o&&!aL&&b.setHeader(t.NEXT_DID_POSTPONE_HEADER,"1"),az&&!ah){if(void 0===p.rscData){if(p.html.contentType!==t.RSC_CONTENT_TYPE_HEADER)if(al.cacheComponents)return b.statusCode=404,(0,B.sendRenderResult)({req:a,res:b,generateEtags:al.generateEtags,poweredByHeader:al.poweredByHeader,result:x.default.EMPTY,cacheControl:n.cacheControl});else throw Object.defineProperty(new I.InvariantError(`Expected RSC response, got ${p.html.contentType}`),"__NEXT_ERROR_CODE",{value:"E789",enumerable:!1,configurable:!0});return(0,B.sendRenderResult)({req:a,res:b,generateEtags:al.generateEtags,poweredByHeader:al.poweredByHeader,result:p.html,cacheControl:n.cacheControl})}return(0,B.sendRenderResult)({req:a,res:b,generateEtags:al.generateEtags,poweredByHeader:al.poweredByHeader,result:x.default.fromStatic(p.rscData,t.RSC_CONTENT_TYPE_HEADER),cacheControl:n.cacheControl})}let w=p.html;if(aE&&aG){let c=!0===P.isDev?crypto.randomUUID():null;return w.pipeThrough(await (0,A.createInstantTestScriptInsertionTransformStream)(c)),(0,B.sendRenderResult)({req:a,res:b,generateEtags:al.generateEtags,poweredByHeader:al.poweredByHeader,result:w,cacheControl:{revalidate:0,expire:void 0}})}if(!o||V||az)return(0,B.sendRenderResult)({req:a,res:b,generateEtags:al.generateEtags,poweredByHeader:al.poweredByHeader,result:w,cacheControl:n.cacheControl});if(aG||aH)return w.push(new ReadableStream({start(a){a.enqueue(z.ENCODED_TAGS.CLOSED.BODY_AND_HTML),a.close()}})),(0,B.sendRenderResult)({req:a,res:b,generateEtags:al.generateEtags,poweredByHeader:al.poweredByHeader,result:w,cacheControl:{revalidate:0,expire:void 0}});let C=new TransformStream;return w.push(C.readable),q({span:c,postponed:p.postponed,fallbackRouteParams:null,forceStaticRender:!1}).then(async a=>{var b,c;if(!a)throw Object.defineProperty(Error("Invariant: expected a result to be returned"),"__NEXT_ERROR_CODE",{value:"E463",enumerable:!1,configurable:!0});if((null==(b=a.value)?void 0:b.kind)!==v.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant: expected a page response, got ${null==(c=a.value)?void 0:c.kind}`),"__NEXT_ERROR_CODE",{value:"E305",enumerable:!1,configurable:!0});await a.value.html.pipeTo(C.writable)}).catch(a=>{C.writable.abort(a).catch(a=>{console.error("couldn't abort transformer",a)})}),(0,B.sendRenderResult)({req:a,res:b,generateEtags:al.generateEtags,poweredByHeader:al.poweredByHeader,result:w,cacheControl:{revalidate:0,expire:void 0}})};if(!a$||!aZ)return k=aY.getActiveScopeSpan(),await aY.withPropagatedContext(a.headers,()=>aY.trace(i.BaseServerSpan.handleRequest,{spanName:`${aX} ${W}`,kind:g.SpanKind.SERVER,attributes:{"http.method":aX,"http.target":a.url}},s),void 0,!a$);await s(aZ)}catch(b){throw b instanceof C.NoFallbackError||await P.onRequestError(a,b,{routerKind:"App Router",routePath:W,routeType:"render",revalidateReason:(0,f.c)({isStaticGeneration:aO,isOnDemandRevalidate:ar})},!1,ak),b}}},58393:(a,b,c)=>{Promise.resolve().then(c.bind(c,36115))},63033:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},70722:a=>{"use strict";a.exports=require("next/dist/shared/lib/invariant-error")},71545:(a,b,c)=>{Promise.resolve().then(c.bind(c,5513))},77068:a=>{"use strict";a.exports=require("next/dist/shared/lib/size-limit")},86439:a=>{"use strict";a.exports=require("next/dist/shared/lib/no-fallback-error.external")},90443:(a,b,c)=>{Promise.resolve().then(c.bind(c,79220)),Promise.resolve().then(c.bind(c,62626)),Promise.resolve().then(c.bind(c,25297))},93592:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>j,metadata:()=>h});var d=c(5735),e=c(91986),f=c(95788),g=c(36115);let h={robots:(0,f.ZX)()},i=[{href:"/account/orders",labelKey:"orders",icon:"Package"},{href:"/account/addresses",labelKey:"addresses",icon:"MapPin"},{href:"/account/profile",labelKey:"profile",icon:"User"}];async function j({children:a}){return(0,d.jsxs)("div",{className:"container mx-auto px-4 py-30",children:[(0,d.jsx)("div",{className:"md:hidden mb-6",children:(0,d.jsx)(e.Suspense,{children:(0,d.jsx)(g.AccountNavLinks,{items:i,layout:"horizontal"})})}),(0,d.jsxs)("div",{className:"flex gap-8",children:[(0,d.jsx)("aside",{className:"hidden md:block w-64 shrink-0",children:(0,d.jsx)(e.Suspense,{children:(0,d.jsx)(g.AccountNavLinks,{items:i,layout:"vertical"})})}),(0,d.jsx)("main",{className:"flex-1 min-w-0",children:a})]})]})}},96019:(a,b,c)=>{Promise.resolve().then(c.bind(c,56278)),Promise.resolve().then(c.bind(c,86392)),Promise.resolve().then(c.bind(c,85939))}};var b=require("../../../../webpack-runtime.js");b.C(a);var c=b.X(0,[9602,319,838,5623,1898],()=>b(b.s=54100));module.exports=c})();