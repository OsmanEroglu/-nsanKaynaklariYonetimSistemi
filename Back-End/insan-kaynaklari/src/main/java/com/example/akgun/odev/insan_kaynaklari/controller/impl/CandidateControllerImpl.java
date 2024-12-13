package com.example.akgun.odev.insan_kaynaklari.controller.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.akgun.odev.insan_kaynaklari.controller.ICandidateController;
import com.example.akgun.odev.insan_kaynaklari.entites.Candidate;
import com.example.akgun.odev.insan_kaynaklari.services.ICandidateService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api")
public class CandidateControllerImpl implements ICandidateController {


	@Autowired
	private ICandidateService candidateService;

	@PostMapping("/candidates")
	@Override
	public Candidate saveCandidate(@RequestBody Candidate candidate) {
		return candidateService.saveCandidate(candidate);
	}

	@GetMapping("/candidates")
	@Override
	public List<Candidate> getAll() {
		return candidateService.getAll();
	}

	@PutMapping("/candidates/{id}")
	@Override
	public boolean updateCandidate(@PathVariable(name = "id", required = true) Long id,
			@RequestBody Candidate candidate) {
		return candidateService.updateCandidate(id, candidate);
	}

	@DeleteMapping("/candidates/{id}")
	@Override
	public void deleteCandidate(@PathVariable(name = "id", required = true) Long id) {
		candidateService.deleteCandidate(id);
	}
}
