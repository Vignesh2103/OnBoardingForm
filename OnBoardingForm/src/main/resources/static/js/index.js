// Function to create Aadhar section dynamically
function createAadharSection() {
    var aadharSection = `
    <section>
  <div id="aadhar" class="form-group my-4">
    <label for="aadhar-file">Aadhar Card:</label>
    <div class="input-group">
      <input type="file"  id="aadhar-file" name="aadhar-file">
      <div class="input-group-append">
        <button class="btn btn-sm btn-danger" onclick="removeDocument('aadhar')">Remove Document</button>
      </div>
      <div class="input-group-append">
        <button class="btn btn-sm btn-danger ml-2" onclick="removeField('aadhar')">Remove Field</button>
      </div>
    </div>
  </div>
</section>


    `;
    document.getElementById("aadhar-section").innerHTML = aadharSection;
  }

  function  createPanSection() {
    var panSection = `
    <section>
  <div id="pan" class="form-group my-4">
    <label for="pan-file">Pan Card:</label>
    <div class="input-group">
      <input type="file"  id="pan-file" name="pan-file">
      <div class="input-group-append">
        <button class="btn btn-sm btn-danger" onclick="removeDocument('pan')">Remove Document</button>
      </div>
      <div class="input-group-append">
        <button class="btn btn-sm btn-danger ml-2" onclick="removeField('pan')">Remove Field</button>
      </div>
    </div>
  </div>
</section>


    `;
    document.getElementById("pan-section").innerHTML = panSection;
  }

  function createResumeSection() {
    var resumeSection = `
    <section>
  <div id="resume" class="form-group my-4">
    <label for="resume-file">Resume Card:</label>
    <div class="input-group">
      <input type="file"  id="resume-file" name="resume-file">
      <div class="input-group-append">
        <button class="btn btn-sm btn-danger" onclick="removeDocument('resume')">Remove Document</button>
      </div>
      <div class="input-group-append">
        <button class="btn btn-sm btn-danger ml-2" onclick="removeField('resume')">Remove Field</button>
      </div>
    </div>
  </div>
</section>


    `;
    document.getElementById("resume-section").innerHTML = resumeSection;

    
  }

  function createPassportSection() {
    var passPortSection = `
    <section>
  <div id="passport" class="form-group my-4">
    <label for="passport-file">Passport Card:</label>
    <div class="input-group">
      <input type="file"  id="passport-file" name="passport-file">
      <div class="input-group-append">
        <button class="btn btn-sm btn-danger" onclick="removeDocument('passport')">Remove Document</button>
      </div>
      <div class="input-group-append">
        <button class="btn btn-sm btn-danger ml-2" onclick="removeField('passport')">Remove Field</button>
      </div>
    </div>
  </div>
</section>


    `;
    document.getElementById("passport-section").innerHTML = passPortSection;
  }
  

  function createDrivinglicenseSection() {
    var drivingLicenseSection = `
    <section>
  <div id="driving_license" class="form-group my-4">
    <label for="driving_license-file">Driving License Card:</label>
    <div class="input-group">
      <input type="file"  id="driving_license-file" name="driving_license-file">
      <div class="input-group-append">
        <button class="btn btn-sm btn-danger" onclick="removeDocument('driving_license')">Remove Document</button>
      </div>
      <div class="input-group-append">
        <button class="btn btn-sm btn-danger ml-2" onclick="removeField('driving_license')">Remove Field</button>
      </div>
    </div>
  </div>
</section>


    `;
    document.getElementById("driving_license-section").innerHTML = drivingLicenseSection;
  }
  // Function to add selected document dynamically
  function addDocument() {
    var documentType = document.getElementById("document").value;
    switch (documentType) {
        case "aadhar":
            createAadharSection();
            break;
        case "pan":
            createPanSection();
            break;
        case "resume":
            createResumeSection();
            break;
        case "passport":
            createPassportSection();
            break;
        case "driving_license":
            createDrivinglicenseSection();
            break;
  
      // Add more cases for other document types
    }
  }
  
  // Function to remove selected document
  function removeField(documentType) {
    switch (documentType) {
        case "aadhar":
            document.getElementById("aadhar-section").innerHTML = "";
            break;
        case "pan":
            document.getElementById("pan-section").innerHTML = "";
            break;
        case "resume":
            document.getElementById("resume-section").innerHTML = "";
            break;
        case "passport":
            document.getElementById("passport-section").innerHTML = "";
            break;
        case "driving_license":
            document.getElementById("driving_license-section").innerHTML = "";
            break;
        
    

      // Add more cases for other document types
    }
  }

  function removeDocument(documentId) {
    // Get the file input element
    var fileInput = document.getElementById(documentId + '-file');
    // Reset the file input value to clear the selected file
    fileInput.value = null;
  }






function uploadFile() {
  const fileInput = document.getElementById("fileInput");
  const file = fileInput.files[0];
  const xhr = new XMLHttpRequest();
  // const url = "/upload";
  const url = "http://localhost:8080/upload"

  const formData = new FormData();
  formData.append("file", file);

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log("File uploaded successfully");
      } else {
        console.error("Error uploading file");
      }
    }
  };

  xhr.open("POST", url, true);
  xhr.send(formData);
}


function uploadMultiFile() {
  const employeeId = document.getElementById("employee-id").value;
  const employeeMail = document.getElementById("employee-mail").value;
  const employeeName = document.getElementById("employee-name").value;

  // Create a new FormData object
  const formData = new FormData();

  // Add the employee details to the FormData object
  formData.append("employeeId", employeeId);
  formData.append("employeeMail", employeeMail);
  formData.append("employeeName", employeeName);

  // Add the selected files to the FormData object
  const aadharFiles = document.getElementById("aadhar-file");
  if (aadharFiles) {
    for (let i = 0; i < aadharFiles.files.length; i++) {
      formData.append("aadharFile", aadharFiles.files[i]);
    }
  }

  const panFiles = document.getElementById("pan-file");
  if (panFiles) {
    for (let i = 0; i < panFiles.files.length; i++) {
      formData.append("panFile", panFiles.files[i]);
    }
  }

  const resumeFiles = document.getElementById("resume-file");
  if (resumeFiles) {
    for (let i = 0; i < resumeFiles.files.length; i++) {
      formData.append("resumeFile", resumeFiles.files[i]);
    }
  }

  const passportFiles = document.getElementById("passport-file");
  if (passportFiles) {
    for (let i = 0; i < passportFiles.files.length; i++) {
      formData.append("passportFile", passportFiles.files[i]);
    }
  }

  const drivingLicenseFiles = document.getElementById("driving_license-file");
  if (drivingLicenseFiles) {
    for (let i = 0; i < drivingLicenseFiles.files.length; i++) {
      formData.append("drivingLicenseFile", drivingLicenseFiles.files[i]);
    }
  }

  // Send the FormData object to the server using XMLHttpRequest
  const xhr = new XMLHttpRequest();
  const url = "http://localhost:8080/upload"

  // xhr.open("POST", "/upload");
  // xhr.onload = function () {
  //   if (xhr.status === 200) {
  //     console.log("Files uploaded successfully");
  //   } else {
  //     console.error("Error uploading files");
  //   }
  // };
  // xhr.send(formData);


  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log("File uploaded successfully");
        alert("File uploaded successfully");
      } else {
        console.error("Error uploading file");
        alert("Error uploading file");
      }
    }
  };

  xhr.open("POST", url, true);
  xhr.send(formData);
}

