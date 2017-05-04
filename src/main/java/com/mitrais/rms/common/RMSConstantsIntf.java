package com.mitrais.rms.common;

/**
 * Created by made_sudarsana on 4/28/2017.
 */
public interface RMSConstantsIntf {
    public static final class RecordStatus {
        public static final int ACTIVE = 1;
        public static final int INACTIVE = 2;
        public static final int DELETE = 3;
    }

    public static final class LookupName {
        public static final String GENDER_ID = "genderid";
        public static final String FAMILY_TYPE_ID = "familytypeid";
        public static final String GRADE_ID = "gradeid";
    }
}
