package com.mitrais.rms.common.dao;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.mitrais.rms.common.model.Lookup;

/**
 * Created by made_sudarsana on 4/28/2017.
 */
public interface LookupDAO extends PagingAndSortingRepository<Lookup, Long> {
}
