package com.mitrais.rms.common.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;

/**
 * Created by made_sudarsana on 4/28/2017.
 */

@Entity
public class Lookup extends CommonEntity implements Serializable {
    @Id
    private String  id;
    @Column(name = "lookupname")
    private String  lookupName;
    @Column(name = "lookupvalue", nullable = true)
    private Integer lookupValue;
    @Column(name = "lookuptext", nullable = true)
    private String  lookupText;
    @Column(name = "lookupcode", nullable = true)
    private String  lookupCode;

    public Lookup() {

    }

    public Lookup(String lookupName, int lookupValue, String lookupText, String lookupCode) {
        this.lookupName = lookupName;
        this.lookupValue = lookupValue;
        this.lookupText = lookupText;
        this.lookupCode = lookupCode;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getLookupName() {
        return lookupName;
    }

    public void setLookupName(String lookupName) {
        this.lookupName = lookupName;
    }

    public Integer getLookupValue() {
        return lookupValue;
    }

    public void setLookupValue(Integer lookupValue) {
        this.lookupValue = lookupValue;
    }

    public String getLookupText() {
        return lookupText;
    }

    public void setLookupText(String lookupText) {
        this.lookupText = lookupText;
    }

    public String getLookupCode() {
        return lookupCode;
    }

    public void setLookupCode(String lookupCode) {
        this.lookupCode = lookupCode;
    }
}
