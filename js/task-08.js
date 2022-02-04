const form = document.querySelector(".login-form");
const mail = document.querySelector(".mail");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const mail = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  const formData = {
    mail,
    password,
  };

  if (mail === "") {
    alert("写一封电子邮件");
  } else if (password === "") {
    alert("输入密码");
  } else {
    const formData = new FormData(event.currentTarget);
    formData.forEach((value, name) => {
      console.log(value);
      console.log(name);
      form.reset();
    });
  }
}
