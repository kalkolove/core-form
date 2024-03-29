import { SearchProps } from '../search/types';
import { AlertProps, TableProps as AntdTableProps } from 'antd';
import { ColumnType } from 'antd/es/table/interface';
import { ReactNode } from 'react';
import { TableColumnType } from './type.column';
import { TableInstance } from './table.instance';
import { PaginationConfig } from './type.pagination';
import {
  CreateModalFormProps,
  CreateDrawerFormProps,
} from '../form-submit/create-form';

export interface ToolsProps {
  label?: string | ReactNode;
  key?: string;
  type?: string;
  btnType?: string;
  disabled?: boolean;
  auth?: any;
  spin?: boolean;
  visible?: boolean | Function;
  confirm?: object;
  onClick?: Function;
  menu?: any;
  icon?: ReactNode;
  modalFormProps?:
    | CreateModalFormProps
    | (({ onSearch, onRefresh }) => CreateModalFormProps);
  drawerFormProps?:
    | CreateDrawerFormProps
    | (({ onSearch, onRefresh }) => CreateDrawerFormProps);
}

export interface RowOperationsTypes extends ColumnType<any> {
  showMore?: number;
  menus: (record) => ToolsProps[];
  /** 是否展示 */
  visible?: boolean;
  dataIndex?: string;
}

interface TableAlertProps extends AlertProps {
  visible?: boolean;
}

export interface TableProps
  extends Omit<AntdTableProps<any>, 'title' | 'columns'> {
  /** 表格标题 */
  title?: ReactNode | string;
  columns: TableColumnType[];
  /** 统一处理请求逻辑 */
  request: (
    params?,
    filter?,
    sorter?,
  ) => Promise<{
    success: boolean;
    list: any[];
    total: number;
  }>;
  /** 工具栏配置 */
  tools?: ToolsProps[];
  /**
   * 默认工具栏配置
   * @default [
    {
      type: 'Refresh'
    },
    {
      type: 'AdjustSize'
    },
    {
      type: 'FilterColumns'
    },
  ]
   */
  defaultTools?: ToolsProps[];
  /** 操作列配置 */
  rowOperations?: RowOperationsTypes;
  /** 过滤的字段 */
  filterIds?: string[];
  /** 列为空展示的文案 */
  emptyNode?: ReactNode | string;
  /** 准备查询3个参数分别为、查询条件、过滤条件、排序条件 */
  onQuery?: (params?, filter?, sorter?) => void;
  /** 加载完毕回调 */
  onLoad?: (response: any) => void;
  /** 表头按钮点击回调 */
  toolsClick?: (tool: any) => void;
  /** 表格列点击事件回调 */
  rowOperationsClick?: (menu: any, record: any, index: number) => void;
  /** 默认查询值 */
  params?: object;
  /** 分页配置 */
  paginationConfig?: PaginationConfig;
  /** 查询框配置 */
  searchSchema?: SearchProps;
  /** 国际化 */
  locale?: any;
  /** 提示信息 */
  alertConfig?:
    | TableAlertProps
    | ((selectedRowKeys, selectedRows, onCleanSelected) => TableAlertProps);
  /** 自定义渲染表格函数 */
  tableRender?: (dom, dataSource) => ReactNode;
  /** Table api 的引用，便于自定义触发 */
  table?: TableInstance;
  /** 唯一标识 */
  tableId?: string;
}
