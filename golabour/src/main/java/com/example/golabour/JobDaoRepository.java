package com.example.golabour;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JobDaoRepository extends JpaRepository<Job, Integer> {

}
