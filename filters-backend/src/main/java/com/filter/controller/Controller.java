package com.filter.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.filter.model.Filter;
import com.filter.repository.Repository;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class Controller {

	@Autowired
	Repository repository;

	@GetMapping("/filters")
	public ResponseEntity<List<Filter>> getAllFilters(@RequestParam(required = false) String title) {
		try {
			List<Filter> filters = new ArrayList<Filter>();

			if (title == null)
				repository.findAll().forEach(filters::add);
			else
				repository.findByTitleContaining(title).forEach(filters::add);

			if (filters.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(filters, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/filters/{id}")
	public ResponseEntity<Filter> getFilterById(@PathVariable("id") long id) {
		Optional<Filter> filterlData = repository.findById(id);

		if (filterlData.isPresent()) {
			return new ResponseEntity<>(filterlData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping("/filters")
	public ResponseEntity<Filter> createFilter(@RequestBody Filter filter) {
		try {
			Filter _filter = repository
					.save(new Filter(filter.getTitle(), filter.getCriteria1(),filter.getCriteria2(),
                                        filter.getCriteria3(),filter.getCriteria4(),filter.getCriteria5(),filter.getCriteria6()));
			return new ResponseEntity<>(_filter, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@DeleteMapping("/filters/{id}")
	public ResponseEntity<HttpStatus> deleteFilter(@PathVariable("id") long id) {
		try {
			repository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	
}
