'use strict';

exports.index = function*() {
    yield this.bindDefault();

    yield this.render('studio_index', {
        siteInfo: this.siteInfo
    });
}

