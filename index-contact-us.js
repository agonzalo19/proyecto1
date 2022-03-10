// Post del formulario

async function postWithFetch() {
    const data = {
      fullname: document.querySelector(".fullname").value,
      email: document.querySelector(".email-input").value ,
      phone: document.querySelector(".phone-input").value,
      message: document.querySelector(".message-input").value,
    };

    const res = await fetch("http://localhost:3000/messages", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const finalRes = await res.json();
    console.log(finalRes);
  }

  document.querySelector(".submit").addEventListener("click", async () => {
      await postWithFetch();
  });