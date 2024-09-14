package com.entity.view;

import com.entity.MeishicaipinEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;
import java.math.BigDecimal;

import java.io.Serializable;
import com.utils.EncryptUtil;
 

/**
 * 美食菜品
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2024-03-03 20:17:42
 */
@TableName("meishicaipin")
public class MeishicaipinView  extends MeishicaipinEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public MeishicaipinView(){
	}
 
 	public MeishicaipinView(MeishicaipinEntity meishicaipinEntity){
 	try {
			BeanUtils.copyProperties(this, meishicaipinEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}


}