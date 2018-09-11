'use strict';

exports.index = function* () {
    yield this.bindDefault();

    yield this.render('main_index', {
        siteInfo: this.siteInfo
    });
}

