package com.mitrais.rms.common.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.mitrais.rms.common.model.Lookup;

import java.util.List;

/**
 * Created by made_sudarsana on 4/28/2017.
 */
public interface LookupRepository extends CrudRepository<Lookup, Long> {
    List<Lookup> findByLookupName(String lookupName);

    List<Lookup> findByLookupNameIn(List<String> looupNames);
}
