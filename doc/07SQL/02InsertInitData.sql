SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

TRUNCATE TABLE `t_org`;
INSERT INTO `t_org`(full_name,name,org_code,parent_id,data_org) VALUES 
( '公司', '公司', '01', null, '01'),
( '公司\\信息部', '信息部', '0199', '1', '0101');


TRUNCATE TABLE `t_navigation`;
INSERT INTO `t_navigation` VALUES ('1', '系统管理', '0', null, '0', '0', '1', '1', 'admin.store.menu.Config', 'Bulletwrench');
INSERT INTO `t_navigation` VALUES ('2', '用户管理', '1', 'userList', '1', 'true', '2', '1', null, null);
INSERT INTO `t_navigation` VALUES ('3', '权限管理', '1', 'userList', '1', 'true', '3', '1', null, null);

TRUNCATE TABLE `t_user`;
INSERT INTO `t_user` VALUES ('1', '1', 'admin', '系统管理员', '0', '5', '21232f297a57a5a743894a0e4a801fc3', 'XTGLY', '1', '2017-01-24', null, null, null, null, '01010001');



