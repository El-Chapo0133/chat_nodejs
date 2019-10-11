let os = require('os')
let interfaces = os.networkInterfaces()

class GetIp {
    constructor() {
        this.localIp = this.getLocalIp()
    }
    get Ip() {
        return this.localIp
    }
    getLocalIp() {
        var t_ip
        Object.keys(interfaces).forEach((interface_name) => {
            // only local is reachable
            if (interface_name.length == 1) {
                // 127.0.0.1 in ipv6
                t_ip = "::1/ffff:ffff:ffff:ffff::"
            }
            // more than 1 + local is reachable 
            else {
                interfaces[interface_name].forEach((iface) => {
                    // use only IPv6
                    if (iface.family === "IPv6") {
                        // use wi-fi before eth
                        if (interface_name === "wlp3s0") {
                            t_ip = iface.address + '/' + iface.netmask
                        } else {
                            t_ip = iface.address + '/' + iface.netmask
                        }
                    }
                })
            }
        })
        return t_ip
    }
    isUndefined(data) {
        if (data === undefined)
            return true
        else
            return false
    }
}
module.exports = new GetIp()