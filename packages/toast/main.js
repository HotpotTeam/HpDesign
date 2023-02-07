import Vue from 'vue';
import Toast from './toast.vue';
let toastConstructor = Vue.extend(Toast);

let instance;
let instances = [];
let seed = 1;

function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

function isVNode(node) {
  return node !== null && typeof node === 'object' && hasOwn(node, 'componentOptions');
};

const toast = function(options) {
  if (Vue.prototype.$isServer) return;
  options = options || {};
  if (typeof options === 'string') {
    options = {
      toast: options
    };
  }
  // let userOnClose = options.onClose;
  let id = 'toast_' + seed++;

  instance = new toastConstructor({
    data: options
  });
  instance.id = id;
  if (isVNode(instance.toast)) {
    instance.$slots.default = [instance.toast];
    instance.toast = null;
  }
  instance.$mount();
  document.body.appendChild(instance.$el);
  let verticalOffset = options.offset || 80;
  instances.forEach(item => {
    verticalOffset += item.$el.offsetHeight;
  });
  instance.verticalOffset = verticalOffset;
  instance.visible = true;
//   instance.$el.style.zIndex = PopupManager.nextZIndex();
  instances.push(instance);
  return instance;
};

['success', 'warning', 'info', 'error'].forEach(type => {
  toast[type] = (options) => {
    if (isObject(options) && !isVNode(options)) {
      return toast({
        ...options,
        type
      });
    }
    return toast({
      type,
      toast: options
    });
  };
});


export default toast;