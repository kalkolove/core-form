import { Select } from 'antd';

const __Select__ = ({
  readOnlyEmptyValueNode,
  fieldNames = { value: 'value', label: 'label' },
  ...props
}: any) => {
  if (props.readOnly) {
    // 渲染只读视图
    const values = Array.isArray(props.value) ? props.value : [props.value];
    // 解析options得到labels
    const labels: any =
      props?.options
        ?.filter((i: any) => {
          return values.includes(i[fieldNames.value]);
        })
        .map((i: any) => i[fieldNames.label]) || [];
    return (
      <span className="ant-select-readonly">
        {labels.join('、') || readOnlyEmptyValueNode}
      </span>
    );
  }
  return <Select {...props} fieldNames={fieldNames} />;
};
__Select__.displayName = 'Select';
export default __Select__;
