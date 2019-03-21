const isProduction = process.env.NODE_ENV === 'production'

let Query = {}

Query.install = function (Vue) {
    Vue.prototype.$updateRouter = function (query) {
        if (!query) {
            query = this.$queryFilter()
        }
        this.$router.replace({
            query: Object.assign({}, query)
        })
    }

    Vue.prototype.$queryFilter = function () {
        let query = this.$route.query
        let filter = this.filter || {}
        for (var i in filter) {
            if (typeof query[i] !== 'undefined') {
                if (typeof filter[i] === 'number') {
                    filter[i] = parseInt(query[i])
                } else {
                    filter[i] = query[i]
                }
            }

        }
        return filter
    }
}

export default Query
