package com.controller;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Map;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Date;
import java.util.List;
import javax.servlet.http.HttpServletRequest;

import com.utils.ValidatorUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.annotation.IgnoreAuth;
import com.entity.OrdersEntity;
import com.service.OrdersService;

import com.entity.MeishicaipinEntity;
import com.entity.view.MeishicaipinView;

import com.service.MeishicaipinService;
import com.service.TokenService;
import com.utils.PageUtils;
import com.utils.R;
import com.utils.EncryptUtil;
import com.utils.MPUtil;
import com.utils.MapUtils;
import com.utils.CommonUtil;
import java.io.IOException;
import com.service.StoreupService;
import com.entity.StoreupEntity;

/**
 * 美食菜品
 * 后端接口
 * @author 
 * @email 
 * @date 2024-03-03 20:17:42
 */
@RestController
@RequestMapping("/meishicaipin")
public class MeishicaipinController {
    @Autowired
    private MeishicaipinService meishicaipinService;

    @Autowired
    private StoreupService storeupService;

    @Autowired
    private OrdersService ordersService;


    



    /**
     * 后端列表
     */
    @RequestMapping("/page")
    public R page(@RequestParam Map<String, Object> params,MeishicaipinEntity meishicaipin,
		HttpServletRequest request){
        EntityWrapper<MeishicaipinEntity> ew = new EntityWrapper<MeishicaipinEntity>();

		PageUtils page = meishicaipinService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, meishicaipin), params), params));

        return R.ok().put("data", page);
    }
    
    /**
     * 前端列表
     */
	@IgnoreAuth
    @RequestMapping("/list")
    public R list(@RequestParam Map<String, Object> params,MeishicaipinEntity meishicaipin, 
		HttpServletRequest request){
        EntityWrapper<MeishicaipinEntity> ew = new EntityWrapper<MeishicaipinEntity>();

		PageUtils page = meishicaipinService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, meishicaipin), params), params));
        return R.ok().put("data", page);
    }



	/**
     * 列表
     */
    @RequestMapping("/lists")
    public R list( MeishicaipinEntity meishicaipin){
       	EntityWrapper<MeishicaipinEntity> ew = new EntityWrapper<MeishicaipinEntity>();
      	ew.allEq(MPUtil.allEQMapPre( meishicaipin, "meishicaipin")); 
        return R.ok().put("data", meishicaipinService.selectListView(ew));
    }

	 /**
     * 查询
     */
    @RequestMapping("/query")
    public R query(MeishicaipinEntity meishicaipin){
        EntityWrapper< MeishicaipinEntity> ew = new EntityWrapper< MeishicaipinEntity>();
 		ew.allEq(MPUtil.allEQMapPre( meishicaipin, "meishicaipin")); 
		MeishicaipinView meishicaipinView =  meishicaipinService.selectView(ew);
		return R.ok("查询美食菜品成功").put("data", meishicaipinView);
    }
	
    /**
     * 后端详情
     */
    @RequestMapping("/info/{id}")
    public R info(@PathVariable("id") Long id){
        MeishicaipinEntity meishicaipin = meishicaipinService.selectById(id);
		meishicaipin.setClicknum(meishicaipin.getClicknum()+1);
		meishicaipin.setClicktime(new Date());
		meishicaipinService.updateById(meishicaipin);
        meishicaipin = meishicaipinService.selectView(new EntityWrapper<MeishicaipinEntity>().eq("id", id));
        return R.ok().put("data", meishicaipin);
    }

    /**
     * 前端详情
     */
	@IgnoreAuth
    @RequestMapping("/detail/{id}")
    public R detail(@PathVariable("id") Long id){
        MeishicaipinEntity meishicaipin = meishicaipinService.selectById(id);
		meishicaipin.setClicknum(meishicaipin.getClicknum()+1);
		meishicaipin.setClicktime(new Date());
		meishicaipinService.updateById(meishicaipin);
        meishicaipin = meishicaipinService.selectView(new EntityWrapper<MeishicaipinEntity>().eq("id", id));
        return R.ok().put("data", meishicaipin);
    }
    


    /**
     * 赞或踩
     */
    @RequestMapping("/thumbsup/{id}")
    public R vote(@PathVariable("id") String id,String type){
        MeishicaipinEntity meishicaipin = meishicaipinService.selectById(id);
        if(type.equals("1")) {
        	meishicaipin.setThumbsupnum(meishicaipin.getThumbsupnum()+1);
        } else {
        	meishicaipin.setCrazilynum(meishicaipin.getCrazilynum()+1);
        }
        meishicaipinService.updateById(meishicaipin);
        return R.ok("投票成功");
    }

    /**
     * 后端保存
     */
    @RequestMapping("/save")
    public R save(@RequestBody MeishicaipinEntity meishicaipin, HttpServletRequest request){
    	//ValidatorUtils.validateEntity(meishicaipin);
        meishicaipinService.insert(meishicaipin);
        return R.ok();
    }
    
    /**
     * 前端保存
     */
    @RequestMapping("/add")
    public R add(@RequestBody MeishicaipinEntity meishicaipin, HttpServletRequest request){
    	//ValidatorUtils.validateEntity(meishicaipin);
        meishicaipinService.insert(meishicaipin);
        return R.ok();
    }





    /**
     * 修改
     */
    @RequestMapping("/update")
    @Transactional
    public R update(@RequestBody MeishicaipinEntity meishicaipin, HttpServletRequest request){
        //ValidatorUtils.validateEntity(meishicaipin);
        meishicaipinService.updateById(meishicaipin);//全部更新
        return R.ok();
    }



    

    /**
     * 删除
     */
    @RequestMapping("/delete")
    public R delete(@RequestBody Long[] ids){
        meishicaipinService.deleteBatchIds(Arrays.asList(ids));
        return R.ok();
    }
    
	
	/**
     * 前端智能排序
     */
	@IgnoreAuth
    @RequestMapping("/autoSort")
    public R autoSort(@RequestParam Map<String, Object> params,MeishicaipinEntity meishicaipin, HttpServletRequest request,String pre){
        EntityWrapper<MeishicaipinEntity> ew = new EntityWrapper<MeishicaipinEntity>();
        Map<String, Object> newMap = new HashMap<String, Object>();
        Map<String, Object> param = new HashMap<String, Object>();
		Iterator<Map.Entry<String, Object>> it = param.entrySet().iterator();
		while (it.hasNext()) {
			Map.Entry<String, Object> entry = it.next();
			String key = entry.getKey();
			String newKey = entry.getKey();
			if (pre.endsWith(".")) {
				newMap.put(pre + newKey, entry.getValue());
			} else if (StringUtils.isEmpty(pre)) {
				newMap.put(newKey, entry.getValue());
			} else {
				newMap.put(pre + "." + newKey, entry.getValue());
			}
		}
		params.put("sort", "clicknum");
        params.put("order", "desc");
		PageUtils page = meishicaipinService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, meishicaipin), params), params));
        return R.ok().put("data", page);
    }


        /**
     * 协同算法（按用户购买推荐）
     */
    @RequestMapping("/autoSort2")
    public R autoSort2(@RequestParam Map<String, Object> params,MeishicaipinEntity meishicaipin, HttpServletRequest request){
        String userId = request.getSession().getAttribute("userId").toString();
        String goodtypeColumn = "caipinfenlei";
        List<OrdersEntity> orders = ordersService.selectList(new EntityWrapper<OrdersEntity>().eq("userid", userId).eq("tablename", "meishicaipin").orderBy("addtime", false));
        List<String> goodtypes = new ArrayList<String>();
        Integer limit = params.get("limit")==null?10:Integer.parseInt(params.get("limit").toString());
        List<MeishicaipinEntity> meishicaipinList = new ArrayList<MeishicaipinEntity>();
	//去重
    	List<OrdersEntity> ordersDist = new ArrayList<OrdersEntity>();
    	for(OrdersEntity o1 : orders) {
    		boolean addFlag = true;
    		for(OrdersEntity o2 : ordersDist) {
    			if(o1.getGoodid()==o2.getGoodid() || o1.getGoodtype().equals(o2.getGoodtype())) {
    				addFlag = false;
    				break;
    			}
    		}
    		if(addFlag) ordersDist.add(o1);
    	}
        if(ordersDist!=null && ordersDist.size()>0) {
                for(OrdersEntity o : ordersDist) {
                        meishicaipinList.addAll(meishicaipinService.selectList(new EntityWrapper<MeishicaipinEntity>().eq(goodtypeColumn, o.getGoodtype())));
                }
        }
        EntityWrapper<MeishicaipinEntity> ew = new EntityWrapper<MeishicaipinEntity>();
        params.put("sort", "id");
        params.put("order", "desc");
        PageUtils page = meishicaipinService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, meishicaipin), params), params));
        List<MeishicaipinEntity> pageList = (List<MeishicaipinEntity>)page.getList();
        if(meishicaipinList.size()<limit) {
                int toAddNum = (limit-meishicaipinList.size())<=pageList.size()?(limit-meishicaipinList.size()):pageList.size();
                for(MeishicaipinEntity o1 : pageList) {
                    boolean addFlag = true;
                    for(MeishicaipinEntity o2 : meishicaipinList) {
                        if(o1.getId().intValue()==o2.getId().intValue()) {
                            addFlag = false;
                            break;
                        }
                    }
                    if(addFlag) {
                        meishicaipinList.add(o1);
                        if(--toAddNum==0) break;
                    }   
                }
        } else if(meishicaipinList.size()>limit) {
            meishicaipinList = meishicaipinList.subList(0, limit);
        }
        page.setList(meishicaipinList);
        return R.ok().put("data", page);
    }








}
