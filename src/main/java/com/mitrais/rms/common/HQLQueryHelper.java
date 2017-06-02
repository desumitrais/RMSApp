package com.mitrais.rms.common;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.apache.commons.lang.StringUtils;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Desu on 4/30/2017.
 */
public class HQLQueryHelper {
    public static String FILTERS_KEY = "filters";
    public static String FIELD_KEY = "field";
    public static String OPERATOR_KEY = "operator";
    public static String VALUE_KEY = "value";
    public static String LOGIC_KEY = "logic";
    private static String DIRECTION_KEY = "dir";

    public static String constructParam(String hql, List<HQLQueryParam> queryParam) {
        if ((queryParam != null) && (!queryParam.isEmpty())) {
            StringBuffer filtering = new StringBuffer();
            StringBuffer grouping = new StringBuffer();
            StringBuffer sorting = new StringBuffer();
            boolean multiFilter = false;
            boolean multiSort = false;
            boolean multiGroup = false;

            for (HQLQueryParam param : queryParam) {
                String filterTemp = param.getFilter();

                if (StringUtils.equals(param.getProcess(), HQLQueryParam.PROCESS_FILTERING)
                        && StringUtils.isNotBlank(filterTemp)) {
                    if (multiFilter) {
                        filtering.append(" and ");
                    }
                    //
                    filtering.append(filterTemp);
                    multiFilter = true;
                }

                if (StringUtils.equals(param.getProcess(), HQLQueryParam.PROCESS_GROUPING)) {
                    if (multiGroup) {
                        grouping.append(", ");
                    }

                    grouping.append(param.getGrouping());
                    multiGroup = true;
                }

                if (StringUtils.equals(param.getProcess(), HQLQueryParam.PROCESS_SORTING)) {
                    if (multiSort) {
                        sorting.append(", ");
                    }

                    sorting.append(param.getSorting());
                    multiSort = true;
                }
            }

            String filterStr = filtering.toString();
            if (StringUtils.isNotBlank(filterStr)) {
                hql += " where " + filterStr;
            }

            String groupStr = grouping.toString();
            if (StringUtils.isNotBlank(groupStr)) {
                hql += " group by " + groupStr;
            }

            String sortStr = sorting.toString();
            if (StringUtils.isNotBlank(sortStr)) {
                hql += " order by " + sortStr;
            }
        }

        return hql;
    }

    public static List<HQLQueryParam> convertToQueryParamList(SearchParameter searchParameter) {
        HQLQueryParam queryParam;
        String[] fields;

        List<HQLQueryParam> queryParamList = new ArrayList<>();

        if (searchParameter.getGroup() != null) {
            // grouping parameter
            JSONArray jsonGroups = searchParameter.getGroup();

            for (int i = 0; i < jsonGroups.size(); i++) {
                fields = new String[1];
                fields[0] = jsonGroups.getJSONObject(i).getString(FIELD_KEY);
                if (StringUtils.isNotBlank(fields[0])) {
                    queryParam = new HQLQueryParam();
                    queryParam.setFields(fields);
                    queryParam.setProcess(HQLQueryParam.PROCESS_GROUPING);
                    queryParamList.add(queryParam);
                }
            }
        }

        if (searchParameter.getSort() != null) {
            // sorting parameter
            JSONArray jsonSort = searchParameter.getSort();

            for (int i = 0; i < jsonSort.size(); i++) {
                fields = new String[1];
                fields[0] = jsonSort.getJSONObject(i).getString(FIELD_KEY);
                if (StringUtils.isNotBlank(fields[0])) {
                    queryParam = new HQLQueryParam();
                    queryParam.setFields(fields);
                    queryParam.setDirection(jsonSort.getJSONObject(i).getString(DIRECTION_KEY));
                    queryParam.setProcess(HQLQueryParam.PROCESS_SORTING);
                    queryParamList.add(queryParam);
                }
            }
        }

        // Filters
        if (searchParameter.getFilter() != null) {
            JSONObject jsonFilter = searchParameter.getFilter();
            queryParam = generateFilterParams(jsonFilter);

            if (queryParam != null) {
                queryParamList.add(queryParam);
            }

        }

        return queryParamList;
    }

    private static HQLQueryParam generateFilterParams(JSONObject jsonFilter) {
        HQLQueryParam queryParam = null;

        if (jsonFilter != null) {
            queryParam = new HQLQueryParam();
            String logic = null;
            String[] fields = null;
            String[] sqlOps = null;
            String[] values = null;

            if (jsonFilter.has(FILTERS_KEY)) {
                logic = jsonFilter.getString(LOGIC_KEY);
                JSONArray jsonFilterArr = jsonFilter.getJSONArray(FILTERS_KEY);

                if ((jsonFilterArr != null) && !jsonFilterArr.isEmpty()) {
                    List<String> sqlOpsList = new ArrayList<>();
                    List<String> fieldsList = new ArrayList<>();
                    List<String> valuesList = new ArrayList<>();

                    for (int i = 0; i < jsonFilterArr.size(); i++) {
                        JSONObject jsonFilterObj = jsonFilterArr.getJSONObject(i);

                        if (jsonFilterObj.has(FILTERS_KEY)) {
                            List<HQLQueryParam> subQueryParamList = queryParam.getHqlQueryParamList();

                            if (subQueryParamList == null) {
                                subQueryParamList = new ArrayList<>();
                                queryParam.setHqlQueryParamList(subQueryParamList);
                            }

                            HQLQueryParam subQueryParam = generateFilterParams(jsonFilterObj);

                            if (subQueryParam != null) {
                                subQueryParamList.add(subQueryParam);
                            }
                        } else {
                            fieldsList.add(jsonFilterObj.containsKey(FIELD_KEY) ? jsonFilterObj.getString(FIELD_KEY) : "");
                            sqlOpsList.add(jsonFilterObj.containsKey(OPERATOR_KEY) ? jsonFilterObj.getString(OPERATOR_KEY) : "");
                            valuesList.add(jsonFilterObj.containsKey(VALUE_KEY) ? jsonFilterObj.getString(VALUE_KEY) : "");
                        }
                    }
                    sqlOps = sqlOpsList.toArray(new String[sqlOpsList.size()]);
                    fields = fieldsList.toArray(new String[fieldsList.size()]);
                    values = valuesList.toArray(new String[valuesList.size()]);
                }
            } else {
                fields = new String[1];
                sqlOps = new String[1];
                values = new String[1];

                fields[0] = jsonFilter.getString(FIELD_KEY);
                sqlOps[0] = jsonFilter.getString(OPERATOR_KEY);
                values[0] = jsonFilter.getString(VALUE_KEY);
            }

            if ((fields != null) && (fields.length > 0)) {
                queryParam.setFields(fields);
                queryParam.setSqlOperation(sqlOps);
                queryParam.setValue(values);
            }

            if (StringUtils.isNotBlank(logic)) {
                queryParam.setLogic(logic);
            }
            queryParam.setProcess(HQLQueryParam.PROCESS_FILTERING);

        }

        return queryParam;

    }
}
