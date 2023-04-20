package com.kgisl.OnBoardingForm;

import org.apache.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.util.MultiValueMap;
import org.springframework.util.StringUtils; // Add import for StringUtils from Spring Framework

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.stream.Collectors;

@RestController
public class FileUploadController {

    // @RequestMapping("/index")
    // public String show(){
    // return "index";
    // }

    @RequestMapping(value = "/index")
    public String index() {

        InputStream inputStream = getClass().getResourceAsStream("/templates/html/index.html");

        return new BufferedReader(new InputStreamReader(inputStream)).lines().collect(Collectors.joining("\n"));
    }

    // @PostMapping("/upload")
    // public ResponseEntity<?> uploadFile(@RequestParam("file") MultipartFile file)
    // {
    // try {
    // // Get the file name and save it to the server path
    // String fileName = StringUtils.cleanPath(file.getOriginalFilename());
    // Path path = Paths.get("D:/Vignesh/uploads/" + fileName);
    // Files.copy(file.getInputStream(), path, StandardCopyOption.REPLACE_EXISTING);
    // return ResponseEntity.ok("File uploaded successfully");
    // } catch (IOException e) {
    // e.printStackTrace();
    // return ResponseEntity.status(HttpStatus.SC_INTERNAL_SERVER_ERROR)
    // .body("Error uploading file: " + e.getMessage());
    // }
    // }

    @PostMapping("/upload")
    public ResponseEntity<?> uploadFiles(@RequestParam(name = "employee-id", required = false, defaultValue = "default") String employeeId,
            @RequestParam(name = "employee-mail",required = false, defaultValue = "default") String employeeMail,
            @RequestParam(name = "employee-name", required = false, defaultValue = "default") String employeeName,
            @RequestParam MultiValueMap<String, MultipartFile> files) {
    
        try {
            // Get the file names and save them to the server path
            for (String key : files.keySet()) {
                for (MultipartFile file : files.get(key)) {
                    String fileName = StringUtils.cleanPath(file.getOriginalFilename());
                    Path path = Paths.get("D:/Vignesh/uploads/" + fileName);
                    Files.copy(file.getInputStream(), path, StandardCopyOption.REPLACE_EXISTING);
                }
            }
            return ResponseEntity.ok("Files uploaded successfully");
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.SC_INTERNAL_SERVER_ERROR)
                    .body("Error uploading files: " + e.getMessage());
        }
    }
    

}
