class Status {
    OK() {
        return 200
    }
    NotFound() {
        return 500
    }
}
module.exports = new Status()