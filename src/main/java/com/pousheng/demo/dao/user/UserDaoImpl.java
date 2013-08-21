package com.pousheng.demo.dao.user;

import org.springframework.stereotype.Repository;

import com.pousheng.demo.model.user.User;

import framework.generic.mybatis.dao.DbSqlSessionDaoSupport;

@Repository
public class UserDaoImpl extends DbSqlSessionDaoSupport<User, String> implements UserDao {

	@Override
	public String getMybatisMapperNamesapce() {
		return "User";
	}

}
