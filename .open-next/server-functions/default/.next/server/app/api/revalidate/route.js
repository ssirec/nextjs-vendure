(()=>{var a={};a.id=6931,a.ids=[6931],a.modules={261:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/app-paths")},3084:(a,b,c)=>{"use strict";c.d(b,{A:()=>e,D:()=>f});var d=c(50920);let e=(0,d.U)(`
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
`)},3295:a=>{"use strict";a.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},6984:(a,b,c)=>{"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d={refresh:function(){return r},revalidatePath:function(){return s},revalidateTag:function(){return p},updateTag:function(){return q}};for(var e in d)Object.defineProperty(b,e,{enumerable:!0,get:d[e]});let f=c(23445),g=c(41954),h=c(47929),i=c(29294),j=c(63033),k=c(43449),l=c(72339),m=c(43014),n=c(77165),o=c(71596);function p(a,b){return b||console.warn('"revalidateTag" without the second argument is now deprecated, add second argument of "max" or use "updateTag". See more info here: https://nextjs.org/docs/messages/revalidate-tag-single-arg'),t([(0,o.encodeCacheTag)(a)],`revalidateTag ${a}`,b)}function q(a){let b=i.workAsyncStorage.getStore();if(!b||b.page.endsWith("/route"))throw Object.defineProperty(Error("updateTag can only be called from within a Server Action. To invalidate cache tags in Route Handlers or other contexts, use revalidateTag instead. See more info here: https://nextjs.org/docs/app/api-reference/functions/updateTag"),"__NEXT_ERROR_CODE",{value:"E872",enumerable:!1,configurable:!0});return t([(0,o.encodeCacheTag)(a)],`updateTag ${a}`,void 0)}function r(){let a=i.workAsyncStorage.getStore(),b=j.workUnitAsyncStorage.getStore();if(!a||a.page.endsWith("/route")||(null==b?void 0:b.phase)!=="action")throw Object.defineProperty(Error("refresh can only be called from within a Server Action. See more info here: https://nextjs.org/docs/app/api-reference/functions/refresh"),"__NEXT_ERROR_CODE",{value:"E870",enumerable:!1,configurable:!0});a&&(a.pathWasRevalidated=m.ActionDidRevalidateDynamicOnly)}function s(a,b){if(a.length>h.NEXT_CACHE_SOFT_TAG_MAX_LENGTH)return void console.warn(`Warning: revalidatePath received "${a}" which exceeded max length of ${h.NEXT_CACHE_SOFT_TAG_MAX_LENGTH}. See more info here https://nextjs.org/docs/app/api-reference/functions/revalidatePath`);let c=`${h.NEXT_CACHE_IMPLICIT_TAG_ID}${(0,o.encodeCacheTag)((0,n.removeTrailingSlash)(a))}`;b?c+=`${c.endsWith("/")?"":"/"}${b}`:(0,g.isDynamicRoute)(a)&&console.warn(`Warning: a dynamic page path "${a}" was passed to "revalidatePath", but the "type" parameter is missing. This has no effect by default, see more info here https://nextjs.org/docs/app/api-reference/functions/revalidatePath`);let d=[c];return c===`${h.NEXT_CACHE_IMPLICIT_TAG_ID}/`?d.push(`${h.NEXT_CACHE_IMPLICIT_TAG_ID}/index`):c===`${h.NEXT_CACHE_IMPLICIT_TAG_ID}/index`&&d.push(`${h.NEXT_CACHE_IMPLICIT_TAG_ID}/`),t(d,`revalidatePath ${a}`)}function t(a,b,c){var d;let e=i.workAsyncStorage.getStore();if(!e||!e.incrementalCache)throw Object.defineProperty(Error(`Invariant: static generation store missing in ${b}`),"__NEXT_ERROR_CODE",{value:"E263",enumerable:!1,configurable:!0});let g=j.workUnitAsyncStorage.getStore();if(g){if("render"===g.phase)throw Object.defineProperty(Error(`Route ${e.route} used "${b}" during render which is unsupported. To ensure revalidation is performed consistently it must always happen outside of renders and cached functions. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`),"__NEXT_ERROR_CODE",{value:"E7",enumerable:!1,configurable:!0});switch(g.type){case"cache":case"private-cache":throw Object.defineProperty(Error(`Route ${e.route} used "${b}" inside a "use cache" which is unsupported. To ensure revalidation is performed consistently it must always happen outside of renders and cached functions. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`),"__NEXT_ERROR_CODE",{value:"E181",enumerable:!1,configurable:!0});case"unstable-cache":throw Object.defineProperty(Error(`Route ${e.route} used "${b}" inside a function cached with "unstable_cache(...)" which is unsupported. To ensure revalidation is performed consistently it must always happen outside of renders and cached functions. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`),"__NEXT_ERROR_CODE",{value:"E306",enumerable:!1,configurable:!0});case"generate-static-params":throw Object.defineProperty(Error(`Route ${e.route} used "${b}" inside \`generateStaticParams\` which is unsupported. To ensure revalidation is performed consistently it must always happen outside of renders and cached functions. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`),"__NEXT_ERROR_CODE",{value:"E1127",enumerable:!1,configurable:!0});case"prerender":case"prerender-runtime":let a=Object.defineProperty(Error(`Route ${e.route} used ${b} without first calling \`await connection()\`.`),"__NEXT_ERROR_CODE",{value:"E406",enumerable:!1,configurable:!0});return(0,f.abortAndThrowOnSynchronousRequestDataAccess)(e.route,b,a,g);case"prerender-client":case"validation-client":throw Object.defineProperty(new l.InvariantError(`${b} must not be used within a client component. Next.js should be preventing ${b} from being included in client components statically, but did not in this case.`),"__NEXT_ERROR_CODE",{value:"E693",enumerable:!1,configurable:!0});case"prerender-ppr":return(0,f.postponeWithTracking)(e.route,b,g.dynamicTracking);case"prerender-legacy":g.revalidate=0;let c=Object.defineProperty(new k.DynamicServerError(`Route ${e.route} couldn't be rendered statically because it used \`${b}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`),"__NEXT_ERROR_CODE",{value:"E558",enumerable:!1,configurable:!0});throw e.dynamicUsageDescription=b,e.dynamicUsageStack=c.stack,c}}for(let b of(e.pendingRevalidatedTags||(e.pendingRevalidatedTags=[]),a))-1===e.pendingRevalidatedTags.findIndex(a=>a.tag===b&&("string"==typeof a.profile&&"string"==typeof c?a.profile===c:"object"==typeof a.profile&&"object"==typeof c?JSON.stringify(a.profile)===JSON.stringify(c):a.profile===c))&&e.pendingRevalidatedTags.push({tag:b,profile:c});let h=c&&"object"==typeof c?c:c&&"string"==typeof c&&(null==e||null==(d=e.cacheLifeProfiles)?void 0:d[c])?e.cacheLifeProfiles[c]:void 0;c&&(null==h?void 0:h.expire)!==0||(e.pathWasRevalidated=m.ActionDidRevalidateStaticAndDynamic)}},10846:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},16949:(a,b,c)=>{let d;d={unstable_cache:c(85568).e,updateTag:c(6984).updateTag,revalidateTag:c(6984).revalidateTag,revalidatePath:c(6984).revalidatePath,refresh:c(6984).refresh,unstable_noStore:c(89503).M,cacheLife:c(92418).F,cacheTag:c(82194).z};let e=!1,f=!1;d.unstable_cacheLife=function(){return e||(e=!0,console.error(Error("`unstable_cacheLife` was recently stabilized and should be imported as `cacheLife`. The `unstable` prefixed form will be removed in a future version of Next.js."))),d.cacheLife.apply(this,arguments)},d.unstable_cacheTag=function(){return f||(f=!0,console.error(Error("`unstable_cacheTag` was recently stabilized and should be imported as `cacheTag`. The `unstable` prefixed form will be removed in a future version of Next.js."))),d.cacheTag.apply(this,arguments)},a.exports=d,b.unstable_cache=d.unstable_cache,b.revalidatePath=d.revalidatePath,b.revalidateTag=d.revalidateTag,b.updateTag=d.updateTag,b.unstable_noStore=d.unstable_noStore,b.cacheLife=d.cacheLife,b.unstable_cacheLife=d.unstable_cacheLife,b.cacheTag=d.cacheTag,b.unstable_cacheTag=d.unstable_cacheTag,b.refresh=d.refresh},18797:(a,b,c)=>{"use strict";c.d(b,{D9:()=>j,E5:()=>q,Fm:()=>f,Jg:()=>i,OH:()=>m,Q7:()=>o,QB:()=>r,YK:()=>p,aF:()=>k,d6:()=>s,iv:()=>n,l1:()=>g,pB:()=>l,vq:()=>h});var d=c(50920),e=c(3084);let f=(0,d.U)(`
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
`,[e.A])},19225:(a,b,c)=>{"use strict";a.exports=c(44870)},21591:(a,b,c)=>{"use strict";c.r(b),c.d(b,{handler:()=>G,patchFetch:()=>F,routeModule:()=>B,serverHooks:()=>E,workAsyncStorage:()=>C,workUnitAsyncStorage:()=>D});var d={};c.r(d),c.d(d,{POST:()=>A});var e=c(19225),f=c(84006),g=c(8317),h=c(99373),i=c(34775),j=c(24235),k=c(261),l=c(54365),m=c(90771),n=c(73461),o=c(67798),p=c(92280),q=c(62018),r=c(45696),s=c(47929),t=c(86439),u=c(37527),v=c(16949),w=c(23211),x=c(37436),y=c(56035);let z=[{match:"collections",kind:"locale-only"},{match:"countries",kind:"locale-only"},{match:"featured",kind:"currency-dependent"},{match:/^collection-meta-.+$/,kind:"locale-only"},{match:/^footer$/,kind:"locale-only"},{match:/^navbar-collections$/,kind:"locale-only"},{match:/^mobile-nav$/,kind:"locale-only"},{match:/^product-.+$/,kind:"currency-dependent"},{match:/^collection-.+$/,kind:"currency-dependent"},{match:/^related-products-.+$/,kind:"currency-dependent"}];async function A(a){let b=a.headers.get("authorization"),c=process.env.REVALIDATION_SECRET;if(!c)return console.error("REVALIDATION_SECRET environment variable not set"),w.NextResponse.json({error:"Server configuration error"},{status:500});if(b!==`Bearer ${c}`)return w.NextResponse.json({error:"Unauthorized"},{status:401});try{let b,{tags:c}=await a.json();if(!c||!Array.isArray(c)||0===c.length)return w.NextResponse.json({error:'Missing or invalid "tags" array in request body'},{status:400});if(c.length>100)return w.NextResponse.json({error:"Too many tags (max 100)"},{status:400});let d=[];for(let a of c){if("string"!=typeof a){d.push({tag:String(a),success:!1,error:"Invalid tag type"});continue}let c=function(a){let b=z.find(b=>"string"==typeof b.match?b.match===a:b.match.test(a));return b?.kind??null}(a);if(null===c){d.push({tag:a,success:!1,error:"Unknown tag"});continue}let e=[];if("locale-only"===c)for(let b of x.D.locales)e.push(`${a}-${b}`);else for(let c of(b??=(await (0,y.gK)()).availableCurrencyCodes,x.D.locales))for(let d of b)e.push(`${a}-${c}-${d}`);for(let a of e)try{(0,v.revalidateTag)(a,{expire:0}),d.push({tag:a,success:!0})}catch{d.push({tag:a,success:!1,error:"Revalidation failed"})}}let e=d.every(a=>a.success);return w.NextResponse.json({revalidated:e,results:d,timestamp:Date.now()},{status:e?200:207})}catch{return w.NextResponse.json({error:"Invalid JSON body"},{status:400})}}let B=new e.AppRouteRouteModule({definition:{kind:f.RouteKind.APP_ROUTE,page:"/api/revalidate/route",pathname:"/api/revalidate",filename:"route",bundlePath:"app/api/revalidate/route"},distDir:".next",relativeProjectDir:"",resolvedPagePath:"C:\\Users\\Mediaservis\\Downloads\\nextjs-vendure\\src\\app\\api\\revalidate\\route.ts",nextConfigOutput:"standalone",userland:d,...{}}),{workAsyncStorage:C,workUnitAsyncStorage:D,serverHooks:E}=B;function F(){return(0,g.patchFetch)({workAsyncStorage:C,workUnitAsyncStorage:D})}async function G(a,b,c){c.requestMeta&&(0,h.setRequestMeta)(a,c.requestMeta),B.isDev&&(0,h.addRequestMeta)(a,"devRequestTimingInternalsEnd",process.hrtime.bigint());let d="/api/revalidate/route";"/index"===d&&(d="/");let e=await B.prepare(a,b,{srcPage:d,multiZoneDraftMode:!1});if(!e)return b.statusCode=400,b.end("Bad Request"),null==c.waitUntil||c.waitUntil.call(c,Promise.resolve()),null;let{buildId:g,deploymentId:v,params:w,nextConfig:x,parsedUrl:y,isDraftMode:z,prerenderManifest:A,routerServerContext:C,isOnDemandRevalidate:D,revalidateOnlyGenerated:E,resolvedPathname:F,clientReferenceManifest:G,serverActionsManifest:H}=e,I=(0,k.normalizeAppPath)(d),J=!!(A.dynamicRoutes[I]||A.routes[F]),K=async()=>((null==C?void 0:C.render404)?await C.render404(a,b,y,!1):b.end("This page could not be found"),null);if(J&&!z){let a=!!A.routes[F],b=A.dynamicRoutes[I];if(b&&!1===b.fallback&&!a){if(x.adapterPath)return await K();throw new t.NoFallbackError}}let L=null;!J||B.isDev||z||(L="/index"===(L=F)?"/":L);let M=!0===B.isDev||!J,N=J&&!M;H&&G&&(0,j.setManifestsSingleton)({page:d,clientReferenceManifest:G,serverActionsManifest:H});let O=a.method||"GET",P=(0,i.getTracer)(),Q=P.getActiveScopeSpan(),R=!!(null==C?void 0:C.isWrappedByNextServer),S=!!(0,h.getRequestMeta)(a,"minimalMode"),T=(0,h.getRequestMeta)(a,"incrementalCache")||await B.getIncrementalCache(a,x,A,S);null==T||T.resetRequestCache(),globalThis.__incrementalCache=T;let U={params:w,previewProps:A.preview,renderOpts:{experimental:{authInterrupts:!!x.experimental.authInterrupts},cacheComponents:!!x.cacheComponents,supportsDynamicResponse:M,incrementalCache:T,cacheLifeProfiles:x.cacheLife,waitUntil:c.waitUntil,onClose:a=>{b.on("close",a)},onAfterTaskError:void 0,onInstrumentationRequestError:(b,c,d,e)=>B.onRequestError(a,b,d,e,C)},sharedContext:{buildId:g,deploymentId:v}},V=new l.NodeNextRequest(a),W=new l.NodeNextResponse(b),X=m.NextRequestAdapter.fromNodeNextRequest(V,(0,m.signalFromNodeResponse)(b));try{let e,g=async a=>B.handle(X,U).finally(()=>{if(!a)return;a.setAttributes({"http.status_code":b.statusCode,"next.rsc":!1});let c=P.getRootSpanAttributes();if(!c)return;if(c.get("next.span_type")!==n.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${c.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let f=c.get("next.route");if(f){let b=`${O} ${f}`;a.setAttributes({"next.route":f,"http.route":f,"next.span_name":b}),a.updateName(b),e&&e!==a&&(e.setAttribute("http.route",f),e.updateName(b))}else a.updateName(`${O} ${d}`)}),h=async e=>{var h,i;let j=async({previousCacheEntry:f})=>{try{if(!S&&D&&E&&!f)return b.statusCode=404,b.setHeader("x-nextjs-cache","REVALIDATED"),b.end("This page could not be found"),null;let d=await g(e);a.fetchMetrics=U.renderOpts.fetchMetrics;let h=U.renderOpts.pendingWaitUntil;h&&c.waitUntil&&(c.waitUntil(h),h=void 0);let i=U.renderOpts.collectedTags;if(!J)return await (0,p.I)(V,W,d,U.renderOpts.pendingWaitUntil),null;{let a=await d.blob(),b=(0,q.toNodeOutgoingHttpHeaders)(d.headers);i&&(b[s.NEXT_CACHE_TAGS_HEADER]=i),!b["content-type"]&&a.type&&(b["content-type"]=a.type);let c=void 0!==U.renderOpts.collectedRevalidate&&!(U.renderOpts.collectedRevalidate>=s.INFINITE_CACHE)&&U.renderOpts.collectedRevalidate,e=void 0===U.renderOpts.collectedExpire||U.renderOpts.collectedExpire>=s.INFINITE_CACHE?void 0:U.renderOpts.collectedExpire;return{value:{kind:u.CachedRouteKind.APP_ROUTE,status:d.status,body:Buffer.from(await a.arrayBuffer()),headers:b},cacheControl:{revalidate:c,expire:e}}}}catch(b){throw(null==f?void 0:f.isStale)&&await B.onRequestError(a,b,{routerKind:"App Router",routePath:d,routeType:"route",revalidateReason:(0,o.c)({isStaticGeneration:N,isOnDemandRevalidate:D})},!1,C),b}},k=await B.handleResponse({req:a,nextConfig:x,cacheKey:L,routeKind:f.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:A,isRoutePPREnabled:!1,isOnDemandRevalidate:D,revalidateOnlyGenerated:E,responseGenerator:j,waitUntil:c.waitUntil,isMinimalMode:S});if(!J)return null;if((null==k||null==(h=k.value)?void 0:h.kind)!==u.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==k||null==(i=k.value)?void 0:i.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});S||b.setHeader("x-nextjs-cache",D?"REVALIDATED":k.isMiss?"MISS":k.isStale?"STALE":"HIT"),z&&b.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let l=(0,q.fromNodeOutgoingHttpHeaders)(k.value.headers);return S&&J||l.delete(s.NEXT_CACHE_TAGS_HEADER),!k.cacheControl||b.getHeader("Cache-Control")||l.get("Cache-Control")||l.set("Cache-Control",(0,r.getCacheControlHeader)(k.cacheControl)),await (0,p.I)(V,W,new Response(k.value.body,{headers:l,status:k.value.status||200})),null};R&&Q?await h(Q):(e=P.getActiveScopeSpan(),await P.withPropagatedContext(a.headers,()=>P.trace(n.BaseServerSpan.handleRequest,{spanName:`${O} ${d}`,kind:i.SpanKind.SERVER,attributes:{"http.method":O,"http.target":a.url}},h),void 0,!R))}catch(b){if(b instanceof t.NoFallbackError||await B.onRequestError(a,b,{routerKind:"App Router",routePath:I,routeType:"route",revalidateReason:(0,o.c)({isStaticGeneration:N,isOnDemandRevalidate:D})},!1,C),J)throw b;return await (0,p.I)(V,W,new Response(null,{status:500})),null}}},29294:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-async-storage.external.js")},37436:(a,b,c)=>{"use strict";c.d(b,{D:()=>d});let d=(0,c(5696).A)({locales:["en","de","sl","it","hr","fr","es"],defaultLocale:"sl"})},41954:(a,b,c)=>{"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d={getSortedRouteObjects:function(){return f.getSortedRouteObjects},getSortedRoutes:function(){return f.getSortedRoutes},isDynamicRoute:function(){return g.isDynamicRoute}};for(var e in d)Object.defineProperty(b,e,{enumerable:!0,get:d[e]});let f=c(96760),g=c(76220)},44870:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},50920:(a,b,c)=>{"use strict";c.d(b,{B:()=>d.Bk,U:()=>e});var d=c(54610);let e=(0,d.Se)()},56035:(a,b,c)=>{"use strict";c.d(b,{dl:()=>h,gK:()=>f,o4:()=>g});var d=c(81557),e=c(18797);async function f(){return(await (0,d.P)(e.QB)).data.activeChannel}async function g(a){return(await (0,d.P)(e.Q7,void 0,{languageCode:a})).data.availableCountries||[]}async function h(a){return(await (0,d.P)(e.Fm,void 0,{languageCode:a})).data.collections.items}},63033:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},75587:(a,b,c)=>{"use strict";c.d(b,{c4:()=>f});var d=c(65573);let e=process.env.VENDURE_AUTH_TOKEN_COOKIE||"vendure-auth-token";async function f(){let a=await (0,d.UL)();return a.get(e)?.value}},76220:(a,b,c)=>{"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"isDynamicRoute",{enumerable:!0,get:function(){return g}});let d=c(32107),e=/\/[^/]*\[[^/]+\][^/]*(?=\/|$)/,f=/\/\[[^/]+\](?=\/|$)/;function g(a,b=!0){return((0,d.isInterceptionRouteAppPath)(a)&&(a=(0,d.extractInterceptionRouteInformation)(a).interceptedRoute),b)?f.test(a):e.test(a)}},78335:()=>{},81557:(a,b,c)=>{"use strict";c.d(b,{P:()=>k,T:()=>l});var d=c(57546),e=c(75587);let f=process.env.VENDURE_SHOP_API_URL||"https://my-vendure-shop-production-492b.up.railway.app/shop-api",g=process.env.VENDURE_CHANNEL_TOKEN||process.env.NEXT_PUBLIC_VENDURE_CHANNEL_TOKEN||"",h=process.env.VENDURE_AUTH_TOKEN_HEADER||"vendure-auth-token",i=process.env.VENDURE_CHANNEL_TOKEN_HEADER||"vendure-token",j=process.env.VENDURE_LOCALE_HEADER||"Accept-Language";if(!f)throw Error("VENDURE_SHOP_API_URL or NEXT_PUBLIC_VENDURE_SHOP_API_URL environment variable is not set");async function k(a,...[b,c]){let{token:l,useAuthToken:m,channelToken:n,languageCode:o,currencyCode:p,fetch:q,tags:r}=c||{},s={"Content-Type":"application/json",...q?.headers},t=l;m&&!t&&(t=await (0,e.c4)()),t&&(s.Authorization=`Bearer ${t}`),s[i]=n||g,o&&(s[j]=o);let u=new URL(f);o&&u.searchParams.set("languageCode",o),p&&u.searchParams.set("currencyCode",p);try{let c,e=await fetch(u.toString(),{...q,method:"POST",headers:s,body:JSON.stringify({query:(0,d.y)(a),variables:b||{}}),...r&&{next:{tags:r}}});if(!e.ok)return console.error(`Vendure API HTTP error: ${e.status}`),null;let f=await e.text(),g=f.trim();if(g.startsWith("<!")||g.startsWith("<html")||g.startsWith("<HTML"))return console.error("Vendure API returned HTML instead of JSON"),null;try{c=JSON.parse(f)}catch{return console.error("Vendure API returned invalid JSON"),null}if(c.errors)return console.error(`Vendure GraphQL errors: ${c.errors.map(a=>a.message).join(", ")}`),null;if(!c.data)return console.error("No data returned from Vendure API"),null;let i=e.headers.get(h);return{data:c.data,...i&&{token:i}}}catch(a){return console.error("Vendure API request failed:",a),null}}async function l(a,...[b,c]){return k(a,b,c)}},82194:(a,b,c)=>{"use strict";function d(){throw Object.defineProperty(Error("`cacheTag()` is only available with the `cacheComponents` config."),"__NEXT_ERROR_CODE",{value:"E886",enumerable:!1,configurable:!0})}Object.defineProperty(b,"z",{enumerable:!0,get:function(){return d}}),c(63033),c(8317)},85568:(a,b,c)=>{"use strict";Object.defineProperty(b,"e",{enumerable:!0,get:function(){return k}});let d=c(47929),e=c(8317),f=c(29294),g=c(63033),h=c(37527),i=0;async function j(a,b,c,e,f,g,i){await b.set(c,{kind:h.CachedRouteKind.FETCH,data:{headers:{},body:JSON.stringify(a),status:200,url:""},revalidate:"number"!=typeof f?d.CACHE_ONE_YEAR_SECONDS:f},{fetchCache:!0,tags:e,fetchIdx:g,fetchUrl:i})}function k(a,b,c={}){if(0===c.revalidate)throw Object.defineProperty(Error(`Invariant revalidate: 0 can not be passed to unstable_cache(), must be "false" or "> 0" ${a.toString()}`),"__NEXT_ERROR_CODE",{value:"E57",enumerable:!1,configurable:!0});let d=c.tags?(0,e.validateTags)(c.tags,`unstable_cache ${a.toString()}`):[];(0,e.validateRevalidate)(c.revalidate,`unstable_cache ${a.name||a.toString()}`);let l=`${a.toString()}-${Array.isArray(b)&&b.join(",")}`;return async(...b)=>{let e=f.workAsyncStorage.getStore(),k=g.workUnitAsyncStorage.getStore(),m=(null==e?void 0:e.incrementalCache)||globalThis.__incrementalCache;if(!m)throw Object.defineProperty(Error(`Invariant: incrementalCache missing in unstable_cache ${a.toString()}`),"__NEXT_ERROR_CODE",{value:"E469",enumerable:!1,configurable:!0});let n=k?(0,g.getCacheSignal)(k):null;n&&n.beginRead();try{let f=e&&k?function(a,b){switch(b.type){case"request":let c=b.url.pathname,d=new URLSearchParams(b.url.search),e=[...d.keys()].sort((a,b)=>a.localeCompare(b)).map(a=>`${a}=${d.get(a)}`).join("&");return`${c}${e.length?"?":""}${e}`;case"prerender":case"prerender-client":case"validation-client":case"prerender-runtime":case"prerender-ppr":case"prerender-legacy":case"cache":case"private-cache":case"unstable-cache":case"generate-static-params":return a.route;default:return b}}(e,k):"",n=`${l}-${JSON.stringify(b)}`,o=await m.generateCacheKey(n),p=`unstable_cache ${f} ${a.name?` ${a.name}`:o}`,q=(e?e.nextFetchId:i)??1,r=null==k?void 0:k.implicitTags,s={type:"unstable-cache",phase:"render",implicitTags:r,draftMode:k&&e&&(0,g.getDraftModeProviderForCacheScope)(e,k),rootParams:void 0};if(e){e.nextFetchId=q+1;let f=!1;if(k)switch(k.type){case"cache":case"private-cache":case"prerender":case"prerender-runtime":case"prerender-ppr":case"prerender-legacy":"number"==typeof c.revalidate&&(k.revalidate<c.revalidate||(k.revalidate=c.revalidate));let i=k.tags;if(null===i)k.tags=d.slice();else for(let a of d)i.includes(a)||i.push(a);break;case"unstable-cache":f=!0}if(!f&&"force-no-store"!==e.fetchCache&&!e.isOnDemandRevalidate&&!m.isOnDemandRevalidate&&!e.isDraftMode){let f=await m.get(o,{kind:h.IncrementalCacheKind.FETCH,revalidate:c.revalidate,tags:d,softTags:null==r?void 0:r.tags,fetchIdx:q,fetchUrl:p});if(f&&f.value)if(f.value.kind!==h.CachedRouteKind.FETCH)console.error(`Invariant invalid cacheEntry returned for ${n}`);else{let h=void 0!==f.value.data.body?JSON.parse(f.value.data.body):void 0;if(f.isStale){if(e.pendingRevalidates||(e.pendingRevalidates={}),!e.pendingRevalidates[n]){let f=g.workUnitAsyncStorage.run(s,a,...b).then(async a=>(await j(a,m,o,d,c.revalidate,q,p),a)).catch(a=>(console.error(`revalidating cache with key: ${n}`,a),h));e.isStaticGeneration&&f.catch(()=>{}),e.pendingRevalidates[n]=f}if(e.isStaticGeneration)return await e.pendingRevalidates[n]}return h}}let l=await g.workUnitAsyncStorage.run(s,a,...b);return e.isDraftMode||(e.pendingRevalidates||(e.pendingRevalidates={}),e.pendingRevalidates[n]=j(l,m,o,d,c.revalidate,q,p)),l}{if(i+=1,!m.isOnDemandRevalidate){let a=await m.get(o,{kind:h.IncrementalCacheKind.FETCH,revalidate:c.revalidate,tags:d,fetchIdx:q,fetchUrl:p,softTags:null==r?void 0:r.tags});if(a&&a.value){if(a.value.kind!==h.CachedRouteKind.FETCH)console.error(`Invariant invalid cacheEntry returned for ${n}`);else if(!a.isStale)return void 0!==a.value.data.body?JSON.parse(a.value.data.body):void 0}}let e=await g.workUnitAsyncStorage.run(s,a,...b);return await j(e,m,o,d,c.revalidate,q,p),e}}finally{n&&n.endRead()}}}},86439:a=>{"use strict";a.exports=require("next/dist/shared/lib/no-fallback-error.external")},89503:(a,b,c)=>{"use strict";Object.defineProperty(b,"M",{enumerable:!0,get:function(){return g}});let d=c(29294),e=c(63033),f=c(23445);function g(){let a=d.workAsyncStorage.getStore(),b=e.workUnitAsyncStorage.getStore();if(a){if(!a.forceStatic){if(a.isUnstableNoStore=!0,b)switch(b.type){case"prerender":case"prerender-client":case"validation-client":case"prerender-runtime":return}(0,f.markCurrentScopeAsDynamic)(a,b,"unstable_noStore()")}}}},92280:(a,b,c)=>{"use strict";Object.defineProperty(b,"I",{enumerable:!0,get:function(){return g}});let d=c(28208),e=c(47617),f=c(62018);async function g(a,b,c,g){if((0,d.isNodeNextResponse)(b)){var h;b.statusCode=c.status,b.statusMessage=c.statusText;let d=["set-cookie","www-authenticate","proxy-authenticate","vary"];null==(h=c.headers)||h.forEach((a,c)=>{if("x-middleware-set-cookie"!==c.toLowerCase())if("set-cookie"===c.toLowerCase())for(let d of(0,f.splitCookiesString)(a))b.appendHeader(c,d);else{let e=void 0!==b.getHeader(c);(d.includes(c.toLowerCase())||!e)&&b.appendHeader(c,a)}});let{originalResponse:i}=b;c.body&&"HEAD"!==a.method?await (0,e.pipeToNodeResponse)(c.body,i,g):i.end()}}},92418:(a,b,c)=>{"use strict";function d(a){throw Object.defineProperty(Error("`cacheLife()` is only available with the `cacheComponents` config."),"__NEXT_ERROR_CODE",{value:"E887",enumerable:!1,configurable:!0})}Object.defineProperty(b,"F",{enumerable:!0,get:function(){return d}}),c(72339),c(29294),c(63033)},96487:()=>{},96760:(a,b)=>{"use strict";Object.defineProperty(b,"__esModule",{value:!0});var c={getSortedRouteObjects:function(){return g},getSortedRoutes:function(){return f}};for(var d in c)Object.defineProperty(b,d,{enumerable:!0,get:c[d]});class e{insert(a){this._insert(a.split("/").filter(Boolean),[],!1)}smoosh(){return this._smoosh()}_smoosh(a="/"){let b=[...this.children.keys()].sort();null!==this.slugName&&b.splice(b.indexOf("[]"),1),null!==this.restSlugName&&b.splice(b.indexOf("[...]"),1),null!==this.optionalRestSlugName&&b.splice(b.indexOf("[[...]]"),1);let c=b.map(b=>this.children.get(b)._smoosh(`${a}${b}/`)).reduce((a,b)=>[...a,...b],[]);if(null!==this.slugName&&c.push(...this.children.get("[]")._smoosh(`${a}[${this.slugName}]/`)),!this.placeholder){let b="/"===a?"/":a.slice(0,-1);if(null!=this.optionalRestSlugName)throw Object.defineProperty(Error(`You cannot define a route with the same specificity as a optional catch-all route ("${b}" and "${b}[[...${this.optionalRestSlugName}]]").`),"__NEXT_ERROR_CODE",{value:"E458",enumerable:!1,configurable:!0});c.unshift(b)}return null!==this.restSlugName&&c.push(...this.children.get("[...]")._smoosh(`${a}[...${this.restSlugName}]/`)),null!==this.optionalRestSlugName&&c.push(...this.children.get("[[...]]")._smoosh(`${a}[[...${this.optionalRestSlugName}]]/`)),c}_insert(a,b,c){if(0===a.length){this.placeholder=!1;return}if(c)throw Object.defineProperty(Error("Catch-all must be the last part of the URL."),"__NEXT_ERROR_CODE",{value:"E392",enumerable:!1,configurable:!0});let d=a[0];if(d.startsWith("[")&&d.endsWith("]")){let e=d.slice(1,-1),g=!1;if(e.startsWith("[")&&e.endsWith("]")&&(e=e.slice(1,-1),g=!0),e.startsWith("…"))throw Object.defineProperty(Error(`Detected a three-dot character ('…') at ('${e}'). Did you mean ('...')?`),"__NEXT_ERROR_CODE",{value:"E147",enumerable:!1,configurable:!0});if(e.startsWith("...")&&(e=e.substring(3),c=!0),e.startsWith("[")||e.endsWith("]"))throw Object.defineProperty(Error(`Segment names may not start or end with extra brackets ('${e}').`),"__NEXT_ERROR_CODE",{value:"E421",enumerable:!1,configurable:!0});if(e.startsWith("."))throw Object.defineProperty(Error(`Segment names may not start with erroneous periods ('${e}').`),"__NEXT_ERROR_CODE",{value:"E288",enumerable:!1,configurable:!0});function f(a,c){if(null!==a&&a!==c)throw Object.defineProperty(Error(`You cannot use different slug names for the same dynamic path ('${a}' !== '${c}').`),"__NEXT_ERROR_CODE",{value:"E337",enumerable:!1,configurable:!0});b.forEach(a=>{if(a===c)throw Object.defineProperty(Error(`You cannot have the same slug name "${c}" repeat within a single dynamic path`),"__NEXT_ERROR_CODE",{value:"E247",enumerable:!1,configurable:!0});if(a.replace(/\W/g,"")===d.replace(/\W/g,""))throw Object.defineProperty(Error(`You cannot have the slug names "${a}" and "${c}" differ only by non-word symbols within a single dynamic path`),"__NEXT_ERROR_CODE",{value:"E499",enumerable:!1,configurable:!0})}),b.push(c)}if(c)if(g){if(null!=this.restSlugName)throw Object.defineProperty(Error(`You cannot use both an required and optional catch-all route at the same level ("[...${this.restSlugName}]" and "${a[0]}" ).`),"__NEXT_ERROR_CODE",{value:"E299",enumerable:!1,configurable:!0});f(this.optionalRestSlugName,e),this.optionalRestSlugName=e,d="[[...]]"}else{if(null!=this.optionalRestSlugName)throw Object.defineProperty(Error(`You cannot use both an optional and required catch-all route at the same level ("[[...${this.optionalRestSlugName}]]" and "${a[0]}").`),"__NEXT_ERROR_CODE",{value:"E300",enumerable:!1,configurable:!0});f(this.restSlugName,e),this.restSlugName=e,d="[...]"}else{if(g)throw Object.defineProperty(Error(`Optional route parameters are not yet supported ("${a[0]}").`),"__NEXT_ERROR_CODE",{value:"E435",enumerable:!1,configurable:!0});f(this.slugName,e),this.slugName=e,d="[]"}}this.children.has(d)||this.children.set(d,new e),this.children.get(d)._insert(a.slice(1),b,c)}constructor(){this.placeholder=!0,this.children=new Map,this.slugName=null,this.restSlugName=null,this.optionalRestSlugName=null}}function f(a){let b=new e;return a.forEach(a=>b.insert(a)),b.smoosh()}function g(a,b){let c={},d=[];for(let e=0;e<a.length;e++){let f=b(a[e]);c[f]=e,d[e]=f}return f(d).map(b=>a[c[b]])}}};var b=require("../../../webpack-runtime.js");b.C(a);var c=b.X(0,[9602,838,5592],()=>b(b.s=21591));module.exports=c})();