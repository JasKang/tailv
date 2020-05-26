import { defineComponent, computed, inject, h } from 'vue';
import './index.less';
import { ElRowSymbol } from '../../provides';

export default defineComponent({
  name: 'ElCol',
  props: {
    span: {
      type: Number,
      default: 24
    },
    tag: {
      type: String,
      default: 'div'
    },
    offset: Number,
    pull: Number,
    push: Number,
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object]
  },
  setup(props, { slots }) {
    const gutter = inject(ElRowSymbol, 0);

    const style = computed(() => {
      if (gutter) {
        return {
          paddingLeft: gutter / 2 + 'px',
          paddingRight: gutter / 2 + 'px'
        };
      }
      return {};
    });
    const classList = computed(() => {
      const ret: string[] = [];
      ['span', 'offset', 'pull', 'push'].forEach(prop => {
        const size = props[prop];
        if (typeof size === 'number' && size >= 0) {
          ret.push(prop !== 'span' ? `el-col-${prop}-${props[prop]}` : `el-col-${props[prop]}`);
        }
      });
      ['xs', 'sm', 'md', 'lg', 'xl'].forEach(size => {
        if (typeof props[size] === 'number') {
          ret.push(`el-col-${size}-${props[size]}`);
        } else if (typeof props[size] === 'object') {
          const sizeProps = props[size];
          Object.keys(sizeProps).forEach(prop => {
            ret.push(
              prop !== 'span' ? `el-col-${size}-${prop}-${sizeProps[prop]}` : `el-col-${size}-${sizeProps[prop]}`
            );
          });
        }
      });
      return ret;
    });

    return () =>
      h(
        props.tag,
        {
          class: ['el-col', classList.value],
          style: style.value
        },
        slots.default()
      );
  }
});