package com.mitrais.rms.common;

import org.apache.commons.lang.StringUtils;

import java.util.List;

/**
 * Created by Desu on 4/30/2017.
 */
public class HQLQueryParam {
    public static final String PROCESS_FILTERING = "filter";
    public static final String PROCESS_SORTING = "sort";
    public static final String PROCESS_GROUPING = "group";
    public static final String TODAY_DATETIME = "todayDateTime";
    public static final String SORTING_ASC = "asc";
    public static final String SORTING_DESC = "desc";
    public static final String IS_NULL_QUERY = "isnull";
    public static final String IS_NOT_NULL_QUERY = "isnotnull";
    public static final String NEQ_EXPRESSION = "neq";
    public static final String EQ_EXPRESSION = "eq";

    private String[] fields;
    private String[] sqlOperation;
    private String[] value;
    private String process;
    private String logic;
    private List<HQLQueryParam> hqlQueryParamList;
    private String direction;

    public String getDirection() {
        return direction;
    }

    public void setDirection(String direction) {
        this.direction = direction;
    }

    public String getProcess() {
        return process;
    }

    public void setProcess(String process) {
        this.process = process;
    }

    public String getLogic() {
        return logic;
    }

    public void setLogic(String logic) {
        this.logic = logic;
    }

    public String[] getFields() {
        return fields;
    }

    public void setFields(String[] fields) {
        this.fields = fields;
    }

    public String[] getSqlOperation() {
        return sqlOperation;
    }

    public void setSqlOperation(String[] sqlOperation) {
        this.sqlOperation = sqlOperation;
    }

    public String[] getValue() {
        return value;
    }

    public void setValue(String[] value) {
        this.value = value;
    }

    public List<HQLQueryParam> getHqlQueryParamList() {
        return hqlQueryParamList;
    }

    public void setHqlQueryParamList(List<HQLQueryParam> hqlQueryParamList) {
        this.hqlQueryParamList = hqlQueryParamList;
    }

    private String generateFilter(String field, String sqlOperation, String value) {
        String endValue;
        String theValue = value;

        if (StringUtils.equals(sqlOperation, "startswith")) {
            endValue = "'" + theValue + "%'";
        } else if (StringUtils.equals(sqlOperation, "endswith")) {
            endValue = "'%" + theValue + "'";
        } else if (StringUtils.equals(sqlOperation, IS_NULL_QUERY)
                || StringUtils.equals(sqlOperation, IS_NOT_NULL_QUERY)) {
            endValue = "";
        } else if (StringUtils.equals(sqlOperation, "contains")) {
            endValue = "'%" + theValue + "%'";
        } else if (StringUtils.equals(sqlOperation, "icontains")) {
            endValue = "'%" + theValue.toLowerCase() + "%'";
        } else if (StringUtils.equals(sqlOperation, "in")) {
            endValue = "(" + theValue + ")";
        } else if ("ieq".equals(sqlOperation)) {
            endValue = "'" + theValue.toLowerCase() + "'";
        } else {
            endValue = "'" + theValue + "'";
        }

        if ("ieq".equals(sqlOperation) || "icontains".equals(sqlOperation)) {
            field = "lower(" + field + ")";
        }

        return field + " " + transformSQLOperation(sqlOperation) + " " + endValue;
    }

    private String transformSQLOperation(String sqlOperation) {
        String resultOp = StringUtils.trim(sqlOperation);

        if (StringUtils.equals(resultOp, "eq") || "ieq".equals(resultOp)) {
            resultOp = "=";
        } else if (StringUtils.equals(resultOp, NEQ_EXPRESSION)) {
            resultOp = "!=";
        } else if (StringUtils.equals(resultOp, "lt")) {
            resultOp = "<";
        } else if (StringUtils.equals(resultOp, "lte")) {
            resultOp = "<=";
        } else if (StringUtils.equals(resultOp, "gt")) {
            resultOp = ">";
        } else if (StringUtils.equals(resultOp, "gte")) {
            resultOp = ">=";
        } else if (StringUtils.equals(resultOp, "startswith") || StringUtils.equals(resultOp, "endswith")
                || StringUtils.equals(resultOp, "contains") || "icontains".equals(resultOp)) {
            resultOp = "like";
        } else if (StringUtils.equals(resultOp, IS_NULL_QUERY)) {
            resultOp = "is null";
        } else if (StringUtils.equals(resultOp, "isnotnull")) {
            resultOp = "is not null";
        } else if (StringUtils.equals(resultOp, "in")) {
            resultOp = "in";
        } else {
            resultOp = "";
        }

        return resultOp;
    }


    public String getFilter() {
        StringBuffer filter = new StringBuffer();

        if (StringUtils.equals(process, PROCESS_FILTERING)) {
            int i = 0;

            if (fields != null) {
                for (String fieldStr : fields) {
                    if (fieldStr != null) {
                        if ((logic != null) && (i > 0)) {
                            filter.append(" " + logic + " ");
                        }

                        filter.append(generateFilter(fieldStr, sqlOperation[i], value[i]));
                        i++;
                    }
                }
            }

            if ((hqlQueryParamList != null) && !hqlQueryParamList.isEmpty()) {

                for (HQLQueryParam subQueryParam : hqlQueryParamList) {
                    if ((logic != null) && (i > 0)) {
                        filter.append(" " + logic + " ");
                    }

                    StringBuffer subFilter = new StringBuffer(" (");
                    subFilter.append(subQueryParam.getFilter());
                    subFilter.append(") ");
                    filter.append(subFilter);
                    i++;
                }
            }
        }

        return filter.toString();
    }

    public String getSorting() {
        String sorting = "";
        if (StringUtils.isNotBlank(process) && StringUtils.equals(process, PROCESS_SORTING)) {
            sorting = fields[0] + " " + direction;
        }
        return sorting;
    }

    public String getGrouping() {
        String grouping = "";
        if (StringUtils.isNotBlank(process) && StringUtils.equals(process, PROCESS_GROUPING)) {
            grouping = fields[0] + " ";
        }
        return grouping;
    }
}
