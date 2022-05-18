package com.filter;

import com.filter.model.Filter;
import com.filter.repository.Repository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class FilterApplication {

	public static void main(String[] args) {
		SpringApplication.run(FilterApplication.class, args);
	}
        @Bean
        public CommandLineRunner demoData(Repository repository){
        return args -> {
        repository.save(new Filter("Sample Filter","Amount more than 1","Title starts with sample","Date from 2022-05-17","Amount less than 25","Title contains data","Date to 2022-05-18"));
        repository.save(new Filter("Sample Filter2","Title equals sample","Amount equals 0","Date to 2022-04-10","Date from 2021-04-10","",""));
        };
        }
}
