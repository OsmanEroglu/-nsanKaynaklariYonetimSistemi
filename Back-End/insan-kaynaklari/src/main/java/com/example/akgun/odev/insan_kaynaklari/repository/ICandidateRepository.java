package com.example.akgun.odev.insan_kaynaklari.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.akgun.odev.insan_kaynaklari.entites.Candidate;

@Repository
public interface ICandidateRepository extends JpaRepository<Candidate, Long>{

}
