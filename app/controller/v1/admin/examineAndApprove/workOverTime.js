'use strict';

const BaseController = require('../../base');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


class Controller extends BaseController {
  constructor(...arg) {
    super(...arg);
    this.serviceName = 'workOverTime';
    this.modleName = 'examineAndApprove';
  }

  // 查询
  async index() {
    const { ctx, service } = this;
    // 查询参数
    const query = {
      limit: ctx.helper.parseInt(ctx.query.pageSize),
      offset: ctx.helper.parseInt(ctx.query.pageNum),
      status: ctx.query.status,
    };
    const users = await ctx.model.Users.findAll({
      where: {
        nickName: {
          [Op.like]: '%' + ctx.query.nickName + '%',
        },
      },
    });
    const userIds = users.map(item => item.id);
    query.userId = userIds;
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].findList(query);
    ctx.returnBody(result, 100010);
  }

  // 新增
  async create() {
    const { ctx, service } = this;
    const validateResult = await ctx.checkValidate(ctx.request.body, this.serviceName + '.create');
    if (!validateResult) return;
    const query = ctx.request.body;
    query.createdAt = new Date();
    query.createdBy = ctx.state.user.userName;
    query.userId = ctx.state.user.id;
    query.deptId = ctx.state.user.deptId;
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].create(query);
    if (result) {
      ctx.returnBody(null, 100020);
    } else {
      ctx.returnBody(null, 100021, 500);
    }
  }

  // 修改
  async update() {
    const { ctx, service } = this;
    const validateResult = await ctx.checkValidate(ctx.request.body, this.serviceName + '.update');
    if (!validateResult) return;
    const query = ctx.request.body;
    query.updatedAt = new Date();
    query.updatedBy = ctx.state.user.userName;
    const id = this.ctx.helper.parseInt(ctx.params.id);
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].update(query, {
      id,
    });
    if (result) {
      ctx.returnBody(null, 100030);
    } else {
      ctx.returnBody(null, 100031, 500);
    }
  }
}

module.exports = Controller;
