const formRef = document.querySelector("form.login-form");

formRef.addEventListener("submit", (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Всі поля повинні бути заповнен!");

    return;
  }

  console.log({ email: email.value, password: password.value });

  event.currentTarget.reset();

  //   const formData = new FormData(event.currentTarget);

  //   formData.forEach((value, name) => {
  //     console.log(`${name}: ${value}`);
  //   });
});
