package com.example.akgun.odev.insan_kaynaklari.services;

import java.util.List;

import com.example.akgun.odev.insan_kaynaklari.entites.Candidate;

public interface ICandidateService {

	Candidate saveCandidate(Candidate candidate);

	boolean updateCandidate(Long id, Candidate candidate);

	List<Candidate> getAll();

	void deleteCandidate(Long id);

}
