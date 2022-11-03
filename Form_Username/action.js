const scriptUrl = "https://script.google.com/macros/s/AKfycbxiY8elpU_iSNvVsJRKrCao4LLLNwE837Yo0Xftmkk4HCqcdclCicJ_mciAGX6RMB_D/exec";
let form = document.querySelector("form");
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            document.querySelector("#sub").value = "Submiting..";
            let data = new FormData(form);
            fetch(scriptUrl, {
                    method: "POST",
                    body: data
                })
                .then(res => res.text())
                .then(data => {
                    document.querySelector("#msg").innerHTML = data;
                    document.querySelector("#sub").value = "Submit"
                });
        })