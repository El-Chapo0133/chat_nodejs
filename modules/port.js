class Port {
    constructor(p_port) {
        this.port = 8080
    }
    get Port() {
        return this.port
    }
    set Port(value) {
        this.port = value
    }
}

module.exports = new Port()