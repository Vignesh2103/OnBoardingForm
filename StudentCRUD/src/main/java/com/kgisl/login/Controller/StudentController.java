package com.kgisl.login.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kgisl.login.Repositry.StudentRepositry;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

import com.kgisl.login.Exception.ResourceNotFoundException;
import com.kgisl.login.Model.Student;

import java.util.*;

@CrossOrigin(origins = "*")

@RestController
@RequestMapping("/students")
public class StudentController {

    @Autowired
    private StudentRepositry studentRepositry;

    @GetMapping("")
    public List<Student> getAllStudents(){
        return studentRepositry.findAll();
    }
    
    @PostMapping("")
    public Student createStudent(@RequestBody Student student){
        return studentRepositry.save(student);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable Long id){
        Student student = studentRepositry.findById(id).orElseThrow(() -> new ResourceNotFoundException("Student not exixting with id "+ id));
        return ResponseEntity.ok(student);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Student> updateStudent(@PathVariable Long id, @RequestBody Student studentDetails){
        Student student = studentRepositry.findById(id).orElseThrow(() -> new ResourceNotFoundException("Student not exixting with id"+id));
        
        student.setFirstName(studentDetails.getFirstName());
        student.setLastName(studentDetails.getLastName());
        student.setEmailId(studentDetails.getEmailId());
        student.setPassword(studentDetails.getPassword());
        student.setAddress(studentDetails.getAddress());

        Student updateStudent = studentRepositry.save(student);
        return ResponseEntity.ok(updateStudent);
    }

    @DeleteMapping("/{id}")  
    public ResponseEntity<Map<String, Boolean>> deleteStudent(@PathVariable Long id){
        Student student = studentRepositry.findById(id).orElseThrow(() -> new ResourceNotFoundException("Student not Exixting with id"+id));

        studentRepositry.delete(student);
        Map<String, Boolean> response = new HashMap<>();
        response.put("Deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);

    }
}
