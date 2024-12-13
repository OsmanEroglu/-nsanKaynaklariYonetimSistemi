package com.example.akgun.odev.insan_kaynaklari.entites;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.*;

@Entity
@Table(name = "candidate")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Candidate {

	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "first_name")
	private String firstName;

	@Column(name = "last_name")
	private String lastName;

	@Column(name = "position")
	private String position;

	@Column(name = "military_status")
	private String militaryStatus;

	@JsonFormat(pattern = "dd-MM-yyyy")
	@Column(name = "notice_period")
	private int noticePeriod;

	@Column(name = "phone")
	private String phone;

	@Column(name = "email")
	private String email;

	@Column(name = "cv")
	private String cv;

}
