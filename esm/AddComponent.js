import { defineComponent, pushScopeId, popScopeId, openBlock, createBlock, createVNode, toDisplayString, withScopeId } from 'vue';

var script = defineComponent({
    name: 'AddComponent',
    props: {
        name: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            num: 1
        };
    },
    mounted() {
    },
    methods: {
        add() {
            this.num++;
        },
        jian() {
            this.num--;
        }
    }
});

const _withId = /*#__PURE__*/withScopeId("data-v-6fac76ee");

pushScopeId("data-v-6fac76ee");
const _hoisted_1 = { class: "c-red" };
popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return (openBlock(), createBlock("div", null, [
    createVNode("div", {
      class: "red",
      onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.jian && _ctx.jian(...args)))
    }, "---"),
    createVNode("div", _hoisted_1, toDisplayString(_ctx.num) + " + " + toDisplayString(_ctx.name), 1),
    createVNode("div", {
      class: "red",
      onClick: _cache[2] || (_cache[2] = (...args) => (_ctx.add && _ctx.add(...args)))
    }, "+++")
  ]))
});

script.render = render;
script.__scopeId = "data-v-6fac76ee";

const _AddComponent = Object.assign(script, {
    install(app) {
        app.component(script.name, script);
    }
});

export default _AddComponent;
//# sourceMappingURL=AddComponent.js.map
