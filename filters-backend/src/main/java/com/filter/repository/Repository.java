package com.filter.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.filter.model.Filter;

public interface Repository extends JpaRepository<Filter, Long> {
 List<Filter> findByTitleContaining(String title);
}
