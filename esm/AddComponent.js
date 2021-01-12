import { defineComponent, openBlock, createBlock, createVNode, toDisplayString, createCommentVNode, withScopeId } from 'vue';

var script = defineComponent({
  name: 'AddComponent',
  data: function data() {
    return {
      num: 1
    };
  },
  mounted: function mounted() {},
  methods: {
    add: function add() {
      this.num++;
    },
    jian: function jian() {
      this.num--;
    }
  }
});

var _withId = /*#__PURE__*/withScopeId("data-v-edeae2da");

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", null, [createVNode("div", {
    "class": "red",
    onClick: _cache[1] || (_cache[1] = function () {
      return _ctx.jian && _ctx.jian.apply(_ctx, arguments);
    })
  }, "---"), createVNode("div", null, toDisplayString(_ctx.num), 1
  /* TEXT */
  ), createVNode("div", {
    "class": "red",
    onClick: _cache[2] || (_cache[2] = function () {
      return _ctx.add && _ctx.add.apply(_ctx, arguments);
    })
  }, "+++"), createCommentVNode("        <address-component></address-component>")]);
});

script.render = render;
script.__scopeId = "data-v-edeae2da";
script.__file = "src/components/Add/Add.vue";

function SFCWithInstall(component) {
  return Object.assign(component, {
    install: function install(app) {
      app.component(component.name, component);
    }
  });
}

var index = SFCWithInstall(script);
/*export default {
    install(app: App) {
        app.component(AddComponent.name, AddComponent);
    }
}*/

export default index;
