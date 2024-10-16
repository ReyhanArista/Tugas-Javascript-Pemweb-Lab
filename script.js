    const root = document.getElementsByClassName("root")[0];

    window.onload = () => {
        alert("Selamat datang di website! Silakan isi form di bawah.");
    };

    const headerWrp = document.createElement("div");
    headerWrp.classList.add("header-wrapper");

    const header = document.createElement("header");
    header.setAttribute("id", "header");

    const judul = document.createElement("h1");
    judul.setAttribute("class", "judul");
    judul.innerText = "Tugas-2 Praktikum Pemrograman Web";

    root.appendChild(headerWrp);
    headerWrp.appendChild(header);
    header.appendChild(judul);



    const questWrp = document.createElement("form");
    questWrp.classList.add("quest-wrapper");
    questWrp.classList.add("form-border");

    function createFormGroup(labelText, inputType, inputValue = '', readOnly = false, classInput) {
        const formGroup = document.createElement("div");
        formGroup.classList.add("form-group");
    
        const label = document.createElement("label");
        label.innerText = labelText;
        formGroup.appendChild(label);
        label.classList.add("form-label");
    
        const input = document.createElement("input");
        input.setAttribute("type", inputType);
        input.setAttribute("value", inputValue);
        input.classList.add("form-control"); 
        input.classList.add(classInput);
        input.setAttribute("name", labelText);
        
    
        if (readOnly) {
            input.setAttribute("readonly", "readonly");
        }
    
        formGroup.appendChild(input);
        return formGroup;
    }


    const usernameGroup = createFormGroup("Username", "text", "", false,"input-name");
    const nimGroup = createFormGroup("NIM", "text", "", false,"input-name"); 
    const komGroup = createFormGroup("KOM", "text", "", false,"input-name"); 
    const uploadGroup = createFormGroup("Upload Photo", "file", "input-name");

    questWrp.appendChild(usernameGroup);
    questWrp.appendChild(nimGroup);
    questWrp.appendChild(komGroup);
    questWrp.appendChild(uploadGroup);


    const submitBtn = document.createElement("button");
    submitBtn.innerText = "Submit";
    submitBtn.classList.add("submit-btn");

    
    
    const outputDiv = document.createElement("div");
    outputDiv.classList.add("output-container");
    outputDiv.style.display = 'none';

    const image = document.createElement("img");
    image.classList.add("gambar");

    root.appendChild(outputDiv);
    questWrp.appendChild(submitBtn);
    root.appendChild(questWrp);

    
    questWrp.addEventListener("submit", (e) => {
        e.preventDefault();
        window.alert(
          `form berhasil disubmit`
        );

        const formData = new FormData(e.target)

        const username = usernameGroup.querySelector("input").value;
        const nim = nimGroup.querySelector("input").value;
        const kom = komGroup.querySelector("input").value;
        const upload = formData.get("Upload Photo");
        console.log(upload)


        if(upload) {
            const reader = new FileReader();
            
            reader.onload = (e) => {
                image.src = reader.result
                console.log(reader.result)
            }
            
            reader.readAsDataURL(upload)
        }
        
        const paragraf = document.createElement("p");
        paragraf.innerText = `Username: ${username}`

        const paragraf1 = document.createElement("p");
        paragraf1.innerText = `NIM : ${nim}`

        const paragraf2 = document.createElement("p");
        paragraf2.innerText = `KOM : ${kom}`

        outputDiv.append(image, paragraf, paragraf1, paragraf2)

        outputDiv.style.display = 'block'; 
    });