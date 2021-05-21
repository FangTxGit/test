class VueRouter {
    constructor({ routes }) {
        this.routes = routes
        let _mapRoute = {}
        routes.map(item => {
            if (!_mapRoute[item.path]) {
                _mapRoute[item.path] = item
            }
        })
        this.mapRoutes = _mapRoute
        this._route = {
            path: '/',
            component: {
                template: '<h1>123.com</h1>'
            }
        }
        this.listen()
    }
    listen () {
        window.addEventListener('load', () => {
            const hash = document.location.hash
            if (hash.length === 0) {
                document.location.hash = '/'
            }
            const substrHash = hash.substr(1)
            const currentRoute = this.mapRoutes[substrHash]
            if (currentRoute) {
                this._route.path = currentRoute.path
                this._route.component = currentRoute.component
            }
        })
        window.addEventListener('hashchange', () => {
            const hash = document.location.hash

            const substrHash = hash.substr(1)
            const currentRoute = this.mapRoutes[substrHash]
            if (currentRoute) {
                this._route.path = currentRoute.path
                this._route.component = currentRoute.component
            }

        })
    }
}


VueRouter.install = function (Vue) {
    Vue.mixin({
        beforeCreate () {
            var vm = this
            console.log(vm);
            if (vm.$options.router) {
                vm.routeRoot = this
                vm.router = vm.$options.router

                Vue.util.defineReactive(vm, '_route', vm.router._route)
            } else {
                vm.routeRoot = vm.$parent && vm.$parent.routeRoot
            }

        },
    })
    Vue.component('router-link', {
        props: {
            to: String
        },
        render (h) {
            return h('a', { attrs: { href: '#' + this.to } }, this.$slots.default)
        },
    })
    Vue.component('router-view', {
        render (h) {
            const component = this.routeRoot._route.component
            return h(component)
        },
    })
}
if (typeof Vue != 'undefined') {
    Vue.use(VueRouter)
}