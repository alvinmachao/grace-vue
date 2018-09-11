exports.login = async function () {
    await this.proxy({
        login: 'realAPI:post:cmnUserInfo/findByTelePhoneAndLonginName'
    });
    this.body = this.backData.login
};
exports.logout = async function () {
    await this.proxy({
        logout: 'realAPI:post:cmnUserInfo/appUserOut'
    });
    this.body = this.backData.logout
};
