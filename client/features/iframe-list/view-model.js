var viewModel = {
    init: function (params) {
        this.playIconClass = 'play ' + params.playIconClass;
        this.items = params.items.map(function(item){
            item.click = showIFrame;
            return item;
        });
    }
};

function showIFrame(item, event) {
    var element = event.currentTarget;
    var iframe = document.createElement('iframe');
    var iframeUrl = item.iFrameUrl;
    if (element.getAttribute('data-params')) {
        iframeUrl += '&' + element.getAttribute('data-params');
    }
    iframe.setAttribute('src', iframeUrl);
    iframe.setAttribute('frameborder', '0');
    if (item.fill) {
        iframe.style.width = element.parentElement.style.width;
        iframe.style.height = element.parentElement.style.height;
    }
    element.replaceChild(iframe, element.querySelector('.replaceMe'));
    element.className = 'play';
}

module.exports.create = function (params) {
    var vm = Object.create(viewModel);
    vm.init(params);
    return vm;
};
