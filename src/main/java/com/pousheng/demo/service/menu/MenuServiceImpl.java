package com.pousheng.demo.service.menu;

import java.util.List;

import javax.annotation.Resource;

import com.pousheng.demo.web.ui.DataGrid;
import framework.generic.mybatis.page.Pagination;
import org.springframework.stereotype.Service;

import com.pousheng.demo.dao.menu.MenuDao;
import com.pousheng.demo.model.menu.Menu;

@Service("menuService")
public class MenuServiceImpl implements MenuService {

	private MenuDao menuDao;

	@Resource
	public void setMenuDao(MenuDao menuDao) {
		this.menuDao = menuDao;
	}

	@Override
	public int deleteByPk(String id) {
		return menuDao.deleteByPk(id);
	}

	@Override
	public void update(Menu menu) {
		menu = menuDao.update(menu);
	}

	@Override
	public Menu findByPK(String menuId) {
		return menuDao.findByPK(menuId);
	}

	@Override
	public Menu insert(Menu menu) {
		menu = menuDao.insert(menu);
		return menu;
	}

	@Override
	public DataGrid getPage(Pagination pagination) {
		pagination = menuDao.findByPage(pagination);
		return new DataGrid(pagination.getTotalCount(), pagination.getResult());
	}

	@Override
	public List<Menu> findAll() {
		return menuDao.findAll();
	}
}
