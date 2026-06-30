exports.id=1898,exports.ids=[1898],exports.modules={3084:(a,b,c)=>{"use strict";c.d(b,{A:()=>e,D:()=>f});var d=c(50920);let e=(0,d.U)(`
    fragment ProductCard on SearchResult {
        productId
        productName
        slug
        productAsset {
            id
            preview
        }
        priceWithTax {
            __typename
            ... on PriceRange {
                min
                max
            }
            ... on SinglePrice {
                value
            }
        }
        currencyCode
    }
`),f=(0,d.U)(`
    fragment ActiveCustomer on Customer {
        id
        firstName
        lastName
        emailAddress
    }
`)},5143:(a,b,c)=>{"use strict";c.d(b,{V2:()=>g});var d=c(68447),e=c(69325);let{Link:f,redirect:g,usePathname:h,useRouter:i,getPathname:j}=(0,d.A)(e.D)},5397:(a,b,c)=>{"use strict";c.d(b,{SearchInput:()=>k});var d=c(48249),e=c(67484),f=c(19099),g=c(88872),h=c(29813),i=c(88877),j=c(77360);function k(){let a=(0,j.c)("Navigation"),b=(0,g.rd)(),c=(0,f.useSearchParams)(),[k,l]=(0,e.useTransition)(),[m,n]=(0,e.useState)(c.get("q")||"");return(0,d.jsxs)("form",{onSubmit:a=>{a.preventDefault(),m.trim()&&l(()=>{b.push(`/search?q=${encodeURIComponent(m.trim())}`)})},className:"relative",children:[(0,d.jsx)(h.A,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"}),(0,d.jsx)(i.p,{type:"search",placeholder:a("searchProducts"),className:"pl-9 w-64 bg-transparent",value:m,onChange:a=>n(a.target.value),disabled:k})]})}},6393:(a,b,c)=>{"use strict";c.d(b,{U:()=>d});let d=(0,c(70724).Se)()},7716:(a,b,c)=>{"use strict";c.d(b,{CG:()=>p,Fm:()=>u,cj:()=>o,h:()=>t,kN:()=>q,qp:()=>v});var d=c(48249);c(67484);var e=c(6139),f=c(51937),g=c(17193),h=c(98823),i=c(44107),j=c(48939),k=c(26829),l=c(14490),m=c(25297),n=c(45535);function o({...a}){return(0,d.jsx)(e.D,{"data-slot":"sheet",...a})}function p({...a}){return(0,d.jsx)(f.z,{"data-slot":"sheet-trigger",...a})}function q({...a}){return(0,d.jsx)(g.H,{"data-slot":"sheet-close",...a})}function r({...a}){return(0,d.jsx)(h.Z,{"data-slot":"sheet-portal",...a})}function s({className:a,...b}){return(0,d.jsx)(i.X,{"data-slot":"sheet-overlay",className:(0,l.cn)("fixed inset-0 z-50 bg-black/10 transition-opacity duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-backdrop-filter:backdrop-blur-xs",a),...b})}function t({className:a,children:b,side:c="right",showCloseButton:e=!0,...f}){return(0,d.jsxs)(r,{children:[(0,d.jsx)(s,{}),(0,d.jsxs)(j.h,{"data-slot":"sheet-content","data-side":c,className:(0,l.cn)("fixed z-50 flex flex-col gap-4 bg-background bg-clip-padding text-sm shadow-lg transition duration-200 ease-in-out data-ending-style:opacity-0 data-starting-style:opacity-0 data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=bottom]:data-ending-style:translate-y-[2.5rem] data-[side=bottom]:data-starting-style:translate-y-[2.5rem] data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=left]:data-ending-style:translate-x-[-2.5rem] data-[side=left]:data-starting-style:translate-x-[-2.5rem] data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=right]:data-ending-style:translate-x-[2.5rem] data-[side=right]:data-starting-style:translate-x-[2.5rem] data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-[side=top]:data-ending-style:translate-y-[-2.5rem] data-[side=top]:data-starting-style:translate-y-[-2.5rem] data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm",a),...f,children:[b,e&&(0,d.jsxs)(g.H,{"data-slot":"sheet-close",render:(0,d.jsx)(m.Button,{variant:"ghost",className:"absolute top-4 right-4",size:"icon-sm"}),children:[(0,d.jsx)(n.A,{}),(0,d.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})}function u({className:a,...b}){return(0,d.jsx)("div",{"data-slot":"sheet-header",className:(0,l.cn)("flex flex-col gap-1.5 p-4",a),...b})}function v({className:a,...b}){return(0,d.jsx)(k.L,{"data-slot":"sheet-title",className:(0,l.cn)("font-medium text-foreground",a),...b})}},8979:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>e});var d=c(5735);function e(){return(0,d.jsxs)("div",{style:{fontFamily:"system-ui, sans-serif",textAlign:"center",padding:"4rem 1rem"},children:[(0,d.jsx)("h1",{style:{fontSize:"4rem",fontWeight:700,marginBottom:"0.5rem"},children:"404"}),(0,d.jsx)("p",{style:{fontSize:"1.25rem",color:"#666"},children:"This page could not be found."})]})}},9062:(a,b,c)=>{"use strict";c.d(b,{Toaster:()=>l});var d=c(48249),e=c(8696),f=c(90707),g=c(99646),h=c(77265),i=c(34460),j=c(49393),k=c(69357);let l=({...a})=>{let{theme:b="system"}=(0,e.D)();return(0,d.jsx)(f.l$,{theme:b,className:"toaster group",icons:{success:(0,d.jsx)(g.A,{className:"size-4"}),info:(0,d.jsx)(h.A,{className:"size-4"}),warning:(0,d.jsx)(i.A,{className:"size-4"}),error:(0,d.jsx)(j.A,{className:"size-4"}),loading:(0,d.jsx)(k.A,{className:"size-4 animate-spin"})},style:{"--normal-bg":"var(--popover)","--normal-text":"var(--popover-foreground)","--normal-border":"var(--border)","--border-radius":"var(--radius)"},toastOptions:{classNames:{toast:"cn-toast"}},...a})}},11060:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>l});var d=c(5735),e=c(63195),f=c(85939),g=c(78236),h=c(72369),i=c(22830),j=c(18890),k=c(56035);async function l(){let a=await (0,e.oo)(),b=await (0,e.KB)({locale:a,namespace:"NotFound"}),c=[];try{c=await (0,k.dl)(a)}catch{}return(0,d.jsx)("div",{className:"min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-16",children:(0,d.jsxs)("div",{className:"text-center space-y-8 max-w-lg",children:[(0,d.jsx)("div",{className:"flex justify-center",children:(0,d.jsx)("div",{className:"rounded-full bg-muted p-6",children:(0,d.jsx)(g.A,{className:"h-16 w-16 text-muted-foreground"})})}),(0,d.jsxs)("div",{className:"space-y-3",children:[(0,d.jsx)("h1",{className:"text-7xl font-bold text-primary",children:"404"}),(0,d.jsx)("h2",{className:"text-2xl font-semibold",children:b("title")}),(0,d.jsx)("p",{className:"text-muted-foreground max-w-sm mx-auto",children:b("message")})]}),(0,d.jsxs)("div",{className:"flex gap-3 justify-center",children:[(0,d.jsxs)(f.Button,{nativeButton:!1,render:(0,d.jsx)(j.N_,{href:"/"}),size:"lg",children:[(0,d.jsx)(h.A,{className:"mr-2 h-4 w-4"}),b("goHome")]}),(0,d.jsxs)(f.Button,{nativeButton:!1,render:(0,d.jsx)(j.N_,{href:"/search"}),variant:"outline",size:"lg",children:[(0,d.jsx)(i.A,{className:"mr-2 h-4 w-4"}),b("browseProducts")]})]}),c.length>0&&(0,d.jsxs)("div",{className:"pt-4 border-t",children:[(0,d.jsx)("p",{className:"text-sm font-medium text-muted-foreground mb-3",children:b("popularCollections")}),(0,d.jsx)("div",{className:"flex flex-wrap gap-2 justify-center",children:c.slice(0,6).map(a=>(0,d.jsx)(f.Button,{render:(0,d.jsx)(j.N_,{href:`/collection/${a.slug}`}),nativeButton:!1,variant:"outline",size:"sm",className:"rounded-full",children:a.name},a.id))})]})]})})}},13284:(a,b,c)=>{"use strict";c.d(b,{A:()=>f});var d=c(41330),e=c(69325);let f=(0,d.A)(async({requestLocale:a})=>{let b=await a;return b&&e.D.locales.includes(b)||(b=e.D.defaultLocale),{locale:b,messages:(await c(26106)(`./${b}.json`)).default}})},14490:(a,b,c)=>{"use strict";c.d(b,{cn:()=>f});var d=c(99314),e=c(74481);function f(...a){return(0,e.QP)((0,d.$)(a))}},16027:(a,b,c)=>{Promise.resolve().then(c.bind(c,65838)),Promise.resolve().then(c.bind(c,98406)),Promise.resolve().then(c.bind(c,44782)),Promise.resolve().then(c.bind(c,22092)),Promise.resolve().then(c.bind(c,11468)),Promise.resolve().then(c.bind(c,34686)),Promise.resolve().then(c.bind(c,22430)),Promise.resolve().then(c.bind(c,44458)),Promise.resolve().then(c.bind(c,46506)),Promise.resolve().then(c.bind(c,53286)),Promise.resolve().then(c.bind(c,1862)),Promise.resolve().then(c.bind(c,90198)),Promise.resolve().then(c.bind(c,66042)),Promise.resolve().then(c.bind(c,47613)),Promise.resolve().then(c.bind(c,56278)),Promise.resolve().then(c.bind(c,86392)),Promise.resolve().then(c.t.bind(c,23318,23)),Promise.resolve().then(c.t.bind(c,58637,23)),Promise.resolve().then(c.t.bind(c,33071,23)),Promise.resolve().then(c.bind(c,93528)),Promise.resolve().then(c.bind(c,29228)),Promise.resolve().then(c.bind(c,86233)),Promise.resolve().then(c.bind(c,78966)),Promise.resolve().then(c.bind(c,32972)),Promise.resolve().then(c.bind(c,71363)),Promise.resolve().then(c.bind(c,26999)),Promise.resolve().then(c.bind(c,53868)),Promise.resolve().then(c.bind(c,82454)),Promise.resolve().then(c.bind(c,85939)),Promise.resolve().then(c.bind(c,64318)),Promise.resolve().then(c.bind(c,27728))},18562:(a,b,c)=>{"use strict";c.d(b,{T:()=>g,i:()=>f});let d={en:"en_US",de:"de_DE",sl:"sl_SI",it:"it_IT"},e={en:"en-US",de:"de-DE",sl:"sl-SI",it:"it-IT"};function f(a){return d[a]||"en_US"}function g(a){return e[a]||"en-US"}},18797:(a,b,c)=>{"use strict";c.d(b,{D9:()=>j,E5:()=>q,Fm:()=>f,Jg:()=>i,OH:()=>m,Q7:()=>o,QB:()=>r,YK:()=>p,aF:()=>k,d6:()=>s,iv:()=>n,l1:()=>g,pB:()=>l,vq:()=>h});var d=c(50920),e=c(3084);let f=(0,d.U)(`
    query GetTopCollections {
        collections(options: { filter: { parentId: { eq: "1" } } }) {
            items {
                id
                name
                slug
            }
        }
    }
`),g=(0,d.U)(`
    query GetActiveCustomer {
        activeCustomer {
            ...ActiveCustomer
        }
    }
`,[e.D]),h=(0,d.U)(`
    query SearchProducts($input: SearchInput!) {
        search(input: $input) {
            totalItems
            items {
                ...ProductCard
            }
            facetValues {
                count
                facetValue {
                    id
                    name
                    facet {
                        id
                        name
                    }
                }
            }
        }
    }
`,[e.A]),i=(0,d.U)(`
    query GetProductDetail($slug: String!) {
        product(slug: $slug) {
            id
            name
            description
            slug
            assets {
                id
                preview
                source
            }
            variants {
                id
                name
                sku
                priceWithTax
                stockLevel
                options {
                    id
                    code
                    name
                    groupId
                    group {
                        id
                        code
                        name
                    }
                }
            }
            optionGroups {
                id
                code
                name
                options {
                    id
                    code
                    name
                }
            }
            collections {
                id
                name
                slug
                parent {
                    id
                }
            }
        }
    }
`),j=(0,d.U)(`
    query GetActiveOrder {
        activeOrder {
            id
            code
            state
            totalQuantity
            subTotal
            subTotalWithTax
            shipping
            shippingWithTax
            total
            totalWithTax
            currencyCode
            couponCodes
            discounts {
                description
                amountWithTax
            }
            lines {
                id
                productVariant {
                    id
                    name
                    sku
                    product {
                        id
                        name
                        slug
                        featuredAsset {
                            id
                            preview
                        }
                    }
                }
                unitPriceWithTax
                quantity
                linePriceWithTax
            }
        }
    }
`),k=(0,d.U)(`
    query GetActiveOrderForCheckout {
        activeOrder {
            id
            code
            state
            totalQuantity
            subTotal
            subTotalWithTax
            shipping
            shippingWithTax
            total
            totalWithTax
            currencyCode
            couponCodes
            customer {
                id
                firstName
                lastName
                emailAddress
                phoneNumber
            }
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
            shippingLines {
                shippingMethod {
                    id
                    name
                    description
                }
                priceWithTax
            }
            discounts {
                description
                amountWithTax
            }
            lines {
                id
                productVariant {
                    id
                    name
                    sku
                    product {
                        id
                        name
                        slug
                        featuredAsset {
                            id
                            preview
                        }
                    }
                }
                unitPriceWithTax
                quantity
                linePriceWithTax
            }
        }
    }
`),l=(0,d.U)(`
    query GetCustomerAddresses {
        activeCustomer {
            id
            addresses {
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
    }
`),m=(0,d.U)(`
    query GetEligibleShippingMethods {
        eligibleShippingMethods {
            id
            name
            code
            description
            priceWithTax
        }
    }
`),n=(0,d.U)(`
    query GetEligiblePaymentMethods {
        eligiblePaymentMethods {
            id
            name
            code
            description
            isEligible
            eligibilityMessage
        }
    }
`),o=(0,d.U)(`
    query GetAvailableCountries {
        availableCountries {
            id
            code
            name
        }
    }
`),p=(0,d.U)(`
    query GetCustomerOrders($options: OrderListOptions) {
        activeCustomer {
            id
            orders(options: $options) {
                totalItems
                items {
                    id
                    code
                    state
                    totalWithTax
                    currencyCode
                    createdAt
                    updatedAt
                    lines {
                        id
                        productVariant {
                            id
                            name
                            product {
                                id
                                name
                                featuredAsset {
                                    id
                                    preview
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`),q=(0,d.U)(`
    query GetOrderDetail($code: String!) {
        orderByCode(code: $code) {
            id
            code
            state
            active
            createdAt
            updatedAt
            totalQuantity
            subTotal
            subTotalWithTax
            shipping
            shippingWithTax
            total
            totalWithTax
            currencyCode
            customer {
                id
                firstName
                lastName
                emailAddress
            }
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
            shippingLines {
                shippingMethod {
                    id
                    name
                    description
                }
                priceWithTax
            }
            payments {
                id
                method
                amount
                state
                transactionId
                createdAt
            }
            lines {
                id
                productVariant {
                    id
                    name
                    sku
                    product {
                        id
                        name
                        slug
                        featuredAsset {
                            id
                            preview
                        }
                    }
                }
                unitPriceWithTax
                quantity
                linePriceWithTax
            }
            discounts {
                description
                amountWithTax
            }
        }
    }
`),r=(0,d.U)(`
    query GetActiveChannel {
        activeChannel {
            id
            code
            defaultLanguageCode
            availableLanguageCodes
            defaultCurrencyCode
            availableCurrencyCodes
        }
    }
`),s=(0,d.U)(`
    query GetCollectionProducts($slug: String!, $input: SearchInput!) {
        collection(slug: $slug) {
            id
            name
            slug
            description
            featuredAsset {
                id
                preview
            }
        }
        search(input: $input) {
            totalItems
            items {
                ...ProductCard
            }
        }
    }
`,[e.A])},18890:(a,b,c)=>{"use strict";c.d(b,{N_:()=>f});var d=c(33836),e=c(37436);let{Link:f,redirect:g,usePathname:h,useRouter:i,getPathname:j}=(0,d.A)(e.D)},22106:(a,b,c)=>{"use strict";c.d(b,{LoginButton:()=>j});var d=c(48249),e=c(67484),f=c(99829);let g=(0,f.createServerReference)("00e00d7c4904e8de68c2bc572150c6d70bab9afe2e",f.callServer,void 0,f.findSourceMapURL,"logoutAction");var h=c(88872),i=c(77360);function j({isLoggedIn:a,...b}){let c=(0,i.c)("Navigation"),[f,k]=(0,e.useTransition)(),l=(0,h.rd)();return(0,d.jsx)("button",{...b,"aria-disabled":f,onClick:()=>{a?k(async()=>{await g()}):l.push("/sign-in")},children:c(a?"signOut":"signIn")})}},25297:(a,b,c)=>{"use strict";c.d(b,{Button:()=>i});var d=c(48249),e=c(15712),f=c(21654),g=c(14490);let h=(0,f.F)("group/button inline-flex shrink-0 items-center justify-center rounded-md border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/80",outline:"border-border bg-background shadow-xs hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",ghost:"hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",destructive:"bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 gap-1.5 px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",xs:"h-6 gap-1 rounded-[min(var(--radius-md),8px)] px-2 text-xs in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",sm:"h-8 gap-1 rounded-[min(var(--radius-md),10px)] px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",lg:"h-10 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",icon:"size-9","icon-xs":"size-6 rounded-[min(var(--radius-md),8px)] in-data-[slot=button-group]:rounded-md [&_svg:not([class*='size-'])]:size-3","icon-sm":"size-8 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-md","icon-lg":"size-10"}},defaultVariants:{variant:"default",size:"default"}});function i({className:a,variant:b="default",size:c="default",...f}){return(0,d.jsx)(e.$,{"data-slot":"button",className:(0,g.cn)(h({variant:b,size:c,className:a})),...f})}},26106:(a,b,c)=>{var d={"./de.json":[18917,8917],"./en.json":[76889,6889],"./es.json":[7484,7484],"./fr.json":[71072,1072],"./hr.json":[34550,4550],"./it.json":[68335,8335],"./sl.json":[63513,3513]};function e(a){if(!c.o(d,a))return Promise.resolve().then(()=>{var b=Error("Cannot find module '"+a+"'");throw b.code="MODULE_NOT_FOUND",b});var b=d[a],e=b[0];return c.e(b[1]).then(()=>c.t(e,19))}e.keys=()=>Object.keys(d),e.id=26106,a.exports=e},26764:(a,b,c)=>{"use strict";c.d(b,{O5:()=>f,QF:()=>h,c4:()=>g});var d=c(36042);let e=process.env.VENDURE_AUTH_TOKEN_COOKIE||"vendure-auth-token";async function f(a){(await (0,d.UL)()).set(e,a)}async function g(){let a=await (0,d.UL)();return a.get(e)?.value}async function h(){(await (0,d.UL)()).delete(e)}},26889:(a,b,c)=>{Promise.resolve().then(c.t.bind(c,81921,23))},26999:(a,b,c)=>{"use strict";c.d(b,{ThemeSwitcher:()=>d});let d=(0,c(77943).registerClientReference)(function(){throw Error("Attempted to call ThemeSwitcher() from the server but ThemeSwitcher is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Mediaservis\\Downloads\\nextjs-vendure\\src\\components\\layout\\navbar\\theme-switcher.tsx","ThemeSwitcher")},27728:(a,b,c)=>{"use strict";c.d(b,{Toaster:()=>d});let d=(0,c(77943).registerClientReference)(function(){throw Error("Attempted to call Toaster() from the server but Toaster is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Mediaservis\\Downloads\\nextjs-vendure\\src\\components\\ui\\sonner.tsx","Toaster")},29228:(a,b,c)=>{"use strict";c.d(b,{CurrencyPicker:()=>d});let d=(0,c(77943).registerClientReference)(function(){throw Error("Attempted to call CurrencyPicker() from the server but CurrencyPicker is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Mediaservis\\Downloads\\nextjs-vendure\\src\\components\\layout\\navbar\\currency-picker.tsx","CurrencyPicker")},32972:(a,b,c)=>{"use strict";c.d(b,{MobileNav:()=>d});let d=(0,c(77943).registerClientReference)(function(){throw Error("Attempted to call MobileNav() from the server but MobileNav is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Mediaservis\\Downloads\\nextjs-vendure\\src\\components\\layout\\navbar\\mobile-nav.tsx","MobileNav")},35976:()=>{},36230:(a,b,c)=>{Promise.resolve().then(c.bind(c,47613)),Promise.resolve().then(c.bind(c,56278)),Promise.resolve().then(c.bind(c,86392)),Promise.resolve().then(c.bind(c,85939))},36617:(a,b,c)=>{Promise.resolve().then(c.t.bind(c,95547,23))},37436:(a,b,c)=>{"use strict";c.d(b,{D:()=>d});let d=(0,c(5696).A)({locales:["en","de","sl","it","hr","fr","es"],defaultLocale:"sl"})},38186:(a,b,c)=>{"use strict";c.d(b,{ThemeSwitcher:()=>l});var d=c(48249),e=c(8696),f=c(67484),g=c(60525),h=c(10090),i=c(85205),j=c(25297),k=c(82244);function l(){let[a,b]=(0,f.useState)(!1),{theme:c,setTheme:l}=(0,e.D)();return a?(0,d.jsxs)(k.DropdownMenu,{children:[(0,d.jsxs)(k.DropdownMenuTrigger,{render:(0,d.jsx)(j.Button,{variant:"ghost",size:"icon"}),children:[(0,d.jsx)(g.A,{className:"size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),(0,d.jsx)(h.A,{className:"absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"}),(0,d.jsx)("span",{className:"sr-only",children:"Toggle theme"})]}),(0,d.jsxs)(k.DropdownMenuContent,{align:"end",children:[(0,d.jsxs)(k.DropdownMenuItem,{onClick:()=>l("light"),children:[(0,d.jsx)(g.A,{className:"size-4"}),(0,d.jsx)("span",{children:"Light"}),"light"===c&&(0,d.jsx)("span",{className:"ml-auto text-xs",children:"✓"})]}),(0,d.jsxs)(k.DropdownMenuItem,{onClick:()=>l("dark"),children:[(0,d.jsx)(h.A,{className:"size-4"}),(0,d.jsx)("span",{children:"Dark"}),"dark"===c&&(0,d.jsx)("span",{className:"ml-auto text-xs",children:"✓"})]}),(0,d.jsxs)(k.DropdownMenuItem,{onClick:()=>l("system"),children:[(0,d.jsx)(i.A,{className:"size-4"}),(0,d.jsx)("span",{children:"System"}),"system"===c&&(0,d.jsx)("span",{className:"ml-auto text-xs",children:"✓"})]})]})]}):(0,d.jsxs)(j.Button,{variant:"ghost",size:"icon",disabled:!0,children:[(0,d.jsx)(g.A,{className:"size-5"}),(0,d.jsx)("span",{className:"sr-only",children:"Toggle theme"})]})}},40307:(a,b,c)=>{"use strict";c.d(b,{LanguagePicker:()=>f});var d=c(48249),e=c(31988);function f(){let a=(0,e.Ym)();return(0,d.jsx)("span",{children:a})}},40949:(a,b,c)=>{"use strict";c.d(b,{h:()=>g});var d=c(65573);async function e(){let a=await (0,d.UL)();return a.get("vendure-currency")?.value}var f=c(56035);async function g(){let a=await e();return a||(await (0,f.gK)()).defaultCurrencyCode}},44250:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>at,generateMetadata:()=>ar,generateStaticParams:()=>aq,viewport:()=>as});var d=c(5735),e=c(41709),f=c(36872),g=c(96586),h=c.n(g),i=c(58444),j=c.n(i),k=c(79893),l=c(28440),m=c(91970),n=c(37436),o=c(18562),p=c(63195),q=c(27728),r=c(29978),s=c(63059),t=c.n(s);async function u({href:a,...b}){let c=await (0,p.oo)(),e="/"===a?`/${c}`:`/${c}${a}`;return(0,d.jsx)(t(),{href:e,...b})}var v=c(56035),w=c(1862),x=c(22430),y=c(11468),z=c(46506),A=c(53286),B=c(44458),C=c(66042),D=c(8884),E=c(81764);function F({align:a="start",className:b,children:c,...e}){return(0,d.jsxs)(w.NavigationMenuRoot,{"data-slot":"navigation-menu",className:(0,E.cn)("group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",b),...e,children:[c,(0,d.jsx)(I,{align:a})]})}function G({className:a,...b}){return(0,d.jsx)(x.NavigationMenuList,{"data-slot":"navigation-menu-list",className:(0,E.cn)("group flex flex-1 list-none items-center justify-center gap-0",a),...b})}function H({className:a,...b}){return(0,d.jsx)(y.NavigationMenuItem,{"data-slot":"navigation-menu-item",className:(0,E.cn)("relative",a),...b})}function I({className:a,side:b="bottom",sideOffset:c=8,align:e="start",alignOffset:f=0,...g}){return(0,d.jsx)(z.NavigationMenuPortal,{children:(0,d.jsx)(A.NavigationMenuPositioner,{side:b,sideOffset:c,align:e,alignOffset:f,className:(0,E.cn)("isolate z-50 h-(--positioner-height) w-(--positioner-width) max-w-(--available-width) transition-[top,left,right,bottom] duration-[0.35s] ease-[cubic-bezier(0.22,1,0.36,1)] data-instant:transition-none data-[side=bottom]:before:top-[-10px] data-[side=bottom]:before:right-0 data-[side=bottom]:before:left-0",a),...g,children:(0,d.jsx)(B.NavigationMenuPopup,{className:"data-[ending-style]:easing-[ease] xs:w-(--popup-width) relative h-(--popup-height) w-(--popup-width) origin-(--transform-origin) rounded-lg bg-popover text-popover-foreground shadow ring-1 ring-foreground/10 transition-[opacity,transform,width,height,scale,translate] duration-[0.35s] ease-[cubic-bezier(0.22,1,0.36,1)] outline-none data-ending-style:scale-90 data-ending-style:opacity-0 data-ending-style:duration-150 data-starting-style:scale-90 data-starting-style:opacity-0",children:(0,d.jsx)(C.NavigationMenuViewport,{className:"relative size-full overflow-hidden"})})})})}(0,D.F)("group/navigation-menu-trigger inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-popup-open:bg-muted/50 data-popup-open:hover:bg-muted data-open:bg-muted/50 data-open:hover:bg-muted data-open:focus:bg-muted");var J=c(71363);async function K(){let a=await (0,p.oo)(),b=await (0,v.dl)(a);return(0,d.jsx)(F,{children:(0,d.jsx)(G,{children:b.map(a=>(0,d.jsx)(H,{children:(0,d.jsx)(J.NavbarLink,{href:`/collection/${a.slug}`,children:a.name})},a.slug))})})}var L=c(93528),M=c(81557),N=c(18797);async function O(){let a=await (0,M.P)(N.D9,void 0,{useAuthToken:!0}),b=a?.data?.activeOrder?.totalQuantity||0;return(0,d.jsx)(L.CartIcon,{cartItemCount:b})}var P=c(76906),Q=c(85939),R=c(64318),S=c(18890),T=c(78966),U=c(91986),V=c(50920),W=c(3084),X=c(75587);let Y=(0,U.cache)(async()=>{let a=await (0,X.c4)(),b=await (0,M.P)(N.l1,void 0,{token:a});return b.data.activeCustomer?(0,V.B)(W.D,b.data.activeCustomer):null}),Z=v.gK;async function $(){let a=await (0,p.oo)(),b=await (0,p.KB)({locale:a,namespace:"Navigation"}),c=await Y();return c?(0,d.jsxs)(R.DropdownMenu,{children:[(0,d.jsxs)(R.DropdownMenuTrigger,{render:(0,d.jsx)(Q.Button,{variant:"ghost"}),children:[(0,d.jsx)(P.A,{className:"h-5 w-5"}),b("greeting",{name:c.firstName})]}),(0,d.jsxs)(R.DropdownMenuContent,{children:[(0,d.jsx)(R.DropdownMenuItem,{render:(0,d.jsx)(S.N_,{href:"/account/profile"}),children:b("profile")}),(0,d.jsx)(R.DropdownMenuItem,{render:(0,d.jsx)(S.N_,{href:"/account/orders"}),children:b("orders")}),(0,d.jsx)(R.DropdownMenuSeparator,{}),(0,d.jsx)(R.DropdownMenuItem,{render:(0,d.jsx)(T.LoginButton,{isLoggedIn:!0}),nativeButton:!0})]})]}):(0,d.jsx)(Q.Button,{render:(0,d.jsx)(T.LoginButton,{isLoggedIn:!1}),variant:"ghost"})}var _=c(26999),aa=c(86233),ab=c(40949),ac=c(29228);async function ad(){let a=await Z(),b=await (0,ab.h)();return(0,d.jsx)(ac.CurrencyPicker,{availableCurrencyCodes:a.availableCurrencyCodes,activeCurrencyCode:b})}var ae=c(32972);async function af(){let a=await (0,p.oo)(),b=await (0,v.dl)(a);return(0,d.jsx)(ae.MobileNav,{collections:b})}var ag=c(53868),ah=c(94414);function ai(){return(0,d.jsx)("div",{className:"flex items-center gap-2",children:(0,d.jsx)(ah.E,{className:"h-9 w-24"})})}function aj(){return(0,d.jsx)(ah.E,{className:"h-9 w-64"})}function ak(){return(0,d.jsx)("header",{className:"fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md bg-background/80",children:(0,d.jsx)("div",{className:"container mx-auto px-4",children:(0,d.jsxs)("div",{className:"flex items-center justify-between h-16",children:[(0,d.jsxs)("div",{className:"flex items-center gap-8",children:[(0,d.jsx)(U.Suspense,{children:(0,d.jsx)(af,{})}),(0,d.jsx)(u,{href:"/",className:"text-xl font-bold",children:(0,d.jsx)(r.default,{src:"/vendure.svg",alt:"Vendure",width:40,height:27,className:"h-6 w-auto dark:invert"})}),(0,d.jsx)("nav",{className:"hidden md:flex items-center gap-6",children:(0,d.jsx)(U.Suspense,{children:(0,d.jsx)(K,{})})})]}),(0,d.jsxs)("div",{className:"flex items-center gap-4",children:[(0,d.jsx)("div",{className:"hidden lg:flex",children:(0,d.jsx)(U.Suspense,{fallback:(0,d.jsx)(aj,{}),children:(0,d.jsx)(ag.SearchInput,{})})}),(0,d.jsx)(U.Suspense,{children:(0,d.jsx)(aa.LanguagePicker,{})}),(0,d.jsx)(U.Suspense,{children:(0,d.jsx)(ad,{})}),(0,d.jsx)(U.Suspense,{children:(0,d.jsx)(_.ThemeSwitcher,{})}),(0,d.jsx)(U.Suspense,{children:(0,d.jsx)(O,{})}),(0,d.jsx)(U.Suspense,{fallback:(0,d.jsx)(ai,{}),children:(0,d.jsx)($,{})})]})]})})})}async function al(){let a=await (0,p.oo)(),b=await (0,p.KB)({locale:a,namespace:"Footer"});return(0,d.jsx)("div",{children:b("copyright",{year:2026})})}async function am(){let a=await (0,p.oo)(),b=await (0,p.KB)({locale:a,namespace:"Footer"}),c=await (0,v.dl)(a);return(0,d.jsx)("footer",{className:"border-t border-border mt-auto",children:(0,d.jsxs)("div",{className:"container mx-auto px-4 py-12",children:[(0,d.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8",children:[(0,d.jsxs)("div",{className:"md:col-span-1",children:[(0,d.jsx)(u,{href:"/",className:"inline-block mb-4",children:(0,d.jsx)(r.default,{src:"/vendure.svg",alt:"Vendure",width:40,height:27,className:"h-6 w-auto dark:invert"})}),(0,d.jsx)("p",{className:"text-sm text-muted-foreground text-balance leading-relaxed",children:b("description")})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{className:"text-sm font-semibold mb-4",children:b("categories")}),(0,d.jsx)("ul",{className:"space-y-2 text-sm text-muted-foreground",children:c.map(a=>(0,d.jsx)("li",{children:(0,d.jsx)(u,{href:`/collection/${a.slug}`,className:"hover:text-foreground transition-colors",children:a.name})},a.id))})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{className:"text-sm font-semibold mb-4",children:b("customer")}),(0,d.jsxs)("ul",{className:"space-y-2 text-sm text-muted-foreground",children:[(0,d.jsx)("li",{children:(0,d.jsx)(u,{href:"/search",className:"hover:text-foreground transition-colors",children:b("shopAll")})}),(0,d.jsx)("li",{children:(0,d.jsx)(u,{href:"/account/orders",className:"hover:text-foreground transition-colors",children:b("orders")})}),(0,d.jsx)("li",{children:(0,d.jsx)(u,{href:"/account/profile",className:"hover:text-foreground transition-colors",children:b("account")})})]})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{className:"text-sm font-semibold mb-4",children:b("company")}),(0,d.jsxs)("ul",{className:"space-y-2 text-sm text-muted-foreground",children:[(0,d.jsx)("li",{children:(0,d.jsx)(u,{href:"/about",className:"hover:text-foreground transition-colors",children:b("aboutUs")})}),(0,d.jsx)("li",{children:(0,d.jsx)(u,{href:"/privacy-policy",className:"hover:text-foreground transition-colors",children:b("privacyPolicy")})}),(0,d.jsx)("li",{children:(0,d.jsx)(u,{href:"/terms-and-conditions",className:"hover:text-foreground transition-colors",children:b("termsConditions")})})]})]})]}),(0,d.jsx)("div",{className:"mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground",children:(0,d.jsx)(al,{})})]})})}var an=c(82454),ao=c(95788),ap=c(93968);function aq(){return n.D.locales.map(a=>({locale:a}))}async function ar({params:a}){let b=await (0,p.Hw)(a),c=(0,o.i)(b),d=await (0,p.KB)({locale:b,namespace:"Common"});return{metadataBase:new URL(ao.W6),title:{default:ao.yy,template:`%s | ${ao.yy}`},description:d("siteDescription",{siteName:ao.yy}),openGraph:{type:"website",siteName:ao.yy,locale:c},twitter:{card:"summary_large_image"},robots:{index:!0,follow:!0,googleBot:{index:!0,follow:!0,"max-video-preview":-1,"max-image-preview":"large","max-snippet":-1}},alternates:{languages:Object.fromEntries(n.D.locales.map(a=>[a,`/${a}`]))}}}c(35976);let as={width:"device-width",initialScale:1,maximumScale:5,themeColor:[{media:"(prefers-color-scheme: light)",color:"#ffffff"},{media:"(prefers-color-scheme: dark)",color:"#000000"}]};async function at({children:a,params:b}){let c=await (0,p.Hw)(b);(0,e.EL)(n.D.locales,c)||(0,m.notFound)(),(0,k.I)(c);let g=await (0,l.A)({locale:c});return(0,d.jsx)("html",{lang:c,"data-scroll-behavior":"smooth",suppressHydrationWarning:!0,children:(0,d.jsxs)("body",{className:`${h().variable} ${j().variable} antialiased flex flex-col min-h-screen`,children:[(0,d.jsx)(f.A,{locale:c,messages:g,children:(0,d.jsxs)(an.ThemeProvider,{children:[(0,d.jsx)(ak,{}),a,(0,d.jsx)(am,{}),(0,d.jsx)(q.Toaster,{})]})}),(0,d.jsx)(ap.default,{src:"https://embed.tawk.to/56c73659b74a0813627d275c/1gsshkkuq",strategy:"lazyOnload"})]})})}},44804:(a,b,c)=>{"use strict";async function d(a){return(await c.e(3338).then(c.bind(c,43338))).getTranslations(a)}c.d(b,{KB:()=>d}),c(69325)},45712:(a,b,c)=>{"use strict";c.d(b,{ThemeProvider:()=>f});var d=c(48249),e=c(8696);function f({children:a}){return(0,d.jsx)(e.N,{attribute:"class",defaultTheme:"system",enableSystem:!0,disableTransitionOnChange:!0,children:a})}},47354:(a,b,c)=>{"use strict";c.d(b,{P:()=>k,T:()=>l});var d=c(63471),e=c(26764);let f=process.env.VENDURE_SHOP_API_URL||"https://my-vendure-shop-production-492b.up.railway.app/shop-api",g=process.env.VENDURE_CHANNEL_TOKEN||process.env.NEXT_PUBLIC_VENDURE_CHANNEL_TOKEN||"",h=process.env.VENDURE_AUTH_TOKEN_HEADER||"vendure-auth-token",i=process.env.VENDURE_CHANNEL_TOKEN_HEADER||"vendure-token",j=process.env.VENDURE_LOCALE_HEADER||"Accept-Language";if(!f)throw Error("VENDURE_SHOP_API_URL or NEXT_PUBLIC_VENDURE_SHOP_API_URL environment variable is not set");async function k(a,...[b,c]){let{token:l,useAuthToken:m,channelToken:n,languageCode:o,currencyCode:p,fetch:q,tags:r}=c||{},s={"Content-Type":"application/json",...q?.headers},t=l;m&&!t&&(t=await (0,e.c4)()),t&&(s.Authorization=`Bearer ${t}`),s[i]=n||g,o&&(s[j]=o);let u=new URL(f);o&&u.searchParams.set("languageCode",o),p&&u.searchParams.set("currencyCode",p);try{let c,e=await fetch(u.toString(),{...q,method:"POST",headers:s,body:JSON.stringify({query:(0,d.y)(a),variables:b||{}}),...r&&{next:{tags:r}}});if(!e.ok)return console.error(`Vendure API HTTP error: ${e.status}`),null;let f=await e.text(),g=f.trim();if(g.startsWith("<!")||g.startsWith("<html")||g.startsWith("<HTML"))return console.error("Vendure API returned HTML instead of JSON"),null;try{c=JSON.parse(f)}catch{return console.error("Vendure API returned invalid JSON"),null}if(c.errors)return console.error(`Vendure GraphQL errors: ${c.errors.map(a=>a.message).join(", ")}`),null;if(!c.data)return console.error("No data returned from Vendure API"),null;let i=e.headers.get(h);return{data:c.data,...i&&{token:i}}}catch(a){return console.error("Vendure API request failed:",a),null}}async function l(a,...[b,c]){return k(a,b,c)}},50920:(a,b,c)=>{"use strict";c.d(b,{B:()=>d.Bk,U:()=>e});var d=c(54610);let e=(0,d.Se)()},51109:(a,b,c)=>{Promise.resolve().then(c.t.bind(c,95547,23)),Promise.resolve().then(c.t.bind(c,15098,23)),Promise.resolve().then(c.t.bind(c,47644,23)),Promise.resolve().then(c.t.bind(c,33859,23)),Promise.resolve().then(c.t.bind(c,98099,23)),Promise.resolve().then(c.t.bind(c,16237,23)),Promise.resolve().then(c.t.bind(c,98562,23)),Promise.resolve().then(c.t.bind(c,36675,23))},53868:(a,b,c)=>{"use strict";c.d(b,{SearchInput:()=>d});let d=(0,c(77943).registerClientReference)(function(){throw Error("Attempted to call SearchInput() from the server but SearchInput is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Mediaservis\\Downloads\\nextjs-vendure\\src\\components\\layout\\search-input.tsx","SearchInput")},56002:(a,b,c)=>{"use strict";c.d(b,{G:()=>h});var d=c(95349),e=c(73883),f=c(60654),g=c(42650);async function h(a){if(!(await (0,f.gK)()).availableCurrencyCodes.includes(a))throw Error("Invalid currency code");await (0,e.i)(a),(0,g.updateTag)("products"),(0,g.updateTag)("collection"),(0,g.updateTag)("cart"),(0,g.updateTag)("active-order")}(0,c(89337).D)([h]),(0,d.A)(h,"40a6f3c2293be0b42392985345bb063207b07a5e09",null)},56035:(a,b,c)=>{"use strict";c.d(b,{dl:()=>h,gK:()=>f,o4:()=>g});var d=c(81557),e=c(18797);async function f(){return(await (0,d.P)(e.QB)).data.activeChannel}async function g(a){return(await (0,d.P)(e.Q7,void 0,{languageCode:a})).data.availableCountries||[]}async function h(a){return(await (0,d.P)(e.Fm,void 0,{languageCode:a})).data.collections.items}},60654:(a,b,c)=>{"use strict";c.d(b,{gK:()=>i});var d=c(47354),e=c(6393);let f=(0,e.U)(`
    fragment ProductCard on SearchResult {
        productId
        productName
        slug
        productAsset {
            id
            preview
        }
        priceWithTax {
            __typename
            ... on PriceRange {
                min
                max
            }
            ... on SinglePrice {
                value
            }
        }
        currencyCode
    }
`),g=(0,e.U)(`
    fragment ActiveCustomer on Customer {
        id
        firstName
        lastName
        emailAddress
    }
`);(0,e.U)(`
    query GetTopCollections {
        collections(options: { filter: { parentId: { eq: "1" } } }) {
            items {
                id
                name
                slug
            }
        }
    }
`),(0,e.U)(`
    query GetActiveCustomer {
        activeCustomer {
            ...ActiveCustomer
        }
    }
`,[g]),(0,e.U)(`
    query SearchProducts($input: SearchInput!) {
        search(input: $input) {
            totalItems
            items {
                ...ProductCard
            }
            facetValues {
                count
                facetValue {
                    id
                    name
                    facet {
                        id
                        name
                    }
                }
            }
        }
    }
`,[f]),(0,e.U)(`
    query GetProductDetail($slug: String!) {
        product(slug: $slug) {
            id
            name
            description
            slug
            assets {
                id
                preview
                source
            }
            variants {
                id
                name
                sku
                priceWithTax
                stockLevel
                options {
                    id
                    code
                    name
                    groupId
                    group {
                        id
                        code
                        name
                    }
                }
            }
            optionGroups {
                id
                code
                name
                options {
                    id
                    code
                    name
                }
            }
            collections {
                id
                name
                slug
                parent {
                    id
                }
            }
        }
    }
`),(0,e.U)(`
    query GetActiveOrder {
        activeOrder {
            id
            code
            state
            totalQuantity
            subTotal
            subTotalWithTax
            shipping
            shippingWithTax
            total
            totalWithTax
            currencyCode
            couponCodes
            discounts {
                description
                amountWithTax
            }
            lines {
                id
                productVariant {
                    id
                    name
                    sku
                    product {
                        id
                        name
                        slug
                        featuredAsset {
                            id
                            preview
                        }
                    }
                }
                unitPriceWithTax
                quantity
                linePriceWithTax
            }
        }
    }
`),(0,e.U)(`
    query GetActiveOrderForCheckout {
        activeOrder {
            id
            code
            state
            totalQuantity
            subTotal
            subTotalWithTax
            shipping
            shippingWithTax
            total
            totalWithTax
            currencyCode
            couponCodes
            customer {
                id
                firstName
                lastName
                emailAddress
                phoneNumber
            }
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
            shippingLines {
                shippingMethod {
                    id
                    name
                    description
                }
                priceWithTax
            }
            discounts {
                description
                amountWithTax
            }
            lines {
                id
                productVariant {
                    id
                    name
                    sku
                    product {
                        id
                        name
                        slug
                        featuredAsset {
                            id
                            preview
                        }
                    }
                }
                unitPriceWithTax
                quantity
                linePriceWithTax
            }
        }
    }
`),(0,e.U)(`
    query GetCustomerAddresses {
        activeCustomer {
            id
            addresses {
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
    }
`),(0,e.U)(`
    query GetEligibleShippingMethods {
        eligibleShippingMethods {
            id
            name
            code
            description
            priceWithTax
        }
    }
`),(0,e.U)(`
    query GetEligiblePaymentMethods {
        eligiblePaymentMethods {
            id
            name
            code
            description
            isEligible
            eligibilityMessage
        }
    }
`),(0,e.U)(`
    query GetAvailableCountries {
        availableCountries {
            id
            code
            name
        }
    }
`),(0,e.U)(`
    query GetCustomerOrders($options: OrderListOptions) {
        activeCustomer {
            id
            orders(options: $options) {
                totalItems
                items {
                    id
                    code
                    state
                    totalWithTax
                    currencyCode
                    createdAt
                    updatedAt
                    lines {
                        id
                        productVariant {
                            id
                            name
                            product {
                                id
                                name
                                featuredAsset {
                                    id
                                    preview
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`),(0,e.U)(`
    query GetOrderDetail($code: String!) {
        orderByCode(code: $code) {
            id
            code
            state
            active
            createdAt
            updatedAt
            totalQuantity
            subTotal
            subTotalWithTax
            shipping
            shippingWithTax
            total
            totalWithTax
            currencyCode
            customer {
                id
                firstName
                lastName
                emailAddress
            }
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
            shippingLines {
                shippingMethod {
                    id
                    name
                    description
                }
                priceWithTax
            }
            payments {
                id
                method
                amount
                state
                transactionId
                createdAt
            }
            lines {
                id
                productVariant {
                    id
                    name
                    sku
                    product {
                        id
                        name
                        slug
                        featuredAsset {
                            id
                            preview
                        }
                    }
                }
                unitPriceWithTax
                quantity
                linePriceWithTax
            }
            discounts {
                description
                amountWithTax
            }
        }
    }
`);let h=(0,e.U)(`
    query GetActiveChannel {
        activeChannel {
            id
            code
            defaultLanguageCode
            availableLanguageCodes
            defaultCurrencyCode
            availableCurrencyCodes
        }
    }
`);async function i(){return(await (0,d.P)(h)).data.activeChannel}(0,e.U)(`
    query GetCollectionProducts($slug: String!, $input: SearchInput!) {
        collection(slug: $slug) {
            id
            name
            slug
            description
            featuredAsset {
                id
                preview
            }
        }
        search(input: $input) {
            totalItems
            items {
                ...ProductCard
            }
        }
    }
`,[f])},63195:(a,b,c)=>{"use strict";c.d(b,{Hw:()=>g,KB:()=>h,oo:()=>i});var d=c(41709),e=c(37436);function f(a){return(0,d.EL)(e.D.locales,a)?a:e.D.defaultLocale}async function g(a){let{locale:b}=await a;return f(b)}async function h(a){return(await c.e(2589).then(c.bind(c,42589))).getTranslations(a)}async function i(){try{let a=await c.e(2589).then(c.bind(c,42589)),b=await a.getLocale();return f(b)}catch{return e.D.defaultLocale}}},63688:(a,b,c)=>{"use strict";c.d(b,{Z:()=>m,i:()=>l});var d=c(95349),e=c(47354),f=c(92814),g=c(26764),h=c(5143),i=c(42650),j=c(30103),k=c(44804);async function l(a,b){let c=await (0,j.A)(),d=await (0,k.KB)({locale:c,namespace:"Errors"}),l=b.get("username"),m=b.get("password"),n=b.get("redirectTo"),o=await (0,e.T)(f.bd,{username:l,password:m},{useAuthToken:!0});if(!o)return{error:d("unexpectedError")};let p=o.data.login;if("CurrentUser"!==p.__typename)return"NotVerifiedError"===p.__typename?{error:d("verifyEmailFirst")}:{error:d("invalidCredentials")};o.token&&await (0,g.O5)(o.token),(0,i.revalidatePath)(`/${c}`,"layout");let q=n?.startsWith("/")&&!n.startsWith("//")?n:"/";(0,h.V2)({href:q,locale:c})}async function m(){await (0,e.T)(f.Ss),await (0,g.QF)();let a=await (0,j.A)();(0,h.V2)({href:"/",locale:a})}(0,c(89337).D)([l,m]),(0,d.A)(l,"600e7103d70e2587ee429cd7457770962ea19f313b",null),(0,d.A)(m,"00e00d7c4904e8de68c2bc572150c6d70bab9afe2e",null)},64318:(a,b,c)=>{"use strict";c.d(b,{DropdownMenu:()=>e,DropdownMenuContent:()=>g,DropdownMenuItem:()=>h,DropdownMenuSeparator:()=>i,DropdownMenuTrigger:()=>f});var d=c(77943);let e=(0,d.registerClientReference)(function(){throw Error("Attempted to call DropdownMenu() from the server but DropdownMenu is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Mediaservis\\Downloads\\nextjs-vendure\\src\\components\\ui\\dropdown-menu.tsx","DropdownMenu");(0,d.registerClientReference)(function(){throw Error("Attempted to call DropdownMenuPortal() from the server but DropdownMenuPortal is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Mediaservis\\Downloads\\nextjs-vendure\\src\\components\\ui\\dropdown-menu.tsx","DropdownMenuPortal");let f=(0,d.registerClientReference)(function(){throw Error("Attempted to call DropdownMenuTrigger() from the server but DropdownMenuTrigger is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Mediaservis\\Downloads\\nextjs-vendure\\src\\components\\ui\\dropdown-menu.tsx","DropdownMenuTrigger"),g=(0,d.registerClientReference)(function(){throw Error("Attempted to call DropdownMenuContent() from the server but DropdownMenuContent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Mediaservis\\Downloads\\nextjs-vendure\\src\\components\\ui\\dropdown-menu.tsx","DropdownMenuContent");(0,d.registerClientReference)(function(){throw Error("Attempted to call DropdownMenuGroup() from the server but DropdownMenuGroup is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Mediaservis\\Downloads\\nextjs-vendure\\src\\components\\ui\\dropdown-menu.tsx","DropdownMenuGroup"),(0,d.registerClientReference)(function(){throw Error("Attempted to call DropdownMenuLabel() from the server but DropdownMenuLabel is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Mediaservis\\Downloads\\nextjs-vendure\\src\\components\\ui\\dropdown-menu.tsx","DropdownMenuLabel");let h=(0,d.registerClientReference)(function(){throw Error("Attempted to call DropdownMenuItem() from the server but DropdownMenuItem is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Mediaservis\\Downloads\\nextjs-vendure\\src\\components\\ui\\dropdown-menu.tsx","DropdownMenuItem");(0,d.registerClientReference)(function(){throw Error("Attempted to call DropdownMenuCheckboxItem() from the server but DropdownMenuCheckboxItem is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Mediaservis\\Downloads\\nextjs-vendure\\src\\components\\ui\\dropdown-menu.tsx","DropdownMenuCheckboxItem"),(0,d.registerClientReference)(function(){throw Error("Attempted to call DropdownMenuRadioGroup() from the server but DropdownMenuRadioGroup is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Mediaservis\\Downloads\\nextjs-vendure\\src\\components\\ui\\dropdown-menu.tsx","DropdownMenuRadioGroup"),(0,d.registerClientReference)(function(){throw Error("Attempted to call DropdownMenuRadioItem() from the server but DropdownMenuRadioItem is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Mediaservis\\Downloads\\nextjs-vendure\\src\\components\\ui\\dropdown-menu.tsx","DropdownMenuRadioItem");let i=(0,d.registerClientReference)(function(){throw Error("Attempted to call DropdownMenuSeparator() from the server but DropdownMenuSeparator is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Mediaservis\\Downloads\\nextjs-vendure\\src\\components\\ui\\dropdown-menu.tsx","DropdownMenuSeparator");(0,d.registerClientReference)(function(){throw Error("Attempted to call DropdownMenuShortcut() from the server but DropdownMenuShortcut is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Mediaservis\\Downloads\\nextjs-vendure\\src\\components\\ui\\dropdown-menu.tsx","DropdownMenuShortcut"),(0,d.registerClientReference)(function(){throw Error("Attempted to call DropdownMenuSub() from the server but DropdownMenuSub is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Mediaservis\\Downloads\\nextjs-vendure\\src\\components\\ui\\dropdown-menu.tsx","DropdownMenuSub"),(0,d.registerClientReference)(function(){throw Error("Attempted to call DropdownMenuSubTrigger() from the server but DropdownMenuSubTrigger is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Mediaservis\\Downloads\\nextjs-vendure\\src\\components\\ui\\dropdown-menu.tsx","DropdownMenuSubTrigger"),(0,d.registerClientReference)(function(){throw Error("Attempted to call DropdownMenuSubContent() from the server but DropdownMenuSubContent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Mediaservis\\Downloads\\nextjs-vendure\\src\\components\\ui\\dropdown-menu.tsx","DropdownMenuSubContent")},67362:(a,b,c)=>{"use strict";c.d(b,{D:()=>d});let d=(0,c(57306).A)({locales:["en","de","sl","it","hr","fr","es"],defaultLocale:"sl"})},69171:(a,b,c)=>{Promise.resolve().then(c.bind(c,69976)),Promise.resolve().then(c.bind(c,6616)),Promise.resolve().then(c.bind(c,90968)),Promise.resolve().then(c.bind(c,32182)),Promise.resolve().then(c.bind(c,59838)),Promise.resolve().then(c.bind(c,72528)),Promise.resolve().then(c.bind(c,65704)),Promise.resolve().then(c.bind(c,3092)),Promise.resolve().then(c.bind(c,91300)),Promise.resolve().then(c.bind(c,36264)),Promise.resolve().then(c.bind(c,7272)),Promise.resolve().then(c.bind(c,70111)),Promise.resolve().then(c.bind(c,49444)),Promise.resolve().then(c.bind(c,10549)),Promise.resolve().then(c.bind(c,79220)),Promise.resolve().then(c.bind(c,62626)),Promise.resolve().then(c.t.bind(c,2116,23)),Promise.resolve().then(c.t.bind(c,51455,23)),Promise.resolve().then(c.t.bind(c,90929,23)),Promise.resolve().then(c.bind(c,76110)),Promise.resolve().then(c.bind(c,76117)),Promise.resolve().then(c.bind(c,40307)),Promise.resolve().then(c.bind(c,22106)),Promise.resolve().then(c.bind(c,77722)),Promise.resolve().then(c.bind(c,69512)),Promise.resolve().then(c.bind(c,38186)),Promise.resolve().then(c.bind(c,5397)),Promise.resolve().then(c.bind(c,45712)),Promise.resolve().then(c.bind(c,25297)),Promise.resolve().then(c.bind(c,82244)),Promise.resolve().then(c.bind(c,9062))},69325:(a,b,c)=>{"use strict";c.d(b,{D:()=>d});let d=(0,c(31729).A)({locales:["en","de","sl","it","hr","fr","es"],defaultLocale:"sl"})},69512:(a,b,c)=>{"use strict";c.d(b,{NavbarLink:()=>l});var d=c(48249),e=c(19099),f=c(88872),g=c(72528),h=c(21654),i=c(14490);let j=(0,h.F)("group/navigation-menu-trigger inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-popup-open:bg-muted/50 data-popup-open:hover:bg-muted data-open:bg-muted/50 data-open:hover:bg-muted data-open:focus:bg-muted");function k({className:a,...b}){return(0,d.jsx)(g.NavigationMenuLink,{"data-slot":"navigation-menu-link",className:(0,i.cn)("flex items-center gap-1.5 rounded-sm p-2 text-sm transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-1 data-[active=true]:bg-muted/50 data-[active=true]:hover:bg-muted data-[active=true]:focus:bg-muted [&_svg:not([class*='size-'])]:size-4",a),...b})}function l({href:a,...b}){let c=(0,e.useSelectedLayoutSegment)(),g=(c?`/${c}`:"/")===a;return(0,d.jsx)(k,{render:(0,d.jsx)(f.N_,{"aria-current":g?"page":void 0,className:(0,i.cn)(j(),"bg-transparent"),href:a,...b}),active:g})}},71363:(a,b,c)=>{"use strict";c.d(b,{NavbarLink:()=>d});let d=(0,c(77943).registerClientReference)(function(){throw Error("Attempted to call NavbarLink() from the server but NavbarLink is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Mediaservis\\Downloads\\nextjs-vendure\\src\\components\\layout\\navbar\\navbar-link.tsx","NavbarLink")},73883:(a,b,c)=>{"use strict";c.d(b,{i:()=>f,s:()=>g});var d=c(36042);let e="vendure-currency";async function f(a){(await (0,d.UL)()).set(e,a,{path:"/",maxAge:31536e3,sameSite:"lax"})}async function g(){let a=await (0,d.UL)();return a.get(e)?.value}},75587:(a,b,c)=>{"use strict";c.d(b,{c4:()=>f});var d=c(65573);let e=process.env.VENDURE_AUTH_TOKEN_COOKIE||"vendure-auth-token";async function f(){let a=await (0,d.UL)();return a.get(e)?.value}},76110:(a,b,c)=>{"use strict";c.d(b,{CartIcon:()=>i});var d=c(48249),e=c(2372),f=c(25297),g=c(88872),h=c(77360);function i({cartItemCount:a}){let b=(0,h.c)("Navigation");return(0,d.jsxs)(f.Button,{render:(0,d.jsx)(g.N_,{href:"/cart"}),nativeButton:!1,variant:"ghost",size:"icon",className:"relative",children:[(0,d.jsx)(e.A,{className:"h-5 w-5"}),a>0&&(0,d.jsx)("span",{className:"absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center",children:a}),(0,d.jsx)("span",{className:"sr-only",children:b("shoppingCart")})]})}},76117:(a,b,c)=>{"use strict";c.d(b,{CurrencyPicker:()=>m});var d=c(48249),e=c(77360),f=c(11897),g=c(25297),h=c(82244),i=c(88872),j=c(99829);let k=(0,j.createServerReference)("40a6f3c2293be0b42392985345bb063207b07a5e09",j.callServer,void 0,j.findSourceMapURL,"switchCurrency");var l=c(67484);function m({availableCurrencyCodes:a,activeCurrencyCode:b}){let c=(0,e.c)("Navigation"),j=(0,i.rd)(),[n,o]=(0,l.useTransition)();return a.length<=1?null:(0,d.jsxs)(h.DropdownMenu,{children:[(0,d.jsxs)(h.DropdownMenuTrigger,{render:(0,d.jsx)(g.Button,{variant:"ghost",size:"sm",className:"gap-1.5","aria-label":c("switchCurrency")}),children:[(0,d.jsx)(f.A,{className:"size-4"}),(0,d.jsx)("span",{children:b})]}),(0,d.jsx)(h.DropdownMenuContent,{align:"end",children:a.map(a=>(0,d.jsxs)(h.DropdownMenuItem,{onClick:()=>{o(async()=>{await k(a),j.refresh()})},disabled:n,children:[(0,d.jsx)("span",{children:a}),b===a&&(0,d.jsx)("span",{className:"ml-auto text-xs",children:"✓"})]},a))})]})}},76537:(a,b,c)=>{"use strict";function d({children:a}){return a}c.r(b),c.d(b,{default:()=>d})},76565:(a,b,c)=>{var d={"./de.json":[46324,6324],"./en.json":[87368,7368],"./es.json":[47571,7571],"./fr.json":[26791,6791],"./hr.json":[2289,2289],"./it.json":[23266,3266],"./sl.json":[97160,7160]};function e(a){if(!c.o(d,a))return Promise.resolve().then(()=>{var b=Error("Cannot find module '"+a+"'");throw b.code="MODULE_NOT_FOUND",b});var b=d[a],e=b[0];return c.e(b[1]).then(()=>c.t(e,19))}e.keys=()=>Object.keys(d),e.id=76565,a.exports=e},77722:(a,b,c)=>{"use strict";c.d(b,{MobileNav:()=>q});var d=c(48249),e=c(67484),f=c(88872),g=c(63120),h=c(29813),i=c(72860),j=c(54264),k=c(35107),l=c(62955),m=c(25297),n=c(88877),o=c(7716),p=c(77360);function q({collections:a}){let b=(0,p.c)("Navigation"),[c,r]=(0,e.useState)(!1),[s,t]=(0,e.useState)(""),u=(0,f.rd)(),v=()=>{r(!1)};return(0,d.jsxs)(o.cj,{open:c,onOpenChange:r,children:[(0,d.jsxs)(o.CG,{render:(0,d.jsx)(m.Button,{variant:"ghost",size:"icon",className:"md:hidden"}),children:[(0,d.jsx)(g.A,{className:"size-5"}),(0,d.jsx)("span",{className:"sr-only",children:b("openMenu")})]}),(0,d.jsxs)(o.h,{side:"left",className:"w-full sm:max-w-sm overflow-y-auto",children:[(0,d.jsx)(o.Fm,{children:(0,d.jsx)(o.qp,{children:b("menu")})}),(0,d.jsxs)("div",{className:"flex flex-col gap-6 px-4 pb-6",children:[(0,d.jsxs)("form",{onSubmit:a=>{a.preventDefault(),s.trim()&&(u.push(`/search?q=${encodeURIComponent(s.trim())}`),r(!1))},className:"relative",children:[(0,d.jsx)(h.A,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"}),(0,d.jsx)(n.p,{type:"search",placeholder:b("searchProducts"),className:"pl-9 w-full",value:s,onChange:a=>t(a.target.value)})]}),(0,d.jsx)("div",{children:(0,d.jsxs)(o.kN,{render:(0,d.jsx)(f.N_,{href:"/search",className:"flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-md hover:bg-accent transition-colors"}),nativeButton:!1,onClick:v,children:[(0,d.jsx)(i.A,{className:"h-5 w-5"}),b("shopAll")]})}),a.length>0&&(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{className:"px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground",children:b("collections")}),(0,d.jsx)("nav",{className:"flex flex-col gap-0.5",children:a.map(a=>(0,d.jsx)(o.kN,{render:(0,d.jsx)(f.N_,{href:`/collection/${a.slug}`,className:"flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-md hover:bg-accent transition-colors"}),nativeButton:!1,onClick:v,children:a.name},a.slug))})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{className:"px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground",children:b("account")}),(0,d.jsxs)("nav",{className:"flex flex-col gap-0.5",children:[(0,d.jsxs)(o.kN,{render:(0,d.jsx)(f.N_,{href:"/account/profile",className:"flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-md hover:bg-accent transition-colors"}),nativeButton:!1,onClick:v,children:[(0,d.jsx)(j.A,{className:"h-5 w-5"}),b("profile")]}),(0,d.jsxs)(o.kN,{render:(0,d.jsx)(f.N_,{href:"/account/orders",className:"flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-md hover:bg-accent transition-colors"}),nativeButton:!1,onClick:v,children:[(0,d.jsx)(k.A,{className:"h-5 w-5"}),b("orders")]}),(0,d.jsxs)(o.kN,{render:(0,d.jsx)(f.N_,{href:"/account/addresses",className:"flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-md hover:bg-accent transition-colors"}),nativeButton:!1,onClick:v,children:[(0,d.jsx)(l.A,{className:"h-5 w-5"}),b("addresses")]})]})]})]})]})]})}},78335:()=>{},78966:(a,b,c)=>{"use strict";c.d(b,{LoginButton:()=>d});let d=(0,c(77943).registerClientReference)(function(){throw Error("Attempted to call LoginButton() from the server but LoginButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Mediaservis\\Downloads\\nextjs-vendure\\src\\components\\layout\\navbar\\login-button.tsx","LoginButton")},79803:(a,b,c)=>{"use strict";c.d(b,{A:()=>f});var d=c(29389),e=c(37436);let f=(0,d.A)(async({requestLocale:a})=>{let b=await a;return b&&e.D.locales.includes(b)||(b=e.D.defaultLocale),{locale:b,messages:(await c(76565)(`./${b}.json`)).default}})},80613:(a,b,c)=>{Promise.resolve().then(c.t.bind(c,81921,23)),Promise.resolve().then(c.t.bind(c,60440,23)),Promise.resolve().then(c.t.bind(c,84342,23)),Promise.resolve().then(c.t.bind(c,82265,23)),Promise.resolve().then(c.t.bind(c,35421,23)),Promise.resolve().then(c.t.bind(c,61335,23)),Promise.resolve().then(c.t.bind(c,70664,23)),Promise.resolve().then(c.bind(c,74661))},81557:(a,b,c)=>{"use strict";c.d(b,{P:()=>k,T:()=>l});var d=c(57546),e=c(75587);let f=process.env.VENDURE_SHOP_API_URL||"https://my-vendure-shop-production-492b.up.railway.app/shop-api",g=process.env.VENDURE_CHANNEL_TOKEN||process.env.NEXT_PUBLIC_VENDURE_CHANNEL_TOKEN||"",h=process.env.VENDURE_AUTH_TOKEN_HEADER||"vendure-auth-token",i=process.env.VENDURE_CHANNEL_TOKEN_HEADER||"vendure-token",j=process.env.VENDURE_LOCALE_HEADER||"Accept-Language";if(!f)throw Error("VENDURE_SHOP_API_URL or NEXT_PUBLIC_VENDURE_SHOP_API_URL environment variable is not set");async function k(a,...[b,c]){let{token:l,useAuthToken:m,channelToken:n,languageCode:o,currencyCode:p,fetch:q,tags:r}=c||{},s={"Content-Type":"application/json",...q?.headers},t=l;m&&!t&&(t=await (0,e.c4)()),t&&(s.Authorization=`Bearer ${t}`),s[i]=n||g,o&&(s[j]=o);let u=new URL(f);o&&u.searchParams.set("languageCode",o),p&&u.searchParams.set("currencyCode",p);try{let c,e=await fetch(u.toString(),{...q,method:"POST",headers:s,body:JSON.stringify({query:(0,d.y)(a),variables:b||{}}),...r&&{next:{tags:r}}});if(!e.ok)return console.error(`Vendure API HTTP error: ${e.status}`),null;let f=await e.text(),g=f.trim();if(g.startsWith("<!")||g.startsWith("<html")||g.startsWith("<HTML"))return console.error("Vendure API returned HTML instead of JSON"),null;try{c=JSON.parse(f)}catch{return console.error("Vendure API returned invalid JSON"),null}if(c.errors)return console.error(`Vendure GraphQL errors: ${c.errors.map(a=>a.message).join(", ")}`),null;if(!c.data)return console.error("No data returned from Vendure API"),null;let i=e.headers.get(h);return{data:c.data,...i&&{token:i}}}catch(a){return console.error("Vendure API request failed:",a),null}}async function l(a,...[b,c]){return k(a,b,c)}},81764:(a,b,c)=>{"use strict";c.d(b,{cn:()=>f});var d=c(89356),e=c(16184);function f(...a){return(0,e.QP)((0,d.$)(a))}},82244:(a,b,c)=>{"use strict";c.d(b,{DropdownMenu:()=>m,DropdownMenuContent:()=>o,DropdownMenuItem:()=>p,DropdownMenuSeparator:()=>q,DropdownMenuTrigger:()=>n});var d=c(48249);c(67484);var e=c(23516),f=c(23924),g=c(52943),h=c(49287),i=c(55031),j=c(30300),k=c(69394),l=c(14490);function m({...a}){return(0,d.jsx)(e.i,{"data-slot":"dropdown-menu",...a})}function n({...a}){return(0,d.jsx)(f.c,{"data-slot":"dropdown-menu-trigger",...a})}function o({align:a="start",alignOffset:b=0,side:c="bottom",sideOffset:e=4,className:f,...j}){return(0,d.jsx)(g.g,{children:(0,d.jsx)(h.y,{className:"isolate z-50 outline-none",align:a,alignOffset:b,side:c,sideOffset:e,children:(0,d.jsx)(i._,{"data-slot":"dropdown-menu-content",className:(0,l.cn)("z-50 max-h-(--available-height) w-(--anchor-width) min-w-32 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-md bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 outline-none data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:overflow-hidden data-closed:fade-out-0 data-closed:zoom-out-95",f),...j})})})}function p({className:a,inset:b,variant:c="default",...e}){return(0,d.jsx)(j.D,{"data-slot":"dropdown-menu-item","data-inset":b,"data-variant":c,className:(0,l.cn)("group/dropdown-menu-item relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-8 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:text-destructive",a),...e})}function q({className:a,...b}){return(0,d.jsx)(k.w,{"data-slot":"dropdown-menu-separator",className:(0,l.cn)("-mx-1 my-1 h-px bg-border",a),...b})}},82454:(a,b,c)=>{"use strict";c.d(b,{ThemeProvider:()=>d});let d=(0,c(77943).registerClientReference)(function(){throw Error("Attempted to call ThemeProvider() from the server but ThemeProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Mediaservis\\Downloads\\nextjs-vendure\\src\\components\\providers\\theme-provider.tsx","ThemeProvider")},85939:(a,b,c)=>{"use strict";c.d(b,{Button:()=>e});var d=c(77943);let e=(0,d.registerClientReference)(function(){throw Error("Attempted to call Button() from the server but Button is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Mediaservis\\Downloads\\nextjs-vendure\\src\\components\\ui\\button.tsx","Button");(0,d.registerClientReference)(function(){throw Error("Attempted to call buttonVariants() from the server but buttonVariants is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Mediaservis\\Downloads\\nextjs-vendure\\src\\components\\ui\\button.tsx","buttonVariants")},86233:(a,b,c)=>{"use strict";c.d(b,{LanguagePicker:()=>d});let d=(0,c(77943).registerClientReference)(function(){throw Error("Attempted to call LanguagePicker() from the server but LanguagePicker is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Mediaservis\\Downloads\\nextjs-vendure\\src\\components\\layout\\navbar\\language-picker.tsx","LanguagePicker")},88872:(a,b,c)=>{"use strict";c.d(b,{N_:()=>f,a8:()=>h,rd:()=>i});var d=c(84493),e=c(67362);let{Link:f,redirect:g,usePathname:h,useRouter:i,getPathname:j}=(0,d.A)(e.D)},88877:(a,b,c)=>{"use strict";c.d(b,{p:()=>g});var d=c(48249);c(67484);var e=c(67992),f=c(14490);function g({className:a,type:b,...c}){return(0,d.jsx)(e.p,{type:b,"data-slot":"input",className:(0,f.cn)("h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",a),...c})}},92814:(a,b,c)=>{"use strict";c.d(b,{$E:()=>o,$Z:()=>u,$f:()=>p,Db:()=>m,Ei:()=>i,G_:()=>k,Gi:()=>h,Hi:()=>l,Iu:()=>n,K:()=>j,K8:()=>g,Mr:()=>s,Q9:()=>t,Ql:()=>f,Ss:()=>w,bd:()=>e,iN:()=>v,jk:()=>q,qV:()=>r,tK:()=>x});var d=c(6393);let e=(0,d.U)(`
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
`),f=(0,d.U)(`
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
`),g=(0,d.U)(`
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
`),h=(0,d.U)(`
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
`),i=(0,d.U)(`
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
`),j=(0,d.U)(`
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
`),k=(0,d.U)(`
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
`),l=(0,d.U)(`
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
`),m=(0,d.U)(`
    mutation DeleteCustomerAddress($id: ID!) {
        deleteCustomerAddress(id: $id) {
            success
        }
    }
`),n=(0,d.U)(`
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
`),o=(0,d.U)(`
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
`),p=(0,d.U)(`
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
`),q=(0,d.U)(`
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
`),r=(0,d.U)(`
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
`),s=(0,d.U)(`
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
`),t=(0,d.U)(`
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
`),u=(0,d.U)(`
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
`),v=(0,d.U)(`
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
`);(0,d.U)(`
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
`);let w=(0,d.U)(`
    mutation Logout {
        logout {
            __typename
            ... on Success {
                success
            }
        }
    }
`);(0,d.U)(`
    mutation UpdateCustomer($input: UpdateCustomerInput!) {
        updateCustomer(input: $input) {
            __typename
            id
            firstName
            lastName
            emailAddress
        }
    }
`),(0,d.U)(`
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
`),(0,d.U)(`
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
`);let x=(0,d.U)(`
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
`)},93528:(a,b,c)=>{"use strict";c.d(b,{CartIcon:()=>d});let d=(0,c(77943).registerClientReference)(function(){throw Error("Attempted to call CartIcon() from the server but CartIcon is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Mediaservis\\Downloads\\nextjs-vendure\\src\\components\\layout\\navbar\\cart-icon.tsx","CartIcon")},94414:(a,b,c)=>{"use strict";c.d(b,{E:()=>f});var d=c(5735),e=c(81764);function f({className:a,...b}){return(0,d.jsx)("div",{"data-slot":"skeleton",className:(0,e.cn)("animate-pulse rounded-md bg-muted",a),...b})}},95788:(a,b,c)=>{"use strict";c.d(b,{Hy:()=>f,W6:()=>e,ZX:()=>i,dd:()=>h,qw:()=>g,yy:()=>d});let d=process.env.NEXT_PUBLIC_SITE_NAME||"Vendure Store",e="https://nextjs-vendure.pages.dev";function f(a,b=155){if(!a)return"";let c=a.replace(/<[^>]*>/g,"").trim();if(c.length<=b)return c;let d=c.substring(0,b),e=d.lastIndexOf(" ");return e>0?d.substring(0,e)+"...":d+"..."}function g(a){let b=e.replace(/\/$/,""),c=a.startsWith("/")?a:`/${a}`;return`${b}${c}`}function h(a,b){if(a)return[{url:a,alt:b||"Product image"}]}function i(){return{index:!1,follow:!1,googleBot:{index:!1,follow:!1}}}},96487:()=>{},96910:(a,b,c)=>{Promise.resolve().then(c.bind(c,10549)),Promise.resolve().then(c.bind(c,79220)),Promise.resolve().then(c.bind(c,62626)),Promise.resolve().then(c.bind(c,25297))}};