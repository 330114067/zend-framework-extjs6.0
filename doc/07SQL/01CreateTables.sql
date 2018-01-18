DROP TABLE IF EXISTS `t_org`;
CREATE TABLE `t_org` (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `full_name` varchar(255) NOT NULL COMMENT '组织机构全路径名称',
  `name` varchar(255) NOT NULL COMMENT '组织机构名称',
  `org_code` varchar(255) NOT NULL COMMENT '组织机构编码',
  `parent_id` varchar(255) DEFAULT NULL COMMENT '上级组织机构的id',
  `data_org` varchar(255) DEFAULT NULL COMMENT '数据域',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COMMENT='机构组织';

drop table if exists `t_navigation`;
CREATE TABLE `t_navigation` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL COMMENT '菜单名称',
  `keyid` int(4) DEFAULT '0' COMMENT '上级id',
  `xtypeClass` varchar(70)  COMMENT '对应链接',
  `menu` tinyint(1) DEFAULT NULL COMMENT '是否菜单显示',
  `leaf` varchar(30) DEFAULT '0' COMMENT '是否是叶子节点  ',
  `sort` smallint(2) DEFAULT '0' COMMENT '排序，越大排在越前',
  `display` tinyint(1) DEFAULT NULL COMMENT '是否显示，0为显示，1为不显示',
	`store` varchar(40) default null comment '加载数据地址',
	`iconCls` varchar(30) default null comment'菜单左边图标',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 comment'权限';

drop table if exists `t_user_group`;
CREATE TABLE `t_user_group` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `group_name` varchar(20) NOT NULL comment'自增id',
  `group_power` text NOT NULL comment'权限列表序列化格式',
  PRIMARY KEY (`id`)
) ENGINE=Innodb DEFAULT CHARSET=utf8 comment'角色';


DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user` (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT '主键自增',
  `enabled` int(11) NOT NULL COMMENT '用户是否可以登录',
  `login_name` varchar(255) NOT NULL COMMENT '用户登录名',
  `name` varchar(255) DEFAULT NULL COMMENT '用户名称',
  `group_id` int(10) DEFAULT NULL,
  `org_id` int(10) NOT NULL COMMENT '组织机构id',
  `password` varchar(255) NOT NULL COMMENT '登录密码',
  `py` varchar(255) DEFAULT NULL COMMENT '用户名称的拼音字头',
  `gender` varchar(255) DEFAULT NULL COMMENT '性别',
  `birthday` varchar(255) DEFAULT NULL COMMENT '生日',
  `id_card_number` varchar(255) DEFAULT NULL COMMENT '身份证号',
  `tel` varchar(255) DEFAULT NULL COMMENT '联系电话',
  `tel02` varchar(255) DEFAULT NULL COMMENT '备用联系电话',
  `address` varchar(255) DEFAULT NULL COMMENT '家庭住址',
  `data_org` varchar(255) DEFAULT NULL COMMENT '数据域',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='系统用户表';

