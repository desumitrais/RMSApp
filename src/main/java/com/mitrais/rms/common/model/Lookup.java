package com.mitrais.rms.common.model;

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
    @GeneratedValue
    private Long   id;
    private String lookupName;
    private int lookupValue;
    private String lookupText;
    private String lookupCode;

    public Lookup() {

    }

    public Lookup(String lookupName, int lookupValue, String lookupText, String lookupCode) {
        this.lookupName = lookupName;
        this.lookupValue = lookupValue;
        this.lookupText = lookupText;
        this.lookupCode = lookupCode;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLookupName() {
        return lookupName;
    }

    public void setLookupName(String lookupName) {
        this.lookupName = lookupName;
    }

    public int getLookupValue() {
        return lookupValue;
    }

    public void setLookupValue(int lookupValue) {
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
