package com.example.akgun.odev.insan_kaynaklari.controller;

import java.util.List;

import com.example.akgun.odev.insan_kaynaklari.entites.Candidate;

public interface ICandidateController {
	
	public Candidate saveCandidate(Candidate candidate);
	
	public List<Candidate> getAll();
	
	public boolean updateCandidate(Long id, Candidate candidate);
	
	public void deleteCandidate(Long id);
}
