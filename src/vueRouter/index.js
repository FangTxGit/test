let _Vue;
class VueRouter {
    constructor({ routes }) {
        let routeMap = {}
        routes.forEach(item => {
            if (!routeMap[item.path]) {
                routeMap[item.path] = item
            }
        })
        this.routeMap = routeMap
        this.current = {
            path: '/',
            component: {
                template: '<div></div>'
            }
        }
        this.routes = routes
        this.listing()
    }
    listing () {
        window.addEventListener('load', () => {
            const hash = window.location.hash
            if (!hash) {
                window.location.hash = '/'
            }
            const slicehash = hash.slice(1)
            const currentcomponent = this.routeMap[slicehash]
            if (currentcomponent) {
                this.current.path = currentcomponent.path
                this.current.component = currentcomponent.component
            }
        })
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash
            const slicehash = hash.slice(1)
            const currentcomponent = this.routeMap[slicehash]
            if (currentcomponent) {
                this.current.path = currentcomponent.path
                this.current.component = currentcomponent.component
            }
        })
    }
}
VueRouter.install = function (Vue) {
    _Vue = Vue
    _Vue.mixin({
        beforeCreate () {
            let vm = this
            if (vm.$options.router) {
                vm._routerRoot = this
                vm._router = vm.$options.router
                _Vue.util.defineReactive(vm, '_route', vm._router.current)
            } else {
                vm._routerRoot = vm.$parent && vm.$parent._routerRoot
            }
        }
    })
    _Vue.component('router-link', {
        props: {
            to: String
        },
        render (h) {
            return h('a', { attrs: { href: '#' + this.to } }, this.$slots.default)
        },
    })
    _Vue.component('router-view', {
        render (h) {
            let component = this._routerRoot._route.component
            return h(component)
        }
    })
}
if (Vue.typeof !== 'undefined') {
    Vue.use(VueRouter)
}



