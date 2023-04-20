package com.kgisl.login.Repositry;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kgisl.login.Model.Student;


@Repository
public interface StudentRepositry extends JpaRepository<Student, Long>{
    
}
