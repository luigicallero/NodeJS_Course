const os = require("os");

console.log(os.type())

const info = {
    'Home Directory': os.homedir(),
    'Operating System': os.type(),
    'Last Reboot': os.uptime(),
    'CPU Architecture': os.arch(), //to return the operating system CPU architecture
    'Network Interface': os.networkInterfaces(),
    'Host Name': os.hostname(),
}

console.log(info)