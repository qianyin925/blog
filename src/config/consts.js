/* 业务常量配置 */

// 应用 CODE
export const APP_CODE = {
  FUND: 'fund',                  // 基金
  ALBUM: 'album',                // 相册
  DIARY: 'diary',                // 日记
  READER: 'reader',              // 阅读
  EDITOR: 'editor',              // 编辑器
  LOGGER: 'logger',              // 日志
  SETTING: 'setting',            // 系统偏好设置
  ARTICLE: 'article',            // 文章
  DATASETSFROM: 'datasetsfrom',  // 数据字典(数据集)
};

// 布尔值
export const BOOLEAN = {
  TRUE: 1,
  FALSE: 0,
};

// 服务器静态资源-图片 url
export const SERVICE_STATIC_IMAGE_URL
  = 'https://www.qianyin925.com/service/static/images/';

// [状态] 模型基本状态 (0: 禁用， 1： 启用， -11： 删除)
export const STATUS = {
  DISABLE: 0,   // 禁用
  ENABLE: 1,    // 启用
  DELETE: -11,  // 删除
};

// [状态] 文章状态： 基础状态 + 保存 + 发布
export const ARTICLE_STATUS = {
  ... STATUS,        // 基础状态
  SAVE: 10,          // 保存(未发布)
  RELEASE: 11,       // 发布(已发布)
};

// 图片类型(使用场景)
export const PHOTO_TYPE = {
  UNKNOWN: { VALUE: 0, DESC: '未知' },          // 未知
  ARTICLE: { VALUE: 1, DESC: '文章' },          // 文章(包括专用缩略图)
  DESKTOP: { VALUE: 2, DESC: '桌面背景' },      // 桌面
  THUMB: { VALUE: 3, DESC: '缩略图' },          // 封面(通用)
  AVATAR: { VALUE: 4, DESC: '头像' },           // 头像
};

// 字典类型
export const DATASETSFROM_CODE = {
  BILL_TAG: { VALUE: 1, DESC: '账单(标签)', ICON: 'icon-dingdanjine' },
  DIET_TAG: { VALUE: 2, DESC: '饮食(标签)', ICON: 'icon-yinshi' },
  FITNESS_PLACE: { VALUE: 3, DESC: '健身部位', ICON: 'icon-buwei' },
  FITNESS_TYPE: { VALUE: 4, DESC: '健身类型', ICON: 'icon-leixing' },
  ARTICLE_TAG: { VALUE: 6, DESC: '文章标签', ICON: 'icon-suanfa' },
};
