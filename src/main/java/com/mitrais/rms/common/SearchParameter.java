package com.mitrais.rms.common;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.apache.commons.lang.StringUtils;
import org.springframework.data.domain.Pageable;

/**
 * Created by Desu on 4/30/2017.
 */
public class SearchParameter {
    private JSONObject filter;
    private JSONArray group;
    private JSONArray sort;
    private Pageable pageable;

    public SearchParameter() {

    }

    public SearchParameter(String filter, String sort, Pageable pageable) {
        if (StringUtils.isNotBlank(filter)) {
            this.filter = JSONObject.fromObject(filter);
        }

        if (StringUtils.isNotBlank(sort)) {
            this.sort = JSONArray.fromObject(sort);
        }

        this.pageable = pageable;
    }

    public JSONObject getFilter() {
        return filter;
    }

    public void setFilter(JSONObject filter) {
        this.filter = filter;
    }

    public JSONArray getGroup() {
        return group;
    }

    public void setGroup(JSONArray group) {
        this.group = group;
    }

    public JSONArray getSort() {
        return sort;
    }

    public void setSort(JSONArray sort) {
        this.sort = sort;
    }

    public Pageable getPageable() {
        return pageable;
    }

    public void setPageable(Pageable pageable) {
        this.pageable = pageable;
    }
}
