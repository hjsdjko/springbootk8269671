package com.dao;

import com.entity.DiscussmeishicaipinEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.DiscussmeishicaipinVO;
import com.entity.view.DiscussmeishicaipinView;


/**
 * 美食菜品评论表
 * 
 * @author 
 * @email 
 * @date 2024-03-03 20:17:43
 */
public interface DiscussmeishicaipinDao extends BaseMapper<DiscussmeishicaipinEntity> {
	
	List<DiscussmeishicaipinVO> selectListVO(@Param("ew") Wrapper<DiscussmeishicaipinEntity> wrapper);
	
	DiscussmeishicaipinVO selectVO(@Param("ew") Wrapper<DiscussmeishicaipinEntity> wrapper);
	
	List<DiscussmeishicaipinView> selectListView(@Param("ew") Wrapper<DiscussmeishicaipinEntity> wrapper);

	List<DiscussmeishicaipinView> selectListView(Pagination page,@Param("ew") Wrapper<DiscussmeishicaipinEntity> wrapper);

	
	DiscussmeishicaipinView selectView(@Param("ew") Wrapper<DiscussmeishicaipinEntity> wrapper);
	

}