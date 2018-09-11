'use strict';

exports.index = function*() {
    yield this.bindDefault();

    yield this.render('login_index', {
        siteInfo: this.siteInfo
    });
}

