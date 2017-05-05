package com.mitrais.rms.common;

import com.mitrais.rms.common.model.Lookup;
import org.apache.commons.lang.StringUtils;

import java.util.List;

/**
 * Created by made_sudarsana on 5/5/2017.
 */
public class LookupHelper {
    public static String getTextOnLookup(List<Lookup> lookups, String lookupName, String lookupCode) {
        Lookup selectedLookup = lookups.stream().filter(lookup -> lookup.getLookupName().equalsIgnoreCase(lookupName))
                .filter(lookup -> lookup.getLookupCode().equalsIgnoreCase(lookupCode)).findFirst().orElse(new Lookup());

        if (selectedLookup != null) {
            return selectedLookup.getLookupText();
        } else {
            return StringUtils.EMPTY;
        }
    }

    public static String getValueOnLookup(List<Lookup> lookups, String lookupName, int lookupValue) {
        Lookup selectedLookup = lookups.stream().filter(lookup -> lookup.getLookupName().equalsIgnoreCase(lookupName))
                .filter(lookup -> lookup.getLookupValue() == lookupValue).findFirst().orElse(new Lookup());

        if (selectedLookup != null) {
            return selectedLookup.getLookupText();
        } else {
            return StringUtils.EMPTY;
        }
    }
}
