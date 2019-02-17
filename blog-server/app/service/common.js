const { STATUS } = require('../config/conts');

// 获取下拉项 options
module.exports.options = async ({ ctx, model, page = {}, params = {} }) => {
  const defautPageSize = 10;
  const server = ctx.db.mongo[model];
  const { ids = [], name = '' } = params;
  // 查询参数处理
  const limit = (page.page || 1) * (page.pageSize || defautPageSize) - ids.length;
  const conds = { 
    name: { $regex: name },
    status: {$ne: STATUS.DELETE},
  };

  // 统计数据
  const total = await server.find(conds).count();
  const stats = { total, totalPage: Math.ceil(total / (page.pageSize || defautPageSize)) }; 

  // 列表数据获取
  const list = [
    ...await server.find({ ...conds, _id: { $nin: ids }}).limit(limit),
    ... await server.find({ _id: { $in: ids }})
  ];

  return { list, stats, page };
}