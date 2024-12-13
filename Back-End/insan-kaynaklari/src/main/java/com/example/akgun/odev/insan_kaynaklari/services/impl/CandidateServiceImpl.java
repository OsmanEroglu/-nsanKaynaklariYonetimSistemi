package com.example.akgun.odev.insan_kaynaklari.services.impl;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.akgun.odev.insan_kaynaklari.entites.Candidate;
import com.example.akgun.odev.insan_kaynaklari.repository.ICandidateRepository;
import com.example.akgun.odev.insan_kaynaklari.services.ICandidateService;

@Service
public class CandidateServiceImpl implements ICandidateService {

	@Autowired
	private ICandidateRepository candidateRepository;
	private boolean firstStart = true;

	@Override
	public Candidate saveCandidate(Candidate candidate) {

		return candidateRepository.save(candidate);
	}

	@Override
	public boolean updateCandidate(Long id, Candidate candidate) {

		Optional<Candidate> optionalCandidate = candidateRepository.findById(id);
		if (optionalCandidate.isPresent()) {
			Candidate savedCandidate = optionalCandidate.get();
			BeanUtils.copyProperties(candidate, savedCandidate);
			saveCandidate(savedCandidate);
		}

		return true;
	}

	@Override
	public List<Candidate> getAll() {
		List<Candidate> candidateList = candidateRepository.findAll();
		
		if (this.firstStart && (Objects.isNull(candidateList) || candidateList.isEmpty())) {
			addDataForFirstStartup();
			candidateList = candidateRepository.findAll();
		}

		return candidateList;
	}

	@Override
	public void deleteCandidate(Long id) {
		candidateRepository.deleteById(id);

	}

	private void addDataForFirstStartup() {

		Candidate candidate = new Candidate(null, "Osman", "Eroğlu", "Yazılım Mühendisi", "Tamamladı", 8, "05073648831",
				"muhammedosman.eroglu@gmail.com", ".\\Belgeler\\osmanCV");
		saveCandidate(candidate);

		candidate = new Candidate(null, "Enes", "Karakaya", "Sistem Mühendisi", "Muaf", 12, "05454581125",
				"enes.karakaya@gmail.com", ".\\Belgeler\\enesCV");
		saveCandidate(candidate);

		candidate = new Candidate(null, "Alp", "Şahin", "Veritabanı Yöneticisi", "Muaf", 3, "05111111111",
				"alp.sahin@gmail.com", ".\\Belgeler\\alpCV");
		saveCandidate(candidate);

		candidate = new Candidate(null, "Onur", "Yiğitbaşı", "Yazılım Mühendisi", "Tecilli", 12, "05324567898",
				"onur.yigitbasi@gmail.com", ".\\Belgeler\\onurCV");
		saveCandidate(candidate);

		candidate = new Candidate(null, "İsmail", "Aslan", "Sistem Mühendisi", "Tecilli", 8, "05954831596",
				"ismail.aslan@gmail.com", ".\\Belgeler\\ismailCV");
		saveCandidate(candidate);

		this.firstStart = false;
	}

}
