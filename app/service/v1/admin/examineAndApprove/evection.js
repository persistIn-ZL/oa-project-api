'use strict';

const BaseService = require('../../base');
const Sequelize = require('sequelize');
const { getDeptWhere } = require('../../../../utils/auth');
const Op = Sequelize.Op;


class Service extends BaseService {
  constructor(...arg) {
    super(...arg);
    this.modelName = 'Evection';
  }

  // 查询, 传页码，分页返回，否则全部返回
  async findList(query, order = [[ 'createdAt', 'DESC' ]]) {
    console.log(query, 123);
    const obj = {
      where: {},
      order,
      include: [{
        model: this.ctx.model.Users,
        as: 'user',
      }],
    };
    if (query.offset) {
      query.limit = query.limit ? query.limit : 10;
      query.offset = (query.offset - 1) * query.limit;
      obj.limit = query.limit;
      obj.offset = query.offset;
    } else {
      query.limit = null;
      query.offset = null;
    }
    for (const key in query) {
      if (key !== 'limit' && key !== 'offset' && key !== 'userId') {
        if (!query[key]) {
          query[key] = '';
        }
        obj.where[key] = {
          [Op.like]: '%' + query[key] + '%',
        };
      }
      if (key === 'userId') {
        obj.where[key] = {
          [Op.or]: query[key].length ? query[key] : [ -1 ],
        };
      }
    }
    obj.where = Object.assign({}, obj.where, getDeptWhere(this.ctx, {
      deptId: query.deptId,
    }));
    return await this.ctx.model[this.modelName].findAndCountAll(obj);
  }
}

module.exports = Service;
