package com.pousheng.demo.dao.menu;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.pousheng.demo.model.menu.Menu;

import framework.generic.mybatis.dao.DbSqlSessionDaoSupport;

@Repository
public class MenuDaoImpl extends DbSqlSessionDaoSupport<Menu, String> implements MenuDao{

	@Override
	public Menu findByPK(String menuId) {
		return super.findByPk(menuId);
	}

	@Override
	public List<Menu> findByParentId(String parentId) {
		return null;
	}

	@Override
	public String getMybatisMapperNamesapce() {
		return "Menu";
	}
}
